(function () {
  let rect;
  let isDown;
  let origX;
  let origY;
  let hasFocus = true;

  const RectangleTransformation = Darkroom.Transformation.extend({
    applyTransformation(canvas, image, next) {
      const snapshot = new Image();
      snapshot.onload = function () {
        if (this.height < 1 || this.width < 1) { return; }
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
          hasBorders: false,
        });

        // Add image
        canvas.add(imgInstance);

        next(imgInstance);
      };

      const newRect = this.options.rectangle;
      const scaleX = this.options.originalWidth / canvas.getWidth();
      const scaleY = this.options.originalHeight / canvas.getHeight();
      newRect.set({ scaleX: 1 / scaleX, scaleY: 1 / scaleY });
      canvas.add(newRect);
      canvas.renderAll();
      snapshot.src = canvas.toDataURL();
    },
  });

  Darkroom.plugins.rectangle = Darkroom.Plugin.extend({
    rectangleZone: null,

    initialize() {
      const buttonGroup = this.darkroom.toolbar.createButtonGroup();

      this.rectangleButton = buttonGroup.createButton({
        image: "rectangle",
        tooltip: "Draw",
      });

      this.darkroom.canvas.on("mouse:down", this.onMouseDown.bind(this));
      this.darkroom.canvas.on("mouse:move", this.onMouseMove.bind(this));
      this.darkroom.canvas.on("mouse:up", this.handleMouseUp.bind(this));
      this.rectangleButton.addEventListener("click", this.onClick.bind(this));
    },

    clear() {
      this.rectangleButton.active(false);
      hasFocus = true;
      isDown = false;
    },

    onClick() {
      if (!hasFocus) {
        this.rectangleButton.active(false);
        this.darkroom.canvas.defaultCursor = "default";
        hasFocus = true;
        return;
      }
      this.darkroom.clearFocus("rectangle");
      this.rectangleButton.active(true);
      this.darkroom.canvas.defaultCursor = "crosshair";
      hasFocus = false;
    },

    onMouseDown(event) {
      event.e.preventDefault();
      if (hasFocus) return;
      this.darkroom.dispatchEvent("rectangle:begin");
      const canvas = this.darkroom.canvas;
      isDown = true;
      const pointer = canvas.getPointer(event.e);
      origX = pointer.x;
      origY = pointer.y;
      rect = new fabric.Rect({
        left: origX,
        top: origY,
        originX: "left",
        originY: "top",
        width: pointer.x - origX,
        height: pointer.y - origY,
        angle: 0,
        fill: "black",
        transparentCorners: false,
      });
      canvas.add(rect);
    },

    onMouseMove(event) {
      if (isDown) {
        this.darkroom.dispatchEvent("rectangle:update");
        const canvas = this.darkroom.canvas;
        const pointer = canvas.getPointer(event.e);

        if (origX > pointer.x) {
          rect.set({
            left: Math.abs(pointer.x),
          });
        }
        if (origY > pointer.y) {
          rect.set({
            top: Math.abs(pointer.y),
          });
        }

        rect.set({
          width: Math.abs(origX - pointer.x),
        });
        rect.set({
          height: Math.abs(origY - pointer.y),
        });
        canvas.renderAll();
      }
    },

    handleMouseUp() {
      if (hasFocus) return;
      const canvas = this.darkroom.canvas;
      isDown = false;
      this.darkroom.dispatchEvent("rectangle:end");
      rect.left -= this.darkroom.options.left;
      rect.top -= this.darkroom.options.top;
      this.darkroom.applyTransformation(new RectangleTransformation({
        originalWidth: canvas.getWidth(),
        originalHeight: canvas.getHeight(),
        rectangle: rect,
      }));
    },
  });
}());
