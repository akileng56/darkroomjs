(function () {
  'use strict';

  var rect, isDown, origX, origY;
  var hasFocus = true;

  var RectangleTransformation = Darkroom.Transformation.extend({
    applyTransformation: function (canvas, image, next) {
      var snapshot = new Image();
      snapshot.onload = function () {
        if (height < 1 || width < 1)
          return;

        var imgInstance = new fabric.Image(this, {
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

        var width = this.width;
        var height = this.height;

        // Add image
        canvas.add(imgInstance);

        next(imgInstance);

      };

      var viewport = Darkroom.Utils.computeImageViewPort(image);
      var width = viewport.width;
      var height = viewport.height;

      var newRect = this.options.rectangle;
      var scaleX = this.options.originalWidth / canvas.getWidth();
      var scaleY = this.options.originalHeight / canvas.getHeight();
      newRect.set({ scaleX: 1 / scaleX, scaleY: 1 / scaleY });
      canvas.add(newRect);
      canvas.renderAll();
      snapshot.src = canvas.toDataURL();
    }
  });

  Darkroom.plugins['rectangle'] = Darkroom.Plugin.extend({
    rectangleZone: null,

    initialize: function InitializeDarkroomRectanglePlugin() {
      var buttonGroup = this.darkroom.toolbar.createButtonGroup();

      this.rectangleButton = buttonGroup.createButton({
        image: 'rectangle',
        tooltip: 'Draw'
      });

      this.darkroom.canvas.on('mouse:down', this.onMouseDown.bind(this));
      this.darkroom.canvas.on('mouse:move', this.onMouseMove.bind(this));
      this.darkroom.canvas.on('mouse:up', this.handleMouseUp.bind(this));
      this.rectangleButton.addEventListener('click', this.onClick.bind(this));
    },

    onClick: function (event) {
      if (!hasFocus) {
        this.rectangleButton.active(false);
        this.darkroom.canvas.defaultCursor = 'default';
        hasFocus = true;
        return;
      }
      this.rectangleButton.active(true);
      this.darkroom.canvas.defaultCursor = 'crosshair';
      hasFocus = false;
    },

    onMouseDown: function (event) {
      if (hasFocus) return;
      this.darkroom.dispatchEvent('rectangle:begin');
      var canvas = this.darkroom.canvas;
      isDown = true;
      var pointer = canvas.getPointer(event.e);
      origX = pointer.x;
      origY = pointer.y;
      rect = new fabric.Rect({
        left: origX,
        top: origY,
        originX: 'left',
        originY: 'top',
        width: pointer.x - origX,
        height: pointer.y - origY,
        angle: 0,
        fill: "white",
        transparentCorners: false
      });
      canvas.add(rect);
    },

    onMouseMove: function (event) {
      if (isDown) {
        this.darkroom.dispatchEvent('rectangle:update');
        var canvas = this.darkroom.canvas;
        var pointer = canvas.getPointer(event.e);

        if (origX > pointer.x) {
          rect.set({
            left: Math.abs(pointer.x)
          });
        }
        if (origY > pointer.y) {
          rect.set({
            top: Math.abs(pointer.y)
          });
        }

        rect.set({
          width: Math.abs(origX - pointer.x)
        });
        rect.set({
          height: Math.abs(origY - pointer.y)
        });
        canvas.renderAll();
      }
    },

    handleMouseUp: function (event) {
      if (hasFocus) return;
      var canvas = this.darkroom.canvas;
      isDown = false;
      this.darkroom.dispatchEvent('rectangle:end');
      canvas.remove(rect);
      var canvasOffset = canvas.calcOffset();
      this.darkroom.applyTransformation( new RectangleTransformation({
        offSet: canvasOffset,
        originalWidth: canvas.getWidth(),
        originalHeight: canvas.getHeight(),
        rectangle: rect
      }));
    }
  });

})();
