(function () {
  fabric.Image.prototype.strokeWidth = 0;
  const Pencil = Darkroom.Transformation.extend({
    applyTransformation: function(canvas, image, next) {
      // Snapshot the image delimited by the crop zone
      const snapshot = new Image();
      snapshot.onload = function () {
        // Validate image
        if (this.height < 1 || this.width < 1) {
          return;
        }

        const imgInstance = new fabric.Image(this, {
          // options to make the image static
          selectable: false,
          evented: false,
          lockMovementX: true,
          lockMovementY: true,
          lockRotation: true,
          lockScalingX: true,
          lockScalingY: true,
          lockUniScaling: true,
          hasControls: false,
          hasBorders: false
        });

        // Add image
        canvas.add(imgInstance);

        next(imgInstance);
      };

      canvas.add(this.options.pencilZone);
      canvas.renderAll();
      snapshot.src = canvas.toDataURL();
    }
  });

  const PencilZone = fabric.util.createClass(fabric.Object, {
    type: "pencilObject",

    initialize: function(options) {
      this.options = options || {};
      this.left = options.left || 0;
      this.top = options.top || 0;
      this.width = options.width;
      this.height = options.height;
      this.originalWidth = this.width;
      this.originalHeight = this.height;
      this.stroke = options.stroke;
      this.size = options.size;
      this.path = null;
      this.cX = -this.getWidth() / 2;
      this.cY = -this.getHeight() / 2;
      this.callSuper("initialize", options);
    },

    _applyScaling: function(w, h) {
      const scaleX = this.getWidth() / w;
      const scaleY = this.getHeight() / h;
      this.set({
        scaleX: this.scaleX / scaleX,
        scaleY: this.scaleY / scaleY
      });
    },

    _render: function(ctx) {
      this._draw(ctx);
    },

    _draw: function(ctx) {
      if (ctx && this.path && this.path.length > 0) {
        ctx.lineJoin = "round";
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(
          (this.cX + this.path[0].x),
          (this.cY + this.path[0].y)
        );

        for (let x = 0; x < this.path.length; x += 1) {
          const drawX = (this.cX + this.path[x].x);
          const drawY = (this.cY + this.path[x].y);
          ctx.lineTo(drawX, drawY);
        }


        ctx.strokeStyle = this.stroke;
        ctx.lineWidth = this.size;
        ctx.stroke();
      }
    },

    clone: function() {
      return new PencilZone({
        stroke: this.stroke,
        size: this.size,
        width: this.width,
        height: this.height,
        selectable: false,
        lockRotation: true,
        evented: false,
        lockMovementX: true,
        lockMovementY: true,
        lockScalingX: true,
        lockScalingY: true,
        lockUniScaling: true,
        hasControls: false,
        hasBorders: false
      });
    }
  });

  Darkroom.plugins.pencil = Darkroom.Plugin.extend({
    pencilMode: false,
    pencilZone: null,
    mouseDown: false,
    size: 30,
    defaults: {
      stroke: "black",
      size: 30
    },

    initialize: function() {
      const buttonGroup = this.darkroom.toolbar.createButtonGroup();

      this.pencilButton = buttonGroup.createButton({
        image: "pencil",
        tooltip: "Draw"
      });

      this.path = [];
      this.width = this.darkroom.canvas.width;
      this.height = this.darkroom.canvas.height;
      this.size = this.options.size;
      this.stroke = this.options.stroke;

      this.darkroom.canvas.on("mouse:down", this.onMouseDown.bind(this));
      this.darkroom.canvas.on("mouse:move", this.onMouseMove.bind(this));
      this.darkroom.canvas.on("mouse:up", this.onMouseUp.bind(this));
      this.pencilButton.addEventListener("click", this.onClick.bind(this));
    },

    clear: function() {
      if (this.hasFocus()) {
        this.removeFocus();
      }
    },

    hasFocus: function() {
      return this.pencilZone !== null;
    },

    onClick: function() {
      if (!this.hasFocus()) {
        this.requireFocus();
        return;
      }
      this.removeFocus();
    },

    onMouseDown: function(event) {
      event.e.preventDefault();
      if (!this.hasFocus()) {
        return;
      }

      this.darkroom.dispatchEvent("pencil:begin");
      this.mouseDown = true;
      this.path.push(this.getMousePosition(this.canvas, event));
      this.renderZone();
    },

    onMouseUp: function(event) {
      if (!this.hasFocus()) {
        return;
      }

      if (this.mouseDown) {
        this.darkroom.dispatchEvent("pencil:end");
        this.mouseDown = false;
        const mousePos = this.getMousePosition(this.canvas, event);
        this.path.push(mousePos);
        this.renderZone();
        this.applyPencilPath();
        this.path = [];
      }
    },

    onMouseMove: function(event) {
      if (!this.hasFocus()) {
        return;
      }

      if (this.mouseDown) {
        const mousePos = this.getMousePosition(this.canvas, event);
        this.path.push(mousePos);
        this.renderZone();
      }
    },

    removeFocus: function() {
      this.darkroom.dispatchEvent("pencil:disabled");
      this.pencilButton.active(false);
      this.pencilMode = false;
      this.darkroom.canvas.defaultCursor = "default";
      if (this.pencilZone) {
        this.pencilZone.remove();
        this.pencilZone = null;
      }
    },

    requireFocus: function() {
      this.darkroom.clearFocus("pencil");
      this.darkroom.dispatchEvent("pencil:enabled");
      this.pencilMode = true;
      this.pencilButton.active(true);

      this.pencilZone = this.newZone();

      this.darkroom.canvas.add(this.pencilZone);
      this.darkroom.canvas.defaultCursor = "crosshair";
    },

    getMousePosition: function(canvas, event) {
      var canvas = this.darkroom.canvas;
      const rect = canvas.lowerCanvasEl.getBoundingClientRect();
      const pointer = canvas.getPointer(event.e);
      return {
        x: pointer.x,
        y: pointer.y,
        cx: event.e.clientX - rect.left,
        cy: event.e.clientY - rect.top,
        sx: event.e.screenX,
        sy: event.e.screenY
      };
    },

    newZone: function() {
      this.path = [];
      const stroke = this.stroke;
      const size = this.size;
      const width = this.darkroom.canvas.getWidth();
      const height = this.darkroom.canvas.getHeight();
      const zone = new PencilZone({
        stroke: stroke,
        size: size,
        width: width,
        height: height,
        selectable: false,
        lockRotation: true,
        evented: false,
        lockMovementX: true,
        lockMovementY: true,
        lockScalingX: true,
        lockScalingY: true,
        lockUniScaling: true,
        hasControls: false,
        hasBorders: false
      });

      return zone;
    },

    applyPencilPath: function() {
      if (!this.hasFocus()) { return; }

      // Avoid croping empty zone
      if (this.path === null || this.path.length === 0) { return; }

      // Apply crop transformation.
      // Make sure to use relative dimension since the crop will be applied
      // on the source image.
      const zone = this.pencilZone.clone();
      zone.path = this.path;
      zone.left -= this.darkroom.options.left;
      zone.top -= this.darkroom.options.top;
      this.darkroom.applyTransformation(new Pencil({
        pencilZone: zone
      }));
      this.darkroom.canvas.add(this.pencilZone);
    },

    renderZone: function() {
      if (this.path && this.path.length > 0) {
        this.darkroom.dispatchEvent("pencil:update");
        this.pencilZone.path = this.path;
      }
      this.darkroom.canvas.bringToFront(this.pencilZone);
    }

  });
}());
