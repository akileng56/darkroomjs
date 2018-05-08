(function () {
  fabric.Image.prototype.strokeWidth = 0;
  const Rotation = Darkroom.Transformation.extend({
    applyTransformation: function(canvas, image, next) {
      const angle = (image.getAngle() + this.options.angle) % 360;
      image.rotate(angle);

      const height = Math.abs(image.getWidth() * (Math.sin(angle * Math.PI / 180))) + Math.abs(image.getHeight() * (Math.cos(angle * Math.PI / 180)));
      const width = Math.abs(image.getHeight() * (Math.sin(angle * Math.PI / 180))) + Math.abs(image.getWidth() * (Math.cos(angle * Math.PI / 180)));

      canvas.setWidth(width);
      canvas.setHeight(height);

      canvas.centerObject(image);
      image.setCoords();
      canvas.renderAll();

      next();
    }
  });

  Darkroom.plugins.rotate = Darkroom.Plugin.extend({

    initialize: function() {
      const buttonGroup = this.darkroom.toolbar.createButtonGroup();

      const leftButton = buttonGroup.createButton({
        image: "rotate-left"
      });

      const rightButton = buttonGroup.createButton({
        image: "rotate-right"
      });

      leftButton.addEventListener("click", this.rotateLeft.bind(this));
      rightButton.addEventListener("click", this.rotateRight.bind(this));
    },

    rotateLeft: function() {
      this.rotate(-90);
    },

    rotateRight: function() {
      this.rotate(90);
    },

    rotate: function(angle) {
      this.darkroom.options.left = 0;
      this.darkroom.options.top = 0;
      this.darkroom.applyTransformation(new Rotation({
        angle: angle
      }));
    }

  });
}());
