(function (window, document, Darkroom, fabric) {
  fabric.Image.prototype.strokeWidth = 0;
  Darkroom.plugins.history = Darkroom.Plugin.extend({
    undoTransformations: [],

    initialize() {
      this._initButtons();

      this.darkroom.addEventListener("core:transformation", this._onTranformationApplied.bind(this));
    },

    undo() {
      if (this.darkroom.transformations.length === 0) {
        return;
      }

      const lastTransformation = this.darkroom.transformations.pop();
      this.undoTransformations.unshift(lastTransformation);

      this.darkroom.reinitializeImage();
      this._updateButtons();
    },

    redo() {
      if (this.undoTransformations.length === 0) {
        return;
      }

      const cancelTransformation = this.undoTransformations.shift();
      this.darkroom.transformations.push(cancelTransformation);

      this.darkroom.reinitializeImage();
      this._updateButtons();
    },

    _initButtons() {
      const buttonGroup = this.darkroom.toolbar.createButtonGroup();

      this.backButton = buttonGroup.createButton({
        image: "undo",
        disabled: true
      });

      this.forwardButton = buttonGroup.createButton({
        image: "redo",
        disabled: true
      });

      this.backButton.addEventListener("click", this.undo.bind(this));
      this.forwardButton.addEventListener("click", this.redo.bind(this));

      return this;
    },

    _updateButtons() {
      this.backButton.disable((this.darkroom.transformations.length === 0));
      this.forwardButton.disable((this.undoTransformations.length === 0));
    },

    _onTranformationApplied() {
      this.undoTransformations = [];
      this._updateButtons();
    }
  });
}(window, document, Darkroom, fabric));
