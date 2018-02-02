(function () {
  'use strict';
  var maxZoom = 2;

  Darkroom.plugins['zoom'] = Darkroom.Plugin.extend({

    initialize: function InitDarkroomBoxPlugin() {
      var buttonGroup = this.darkroom.toolbar.createButtonGroup();

      this.zoomInButton = buttonGroup.createButton({
        image: 'zoom-in',
        title: 'zoom in'
      });

      this.zoomOutButton = buttonGroup.createButton({
        image: 'zoom-out',
        title: 'zoom out',
        disabled: true
      });

      this.pan = buttonGroup.createButton({
        image: 'hand',
        disabled: true
      });

      this.zoomInButton.addEventListener('click', this.zoomIn.bind(this));
      this.zoomOutButton.addEventListener('click', this.zoomOut.bind(this));
    },

    zoomIn: function () {
      var canvas = this.darkroom.canvas;
      min = canvas.getZoom();
      if (canvas.getZoom() <= maxZoom) {
        canvas.setZoom(canvas.getZoom() * 1.1);
      }
      this.updateButtons();
    },

    zoomOut: function () {
      var canvas = this.darkroom.canvas;
      canvas.setZoom(canvas.getZoom() / 1.1);
    },

    updateButtons: function () {
      var canvas = this.darkroom.canvas;
      var shouldDisable = canvas.getZoom() <= 0;
      this.pan.disable(shouldDisable);
      this.zoomOutButton.disable(shouldDisable);
    }
  });
})();
