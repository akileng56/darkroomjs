(function () {
  'use strict';
  var maxZoom = 2;
  var minZoom;
  var states = {
    panActive: false,
    panning: false
  };
  var panning = false;

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
      this.pan.addEventListener('click', this.onPan.bind(this));
      minZoom = this.darkroom.canvas.getZoom();
    },

    clear: function () {
      states.panActive = false;
      states.panning = false;
      this.restoreZoomPan();
    },

    onPan: function () {
      if (panning) {
        panning = false;
      }
      this.darkroom.clearFocus("zoom");
      var canvas = this.darkroom.canvas;
      canvas.on('mouse:down', this.panEnter.bind(this));
      canvas.on('mouse:up', this.panExit.bind(this));
      canvas.on('mouse:move', this._pan.bind(this));
      canvas.defaultCursor = 'move';
      states.panActive = true;
    },

    panEnter: function () {
      if (states.panActive) {
        states.panning = true;
      }
    },

    _pan: function (event) {
      window.event.preventDefault();
      if (states.panning && event && event.e) {
        var canvas = this.darkroom.canvas;
        var delta = {
          x: event.e.movementX,
          y: event.e.movementY
        };
        this.doPan(delta);
        canvas.renderAll();
      }
    },

    panExit: function (delta) {
      if (states.panActive) {
        var canvas = this.darkroom.canvas;
        var options = this.darkroom.options;
        delta = this.constrainPan(delta);
        var image = this.darkroom.image;
        states.panning = false;
        options.left = image.left;
        options.top = image.top;
      }
    },

    doPan: function (delta) {
      var image = this.darkroom.image;
      delta = this.constrainPan(delta);
      image.left = image.left + delta.x;
      image.top = image.top + delta.y;
      image.setCoords();
    },

    constrainPan: function (delta) {
      var canvas = this.darkroom.canvas, image = this.darkroom.image, tl = image.oCoords.tl, // top left corner
        br = image.oCoords.br; // bottom right corner
      if (delta.x > 0) {
        delta.x = ((tl.x + delta.x) > 0) ? 0 : Math.floor(delta.x);
      }
      else {
        delta.x = Math.ceil(delta.x);
        if ((Math.ceil(br.x) + delta.x) < canvas.width) {
          delta.x = 0;
        }
      }
      if (delta.y > 0) {
        delta.y = ((tl.y + delta.y) > 0) ? 0 : Math.floor(delta.y);
      }
      else {
        delta.y = Math.ceil(delta.y);
        if ((Math.ceil(br.y) + delta.y) < canvas.height) {
          delta.y = 0;
        }
      }
      return delta;
    },

    restoreZoomPan: function () {
      if (states.lastScale != null) {
        this.darkroom.image.scale(states.lastScale);
        if (states.realPan != null) {
          this.doPan(states.realPan);
        }
      }
    },

    zoomIn: function () {
      var canvas = this.darkroom.canvas;
      if (canvas.getZoom() <= maxZoom) {
        canvas.setZoom(canvas.getZoom() * 1.1);
        canvas.renderAll();
      }
      this.updateButtons();
    },

    zoomOut: function () {
      var canvas = this.darkroom.canvas;
      var image = this.darkroom.image;
      if (canvas.getZoom() > minZoom) {
        canvas.setZoom(canvas.getZoom() / 1.1);
        if (this.darkroom.image.oCoords.br.x < this.darkroom.canvas.width) {
          var newLeft = Math.ceil(this.darkroom.canvas.width - this.darkroom.image.oCoords.br.x);
          image.left = image.left + newLeft;
          this.darkroom.options.left = this.darkroom.options.left + newLeft;
        }
        if (this.darkroom.image.oCoords.br.y < this.darkroom.canvas.height) {
          var newTop = Math.ceil(this.darkroom.canvas.height - this.darkroom.image.oCoords.br.y);
          image.top = image.top + newTop;
          this.darkroom.options.top = this.darkroom.options.top + newTop;
        }
        image.setCoords();
        canvas.renderAll();
      }
      this.updateButtons();
    },

    updateButtons: function () {
      var canvas = this.darkroom.canvas;
      var shouldDisableMinZoom = canvas.getZoom() <= minZoom;
      var shouldDisableMaxZooom = canvas.getZoom() >= maxZoom;
      this.pan.disable(shouldDisableMinZoom);
      this.zoomOutButton.disable(shouldDisableMinZoom);
      this.zoomInButton.disable(shouldDisableMaxZooom);
      if (shouldDisableMinZoom) {
        this.darkroom.options.left = 0;
        this.darkroom.options.top = 0;
      }
    }
  });
})();
