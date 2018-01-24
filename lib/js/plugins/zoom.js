(function () {
    'use strict';
  
  
    Darkroom.plugins['zoom'] = Darkroom.Plugin.extend({
  
      initialize: function InitDarkroomBoxPlugin() {
        var buttonGroup = this.darkroom.toolbar.createButtonGroup();
  
        var zoomInButton = buttonGroup.createButton({
          image: 'zoom-in',
          title: 'zoom in'
        });

        var zoomOutButton = buttonGroup.createButton({
            image: 'zoom-out',
            title: 'zoom out'
          });
  
          zoomInButton.addEventListener('click', this.zoomIn.bind(this));
          zoomOutButton.addEventListener('click', this.zoomOut.bind(this));
      },
  
      zoomIn: function() {
        var canvas = this.darkroom.canvas;
        canvas.setZoom(canvas.getZoom() * 1.1);
      },

      zoomOut: function() {
        var canvas = this.darkroom.canvas;
        canvas.setZoom(canvas.getZoom() / 1.1);
      }
    });
  
  })();