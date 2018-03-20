(function () {
  const maxZoom = 2;
  let minZoom;
  const states = {
    panActive: false,
    panning: false,
    realPan: null
  };
  let origX;
  let origY;

  fabric.Image.prototype.strokeWidth = 0;
  Darkroom.plugins.zoom = Darkroom.Plugin.extend({

    initialize() {
      const buttonGroup = this.darkroom.toolbar.createButtonGroup();

      this.zoomInButton = buttonGroup.createButton({
        image: "zoom-in",
        title: "zoom in"
      });

      this.zoomOutButton = buttonGroup.createButton({
        image: "zoom-out",
        title: "zoom out",
        disabled: true
      });

      this.pan = buttonGroup.createButton({
        image: "hand",
        disabled: true
      });

      this.zoomInButton.addEventListener("click", this.zoomIn.bind(this));
      this.zoomOutButton.addEventListener("click", this.zoomOut.bind(this));
      this.pan.addEventListener("click", this.onPan.bind(this));
      minZoom = this.darkroom.canvas.getZoom();
    },

    clear() {
      states.panActive = false;
      this.pan.active(false);
      states.panning = false;
      this.darkroom.canvas.defaultCursor = "default";
      this.restoreZoomPan();
    },

    onPan() {
      if (arguments.length > 0 && states.panActive) {
        this.clear();
      } else {
        this.darkroom.clearFocus("zoom");
        const canvas = this.darkroom.canvas;
        canvas.on("mouse:down", this.panEnter.bind(this));
        canvas.on("mouse:up", this.panExit.bind(this));
        canvas.on("mouse:move", this._pan.bind(this));
        canvas.defaultCursor = "move";
        states.panActive = true;
        this.pan.active(true);
      }
    },


    panEnter(event) {
      if (states.panActive) {
        states.panning = true;
        origX = event.e.screenX || event.e.touches[0].screenX;
        origY = event.e.screenY || event.e.touches[0].screenY;
      }
    },

    _pan(event) {
      event.e.preventDefault();
      const canvas = this.darkroom.canvas;
      if (states.panning && event) {
        if (event.e.touches) {
          const touches = event.e.touches;
          for (let i = 0; i < touches.length; i += 1) {
            const delta = {
              x: (touches[i].screenX - origX),
              y: (touches[i].screenY - origY)
            };
            origX = touches[i].screenX;
            origY = touches[i].screenY;
            this.doPan(delta);
          }
        } else {
          const delta = {
            x: (event.e.screenX - origX),
            y: (event.e.screenY - origY)
          };
          origX = event.e.screenX;
          origY = event.e.screenY;
          this.doPan(delta);
        }
        canvas.renderAll();
      }
    },

    panExit() {
      if (states.panActive) {
        const options = this.darkroom.options;
        const image = this.darkroom.image;
        states.panning = false;
        options.left = image.left;
        options.top = image.top;
      }
    },

    doPan(delta) {
      const image = this.darkroom.image;
      this.delta = this.constrainPan(delta);
      image.left += delta.x;
      image.top += delta.y;
      image.setCoords();
      states.realPan = {
        x: image.oCoords.tl.x,
        y: image.oCoords.tl.y
      };
    },

    constrainPan(delta) {
      const canvas = this.darkroom.canvas;
      const image = this.darkroom.image;
      const tl = image.oCoords.tl; // top left corner
      const br = image.oCoords.br; // bottom right corner
      if (delta.x > 0) {
        delta.x = ((tl.x + delta.x) > 0) ? 0 : Math.floor(delta.x);
      } else {
        delta.x = Math.ceil(delta.x);
        if ((Math.ceil(br.x) + delta.x) < canvas.width) {
          delta.x = 0;
        }
      }
      if (delta.y > 0) {
        delta.y = ((tl.y + delta.y) > 0) ? 0 : Math.floor(delta.y);
      } else {
        delta.y = Math.ceil(delta.y);
        if ((Math.ceil(br.y) + delta.y) < canvas.height) {
          delta.y = 0;
        }
      }
      return delta;
    },

    restoreZoomPan() {
      if (states.lastScale != null) {
        this.darkroom.image.scale(states.lastScale);
        if (states.realPan != null) {
          this.doPan(states.realPan);
        }
      }
    },

    zoomIn() {
      const canvas = this.darkroom.canvas;
      if (canvas.getZoom() <= maxZoom) {
        canvas.setZoom(canvas.getZoom() * 1.1);
        canvas.renderAll();
      }
      this.onPan();
      this.updateButtons();
    },

    zoomOut() {
      const canvas = this.darkroom.canvas;
      const image = this.darkroom.image;
      if (canvas.getZoom() > minZoom) {
        canvas.setZoom(canvas.getZoom() / 1.1);
        if (this.darkroom.image.oCoords.br.x < this.darkroom.canvas.width) {
          const newLeft = Math.ceil(this.darkroom.canvas.width - this.darkroom.image.oCoords.br.x);
          image.left += newLeft;
          this.darkroom.options.left = this.darkroom.options.left + newLeft;
        }
        if (this.darkroom.image.oCoords.br.y < this.darkroom.canvas.height) {
          const newTop = Math.ceil(this.darkroom.canvas.height - this.darkroom.image.oCoords.br.y);
          image.top += newTop;
          this.darkroom.options.top = this.darkroom.options.top + newTop;
        }
        image.setCoords();
        canvas.renderAll();
        if (canvas.getZoom() >= minZoom) {
          this.onPan();
        }
        this.updateButtons();
      }
    },

    updateButtons() {
      const canvas = this.darkroom.canvas;
      const shouldDisableMinZoom = canvas.getZoom() <= minZoom;
      const shouldDisableMaxZooom = canvas.getZoom() >= maxZoom;
      const shouldEnablePan = canvas.getZoom() > minZoom;
      this.zoomOutButton.disable(shouldDisableMinZoom);
      this.zoomInButton.disable(shouldDisableMaxZooom);
      if (shouldDisableMinZoom) {
        this.darkroom.options.left = 0;
        this.darkroom.options.top = 0;
        this.pan.active(false);
        this.pan.disable(true);
        this.clear();
      }

      if (shouldEnablePan) {
        this.pan.disable(false);
      }
    }
  });
}());
