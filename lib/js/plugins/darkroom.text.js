(function () {
  let hasFocus = false;

  fabric.Image.prototype.strokeWidth = 0;
  const Text = Darkroom.Transformation.extend({
    applyTransformation: function(canvas, image, next) {
      const snapshot = new Image();
      snapshot.onload = function () {
        // Validate image
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
          hasBorders: false
        });

        // Add image
        canvas.add(imgInstance);

        next(imgInstance);
      };

      canvas.add(this.options.text);
      canvas.renderAll();
      snapshot.src = canvas.toDataURL();
    }
  });
  Darkroom.plugins.text = Darkroom.Plugin.extend({
    defaults: {
      text: "Sample Text..."
    },

    initialize: function() {
      const buttonGroup = this.darkroom.toolbar.createButtonGroup();

      this.textButton = buttonGroup.createButton({
        image: "text",
        title: "Add Text"
      });
      this.okButton = buttonGroup.createButton({
        image: "done",
        type: "success",
        hide: true
      });
      this.cancelButton = buttonGroup.createButton({
        image: "close",
        type: "danger",
        hide: true
      });
      this.colorPicker = buttonGroup.createInput({
        image: "color",
        title: "Color Picker",
        value: "#ff0000",
        hide: true
      });

      this.textButton.addEventListener("click", this.addText.bind(this));
      this.okButton.addEventListener("click", this.saveText.bind(this));
      this.colorPicker.addEventListener("change", this.setColor.bind(this));
      this.cancelButton.addEventListener("click", this.releaseFocus.bind(this));
      this.darkroom.canvas.on("mouse:down", this.onMouseDown.bind(this));
      this.darkroom.canvas.on("mouse:move", this.onMouseMove.bind(this));
      this.darkroom.canvas.on("mouse:up", this.handleMouseUp.bind(this));

      this.darkroom.addEventListener("core:transformation", this.releaseFocus.bind(this));
    },

    clear: function() {
      this.textButton.active(false);
      this.darkroom.dispatchEvent("text:end");
      this.textButton.active(false);
      this.okButton.hide(true);
      this.cancelButton.hide(true);
      this.colorPicker.hide(true);
      if (this.newText) {
        this.newText.remove();
      }
      hasFocus = false;
    },

    addText: function() {
      if (hasFocus) {
        this.releaseFocus();
        return;
      }
      hasFocus = true;
      this.darkroom.clearFocus("text");

      this.textButton.active(true);
      this.okButton.hide(false);
      this.cancelButton.hide(false);
      this.colorPicker.hide(false);

      const factor = this.darkroom.image.scaleX;
      const text = new fabric.IText(this.options.text, {
        left: 100 * factor,
        top: 100 * factor,
        fill: "red",
        fontFamily: "Monospace",
        fontSize: 25,
        lockSkewingX: true,
        lockSkewingY: true,
        scaleX: factor,
        scaleY: factor,
        padding: 10
      });

      text.on(this.image = this.darkroom.image, {
        scaling: function() {
          this.factor = this.image.scaleX;

          const obj = this;
          const w = obj.width * obj.scaleX / factor;
          const h = obj.height * obj.scaleY / factor;

          obj.set({
            width: w,
            height: h,
            scaleX: factor,
            scaleY: factor
          });
        }
      });

      this.darkroom.canvas.add(text);
      this.newText = text;
    },

    setColor: function(event) {
      this.setStyle(this, "fill", event.target.value);
    },

    setStyle: function(object, styleName, value) {
      const canvas = this.darkroom.canvas;
      object.newText.fill = value;
      canvas.renderAll();
    },

    saveText: function() {
      this.okButton.hide(true);
      this.cancelButton.hide(true);
      this.colorPicker.hide(true);
      this.textButton.active(false);
      this.newText.hasBorders = false;
      this.newText.hasControls = false;
      this.newText.hasRotatingPoint = false;
      this.newText.selectionColor = "transparent";
      this.newText.abortCursorAnimation();
      this.newText.left -= this.darkroom.options.left;
      this.newText.top -= this.darkroom.options.top;
      this.darkroom.applyTransformation(new Text({
        text: this.newText
      }));
      this.colorPicker.element.value = "#ff0000";
    },

    onMouseDown: function() {
      if (!this.newText) { return; }
      if (this.newText.active) {
        this.isDown = true;
      }
    },

    onMouseMove: function() {
      if (!this.isDown) {
        return;
      }
      const canvas = this.darkroom.canvas;
      canvas.renderAll();
    },

    handleMouseUp: function() {
      this.isDown = false;
    },

    releaseFocus: function() {
      if (this.newText) { this.newText.remove(); }

      this.textButton.active(false);
      this.okButton.hide(true);
      this.cancelButton.hide(true);
      this.colorPicker.hide(true);
      this.colorPicker.element.value = "#ff0000";
      hasFocus = false;
    }
  });
}());
