(function() {
'use strict';

// Inject SVG icons into the DOM
var element = document.createElement('div');
element.id = 'darkroom-icons';
element.style.height = 0;
element.style.width = 0;
element.style.position = 'absolute';
element.style.visibility = 'hidden';
element.innerHTML = '<!-- inject:svg --><svg xmlns="http://www.w3.org/2000/svg"><symbol id="circle" viewBox="0 0 438.533 438.533"><path d="M409.133 109.203c-19.608-33.592-46.205-60.189-79.798-79.796C295.736 9.801 259.058 0 219.273 0c-39.781 0-76.47 9.801-110.063 29.407-33.595 19.604-60.192 46.201-79.8 79.796C9.801 142.8 0 179.489 0 219.267c0 39.78 9.804 76.463 29.407 110.062 19.607 33.592 46.204 60.189 79.799 79.798 33.597 19.605 70.283 29.407 110.063 29.407s76.47-9.802 110.065-29.407c33.593-19.602 60.189-46.206 79.795-79.798 19.603-33.596 29.403-70.284 29.403-110.062.001-39.782-9.8-76.472-29.399-110.064zm-55.391 188.005c-13.894 23.791-32.736 42.633-56.527 56.534-23.791 13.894-49.771 20.834-77.945 20.834-28.167 0-54.149-6.94-77.943-20.834-23.791-13.901-42.633-32.743-56.527-56.534-13.897-23.791-20.843-49.772-20.843-77.941 0-28.171 6.949-54.152 20.843-77.943 13.891-23.791 32.738-42.637 56.527-56.53 23.791-13.895 49.772-20.84 77.943-20.84 28.173 0 54.154 6.945 77.945 20.84 23.791 13.894 42.634 32.739 56.527 56.53 13.895 23.791 20.838 49.772 20.838 77.943 0 28.169-6.943 54.15-20.838 77.941z"/></symbol><symbol id="close" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></symbol><symbol id="crop" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 15h2V7c0-1.1-.9-2-2-2H9v2h8v8zM7 17V1H5v4H1v2h4v10c0 1.1.9 2 2 2h10v4h2v-4h4v-2H7z"/></symbol><symbol id="done" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></symbol><symbol id="hand" viewBox="0 0 128 128"><path class="iconic-property-fill" d="M101.657 70.343a8 8 0 0 0-11.314 0L80 78.846c-3.165 2.602-8 .778-8-2.846V14a6 6 0 1 0-12 0v38a4 4 0 0 1-8 0V6a6 6 0 1 0-12 0v50a4 4 0 0 1-8 0V14a6 6 0 1 0-12 0v46a4 4 0 0 1-8 0V22a6 6 0 1 0-12 0v70c0 19.882 16.118 36 36 36 9.223 0 17.631-3.472 24.001-9.175l-.001.007s41.448-36.966 41.657-37.175a8 8 0 0 0 0-11.314z"/></symbol><symbol id="pencil" viewBox="0 0 129 129"><path d="M119.2 114.3H9.8c-2.3 0-4.1 1.9-4.1 4.1s1.9 4.1 4.1 4.1h109.5c2.3 0 4.1-1.9 4.1-4.1s-1.9-4.1-4.2-4.1zM5.7 78l-.1 19.5c0 1.1.4 2.2 1.2 3 .8.8 1.8 1.2 2.9 1.2l19.4-.1c1.1 0 2.1-.4 2.9-1.2l67-67c1.6-1.6 1.6-4.2 0-5.9L79.8 8.1c-1.6-1.6-4.2-1.6-5.9 0L60.5 21.6 6.9 75.1c-.7.8-1.2 1.8-1.2 2.9zm71.2-61.1l13.5 13.5-7.6 7.6-13.5-13.5 7.6-7.6zM14 79.8l49.4-49.4 13.5 13.5-49.4 49.3-13.6.1.1-13.5z"/></symbol><symbol id="rectangle" viewBox="0 0 297 297"><path d="M294.088 99.52a9.946 9.946 0 0 0-7.032-2.913L9.955 96.62c-5.491 0-9.942 4.451-9.943 9.943L0 190.448a9.941 9.941 0 0 0 9.945 9.945l277.1-.016c5.491 0 9.942-4.451 9.943-9.943l.012-83.882a9.941 9.941 0 0 0-2.912-7.032z"/></symbol><symbol id="redo" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16a8.002 8.002 0 0 1 7.6-5.5c1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"/></symbol><symbol id="rotate-left" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M7.11 8.53L5.7 7.11C4.8 8.27 4.24 9.61 4.07 11h2.02c.14-.87.49-1.72 1.02-2.47zM6.09 13H4.07c.17 1.39.72 2.73 1.62 3.89l1.41-1.42c-.52-.75-.87-1.59-1.01-2.47zm1.01 5.32c1.16.9 2.51 1.44 3.9 1.61V17.9c-.87-.15-1.71-.49-2.46-1.03L7.1 18.32zM13 4.07V1L8.45 5.55 13 10V6.09c2.84.48 5 2.94 5 5.91s-2.16 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93s-3.05-7.44-7-7.93z"/></symbol><symbol id="rotate-right" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.55 5.55L11 1v3.07C7.06 4.56 4 7.92 4 12s3.05 7.44 7 7.93v-2.02c-2.84-.48-5-2.94-5-5.91s2.16-5.43 5-5.91V10l4.55-4.45zM19.93 11a7.906 7.906 0 0 0-1.62-3.89l-1.42 1.42c.54.75.88 1.6 1.02 2.47h2.02zM13 17.9v2.02c1.39-.17 2.74-.71 3.9-1.61l-1.44-1.44c-.75.54-1.59.89-2.46 1.03zm3.89-2.42l1.42 1.41c.9-1.16 1.45-2.5 1.62-3.89h-2.02c-.14.87-.48 1.72-1.02 2.48z"/></symbol><symbol id="save" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/></symbol><symbol id="text" viewBox="0 0 24 24"><path d="M22 0H2v6h1.999c0-1.174.397-3 2.001-3h4v16.874C10 21.048 9.175 22 8 22H7v2h9.999v-2H16c-1.174 0-2-.952-2-2.126V3h4c1.649 0 2.02 1.826 2.02 3H22V0z"/></symbol><symbol id="undo" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"/></symbol><symbol id="zoom-in" viewBox="0 0 96 96.000001"><path style="marker:none" overflow="visible" fill="none" d="M96 0v96H0V0z"/><path d="M72.396 73.883c.017.021.04.035.057.056.02.026.03.057.05.083zM23.56 73.896l-.107.14c.02-.026.03-.058.05-.083.017-.021.041-.035.058-.057z"/><path d="M42 6C22.141 6 6 22.142 6 42s16.141 35.996 36 35.996c8.85 0 16.957-3.21 23.23-8.521l19.647 19.644 4.244-4.24-19.646-19.647C74.789 58.958 78 50.852 78 42 78 22.142 61.859 6 42 6zm0 3.998c17.696 0 31.998 14.305 31.998 32.002 0 17.697-14.302 31.998-31.998 31.998S10 59.698 10 42C10 24.303 24.304 9.998 42 9.998zM40 24v15.998H24v4h16V60h4.002V43.998H60v-4H44.002V24H40z"/></symbol><symbol id="zoom-out" viewBox="0 0 96 96.000001"><path style="marker:none" overflow="visible" fill="none" d="M96 0v96H0V0z"/><path d="M72.396 73.883c.017.021.04.035.057.056.02.026.03.057.05.083zM23.56 73.896l-.107.14c.02-.026.03-.058.05-.083.017-.021.041-.035.058-.057z"/><path d="M42 6C22.141 6 6 22.142 6 42s16.141 35.996 36 35.996c8.85 0 16.957-3.21 23.23-8.521l19.647 19.644 4.244-4.24-19.646-19.647C74.789 58.958 78 50.852 78 42 78 22.142 61.859 6 42 6zm0 3.998c17.696 0 31.998 14.305 31.998 32.002 0 17.697-14.302 31.998-31.998 31.998S10 59.698 10 42C10 24.303 24.304 9.998 42 9.998zm-18 30v4h36v-4H24z"/></symbol></svg><!-- endinject -->';
document.body.appendChild(element);

})();
;(function () {
  "use strict";

  window.Darkroom = Darkroom;

  // Core object of DarkroomJS.
  // Basically it's a single object, instanciable via an element
  // (it could be a CSS selector or a DOM element), some custom options,
  // and a list of plugin objects (or none to use default ones).
  function Darkroom(element, options, plugins) {
    return this.constructor(element, options, plugins);
  }

  // Create an empty list of plugin objects, which will be filled by
  // other plugin scripts. This is the default plugin list if none is
  // specified in Darkroom'ss constructor.
  Darkroom.plugins = [];

  Darkroom.prototype = {
    // Reference to the main container element
    containerElement: null,

    // Reference to the Fabric canvas object
    canvas: null,

    // Reference to the Fabric image object
    image: null,

    // Reference to the Fabric source canvas object
    sourceCanvas: null,

    // Reference to the Fabric source image object
    sourceImage: null,

    // Track of the original image element
    originalImageElement: null,

    // Stack of transformations to apply to the image source
    transformations: [],

    // Default options
    defaults: {
      // Canvas properties (dimension, ratio, color)
      minWidth: null,
      minHeight: null,
      maxWidth: null,
      maxHeight: null,
      ratio: null,
      left: 0,
      top: 0,
      backgroundColor: "#fff",

      // Plugins options
      plugins: {},

      // Post-initialisation callback
      initialize () { /* noop */ }
    },

    // List of the instancied plugins
    plugins: {},

    // This options are a merge between `defaults` and the options passed
    // through the constructor
    options: {},

    constructor (element, options, plugins) {
      this.options = Darkroom.Utils.extend(options, this.defaults);

      if (typeof element === 'string')
        element = document.querySelector(element);
      if (null === element)
        return;

      var image = new Image();
      image.onload = function () {
        // Initialize the DOM/Fabric elements
        this._initializeDOM(element);
        this._initializeImage();

        // Then initialize the plugins
        this._initializePlugins(Darkroom.plugins);

        // Public method to adjust image according to the canvas
        this.refresh(function () {
          // Execute a custom callback after initialization
          this.options.initialize.bind(this).call();
        }.bind(this));

      }.bind(this)

      //image.crossOrigin = 'anonymous';
      image.src = element.src;
    },

    selfDestroy () {
      var container = this.containerElement;
      var image = new Image();
      image.onload = function () {
        container.parentNode.replaceChild(image, container);
      }

      image.src = this.sourceImage.toDataURL();
    },

    // Add ability to attach event listener on the core object.
    // It uses the canvas element to process events.
    addEventListener (eventName, callback) {
      var el = this.canvas.getElement();
      if (el.addEventListener) {
        el.addEventListener(eventName, callback);
      } else if (el.attachEvent) {
        el.attachEvent('on' + eventName, callback);
      }
    },

    dispatchEvent (eventName) {
      // Use the old way of creating event to be IE compatible
      // See https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
      var event = document.createEvent('Event');
      event.initEvent(eventName, true, true);

      this.canvas.getElement().dispatchEvent(event);
    },

    // Adjust image & canvas dimension according to min/max width/height
    // and ratio specified in the options.
    // This method should be called after each image transformation.
    refresh (next) {
      var clone = new Image();
      clone.onload = function () {
        this._replaceCurrentImage(new fabric.Image(clone));

        if (next) next();
      }.bind(this);
      clone.src = this.sourceImage.toDataURL();
    },

    _replaceCurrentImage (newImage) {
      if (this.image) {
        this.image.remove();
      }

      this.image = newImage;
      this.image.selectable = false;
      this.image.left = this.options.left;
      this.image.top = this.options.top;

      // Adjust width or height according to specified ratio
      var viewport = Darkroom.Utils.computeImageViewPort(this.image);
      var canvasWidth = viewport.width;
      var canvasHeight = viewport.height;

      // if (null !== this.options.ratio) {
      //   var canvasRatio = +this.options.ratio;
      //   var currentRatio = canvasWidth / canvasHeight;

      //   if (currentRatio > canvasRatio) {
      //     canvasHeight = canvasWidth / canvasRatio;
      //   } else if (currentRatio < canvasRatio) {
      //     canvasWidth = canvasHeight * canvasRatio;
      //   }
      // }

      // // Then scale the image to fit into dimension limits
      // var scaleMin = 1;
      // var scaleMax = 1;
      // var scaleX = 1;
      // var scaleY = 1;

      // if (null !== this.options.maxWidth && this.options.maxWidth < canvasWidth) {
      //   scaleX =  this.options.maxWidth / canvasWidth;
      // }
      // if (null !== this.options.maxHeight && this.options.maxHeight < canvasHeight) {
      //   scaleY =  this.options.maxHeight / canvasHeight;
      // }
      // scaleMin = Math.min(scaleX, scaleY);

      // scaleX = 1;
      // scaleY = 1;
      // if (null !== this.options.minWidth && this.options.minWidth > canvasWidth) {
      //   scaleX =  this.options.minWidth / canvasWidth;
      // }
      // if (null !== this.options.minHeight && this.options.minHeight > canvasHeight) {
      //   scaleY =  this.options.minHeight / canvasHeight;
      // }
      // scaleMax = Math.max(scaleX, scaleY);

      // var scale = scaleMax * scaleMin; // one should be equals to 1

      // canvasWidth *= scale;
      // canvasHeight *= scale;

      // Finally place the image in the center of the canvas
      // this.image.setScaleX(1 * scale);
      // this.image.setScaleY(1 * scale);
      this.canvas.add(this.image);
      this.canvas.setWidth(canvasWidth);
      this.canvas.setHeight(canvasHeight);

      // Resize the image to fit the canvas
      if (this.image.oCoords.br.x < this.canvas.width) {
        this.image.left = this.image.left + Math.ceil(this.canvas.width - this.image.oCoords.br.x);
      }
      if (this.image.oCoords.br.y < this.canvas.height) {
        this.image.top = this.image.top + Math.ceil(this.canvas.height - this.image.oCoords.br.y);
      }
      // this.canvas.centerObject(this.image);
      this.image.setCoords();
    },

    // Apply the transformation on the current image and save it in the
    // transformations stack (in order to reconstitute the previous states
    // of the image).
    applyTransformation (transformation) {
      this.transformations.push(transformation);

      transformation.applyTransformation(
        this.sourceCanvas,
        this.sourceImage,
        this._postTransformation.bind(this)
      );
    },

    _postTransformation (newImage) {
      if (newImage)
        this.sourceImage = newImage;

      this.refresh(function () {
        this.dispatchEvent('core:transformation');
      }.bind(this));
    },

    // Initialize image from original element plus re-apply every
    // transformations.
    reinitializeImage () {
      this.sourceImage.remove();
      this._initializeImage();
      this._popTransformation(this.transformations.slice())
    },

    _popTransformation (transformations) {
      if (0 === transformations.length) {
        this.dispatchEvent('core:reinitialized');
        this.refresh();
        return;
      }

      var transformation = transformations.shift();

      var next = function (newImage) {
        if (newImage) this.sourceImage = newImage;
        this._popTransformation(transformations)
      };

      transformation.applyTransformation(
        this.sourceCanvas,
        this.sourceImage,
        next.bind(this)
      );
    },

    // Create the DOM elements and instanciate the Fabric canvas.
    // The image element is replaced by a new `div` element.
    // However the original image is re-injected in order to keep a trace of it.
    _initializeDOM (imageElement) {
      // Container
      var mainContainerElement = document.createElement('div');
      mainContainerElement.className = 'darkroom-container';

      // Toolbar
      var toolbarElement = document.createElement('div');
      toolbarElement.className = 'darkroom-toolbar';
      mainContainerElement.appendChild(toolbarElement);

      // Viewport canvas
      var canvasContainerElement = document.createElement('div');
      canvasContainerElement.className = 'darkroom-image-container';
      var canvasElement = document.createElement('canvas');
      canvasContainerElement.appendChild(canvasElement);
      mainContainerElement.appendChild(canvasContainerElement);

      // Source canvas
      var sourceCanvasContainerElement = document.createElement('div');
      sourceCanvasContainerElement.className = 'darkroom-source-container';
      sourceCanvasContainerElement.style.display = 'none';
      var sourceCanvasElement = document.createElement('canvas');
      sourceCanvasContainerElement.appendChild(sourceCanvasElement);
      mainContainerElement.appendChild(sourceCanvasContainerElement);

      // Original image
      imageElement.parentNode.replaceChild(mainContainerElement, imageElement);
      imageElement.style.display = 'none';
      mainContainerElement.appendChild(imageElement);

      // Instanciate object from elements
      this.containerElement = mainContainerElement;
      this.originalImageElement = imageElement;

      this.toolbar = new Darkroom.UI.Toolbar(toolbarElement);

      this.canvas = new fabric.Canvas(canvasElement, {
        selection: false,
        backgroundColor: this.options.backgroundColor
      });

      this.sourceCanvas = new fabric.Canvas(sourceCanvasElement, {
        selection: false,
        backgroundColor: this.options.backgroundColor
      });
    },

    // Instanciate the Fabric image object.
    // The image is created as a static element with no control,
    // then it is add in the Fabric canvas object.
    _initializeImage () {
      this.sourceImage = new fabric.Image(this.originalImageElement, {
        // Some options to make the image static
        selectable: false,
        evented: false,
        lockMovementX: true,
        lockMovementY: true,
        lockRotation: true,
        lockScalingX: true,
        lockScalingY: true,
        lockUniScaling: true,
        hasControls: false,
        hasBorders: false,
      });

      this.sourceCanvas.add(this.sourceImage);

      // Adjust width or height according to specified ratio
      var viewport = Darkroom.Utils.computeImageViewPort(this.sourceImage);
      var canvasWidth = viewport.width;
      var canvasHeight = viewport.height;

      this.sourceCanvas.setWidth(canvasWidth);
      this.sourceCanvas.setHeight(canvasHeight);
      this.sourceCanvas.centerObject(this.sourceImage);
      this.sourceImage.setCoords();
    },

    // Initialize every plugins.
    // Note that plugins are instanciated in the same order than they
    // are declared in the parameter object.
    _initializePlugins (plugins) {
      for (var name in plugins) {
        var plugin = plugins[name];
        var options = this.options.plugins[name];

        // Setting false into the plugin options will disable the plugin
        if (options === false)
          continue;

        // Avoid any issues with _proto_
        if (!plugins.hasOwnProperty(name))
          continue;

        this.plugins[name] = new plugin(this, options);
      }
    },

    clearFocus (instance) {
      for (var key in this.plugins) {
        if (key != instance) {
          this.plugins[key].clear();
        }
      }
    }
  };
}());
;(function() {
'use strict';

Darkroom.Plugin = Plugin;

// Define a plugin object. This is the (abstract) parent class which
// has to be extended for each plugin.
function Plugin(darkroom, options) {
  this.darkroom = darkroom;
  this.options = Darkroom.Utils.extend(options, this.defaults);
  this.initialize();
}

Plugin.prototype = {
  defaults: {},
  initialize: function() { },
  clear: function() { }
}

// Inspired by Backbone.js extend capability.
Plugin.extend = function(protoProps) {
  var parent = this;
  var child;

  if (protoProps && protoProps.hasOwnProperty('constructor')) {
    child = protoProps.constructor;
  } else {
    child = function(){ return parent.apply(this, arguments); };
  }

  Darkroom.Utils.extend(child, parent);

  var Surrogate = function(){ this.constructor = child; };
  Surrogate.prototype = parent.prototype;
  child.prototype = new Surrogate;

  if (protoProps) Darkroom.Utils.extend(child.prototype, protoProps);

  child.__super__ = parent.prototype;

  return child;
}

})();
;(function() {
'use strict';

Darkroom.Transformation = Transformation;

function Transformation(options) {
  this.options = options;
}

Transformation.prototype = {
  applyTransformation: function(image) { /* no-op */  }
}

// Inspired by Backbone.js extend capability.
Transformation.extend = function(protoProps) {
  var parent = this;
  var child;

  if (protoProps && protoProps.hasOwnProperty('constructor')) {
    child = protoProps.constructor;
  } else {
    child = function(){ return parent.apply(this, arguments); };
  }

  Darkroom.Utils.extend(child, parent);

  var Surrogate = function(){ this.constructor = child; };
  Surrogate.prototype = parent.prototype;
  child.prototype = new Surrogate;

  if (protoProps) Darkroom.Utils.extend(child.prototype, protoProps);

  child.__super__ = parent.prototype;

  return child;
}

})();
;(function () {
  Darkroom.UI = {
    Toolbar,
    ButtonGroup,
    Button,
    Input
  };

  // Toolbar object.
  function Toolbar(element) {
    this.element = element;
  }

  Toolbar.prototype = {
    createButtonGroup() {
      const buttonGroup = document.createElement("div");
      buttonGroup.className = "darkroom-button-group";
      this.element.appendChild(buttonGroup);

      return new ButtonGroup(buttonGroup);
    }
  };

  // ButtonGroup object.
  function ButtonGroup(element) {
    this.element = element;
  }

  ButtonGroup.prototype = {
    createButton(options) {
      const defaults = {
        image: "help",
        type: "default",
        group: "default",
        hide: false,
        disabled: false
      };

      options = Darkroom.Utils.extend(options, defaults);

      const buttonElement = document.createElement("button");
      buttonElement.type = "button";
      buttonElement.className = `darkroom-button darkroom-button-${options.type}`;
      buttonElement.innerHTML = `<svg class="darkroom-icon"><use xlink:href="#${options.image}" /></svg>`;
      this.element.appendChild(buttonElement);

      const button = new Button(buttonElement);
      button.hide(options.hide);
      button.disable(options.disabled);

      return button;
    },

    createInput(options) {
      const defaults = {
        image: "help",
        type: "input",
        group: "default",
        hide: false,
        disabled: false,
        value: ""
      };

      options = Darkroom.Utils.extend(options, defaults);

      const datalistElement = document.createElement("datalist");
      datalistElement.id = "rainbow";
      const datalistElementOptionred = document.createElement("options");
      datalistElementOptionred.setAttribute("value", "#FF0000");
      datalistElementOptionred.innerHTML = "red";
      datalistElement.appendChild(datalistElementOptionred);
      const datalistElementOptionOrange = document.createElement("options");
      datalistElementOptionOrange.setAttribute("value", "#FFA500");
      datalistElementOptionOrange.innerHTML = "Orange";
      datalistElement.appendChild(datalistElementOptionOrange);
      const datalistElementOptionYellow = document.createElement("options");
      datalistElementOptionYellow.setAttribute("value", "#FFFF00");
      datalistElementOptionYellow.innerHTML = "Yellow";
      datalistElement.appendChild(datalistElementOptionYellow);
      const datalistElementOptionGreen = document.createElement("options");
      datalistElementOptionGreen.setAttribute("value", "#008000");
      datalistElementOptionGreen.innerHTML = "Green";
      datalistElement.appendChild(datalistElementOptionGreen);
      const datalistElementOptionBlue = document.createElement("options");
      datalistElementOptionBlue.setAttribute("value", "#0000FF");
      datalistElementOptionBlue.innerHTML = "Blue";
      datalistElement.appendChild(datalistElementOptionBlue);
      // this.element.appendChild(datalistElement);

      const inputElement = document.createElement("input");
      inputElement.type = "color";
      inputElement.setAttribute("list", "rainbow");
      inputElement.value = "#ff0000";
      inputElement.className = `darkroom-button darkroom-input-${options.type}`;
      inputElement.innerHTML = `<svg class="darkroom-icon"><use xlink:href="#${options.image}" /></svg>`;
      this.element.appendChild(inputElement);

      const input = new Input(inputElement);
      input.hide(options.hide);
      input.disable(options.disabled);

      return input;
    }
  };

  // Button object.
  function Button(element) {
    this.element = element;
  }

  // Input object.
  function Input(element) {
    this.element = element;
  }

  Button.prototype = {
    addEventListener(eventName, listener) {
      if (this.element.addEventListener) {
        this.element.addEventListener(eventName, listener);
      } else if (this.element.attachEvent) {
        this.element.attachEvent(`on${eventName}`, listener);
      }
    },
    removeEventListener(eventName, listener) {
      if (this.element.removeEventListener) {
        this.element.removeEventListener(eventName, listener);
      }
    },
    active(value) {
      if (value) { this.element.classList.add("darkroom-button-active"); } else { this.element.classList.remove("darkroom-button-active"); }
    },
    hide(value) {
      if (value) { this.element.classList.add("darkroom-button-hidden"); } else { this.element.classList.remove("darkroom-button-hidden"); }
    },
    disable(value) {
      this.element.disabled = !!value;
    }
  };

  Input.prototype = {
    addEventListener(eventName, listener) {
      if (this.element.addEventListener) {
        this.element.addEventListener(eventName, listener);
      } else if (this.element.attachEvent) {
        this.element.attachEvent(`on${eventName}`, listener);
      }
    },
    removeEventListener(eventName, listener) {
      if (this.element.removeEventListener) {
        this.element.removeEventListener(eventName, listener);
      }
    },
    active(value) {
      if (value) { this.element.classList.add("darkroom-input-active"); } else { this.element.classList.remove("darkroom-input-active"); }
    },
    hide(value) {
      if (value) { this.element.classList.add("darkroom-button-hidden"); } else { this.element.classList.remove("darkroom-button-hidden"); }
    },
    disable(value) {
      this.element.disabled = !!value;
    }
  };
}());
;(function () {
  "use strict";

  Darkroom.Utils = {
    extend,
    computeImageViewPort
  };


  // Utility method to easily extend objects.
  function extend(b, a) {
    let prop;
    if (b === undefined) {
      return a;
    }
    for (prop in a) {
      if (a.hasOwnProperty(prop) && b.hasOwnProperty(prop) === false) {
        b[prop] = a[prop];
      }
    }
    return b;
  }

  function computeImageViewPort(image) {
    return {
      height: Math.abs(image.getWidth() * (Math.sin(image.getAngle() * Math.PI / 180))) + Math.abs(image.getHeight() * (Math.cos(image.getAngle() * Math.PI / 180))),
      width: Math.abs(image.getHeight() * (Math.sin(image.getAngle() * Math.PI / 180))) + Math.abs(image.getWidth() * (Math.cos(image.getAngle() * Math.PI / 180)))
    };
  }
}());
;(function (window, document, Darkroom, fabric) {
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
;(function () {
  fabric.Image.prototype.strokeWidth = 0;
  const Rotation = Darkroom.Transformation.extend({
    applyTransformation(canvas, image, next) {
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

    initialize() {
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

    rotateLeft() {
      this.rotate(-90);
    },

    rotateRight() {
      this.rotate(90);
    },

    rotate(angle) {
      this.darkroom.options.left = 0;
      this.darkroom.options.top = 0;
      this.darkroom.applyTransformation(new Rotation({
        angle
      }));
    }

  });
}());
;(function () {
  fabric.Image.prototype.strokeWidth = 0;
  const Crop = Darkroom.Transformation.extend({
    applyTransformation(canvas, image, next) {
      // Snapshot the image delimited by the crop zone
      const snapshot = new Image();
      snapshot.onload = function () {
        // Validate image
        if (this.height < 1 || this.width < 1) {
          return;
        }

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

        const width = this.width;
        const height = this.height;

        // Update canvas size
        canvas.setWidth(width);
        canvas.setHeight(height);

        // Add image
        image.remove();
        canvas.add(imgInstance);

        next(imgInstance);
      };

      const viewport = Darkroom.Utils.computeImageViewPort(image);
      const imageWidth = viewport.width;
      const imageHeight = viewport.height;

      const left = this.options.left * imageWidth;
      const top = this.options.top * imageHeight;
      const width = Math.min(this.options.width * imageWidth, imageWidth - left);
      const height = Math.min(this.options.height * imageHeight, imageHeight - top);

      snapshot.src = canvas.toDataURL({
        left,
        top,
        width,
        height
      });
    }
  });

  const CropZone = fabric.util.createClass(fabric.Rect, {
    _render(ctx) {
      this.callSuper("_render", ctx);

      const dashWidth = 7;

      // Set original scale
      const flipX = this.flipX ? -1 : 1;
      const flipY = this.flipY ? -1 : 1;
      const scaleX = flipX / this.scaleX;
      const scaleY = flipY / this.scaleY;

      ctx.scale(scaleX, scaleY);

      // Overlay rendering
      ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
      this._renderOverlay(ctx);

      // Set dashed borders
      if (ctx.setLineDash !== undefined) {
        ctx.setLineDash([dashWidth, dashWidth]);
      } else if (ctx.mozDash !== undefined) {
        ctx.mozDash = [dashWidth, dashWidth];
      }

      // First lines rendering with black
      ctx.strokeStyle = "rgba(0, 0, 0, 0.2)";
      this._renderBorders(ctx);
      this._renderGrid(ctx);

      // Re render lines in white
      ctx.lineDashOffset = dashWidth;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
      this._renderBorders(ctx);
      this._renderGrid(ctx);

      // Reset scale
      ctx.scale(1 / scaleX, 1 / scaleY);
    },

    _renderOverlay(ctx) {
      const canvas = ctx.canvas;

      //
      //    x0    x1        x2      x3
      // y0 +------------------------+
      //    |\\\\\\\\\\\\\\\\\\\\\\\\|
      //    |\\\\\\\\\\\\\\\\\\\\\\\\|
      // y1 +------+---------+-------+
      //    |\\\\\\|         |\\\\\\\|
      //    |\\\\\\|    0    |\\\\\\\|
      //    |\\\\\\|         |\\\\\\\|
      // y2 +------+---------+-------+
      //    |\\\\\\\\\\\\\\\\\\\\\\\\|
      //    |\\\\\\\\\\\\\\\\\\\\\\\\|
      // y3 +------------------------+
      //

      const x0 = Math.ceil(-this.getWidth() / 2 - this.getLeft());
      const x1 = Math.ceil(-this.getWidth() / 2);
      const x2 = Math.ceil(this.getWidth() / 2);
      const x3 = Math.ceil(this.getWidth() / 2 + (canvas.width - this.getWidth() - this.getLeft()));

      const y0 = Math.ceil(-this.getHeight() / 2 - this.getTop());
      const y1 = Math.ceil(-this.getHeight() / 2);
      const y2 = Math.ceil(this.getHeight() / 2);
      const y3 = Math.ceil(this.getHeight() / 2 + (canvas.height - this.getHeight() - this.getTop()));

      ctx.beginPath();

      // Draw outer rectangle.
      // Numbers are +/-1 so that overlay edges don't get blurry.
      ctx.moveTo(x0 - 1, y0 - 1);
      ctx.lineTo(x3 + 1, y0 - 1);
      ctx.lineTo(x3 + 1, y3 + 1);
      ctx.lineTo(x0 - 1, y3 - 1);
      ctx.lineTo(x0 - 1, y0 - 1);
      ctx.closePath();

      // Draw inner rectangle.
      ctx.moveTo(x1, y1);
      ctx.lineTo(x1, y2);
      ctx.lineTo(x2, y2);
      ctx.lineTo(x2, y1);
      ctx.lineTo(x1, y1);

      ctx.closePath();
      ctx.fill();
    },

    _renderBorders(ctx) {
      ctx.beginPath();
      ctx.moveTo(-this.getWidth() / 2, -this.getHeight() / 2); // upper left
      ctx.lineTo(this.getWidth() / 2, -this.getHeight() / 2); // upper right
      ctx.lineTo(this.getWidth() / 2, this.getHeight() / 2); // down right
      ctx.lineTo(-this.getWidth() / 2, this.getHeight() / 2); // down left
      ctx.lineTo(-this.getWidth() / 2, -this.getHeight() / 2); // upper left
      ctx.stroke();
    },

    _renderGrid(ctx) {
      // Vertical lines
      ctx.beginPath();
      ctx.moveTo(-this.getWidth() / 2 + 1 / 3 * this.getWidth(), -this.getHeight() / 2);
      ctx.lineTo(-this.getWidth() / 2 + 1 / 3 * this.getWidth(), this.getHeight() / 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(-this.getWidth() / 2 + 2 / 3 * this.getWidth(), -this.getHeight() / 2);
      ctx.lineTo(-this.getWidth() / 2 + 2 / 3 * this.getWidth(), this.getHeight() / 2);
      ctx.stroke();
      // Horizontal lines
      ctx.beginPath();
      ctx.moveTo(-this.getWidth() / 2, -this.getHeight() / 2 + 1 / 3 * this.getHeight());
      ctx.lineTo(this.getWidth() / 2, -this.getHeight() / 2 + 1 / 3 * this.getHeight());
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(-this.getWidth() / 2, -this.getHeight() / 2 + 2 / 3 * this.getHeight());
      ctx.lineTo(this.getWidth() / 2, -this.getHeight() / 2 + 2 / 3 * this.getHeight());
      ctx.stroke();
    }
  });

  Darkroom.plugins.crop = Darkroom.Plugin.extend({
    // Init point
    startX: null,
    startY: null,

    // Keycrop
    isKeyCroping: false,
    isKeyLeft: false,
    isKeyUp: false,

    defaults: {
      // min crop dimension
      minHeight: 1,
      minWidth: 1,
      // ensure crop ratio
      ratio: null,
      // quick crop feature (set a key code to enable it)
      quickCropKey: false
    },

    initialize() {
      const buttonGroup = this.darkroom.toolbar.createButtonGroup();

      this.cropButton = buttonGroup.createButton({
        image: "crop"
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

      // Buttons click
      this.cropButton.addEventListener("click", this.toggleCrop.bind(this));
      this.okButton.addEventListener("click", this.cropCurrentZone.bind(this));
      this.cancelButton.addEventListener("click", this.releaseFocus.bind(this));

      // Canvas events
      this.darkroom.canvas.on("mouse:down", this.onMouseDown.bind(this));
      this.darkroom.canvas.on("mouse:move", this.onMouseMove.bind(this));
      this.darkroom.canvas.on("mouse:up", this.onMouseUp.bind(this));
      this.darkroom.canvas.on("object:moving", this.onObjectMoving.bind(this));
      this.darkroom.canvas.on("object:scaling", this.onObjectScaling.bind(this));

      fabric.util.addListener(fabric.document, "keydown", this.onKeyDown.bind(this));
      fabric.util.addListener(fabric.document, "keyup", this.onKeyUp.bind(this));

      this.darkroom.addEventListener("core:transformation", this.releaseFocus.bind(this));
    },

    clear() {
      if (this.hasFocus()) {
        this.releaseFocus();
      }
    },
    // Avoid crop zone to go beyond the canvas edges
    onObjectMoving(event) {
      if (!this.hasFocus()) {
        return;
      }

      const currentObject = event.target;
      if (currentObject !== this.cropZone) {
        return;
      }

      const canvas = this.darkroom.canvas;
      const x = currentObject.getLeft();
      const y = currentObject.getTop();
      const w = currentObject.getWidth();
      const h = currentObject.getHeight();
      const maxX = canvas.getWidth() - w;
      const maxY = canvas.getHeight() - h;

      if (x < 0) {
        currentObject.set("left", 0);
      }
      if (y < 0) {
        currentObject.set("top", 0);
      }
      if (x > maxX) {
        currentObject.set("left", maxX);
      }
      if (y > maxY) {
        currentObject.set("top", maxY);
      }

      this.darkroom.dispatchEvent("crop:update");
    },

    // Prevent crop zone from going beyond the canvas edges (like mouseMove)
    onObjectScaling(event) {
      if (!this.hasFocus()) {
        return;
      }

      let preventScaling = false;
      const currentObject = event.target;
      if (currentObject !== this.cropZone) {
        return;
      }

      const canvas = this.darkroom.canvas;

      const minX = currentObject.getLeft();
      const minY = currentObject.getTop();
      const maxX = currentObject.getLeft() + currentObject.getWidth();
      const maxY = currentObject.getTop() + currentObject.getHeight();

      if (this.options.ratio !== null) {
        if (minX < 0 || maxX > canvas.getWidth() || minY < 0 || maxY > canvas.getHeight()) {
          preventScaling = true;
        }
      }

      if (minX < 0 || maxX > canvas.getWidth() || preventScaling) {
        const lastScaleX = this.lastScaleX || 1;
        currentObject.setScaleX(lastScaleX);
      }
      if (minX < 0) {
        currentObject.setLeft(0);
      }

      if (minY < 0 || maxY > canvas.getHeight() || preventScaling) {
        const lastScaleY = this.lastScaleY || 1;
        currentObject.setScaleY(lastScaleY);
      }
      if (minY < 0) {
        currentObject.setTop(0);
      }

      if (currentObject.getWidth() < this.options.minWidth) {
        currentObject.scaleToWidth(this.options.minWidth);
      }
      if (currentObject.getHeight() < this.options.minHeight) {
        currentObject.scaleToHeight(this.options.minHeight);
      }

      this.lastScaleX = currentObject.getScaleX();
      this.lastScaleY = currentObject.getScaleY();

      this.darkroom.dispatchEvent("crop:update");
    },

    // Init crop zone
    onMouseDown(event) {
      event.e.preventDefault();
      if (!this.hasFocus()) {
        return;
      }

      const canvas = this.darkroom.canvas;

      // recalculate offset, in case canvas was manipulated since last `calcOffset`
      canvas.calcOffset();
      const pointer = canvas.getPointer(event.e);
      const x = pointer.x;
      const y = pointer.y;
      const point = new fabric.Point(x, y);

      // Check if user want to scale or drag the crop zone.
      const activeObject = canvas.getActiveObject();
      if (activeObject === this.cropZone || this.cropZone.containsPoint(point)) {
        return;
      }

      canvas.discardActiveObject();
      this.cropZone.setWidth(0);
      this.cropZone.setHeight(0);
      this.cropZone.setScaleX(1);
      this.cropZone.setScaleY(1);

      this.startX = x;
      this.startY = y;
    },

    // Extend crop zone
    onMouseMove(event) {
      // Quick crop feature
      if (this.isKeyCroping) {
        return this.onMouseMoveKeyCrop(event);
      }

      if (null === this.startX || null === this.startY) {
        return;
      }

      const canvas = this.darkroom.canvas;
      const pointer = canvas.getPointer(event.e);
      const x = pointer.x;
      const y = pointer.y;

      this._renderCropZone(this.startX, this.startY, x, y);
    },

    onMouseMoveKeyCrop(event) {
      const canvas = this.darkroom.canvas;
      const zone = this.cropZone;

      const pointer = canvas.getPointer(event.e);
      const x = pointer.x;
      const y = pointer.y;

      if (!zone.left || !zone.top) {
        zone.setTop(y);
        zone.setLeft(x);
      }

      this.isKeyLeft = x < zone.left + zone.width / 2;
      this.isKeyUp = y < zone.top + zone.height / 2;

      this._renderCropZone(
        Math.min(zone.left, x),
        Math.min(zone.top, y),
        Math.max(zone.left + zone.width, x),
        Math.max(zone.top + zone.height, y)
      );
    },

    // Finish crop zone
    onMouseUp(event) {
      if (null === this.startX || null === this.startY) {
        return;
      }

      const canvas = this.darkroom.canvas;
      this.cropZone.setCoords();
      canvas.setActiveObject(this.cropZone);
      canvas.calcOffset();

      this.startX = null;
      this.startY = null;
    },

    onKeyDown(event) {
      if (this.options.quickCropKey === false || event.keyCode !== this.options.quickCropKey || this.isKeyCroping) {
        return;
      }

      // Active quick crop flow
      this.isKeyCroping = true;
      this.darkroom.canvas.discardActiveObject();
      this.cropZone.setWidth(0);
      this.cropZone.setHeight(0);
      this.cropZone.setScaleX(1);
      this.cropZone.setScaleY(1);
      this.cropZone.setTop(0);
      this.cropZone.setLeft(0);
    },

    onKeyUp(event) {
      if (this.options.quickCropKey === false || event.keyCode !== this.options.quickCropKey || !this.isKeyCroping) {
        return;
      }

      // Unactive quick crop flow
      this.isKeyCroping = false;
      this.startX = 1;
      this.startY = 1;
      this.onMouseUp();
    },

    selectZone(x, y, width, height, forceDimension) {
      if (!this.hasFocus()) {
        this.requireFocus();
      }

      if (!forceDimension) {
        this._renderCropZone(x, y, x + width, y + height);
      } else {
        this.cropZone.set({
          left: x,
          top: y,
          width,
          height
        });
      }

      const canvas = this.darkroom.canvas;
      canvas.bringToFront(this.cropZone);
      this.cropZone.setCoords();
      canvas.setActiveObject(this.cropZone);
      canvas.calcOffset();

      this.darkroom.dispatchEvent("crop:update");
    },

    toggleCrop() {
      if (!this.hasFocus()) {
        this.requireFocus();
      } else {
        this.releaseFocus();
      }
    },

    cropCurrentZone() {
      if (!this.hasFocus()) {
        return;
      }

      // Avoid croping empty zone
      if (this.cropZone.width < 1 && this.cropZone.height < 1) {
        return;
      }

      const image = this.darkroom.image;

      // Compute crop zone dimensions
      let top = this.cropZone.getTop() - image.getTop();
      let left = this.cropZone.getLeft() - image.getLeft();
      let width = this.cropZone.getWidth();
      let height = this.cropZone.getHeight();

      // Adjust dimensions to image only
      if (top < 0) {
        height += top;
        top = 0;
      }

      if (left < 0) {
        width += left;
        left = 0;
      }

      this.darkroom.options.top = 0;
      this.darkroom.options.left = 0;
      this.darkroom.canvas.setZoom(1);
      this.darkroom.plugins.zoom.updateButtons();
      // Apply crop transformation.
      // Make sure to use relative dimension since the crop will be applied
      // on the source image.
      this.darkroom.applyTransformation(new Crop({
        top: top / image.getHeight(),
        left: left / image.getWidth(),
        width: width / image.getWidth(),
        height: height / image.getHeight()
      }));
    },

    // Test wether crop zone is set
    hasFocus() {
      return this.cropZone !== undefined;
    },

    // Create the crop zone
    requireFocus() {
      this.darkroom.clearFocus("crop");
      this.cropZone = new CropZone({
        fill: "transparent",
        hasBorders: false,
        originX: "left",
        originY: "top",
        // stroke: '#444',
        // strokeDashArray: [5, 5],
        // borderColor: '#444',
        cornerColor: "#444",
        cornerSize: 8,
        transparentCorners: false,
        lockRotation: true,
        hasRotatingPoint: false
      });

      if (this.options.ratio !== null) {
        this.cropZone.set("lockUniScaling", true);
      }

      this.darkroom.canvas.add(this.cropZone);
      this.darkroom.canvas.defaultCursor = "crosshair";

      this.cropButton.active(true);
      this.okButton.hide(false);
      this.cancelButton.hide(false);
    },

    // Remove the crop zone
    releaseFocus() {
      if (undefined === this.cropZone) {
        return;
      }

      this.cropZone.remove();
      this.cropZone = undefined;

      this.cropButton.active(false);
      this.okButton.hide(true);
      this.cancelButton.hide(true);

      this.darkroom.canvas.defaultCursor = "default";

      this.darkroom.dispatchEvent("crop:update");
    },

    _renderCropZone(fromX, fromY, toX, toY) {
      const canvas = this.darkroom.canvas;

      const isRight = (toX > fromX);
      let isLeft = !isRight;
      const isDown = (toY > fromY);
      let isUp = !isDown;

      const minWidth = Math.min(+this.options.minWidth, canvas.getWidth());
      const minHeight = Math.min(+this.options.minHeight, canvas.getHeight());

      // Define corner coordinates
      let leftX = Math.min(fromX, toX);
      let rightX = Math.max(fromX, toX);
      let topY = Math.min(fromY, toY);
      let bottomY = Math.max(fromY, toY);

      // Replace current point into the canvas
      leftX = Math.max(0, leftX);
      rightX = Math.min(canvas.getWidth(), rightX);
      topY = Math.max(0, topY);
      bottomY = Math.min(canvas.getHeight(), bottomY);

      // Recalibrate coordinates according to given options
      if (rightX - leftX < minWidth) {
        if (isRight) {
          rightX = leftX + minWidth;
        } else {
          leftX = rightX - minWidth;
        }
      }
      if (bottomY - topY < minHeight) {
        if (isDown) {
          bottomY = topY + minHeight;
        } else {
          topY = bottomY - minHeight;
        }
      }

      // Truncate truncate according to canvas dimensions
      if (leftX < 0) {
        // Translate to the left
        rightX += Math.abs(leftX);
        leftX = 0;
      }
      if (rightX > canvas.getWidth()) {
        // Translate to the right
        leftX -= (rightX - canvas.getWidth());
        rightX = canvas.getWidth();
      }
      if (topY < 0) {
        // Translate to the bottom
        bottomY += Math.abs(topY);
        topY = 0;
      }
      if (bottomY > canvas.getHeight()) {
        // Translate to the right
        topY -= (bottomY - canvas.getHeight());
        bottomY = canvas.getHeight();
      }

      let width = rightX - leftX;
      let height = bottomY - topY;
      const currentRatio = width / height;

      if (this.options.ratio && +this.options.ratio !== currentRatio) {
        const ratio = +this.options.ratio;

        if (this.isKeyCroping) {
          isLeft = this.isKeyLeft;
          isUp = this.isKeyUp;
        }

        if (currentRatio < ratio) {
          const newWidth = height * ratio;
          if (isLeft) {
            leftX -= (newWidth - width);
          }
          width = newWidth;
        } else if (currentRatio > ratio) {
          const newHeight = height / (ratio * height / width);
          if (isUp) {
            topY -= (newHeight - height);
          }
          height = newHeight;
        }

        if (leftX < 0) {
          leftX = 0;
          // TODO
        }
        if (topY < 0) {
          topY = 0;
          // TODO
        }
        if (leftX + width > canvas.getWidth()) {
          const newWidth = canvas.getWidth() - leftX;
          height = newWidth * height / width;
          width = newWidth;
          if (isUp) {
            topY = fromY - height;
          }
        }
        if (topY + height > canvas.getHeight()) {
          const newHeight = canvas.getHeight() - topY;
          width = width * newHeight / height;
          height = newHeight;
          if (isLeft) {
            leftX = fromX - width;
          }
        }
      }

      // Apply coordinates
      this.cropZone.left = leftX;
      this.cropZone.top = topY;
      this.cropZone.width = width;
      this.cropZone.height = height;

      this.darkroom.canvas.bringToFront(this.cropZone);

      this.darkroom.dispatchEvent("crop:update");
    }
  });
}());
;(function () {
  fabric.Image.prototype.strokeWidth = 0;
  const Pencil = Darkroom.Transformation.extend({
    applyTransformation(canvas, image, next) {
      // Snapshot the image delimited by the crop zone
      const snapshot = new Image();
      snapshot.onload = function () {
        // Validate image
        if (this.height < 1 || this.width < 1) {
          return;
        }

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

      canvas.add(this.options.pencilZone);
      canvas.renderAll();
      snapshot.src = canvas.toDataURL();
    }
  });

  const PencilZone = fabric.util.createClass(fabric.Object, {
    type: "pencilObject",

    initialize(options) {
      this.options = options || {};
      this.left = options.left || 0;
      this.top = options.top || 0;
      this.width = options.width;
      this.height = options.height;
      this.originalWidth = this.width;
      this.originalHeight = this.height;
      this.stroke = options.stroke;
      this.size = options.size;
      this.path = null;
      this.cX = -this.getWidth() / 2;
      this.cY = -this.getHeight() / 2;
      this.callSuper("initialize", options);
    },

    _applyScaling(w, h) {
      const scaleX = this.getWidth() / w;
      const scaleY = this.getHeight() / h;
      this.set({
        scaleX: this.scaleX / scaleX,
        scaleY: this.scaleY / scaleY
      });
    },

    _render(ctx) {
      this._draw(ctx);
    },

    _draw(ctx) {
      if (ctx && this.path && this.path.length > 0) {
        ctx.lineJoin = "round";
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(
          (this.cX + this.path[0].x),
          (this.cY + this.path[0].y)
        );

        for (let x = 0; x < this.path.length; x += 1) {
          const drawX = (this.cX + this.path[x].x);
          const drawY = (this.cY + this.path[x].y);
          ctx.lineTo(drawX, drawY);
        }


        ctx.strokeStyle = this.stroke;
        ctx.lineWidth = this.size;
        ctx.stroke();
      }
    },

    clone() {
      return new PencilZone({
        stroke: this.stroke,
        size: this.size,
        width: this.width,
        height: this.height,
        selectable: false,
        lockRotation: true,
        evented: false,
        lockMovementX: true,
        lockMovementY: true,
        lockScalingX: true,
        lockScalingY: true,
        lockUniScaling: true,
        hasControls: false,
        hasBorders: false
      });
    }
  });

  Darkroom.plugins.pencil = Darkroom.Plugin.extend({
    pencilMode: false,
    pencilZone: null,
    mouseDown: false,
    size: 30,
    defaults: {
      stroke: "black",
      size: 30
    },

    initialize() {
      const buttonGroup = this.darkroom.toolbar.createButtonGroup();

      this.pencilButton = buttonGroup.createButton({
        image: "pencil",
        tooltip: "Draw"
      });

      this.path = [];
      this.width = this.darkroom.canvas.width;
      this.height = this.darkroom.canvas.height;
      this.size = this.options.size;
      this.stroke = this.options.stroke;

      this.darkroom.canvas.on("mouse:down", this.onMouseDown.bind(this));
      this.darkroom.canvas.on("mouse:move", this.onMouseMove.bind(this));
      this.darkroom.canvas.on("mouse:up", this.onMouseUp.bind(this));
      this.pencilButton.addEventListener("click", this.onClick.bind(this));
    },

    clear() {
      if (this.hasFocus()) {
        this.removeFocus();
      }
    },

    hasFocus() {
      return this.pencilZone !== null;
    },

    onClick() {
      if (!this.hasFocus()) {
        this.requireFocus();
        return;
      }
      this.removeFocus();
    },

    onMouseDown(event) {
      event.e.preventDefault();
      if (!this.hasFocus()) {
        return;
      }

      this.darkroom.dispatchEvent("pencil:begin");
      this.mouseDown = true;
      this.path.push(this.getMousePosition(this.canvas, event));
      this.renderZone();
    },

    onMouseUp(event) {
      if (!this.hasFocus()) {
        return;
      }

      if (this.mouseDown) {
        this.darkroom.dispatchEvent("pencil:end");
        this.mouseDown = false;
        const mousePos = this.getMousePosition(this.canvas, event);
        this.path.push(mousePos);
        this.renderZone();
        this.applyPencilPath();
        this.path = [];
      }
    },

    onMouseMove(event) {
      if (!this.hasFocus()) {
        return;
      }

      if (this.mouseDown) {
        const mousePos = this.getMousePosition(this.canvas, event);
        this.path.push(mousePos);
        this.renderZone();
      }
    },

    removeFocus() {
      this.darkroom.dispatchEvent("pencil:disabled");
      this.pencilButton.active(false);
      this.pencilMode = false;
      this.darkroom.canvas.defaultCursor = "default";
      if (this.pencilZone) {
        this.pencilZone.remove();
        this.pencilZone = null;
      }
    },

    requireFocus() {
      this.darkroom.clearFocus("pencil");
      this.darkroom.dispatchEvent("pencil:enabled");
      this.pencilMode = true;
      this.pencilButton.active(true);

      this.pencilZone = this.newZone();

      this.darkroom.canvas.add(this.pencilZone);
      this.darkroom.canvas.defaultCursor = "crosshair";
    },

    getMousePosition(canvas, event) {
      var canvas = this.darkroom.canvas;
      const rect = canvas.lowerCanvasEl.getBoundingClientRect();
      const pointer = canvas.getPointer(event.e);
      return {
        x: pointer.x,
        y: pointer.y,
        cx: event.e.clientX - rect.left,
        cy: event.e.clientY - rect.top,
        sx: event.e.screenX,
        sy: event.e.screenY
      };
    },

    newZone() {
      this.path = [];
      const stroke = this.stroke;
      const size = this.size;
      const width = this.darkroom.canvas.getWidth();
      const height = this.darkroom.canvas.getHeight();
      const zone = new PencilZone({
        stroke,
        size,
        width,
        height,
        selectable: false,
        lockRotation: true,
        evented: false,
        lockMovementX: true,
        lockMovementY: true,
        lockScalingX: true,
        lockScalingY: true,
        lockUniScaling: true,
        hasControls: false,
        hasBorders: false
      });

      return zone;
    },

    applyPencilPath() {
      if (!this.hasFocus()) { return; }

      // Avoid croping empty zone
      if (this.path === null || this.path.length === 0) { return; }

      // Apply crop transformation.
      // Make sure to use relative dimension since the crop will be applied
      // on the source image.
      const zone = this.pencilZone.clone();
      zone.path = this.path;
      zone.left -= this.darkroom.options.left;
      zone.top -= this.darkroom.options.top;
      this.darkroom.applyTransformation(new Pencil({
        pencilZone: zone
      }));
      this.darkroom.canvas.add(this.pencilZone);
    },

    renderZone() {
      if (this.path && this.path.length > 0) {
        this.darkroom.dispatchEvent("pencil:update");
        this.pencilZone.path = this.path;
      }
      this.darkroom.canvas.bringToFront(this.pencilZone);
    }

  });
}());
;(function () {
  let rect;
  let isDown;
  let origX;
  let origY;
  let hasFocus = true;

  fabric.Image.prototype.strokeWidth = 0;
  const RectangleTransformation = Darkroom.Transformation.extend({
    applyTransformation(canvas, image, next) {
      const snapshot = new Image();
      snapshot.onload = function () {
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

      const newRect = this.options.rectangle;
      const scaleX = this.options.originalWidth / canvas.getWidth();
      const scaleY = this.options.originalHeight / canvas.getHeight();
      newRect.set({ scaleX: 1 / scaleX, scaleY: 1 / scaleY });
      canvas.add(newRect);
      canvas.renderAll();
      snapshot.src = canvas.toDataURL();
    }
  });

  Darkroom.plugins.rectangle = Darkroom.Plugin.extend({
    rectangleZone: null,

    initialize() {
      const buttonGroup = this.darkroom.toolbar.createButtonGroup();

      this.rectangleButton = buttonGroup.createButton({
        image: "rectangle",
        tooltip: "Draw"
      });

      this.darkroom.canvas.on("mouse:down", this.onMouseDown.bind(this));
      this.darkroom.canvas.on("mouse:move", this.onMouseMove.bind(this));
      this.darkroom.canvas.on("mouse:up", this.handleMouseUp.bind(this));
      this.rectangleButton.addEventListener("click", this.onClick.bind(this));
    },

    clear() {
      this.rectangleButton.active(false);
      hasFocus = true;
      isDown = false;
    },

    onClick() {
      if (!hasFocus) {
        this.rectangleButton.active(false);
        this.darkroom.canvas.defaultCursor = "default";
        hasFocus = true;
        return;
      }
      this.darkroom.clearFocus("rectangle");
      this.rectangleButton.active(true);
      this.darkroom.canvas.defaultCursor = "crosshair";
      hasFocus = false;
    },

    onMouseDown(event) {
      event.e.preventDefault();
      if (hasFocus) return;
      this.darkroom.dispatchEvent("rectangle:begin");
      const canvas = this.darkroom.canvas;
      isDown = true;
      const pointer = canvas.getPointer(event.e);
      origX = pointer.x;
      origY = pointer.y;
      rect = new fabric.Rect({
        left: origX,
        top: origY,
        originX: "left",
        originY: "top",
        width: pointer.x - origX,
        height: pointer.y - origY,
        angle: 0,
        fill: "black",
        transparentCorners: false
      });
      canvas.add(rect);
    },

    onMouseMove(event) {
      if (isDown) {
        this.darkroom.dispatchEvent("rectangle:update");
        const canvas = this.darkroom.canvas;
        const pointer = canvas.getPointer(event.e);

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

    handleMouseUp() {
      if (hasFocus) return;
      const canvas = this.darkroom.canvas;
      isDown = false;
      this.darkroom.dispatchEvent("rectangle:end");
      rect.left -= this.darkroom.options.left;
      rect.top -= this.darkroom.options.top;
      this.darkroom.applyTransformation(new RectangleTransformation({
        originalWidth: canvas.getWidth(),
        originalHeight: canvas.getHeight(),
        rectangle: rect
      }));
    }
  });
}());
;(function () {
  let hasFocus = false;

  fabric.Image.prototype.strokeWidth = 0;
  const Text = Darkroom.Transformation.extend({
    applyTransformation(canvas, image, next) {
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

    initialize() {
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

    clear() {
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

    addText() {
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
        scaling() {
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

    setColor(event) {
      this.setStyle(this, "fill", event.target.value);
    },

    setStyle(object, styleName, value) {
      const canvas = this.darkroom.canvas;
      object.newText.fill = value;
      canvas.renderAll();
    },

    saveText() {
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

    onMouseDown() {
      if (!this.newText) { return; }
      if (this.newText.active) {
        this.isDown = true;
      }
    },

    onMouseMove() {
      if (!this.isDown) {
        return;
      }
      const canvas = this.darkroom.canvas;
      canvas.renderAll();
    },

    handleMouseUp() {
      this.isDown = false;
    },

    releaseFocus() {
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
;(function () {
  let ellip;
  let isDown = false;
  let origX;
  let origY;
  let hasFocus = true;

  fabric.Image.prototype.strokeWidth = 0;
  const Circle = Darkroom.Transformation.extend({
    applyTransformation(canvas, image, next) {
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

      canvas.add(this.options.circle);
      canvas.renderAll();
      snapshot.src = canvas.toDataURL();
    }
  });

  Darkroom.plugins.circle = Darkroom.Plugin.extend({

    initialize() {
      const buttonGroup = this.darkroom.toolbar.createButtonGroup();

      this.circleButton = buttonGroup.createButton({
        image: "circle",
        tooltip: "circle"
      });

      this.darkroom.canvas.on("mouse:down", this.onMouseDown.bind(this));
      this.darkroom.canvas.on("mouse:move", this.onMouseMove.bind(this));
      this.darkroom.canvas.on("mouse:up", this.handleMouseUp.bind(this));
      this.circleButton.addEventListener("click", this.onClick.bind(this));
    },

    clear() {
      this.circleButton.active(false);
      hasFocus = true;
      isDown = false;
    },

    onClick() {
      if (!hasFocus) {
        this.circleButton.active(false);
        this.darkroom.canvas.defaultCursor = "default";
        hasFocus = true;
        return;
      }
      this.darkroom.clearFocus("circle");
      this.circleButton.active(true);
      this.darkroom.canvas.defaultCursor = "crosshair";
      hasFocus = false;
    },

    onMouseDown(event) {
      event.e.preventDefault();
      this.isDown = true;
      if (hasFocus) return;
      const canvas = this.darkroom.canvas;
      isDown = true;
      const pointer = canvas.getPointer(event.e);
      origX = pointer.x;
      origY = pointer.y;
      ellip = new fabric.Ellipse({
        left: pointer.x,
        top: pointer.y,
        stroke: "black",
        fill: "transparent",
        strokeWidth: "4",
        rx: 0,
        ry: 0
      });
      canvas.add(ellip);
    },

    onMouseMove(event) {
      if (!this.isDown) {
        return;
      }
      if (isDown && ellip) {
        this.darkroom.dispatchEvent("circle:update");
        const canvas = this.darkroom.canvas;
        const pointer = canvas.getPointer(event.e);

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

    handleMouseUp() {
      if (hasFocus) { return; }
      this.isDown = false;
      ellip.left -= this.darkroom.options.left;
      ellip.top -= this.darkroom.options.top;
      this.darkroom.applyTransformation(new Circle({
        circle: ellip
      }));
    }
  });
}());
;(function () {
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
;(function () {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3RzdHJhcC5qcyIsImRhcmtyb29tLmpzIiwicGx1Z2luLmpzIiwidHJhbnNmb3JtYXRpb24uanMiLCJ1aS5qcyIsInV0aWxzLmpzIiwiZGFya3Jvb20uaGlzdG9yeS5qcyIsImRhcmtyb29tLnJvdGF0ZS5qcyIsImRhcmtyb29tLmNyb3AuanMiLCJkYXJrcm9vbS5wZW5jaWwuanMiLCJkYXJrcm9vbS5yZWN0YW5nbGUuanMiLCJkYXJrcm9vbS50ZXh0LmpzIiwiZGFya3Jvb20uY2lyY2xlLmpzIiwiem9vbS5qcyIsImRhcmtyb29tLnNhdmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0NwWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDbktBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0N4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0M5ckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQ3JTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQ2hKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDcE1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDN0lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQ2pOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJkYXJrcm9vbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gSW5qZWN0IFNWRyBpY29ucyBpbnRvIHRoZSBET01cbnZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5lbGVtZW50LmlkID0gJ2Rhcmtyb29tLWljb25zJztcbmVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gMDtcbmVsZW1lbnQuc3R5bGUud2lkdGggPSAwO1xuZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG5lbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbmVsZW1lbnQuaW5uZXJIVE1MID0gJzwhLS0gaW5qZWN0OnN2ZyAtLT48IS0tIGVuZGluamVjdCAtLT4nO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KTtcblxufSkoKTtcbiIsIihmdW5jdGlvbiAoKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHdpbmRvdy5EYXJrcm9vbSA9IERhcmtyb29tO1xuXG4gIC8vIENvcmUgb2JqZWN0IG9mIERhcmtyb29tSlMuXG4gIC8vIEJhc2ljYWxseSBpdCdzIGEgc2luZ2xlIG9iamVjdCwgaW5zdGFuY2lhYmxlIHZpYSBhbiBlbGVtZW50XG4gIC8vIChpdCBjb3VsZCBiZSBhIENTUyBzZWxlY3RvciBvciBhIERPTSBlbGVtZW50KSwgc29tZSBjdXN0b20gb3B0aW9ucyxcbiAgLy8gYW5kIGEgbGlzdCBvZiBwbHVnaW4gb2JqZWN0cyAob3Igbm9uZSB0byB1c2UgZGVmYXVsdCBvbmVzKS5cbiAgZnVuY3Rpb24gRGFya3Jvb20oZWxlbWVudCwgb3B0aW9ucywgcGx1Z2lucykge1xuICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnMsIHBsdWdpbnMpO1xuICB9XG5cbiAgLy8gQ3JlYXRlIGFuIGVtcHR5IGxpc3Qgb2YgcGx1Z2luIG9iamVjdHMsIHdoaWNoIHdpbGwgYmUgZmlsbGVkIGJ5XG4gIC8vIG90aGVyIHBsdWdpbiBzY3JpcHRzLiBUaGlzIGlzIHRoZSBkZWZhdWx0IHBsdWdpbiBsaXN0IGlmIG5vbmUgaXNcbiAgLy8gc3BlY2lmaWVkIGluIERhcmtyb29tJ3NzIGNvbnN0cnVjdG9yLlxuICBEYXJrcm9vbS5wbHVnaW5zID0gW107XG5cbiAgRGFya3Jvb20ucHJvdG90eXBlID0ge1xuICAgIC8vIFJlZmVyZW5jZSB0byB0aGUgbWFpbiBjb250YWluZXIgZWxlbWVudFxuICAgIGNvbnRhaW5lckVsZW1lbnQ6IG51bGwsXG5cbiAgICAvLyBSZWZlcmVuY2UgdG8gdGhlIEZhYnJpYyBjYW52YXMgb2JqZWN0XG4gICAgY2FudmFzOiBudWxsLFxuXG4gICAgLy8gUmVmZXJlbmNlIHRvIHRoZSBGYWJyaWMgaW1hZ2Ugb2JqZWN0XG4gICAgaW1hZ2U6IG51bGwsXG5cbiAgICAvLyBSZWZlcmVuY2UgdG8gdGhlIEZhYnJpYyBzb3VyY2UgY2FudmFzIG9iamVjdFxuICAgIHNvdXJjZUNhbnZhczogbnVsbCxcblxuICAgIC8vIFJlZmVyZW5jZSB0byB0aGUgRmFicmljIHNvdXJjZSBpbWFnZSBvYmplY3RcbiAgICBzb3VyY2VJbWFnZTogbnVsbCxcblxuICAgIC8vIFRyYWNrIG9mIHRoZSBvcmlnaW5hbCBpbWFnZSBlbGVtZW50XG4gICAgb3JpZ2luYWxJbWFnZUVsZW1lbnQ6IG51bGwsXG5cbiAgICAvLyBTdGFjayBvZiB0cmFuc2Zvcm1hdGlvbnMgdG8gYXBwbHkgdG8gdGhlIGltYWdlIHNvdXJjZVxuICAgIHRyYW5zZm9ybWF0aW9uczogW10sXG5cbiAgICAvLyBEZWZhdWx0IG9wdGlvbnNcbiAgICBkZWZhdWx0czoge1xuICAgICAgLy8gQ2FudmFzIHByb3BlcnRpZXMgKGRpbWVuc2lvbiwgcmF0aW8sIGNvbG9yKVxuICAgICAgbWluV2lkdGg6IG51bGwsXG4gICAgICBtaW5IZWlnaHQ6IG51bGwsXG4gICAgICBtYXhXaWR0aDogbnVsbCxcbiAgICAgIG1heEhlaWdodDogbnVsbCxcbiAgICAgIHJhdGlvOiBudWxsLFxuICAgICAgbGVmdDogMCxcbiAgICAgIHRvcDogMCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmXCIsXG5cbiAgICAgIC8vIFBsdWdpbnMgb3B0aW9uc1xuICAgICAgcGx1Z2luczoge30sXG5cbiAgICAgIC8vIFBvc3QtaW5pdGlhbGlzYXRpb24gY2FsbGJhY2tcbiAgICAgIGluaXRpYWxpemUgKCkgeyAvKiBub29wICovIH1cbiAgICB9LFxuXG4gICAgLy8gTGlzdCBvZiB0aGUgaW5zdGFuY2llZCBwbHVnaW5zXG4gICAgcGx1Z2luczoge30sXG5cbiAgICAvLyBUaGlzIG9wdGlvbnMgYXJlIGEgbWVyZ2UgYmV0d2VlbiBgZGVmYXVsdHNgIGFuZCB0aGUgb3B0aW9ucyBwYXNzZWRcbiAgICAvLyB0aHJvdWdoIHRoZSBjb25zdHJ1Y3RvclxuICAgIG9wdGlvbnM6IHt9LFxuXG4gICAgY29uc3RydWN0b3IgKGVsZW1lbnQsIG9wdGlvbnMsIHBsdWdpbnMpIHtcbiAgICAgIHRoaXMub3B0aW9ucyA9IERhcmtyb29tLlV0aWxzLmV4dGVuZChvcHRpb25zLCB0aGlzLmRlZmF1bHRzKTtcblxuICAgICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJylcbiAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudCk7XG4gICAgICBpZiAobnVsbCA9PT0gZWxlbWVudClcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgICB2YXIgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSB0aGUgRE9NL0ZhYnJpYyBlbGVtZW50c1xuICAgICAgICB0aGlzLl9pbml0aWFsaXplRE9NKGVsZW1lbnQpO1xuICAgICAgICB0aGlzLl9pbml0aWFsaXplSW1hZ2UoKTtcblxuICAgICAgICAvLyBUaGVuIGluaXRpYWxpemUgdGhlIHBsdWdpbnNcbiAgICAgICAgdGhpcy5faW5pdGlhbGl6ZVBsdWdpbnMoRGFya3Jvb20ucGx1Z2lucyk7XG5cbiAgICAgICAgLy8gUHVibGljIG1ldGhvZCB0byBhZGp1c3QgaW1hZ2UgYWNjb3JkaW5nIHRvIHRoZSBjYW52YXNcbiAgICAgICAgdGhpcy5yZWZyZXNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBFeGVjdXRlIGEgY3VzdG9tIGNhbGxiYWNrIGFmdGVyIGluaXRpYWxpemF0aW9uXG4gICAgICAgICAgdGhpcy5vcHRpb25zLmluaXRpYWxpemUuYmluZCh0aGlzKS5jYWxsKCk7XG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAgIH0uYmluZCh0aGlzKVxuXG4gICAgICAvL2ltYWdlLmNyb3NzT3JpZ2luID0gJ2Fub255bW91cyc7XG4gICAgICBpbWFnZS5zcmMgPSBlbGVtZW50LnNyYztcbiAgICB9LFxuXG4gICAgc2VsZkRlc3Ryb3kgKCkge1xuICAgICAgdmFyIGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyRWxlbWVudDtcbiAgICAgIHZhciBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250YWluZXIucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoaW1hZ2UsIGNvbnRhaW5lcik7XG4gICAgICB9XG5cbiAgICAgIGltYWdlLnNyYyA9IHRoaXMuc291cmNlSW1hZ2UudG9EYXRhVVJMKCk7XG4gICAgfSxcblxuICAgIC8vIEFkZCBhYmlsaXR5IHRvIGF0dGFjaCBldmVudCBsaXN0ZW5lciBvbiB0aGUgY29yZSBvYmplY3QuXG4gICAgLy8gSXQgdXNlcyB0aGUgY2FudmFzIGVsZW1lbnQgdG8gcHJvY2VzcyBldmVudHMuXG4gICAgYWRkRXZlbnRMaXN0ZW5lciAoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgICAgdmFyIGVsID0gdGhpcy5jYW52YXMuZ2V0RWxlbWVudCgpO1xuICAgICAgaWYgKGVsLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrKTtcbiAgICAgIH0gZWxzZSBpZiAoZWwuYXR0YWNoRXZlbnQpIHtcbiAgICAgICAgZWwuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50TmFtZSwgY2FsbGJhY2spO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV2ZW50IChldmVudE5hbWUpIHtcbiAgICAgIC8vIFVzZSB0aGUgb2xkIHdheSBvZiBjcmVhdGluZyBldmVudCB0byBiZSBJRSBjb21wYXRpYmxlXG4gICAgICAvLyBTZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvR3VpZGUvRXZlbnRzL0NyZWF0aW5nX2FuZF90cmlnZ2VyaW5nX2V2ZW50c1xuICAgICAgdmFyIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG4gICAgICBldmVudC5pbml0RXZlbnQoZXZlbnROYW1lLCB0cnVlLCB0cnVlKTtcblxuICAgICAgdGhpcy5jYW52YXMuZ2V0RWxlbWVudCgpLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIH0sXG5cbiAgICAvLyBBZGp1c3QgaW1hZ2UgJiBjYW52YXMgZGltZW5zaW9uIGFjY29yZGluZyB0byBtaW4vbWF4IHdpZHRoL2hlaWdodFxuICAgIC8vIGFuZCByYXRpbyBzcGVjaWZpZWQgaW4gdGhlIG9wdGlvbnMuXG4gICAgLy8gVGhpcyBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZCBhZnRlciBlYWNoIGltYWdlIHRyYW5zZm9ybWF0aW9uLlxuICAgIHJlZnJlc2ggKG5leHQpIHtcbiAgICAgIHZhciBjbG9uZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgY2xvbmUub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9yZXBsYWNlQ3VycmVudEltYWdlKG5ldyBmYWJyaWMuSW1hZ2UoY2xvbmUpKTtcblxuICAgICAgICBpZiAobmV4dCkgbmV4dCgpO1xuICAgICAgfS5iaW5kKHRoaXMpO1xuICAgICAgY2xvbmUuc3JjID0gdGhpcy5zb3VyY2VJbWFnZS50b0RhdGFVUkwoKTtcbiAgICB9LFxuXG4gICAgX3JlcGxhY2VDdXJyZW50SW1hZ2UgKG5ld0ltYWdlKSB7XG4gICAgICBpZiAodGhpcy5pbWFnZSkge1xuICAgICAgICB0aGlzLmltYWdlLnJlbW92ZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmltYWdlID0gbmV3SW1hZ2U7XG4gICAgICB0aGlzLmltYWdlLnNlbGVjdGFibGUgPSBmYWxzZTtcbiAgICAgIHRoaXMuaW1hZ2UubGVmdCA9IHRoaXMub3B0aW9ucy5sZWZ0O1xuICAgICAgdGhpcy5pbWFnZS50b3AgPSB0aGlzLm9wdGlvbnMudG9wO1xuXG4gICAgICAvLyBBZGp1c3Qgd2lkdGggb3IgaGVpZ2h0IGFjY29yZGluZyB0byBzcGVjaWZpZWQgcmF0aW9cbiAgICAgIHZhciB2aWV3cG9ydCA9IERhcmtyb29tLlV0aWxzLmNvbXB1dGVJbWFnZVZpZXdQb3J0KHRoaXMuaW1hZ2UpO1xuICAgICAgdmFyIGNhbnZhc1dpZHRoID0gdmlld3BvcnQud2lkdGg7XG4gICAgICB2YXIgY2FudmFzSGVpZ2h0ID0gdmlld3BvcnQuaGVpZ2h0O1xuXG4gICAgICAvLyBpZiAobnVsbCAhPT0gdGhpcy5vcHRpb25zLnJhdGlvKSB7XG4gICAgICAvLyAgIHZhciBjYW52YXNSYXRpbyA9ICt0aGlzLm9wdGlvbnMucmF0aW87XG4gICAgICAvLyAgIHZhciBjdXJyZW50UmF0aW8gPSBjYW52YXNXaWR0aCAvIGNhbnZhc0hlaWdodDtcblxuICAgICAgLy8gICBpZiAoY3VycmVudFJhdGlvID4gY2FudmFzUmF0aW8pIHtcbiAgICAgIC8vICAgICBjYW52YXNIZWlnaHQgPSBjYW52YXNXaWR0aCAvIGNhbnZhc1JhdGlvO1xuICAgICAgLy8gICB9IGVsc2UgaWYgKGN1cnJlbnRSYXRpbyA8IGNhbnZhc1JhdGlvKSB7XG4gICAgICAvLyAgICAgY2FudmFzV2lkdGggPSBjYW52YXNIZWlnaHQgKiBjYW52YXNSYXRpbztcbiAgICAgIC8vICAgfVxuICAgICAgLy8gfVxuXG4gICAgICAvLyAvLyBUaGVuIHNjYWxlIHRoZSBpbWFnZSB0byBmaXQgaW50byBkaW1lbnNpb24gbGltaXRzXG4gICAgICAvLyB2YXIgc2NhbGVNaW4gPSAxO1xuICAgICAgLy8gdmFyIHNjYWxlTWF4ID0gMTtcbiAgICAgIC8vIHZhciBzY2FsZVggPSAxO1xuICAgICAgLy8gdmFyIHNjYWxlWSA9IDE7XG5cbiAgICAgIC8vIGlmIChudWxsICE9PSB0aGlzLm9wdGlvbnMubWF4V2lkdGggJiYgdGhpcy5vcHRpb25zLm1heFdpZHRoIDwgY2FudmFzV2lkdGgpIHtcbiAgICAgIC8vICAgc2NhbGVYID0gIHRoaXMub3B0aW9ucy5tYXhXaWR0aCAvIGNhbnZhc1dpZHRoO1xuICAgICAgLy8gfVxuICAgICAgLy8gaWYgKG51bGwgIT09IHRoaXMub3B0aW9ucy5tYXhIZWlnaHQgJiYgdGhpcy5vcHRpb25zLm1heEhlaWdodCA8IGNhbnZhc0hlaWdodCkge1xuICAgICAgLy8gICBzY2FsZVkgPSAgdGhpcy5vcHRpb25zLm1heEhlaWdodCAvIGNhbnZhc0hlaWdodDtcbiAgICAgIC8vIH1cbiAgICAgIC8vIHNjYWxlTWluID0gTWF0aC5taW4oc2NhbGVYLCBzY2FsZVkpO1xuXG4gICAgICAvLyBzY2FsZVggPSAxO1xuICAgICAgLy8gc2NhbGVZID0gMTtcbiAgICAgIC8vIGlmIChudWxsICE9PSB0aGlzLm9wdGlvbnMubWluV2lkdGggJiYgdGhpcy5vcHRpb25zLm1pbldpZHRoID4gY2FudmFzV2lkdGgpIHtcbiAgICAgIC8vICAgc2NhbGVYID0gIHRoaXMub3B0aW9ucy5taW5XaWR0aCAvIGNhbnZhc1dpZHRoO1xuICAgICAgLy8gfVxuICAgICAgLy8gaWYgKG51bGwgIT09IHRoaXMub3B0aW9ucy5taW5IZWlnaHQgJiYgdGhpcy5vcHRpb25zLm1pbkhlaWdodCA+IGNhbnZhc0hlaWdodCkge1xuICAgICAgLy8gICBzY2FsZVkgPSAgdGhpcy5vcHRpb25zLm1pbkhlaWdodCAvIGNhbnZhc0hlaWdodDtcbiAgICAgIC8vIH1cbiAgICAgIC8vIHNjYWxlTWF4ID0gTWF0aC5tYXgoc2NhbGVYLCBzY2FsZVkpO1xuXG4gICAgICAvLyB2YXIgc2NhbGUgPSBzY2FsZU1heCAqIHNjYWxlTWluOyAvLyBvbmUgc2hvdWxkIGJlIGVxdWFscyB0byAxXG5cbiAgICAgIC8vIGNhbnZhc1dpZHRoICo9IHNjYWxlO1xuICAgICAgLy8gY2FudmFzSGVpZ2h0ICo9IHNjYWxlO1xuXG4gICAgICAvLyBGaW5hbGx5IHBsYWNlIHRoZSBpbWFnZSBpbiB0aGUgY2VudGVyIG9mIHRoZSBjYW52YXNcbiAgICAgIC8vIHRoaXMuaW1hZ2Uuc2V0U2NhbGVYKDEgKiBzY2FsZSk7XG4gICAgICAvLyB0aGlzLmltYWdlLnNldFNjYWxlWSgxICogc2NhbGUpO1xuICAgICAgdGhpcy5jYW52YXMuYWRkKHRoaXMuaW1hZ2UpO1xuICAgICAgdGhpcy5jYW52YXMuc2V0V2lkdGgoY2FudmFzV2lkdGgpO1xuICAgICAgdGhpcy5jYW52YXMuc2V0SGVpZ2h0KGNhbnZhc0hlaWdodCk7XG5cbiAgICAgIC8vIFJlc2l6ZSB0aGUgaW1hZ2UgdG8gZml0IHRoZSBjYW52YXNcbiAgICAgIGlmICh0aGlzLmltYWdlLm9Db29yZHMuYnIueCA8IHRoaXMuY2FudmFzLndpZHRoKSB7XG4gICAgICAgIHRoaXMuaW1hZ2UubGVmdCA9IHRoaXMuaW1hZ2UubGVmdCArIE1hdGguY2VpbCh0aGlzLmNhbnZhcy53aWR0aCAtIHRoaXMuaW1hZ2Uub0Nvb3Jkcy5ici54KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmltYWdlLm9Db29yZHMuYnIueSA8IHRoaXMuY2FudmFzLmhlaWdodCkge1xuICAgICAgICB0aGlzLmltYWdlLnRvcCA9IHRoaXMuaW1hZ2UudG9wICsgTWF0aC5jZWlsKHRoaXMuY2FudmFzLmhlaWdodCAtIHRoaXMuaW1hZ2Uub0Nvb3Jkcy5ici55KTtcbiAgICAgIH1cbiAgICAgIC8vIHRoaXMuY2FudmFzLmNlbnRlck9iamVjdCh0aGlzLmltYWdlKTtcbiAgICAgIHRoaXMuaW1hZ2Uuc2V0Q29vcmRzKCk7XG4gICAgfSxcblxuICAgIC8vIEFwcGx5IHRoZSB0cmFuc2Zvcm1hdGlvbiBvbiB0aGUgY3VycmVudCBpbWFnZSBhbmQgc2F2ZSBpdCBpbiB0aGVcbiAgICAvLyB0cmFuc2Zvcm1hdGlvbnMgc3RhY2sgKGluIG9yZGVyIHRvIHJlY29uc3RpdHV0ZSB0aGUgcHJldmlvdXMgc3RhdGVzXG4gICAgLy8gb2YgdGhlIGltYWdlKS5cbiAgICBhcHBseVRyYW5zZm9ybWF0aW9uICh0cmFuc2Zvcm1hdGlvbikge1xuICAgICAgdGhpcy50cmFuc2Zvcm1hdGlvbnMucHVzaCh0cmFuc2Zvcm1hdGlvbik7XG5cbiAgICAgIHRyYW5zZm9ybWF0aW9uLmFwcGx5VHJhbnNmb3JtYXRpb24oXG4gICAgICAgIHRoaXMuc291cmNlQ2FudmFzLFxuICAgICAgICB0aGlzLnNvdXJjZUltYWdlLFxuICAgICAgICB0aGlzLl9wb3N0VHJhbnNmb3JtYXRpb24uYmluZCh0aGlzKVxuICAgICAgKTtcbiAgICB9LFxuXG4gICAgX3Bvc3RUcmFuc2Zvcm1hdGlvbiAobmV3SW1hZ2UpIHtcbiAgICAgIGlmIChuZXdJbWFnZSlcbiAgICAgICAgdGhpcy5zb3VyY2VJbWFnZSA9IG5ld0ltYWdlO1xuXG4gICAgICB0aGlzLnJlZnJlc2goZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2NvcmU6dHJhbnNmb3JtYXRpb24nKTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfSxcblxuICAgIC8vIEluaXRpYWxpemUgaW1hZ2UgZnJvbSBvcmlnaW5hbCBlbGVtZW50IHBsdXMgcmUtYXBwbHkgZXZlcnlcbiAgICAvLyB0cmFuc2Zvcm1hdGlvbnMuXG4gICAgcmVpbml0aWFsaXplSW1hZ2UgKCkge1xuICAgICAgdGhpcy5zb3VyY2VJbWFnZS5yZW1vdmUoKTtcbiAgICAgIHRoaXMuX2luaXRpYWxpemVJbWFnZSgpO1xuICAgICAgdGhpcy5fcG9wVHJhbnNmb3JtYXRpb24odGhpcy50cmFuc2Zvcm1hdGlvbnMuc2xpY2UoKSlcbiAgICB9LFxuXG4gICAgX3BvcFRyYW5zZm9ybWF0aW9uICh0cmFuc2Zvcm1hdGlvbnMpIHtcbiAgICAgIGlmICgwID09PSB0cmFuc2Zvcm1hdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnY29yZTpyZWluaXRpYWxpemVkJyk7XG4gICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciB0cmFuc2Zvcm1hdGlvbiA9IHRyYW5zZm9ybWF0aW9ucy5zaGlmdCgpO1xuXG4gICAgICB2YXIgbmV4dCA9IGZ1bmN0aW9uIChuZXdJbWFnZSkge1xuICAgICAgICBpZiAobmV3SW1hZ2UpIHRoaXMuc291cmNlSW1hZ2UgPSBuZXdJbWFnZTtcbiAgICAgICAgdGhpcy5fcG9wVHJhbnNmb3JtYXRpb24odHJhbnNmb3JtYXRpb25zKVxuICAgICAgfTtcblxuICAgICAgdHJhbnNmb3JtYXRpb24uYXBwbHlUcmFuc2Zvcm1hdGlvbihcbiAgICAgICAgdGhpcy5zb3VyY2VDYW52YXMsXG4gICAgICAgIHRoaXMuc291cmNlSW1hZ2UsXG4gICAgICAgIG5leHQuYmluZCh0aGlzKVxuICAgICAgKTtcbiAgICB9LFxuXG4gICAgLy8gQ3JlYXRlIHRoZSBET00gZWxlbWVudHMgYW5kIGluc3RhbmNpYXRlIHRoZSBGYWJyaWMgY2FudmFzLlxuICAgIC8vIFRoZSBpbWFnZSBlbGVtZW50IGlzIHJlcGxhY2VkIGJ5IGEgbmV3IGBkaXZgIGVsZW1lbnQuXG4gICAgLy8gSG93ZXZlciB0aGUgb3JpZ2luYWwgaW1hZ2UgaXMgcmUtaW5qZWN0ZWQgaW4gb3JkZXIgdG8ga2VlcCBhIHRyYWNlIG9mIGl0LlxuICAgIF9pbml0aWFsaXplRE9NIChpbWFnZUVsZW1lbnQpIHtcbiAgICAgIC8vIENvbnRhaW5lclxuICAgICAgdmFyIG1haW5Db250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBtYWluQ29udGFpbmVyRWxlbWVudC5jbGFzc05hbWUgPSAnZGFya3Jvb20tY29udGFpbmVyJztcblxuICAgICAgLy8gVG9vbGJhclxuICAgICAgdmFyIHRvb2xiYXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0b29sYmFyRWxlbWVudC5jbGFzc05hbWUgPSAnZGFya3Jvb20tdG9vbGJhcic7XG4gICAgICBtYWluQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZCh0b29sYmFyRWxlbWVudCk7XG5cbiAgICAgIC8vIFZpZXdwb3J0IGNhbnZhc1xuICAgICAgdmFyIGNhbnZhc0NvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNhbnZhc0NvbnRhaW5lckVsZW1lbnQuY2xhc3NOYW1lID0gJ2Rhcmtyb29tLWltYWdlLWNvbnRhaW5lcic7XG4gICAgICB2YXIgY2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgY2FudmFzQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChjYW52YXNFbGVtZW50KTtcbiAgICAgIG1haW5Db250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGNhbnZhc0NvbnRhaW5lckVsZW1lbnQpO1xuXG4gICAgICAvLyBTb3VyY2UgY2FudmFzXG4gICAgICB2YXIgc291cmNlQ2FudmFzQ29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgc291cmNlQ2FudmFzQ29udGFpbmVyRWxlbWVudC5jbGFzc05hbWUgPSAnZGFya3Jvb20tc291cmNlLWNvbnRhaW5lcic7XG4gICAgICBzb3VyY2VDYW52YXNDb250YWluZXJFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB2YXIgc291cmNlQ2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgc291cmNlQ2FudmFzQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChzb3VyY2VDYW52YXNFbGVtZW50KTtcbiAgICAgIG1haW5Db250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKHNvdXJjZUNhbnZhc0NvbnRhaW5lckVsZW1lbnQpO1xuXG4gICAgICAvLyBPcmlnaW5hbCBpbWFnZVxuICAgICAgaW1hZ2VFbGVtZW50LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG1haW5Db250YWluZXJFbGVtZW50LCBpbWFnZUVsZW1lbnQpO1xuICAgICAgaW1hZ2VFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBtYWluQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChpbWFnZUVsZW1lbnQpO1xuXG4gICAgICAvLyBJbnN0YW5jaWF0ZSBvYmplY3QgZnJvbSBlbGVtZW50c1xuICAgICAgdGhpcy5jb250YWluZXJFbGVtZW50ID0gbWFpbkNvbnRhaW5lckVsZW1lbnQ7XG4gICAgICB0aGlzLm9yaWdpbmFsSW1hZ2VFbGVtZW50ID0gaW1hZ2VFbGVtZW50O1xuXG4gICAgICB0aGlzLnRvb2xiYXIgPSBuZXcgRGFya3Jvb20uVUkuVG9vbGJhcih0b29sYmFyRWxlbWVudCk7XG5cbiAgICAgIHRoaXMuY2FudmFzID0gbmV3IGZhYnJpYy5DYW52YXMoY2FudmFzRWxlbWVudCwge1xuICAgICAgICBzZWxlY3Rpb246IGZhbHNlLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3JcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnNvdXJjZUNhbnZhcyA9IG5ldyBmYWJyaWMuQ2FudmFzKHNvdXJjZUNhbnZhc0VsZW1lbnQsIHtcbiAgICAgICAgc2VsZWN0aW9uOiBmYWxzZSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLm9wdGlvbnMuYmFja2dyb3VuZENvbG9yXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLy8gSW5zdGFuY2lhdGUgdGhlIEZhYnJpYyBpbWFnZSBvYmplY3QuXG4gICAgLy8gVGhlIGltYWdlIGlzIGNyZWF0ZWQgYXMgYSBzdGF0aWMgZWxlbWVudCB3aXRoIG5vIGNvbnRyb2wsXG4gICAgLy8gdGhlbiBpdCBpcyBhZGQgaW4gdGhlIEZhYnJpYyBjYW52YXMgb2JqZWN0LlxuICAgIF9pbml0aWFsaXplSW1hZ2UgKCkge1xuICAgICAgdGhpcy5zb3VyY2VJbWFnZSA9IG5ldyBmYWJyaWMuSW1hZ2UodGhpcy5vcmlnaW5hbEltYWdlRWxlbWVudCwge1xuICAgICAgICAvLyBTb21lIG9wdGlvbnMgdG8gbWFrZSB0aGUgaW1hZ2Ugc3RhdGljXG4gICAgICAgIHNlbGVjdGFibGU6IGZhbHNlLFxuICAgICAgICBldmVudGVkOiBmYWxzZSxcbiAgICAgICAgbG9ja01vdmVtZW50WDogdHJ1ZSxcbiAgICAgICAgbG9ja01vdmVtZW50WTogdHJ1ZSxcbiAgICAgICAgbG9ja1JvdGF0aW9uOiB0cnVlLFxuICAgICAgICBsb2NrU2NhbGluZ1g6IHRydWUsXG4gICAgICAgIGxvY2tTY2FsaW5nWTogdHJ1ZSxcbiAgICAgICAgbG9ja1VuaVNjYWxpbmc6IHRydWUsXG4gICAgICAgIGhhc0NvbnRyb2xzOiBmYWxzZSxcbiAgICAgICAgaGFzQm9yZGVyczogZmFsc2UsXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5zb3VyY2VDYW52YXMuYWRkKHRoaXMuc291cmNlSW1hZ2UpO1xuXG4gICAgICAvLyBBZGp1c3Qgd2lkdGggb3IgaGVpZ2h0IGFjY29yZGluZyB0byBzcGVjaWZpZWQgcmF0aW9cbiAgICAgIHZhciB2aWV3cG9ydCA9IERhcmtyb29tLlV0aWxzLmNvbXB1dGVJbWFnZVZpZXdQb3J0KHRoaXMuc291cmNlSW1hZ2UpO1xuICAgICAgdmFyIGNhbnZhc1dpZHRoID0gdmlld3BvcnQud2lkdGg7XG4gICAgICB2YXIgY2FudmFzSGVpZ2h0ID0gdmlld3BvcnQuaGVpZ2h0O1xuXG4gICAgICB0aGlzLnNvdXJjZUNhbnZhcy5zZXRXaWR0aChjYW52YXNXaWR0aCk7XG4gICAgICB0aGlzLnNvdXJjZUNhbnZhcy5zZXRIZWlnaHQoY2FudmFzSGVpZ2h0KTtcbiAgICAgIHRoaXMuc291cmNlQ2FudmFzLmNlbnRlck9iamVjdCh0aGlzLnNvdXJjZUltYWdlKTtcbiAgICAgIHRoaXMuc291cmNlSW1hZ2Uuc2V0Q29vcmRzKCk7XG4gICAgfSxcblxuICAgIC8vIEluaXRpYWxpemUgZXZlcnkgcGx1Z2lucy5cbiAgICAvLyBOb3RlIHRoYXQgcGx1Z2lucyBhcmUgaW5zdGFuY2lhdGVkIGluIHRoZSBzYW1lIG9yZGVyIHRoYW4gdGhleVxuICAgIC8vIGFyZSBkZWNsYXJlZCBpbiB0aGUgcGFyYW1ldGVyIG9iamVjdC5cbiAgICBfaW5pdGlhbGl6ZVBsdWdpbnMgKHBsdWdpbnMpIHtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gcGx1Z2lucykge1xuICAgICAgICB2YXIgcGx1Z2luID0gcGx1Z2luc1tuYW1lXTtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMucGx1Z2luc1tuYW1lXTtcblxuICAgICAgICAvLyBTZXR0aW5nIGZhbHNlIGludG8gdGhlIHBsdWdpbiBvcHRpb25zIHdpbGwgZGlzYWJsZSB0aGUgcGx1Z2luXG4gICAgICAgIGlmIChvcHRpb25zID09PSBmYWxzZSlcbiAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAvLyBBdm9pZCBhbnkgaXNzdWVzIHdpdGggX3Byb3RvX1xuICAgICAgICBpZiAoIXBsdWdpbnMuaGFzT3duUHJvcGVydHkobmFtZSkpXG4gICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgdGhpcy5wbHVnaW5zW25hbWVdID0gbmV3IHBsdWdpbih0aGlzLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgY2xlYXJGb2N1cyAoaW5zdGFuY2UpIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLnBsdWdpbnMpIHtcbiAgICAgICAgaWYgKGtleSAhPSBpbnN0YW5jZSkge1xuICAgICAgICAgIHRoaXMucGx1Z2luc1trZXldLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG59KCkpO1xuIiwiKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG5EYXJrcm9vbS5QbHVnaW4gPSBQbHVnaW47XG5cbi8vIERlZmluZSBhIHBsdWdpbiBvYmplY3QuIFRoaXMgaXMgdGhlIChhYnN0cmFjdCkgcGFyZW50IGNsYXNzIHdoaWNoXG4vLyBoYXMgdG8gYmUgZXh0ZW5kZWQgZm9yIGVhY2ggcGx1Z2luLlxuZnVuY3Rpb24gUGx1Z2luKGRhcmtyb29tLCBvcHRpb25zKSB7XG4gIHRoaXMuZGFya3Jvb20gPSBkYXJrcm9vbTtcbiAgdGhpcy5vcHRpb25zID0gRGFya3Jvb20uVXRpbHMuZXh0ZW5kKG9wdGlvbnMsIHRoaXMuZGVmYXVsdHMpO1xuICB0aGlzLmluaXRpYWxpemUoKTtcbn1cblxuUGx1Z2luLnByb3RvdHlwZSA9IHtcbiAgZGVmYXVsdHM6IHt9LFxuICBpbml0aWFsaXplOiBmdW5jdGlvbigpIHsgfSxcbiAgY2xlYXI6IGZ1bmN0aW9uKCkgeyB9XG59XG5cbi8vIEluc3BpcmVkIGJ5IEJhY2tib25lLmpzIGV4dGVuZCBjYXBhYmlsaXR5LlxuUGx1Z2luLmV4dGVuZCA9IGZ1bmN0aW9uKHByb3RvUHJvcHMpIHtcbiAgdmFyIHBhcmVudCA9IHRoaXM7XG4gIHZhciBjaGlsZDtcblxuICBpZiAocHJvdG9Qcm9wcyAmJiBwcm90b1Byb3BzLmhhc093blByb3BlcnR5KCdjb25zdHJ1Y3RvcicpKSB7XG4gICAgY2hpbGQgPSBwcm90b1Byb3BzLmNvbnN0cnVjdG9yO1xuICB9IGVsc2Uge1xuICAgIGNoaWxkID0gZnVuY3Rpb24oKXsgcmV0dXJuIHBhcmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9O1xuICB9XG5cbiAgRGFya3Jvb20uVXRpbHMuZXh0ZW5kKGNoaWxkLCBwYXJlbnQpO1xuXG4gIHZhciBTdXJyb2dhdGUgPSBmdW5jdGlvbigpeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH07XG4gIFN1cnJvZ2F0ZS5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlO1xuICBjaGlsZC5wcm90b3R5cGUgPSBuZXcgU3Vycm9nYXRlO1xuXG4gIGlmIChwcm90b1Byb3BzKSBEYXJrcm9vbS5VdGlscy5leHRlbmQoY2hpbGQucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcblxuICBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlO1xuXG4gIHJldHVybiBjaGlsZDtcbn1cblxufSkoKTtcbiIsIihmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuRGFya3Jvb20uVHJhbnNmb3JtYXRpb24gPSBUcmFuc2Zvcm1hdGlvbjtcblxuZnVuY3Rpb24gVHJhbnNmb3JtYXRpb24ob3B0aW9ucykge1xuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xufVxuXG5UcmFuc2Zvcm1hdGlvbi5wcm90b3R5cGUgPSB7XG4gIGFwcGx5VHJhbnNmb3JtYXRpb246IGZ1bmN0aW9uKGltYWdlKSB7IC8qIG5vLW9wICovICB9XG59XG5cbi8vIEluc3BpcmVkIGJ5IEJhY2tib25lLmpzIGV4dGVuZCBjYXBhYmlsaXR5LlxuVHJhbnNmb3JtYXRpb24uZXh0ZW5kID0gZnVuY3Rpb24ocHJvdG9Qcm9wcykge1xuICB2YXIgcGFyZW50ID0gdGhpcztcbiAgdmFyIGNoaWxkO1xuXG4gIGlmIChwcm90b1Byb3BzICYmIHByb3RvUHJvcHMuaGFzT3duUHJvcGVydHkoJ2NvbnN0cnVjdG9yJykpIHtcbiAgICBjaGlsZCA9IHByb3RvUHJvcHMuY29uc3RydWN0b3I7XG4gIH0gZWxzZSB7XG4gICAgY2hpbGQgPSBmdW5jdGlvbigpeyByZXR1cm4gcGFyZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XG4gIH1cblxuICBEYXJrcm9vbS5VdGlscy5leHRlbmQoY2hpbGQsIHBhcmVudCk7XG5cbiAgdmFyIFN1cnJvZ2F0ZSA9IGZ1bmN0aW9uKCl7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfTtcbiAgU3Vycm9nYXRlLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7XG4gIGNoaWxkLnByb3RvdHlwZSA9IG5ldyBTdXJyb2dhdGU7XG5cbiAgaWYgKHByb3RvUHJvcHMpIERhcmtyb29tLlV0aWxzLmV4dGVuZChjaGlsZC5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuXG4gIGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7XG5cbiAgcmV0dXJuIGNoaWxkO1xufVxuXG59KSgpO1xuIiwiKGZ1bmN0aW9uICgpIHtcbiAgRGFya3Jvb20uVUkgPSB7XG4gICAgVG9vbGJhcixcbiAgICBCdXR0b25Hcm91cCxcbiAgICBCdXR0b24sXG4gICAgSW5wdXRcbiAgfTtcblxuICAvLyBUb29sYmFyIG9iamVjdC5cbiAgZnVuY3Rpb24gVG9vbGJhcihlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIFRvb2xiYXIucHJvdG90eXBlID0ge1xuICAgIGNyZWF0ZUJ1dHRvbkdyb3VwKCkge1xuICAgICAgY29uc3QgYnV0dG9uR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgYnV0dG9uR3JvdXAuY2xhc3NOYW1lID0gXCJkYXJrcm9vbS1idXR0b24tZ3JvdXBcIjtcbiAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChidXR0b25Hcm91cCk7XG5cbiAgICAgIHJldHVybiBuZXcgQnV0dG9uR3JvdXAoYnV0dG9uR3JvdXApO1xuICAgIH1cbiAgfTtcblxuICAvLyBCdXR0b25Hcm91cCBvYmplY3QuXG4gIGZ1bmN0aW9uIEJ1dHRvbkdyb3VwKGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG5cbiAgQnV0dG9uR3JvdXAucHJvdG90eXBlID0ge1xuICAgIGNyZWF0ZUJ1dHRvbihvcHRpb25zKSB7XG4gICAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgICAgaW1hZ2U6IFwiaGVscFwiLFxuICAgICAgICB0eXBlOiBcImRlZmF1bHRcIixcbiAgICAgICAgZ3JvdXA6IFwiZGVmYXVsdFwiLFxuICAgICAgICBoaWRlOiBmYWxzZSxcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlXG4gICAgICB9O1xuXG4gICAgICBvcHRpb25zID0gRGFya3Jvb20uVXRpbHMuZXh0ZW5kKG9wdGlvbnMsIGRlZmF1bHRzKTtcblxuICAgICAgY29uc3QgYnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBidXR0b25FbGVtZW50LnR5cGUgPSBcImJ1dHRvblwiO1xuICAgICAgYnV0dG9uRWxlbWVudC5jbGFzc05hbWUgPSBgZGFya3Jvb20tYnV0dG9uIGRhcmtyb29tLWJ1dHRvbi0ke29wdGlvbnMudHlwZX1gO1xuICAgICAgYnV0dG9uRWxlbWVudC5pbm5lckhUTUwgPSBgPHN2ZyBjbGFzcz1cImRhcmtyb29tLWljb25cIj48dXNlIHhsaW5rOmhyZWY9XCIjJHtvcHRpb25zLmltYWdlfVwiIC8+PC9zdmc+YDtcbiAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChidXR0b25FbGVtZW50KTtcblxuICAgICAgY29uc3QgYnV0dG9uID0gbmV3IEJ1dHRvbihidXR0b25FbGVtZW50KTtcbiAgICAgIGJ1dHRvbi5oaWRlKG9wdGlvbnMuaGlkZSk7XG4gICAgICBidXR0b24uZGlzYWJsZShvcHRpb25zLmRpc2FibGVkKTtcblxuICAgICAgcmV0dXJuIGJ1dHRvbjtcbiAgICB9LFxuXG4gICAgY3JlYXRlSW5wdXQob3B0aW9ucykge1xuICAgICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICAgIGltYWdlOiBcImhlbHBcIixcbiAgICAgICAgdHlwZTogXCJpbnB1dFwiLFxuICAgICAgICBncm91cDogXCJkZWZhdWx0XCIsXG4gICAgICAgIGhpZGU6IGZhbHNlLFxuICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgIHZhbHVlOiBcIlwiXG4gICAgICB9O1xuXG4gICAgICBvcHRpb25zID0gRGFya3Jvb20uVXRpbHMuZXh0ZW5kKG9wdGlvbnMsIGRlZmF1bHRzKTtcblxuICAgICAgY29uc3QgZGF0YWxpc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRhdGFsaXN0XCIpO1xuICAgICAgZGF0YWxpc3RFbGVtZW50LmlkID0gXCJyYWluYm93XCI7XG4gICAgICBjb25zdCBkYXRhbGlzdEVsZW1lbnRPcHRpb25yZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uc1wiKTtcbiAgICAgIGRhdGFsaXN0RWxlbWVudE9wdGlvbnJlZC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIiNGRjAwMDBcIik7XG4gICAgICBkYXRhbGlzdEVsZW1lbnRPcHRpb25yZWQuaW5uZXJIVE1MID0gXCJyZWRcIjtcbiAgICAgIGRhdGFsaXN0RWxlbWVudC5hcHBlbmRDaGlsZChkYXRhbGlzdEVsZW1lbnRPcHRpb25yZWQpO1xuICAgICAgY29uc3QgZGF0YWxpc3RFbGVtZW50T3B0aW9uT3JhbmdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvbnNcIik7XG4gICAgICBkYXRhbGlzdEVsZW1lbnRPcHRpb25PcmFuZ2Uuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCIjRkZBNTAwXCIpO1xuICAgICAgZGF0YWxpc3RFbGVtZW50T3B0aW9uT3JhbmdlLmlubmVySFRNTCA9IFwiT3JhbmdlXCI7XG4gICAgICBkYXRhbGlzdEVsZW1lbnQuYXBwZW5kQ2hpbGQoZGF0YWxpc3RFbGVtZW50T3B0aW9uT3JhbmdlKTtcbiAgICAgIGNvbnN0IGRhdGFsaXN0RWxlbWVudE9wdGlvblllbGxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25zXCIpO1xuICAgICAgZGF0YWxpc3RFbGVtZW50T3B0aW9uWWVsbG93LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiI0ZGRkYwMFwiKTtcbiAgICAgIGRhdGFsaXN0RWxlbWVudE9wdGlvblllbGxvdy5pbm5lckhUTUwgPSBcIlllbGxvd1wiO1xuICAgICAgZGF0YWxpc3RFbGVtZW50LmFwcGVuZENoaWxkKGRhdGFsaXN0RWxlbWVudE9wdGlvblllbGxvdyk7XG4gICAgICBjb25zdCBkYXRhbGlzdEVsZW1lbnRPcHRpb25HcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25zXCIpO1xuICAgICAgZGF0YWxpc3RFbGVtZW50T3B0aW9uR3JlZW4uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCIjMDA4MDAwXCIpO1xuICAgICAgZGF0YWxpc3RFbGVtZW50T3B0aW9uR3JlZW4uaW5uZXJIVE1MID0gXCJHcmVlblwiO1xuICAgICAgZGF0YWxpc3RFbGVtZW50LmFwcGVuZENoaWxkKGRhdGFsaXN0RWxlbWVudE9wdGlvbkdyZWVuKTtcbiAgICAgIGNvbnN0IGRhdGFsaXN0RWxlbWVudE9wdGlvbkJsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uc1wiKTtcbiAgICAgIGRhdGFsaXN0RWxlbWVudE9wdGlvbkJsdWUuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCIjMDAwMEZGXCIpO1xuICAgICAgZGF0YWxpc3RFbGVtZW50T3B0aW9uQmx1ZS5pbm5lckhUTUwgPSBcIkJsdWVcIjtcbiAgICAgIGRhdGFsaXN0RWxlbWVudC5hcHBlbmRDaGlsZChkYXRhbGlzdEVsZW1lbnRPcHRpb25CbHVlKTtcbiAgICAgIC8vIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChkYXRhbGlzdEVsZW1lbnQpO1xuXG4gICAgICBjb25zdCBpbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICBpbnB1dEVsZW1lbnQudHlwZSA9IFwiY29sb3JcIjtcbiAgICAgIGlucHV0RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJsaXN0XCIsIFwicmFpbmJvd1wiKTtcbiAgICAgIGlucHV0RWxlbWVudC52YWx1ZSA9IFwiI2ZmMDAwMFwiO1xuICAgICAgaW5wdXRFbGVtZW50LmNsYXNzTmFtZSA9IGBkYXJrcm9vbS1idXR0b24gZGFya3Jvb20taW5wdXQtJHtvcHRpb25zLnR5cGV9YDtcbiAgICAgIGlucHV0RWxlbWVudC5pbm5lckhUTUwgPSBgPHN2ZyBjbGFzcz1cImRhcmtyb29tLWljb25cIj48dXNlIHhsaW5rOmhyZWY9XCIjJHtvcHRpb25zLmltYWdlfVwiIC8+PC9zdmc+YDtcbiAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChpbnB1dEVsZW1lbnQpO1xuXG4gICAgICBjb25zdCBpbnB1dCA9IG5ldyBJbnB1dChpbnB1dEVsZW1lbnQpO1xuICAgICAgaW5wdXQuaGlkZShvcHRpb25zLmhpZGUpO1xuICAgICAgaW5wdXQuZGlzYWJsZShvcHRpb25zLmRpc2FibGVkKTtcblxuICAgICAgcmV0dXJuIGlucHV0O1xuICAgIH1cbiAgfTtcblxuICAvLyBCdXR0b24gb2JqZWN0LlxuICBmdW5jdGlvbiBCdXR0b24oZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICAvLyBJbnB1dCBvYmplY3QuXG4gIGZ1bmN0aW9uIElucHV0KGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG5cbiAgQnV0dG9uLnByb3RvdHlwZSA9IHtcbiAgICBhZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIpIHtcbiAgICAgIGlmICh0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50LmF0dGFjaEV2ZW50KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hdHRhY2hFdmVudChgb24ke2V2ZW50TmFtZX1gLCBsaXN0ZW5lcik7XG4gICAgICB9XG4gICAgfSxcbiAgICByZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIpIHtcbiAgICAgIGlmICh0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGFjdGl2ZSh2YWx1ZSkge1xuICAgICAgaWYgKHZhbHVlKSB7IHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZGFya3Jvb20tYnV0dG9uLWFjdGl2ZVwiKTsgfSBlbHNlIHsgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkYXJrcm9vbS1idXR0b24tYWN0aXZlXCIpOyB9XG4gICAgfSxcbiAgICBoaWRlKHZhbHVlKSB7XG4gICAgICBpZiAodmFsdWUpIHsgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkYXJrcm9vbS1idXR0b24taGlkZGVuXCIpOyB9IGVsc2UgeyB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRhcmtyb29tLWJ1dHRvbi1oaWRkZW5cIik7IH1cbiAgICB9LFxuICAgIGRpc2FibGUodmFsdWUpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5kaXNhYmxlZCA9ICEhdmFsdWU7XG4gICAgfVxuICB9O1xuXG4gIElucHV0LnByb3RvdHlwZSA9IHtcbiAgICBhZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIpIHtcbiAgICAgIGlmICh0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50LmF0dGFjaEV2ZW50KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hdHRhY2hFdmVudChgb24ke2V2ZW50TmFtZX1gLCBsaXN0ZW5lcik7XG4gICAgICB9XG4gICAgfSxcbiAgICByZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIpIHtcbiAgICAgIGlmICh0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGFjdGl2ZSh2YWx1ZSkge1xuICAgICAgaWYgKHZhbHVlKSB7IHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZGFya3Jvb20taW5wdXQtYWN0aXZlXCIpOyB9IGVsc2UgeyB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRhcmtyb29tLWlucHV0LWFjdGl2ZVwiKTsgfVxuICAgIH0sXG4gICAgaGlkZSh2YWx1ZSkge1xuICAgICAgaWYgKHZhbHVlKSB7IHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZGFya3Jvb20tYnV0dG9uLWhpZGRlblwiKTsgfSBlbHNlIHsgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkYXJrcm9vbS1idXR0b24taGlkZGVuXCIpOyB9XG4gICAgfSxcbiAgICBkaXNhYmxlKHZhbHVlKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuZGlzYWJsZWQgPSAhIXZhbHVlO1xuICAgIH1cbiAgfTtcbn0oKSk7XG4iLCIoZnVuY3Rpb24gKCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBEYXJrcm9vbS5VdGlscyA9IHtcbiAgICBleHRlbmQsXG4gICAgY29tcHV0ZUltYWdlVmlld1BvcnRcbiAgfTtcblxuXG4gIC8vIFV0aWxpdHkgbWV0aG9kIHRvIGVhc2lseSBleHRlbmQgb2JqZWN0cy5cbiAgZnVuY3Rpb24gZXh0ZW5kKGIsIGEpIHtcbiAgICBsZXQgcHJvcDtcbiAgICBpZiAoYiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gYTtcbiAgICB9XG4gICAgZm9yIChwcm9wIGluIGEpIHtcbiAgICAgIGlmIChhLmhhc093blByb3BlcnR5KHByb3ApICYmIGIuaGFzT3duUHJvcGVydHkocHJvcCkgPT09IGZhbHNlKSB7XG4gICAgICAgIGJbcHJvcF0gPSBhW3Byb3BdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbXB1dGVJbWFnZVZpZXdQb3J0KGltYWdlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhlaWdodDogTWF0aC5hYnMoaW1hZ2UuZ2V0V2lkdGgoKSAqIChNYXRoLnNpbihpbWFnZS5nZXRBbmdsZSgpICogTWF0aC5QSSAvIDE4MCkpKSArIE1hdGguYWJzKGltYWdlLmdldEhlaWdodCgpICogKE1hdGguY29zKGltYWdlLmdldEFuZ2xlKCkgKiBNYXRoLlBJIC8gMTgwKSkpLFxuICAgICAgd2lkdGg6IE1hdGguYWJzKGltYWdlLmdldEhlaWdodCgpICogKE1hdGguc2luKGltYWdlLmdldEFuZ2xlKCkgKiBNYXRoLlBJIC8gMTgwKSkpICsgTWF0aC5hYnMoaW1hZ2UuZ2V0V2lkdGgoKSAqIChNYXRoLmNvcyhpbWFnZS5nZXRBbmdsZSgpICogTWF0aC5QSSAvIDE4MCkpKVxuICAgIH07XG4gIH1cbn0oKSk7XG4iLCIoZnVuY3Rpb24gKHdpbmRvdywgZG9jdW1lbnQsIERhcmtyb29tLCBmYWJyaWMpIHtcbiAgZmFicmljLkltYWdlLnByb3RvdHlwZS5zdHJva2VXaWR0aCA9IDA7XG4gIERhcmtyb29tLnBsdWdpbnMuaGlzdG9yeSA9IERhcmtyb29tLlBsdWdpbi5leHRlbmQoe1xuICAgIHVuZG9UcmFuc2Zvcm1hdGlvbnM6IFtdLFxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgIHRoaXMuX2luaXRCdXR0b25zKCk7XG5cbiAgICAgIHRoaXMuZGFya3Jvb20uYWRkRXZlbnRMaXN0ZW5lcihcImNvcmU6dHJhbnNmb3JtYXRpb25cIiwgdGhpcy5fb25UcmFuZm9ybWF0aW9uQXBwbGllZC5iaW5kKHRoaXMpKTtcbiAgICB9LFxuXG4gICAgdW5kbygpIHtcbiAgICAgIGlmICh0aGlzLmRhcmtyb29tLnRyYW5zZm9ybWF0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBsYXN0VHJhbnNmb3JtYXRpb24gPSB0aGlzLmRhcmtyb29tLnRyYW5zZm9ybWF0aW9ucy5wb3AoKTtcbiAgICAgIHRoaXMudW5kb1RyYW5zZm9ybWF0aW9ucy51bnNoaWZ0KGxhc3RUcmFuc2Zvcm1hdGlvbik7XG5cbiAgICAgIHRoaXMuZGFya3Jvb20ucmVpbml0aWFsaXplSW1hZ2UoKTtcbiAgICAgIHRoaXMuX3VwZGF0ZUJ1dHRvbnMoKTtcbiAgICB9LFxuXG4gICAgcmVkbygpIHtcbiAgICAgIGlmICh0aGlzLnVuZG9UcmFuc2Zvcm1hdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2FuY2VsVHJhbnNmb3JtYXRpb24gPSB0aGlzLnVuZG9UcmFuc2Zvcm1hdGlvbnMuc2hpZnQoKTtcbiAgICAgIHRoaXMuZGFya3Jvb20udHJhbnNmb3JtYXRpb25zLnB1c2goY2FuY2VsVHJhbnNmb3JtYXRpb24pO1xuXG4gICAgICB0aGlzLmRhcmtyb29tLnJlaW5pdGlhbGl6ZUltYWdlKCk7XG4gICAgICB0aGlzLl91cGRhdGVCdXR0b25zKCk7XG4gICAgfSxcblxuICAgIF9pbml0QnV0dG9ucygpIHtcbiAgICAgIGNvbnN0IGJ1dHRvbkdyb3VwID0gdGhpcy5kYXJrcm9vbS50b29sYmFyLmNyZWF0ZUJ1dHRvbkdyb3VwKCk7XG5cbiAgICAgIHRoaXMuYmFja0J1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XG4gICAgICAgIGltYWdlOiBcInVuZG9cIixcbiAgICAgICAgZGlzYWJsZWQ6IHRydWVcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmZvcndhcmRCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xuICAgICAgICBpbWFnZTogXCJyZWRvXCIsXG4gICAgICAgIGRpc2FibGVkOiB0cnVlXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5iYWNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnVuZG8uYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLmZvcndhcmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMucmVkby5iaW5kKHRoaXMpKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIF91cGRhdGVCdXR0b25zKCkge1xuICAgICAgdGhpcy5iYWNrQnV0dG9uLmRpc2FibGUoKHRoaXMuZGFya3Jvb20udHJhbnNmb3JtYXRpb25zLmxlbmd0aCA9PT0gMCkpO1xuICAgICAgdGhpcy5mb3J3YXJkQnV0dG9uLmRpc2FibGUoKHRoaXMudW5kb1RyYW5zZm9ybWF0aW9ucy5sZW5ndGggPT09IDApKTtcbiAgICB9LFxuXG4gICAgX29uVHJhbmZvcm1hdGlvbkFwcGxpZWQoKSB7XG4gICAgICB0aGlzLnVuZG9UcmFuc2Zvcm1hdGlvbnMgPSBbXTtcbiAgICAgIHRoaXMuX3VwZGF0ZUJ1dHRvbnMoKTtcbiAgICB9XG4gIH0pO1xufSh3aW5kb3csIGRvY3VtZW50LCBEYXJrcm9vbSwgZmFicmljKSk7XG4iLCIoZnVuY3Rpb24gKCkge1xuICBmYWJyaWMuSW1hZ2UucHJvdG90eXBlLnN0cm9rZVdpZHRoID0gMDtcbiAgY29uc3QgUm90YXRpb24gPSBEYXJrcm9vbS5UcmFuc2Zvcm1hdGlvbi5leHRlbmQoe1xuICAgIGFwcGx5VHJhbnNmb3JtYXRpb24oY2FudmFzLCBpbWFnZSwgbmV4dCkge1xuICAgICAgY29uc3QgYW5nbGUgPSAoaW1hZ2UuZ2V0QW5nbGUoKSArIHRoaXMub3B0aW9ucy5hbmdsZSkgJSAzNjA7XG4gICAgICBpbWFnZS5yb3RhdGUoYW5nbGUpO1xuXG4gICAgICBjb25zdCBoZWlnaHQgPSBNYXRoLmFicyhpbWFnZS5nZXRXaWR0aCgpICogKE1hdGguc2luKGFuZ2xlICogTWF0aC5QSSAvIDE4MCkpKSArIE1hdGguYWJzKGltYWdlLmdldEhlaWdodCgpICogKE1hdGguY29zKGFuZ2xlICogTWF0aC5QSSAvIDE4MCkpKTtcbiAgICAgIGNvbnN0IHdpZHRoID0gTWF0aC5hYnMoaW1hZ2UuZ2V0SGVpZ2h0KCkgKiAoTWF0aC5zaW4oYW5nbGUgKiBNYXRoLlBJIC8gMTgwKSkpICsgTWF0aC5hYnMoaW1hZ2UuZ2V0V2lkdGgoKSAqIChNYXRoLmNvcyhhbmdsZSAqIE1hdGguUEkgLyAxODApKSk7XG5cbiAgICAgIGNhbnZhcy5zZXRXaWR0aCh3aWR0aCk7XG4gICAgICBjYW52YXMuc2V0SGVpZ2h0KGhlaWdodCk7XG5cbiAgICAgIGNhbnZhcy5jZW50ZXJPYmplY3QoaW1hZ2UpO1xuICAgICAgaW1hZ2Uuc2V0Q29vcmRzKCk7XG4gICAgICBjYW52YXMucmVuZGVyQWxsKCk7XG5cbiAgICAgIG5leHQoKTtcbiAgICB9XG4gIH0pO1xuXG4gIERhcmtyb29tLnBsdWdpbnMucm90YXRlID0gRGFya3Jvb20uUGx1Z2luLmV4dGVuZCh7XG5cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgY29uc3QgYnV0dG9uR3JvdXAgPSB0aGlzLmRhcmtyb29tLnRvb2xiYXIuY3JlYXRlQnV0dG9uR3JvdXAoKTtcblxuICAgICAgY29uc3QgbGVmdEJ1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XG4gICAgICAgIGltYWdlOiBcInJvdGF0ZS1sZWZ0XCJcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCByaWdodEJ1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XG4gICAgICAgIGltYWdlOiBcInJvdGF0ZS1yaWdodFwiXG4gICAgICB9KTtcblxuICAgICAgbGVmdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5yb3RhdGVMZWZ0LmJpbmQodGhpcykpO1xuICAgICAgcmlnaHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMucm90YXRlUmlnaHQuYmluZCh0aGlzKSk7XG4gICAgfSxcblxuICAgIHJvdGF0ZUxlZnQoKSB7XG4gICAgICB0aGlzLnJvdGF0ZSgtOTApO1xuICAgIH0sXG5cbiAgICByb3RhdGVSaWdodCgpIHtcbiAgICAgIHRoaXMucm90YXRlKDkwKTtcbiAgICB9LFxuXG4gICAgcm90YXRlKGFuZ2xlKSB7XG4gICAgICB0aGlzLmRhcmtyb29tLm9wdGlvbnMubGVmdCA9IDA7XG4gICAgICB0aGlzLmRhcmtyb29tLm9wdGlvbnMudG9wID0gMDtcbiAgICAgIHRoaXMuZGFya3Jvb20uYXBwbHlUcmFuc2Zvcm1hdGlvbihuZXcgUm90YXRpb24oe1xuICAgICAgICBhbmdsZVxuICAgICAgfSkpO1xuICAgIH1cblxuICB9KTtcbn0oKSk7XG4iLCIoZnVuY3Rpb24gKCkge1xuICBmYWJyaWMuSW1hZ2UucHJvdG90eXBlLnN0cm9rZVdpZHRoID0gMDtcbiAgY29uc3QgQ3JvcCA9IERhcmtyb29tLlRyYW5zZm9ybWF0aW9uLmV4dGVuZCh7XG4gICAgYXBwbHlUcmFuc2Zvcm1hdGlvbihjYW52YXMsIGltYWdlLCBuZXh0KSB7XG4gICAgICAvLyBTbmFwc2hvdCB0aGUgaW1hZ2UgZGVsaW1pdGVkIGJ5IHRoZSBjcm9wIHpvbmVcbiAgICAgIGNvbnN0IHNuYXBzaG90ID0gbmV3IEltYWdlKCk7XG4gICAgICBzbmFwc2hvdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFZhbGlkYXRlIGltYWdlXG4gICAgICAgIGlmICh0aGlzLmhlaWdodCA8IDEgfHwgdGhpcy53aWR0aCA8IDEpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbWdJbnN0YW5jZSA9IG5ldyBmYWJyaWMuSW1hZ2UodGhpcywge1xuICAgICAgICAgIC8vIG9wdGlvbnMgdG8gbWFrZSB0aGUgaW1hZ2Ugc3RhdGljXG4gICAgICAgICAgc2VsZWN0YWJsZTogZmFsc2UsXG4gICAgICAgICAgZXZlbnRlZDogZmFsc2UsXG4gICAgICAgICAgbG9ja01vdmVtZW50WDogdHJ1ZSxcbiAgICAgICAgICBsb2NrTW92ZW1lbnRZOiB0cnVlLFxuICAgICAgICAgIGxvY2tSb3RhdGlvbjogdHJ1ZSxcbiAgICAgICAgICBsb2NrU2NhbGluZ1g6IHRydWUsXG4gICAgICAgICAgbG9ja1NjYWxpbmdZOiB0cnVlLFxuICAgICAgICAgIGxvY2tVbmlTY2FsaW5nOiB0cnVlLFxuICAgICAgICAgIGhhc0NvbnRyb2xzOiBmYWxzZSxcbiAgICAgICAgICBoYXNCb3JkZXJzOiBmYWxzZVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMud2lkdGg7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuXG4gICAgICAgIC8vIFVwZGF0ZSBjYW52YXMgc2l6ZVxuICAgICAgICBjYW52YXMuc2V0V2lkdGgod2lkdGgpO1xuICAgICAgICBjYW52YXMuc2V0SGVpZ2h0KGhlaWdodCk7XG5cbiAgICAgICAgLy8gQWRkIGltYWdlXG4gICAgICAgIGltYWdlLnJlbW92ZSgpO1xuICAgICAgICBjYW52YXMuYWRkKGltZ0luc3RhbmNlKTtcblxuICAgICAgICBuZXh0KGltZ0luc3RhbmNlKTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHZpZXdwb3J0ID0gRGFya3Jvb20uVXRpbHMuY29tcHV0ZUltYWdlVmlld1BvcnQoaW1hZ2UpO1xuICAgICAgY29uc3QgaW1hZ2VXaWR0aCA9IHZpZXdwb3J0LndpZHRoO1xuICAgICAgY29uc3QgaW1hZ2VIZWlnaHQgPSB2aWV3cG9ydC5oZWlnaHQ7XG5cbiAgICAgIGNvbnN0IGxlZnQgPSB0aGlzLm9wdGlvbnMubGVmdCAqIGltYWdlV2lkdGg7XG4gICAgICBjb25zdCB0b3AgPSB0aGlzLm9wdGlvbnMudG9wICogaW1hZ2VIZWlnaHQ7XG4gICAgICBjb25zdCB3aWR0aCA9IE1hdGgubWluKHRoaXMub3B0aW9ucy53aWR0aCAqIGltYWdlV2lkdGgsIGltYWdlV2lkdGggLSBsZWZ0KTtcbiAgICAgIGNvbnN0IGhlaWdodCA9IE1hdGgubWluKHRoaXMub3B0aW9ucy5oZWlnaHQgKiBpbWFnZUhlaWdodCwgaW1hZ2VIZWlnaHQgLSB0b3ApO1xuXG4gICAgICBzbmFwc2hvdC5zcmMgPSBjYW52YXMudG9EYXRhVVJMKHtcbiAgICAgICAgbGVmdCxcbiAgICAgICAgdG9wLFxuICAgICAgICB3aWR0aCxcbiAgICAgICAgaGVpZ2h0XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IENyb3Bab25lID0gZmFicmljLnV0aWwuY3JlYXRlQ2xhc3MoZmFicmljLlJlY3QsIHtcbiAgICBfcmVuZGVyKGN0eCkge1xuICAgICAgdGhpcy5jYWxsU3VwZXIoXCJfcmVuZGVyXCIsIGN0eCk7XG5cbiAgICAgIGNvbnN0IGRhc2hXaWR0aCA9IDc7XG5cbiAgICAgIC8vIFNldCBvcmlnaW5hbCBzY2FsZVxuICAgICAgY29uc3QgZmxpcFggPSB0aGlzLmZsaXBYID8gLTEgOiAxO1xuICAgICAgY29uc3QgZmxpcFkgPSB0aGlzLmZsaXBZID8gLTEgOiAxO1xuICAgICAgY29uc3Qgc2NhbGVYID0gZmxpcFggLyB0aGlzLnNjYWxlWDtcbiAgICAgIGNvbnN0IHNjYWxlWSA9IGZsaXBZIC8gdGhpcy5zY2FsZVk7XG5cbiAgICAgIGN0eC5zY2FsZShzY2FsZVgsIHNjYWxlWSk7XG5cbiAgICAgIC8vIE92ZXJsYXkgcmVuZGVyaW5nXG4gICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDAsIDAsIDAsIDAuNSlcIjtcbiAgICAgIHRoaXMuX3JlbmRlck92ZXJsYXkoY3R4KTtcblxuICAgICAgLy8gU2V0IGRhc2hlZCBib3JkZXJzXG4gICAgICBpZiAoY3R4LnNldExpbmVEYXNoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY3R4LnNldExpbmVEYXNoKFtkYXNoV2lkdGgsIGRhc2hXaWR0aF0pO1xuICAgICAgfSBlbHNlIGlmIChjdHgubW96RGFzaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGN0eC5tb3pEYXNoID0gW2Rhc2hXaWR0aCwgZGFzaFdpZHRoXTtcbiAgICAgIH1cblxuICAgICAgLy8gRmlyc3QgbGluZXMgcmVuZGVyaW5nIHdpdGggYmxhY2tcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwicmdiYSgwLCAwLCAwLCAwLjIpXCI7XG4gICAgICB0aGlzLl9yZW5kZXJCb3JkZXJzKGN0eCk7XG4gICAgICB0aGlzLl9yZW5kZXJHcmlkKGN0eCk7XG5cbiAgICAgIC8vIFJlIHJlbmRlciBsaW5lcyBpbiB3aGl0ZVxuICAgICAgY3R4LmxpbmVEYXNoT2Zmc2V0ID0gZGFzaFdpZHRoO1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNClcIjtcbiAgICAgIHRoaXMuX3JlbmRlckJvcmRlcnMoY3R4KTtcbiAgICAgIHRoaXMuX3JlbmRlckdyaWQoY3R4KTtcblxuICAgICAgLy8gUmVzZXQgc2NhbGVcbiAgICAgIGN0eC5zY2FsZSgxIC8gc2NhbGVYLCAxIC8gc2NhbGVZKTtcbiAgICB9LFxuXG4gICAgX3JlbmRlck92ZXJsYXkoY3R4KSB7XG4gICAgICBjb25zdCBjYW52YXMgPSBjdHguY2FudmFzO1xuXG4gICAgICAvL1xuICAgICAgLy8gICAgeDAgICAgeDEgICAgICAgIHgyICAgICAgeDNcbiAgICAgIC8vIHkwICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rXG4gICAgICAvLyAgICB8XFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcfFxuICAgICAgLy8gICAgfFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXHxcbiAgICAgIC8vIHkxICstLS0tLS0rLS0tLS0tLS0tKy0tLS0tLS0rXG4gICAgICAvLyAgICB8XFxcXFxcXFxcXFxcfCAgICAgICAgIHxcXFxcXFxcXFxcXFxcXHxcbiAgICAgIC8vICAgIHxcXFxcXFxcXFxcXFx8ICAgIDAgICAgfFxcXFxcXFxcXFxcXFxcfFxuICAgICAgLy8gICAgfFxcXFxcXFxcXFxcXHwgICAgICAgICB8XFxcXFxcXFxcXFxcXFx8XG4gICAgICAvLyB5MiArLS0tLS0tKy0tLS0tLS0tLSstLS0tLS0tK1xuICAgICAgLy8gICAgfFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXHxcbiAgICAgIC8vICAgIHxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFx8XG4gICAgICAvLyB5MyArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tK1xuICAgICAgLy9cblxuICAgICAgY29uc3QgeDAgPSBNYXRoLmNlaWwoLXRoaXMuZ2V0V2lkdGgoKSAvIDIgLSB0aGlzLmdldExlZnQoKSk7XG4gICAgICBjb25zdCB4MSA9IE1hdGguY2VpbCgtdGhpcy5nZXRXaWR0aCgpIC8gMik7XG4gICAgICBjb25zdCB4MiA9IE1hdGguY2VpbCh0aGlzLmdldFdpZHRoKCkgLyAyKTtcbiAgICAgIGNvbnN0IHgzID0gTWF0aC5jZWlsKHRoaXMuZ2V0V2lkdGgoKSAvIDIgKyAoY2FudmFzLndpZHRoIC0gdGhpcy5nZXRXaWR0aCgpIC0gdGhpcy5nZXRMZWZ0KCkpKTtcblxuICAgICAgY29uc3QgeTAgPSBNYXRoLmNlaWwoLXRoaXMuZ2V0SGVpZ2h0KCkgLyAyIC0gdGhpcy5nZXRUb3AoKSk7XG4gICAgICBjb25zdCB5MSA9IE1hdGguY2VpbCgtdGhpcy5nZXRIZWlnaHQoKSAvIDIpO1xuICAgICAgY29uc3QgeTIgPSBNYXRoLmNlaWwodGhpcy5nZXRIZWlnaHQoKSAvIDIpO1xuICAgICAgY29uc3QgeTMgPSBNYXRoLmNlaWwodGhpcy5nZXRIZWlnaHQoKSAvIDIgKyAoY2FudmFzLmhlaWdodCAtIHRoaXMuZ2V0SGVpZ2h0KCkgLSB0aGlzLmdldFRvcCgpKSk7XG5cbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcblxuICAgICAgLy8gRHJhdyBvdXRlciByZWN0YW5nbGUuXG4gICAgICAvLyBOdW1iZXJzIGFyZSArLy0xIHNvIHRoYXQgb3ZlcmxheSBlZGdlcyBkb24ndCBnZXQgYmx1cnJ5LlxuICAgICAgY3R4Lm1vdmVUbyh4MCAtIDEsIHkwIC0gMSk7XG4gICAgICBjdHgubGluZVRvKHgzICsgMSwgeTAgLSAxKTtcbiAgICAgIGN0eC5saW5lVG8oeDMgKyAxLCB5MyArIDEpO1xuICAgICAgY3R4LmxpbmVUbyh4MCAtIDEsIHkzIC0gMSk7XG4gICAgICBjdHgubGluZVRvKHgwIC0gMSwgeTAgLSAxKTtcbiAgICAgIGN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgLy8gRHJhdyBpbm5lciByZWN0YW5nbGUuXG4gICAgICBjdHgubW92ZVRvKHgxLCB5MSk7XG4gICAgICBjdHgubGluZVRvKHgxLCB5Mik7XG4gICAgICBjdHgubGluZVRvKHgyLCB5Mik7XG4gICAgICBjdHgubGluZVRvKHgyLCB5MSk7XG4gICAgICBjdHgubGluZVRvKHgxLCB5MSk7XG5cbiAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgIGN0eC5maWxsKCk7XG4gICAgfSxcblxuICAgIF9yZW5kZXJCb3JkZXJzKGN0eCkge1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4Lm1vdmVUbygtdGhpcy5nZXRXaWR0aCgpIC8gMiwgLXRoaXMuZ2V0SGVpZ2h0KCkgLyAyKTsgLy8gdXBwZXIgbGVmdFxuICAgICAgY3R4LmxpbmVUbyh0aGlzLmdldFdpZHRoKCkgLyAyLCAtdGhpcy5nZXRIZWlnaHQoKSAvIDIpOyAvLyB1cHBlciByaWdodFxuICAgICAgY3R4LmxpbmVUbyh0aGlzLmdldFdpZHRoKCkgLyAyLCB0aGlzLmdldEhlaWdodCgpIC8gMik7IC8vIGRvd24gcmlnaHRcbiAgICAgIGN0eC5saW5lVG8oLXRoaXMuZ2V0V2lkdGgoKSAvIDIsIHRoaXMuZ2V0SGVpZ2h0KCkgLyAyKTsgLy8gZG93biBsZWZ0XG4gICAgICBjdHgubGluZVRvKC10aGlzLmdldFdpZHRoKCkgLyAyLCAtdGhpcy5nZXRIZWlnaHQoKSAvIDIpOyAvLyB1cHBlciBsZWZ0XG4gICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfSxcblxuICAgIF9yZW5kZXJHcmlkKGN0eCkge1xuICAgICAgLy8gVmVydGljYWwgbGluZXNcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5tb3ZlVG8oLXRoaXMuZ2V0V2lkdGgoKSAvIDIgKyAxIC8gMyAqIHRoaXMuZ2V0V2lkdGgoKSwgLXRoaXMuZ2V0SGVpZ2h0KCkgLyAyKTtcbiAgICAgIGN0eC5saW5lVG8oLXRoaXMuZ2V0V2lkdGgoKSAvIDIgKyAxIC8gMyAqIHRoaXMuZ2V0V2lkdGgoKSwgdGhpcy5nZXRIZWlnaHQoKSAvIDIpO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4Lm1vdmVUbygtdGhpcy5nZXRXaWR0aCgpIC8gMiArIDIgLyAzICogdGhpcy5nZXRXaWR0aCgpLCAtdGhpcy5nZXRIZWlnaHQoKSAvIDIpO1xuICAgICAgY3R4LmxpbmVUbygtdGhpcy5nZXRXaWR0aCgpIC8gMiArIDIgLyAzICogdGhpcy5nZXRXaWR0aCgpLCB0aGlzLmdldEhlaWdodCgpIC8gMik7XG4gICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAvLyBIb3Jpem9udGFsIGxpbmVzXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHgubW92ZVRvKC10aGlzLmdldFdpZHRoKCkgLyAyLCAtdGhpcy5nZXRIZWlnaHQoKSAvIDIgKyAxIC8gMyAqIHRoaXMuZ2V0SGVpZ2h0KCkpO1xuICAgICAgY3R4LmxpbmVUbyh0aGlzLmdldFdpZHRoKCkgLyAyLCAtdGhpcy5nZXRIZWlnaHQoKSAvIDIgKyAxIC8gMyAqIHRoaXMuZ2V0SGVpZ2h0KCkpO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4Lm1vdmVUbygtdGhpcy5nZXRXaWR0aCgpIC8gMiwgLXRoaXMuZ2V0SGVpZ2h0KCkgLyAyICsgMiAvIDMgKiB0aGlzLmdldEhlaWdodCgpKTtcbiAgICAgIGN0eC5saW5lVG8odGhpcy5nZXRXaWR0aCgpIC8gMiwgLXRoaXMuZ2V0SGVpZ2h0KCkgLyAyICsgMiAvIDMgKiB0aGlzLmdldEhlaWdodCgpKTtcbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9XG4gIH0pO1xuXG4gIERhcmtyb29tLnBsdWdpbnMuY3JvcCA9IERhcmtyb29tLlBsdWdpbi5leHRlbmQoe1xuICAgIC8vIEluaXQgcG9pbnRcbiAgICBzdGFydFg6IG51bGwsXG4gICAgc3RhcnRZOiBudWxsLFxuXG4gICAgLy8gS2V5Y3JvcFxuICAgIGlzS2V5Q3JvcGluZzogZmFsc2UsXG4gICAgaXNLZXlMZWZ0OiBmYWxzZSxcbiAgICBpc0tleVVwOiBmYWxzZSxcblxuICAgIGRlZmF1bHRzOiB7XG4gICAgICAvLyBtaW4gY3JvcCBkaW1lbnNpb25cbiAgICAgIG1pbkhlaWdodDogMSxcbiAgICAgIG1pbldpZHRoOiAxLFxuICAgICAgLy8gZW5zdXJlIGNyb3AgcmF0aW9cbiAgICAgIHJhdGlvOiBudWxsLFxuICAgICAgLy8gcXVpY2sgY3JvcCBmZWF0dXJlIChzZXQgYSBrZXkgY29kZSB0byBlbmFibGUgaXQpXG4gICAgICBxdWlja0Nyb3BLZXk6IGZhbHNlXG4gICAgfSxcblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICBjb25zdCBidXR0b25Hcm91cCA9IHRoaXMuZGFya3Jvb20udG9vbGJhci5jcmVhdGVCdXR0b25Hcm91cCgpO1xuXG4gICAgICB0aGlzLmNyb3BCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xuICAgICAgICBpbWFnZTogXCJjcm9wXCJcbiAgICAgIH0pO1xuICAgICAgdGhpcy5va0J1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XG4gICAgICAgIGltYWdlOiBcImRvbmVcIixcbiAgICAgICAgdHlwZTogXCJzdWNjZXNzXCIsXG4gICAgICAgIGhpZGU6IHRydWVcbiAgICAgIH0pO1xuICAgICAgdGhpcy5jYW5jZWxCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xuICAgICAgICBpbWFnZTogXCJjbG9zZVwiLFxuICAgICAgICB0eXBlOiBcImRhbmdlclwiLFxuICAgICAgICBoaWRlOiB0cnVlXG4gICAgICB9KTtcblxuICAgICAgLy8gQnV0dG9ucyBjbGlja1xuICAgICAgdGhpcy5jcm9wQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnRvZ2dsZUNyb3AuYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLm9rQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmNyb3BDdXJyZW50Wm9uZS5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMuY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnJlbGVhc2VGb2N1cy5iaW5kKHRoaXMpKTtcblxuICAgICAgLy8gQ2FudmFzIGV2ZW50c1xuICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMub24oXCJtb3VzZTpkb3duXCIsIHRoaXMub25Nb3VzZURvd24uYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbihcIm1vdXNlOm1vdmVcIiwgdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLm9uKFwibW91c2U6dXBcIiwgdGhpcy5vbk1vdXNlVXAuYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbihcIm9iamVjdDptb3ZpbmdcIiwgdGhpcy5vbk9iamVjdE1vdmluZy5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLm9uKFwib2JqZWN0OnNjYWxpbmdcIiwgdGhpcy5vbk9iamVjdFNjYWxpbmcuYmluZCh0aGlzKSk7XG5cbiAgICAgIGZhYnJpYy51dGlsLmFkZExpc3RlbmVyKGZhYnJpYy5kb2N1bWVudCwgXCJrZXlkb3duXCIsIHRoaXMub25LZXlEb3duLmJpbmQodGhpcykpO1xuICAgICAgZmFicmljLnV0aWwuYWRkTGlzdGVuZXIoZmFicmljLmRvY3VtZW50LCBcImtleXVwXCIsIHRoaXMub25LZXlVcC5iaW5kKHRoaXMpKTtcblxuICAgICAgdGhpcy5kYXJrcm9vbS5hZGRFdmVudExpc3RlbmVyKFwiY29yZTp0cmFuc2Zvcm1hdGlvblwiLCB0aGlzLnJlbGVhc2VGb2N1cy5iaW5kKHRoaXMpKTtcbiAgICB9LFxuXG4gICAgY2xlYXIoKSB7XG4gICAgICBpZiAodGhpcy5oYXNGb2N1cygpKSB7XG4gICAgICAgIHRoaXMucmVsZWFzZUZvY3VzKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICAvLyBBdm9pZCBjcm9wIHpvbmUgdG8gZ28gYmV5b25kIHRoZSBjYW52YXMgZWRnZXNcbiAgICBvbk9iamVjdE1vdmluZyhldmVudCkge1xuICAgICAgaWYgKCF0aGlzLmhhc0ZvY3VzKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjdXJyZW50T2JqZWN0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgaWYgKGN1cnJlbnRPYmplY3QgIT09IHRoaXMuY3JvcFpvbmUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcbiAgICAgIGNvbnN0IHggPSBjdXJyZW50T2JqZWN0LmdldExlZnQoKTtcbiAgICAgIGNvbnN0IHkgPSBjdXJyZW50T2JqZWN0LmdldFRvcCgpO1xuICAgICAgY29uc3QgdyA9IGN1cnJlbnRPYmplY3QuZ2V0V2lkdGgoKTtcbiAgICAgIGNvbnN0IGggPSBjdXJyZW50T2JqZWN0LmdldEhlaWdodCgpO1xuICAgICAgY29uc3QgbWF4WCA9IGNhbnZhcy5nZXRXaWR0aCgpIC0gdztcbiAgICAgIGNvbnN0IG1heFkgPSBjYW52YXMuZ2V0SGVpZ2h0KCkgLSBoO1xuXG4gICAgICBpZiAoeCA8IDApIHtcbiAgICAgICAgY3VycmVudE9iamVjdC5zZXQoXCJsZWZ0XCIsIDApO1xuICAgICAgfVxuICAgICAgaWYgKHkgPCAwKSB7XG4gICAgICAgIGN1cnJlbnRPYmplY3Quc2V0KFwidG9wXCIsIDApO1xuICAgICAgfVxuICAgICAgaWYgKHggPiBtYXhYKSB7XG4gICAgICAgIGN1cnJlbnRPYmplY3Quc2V0KFwibGVmdFwiLCBtYXhYKTtcbiAgICAgIH1cbiAgICAgIGlmICh5ID4gbWF4WSkge1xuICAgICAgICBjdXJyZW50T2JqZWN0LnNldChcInRvcFwiLCBtYXhZKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5kYXJrcm9vbS5kaXNwYXRjaEV2ZW50KFwiY3JvcDp1cGRhdGVcIik7XG4gICAgfSxcblxuICAgIC8vIFByZXZlbnQgY3JvcCB6b25lIGZyb20gZ29pbmcgYmV5b25kIHRoZSBjYW52YXMgZWRnZXMgKGxpa2UgbW91c2VNb3ZlKVxuICAgIG9uT2JqZWN0U2NhbGluZyhldmVudCkge1xuICAgICAgaWYgKCF0aGlzLmhhc0ZvY3VzKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgcHJldmVudFNjYWxpbmcgPSBmYWxzZTtcbiAgICAgIGNvbnN0IGN1cnJlbnRPYmplY3QgPSBldmVudC50YXJnZXQ7XG4gICAgICBpZiAoY3VycmVudE9iamVjdCAhPT0gdGhpcy5jcm9wWm9uZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xuXG4gICAgICBjb25zdCBtaW5YID0gY3VycmVudE9iamVjdC5nZXRMZWZ0KCk7XG4gICAgICBjb25zdCBtaW5ZID0gY3VycmVudE9iamVjdC5nZXRUb3AoKTtcbiAgICAgIGNvbnN0IG1heFggPSBjdXJyZW50T2JqZWN0LmdldExlZnQoKSArIGN1cnJlbnRPYmplY3QuZ2V0V2lkdGgoKTtcbiAgICAgIGNvbnN0IG1heFkgPSBjdXJyZW50T2JqZWN0LmdldFRvcCgpICsgY3VycmVudE9iamVjdC5nZXRIZWlnaHQoKTtcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yYXRpbyAhPT0gbnVsbCkge1xuICAgICAgICBpZiAobWluWCA8IDAgfHwgbWF4WCA+IGNhbnZhcy5nZXRXaWR0aCgpIHx8IG1pblkgPCAwIHx8IG1heFkgPiBjYW52YXMuZ2V0SGVpZ2h0KCkpIHtcbiAgICAgICAgICBwcmV2ZW50U2NhbGluZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1pblggPCAwIHx8IG1heFggPiBjYW52YXMuZ2V0V2lkdGgoKSB8fCBwcmV2ZW50U2NhbGluZykge1xuICAgICAgICBjb25zdCBsYXN0U2NhbGVYID0gdGhpcy5sYXN0U2NhbGVYIHx8IDE7XG4gICAgICAgIGN1cnJlbnRPYmplY3Quc2V0U2NhbGVYKGxhc3RTY2FsZVgpO1xuICAgICAgfVxuICAgICAgaWYgKG1pblggPCAwKSB7XG4gICAgICAgIGN1cnJlbnRPYmplY3Quc2V0TGVmdCgwKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1pblkgPCAwIHx8IG1heFkgPiBjYW52YXMuZ2V0SGVpZ2h0KCkgfHwgcHJldmVudFNjYWxpbmcpIHtcbiAgICAgICAgY29uc3QgbGFzdFNjYWxlWSA9IHRoaXMubGFzdFNjYWxlWSB8fCAxO1xuICAgICAgICBjdXJyZW50T2JqZWN0LnNldFNjYWxlWShsYXN0U2NhbGVZKTtcbiAgICAgIH1cbiAgICAgIGlmIChtaW5ZIDwgMCkge1xuICAgICAgICBjdXJyZW50T2JqZWN0LnNldFRvcCgwKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGN1cnJlbnRPYmplY3QuZ2V0V2lkdGgoKSA8IHRoaXMub3B0aW9ucy5taW5XaWR0aCkge1xuICAgICAgICBjdXJyZW50T2JqZWN0LnNjYWxlVG9XaWR0aCh0aGlzLm9wdGlvbnMubWluV2lkdGgpO1xuICAgICAgfVxuICAgICAgaWYgKGN1cnJlbnRPYmplY3QuZ2V0SGVpZ2h0KCkgPCB0aGlzLm9wdGlvbnMubWluSGVpZ2h0KSB7XG4gICAgICAgIGN1cnJlbnRPYmplY3Quc2NhbGVUb0hlaWdodCh0aGlzLm9wdGlvbnMubWluSGVpZ2h0KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5sYXN0U2NhbGVYID0gY3VycmVudE9iamVjdC5nZXRTY2FsZVgoKTtcbiAgICAgIHRoaXMubGFzdFNjYWxlWSA9IGN1cnJlbnRPYmplY3QuZ2V0U2NhbGVZKCk7XG5cbiAgICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudChcImNyb3A6dXBkYXRlXCIpO1xuICAgIH0sXG5cbiAgICAvLyBJbml0IGNyb3Agem9uZVxuICAgIG9uTW91c2VEb3duKGV2ZW50KSB7XG4gICAgICBldmVudC5lLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAoIXRoaXMuaGFzRm9jdXMoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xuXG4gICAgICAvLyByZWNhbGN1bGF0ZSBvZmZzZXQsIGluIGNhc2UgY2FudmFzIHdhcyBtYW5pcHVsYXRlZCBzaW5jZSBsYXN0IGBjYWxjT2Zmc2V0YFxuICAgICAgY2FudmFzLmNhbGNPZmZzZXQoKTtcbiAgICAgIGNvbnN0IHBvaW50ZXIgPSBjYW52YXMuZ2V0UG9pbnRlcihldmVudC5lKTtcbiAgICAgIGNvbnN0IHggPSBwb2ludGVyLng7XG4gICAgICBjb25zdCB5ID0gcG9pbnRlci55O1xuICAgICAgY29uc3QgcG9pbnQgPSBuZXcgZmFicmljLlBvaW50KHgsIHkpO1xuXG4gICAgICAvLyBDaGVjayBpZiB1c2VyIHdhbnQgdG8gc2NhbGUgb3IgZHJhZyB0aGUgY3JvcCB6b25lLlxuICAgICAgY29uc3QgYWN0aXZlT2JqZWN0ID0gY2FudmFzLmdldEFjdGl2ZU9iamVjdCgpO1xuICAgICAgaWYgKGFjdGl2ZU9iamVjdCA9PT0gdGhpcy5jcm9wWm9uZSB8fCB0aGlzLmNyb3Bab25lLmNvbnRhaW5zUG9pbnQocG9pbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY2FudmFzLmRpc2NhcmRBY3RpdmVPYmplY3QoKTtcbiAgICAgIHRoaXMuY3JvcFpvbmUuc2V0V2lkdGgoMCk7XG4gICAgICB0aGlzLmNyb3Bab25lLnNldEhlaWdodCgwKTtcbiAgICAgIHRoaXMuY3JvcFpvbmUuc2V0U2NhbGVYKDEpO1xuICAgICAgdGhpcy5jcm9wWm9uZS5zZXRTY2FsZVkoMSk7XG5cbiAgICAgIHRoaXMuc3RhcnRYID0geDtcbiAgICAgIHRoaXMuc3RhcnRZID0geTtcbiAgICB9LFxuXG4gICAgLy8gRXh0ZW5kIGNyb3Agem9uZVxuICAgIG9uTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgICAvLyBRdWljayBjcm9wIGZlYXR1cmVcbiAgICAgIGlmICh0aGlzLmlzS2V5Q3JvcGluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5vbk1vdXNlTW92ZUtleUNyb3AoZXZlbnQpO1xuICAgICAgfVxuXG4gICAgICBpZiAobnVsbCA9PT0gdGhpcy5zdGFydFggfHwgbnVsbCA9PT0gdGhpcy5zdGFydFkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcbiAgICAgIGNvbnN0IHBvaW50ZXIgPSBjYW52YXMuZ2V0UG9pbnRlcihldmVudC5lKTtcbiAgICAgIGNvbnN0IHggPSBwb2ludGVyLng7XG4gICAgICBjb25zdCB5ID0gcG9pbnRlci55O1xuXG4gICAgICB0aGlzLl9yZW5kZXJDcm9wWm9uZSh0aGlzLnN0YXJ0WCwgdGhpcy5zdGFydFksIHgsIHkpO1xuICAgIH0sXG5cbiAgICBvbk1vdXNlTW92ZUtleUNyb3AoZXZlbnQpIHtcbiAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xuICAgICAgY29uc3Qgem9uZSA9IHRoaXMuY3JvcFpvbmU7XG5cbiAgICAgIGNvbnN0IHBvaW50ZXIgPSBjYW52YXMuZ2V0UG9pbnRlcihldmVudC5lKTtcbiAgICAgIGNvbnN0IHggPSBwb2ludGVyLng7XG4gICAgICBjb25zdCB5ID0gcG9pbnRlci55O1xuXG4gICAgICBpZiAoIXpvbmUubGVmdCB8fCAhem9uZS50b3ApIHtcbiAgICAgICAgem9uZS5zZXRUb3AoeSk7XG4gICAgICAgIHpvbmUuc2V0TGVmdCh4KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5pc0tleUxlZnQgPSB4IDwgem9uZS5sZWZ0ICsgem9uZS53aWR0aCAvIDI7XG4gICAgICB0aGlzLmlzS2V5VXAgPSB5IDwgem9uZS50b3AgKyB6b25lLmhlaWdodCAvIDI7XG5cbiAgICAgIHRoaXMuX3JlbmRlckNyb3Bab25lKFxuICAgICAgICBNYXRoLm1pbih6b25lLmxlZnQsIHgpLFxuICAgICAgICBNYXRoLm1pbih6b25lLnRvcCwgeSksXG4gICAgICAgIE1hdGgubWF4KHpvbmUubGVmdCArIHpvbmUud2lkdGgsIHgpLFxuICAgICAgICBNYXRoLm1heCh6b25lLnRvcCArIHpvbmUuaGVpZ2h0LCB5KVxuICAgICAgKTtcbiAgICB9LFxuXG4gICAgLy8gRmluaXNoIGNyb3Agem9uZVxuICAgIG9uTW91c2VVcChldmVudCkge1xuICAgICAgaWYgKG51bGwgPT09IHRoaXMuc3RhcnRYIHx8IG51bGwgPT09IHRoaXMuc3RhcnRZKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XG4gICAgICB0aGlzLmNyb3Bab25lLnNldENvb3JkcygpO1xuICAgICAgY2FudmFzLnNldEFjdGl2ZU9iamVjdCh0aGlzLmNyb3Bab25lKTtcbiAgICAgIGNhbnZhcy5jYWxjT2Zmc2V0KCk7XG5cbiAgICAgIHRoaXMuc3RhcnRYID0gbnVsbDtcbiAgICAgIHRoaXMuc3RhcnRZID0gbnVsbDtcbiAgICB9LFxuXG4gICAgb25LZXlEb3duKGV2ZW50KSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnF1aWNrQ3JvcEtleSA9PT0gZmFsc2UgfHwgZXZlbnQua2V5Q29kZSAhPT0gdGhpcy5vcHRpb25zLnF1aWNrQ3JvcEtleSB8fCB0aGlzLmlzS2V5Q3JvcGluZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIEFjdGl2ZSBxdWljayBjcm9wIGZsb3dcbiAgICAgIHRoaXMuaXNLZXlDcm9waW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLmRpc2NhcmRBY3RpdmVPYmplY3QoKTtcbiAgICAgIHRoaXMuY3JvcFpvbmUuc2V0V2lkdGgoMCk7XG4gICAgICB0aGlzLmNyb3Bab25lLnNldEhlaWdodCgwKTtcbiAgICAgIHRoaXMuY3JvcFpvbmUuc2V0U2NhbGVYKDEpO1xuICAgICAgdGhpcy5jcm9wWm9uZS5zZXRTY2FsZVkoMSk7XG4gICAgICB0aGlzLmNyb3Bab25lLnNldFRvcCgwKTtcbiAgICAgIHRoaXMuY3JvcFpvbmUuc2V0TGVmdCgwKTtcbiAgICB9LFxuXG4gICAgb25LZXlVcChldmVudCkge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5xdWlja0Nyb3BLZXkgPT09IGZhbHNlIHx8IGV2ZW50LmtleUNvZGUgIT09IHRoaXMub3B0aW9ucy5xdWlja0Nyb3BLZXkgfHwgIXRoaXMuaXNLZXlDcm9waW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gVW5hY3RpdmUgcXVpY2sgY3JvcCBmbG93XG4gICAgICB0aGlzLmlzS2V5Q3JvcGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5zdGFydFggPSAxO1xuICAgICAgdGhpcy5zdGFydFkgPSAxO1xuICAgICAgdGhpcy5vbk1vdXNlVXAoKTtcbiAgICB9LFxuXG4gICAgc2VsZWN0Wm9uZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBmb3JjZURpbWVuc2lvbikge1xuICAgICAgaWYgKCF0aGlzLmhhc0ZvY3VzKCkpIHtcbiAgICAgICAgdGhpcy5yZXF1aXJlRm9jdXMoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFmb3JjZURpbWVuc2lvbikge1xuICAgICAgICB0aGlzLl9yZW5kZXJDcm9wWm9uZSh4LCB5LCB4ICsgd2lkdGgsIHkgKyBoZWlnaHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jcm9wWm9uZS5zZXQoe1xuICAgICAgICAgIGxlZnQ6IHgsXG4gICAgICAgICAgdG9wOiB5LFxuICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgIGhlaWdodFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XG4gICAgICBjYW52YXMuYnJpbmdUb0Zyb250KHRoaXMuY3JvcFpvbmUpO1xuICAgICAgdGhpcy5jcm9wWm9uZS5zZXRDb29yZHMoKTtcbiAgICAgIGNhbnZhcy5zZXRBY3RpdmVPYmplY3QodGhpcy5jcm9wWm9uZSk7XG4gICAgICBjYW52YXMuY2FsY09mZnNldCgpO1xuXG4gICAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoXCJjcm9wOnVwZGF0ZVwiKTtcbiAgICB9LFxuXG4gICAgdG9nZ2xlQ3JvcCgpIHtcbiAgICAgIGlmICghdGhpcy5oYXNGb2N1cygpKSB7XG4gICAgICAgIHRoaXMucmVxdWlyZUZvY3VzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbGVhc2VGb2N1cygpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBjcm9wQ3VycmVudFpvbmUoKSB7XG4gICAgICBpZiAoIXRoaXMuaGFzRm9jdXMoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIEF2b2lkIGNyb3BpbmcgZW1wdHkgem9uZVxuICAgICAgaWYgKHRoaXMuY3JvcFpvbmUud2lkdGggPCAxICYmIHRoaXMuY3JvcFpvbmUuaGVpZ2h0IDwgMSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGltYWdlID0gdGhpcy5kYXJrcm9vbS5pbWFnZTtcblxuICAgICAgLy8gQ29tcHV0ZSBjcm9wIHpvbmUgZGltZW5zaW9uc1xuICAgICAgbGV0IHRvcCA9IHRoaXMuY3JvcFpvbmUuZ2V0VG9wKCkgLSBpbWFnZS5nZXRUb3AoKTtcbiAgICAgIGxldCBsZWZ0ID0gdGhpcy5jcm9wWm9uZS5nZXRMZWZ0KCkgLSBpbWFnZS5nZXRMZWZ0KCk7XG4gICAgICBsZXQgd2lkdGggPSB0aGlzLmNyb3Bab25lLmdldFdpZHRoKCk7XG4gICAgICBsZXQgaGVpZ2h0ID0gdGhpcy5jcm9wWm9uZS5nZXRIZWlnaHQoKTtcblxuICAgICAgLy8gQWRqdXN0IGRpbWVuc2lvbnMgdG8gaW1hZ2Ugb25seVxuICAgICAgaWYgKHRvcCA8IDApIHtcbiAgICAgICAgaGVpZ2h0ICs9IHRvcDtcbiAgICAgICAgdG9wID0gMDtcbiAgICAgIH1cblxuICAgICAgaWYgKGxlZnQgPCAwKSB7XG4gICAgICAgIHdpZHRoICs9IGxlZnQ7XG4gICAgICAgIGxlZnQgPSAwO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmRhcmtyb29tLm9wdGlvbnMudG9wID0gMDtcbiAgICAgIHRoaXMuZGFya3Jvb20ub3B0aW9ucy5sZWZ0ID0gMDtcbiAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLnNldFpvb20oMSk7XG4gICAgICB0aGlzLmRhcmtyb29tLnBsdWdpbnMuem9vbS51cGRhdGVCdXR0b25zKCk7XG4gICAgICAvLyBBcHBseSBjcm9wIHRyYW5zZm9ybWF0aW9uLlxuICAgICAgLy8gTWFrZSBzdXJlIHRvIHVzZSByZWxhdGl2ZSBkaW1lbnNpb24gc2luY2UgdGhlIGNyb3Agd2lsbCBiZSBhcHBsaWVkXG4gICAgICAvLyBvbiB0aGUgc291cmNlIGltYWdlLlxuICAgICAgdGhpcy5kYXJrcm9vbS5hcHBseVRyYW5zZm9ybWF0aW9uKG5ldyBDcm9wKHtcbiAgICAgICAgdG9wOiB0b3AgLyBpbWFnZS5nZXRIZWlnaHQoKSxcbiAgICAgICAgbGVmdDogbGVmdCAvIGltYWdlLmdldFdpZHRoKCksXG4gICAgICAgIHdpZHRoOiB3aWR0aCAvIGltYWdlLmdldFdpZHRoKCksXG4gICAgICAgIGhlaWdodDogaGVpZ2h0IC8gaW1hZ2UuZ2V0SGVpZ2h0KClcbiAgICAgIH0pKTtcbiAgICB9LFxuXG4gICAgLy8gVGVzdCB3ZXRoZXIgY3JvcCB6b25lIGlzIHNldFxuICAgIGhhc0ZvY3VzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY3JvcFpvbmUgIT09IHVuZGVmaW5lZDtcbiAgICB9LFxuXG4gICAgLy8gQ3JlYXRlIHRoZSBjcm9wIHpvbmVcbiAgICByZXF1aXJlRm9jdXMoKSB7XG4gICAgICB0aGlzLmRhcmtyb29tLmNsZWFyRm9jdXMoXCJjcm9wXCIpO1xuICAgICAgdGhpcy5jcm9wWm9uZSA9IG5ldyBDcm9wWm9uZSh7XG4gICAgICAgIGZpbGw6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgaGFzQm9yZGVyczogZmFsc2UsXG4gICAgICAgIG9yaWdpblg6IFwibGVmdFwiLFxuICAgICAgICBvcmlnaW5ZOiBcInRvcFwiLFxuICAgICAgICAvLyBzdHJva2U6ICcjNDQ0JyxcbiAgICAgICAgLy8gc3Ryb2tlRGFzaEFycmF5OiBbNSwgNV0sXG4gICAgICAgIC8vIGJvcmRlckNvbG9yOiAnIzQ0NCcsXG4gICAgICAgIGNvcm5lckNvbG9yOiBcIiM0NDRcIixcbiAgICAgICAgY29ybmVyU2l6ZTogOCxcbiAgICAgICAgdHJhbnNwYXJlbnRDb3JuZXJzOiBmYWxzZSxcbiAgICAgICAgbG9ja1JvdGF0aW9uOiB0cnVlLFxuICAgICAgICBoYXNSb3RhdGluZ1BvaW50OiBmYWxzZVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmF0aW8gIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5jcm9wWm9uZS5zZXQoXCJsb2NrVW5pU2NhbGluZ1wiLCB0cnVlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMuYWRkKHRoaXMuY3JvcFpvbmUpO1xuICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMuZGVmYXVsdEN1cnNvciA9IFwiY3Jvc3NoYWlyXCI7XG5cbiAgICAgIHRoaXMuY3JvcEJ1dHRvbi5hY3RpdmUodHJ1ZSk7XG4gICAgICB0aGlzLm9rQnV0dG9uLmhpZGUoZmFsc2UpO1xuICAgICAgdGhpcy5jYW5jZWxCdXR0b24uaGlkZShmYWxzZSk7XG4gICAgfSxcblxuICAgIC8vIFJlbW92ZSB0aGUgY3JvcCB6b25lXG4gICAgcmVsZWFzZUZvY3VzKCkge1xuICAgICAgaWYgKHVuZGVmaW5lZCA9PT0gdGhpcy5jcm9wWm9uZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY3JvcFpvbmUucmVtb3ZlKCk7XG4gICAgICB0aGlzLmNyb3Bab25lID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLmNyb3BCdXR0b24uYWN0aXZlKGZhbHNlKTtcbiAgICAgIHRoaXMub2tCdXR0b24uaGlkZSh0cnVlKTtcbiAgICAgIHRoaXMuY2FuY2VsQnV0dG9uLmhpZGUodHJ1ZSk7XG5cbiAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLmRlZmF1bHRDdXJzb3IgPSBcImRlZmF1bHRcIjtcblxuICAgICAgdGhpcy5kYXJrcm9vbS5kaXNwYXRjaEV2ZW50KFwiY3JvcDp1cGRhdGVcIik7XG4gICAgfSxcblxuICAgIF9yZW5kZXJDcm9wWm9uZShmcm9tWCwgZnJvbVksIHRvWCwgdG9ZKSB7XG4gICAgICBjb25zdCBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcblxuICAgICAgY29uc3QgaXNSaWdodCA9ICh0b1ggPiBmcm9tWCk7XG4gICAgICBsZXQgaXNMZWZ0ID0gIWlzUmlnaHQ7XG4gICAgICBjb25zdCBpc0Rvd24gPSAodG9ZID4gZnJvbVkpO1xuICAgICAgbGV0IGlzVXAgPSAhaXNEb3duO1xuXG4gICAgICBjb25zdCBtaW5XaWR0aCA9IE1hdGgubWluKCt0aGlzLm9wdGlvbnMubWluV2lkdGgsIGNhbnZhcy5nZXRXaWR0aCgpKTtcbiAgICAgIGNvbnN0IG1pbkhlaWdodCA9IE1hdGgubWluKCt0aGlzLm9wdGlvbnMubWluSGVpZ2h0LCBjYW52YXMuZ2V0SGVpZ2h0KCkpO1xuXG4gICAgICAvLyBEZWZpbmUgY29ybmVyIGNvb3JkaW5hdGVzXG4gICAgICBsZXQgbGVmdFggPSBNYXRoLm1pbihmcm9tWCwgdG9YKTtcbiAgICAgIGxldCByaWdodFggPSBNYXRoLm1heChmcm9tWCwgdG9YKTtcbiAgICAgIGxldCB0b3BZID0gTWF0aC5taW4oZnJvbVksIHRvWSk7XG4gICAgICBsZXQgYm90dG9tWSA9IE1hdGgubWF4KGZyb21ZLCB0b1kpO1xuXG4gICAgICAvLyBSZXBsYWNlIGN1cnJlbnQgcG9pbnQgaW50byB0aGUgY2FudmFzXG4gICAgICBsZWZ0WCA9IE1hdGgubWF4KDAsIGxlZnRYKTtcbiAgICAgIHJpZ2h0WCA9IE1hdGgubWluKGNhbnZhcy5nZXRXaWR0aCgpLCByaWdodFgpO1xuICAgICAgdG9wWSA9IE1hdGgubWF4KDAsIHRvcFkpO1xuICAgICAgYm90dG9tWSA9IE1hdGgubWluKGNhbnZhcy5nZXRIZWlnaHQoKSwgYm90dG9tWSk7XG5cbiAgICAgIC8vIFJlY2FsaWJyYXRlIGNvb3JkaW5hdGVzIGFjY29yZGluZyB0byBnaXZlbiBvcHRpb25zXG4gICAgICBpZiAocmlnaHRYIC0gbGVmdFggPCBtaW5XaWR0aCkge1xuICAgICAgICBpZiAoaXNSaWdodCkge1xuICAgICAgICAgIHJpZ2h0WCA9IGxlZnRYICsgbWluV2lkdGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGVmdFggPSByaWdodFggLSBtaW5XaWR0aDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGJvdHRvbVkgLSB0b3BZIDwgbWluSGVpZ2h0KSB7XG4gICAgICAgIGlmIChpc0Rvd24pIHtcbiAgICAgICAgICBib3R0b21ZID0gdG9wWSArIG1pbkhlaWdodDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0b3BZID0gYm90dG9tWSAtIG1pbkhlaWdodDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUcnVuY2F0ZSB0cnVuY2F0ZSBhY2NvcmRpbmcgdG8gY2FudmFzIGRpbWVuc2lvbnNcbiAgICAgIGlmIChsZWZ0WCA8IDApIHtcbiAgICAgICAgLy8gVHJhbnNsYXRlIHRvIHRoZSBsZWZ0XG4gICAgICAgIHJpZ2h0WCArPSBNYXRoLmFicyhsZWZ0WCk7XG4gICAgICAgIGxlZnRYID0gMDtcbiAgICAgIH1cbiAgICAgIGlmIChyaWdodFggPiBjYW52YXMuZ2V0V2lkdGgoKSkge1xuICAgICAgICAvLyBUcmFuc2xhdGUgdG8gdGhlIHJpZ2h0XG4gICAgICAgIGxlZnRYIC09IChyaWdodFggLSBjYW52YXMuZ2V0V2lkdGgoKSk7XG4gICAgICAgIHJpZ2h0WCA9IGNhbnZhcy5nZXRXaWR0aCgpO1xuICAgICAgfVxuICAgICAgaWYgKHRvcFkgPCAwKSB7XG4gICAgICAgIC8vIFRyYW5zbGF0ZSB0byB0aGUgYm90dG9tXG4gICAgICAgIGJvdHRvbVkgKz0gTWF0aC5hYnModG9wWSk7XG4gICAgICAgIHRvcFkgPSAwO1xuICAgICAgfVxuICAgICAgaWYgKGJvdHRvbVkgPiBjYW52YXMuZ2V0SGVpZ2h0KCkpIHtcbiAgICAgICAgLy8gVHJhbnNsYXRlIHRvIHRoZSByaWdodFxuICAgICAgICB0b3BZIC09IChib3R0b21ZIC0gY2FudmFzLmdldEhlaWdodCgpKTtcbiAgICAgICAgYm90dG9tWSA9IGNhbnZhcy5nZXRIZWlnaHQoKTtcbiAgICAgIH1cblxuICAgICAgbGV0IHdpZHRoID0gcmlnaHRYIC0gbGVmdFg7XG4gICAgICBsZXQgaGVpZ2h0ID0gYm90dG9tWSAtIHRvcFk7XG4gICAgICBjb25zdCBjdXJyZW50UmF0aW8gPSB3aWR0aCAvIGhlaWdodDtcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yYXRpbyAmJiArdGhpcy5vcHRpb25zLnJhdGlvICE9PSBjdXJyZW50UmF0aW8pIHtcbiAgICAgICAgY29uc3QgcmF0aW8gPSArdGhpcy5vcHRpb25zLnJhdGlvO1xuXG4gICAgICAgIGlmICh0aGlzLmlzS2V5Q3JvcGluZykge1xuICAgICAgICAgIGlzTGVmdCA9IHRoaXMuaXNLZXlMZWZ0O1xuICAgICAgICAgIGlzVXAgPSB0aGlzLmlzS2V5VXA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3VycmVudFJhdGlvIDwgcmF0aW8pIHtcbiAgICAgICAgICBjb25zdCBuZXdXaWR0aCA9IGhlaWdodCAqIHJhdGlvO1xuICAgICAgICAgIGlmIChpc0xlZnQpIHtcbiAgICAgICAgICAgIGxlZnRYIC09IChuZXdXaWR0aCAtIHdpZHRoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgd2lkdGggPSBuZXdXaWR0aDtcbiAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50UmF0aW8gPiByYXRpbykge1xuICAgICAgICAgIGNvbnN0IG5ld0hlaWdodCA9IGhlaWdodCAvIChyYXRpbyAqIGhlaWdodCAvIHdpZHRoKTtcbiAgICAgICAgICBpZiAoaXNVcCkge1xuICAgICAgICAgICAgdG9wWSAtPSAobmV3SGVpZ2h0IC0gaGVpZ2h0KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaGVpZ2h0ID0gbmV3SGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxlZnRYIDwgMCkge1xuICAgICAgICAgIGxlZnRYID0gMDtcbiAgICAgICAgICAvLyBUT0RPXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRvcFkgPCAwKSB7XG4gICAgICAgICAgdG9wWSA9IDA7XG4gICAgICAgICAgLy8gVE9ET1xuICAgICAgICB9XG4gICAgICAgIGlmIChsZWZ0WCArIHdpZHRoID4gY2FudmFzLmdldFdpZHRoKCkpIHtcbiAgICAgICAgICBjb25zdCBuZXdXaWR0aCA9IGNhbnZhcy5nZXRXaWR0aCgpIC0gbGVmdFg7XG4gICAgICAgICAgaGVpZ2h0ID0gbmV3V2lkdGggKiBoZWlnaHQgLyB3aWR0aDtcbiAgICAgICAgICB3aWR0aCA9IG5ld1dpZHRoO1xuICAgICAgICAgIGlmIChpc1VwKSB7XG4gICAgICAgICAgICB0b3BZID0gZnJvbVkgLSBoZWlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0b3BZICsgaGVpZ2h0ID4gY2FudmFzLmdldEhlaWdodCgpKSB7XG4gICAgICAgICAgY29uc3QgbmV3SGVpZ2h0ID0gY2FudmFzLmdldEhlaWdodCgpIC0gdG9wWTtcbiAgICAgICAgICB3aWR0aCA9IHdpZHRoICogbmV3SGVpZ2h0IC8gaGVpZ2h0O1xuICAgICAgICAgIGhlaWdodCA9IG5ld0hlaWdodDtcbiAgICAgICAgICBpZiAoaXNMZWZ0KSB7XG4gICAgICAgICAgICBsZWZ0WCA9IGZyb21YIC0gd2lkdGg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEFwcGx5IGNvb3JkaW5hdGVzXG4gICAgICB0aGlzLmNyb3Bab25lLmxlZnQgPSBsZWZ0WDtcbiAgICAgIHRoaXMuY3JvcFpvbmUudG9wID0gdG9wWTtcbiAgICAgIHRoaXMuY3JvcFpvbmUud2lkdGggPSB3aWR0aDtcbiAgICAgIHRoaXMuY3JvcFpvbmUuaGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5icmluZ1RvRnJvbnQodGhpcy5jcm9wWm9uZSk7XG5cbiAgICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudChcImNyb3A6dXBkYXRlXCIpO1xuICAgIH1cbiAgfSk7XG59KCkpO1xuIiwiKGZ1bmN0aW9uICgpIHtcbiAgZmFicmljLkltYWdlLnByb3RvdHlwZS5zdHJva2VXaWR0aCA9IDA7XG4gIGNvbnN0IFBlbmNpbCA9IERhcmtyb29tLlRyYW5zZm9ybWF0aW9uLmV4dGVuZCh7XG4gICAgYXBwbHlUcmFuc2Zvcm1hdGlvbihjYW52YXMsIGltYWdlLCBuZXh0KSB7XG4gICAgICAvLyBTbmFwc2hvdCB0aGUgaW1hZ2UgZGVsaW1pdGVkIGJ5IHRoZSBjcm9wIHpvbmVcbiAgICAgIGNvbnN0IHNuYXBzaG90ID0gbmV3IEltYWdlKCk7XG4gICAgICBzbmFwc2hvdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFZhbGlkYXRlIGltYWdlXG4gICAgICAgIGlmICh0aGlzLmhlaWdodCA8IDEgfHwgdGhpcy53aWR0aCA8IDEpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbWdJbnN0YW5jZSA9IG5ldyBmYWJyaWMuSW1hZ2UodGhpcywge1xuICAgICAgICAgIC8vIG9wdGlvbnMgdG8gbWFrZSB0aGUgaW1hZ2Ugc3RhdGljXG4gICAgICAgICAgc2VsZWN0YWJsZTogZmFsc2UsXG4gICAgICAgICAgZXZlbnRlZDogZmFsc2UsXG4gICAgICAgICAgbG9ja01vdmVtZW50WDogdHJ1ZSxcbiAgICAgICAgICBsb2NrTW92ZW1lbnRZOiB0cnVlLFxuICAgICAgICAgIGxvY2tSb3RhdGlvbjogdHJ1ZSxcbiAgICAgICAgICBsb2NrU2NhbGluZ1g6IHRydWUsXG4gICAgICAgICAgbG9ja1NjYWxpbmdZOiB0cnVlLFxuICAgICAgICAgIGxvY2tVbmlTY2FsaW5nOiB0cnVlLFxuICAgICAgICAgIGhhc0NvbnRyb2xzOiBmYWxzZSxcbiAgICAgICAgICBoYXNCb3JkZXJzOiBmYWxzZVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBBZGQgaW1hZ2VcbiAgICAgICAgY2FudmFzLmFkZChpbWdJbnN0YW5jZSk7XG5cbiAgICAgICAgbmV4dChpbWdJbnN0YW5jZSk7XG4gICAgICB9O1xuXG4gICAgICBjYW52YXMuYWRkKHRoaXMub3B0aW9ucy5wZW5jaWxab25lKTtcbiAgICAgIGNhbnZhcy5yZW5kZXJBbGwoKTtcbiAgICAgIHNuYXBzaG90LnNyYyA9IGNhbnZhcy50b0RhdGFVUkwoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IFBlbmNpbFpvbmUgPSBmYWJyaWMudXRpbC5jcmVhdGVDbGFzcyhmYWJyaWMuT2JqZWN0LCB7XG4gICAgdHlwZTogXCJwZW5jaWxPYmplY3RcIixcblxuICAgIGluaXRpYWxpemUob3B0aW9ucykge1xuICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgIHRoaXMubGVmdCA9IG9wdGlvbnMubGVmdCB8fCAwO1xuICAgICAgdGhpcy50b3AgPSBvcHRpb25zLnRvcCB8fCAwO1xuICAgICAgdGhpcy53aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgICB0aGlzLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0O1xuICAgICAgdGhpcy5vcmlnaW5hbFdpZHRoID0gdGhpcy53aWR0aDtcbiAgICAgIHRoaXMub3JpZ2luYWxIZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICAgIHRoaXMuc3Ryb2tlID0gb3B0aW9ucy5zdHJva2U7XG4gICAgICB0aGlzLnNpemUgPSBvcHRpb25zLnNpemU7XG4gICAgICB0aGlzLnBhdGggPSBudWxsO1xuICAgICAgdGhpcy5jWCA9IC10aGlzLmdldFdpZHRoKCkgLyAyO1xuICAgICAgdGhpcy5jWSA9IC10aGlzLmdldEhlaWdodCgpIC8gMjtcbiAgICAgIHRoaXMuY2FsbFN1cGVyKFwiaW5pdGlhbGl6ZVwiLCBvcHRpb25zKTtcbiAgICB9LFxuXG4gICAgX2FwcGx5U2NhbGluZyh3LCBoKSB7XG4gICAgICBjb25zdCBzY2FsZVggPSB0aGlzLmdldFdpZHRoKCkgLyB3O1xuICAgICAgY29uc3Qgc2NhbGVZID0gdGhpcy5nZXRIZWlnaHQoKSAvIGg7XG4gICAgICB0aGlzLnNldCh7XG4gICAgICAgIHNjYWxlWDogdGhpcy5zY2FsZVggLyBzY2FsZVgsXG4gICAgICAgIHNjYWxlWTogdGhpcy5zY2FsZVkgLyBzY2FsZVlcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBfcmVuZGVyKGN0eCkge1xuICAgICAgdGhpcy5fZHJhdyhjdHgpO1xuICAgIH0sXG5cbiAgICBfZHJhdyhjdHgpIHtcbiAgICAgIGlmIChjdHggJiYgdGhpcy5wYXRoICYmIHRoaXMucGF0aC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGN0eC5saW5lSm9pbiA9IFwicm91bmRcIjtcbiAgICAgICAgY3R4LmxpbmVDYXAgPSBcInJvdW5kXCI7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4Lm1vdmVUbyhcbiAgICAgICAgICAodGhpcy5jWCArIHRoaXMucGF0aFswXS54KSxcbiAgICAgICAgICAodGhpcy5jWSArIHRoaXMucGF0aFswXS55KVxuICAgICAgICApO1xuXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5wYXRoLmxlbmd0aDsgeCArPSAxKSB7XG4gICAgICAgICAgY29uc3QgZHJhd1ggPSAodGhpcy5jWCArIHRoaXMucGF0aFt4XS54KTtcbiAgICAgICAgICBjb25zdCBkcmF3WSA9ICh0aGlzLmNZICsgdGhpcy5wYXRoW3hdLnkpO1xuICAgICAgICAgIGN0eC5saW5lVG8oZHJhd1gsIGRyYXdZKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5zdHJva2U7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSB0aGlzLnNpemU7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgY2xvbmUoKSB7XG4gICAgICByZXR1cm4gbmV3IFBlbmNpbFpvbmUoe1xuICAgICAgICBzdHJva2U6IHRoaXMuc3Ryb2tlLFxuICAgICAgICBzaXplOiB0aGlzLnNpemUsXG4gICAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxuICAgICAgICBzZWxlY3RhYmxlOiBmYWxzZSxcbiAgICAgICAgbG9ja1JvdGF0aW9uOiB0cnVlLFxuICAgICAgICBldmVudGVkOiBmYWxzZSxcbiAgICAgICAgbG9ja01vdmVtZW50WDogdHJ1ZSxcbiAgICAgICAgbG9ja01vdmVtZW50WTogdHJ1ZSxcbiAgICAgICAgbG9ja1NjYWxpbmdYOiB0cnVlLFxuICAgICAgICBsb2NrU2NhbGluZ1k6IHRydWUsXG4gICAgICAgIGxvY2tVbmlTY2FsaW5nOiB0cnVlLFxuICAgICAgICBoYXNDb250cm9sczogZmFsc2UsXG4gICAgICAgIGhhc0JvcmRlcnM6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIERhcmtyb29tLnBsdWdpbnMucGVuY2lsID0gRGFya3Jvb20uUGx1Z2luLmV4dGVuZCh7XG4gICAgcGVuY2lsTW9kZTogZmFsc2UsXG4gICAgcGVuY2lsWm9uZTogbnVsbCxcbiAgICBtb3VzZURvd246IGZhbHNlLFxuICAgIHNpemU6IDMwLFxuICAgIGRlZmF1bHRzOiB7XG4gICAgICBzdHJva2U6IFwiYmxhY2tcIixcbiAgICAgIHNpemU6IDMwXG4gICAgfSxcblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICBjb25zdCBidXR0b25Hcm91cCA9IHRoaXMuZGFya3Jvb20udG9vbGJhci5jcmVhdGVCdXR0b25Hcm91cCgpO1xuXG4gICAgICB0aGlzLnBlbmNpbEJ1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XG4gICAgICAgIGltYWdlOiBcInBlbmNpbFwiLFxuICAgICAgICB0b29sdGlwOiBcIkRyYXdcIlxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMucGF0aCA9IFtdO1xuICAgICAgdGhpcy53aWR0aCA9IHRoaXMuZGFya3Jvb20uY2FudmFzLndpZHRoO1xuICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmRhcmtyb29tLmNhbnZhcy5oZWlnaHQ7XG4gICAgICB0aGlzLnNpemUgPSB0aGlzLm9wdGlvbnMuc2l6ZTtcbiAgICAgIHRoaXMuc3Ryb2tlID0gdGhpcy5vcHRpb25zLnN0cm9rZTtcblxuICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMub24oXCJtb3VzZTpkb3duXCIsIHRoaXMub25Nb3VzZURvd24uYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbihcIm1vdXNlOm1vdmVcIiwgdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLm9uKFwibW91c2U6dXBcIiwgdGhpcy5vbk1vdXNlVXAuYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLnBlbmNpbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5vbkNsaWNrLmJpbmQodGhpcykpO1xuICAgIH0sXG5cbiAgICBjbGVhcigpIHtcbiAgICAgIGlmICh0aGlzLmhhc0ZvY3VzKCkpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVGb2N1cygpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBoYXNGb2N1cygpIHtcbiAgICAgIHJldHVybiB0aGlzLnBlbmNpbFpvbmUgIT09IG51bGw7XG4gICAgfSxcblxuICAgIG9uQ2xpY2soKSB7XG4gICAgICBpZiAoIXRoaXMuaGFzRm9jdXMoKSkge1xuICAgICAgICB0aGlzLnJlcXVpcmVGb2N1cygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnJlbW92ZUZvY3VzKCk7XG4gICAgfSxcblxuICAgIG9uTW91c2VEb3duKGV2ZW50KSB7XG4gICAgICBldmVudC5lLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAoIXRoaXMuaGFzRm9jdXMoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudChcInBlbmNpbDpiZWdpblwiKTtcbiAgICAgIHRoaXMubW91c2VEb3duID0gdHJ1ZTtcbiAgICAgIHRoaXMucGF0aC5wdXNoKHRoaXMuZ2V0TW91c2VQb3NpdGlvbih0aGlzLmNhbnZhcywgZXZlbnQpKTtcbiAgICAgIHRoaXMucmVuZGVyWm9uZSgpO1xuICAgIH0sXG5cbiAgICBvbk1vdXNlVXAoZXZlbnQpIHtcbiAgICAgIGlmICghdGhpcy5oYXNGb2N1cygpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMubW91c2VEb3duKSB7XG4gICAgICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudChcInBlbmNpbDplbmRcIik7XG4gICAgICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IG1vdXNlUG9zID0gdGhpcy5nZXRNb3VzZVBvc2l0aW9uKHRoaXMuY2FudmFzLCBldmVudCk7XG4gICAgICAgIHRoaXMucGF0aC5wdXNoKG1vdXNlUG9zKTtcbiAgICAgICAgdGhpcy5yZW5kZXJab25lKCk7XG4gICAgICAgIHRoaXMuYXBwbHlQZW5jaWxQYXRoKCk7XG4gICAgICAgIHRoaXMucGF0aCA9IFtdO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBvbk1vdXNlTW92ZShldmVudCkge1xuICAgICAgaWYgKCF0aGlzLmhhc0ZvY3VzKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5tb3VzZURvd24pIHtcbiAgICAgICAgY29uc3QgbW91c2VQb3MgPSB0aGlzLmdldE1vdXNlUG9zaXRpb24odGhpcy5jYW52YXMsIGV2ZW50KTtcbiAgICAgICAgdGhpcy5wYXRoLnB1c2gobW91c2VQb3MpO1xuICAgICAgICB0aGlzLnJlbmRlclpvbmUoKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcmVtb3ZlRm9jdXMoKSB7XG4gICAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoXCJwZW5jaWw6ZGlzYWJsZWRcIik7XG4gICAgICB0aGlzLnBlbmNpbEJ1dHRvbi5hY3RpdmUoZmFsc2UpO1xuICAgICAgdGhpcy5wZW5jaWxNb2RlID0gZmFsc2U7XG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5kZWZhdWx0Q3Vyc29yID0gXCJkZWZhdWx0XCI7XG4gICAgICBpZiAodGhpcy5wZW5jaWxab25lKSB7XG4gICAgICAgIHRoaXMucGVuY2lsWm9uZS5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5wZW5jaWxab25lID0gbnVsbDtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcmVxdWlyZUZvY3VzKCkge1xuICAgICAgdGhpcy5kYXJrcm9vbS5jbGVhckZvY3VzKFwicGVuY2lsXCIpO1xuICAgICAgdGhpcy5kYXJrcm9vbS5kaXNwYXRjaEV2ZW50KFwicGVuY2lsOmVuYWJsZWRcIik7XG4gICAgICB0aGlzLnBlbmNpbE1vZGUgPSB0cnVlO1xuICAgICAgdGhpcy5wZW5jaWxCdXR0b24uYWN0aXZlKHRydWUpO1xuXG4gICAgICB0aGlzLnBlbmNpbFpvbmUgPSB0aGlzLm5ld1pvbmUoKTtcblxuICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMuYWRkKHRoaXMucGVuY2lsWm9uZSk7XG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5kZWZhdWx0Q3Vyc29yID0gXCJjcm9zc2hhaXJcIjtcbiAgICB9LFxuXG4gICAgZ2V0TW91c2VQb3NpdGlvbihjYW52YXMsIGV2ZW50KSB7XG4gICAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XG4gICAgICBjb25zdCByZWN0ID0gY2FudmFzLmxvd2VyQ2FudmFzRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCBwb2ludGVyID0gY2FudmFzLmdldFBvaW50ZXIoZXZlbnQuZSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB4OiBwb2ludGVyLngsXG4gICAgICAgIHk6IHBvaW50ZXIueSxcbiAgICAgICAgY3g6IGV2ZW50LmUuY2xpZW50WCAtIHJlY3QubGVmdCxcbiAgICAgICAgY3k6IGV2ZW50LmUuY2xpZW50WSAtIHJlY3QudG9wLFxuICAgICAgICBzeDogZXZlbnQuZS5zY3JlZW5YLFxuICAgICAgICBzeTogZXZlbnQuZS5zY3JlZW5ZXG4gICAgICB9O1xuICAgIH0sXG5cbiAgICBuZXdab25lKCkge1xuICAgICAgdGhpcy5wYXRoID0gW107XG4gICAgICBjb25zdCBzdHJva2UgPSB0aGlzLnN0cm9rZTtcbiAgICAgIGNvbnN0IHNpemUgPSB0aGlzLnNpemU7XG4gICAgICBjb25zdCB3aWR0aCA9IHRoaXMuZGFya3Jvb20uY2FudmFzLmdldFdpZHRoKCk7XG4gICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmRhcmtyb29tLmNhbnZhcy5nZXRIZWlnaHQoKTtcbiAgICAgIGNvbnN0IHpvbmUgPSBuZXcgUGVuY2lsWm9uZSh7XG4gICAgICAgIHN0cm9rZSxcbiAgICAgICAgc2l6ZSxcbiAgICAgICAgd2lkdGgsXG4gICAgICAgIGhlaWdodCxcbiAgICAgICAgc2VsZWN0YWJsZTogZmFsc2UsXG4gICAgICAgIGxvY2tSb3RhdGlvbjogdHJ1ZSxcbiAgICAgICAgZXZlbnRlZDogZmFsc2UsXG4gICAgICAgIGxvY2tNb3ZlbWVudFg6IHRydWUsXG4gICAgICAgIGxvY2tNb3ZlbWVudFk6IHRydWUsXG4gICAgICAgIGxvY2tTY2FsaW5nWDogdHJ1ZSxcbiAgICAgICAgbG9ja1NjYWxpbmdZOiB0cnVlLFxuICAgICAgICBsb2NrVW5pU2NhbGluZzogdHJ1ZSxcbiAgICAgICAgaGFzQ29udHJvbHM6IGZhbHNlLFxuICAgICAgICBoYXNCb3JkZXJzOiBmYWxzZVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB6b25lO1xuICAgIH0sXG5cbiAgICBhcHBseVBlbmNpbFBhdGgoKSB7XG4gICAgICBpZiAoIXRoaXMuaGFzRm9jdXMoKSkgeyByZXR1cm47IH1cblxuICAgICAgLy8gQXZvaWQgY3JvcGluZyBlbXB0eSB6b25lXG4gICAgICBpZiAodGhpcy5wYXRoID09PSBudWxsIHx8IHRoaXMucGF0aC5sZW5ndGggPT09IDApIHsgcmV0dXJuOyB9XG5cbiAgICAgIC8vIEFwcGx5IGNyb3AgdHJhbnNmb3JtYXRpb24uXG4gICAgICAvLyBNYWtlIHN1cmUgdG8gdXNlIHJlbGF0aXZlIGRpbWVuc2lvbiBzaW5jZSB0aGUgY3JvcCB3aWxsIGJlIGFwcGxpZWRcbiAgICAgIC8vIG9uIHRoZSBzb3VyY2UgaW1hZ2UuXG4gICAgICBjb25zdCB6b25lID0gdGhpcy5wZW5jaWxab25lLmNsb25lKCk7XG4gICAgICB6b25lLnBhdGggPSB0aGlzLnBhdGg7XG4gICAgICB6b25lLmxlZnQgLT0gdGhpcy5kYXJrcm9vbS5vcHRpb25zLmxlZnQ7XG4gICAgICB6b25lLnRvcCAtPSB0aGlzLmRhcmtyb29tLm9wdGlvbnMudG9wO1xuICAgICAgdGhpcy5kYXJrcm9vbS5hcHBseVRyYW5zZm9ybWF0aW9uKG5ldyBQZW5jaWwoe1xuICAgICAgICBwZW5jaWxab25lOiB6b25lXG4gICAgICB9KSk7XG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5hZGQodGhpcy5wZW5jaWxab25lKTtcbiAgICB9LFxuXG4gICAgcmVuZGVyWm9uZSgpIHtcbiAgICAgIGlmICh0aGlzLnBhdGggJiYgdGhpcy5wYXRoLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5kYXJrcm9vbS5kaXNwYXRjaEV2ZW50KFwicGVuY2lsOnVwZGF0ZVwiKTtcbiAgICAgICAgdGhpcy5wZW5jaWxab25lLnBhdGggPSB0aGlzLnBhdGg7XG4gICAgICB9XG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5icmluZ1RvRnJvbnQodGhpcy5wZW5jaWxab25lKTtcbiAgICB9XG5cbiAgfSk7XG59KCkpO1xuIiwiKGZ1bmN0aW9uICgpIHtcbiAgbGV0IHJlY3Q7XG4gIGxldCBpc0Rvd247XG4gIGxldCBvcmlnWDtcbiAgbGV0IG9yaWdZO1xuICBsZXQgaGFzRm9jdXMgPSB0cnVlO1xuXG4gIGZhYnJpYy5JbWFnZS5wcm90b3R5cGUuc3Ryb2tlV2lkdGggPSAwO1xuICBjb25zdCBSZWN0YW5nbGVUcmFuc2Zvcm1hdGlvbiA9IERhcmtyb29tLlRyYW5zZm9ybWF0aW9uLmV4dGVuZCh7XG4gICAgYXBwbHlUcmFuc2Zvcm1hdGlvbihjYW52YXMsIGltYWdlLCBuZXh0KSB7XG4gICAgICBjb25zdCBzbmFwc2hvdCA9IG5ldyBJbWFnZSgpO1xuICAgICAgc25hcHNob3Qub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5oZWlnaHQgPCAxIHx8IHRoaXMud2lkdGggPCAxKSB7IHJldHVybjsgfVxuICAgICAgICBjb25zdCBpbWdJbnN0YW5jZSA9IG5ldyBmYWJyaWMuSW1hZ2UodGhpcywge1xuICAgICAgICAgIC8vIG9wdGlvbnMgdG8gbWFrZSB0aGUgaW1hZ2Ugc3RhdGljXG4gICAgICAgICAgc2VsZWN0YWJsZTogZmFsc2UsXG4gICAgICAgICAgZXZlbnRlZDogZmFsc2UsXG4gICAgICAgICAgbG9ja01vdmVtZW50WDogdHJ1ZSxcbiAgICAgICAgICBsb2NrTW92ZW1lbnRZOiB0cnVlLFxuICAgICAgICAgIGxvY2tSb3RhdGlvbjogdHJ1ZSxcbiAgICAgICAgICBsb2NrU2NhbGluZ1g6IHRydWUsXG4gICAgICAgICAgbG9ja1NjYWxpbmdZOiB0cnVlLFxuICAgICAgICAgIGxvY2tVbmlTY2FsaW5nOiB0cnVlLFxuICAgICAgICAgIGhhc0NvbnRyb2xzOiBmYWxzZSxcbiAgICAgICAgICBoYXNCb3JkZXJzOiBmYWxzZVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBBZGQgaW1hZ2VcbiAgICAgICAgY2FudmFzLmFkZChpbWdJbnN0YW5jZSk7XG5cbiAgICAgICAgbmV4dChpbWdJbnN0YW5jZSk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBuZXdSZWN0ID0gdGhpcy5vcHRpb25zLnJlY3RhbmdsZTtcbiAgICAgIGNvbnN0IHNjYWxlWCA9IHRoaXMub3B0aW9ucy5vcmlnaW5hbFdpZHRoIC8gY2FudmFzLmdldFdpZHRoKCk7XG4gICAgICBjb25zdCBzY2FsZVkgPSB0aGlzLm9wdGlvbnMub3JpZ2luYWxIZWlnaHQgLyBjYW52YXMuZ2V0SGVpZ2h0KCk7XG4gICAgICBuZXdSZWN0LnNldCh7IHNjYWxlWDogMSAvIHNjYWxlWCwgc2NhbGVZOiAxIC8gc2NhbGVZIH0pO1xuICAgICAgY2FudmFzLmFkZChuZXdSZWN0KTtcbiAgICAgIGNhbnZhcy5yZW5kZXJBbGwoKTtcbiAgICAgIHNuYXBzaG90LnNyYyA9IGNhbnZhcy50b0RhdGFVUkwoKTtcbiAgICB9XG4gIH0pO1xuXG4gIERhcmtyb29tLnBsdWdpbnMucmVjdGFuZ2xlID0gRGFya3Jvb20uUGx1Z2luLmV4dGVuZCh7XG4gICAgcmVjdGFuZ2xlWm9uZTogbnVsbCxcblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICBjb25zdCBidXR0b25Hcm91cCA9IHRoaXMuZGFya3Jvb20udG9vbGJhci5jcmVhdGVCdXR0b25Hcm91cCgpO1xuXG4gICAgICB0aGlzLnJlY3RhbmdsZUJ1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XG4gICAgICAgIGltYWdlOiBcInJlY3RhbmdsZVwiLFxuICAgICAgICB0b29sdGlwOiBcIkRyYXdcIlxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLm9uKFwibW91c2U6ZG93blwiLCB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMub24oXCJtb3VzZTptb3ZlXCIsIHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbihcIm1vdXNlOnVwXCIsIHRoaXMuaGFuZGxlTW91c2VVcC5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMucmVjdGFuZ2xlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgfSxcblxuICAgIGNsZWFyKCkge1xuICAgICAgdGhpcy5yZWN0YW5nbGVCdXR0b24uYWN0aXZlKGZhbHNlKTtcbiAgICAgIGhhc0ZvY3VzID0gdHJ1ZTtcbiAgICAgIGlzRG93biA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICBvbkNsaWNrKCkge1xuICAgICAgaWYgKCFoYXNGb2N1cykge1xuICAgICAgICB0aGlzLnJlY3RhbmdsZUJ1dHRvbi5hY3RpdmUoZmFsc2UpO1xuICAgICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5kZWZhdWx0Q3Vyc29yID0gXCJkZWZhdWx0XCI7XG4gICAgICAgIGhhc0ZvY3VzID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5kYXJrcm9vbS5jbGVhckZvY3VzKFwicmVjdGFuZ2xlXCIpO1xuICAgICAgdGhpcy5yZWN0YW5nbGVCdXR0b24uYWN0aXZlKHRydWUpO1xuICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMuZGVmYXVsdEN1cnNvciA9IFwiY3Jvc3NoYWlyXCI7XG4gICAgICBoYXNGb2N1cyA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICBvbk1vdXNlRG93bihldmVudCkge1xuICAgICAgZXZlbnQuZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKGhhc0ZvY3VzKSByZXR1cm47XG4gICAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoXCJyZWN0YW5nbGU6YmVnaW5cIik7XG4gICAgICBjb25zdCBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcbiAgICAgIGlzRG93biA9IHRydWU7XG4gICAgICBjb25zdCBwb2ludGVyID0gY2FudmFzLmdldFBvaW50ZXIoZXZlbnQuZSk7XG4gICAgICBvcmlnWCA9IHBvaW50ZXIueDtcbiAgICAgIG9yaWdZID0gcG9pbnRlci55O1xuICAgICAgcmVjdCA9IG5ldyBmYWJyaWMuUmVjdCh7XG4gICAgICAgIGxlZnQ6IG9yaWdYLFxuICAgICAgICB0b3A6IG9yaWdZLFxuICAgICAgICBvcmlnaW5YOiBcImxlZnRcIixcbiAgICAgICAgb3JpZ2luWTogXCJ0b3BcIixcbiAgICAgICAgd2lkdGg6IHBvaW50ZXIueCAtIG9yaWdYLFxuICAgICAgICBoZWlnaHQ6IHBvaW50ZXIueSAtIG9yaWdZLFxuICAgICAgICBhbmdsZTogMCxcbiAgICAgICAgZmlsbDogXCJibGFja1wiLFxuICAgICAgICB0cmFuc3BhcmVudENvcm5lcnM6IGZhbHNlXG4gICAgICB9KTtcbiAgICAgIGNhbnZhcy5hZGQocmVjdCk7XG4gICAgfSxcblxuICAgIG9uTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgICBpZiAoaXNEb3duKSB7XG4gICAgICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudChcInJlY3RhbmdsZTp1cGRhdGVcIik7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xuICAgICAgICBjb25zdCBwb2ludGVyID0gY2FudmFzLmdldFBvaW50ZXIoZXZlbnQuZSk7XG5cbiAgICAgICAgaWYgKG9yaWdYID4gcG9pbnRlci54KSB7XG4gICAgICAgICAgcmVjdC5zZXQoe1xuICAgICAgICAgICAgbGVmdDogTWF0aC5hYnMocG9pbnRlci54KVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcmlnWSA+IHBvaW50ZXIueSkge1xuICAgICAgICAgIHJlY3Quc2V0KHtcbiAgICAgICAgICAgIHRvcDogTWF0aC5hYnMocG9pbnRlci55KVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVjdC5zZXQoe1xuICAgICAgICAgIHdpZHRoOiBNYXRoLmFicyhvcmlnWCAtIHBvaW50ZXIueClcbiAgICAgICAgfSk7XG4gICAgICAgIHJlY3Quc2V0KHtcbiAgICAgICAgICBoZWlnaHQ6IE1hdGguYWJzKG9yaWdZIC0gcG9pbnRlci55KVxuICAgICAgICB9KTtcbiAgICAgICAgY2FudmFzLnJlbmRlckFsbCgpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBoYW5kbGVNb3VzZVVwKCkge1xuICAgICAgaWYgKGhhc0ZvY3VzKSByZXR1cm47XG4gICAgICBjb25zdCBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcbiAgICAgIGlzRG93biA9IGZhbHNlO1xuICAgICAgdGhpcy5kYXJrcm9vbS5kaXNwYXRjaEV2ZW50KFwicmVjdGFuZ2xlOmVuZFwiKTtcbiAgICAgIHJlY3QubGVmdCAtPSB0aGlzLmRhcmtyb29tLm9wdGlvbnMubGVmdDtcbiAgICAgIHJlY3QudG9wIC09IHRoaXMuZGFya3Jvb20ub3B0aW9ucy50b3A7XG4gICAgICB0aGlzLmRhcmtyb29tLmFwcGx5VHJhbnNmb3JtYXRpb24obmV3IFJlY3RhbmdsZVRyYW5zZm9ybWF0aW9uKHtcbiAgICAgICAgb3JpZ2luYWxXaWR0aDogY2FudmFzLmdldFdpZHRoKCksXG4gICAgICAgIG9yaWdpbmFsSGVpZ2h0OiBjYW52YXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgIHJlY3RhbmdsZTogcmVjdFxuICAgICAgfSkpO1xuICAgIH1cbiAgfSk7XG59KCkpO1xuIiwiKGZ1bmN0aW9uICgpIHtcbiAgbGV0IGhhc0ZvY3VzID0gZmFsc2U7XG5cbiAgZmFicmljLkltYWdlLnByb3RvdHlwZS5zdHJva2VXaWR0aCA9IDA7XG4gIGNvbnN0IFRleHQgPSBEYXJrcm9vbS5UcmFuc2Zvcm1hdGlvbi5leHRlbmQoe1xuICAgIGFwcGx5VHJhbnNmb3JtYXRpb24oY2FudmFzLCBpbWFnZSwgbmV4dCkge1xuICAgICAgY29uc3Qgc25hcHNob3QgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIHNuYXBzaG90Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gVmFsaWRhdGUgaW1hZ2VcbiAgICAgICAgaWYgKHRoaXMuaGVpZ2h0IDwgMSB8fCB0aGlzLndpZHRoIDwgMSkgeyByZXR1cm47IH1cblxuICAgICAgICBjb25zdCBpbWdJbnN0YW5jZSA9IG5ldyBmYWJyaWMuSW1hZ2UodGhpcywge1xuICAgICAgICAgIC8vIG9wdGlvbnMgdG8gbWFrZSB0aGUgaW1hZ2Ugc3RhdGljXG4gICAgICAgICAgc2VsZWN0YWJsZTogZmFsc2UsXG4gICAgICAgICAgZXZlbnRlZDogZmFsc2UsXG4gICAgICAgICAgbG9ja01vdmVtZW50WDogdHJ1ZSxcbiAgICAgICAgICBsb2NrTW92ZW1lbnRZOiB0cnVlLFxuICAgICAgICAgIGxvY2tSb3RhdGlvbjogdHJ1ZSxcbiAgICAgICAgICBsb2NrU2NhbGluZ1g6IHRydWUsXG4gICAgICAgICAgbG9ja1NjYWxpbmdZOiB0cnVlLFxuICAgICAgICAgIGxvY2tVbmlTY2FsaW5nOiB0cnVlLFxuICAgICAgICAgIGhhc0NvbnRyb2xzOiBmYWxzZSxcbiAgICAgICAgICBoYXNCb3JkZXJzOiBmYWxzZVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBBZGQgaW1hZ2VcbiAgICAgICAgY2FudmFzLmFkZChpbWdJbnN0YW5jZSk7XG5cbiAgICAgICAgbmV4dChpbWdJbnN0YW5jZSk7XG4gICAgICB9O1xuXG4gICAgICBjYW52YXMuYWRkKHRoaXMub3B0aW9ucy50ZXh0KTtcbiAgICAgIGNhbnZhcy5yZW5kZXJBbGwoKTtcbiAgICAgIHNuYXBzaG90LnNyYyA9IGNhbnZhcy50b0RhdGFVUkwoKTtcbiAgICB9XG4gIH0pO1xuICBEYXJrcm9vbS5wbHVnaW5zLnRleHQgPSBEYXJrcm9vbS5QbHVnaW4uZXh0ZW5kKHtcbiAgICBkZWZhdWx0czoge1xuICAgICAgdGV4dDogXCJTYW1wbGUgVGV4dC4uLlwiXG4gICAgfSxcblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICBjb25zdCBidXR0b25Hcm91cCA9IHRoaXMuZGFya3Jvb20udG9vbGJhci5jcmVhdGVCdXR0b25Hcm91cCgpO1xuXG4gICAgICB0aGlzLnRleHRCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xuICAgICAgICBpbWFnZTogXCJ0ZXh0XCIsXG4gICAgICAgIHRpdGxlOiBcIkFkZCBUZXh0XCJcbiAgICAgIH0pO1xuICAgICAgdGhpcy5va0J1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XG4gICAgICAgIGltYWdlOiBcImRvbmVcIixcbiAgICAgICAgdHlwZTogXCJzdWNjZXNzXCIsXG4gICAgICAgIGhpZGU6IHRydWVcbiAgICAgIH0pO1xuICAgICAgdGhpcy5jYW5jZWxCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xuICAgICAgICBpbWFnZTogXCJjbG9zZVwiLFxuICAgICAgICB0eXBlOiBcImRhbmdlclwiLFxuICAgICAgICBoaWRlOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIHRoaXMuY29sb3JQaWNrZXIgPSBidXR0b25Hcm91cC5jcmVhdGVJbnB1dCh7XG4gICAgICAgIGltYWdlOiBcImNvbG9yXCIsXG4gICAgICAgIHRpdGxlOiBcIkNvbG9yIFBpY2tlclwiLFxuICAgICAgICB2YWx1ZTogXCIjZmYwMDAwXCIsXG4gICAgICAgIGhpZGU6IHRydWVcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnRleHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuYWRkVGV4dC5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMub2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuc2F2ZVRleHQuYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLmNvbG9yUGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgdGhpcy5zZXRDb2xvci5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMuY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnJlbGVhc2VGb2N1cy5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLm9uKFwibW91c2U6ZG93blwiLCB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMub24oXCJtb3VzZTptb3ZlXCIsIHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbihcIm1vdXNlOnVwXCIsIHRoaXMuaGFuZGxlTW91c2VVcC5iaW5kKHRoaXMpKTtcblxuICAgICAgdGhpcy5kYXJrcm9vbS5hZGRFdmVudExpc3RlbmVyKFwiY29yZTp0cmFuc2Zvcm1hdGlvblwiLCB0aGlzLnJlbGVhc2VGb2N1cy5iaW5kKHRoaXMpKTtcbiAgICB9LFxuXG4gICAgY2xlYXIoKSB7XG4gICAgICB0aGlzLnRleHRCdXR0b24uYWN0aXZlKGZhbHNlKTtcbiAgICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudChcInRleHQ6ZW5kXCIpO1xuICAgICAgdGhpcy50ZXh0QnV0dG9uLmFjdGl2ZShmYWxzZSk7XG4gICAgICB0aGlzLm9rQnV0dG9uLmhpZGUodHJ1ZSk7XG4gICAgICB0aGlzLmNhbmNlbEJ1dHRvbi5oaWRlKHRydWUpO1xuICAgICAgdGhpcy5jb2xvclBpY2tlci5oaWRlKHRydWUpO1xuICAgICAgaWYgKHRoaXMubmV3VGV4dCkge1xuICAgICAgICB0aGlzLm5ld1RleHQucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgICBoYXNGb2N1cyA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICBhZGRUZXh0KCkge1xuICAgICAgaWYgKGhhc0ZvY3VzKSB7XG4gICAgICAgIHRoaXMucmVsZWFzZUZvY3VzKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGhhc0ZvY3VzID0gdHJ1ZTtcbiAgICAgIHRoaXMuZGFya3Jvb20uY2xlYXJGb2N1cyhcInRleHRcIik7XG5cbiAgICAgIHRoaXMudGV4dEJ1dHRvbi5hY3RpdmUodHJ1ZSk7XG4gICAgICB0aGlzLm9rQnV0dG9uLmhpZGUoZmFsc2UpO1xuICAgICAgdGhpcy5jYW5jZWxCdXR0b24uaGlkZShmYWxzZSk7XG4gICAgICB0aGlzLmNvbG9yUGlja2VyLmhpZGUoZmFsc2UpO1xuXG4gICAgICBjb25zdCBmYWN0b3IgPSB0aGlzLmRhcmtyb29tLmltYWdlLnNjYWxlWDtcbiAgICAgIGNvbnN0IHRleHQgPSBuZXcgZmFicmljLklUZXh0KHRoaXMub3B0aW9ucy50ZXh0LCB7XG4gICAgICAgIGxlZnQ6IDEwMCAqIGZhY3RvcixcbiAgICAgICAgdG9wOiAxMDAgKiBmYWN0b3IsXG4gICAgICAgIGZpbGw6IFwicmVkXCIsXG4gICAgICAgIGZvbnRGYW1pbHk6IFwiTW9ub3NwYWNlXCIsXG4gICAgICAgIGZvbnRTaXplOiAyNSxcbiAgICAgICAgbG9ja1NrZXdpbmdYOiB0cnVlLFxuICAgICAgICBsb2NrU2tld2luZ1k6IHRydWUsXG4gICAgICAgIHNjYWxlWDogZmFjdG9yLFxuICAgICAgICBzY2FsZVk6IGZhY3RvcixcbiAgICAgICAgcGFkZGluZzogMTBcbiAgICAgIH0pO1xuXG4gICAgICB0ZXh0Lm9uKHRoaXMuaW1hZ2UgPSB0aGlzLmRhcmtyb29tLmltYWdlLCB7XG4gICAgICAgIHNjYWxpbmcoKSB7XG4gICAgICAgICAgdGhpcy5mYWN0b3IgPSB0aGlzLmltYWdlLnNjYWxlWDtcblxuICAgICAgICAgIGNvbnN0IG9iaiA9IHRoaXM7XG4gICAgICAgICAgY29uc3QgdyA9IG9iai53aWR0aCAqIG9iai5zY2FsZVggLyBmYWN0b3I7XG4gICAgICAgICAgY29uc3QgaCA9IG9iai5oZWlnaHQgKiBvYmouc2NhbGVZIC8gZmFjdG9yO1xuXG4gICAgICAgICAgb2JqLnNldCh7XG4gICAgICAgICAgICB3aWR0aDogdyxcbiAgICAgICAgICAgIGhlaWdodDogaCxcbiAgICAgICAgICAgIHNjYWxlWDogZmFjdG9yLFxuICAgICAgICAgICAgc2NhbGVZOiBmYWN0b3JcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLmFkZCh0ZXh0KTtcbiAgICAgIHRoaXMubmV3VGV4dCA9IHRleHQ7XG4gICAgfSxcblxuICAgIHNldENvbG9yKGV2ZW50KSB7XG4gICAgICB0aGlzLnNldFN0eWxlKHRoaXMsIFwiZmlsbFwiLCBldmVudC50YXJnZXQudmFsdWUpO1xuICAgIH0sXG5cbiAgICBzZXRTdHlsZShvYmplY3QsIHN0eWxlTmFtZSwgdmFsdWUpIHtcbiAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xuICAgICAgb2JqZWN0Lm5ld1RleHQuZmlsbCA9IHZhbHVlO1xuICAgICAgY2FudmFzLnJlbmRlckFsbCgpO1xuICAgIH0sXG5cbiAgICBzYXZlVGV4dCgpIHtcbiAgICAgIHRoaXMub2tCdXR0b24uaGlkZSh0cnVlKTtcbiAgICAgIHRoaXMuY2FuY2VsQnV0dG9uLmhpZGUodHJ1ZSk7XG4gICAgICB0aGlzLmNvbG9yUGlja2VyLmhpZGUodHJ1ZSk7XG4gICAgICB0aGlzLnRleHRCdXR0b24uYWN0aXZlKGZhbHNlKTtcbiAgICAgIHRoaXMubmV3VGV4dC5oYXNCb3JkZXJzID0gZmFsc2U7XG4gICAgICB0aGlzLm5ld1RleHQuaGFzQ29udHJvbHMgPSBmYWxzZTtcbiAgICAgIHRoaXMubmV3VGV4dC5oYXNSb3RhdGluZ1BvaW50ID0gZmFsc2U7XG4gICAgICB0aGlzLm5ld1RleHQuc2VsZWN0aW9uQ29sb3IgPSBcInRyYW5zcGFyZW50XCI7XG4gICAgICB0aGlzLm5ld1RleHQuYWJvcnRDdXJzb3JBbmltYXRpb24oKTtcbiAgICAgIHRoaXMubmV3VGV4dC5sZWZ0IC09IHRoaXMuZGFya3Jvb20ub3B0aW9ucy5sZWZ0O1xuICAgICAgdGhpcy5uZXdUZXh0LnRvcCAtPSB0aGlzLmRhcmtyb29tLm9wdGlvbnMudG9wO1xuICAgICAgdGhpcy5kYXJrcm9vbS5hcHBseVRyYW5zZm9ybWF0aW9uKG5ldyBUZXh0KHtcbiAgICAgICAgdGV4dDogdGhpcy5uZXdUZXh0XG4gICAgICB9KSk7XG4gICAgICB0aGlzLmNvbG9yUGlja2VyLmVsZW1lbnQudmFsdWUgPSBcIiNmZjAwMDBcIjtcbiAgICB9LFxuXG4gICAgb25Nb3VzZURvd24oKSB7XG4gICAgICBpZiAoIXRoaXMubmV3VGV4dCkgeyByZXR1cm47IH1cbiAgICAgIGlmICh0aGlzLm5ld1RleHQuYWN0aXZlKSB7XG4gICAgICAgIHRoaXMuaXNEb3duID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgb25Nb3VzZU1vdmUoKSB7XG4gICAgICBpZiAoIXRoaXMuaXNEb3duKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xuICAgICAgY2FudmFzLnJlbmRlckFsbCgpO1xuICAgIH0sXG5cbiAgICBoYW5kbGVNb3VzZVVwKCkge1xuICAgICAgdGhpcy5pc0Rvd24gPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgcmVsZWFzZUZvY3VzKCkge1xuICAgICAgaWYgKHRoaXMubmV3VGV4dCkgeyB0aGlzLm5ld1RleHQucmVtb3ZlKCk7IH1cblxuICAgICAgdGhpcy50ZXh0QnV0dG9uLmFjdGl2ZShmYWxzZSk7XG4gICAgICB0aGlzLm9rQnV0dG9uLmhpZGUodHJ1ZSk7XG4gICAgICB0aGlzLmNhbmNlbEJ1dHRvbi5oaWRlKHRydWUpO1xuICAgICAgdGhpcy5jb2xvclBpY2tlci5oaWRlKHRydWUpO1xuICAgICAgdGhpcy5jb2xvclBpY2tlci5lbGVtZW50LnZhbHVlID0gXCIjZmYwMDAwXCI7XG4gICAgICBoYXNGb2N1cyA9IGZhbHNlO1xuICAgIH1cbiAgfSk7XG59KCkpO1xuIiwiKGZ1bmN0aW9uICgpIHtcbiAgbGV0IGVsbGlwO1xuICBsZXQgaXNEb3duID0gZmFsc2U7XG4gIGxldCBvcmlnWDtcbiAgbGV0IG9yaWdZO1xuICBsZXQgaGFzRm9jdXMgPSB0cnVlO1xuXG4gIGZhYnJpYy5JbWFnZS5wcm90b3R5cGUuc3Ryb2tlV2lkdGggPSAwO1xuICBjb25zdCBDaXJjbGUgPSBEYXJrcm9vbS5UcmFuc2Zvcm1hdGlvbi5leHRlbmQoe1xuICAgIGFwcGx5VHJhbnNmb3JtYXRpb24oY2FudmFzLCBpbWFnZSwgbmV4dCkge1xuICAgICAgY29uc3Qgc25hcHNob3QgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIHNuYXBzaG90Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gVmFsaWRhdGUgaW1hZ2VcbiAgICAgICAgaWYgKHRoaXMuaGVpZ2h0IDwgMSB8fCB0aGlzLndpZHRoIDwgMSkgeyByZXR1cm47IH1cblxuICAgICAgICBjb25zdCBpbWdJbnN0YW5jZSA9IG5ldyBmYWJyaWMuSW1hZ2UodGhpcywge1xuICAgICAgICAgIC8vIG9wdGlvbnMgdG8gbWFrZSB0aGUgaW1hZ2Ugc3RhdGljXG4gICAgICAgICAgc2VsZWN0YWJsZTogZmFsc2UsXG4gICAgICAgICAgZXZlbnRlZDogZmFsc2UsXG4gICAgICAgICAgbG9ja01vdmVtZW50WDogdHJ1ZSxcbiAgICAgICAgICBsb2NrTW92ZW1lbnRZOiB0cnVlLFxuICAgICAgICAgIGxvY2tSb3RhdGlvbjogdHJ1ZSxcbiAgICAgICAgICBsb2NrU2NhbGluZ1g6IHRydWUsXG4gICAgICAgICAgbG9ja1NjYWxpbmdZOiB0cnVlLFxuICAgICAgICAgIGxvY2tVbmlTY2FsaW5nOiB0cnVlLFxuICAgICAgICAgIGhhc0NvbnRyb2xzOiBmYWxzZSxcbiAgICAgICAgICBoYXNCb3JkZXJzOiBmYWxzZVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBBZGQgaW1hZ2VcbiAgICAgICAgY2FudmFzLmFkZChpbWdJbnN0YW5jZSk7XG5cbiAgICAgICAgbmV4dChpbWdJbnN0YW5jZSk7XG4gICAgICB9O1xuXG4gICAgICBjYW52YXMuYWRkKHRoaXMub3B0aW9ucy5jaXJjbGUpO1xuICAgICAgY2FudmFzLnJlbmRlckFsbCgpO1xuICAgICAgc25hcHNob3Quc3JjID0gY2FudmFzLnRvRGF0YVVSTCgpO1xuICAgIH1cbiAgfSk7XG5cbiAgRGFya3Jvb20ucGx1Z2lucy5jaXJjbGUgPSBEYXJrcm9vbS5QbHVnaW4uZXh0ZW5kKHtcblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICBjb25zdCBidXR0b25Hcm91cCA9IHRoaXMuZGFya3Jvb20udG9vbGJhci5jcmVhdGVCdXR0b25Hcm91cCgpO1xuXG4gICAgICB0aGlzLmNpcmNsZUJ1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XG4gICAgICAgIGltYWdlOiBcImNpcmNsZVwiLFxuICAgICAgICB0b29sdGlwOiBcImNpcmNsZVwiXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMub24oXCJtb3VzZTpkb3duXCIsIHRoaXMub25Nb3VzZURvd24uYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbihcIm1vdXNlOm1vdmVcIiwgdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLm9uKFwibW91c2U6dXBcIiwgdGhpcy5oYW5kbGVNb3VzZVVwLmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5jaXJjbGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMub25DbGljay5iaW5kKHRoaXMpKTtcbiAgICB9LFxuXG4gICAgY2xlYXIoKSB7XG4gICAgICB0aGlzLmNpcmNsZUJ1dHRvbi5hY3RpdmUoZmFsc2UpO1xuICAgICAgaGFzRm9jdXMgPSB0cnVlO1xuICAgICAgaXNEb3duID0gZmFsc2U7XG4gICAgfSxcblxuICAgIG9uQ2xpY2soKSB7XG4gICAgICBpZiAoIWhhc0ZvY3VzKSB7XG4gICAgICAgIHRoaXMuY2lyY2xlQnV0dG9uLmFjdGl2ZShmYWxzZSk7XG4gICAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLmRlZmF1bHRDdXJzb3IgPSBcImRlZmF1bHRcIjtcbiAgICAgICAgaGFzRm9jdXMgPSB0cnVlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmRhcmtyb29tLmNsZWFyRm9jdXMoXCJjaXJjbGVcIik7XG4gICAgICB0aGlzLmNpcmNsZUJ1dHRvbi5hY3RpdmUodHJ1ZSk7XG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5kZWZhdWx0Q3Vyc29yID0gXCJjcm9zc2hhaXJcIjtcbiAgICAgIGhhc0ZvY3VzID0gZmFsc2U7XG4gICAgfSxcblxuICAgIG9uTW91c2VEb3duKGV2ZW50KSB7XG4gICAgICBldmVudC5lLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLmlzRG93biA9IHRydWU7XG4gICAgICBpZiAoaGFzRm9jdXMpIHJldHVybjtcbiAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xuICAgICAgaXNEb3duID0gdHJ1ZTtcbiAgICAgIGNvbnN0IHBvaW50ZXIgPSBjYW52YXMuZ2V0UG9pbnRlcihldmVudC5lKTtcbiAgICAgIG9yaWdYID0gcG9pbnRlci54O1xuICAgICAgb3JpZ1kgPSBwb2ludGVyLnk7XG4gICAgICBlbGxpcCA9IG5ldyBmYWJyaWMuRWxsaXBzZSh7XG4gICAgICAgIGxlZnQ6IHBvaW50ZXIueCxcbiAgICAgICAgdG9wOiBwb2ludGVyLnksXG4gICAgICAgIHN0cm9rZTogXCJibGFja1wiLFxuICAgICAgICBmaWxsOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgIHN0cm9rZVdpZHRoOiBcIjRcIixcbiAgICAgICAgcng6IDAsXG4gICAgICAgIHJ5OiAwXG4gICAgICB9KTtcbiAgICAgIGNhbnZhcy5hZGQoZWxsaXApO1xuICAgIH0sXG5cbiAgICBvbk1vdXNlTW92ZShldmVudCkge1xuICAgICAgaWYgKCF0aGlzLmlzRG93bikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoaXNEb3duICYmIGVsbGlwKSB7XG4gICAgICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudChcImNpcmNsZTp1cGRhdGVcIik7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xuICAgICAgICBjb25zdCBwb2ludGVyID0gY2FudmFzLmdldFBvaW50ZXIoZXZlbnQuZSk7XG5cbiAgICAgICAgaWYgKG9yaWdYID4gcG9pbnRlci54KSB7XG4gICAgICAgICAgZWxsaXAuc2V0KHtcbiAgICAgICAgICAgIGxlZnQ6IE1hdGguYWJzKHBvaW50ZXIueClcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcmlnWSA+IHBvaW50ZXIueSkge1xuICAgICAgICAgIGVsbGlwLnNldCh7XG4gICAgICAgICAgICB0b3A6IE1hdGguYWJzKHBvaW50ZXIueSlcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsbGlwLnNldCh7XG4gICAgICAgICAgcng6IE1hdGguYWJzKG9yaWdYIC0gcG9pbnRlci54KSAvIDJcbiAgICAgICAgfSk7XG4gICAgICAgIGVsbGlwLnNldCh7XG4gICAgICAgICAgcnk6IE1hdGguYWJzKG9yaWdZIC0gcG9pbnRlci55KSAvIDJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZWxsaXAuc2V0Q29vcmRzKCk7XG4gICAgICAgIGNhbnZhcy5yZW5kZXJBbGwoKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgaGFuZGxlTW91c2VVcCgpIHtcbiAgICAgIGlmIChoYXNGb2N1cykgeyByZXR1cm47IH1cbiAgICAgIHRoaXMuaXNEb3duID0gZmFsc2U7XG4gICAgICBlbGxpcC5sZWZ0IC09IHRoaXMuZGFya3Jvb20ub3B0aW9ucy5sZWZ0O1xuICAgICAgZWxsaXAudG9wIC09IHRoaXMuZGFya3Jvb20ub3B0aW9ucy50b3A7XG4gICAgICB0aGlzLmRhcmtyb29tLmFwcGx5VHJhbnNmb3JtYXRpb24obmV3IENpcmNsZSh7XG4gICAgICAgIGNpcmNsZTogZWxsaXBcbiAgICAgIH0pKTtcbiAgICB9XG4gIH0pO1xufSgpKTtcbiIsIihmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IG1heFpvb20gPSAyO1xuICBsZXQgbWluWm9vbTtcbiAgY29uc3Qgc3RhdGVzID0ge1xuICAgIHBhbkFjdGl2ZTogZmFsc2UsXG4gICAgcGFubmluZzogZmFsc2UsXG4gICAgcmVhbFBhbjogbnVsbFxuICB9O1xuICBsZXQgb3JpZ1g7XG4gIGxldCBvcmlnWTtcblxuICBmYWJyaWMuSW1hZ2UucHJvdG90eXBlLnN0cm9rZVdpZHRoID0gMDtcbiAgRGFya3Jvb20ucGx1Z2lucy56b29tID0gRGFya3Jvb20uUGx1Z2luLmV4dGVuZCh7XG5cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgY29uc3QgYnV0dG9uR3JvdXAgPSB0aGlzLmRhcmtyb29tLnRvb2xiYXIuY3JlYXRlQnV0dG9uR3JvdXAoKTtcblxuICAgICAgdGhpcy56b29tSW5CdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xuICAgICAgICBpbWFnZTogXCJ6b29tLWluXCIsXG4gICAgICAgIHRpdGxlOiBcInpvb20gaW5cIlxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuem9vbU91dEJ1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XG4gICAgICAgIGltYWdlOiBcInpvb20tb3V0XCIsXG4gICAgICAgIHRpdGxlOiBcInpvb20gb3V0XCIsXG4gICAgICAgIGRpc2FibGVkOiB0cnVlXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5wYW4gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xuICAgICAgICBpbWFnZTogXCJoYW5kXCIsXG4gICAgICAgIGRpc2FibGVkOiB0cnVlXG4gICAgICB9KTtcblxuICAgICAgdGhpcy56b29tSW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuem9vbUluLmJpbmQodGhpcykpO1xuICAgICAgdGhpcy56b29tT3V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnpvb21PdXQuYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLnBhbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5vblBhbi5iaW5kKHRoaXMpKTtcbiAgICAgIG1pblpvb20gPSB0aGlzLmRhcmtyb29tLmNhbnZhcy5nZXRab29tKCk7XG4gICAgfSxcblxuICAgIGNsZWFyKCkge1xuICAgICAgc3RhdGVzLnBhbkFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5wYW4uYWN0aXZlKGZhbHNlKTtcbiAgICAgIHN0YXRlcy5wYW5uaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5kZWZhdWx0Q3Vyc29yID0gXCJkZWZhdWx0XCI7XG4gICAgICB0aGlzLnJlc3RvcmVab29tUGFuKCk7XG4gICAgfSxcblxuICAgIG9uUGFuKCkge1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIHN0YXRlcy5wYW5BY3RpdmUpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kYXJrcm9vbS5jbGVhckZvY3VzKFwiem9vbVwiKTtcbiAgICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XG4gICAgICAgIGNhbnZhcy5vbihcIm1vdXNlOmRvd25cIiwgdGhpcy5wYW5FbnRlci5iaW5kKHRoaXMpKTtcbiAgICAgICAgY2FudmFzLm9uKFwibW91c2U6dXBcIiwgdGhpcy5wYW5FeGl0LmJpbmQodGhpcykpO1xuICAgICAgICBjYW52YXMub24oXCJtb3VzZTptb3ZlXCIsIHRoaXMuX3Bhbi5iaW5kKHRoaXMpKTtcbiAgICAgICAgY2FudmFzLmRlZmF1bHRDdXJzb3IgPSBcIm1vdmVcIjtcbiAgICAgICAgc3RhdGVzLnBhbkFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMucGFuLmFjdGl2ZSh0cnVlKTtcbiAgICAgIH1cbiAgICB9LFxuXG5cbiAgICBwYW5FbnRlcihldmVudCkge1xuICAgICAgaWYgKHN0YXRlcy5wYW5BY3RpdmUpIHtcbiAgICAgICAgc3RhdGVzLnBhbm5pbmcgPSB0cnVlO1xuICAgICAgICBvcmlnWCA9IGV2ZW50LmUuc2NyZWVuWCB8fCBldmVudC5lLnRvdWNoZXNbMF0uc2NyZWVuWDtcbiAgICAgICAgb3JpZ1kgPSBldmVudC5lLnNjcmVlblkgfHwgZXZlbnQuZS50b3VjaGVzWzBdLnNjcmVlblk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIF9wYW4oZXZlbnQpIHtcbiAgICAgIGV2ZW50LmUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xuICAgICAgaWYgKHN0YXRlcy5wYW5uaW5nICYmIGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5lLnRvdWNoZXMpIHtcbiAgICAgICAgICBjb25zdCB0b3VjaGVzID0gZXZlbnQuZS50b3VjaGVzO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG91Y2hlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgY29uc3QgZGVsdGEgPSB7XG4gICAgICAgICAgICAgIHg6ICh0b3VjaGVzW2ldLnNjcmVlblggLSBvcmlnWCksXG4gICAgICAgICAgICAgIHk6ICh0b3VjaGVzW2ldLnNjcmVlblkgLSBvcmlnWSlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBvcmlnWCA9IHRvdWNoZXNbaV0uc2NyZWVuWDtcbiAgICAgICAgICAgIG9yaWdZID0gdG91Y2hlc1tpXS5zY3JlZW5ZO1xuICAgICAgICAgICAgdGhpcy5kb1BhbihkZWx0YSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGRlbHRhID0ge1xuICAgICAgICAgICAgeDogKGV2ZW50LmUuc2NyZWVuWCAtIG9yaWdYKSxcbiAgICAgICAgICAgIHk6IChldmVudC5lLnNjcmVlblkgLSBvcmlnWSlcbiAgICAgICAgICB9O1xuICAgICAgICAgIG9yaWdYID0gZXZlbnQuZS5zY3JlZW5YO1xuICAgICAgICAgIG9yaWdZID0gZXZlbnQuZS5zY3JlZW5ZO1xuICAgICAgICAgIHRoaXMuZG9QYW4oZGVsdGEpO1xuICAgICAgICB9XG4gICAgICAgIGNhbnZhcy5yZW5kZXJBbGwoKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcGFuRXhpdCgpIHtcbiAgICAgIGlmIChzdGF0ZXMucGFuQWN0aXZlKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmRhcmtyb29tLm9wdGlvbnM7XG4gICAgICAgIGNvbnN0IGltYWdlID0gdGhpcy5kYXJrcm9vbS5pbWFnZTtcbiAgICAgICAgc3RhdGVzLnBhbm5pbmcgPSBmYWxzZTtcbiAgICAgICAgb3B0aW9ucy5sZWZ0ID0gaW1hZ2UubGVmdDtcbiAgICAgICAgb3B0aW9ucy50b3AgPSBpbWFnZS50b3A7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGRvUGFuKGRlbHRhKSB7XG4gICAgICBjb25zdCBpbWFnZSA9IHRoaXMuZGFya3Jvb20uaW1hZ2U7XG4gICAgICB0aGlzLmRlbHRhID0gdGhpcy5jb25zdHJhaW5QYW4oZGVsdGEpO1xuICAgICAgaW1hZ2UubGVmdCArPSBkZWx0YS54O1xuICAgICAgaW1hZ2UudG9wICs9IGRlbHRhLnk7XG4gICAgICBpbWFnZS5zZXRDb29yZHMoKTtcbiAgICAgIHN0YXRlcy5yZWFsUGFuID0ge1xuICAgICAgICB4OiBpbWFnZS5vQ29vcmRzLnRsLngsXG4gICAgICAgIHk6IGltYWdlLm9Db29yZHMudGwueVxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgY29uc3RyYWluUGFuKGRlbHRhKSB7XG4gICAgICBjb25zdCBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcbiAgICAgIGNvbnN0IGltYWdlID0gdGhpcy5kYXJrcm9vbS5pbWFnZTtcbiAgICAgIGNvbnN0IHRsID0gaW1hZ2Uub0Nvb3Jkcy50bDsgLy8gdG9wIGxlZnQgY29ybmVyXG4gICAgICBjb25zdCBiciA9IGltYWdlLm9Db29yZHMuYnI7IC8vIGJvdHRvbSByaWdodCBjb3JuZXJcbiAgICAgIGlmIChkZWx0YS54ID4gMCkge1xuICAgICAgICBkZWx0YS54ID0gKCh0bC54ICsgZGVsdGEueCkgPiAwKSA/IDAgOiBNYXRoLmZsb29yKGRlbHRhLngpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVsdGEueCA9IE1hdGguY2VpbChkZWx0YS54KTtcbiAgICAgICAgaWYgKChNYXRoLmNlaWwoYnIueCkgKyBkZWx0YS54KSA8IGNhbnZhcy53aWR0aCkge1xuICAgICAgICAgIGRlbHRhLnggPSAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZGVsdGEueSA+IDApIHtcbiAgICAgICAgZGVsdGEueSA9ICgodGwueSArIGRlbHRhLnkpID4gMCkgPyAwIDogTWF0aC5mbG9vcihkZWx0YS55KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlbHRhLnkgPSBNYXRoLmNlaWwoZGVsdGEueSk7XG4gICAgICAgIGlmICgoTWF0aC5jZWlsKGJyLnkpICsgZGVsdGEueSkgPCBjYW52YXMuaGVpZ2h0KSB7XG4gICAgICAgICAgZGVsdGEueSA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBkZWx0YTtcbiAgICB9LFxuXG4gICAgcmVzdG9yZVpvb21QYW4oKSB7XG4gICAgICBpZiAoc3RhdGVzLmxhc3RTY2FsZSAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMuZGFya3Jvb20uaW1hZ2Uuc2NhbGUoc3RhdGVzLmxhc3RTY2FsZSk7XG4gICAgICAgIGlmIChzdGF0ZXMucmVhbFBhbiAhPSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5kb1BhbihzdGF0ZXMucmVhbFBhbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgem9vbUluKCkge1xuICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XG4gICAgICBpZiAoY2FudmFzLmdldFpvb20oKSA8PSBtYXhab29tKSB7XG4gICAgICAgIGNhbnZhcy5zZXRab29tKGNhbnZhcy5nZXRab29tKCkgKiAxLjEpO1xuICAgICAgICBjYW52YXMucmVuZGVyQWxsKCk7XG4gICAgICB9XG4gICAgICB0aGlzLm9uUGFuKCk7XG4gICAgICB0aGlzLnVwZGF0ZUJ1dHRvbnMoKTtcbiAgICB9LFxuXG4gICAgem9vbU91dCgpIHtcbiAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xuICAgICAgY29uc3QgaW1hZ2UgPSB0aGlzLmRhcmtyb29tLmltYWdlO1xuICAgICAgaWYgKGNhbnZhcy5nZXRab29tKCkgPiBtaW5ab29tKSB7XG4gICAgICAgIGNhbnZhcy5zZXRab29tKGNhbnZhcy5nZXRab29tKCkgLyAxLjEpO1xuICAgICAgICBpZiAodGhpcy5kYXJrcm9vbS5pbWFnZS5vQ29vcmRzLmJyLnggPCB0aGlzLmRhcmtyb29tLmNhbnZhcy53aWR0aCkge1xuICAgICAgICAgIGNvbnN0IG5ld0xlZnQgPSBNYXRoLmNlaWwodGhpcy5kYXJrcm9vbS5jYW52YXMud2lkdGggLSB0aGlzLmRhcmtyb29tLmltYWdlLm9Db29yZHMuYnIueCk7XG4gICAgICAgICAgaW1hZ2UubGVmdCArPSBuZXdMZWZ0O1xuICAgICAgICAgIHRoaXMuZGFya3Jvb20ub3B0aW9ucy5sZWZ0ID0gdGhpcy5kYXJrcm9vbS5vcHRpb25zLmxlZnQgKyBuZXdMZWZ0O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmRhcmtyb29tLmltYWdlLm9Db29yZHMuYnIueSA8IHRoaXMuZGFya3Jvb20uY2FudmFzLmhlaWdodCkge1xuICAgICAgICAgIGNvbnN0IG5ld1RvcCA9IE1hdGguY2VpbCh0aGlzLmRhcmtyb29tLmNhbnZhcy5oZWlnaHQgLSB0aGlzLmRhcmtyb29tLmltYWdlLm9Db29yZHMuYnIueSk7XG4gICAgICAgICAgaW1hZ2UudG9wICs9IG5ld1RvcDtcbiAgICAgICAgICB0aGlzLmRhcmtyb29tLm9wdGlvbnMudG9wID0gdGhpcy5kYXJrcm9vbS5vcHRpb25zLnRvcCArIG5ld1RvcDtcbiAgICAgICAgfVxuICAgICAgICBpbWFnZS5zZXRDb29yZHMoKTtcbiAgICAgICAgY2FudmFzLnJlbmRlckFsbCgpO1xuICAgICAgICBpZiAoY2FudmFzLmdldFpvb20oKSA+PSBtaW5ab29tKSB7XG4gICAgICAgICAgdGhpcy5vblBhbigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlQnV0dG9ucygpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICB1cGRhdGVCdXR0b25zKCkge1xuICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XG4gICAgICBjb25zdCBzaG91bGREaXNhYmxlTWluWm9vbSA9IGNhbnZhcy5nZXRab29tKCkgPD0gbWluWm9vbTtcbiAgICAgIGNvbnN0IHNob3VsZERpc2FibGVNYXhab29vbSA9IGNhbnZhcy5nZXRab29tKCkgPj0gbWF4Wm9vbTtcbiAgICAgIGNvbnN0IHNob3VsZEVuYWJsZVBhbiA9IGNhbnZhcy5nZXRab29tKCkgPiBtaW5ab29tO1xuICAgICAgdGhpcy56b29tT3V0QnV0dG9uLmRpc2FibGUoc2hvdWxkRGlzYWJsZU1pblpvb20pO1xuICAgICAgdGhpcy56b29tSW5CdXR0b24uZGlzYWJsZShzaG91bGREaXNhYmxlTWF4Wm9vb20pO1xuICAgICAgaWYgKHNob3VsZERpc2FibGVNaW5ab29tKSB7XG4gICAgICAgIHRoaXMuZGFya3Jvb20ub3B0aW9ucy5sZWZ0ID0gMDtcbiAgICAgICAgdGhpcy5kYXJrcm9vbS5vcHRpb25zLnRvcCA9IDA7XG4gICAgICAgIHRoaXMucGFuLmFjdGl2ZShmYWxzZSk7XG4gICAgICAgIHRoaXMucGFuLmRpc2FibGUodHJ1ZSk7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNob3VsZEVuYWJsZVBhbikge1xuICAgICAgICB0aGlzLnBhbi5kaXNhYmxlKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufSgpKTtcbiIsIihmdW5jdGlvbiAoKSB7XG4gIGZhYnJpYy5JbWFnZS5wcm90b3R5cGUuc3Ryb2tlV2lkdGggPSAwO1xuICBEYXJrcm9vbS5wbHVnaW5zLnNhdmUgPSBEYXJrcm9vbS5QbHVnaW4uZXh0ZW5kKHtcblxuICAgIGRlZmF1bHRzOiB7XG4gICAgICBjYWxsYmFjaygpIHtcbiAgICAgICAgdGhpcy5kYXJrcm9vbS5zZWxmRGVzdHJveSgpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgY29uc3QgYnV0dG9uR3JvdXAgPSB0aGlzLmRhcmtyb29tLnRvb2xiYXIuY3JlYXRlQnV0dG9uR3JvdXAoKTtcblxuICAgICAgdGhpcy5kZXN0cm95QnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcbiAgICAgICAgaW1hZ2U6IFwic2F2ZVwiXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5kZXN0cm95QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLm9wdGlvbnMuY2FsbGJhY2suYmluZCh0aGlzKSk7XG4gICAgfVxuICB9KTtcbn0oKSk7XG4iXX0=
