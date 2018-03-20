(function () {
  fabric.Image.prototype.strokeWidth = 0;
  Darkroom.plugins.save = Darkroom.Plugin.extend({

    defaults: {
      callback() {
        this.darkroom.selfDestroy();
      }
    },

    initialize() {
      const buttonGroup = this.darkroom.toolbar.createButtonGroup();

      this.destroyButton = buttonGroup.createButton({
        image: "save"
      });

      this.destroyButton.addEventListener("click", this.options.callback.bind(this));
    }
  });
}());
