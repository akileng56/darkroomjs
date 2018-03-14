(function () {
  'use strict';

  var ellip, isDown = false,
    origX, origY, hasFocus = true;

    var Circle = Darkroom.Transformation.extend({
      applyTransformation: function (canvas, image, next) {
        var snapshot = new Image();
        snapshot.onload = function () {
          // Validate image
          if (this.height < 1 || this.width < 1)
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
  
        canvas.add(this.options.circle);
        canvas.renderAll();
        snapshot.src = canvas.toDataURL();
      }
    });

  Darkroom.plugins['circle'] = Darkroom.Plugin.extend({

    initialize: function InitializeDarkroomRectanglePlugin() {
      var buttonGroup = this.darkroom.toolbar.createButtonGroup();

      this.circleButton = buttonGroup.createButton({
        image: 'circle',
        tooltip: 'circle'
      });

      this.darkroom.canvas.on('mouse:down', this.onMouseDown.bind(this));
      this.darkroom.canvas.on('mouse:move', this.onMouseMove.bind(this));
      this.darkroom.canvas.on('mouse:up', this.handleMouseUp.bind(this));
      this.circleButton.addEventListener('click', this.onClick.bind(this));
    },

    clear: function () {
      this.circleButton.active(false);
      hasFocus = true;
      isDown = false;
    },

    onClick: function (event) {
      if (!hasFocus) {
        this.circleButton.active(false);
        this.darkroom.canvas.defaultCursor = 'default';
        hasFocus = true;
        return;
      }
      this.darkroom.clearFocus("circle");
      this.circleButton.active(true);
      this.darkroom.canvas.defaultCursor = 'crosshair';
      hasFocus = false;
    },

    onMouseDown: function (event) {
      event.e.preventDefault();
      this.isDown = true;
      if (hasFocus) return;
      var canvas = this.darkroom.canvas;
      isDown = true;
      var pointer = canvas.getPointer(event.e);
      origX = pointer.x;
      origY = pointer.y;
      ellip = new fabric.Ellipse({
        left: pointer.x,
        top: pointer.y,
        stroke: "black",
        fill: 'transparent',
        strokeWidth: "4",
        rx: 0,
        ry: 0
      });
      canvas.add(ellip);
    },

    onMouseMove: function (event) {
      if (!this.isDown) {
        return;
      }
      if (isDown && ellip) {
        this.darkroom.dispatchEvent('circle:update');
        var canvas = this.darkroom.canvas;
        var pointer = canvas.getPointer(event.e);

        if (origX > pointer.x) {
          ellip.set({
            left: Math.abs(pointer.x)
          });
        }

        if (origY > pointer.y) {
          ellip.set({
            top: Math.abs(pointer.y)
          });
        }

        ellip.set({
          rx: Math.abs(origX - pointer.x) / 2
        });
        ellip.set({
          ry: Math.abs(origY - pointer.y) / 2
        });

        ellip.setCoords();
        canvas.renderAll();
      }
    },

    handleMouseUp: function (event) {
      var canvas = this.darkroom.canvas;
      if(hasFocus){return;}
      this.isDown = false;
      var canvasOffset = canvas.calcOffset();
      ellip.left -= this.darkroom.options.left;
      ellip.top -= this.darkroom.options.top;
      this.darkroom.applyTransformation( new Circle({
        circle: ellip
      }));
    }
  });
})();
