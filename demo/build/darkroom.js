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
  "use strict";

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
    createButtonGroup(options) {
      var buttonGroup = document.createElement("div");
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
      var defaults = {
        image: "help",
        type: "default",
        group: "default",
        hide: false,
        disabled: false
      };

      options = Darkroom.Utils.extend(options, defaults);

      var buttonElement = document.createElement("button");
      buttonElement.type = "button";
      buttonElement.className = "darkroom-button darkroom-button-" + options.type;
      buttonElement.innerHTML = "<svg class=\"darkroom-icon\"><use xlink:href=\"#" + options.image + "\" /></svg>";
      this.element.appendChild(buttonElement);

      var button = new Button(buttonElement);
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

      var inputElement = document.createElement("input");
      inputElement.type = "color";
      inputElement.className = "darkroom-button darkroom-input-" + options.type;
      inputElement.innerHTML = "<svg class=\"darkroom-icon\"><use xlink:href=\"#" + options.image + "\" /></svg>";
      this.element.appendChild(inputElement);

      var input = new Input(inputElement);
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
        this.element.attachEvent("on" + eventName, listener);
      }
    },
    removeEventListener(eventName, listener) {
      if (this.element.removeEventListener) {
        this.element.removeEventListener(eventName, listener);
      }
    },
    active(value) {
      if (value)
        this.element.classList.add("darkroom-button-active");
      else
        this.element.classList.remove("darkroom-button-active");
    },
    hide(value) {
      if (value)
        this.element.classList.add("darkroom-button-hidden");
      else
        this.element.classList.remove("darkroom-button-hidden");
    },
    disable(value) {
      this.element.disabled = (value) ? true : false;
    }
  };

  Input.prototype = {
    addEventListener(eventName, listener) {
      if (this.element.addEventListener) {
        this.element.addEventListener(eventName, listener);
      } else if (this.element.attachEvent) {
        this.element.attachEvent("on" + eventName, listener);
      }
    },
    removeEventListener(eventName, listener) {
      if (this.element.removeEventListener) {
        this.element.removeEventListener(eventName, listener);
      }
    },
    active(value) {
      if (value)
        this.element.classList.add("darkroom-input-active");
      else
        this.element.classList.remove("darkroom-input-active");
    },
    hide(value) {
      if (value)
        this.element.classList.add("darkroom-button-hidden");
      else
        this.element.classList.remove("darkroom-button-hidden");
    },
    disable(value) {
      this.element.disabled = (value) ? true : false;
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
;;(function(window, document, Darkroom, fabric) {
  'use strict';

  Darkroom.plugins['history'] = Darkroom.Plugin.extend({
    undoTransformations: [],

    initialize: function InitDarkroomHistoryPlugin() {
      this._initButtons();

      this.darkroom.addEventListener('core:transformation', this._onTranformationApplied.bind(this));
    },

    undo: function() {
      if (this.darkroom.transformations.length === 0) {
        return;
      }

      var lastTransformation = this.darkroom.transformations.pop();
      this.undoTransformations.unshift(lastTransformation);

      this.darkroom.reinitializeImage();
      this._updateButtons();
    },

    redo: function() {
      if (this.undoTransformations.length === 0) {
        return;
      }

      var cancelTransformation = this.undoTransformations.shift();
      this.darkroom.transformations.push(cancelTransformation);

      this.darkroom.reinitializeImage();
      this._updateButtons();
    },

    _initButtons: function() {
      var buttonGroup = this.darkroom.toolbar.createButtonGroup();

      this.backButton = buttonGroup.createButton({
        image: 'undo',
        disabled: true
      });

      this.forwardButton = buttonGroup.createButton({
        image: 'redo',
        disabled: true
      });

      this.backButton.addEventListener('click', this.undo.bind(this));
      this.forwardButton.addEventListener('click', this.redo.bind(this));

      return this;
    },

    _updateButtons: function() {
      this.backButton.disable((this.darkroom.transformations.length === 0))
      this.forwardButton.disable((this.undoTransformations.length === 0))
    },

    _onTranformationApplied: function() {
      this.undoTransformations = [];
      this._updateButtons();
    }
  });
})(window, document, Darkroom, fabric);
;(function () {
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
    },
  });

  Darkroom.plugins.rotate = Darkroom.Plugin.extend({

    initialize() {
      const buttonGroup = this.darkroom.toolbar.createButtonGroup();

      const leftButton = buttonGroup.createButton({
        image: "rotate-left",
      });

      const rightButton = buttonGroup.createButton({
        image: "rotate-right",
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
        angle,
      }));
    },

  });
}());
;(function() {
'use strict';

var Crop = Darkroom.Transformation.extend({
  applyTransformation: function(canvas, image, next) {
    // Snapshot the image delimited by the crop zone
    var snapshot = new Image();
    snapshot.onload = function() {
      // Validate image
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

      // Update canvas size
      canvas.setWidth(width);
      canvas.setHeight(height);

      // Add image
      image.remove();
      canvas.add(imgInstance);

      next(imgInstance);
    };

    var viewport = Darkroom.Utils.computeImageViewPort(image);
    var imageWidth = viewport.width;
    var imageHeight = viewport.height;

    var left = this.options.left * imageWidth;
    var top = this.options.top * imageHeight;
    var width = Math.min(this.options.width * imageWidth, imageWidth - left);
    var height = Math.min(this.options.height * imageHeight, imageHeight - top);

    snapshot.src = canvas.toDataURL({
      left: left,
      top: top,
      width: width,
      height: height,
    });
  }
});

var CropZone = fabric.util.createClass(fabric.Rect, {
  _render: function(ctx) {
    this.callSuper('_render', ctx);

    var canvas = ctx.canvas;
    var dashWidth = 7;

    // Set original scale
    var flipX = this.flipX ? -1 : 1;
    var flipY = this.flipY ? -1 : 1;
    var scaleX = flipX / this.scaleX;
    var scaleY = flipY / this.scaleY;

    ctx.scale(scaleX, scaleY);

    // Overlay rendering
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    this._renderOverlay(ctx);

    // Set dashed borders
    if (ctx.setLineDash !== undefined)
      ctx.setLineDash([dashWidth, dashWidth]);
    else if (ctx.mozDash !== undefined)
      ctx.mozDash = [dashWidth, dashWidth];

    // First lines rendering with black
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
    this._renderBorders(ctx);
    this._renderGrid(ctx);

    // Re render lines in white
    ctx.lineDashOffset = dashWidth;
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
    this._renderBorders(ctx);
    this._renderGrid(ctx);

    // Reset scale
    ctx.scale(1/scaleX, 1/scaleY);
  },

  _renderOverlay: function(ctx) {
    var canvas = ctx.canvas;

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

    var x0 = Math.ceil(-this.getWidth() / 2 - this.getLeft());
    var x1 = Math.ceil(-this.getWidth() / 2);
    var x2 = Math.ceil(this.getWidth() / 2);
    var x3 = Math.ceil(this.getWidth() / 2 + (canvas.width - this.getWidth() - this.getLeft()));

    var y0 = Math.ceil(-this.getHeight() / 2 - this.getTop());
    var y1 = Math.ceil(-this.getHeight() / 2);
    var y2 = Math.ceil(this.getHeight() / 2);
    var y3 = Math.ceil(this.getHeight() / 2 + (canvas.height - this.getHeight() - this.getTop()));

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

  _renderBorders: function(ctx) {
    ctx.beginPath();
    ctx.moveTo(-this.getWidth()/2, -this.getHeight()/2); // upper left
    ctx.lineTo(this.getWidth()/2, -this.getHeight()/2); // upper right
    ctx.lineTo(this.getWidth()/2, this.getHeight()/2); // down right
    ctx.lineTo(-this.getWidth()/2, this.getHeight()/2); // down left
    ctx.lineTo(-this.getWidth()/2, -this.getHeight()/2); // upper left
    ctx.stroke();
  },

  _renderGrid: function(ctx) {
    // Vertical lines
    ctx.beginPath();
    ctx.moveTo(-this.getWidth()/2 + 1/3 * this.getWidth(), -this.getHeight()/2);
    ctx.lineTo(-this.getWidth()/2 + 1/3 * this.getWidth(), this.getHeight()/2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(-this.getWidth()/2 + 2/3 * this.getWidth(), -this.getHeight()/2);
    ctx.lineTo(-this.getWidth()/2 + 2/3 * this.getWidth(), this.getHeight()/2);
    ctx.stroke();
    // Horizontal lines
    ctx.beginPath();
    ctx.moveTo(-this.getWidth()/2, -this.getHeight()/2 + 1/3 * this.getHeight());
    ctx.lineTo(this.getWidth()/2, -this.getHeight()/2 + 1/3 * this.getHeight());
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(-this.getWidth()/2, -this.getHeight()/2 + 2/3 * this.getHeight());
    ctx.lineTo(this.getWidth()/2, -this.getHeight()/2 + 2/3 * this.getHeight());
    ctx.stroke();
  }
});

Darkroom.plugins['crop'] = Darkroom.Plugin.extend({
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

  initialize: function InitDarkroomCropPlugin() {
    var buttonGroup = this.darkroom.toolbar.createButtonGroup();

    this.cropButton = buttonGroup.createButton({
      image: 'crop'
    });
    this.okButton = buttonGroup.createButton({
      image: 'done',
      type: 'success',
      hide: true
    });
    this.cancelButton = buttonGroup.createButton({
      image: 'close',
      type: 'danger',
      hide: true
    });

    // Buttons click
    this.cropButton.addEventListener('click', this.toggleCrop.bind(this));
    this.okButton.addEventListener('click', this.cropCurrentZone.bind(this));
    this.cancelButton.addEventListener('click', this.releaseFocus.bind(this));

    // Canvas events
    this.darkroom.canvas.on('mouse:down', this.onMouseDown.bind(this));
    this.darkroom.canvas.on('mouse:move', this.onMouseMove.bind(this));
    this.darkroom.canvas.on('mouse:up', this.onMouseUp.bind(this));
    this.darkroom.canvas.on('object:moving', this.onObjectMoving.bind(this));
    this.darkroom.canvas.on('object:scaling', this.onObjectScaling.bind(this));

    fabric.util.addListener(fabric.document, 'keydown', this.onKeyDown.bind(this));
    fabric.util.addListener(fabric.document, 'keyup', this.onKeyUp.bind(this));

    this.darkroom.addEventListener('core:transformation', this.releaseFocus.bind(this));
  },

  clear: function() {
    if (this.hasFocus())
    this.releaseFocus();
  },
  // Avoid crop zone to go beyond the canvas edges
  onObjectMoving: function(event) {
    if (!this.hasFocus()) {
      return;
    }

    var currentObject = event.target;
    if (currentObject !== this.cropZone)
      return;

    var canvas = this.darkroom.canvas;
    var x = currentObject.getLeft(), y = currentObject.getTop();
    var w = currentObject.getWidth(), h = currentObject.getHeight();
    var maxX = canvas.getWidth() - w;
    var maxY = canvas.getHeight() - h;

    if (x < 0)
      currentObject.set('left', 0);
    if (y < 0)
      currentObject.set('top', 0);
    if (x > maxX)
      currentObject.set('left', maxX);
    if (y > maxY)
      currentObject.set('top', maxY);

    this.darkroom.dispatchEvent('crop:update');
  },

  // Prevent crop zone from going beyond the canvas edges (like mouseMove)
  onObjectScaling: function(event) {
    if (!this.hasFocus()) {
      return;
    }

    var preventScaling = false;
    var currentObject = event.target;
    if (currentObject !== this.cropZone)
      return;

    var canvas = this.darkroom.canvas;
    var pointer = canvas.getPointer(event.e);
    var x = pointer.x;
    var y = pointer.y;

    var minX = currentObject.getLeft();
    var minY = currentObject.getTop();
    var maxX = currentObject.getLeft() + currentObject.getWidth();
    var maxY = currentObject.getTop() + currentObject.getHeight();

    if (null !== this.options.ratio) {
      if (minX < 0 || maxX > canvas.getWidth() || minY < 0 || maxY > canvas.getHeight()) {
        preventScaling = true;
      }
    }

    if (minX < 0 || maxX > canvas.getWidth() || preventScaling) {
      var lastScaleX = this.lastScaleX || 1;
      currentObject.setScaleX(lastScaleX);
    }
    if (minX < 0) {
      currentObject.setLeft(0);
    }

    if (minY < 0 || maxY > canvas.getHeight() || preventScaling) {
      var lastScaleY = this.lastScaleY || 1;
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

    this.darkroom.dispatchEvent('crop:update');
  },

  // Init crop zone
  onMouseDown: function(event) {
    event.e.preventDefault();
    if (!this.hasFocus()) {
      return;
    }

    var canvas = this.darkroom.canvas;

    // recalculate offset, in case canvas was manipulated since last `calcOffset`
    canvas.calcOffset();
    var pointer = canvas.getPointer(event.e);
    var x = pointer.x;
    var y = pointer.y;
    var point = new fabric.Point(x, y);

    // Check if user want to scale or drag the crop zone.
    var activeObject = canvas.getActiveObject();
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
  onMouseMove: function(event) {
    // Quick crop feature
    if (this.isKeyCroping)
      return this.onMouseMoveKeyCrop(event);

    if (null === this.startX || null === this.startY) {
      return;
    }

    var canvas = this.darkroom.canvas;
    var pointer = canvas.getPointer(event.e);
    var x = pointer.x;
    var y = pointer.y;

    this._renderCropZone(this.startX, this.startY, x, y);
  },

  onMouseMoveKeyCrop: function(event) {
    var canvas = this.darkroom.canvas;
    var zone = this.cropZone;

    var pointer = canvas.getPointer(event.e);
    var x = pointer.x;
    var y = pointer.y;

    if (!zone.left || !zone.top) {
      zone.setTop(y);
      zone.setLeft(x);
    }

    this.isKeyLeft =  x < zone.left + zone.width / 2 ;
    this.isKeyUp = y < zone.top + zone.height / 2 ;

    this._renderCropZone(
      Math.min(zone.left, x),
      Math.min(zone.top, y),
      Math.max(zone.left+zone.width, x),
      Math.max(zone.top+zone.height, y)
    );
  },

  // Finish crop zone
  onMouseUp: function(event) {
    if (null === this.startX || null === this.startY) {
      return;
    }

    var canvas = this.darkroom.canvas;
    this.cropZone.setCoords();
    canvas.setActiveObject(this.cropZone);
    canvas.calcOffset();

    this.startX = null;
    this.startY = null;
  },

  onKeyDown: function(event) {
    if (false === this.options.quickCropKey || event.keyCode !== this.options.quickCropKey || this.isKeyCroping)
      return;

    // Active quick crop flow
    this.isKeyCroping = true ;
    this.darkroom.canvas.discardActiveObject();
    this.cropZone.setWidth(0);
    this.cropZone.setHeight(0);
    this.cropZone.setScaleX(1);
    this.cropZone.setScaleY(1);
    this.cropZone.setTop(0);
    this.cropZone.setLeft(0);
  },

  onKeyUp: function(event) {
    if (false === this.options.quickCropKey || event.keyCode !== this.options.quickCropKey || !this.isKeyCroping)
      return;

    // Unactive quick crop flow
    this.isKeyCroping = false;
    this.startX = 1;
    this.startY = 1;
    this.onMouseUp();
  },

  selectZone: function(x, y, width, height, forceDimension) {
    if (!this.hasFocus())
      this.requireFocus();

    if (!forceDimension) {
      this._renderCropZone(x, y, x+width, y+height);
    } else {
      this.cropZone.set({
        'left': x,
        'top': y,
        'width': width,
        'height': height
      });
    }

    var canvas = this.darkroom.canvas;
    canvas.bringToFront(this.cropZone);
    this.cropZone.setCoords();
    canvas.setActiveObject(this.cropZone);
    canvas.calcOffset();

    this.darkroom.dispatchEvent('crop:update');
  },

  toggleCrop: function() {
    if (!this.hasFocus())
      this.requireFocus();
    else
      this.releaseFocus();
  },

  cropCurrentZone: function() {
    if (!this.hasFocus())
      return;

    // Avoid croping empty zone
    if (this.cropZone.width < 1 && this.cropZone.height < 1)
      return;

    var image = this.darkroom.image;

    // Compute crop zone dimensions
    var top = this.cropZone.getTop() - image.getTop();
    var left = this.cropZone.getLeft() - image.getLeft();
    var width = this.cropZone.getWidth();
    var height = this.cropZone.getHeight();

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
      height: height / image.getHeight(),
    }));
  },

  // Test wether crop zone is set
  hasFocus: function() {
    return this.cropZone !== undefined;
  },

  // Create the crop zone
  requireFocus: function() {
    this.darkroom.clearFocus('crop');
    this.cropZone = new CropZone({
      fill: 'transparent',
      hasBorders: false,
      originX: 'left',
      originY: 'top',
      //stroke: '#444',
      //strokeDashArray: [5, 5],
      //borderColor: '#444',
      cornerColor: '#444',
      cornerSize: 8,
      transparentCorners: false,
      lockRotation: true,
      hasRotatingPoint: false,
    });

    if (null !== this.options.ratio) {
      this.cropZone.set('lockUniScaling', true);
    }

    this.darkroom.canvas.add(this.cropZone);
    this.darkroom.canvas.defaultCursor = 'crosshair';

    this.cropButton.active(true);
    this.okButton.hide(false);
    this.cancelButton.hide(false);
  },

  // Remove the crop zone
  releaseFocus: function() {
    if (undefined === this.cropZone)
      return;

    this.cropZone.remove();
    this.cropZone = undefined;

    this.cropButton.active(false);
    this.okButton.hide(true);
    this.cancelButton.hide(true);

    this.darkroom.canvas.defaultCursor = 'default';

    this.darkroom.dispatchEvent('crop:update');
  },

  _renderCropZone: function(fromX, fromY, toX, toY) {
    var canvas = this.darkroom.canvas;

    var isRight = (toX > fromX);
    var isLeft = !isRight;
    var isDown = (toY > fromY);
    var isUp = !isDown;

    var minWidth = Math.min(+this.options.minWidth, canvas.getWidth());
    var minHeight = Math.min(+this.options.minHeight, canvas.getHeight());

    // Define corner coordinates
    var leftX = Math.min(fromX, toX);
    var rightX = Math.max(fromX, toX);
    var topY = Math.min(fromY, toY);
    var bottomY = Math.max(fromY, toY);

    // Replace current point into the canvas
    leftX = Math.max(0, leftX);
    rightX = Math.min(canvas.getWidth(), rightX);
    topY = Math.max(0, topY)
    bottomY = Math.min(canvas.getHeight(), bottomY);

    // Recalibrate coordinates according to given options
    if (rightX - leftX < minWidth) {
      if (isRight)
        rightX = leftX + minWidth;
      else
        leftX = rightX - minWidth;
    }
    if (bottomY - topY < minHeight) {
      if (isDown)
        bottomY = topY + minHeight;
      else
        topY = bottomY - minHeight;
    }

    // Truncate truncate according to canvas dimensions
    if (leftX < 0) {
      // Translate to the left
      rightX += Math.abs(leftX);
      leftX = 0
    }
    if (rightX > canvas.getWidth()) {
      // Translate to the right
      leftX -= (rightX - canvas.getWidth());
      rightX = canvas.getWidth();
    }
    if (topY < 0) {
      // Translate to the bottom
      bottomY += Math.abs(topY);
      topY = 0
    }
    if (bottomY > canvas.getHeight()) {
      // Translate to the right
      topY -= (bottomY - canvas.getHeight());
      bottomY = canvas.getHeight();
    }

    var width = rightX - leftX;
    var height = bottomY - topY;
    var currentRatio = width / height;

    if (this.options.ratio && +this.options.ratio !== currentRatio) {
      var ratio = +this.options.ratio;

      if(this.isKeyCroping) {
        isLeft = this.isKeyLeft;
        isUp = this.isKeyUp;
      }

      if (currentRatio < ratio) {
        var newWidth = height * ratio;
        if (isLeft) {
          leftX -= (newWidth - width);
        }
        width = newWidth;
      } else if (currentRatio > ratio) {
        var newHeight = height / (ratio * height/width);
        if (isUp) {
          topY -= (newHeight - height);
        }
        height = newHeight;
      }

      if (leftX < 0) {
        leftX = 0;
        //TODO
      }
      if (topY < 0) {
        topY = 0;
        //TODO
      }
      if (leftX + width > canvas.getWidth()) {
        var newWidth = canvas.getWidth() - leftX;
        height = newWidth * height / width;
        width = newWidth;
        if (isUp) {
          topY = fromY - height;
        }
      }
      if (topY + height > canvas.getHeight()) {
        var newHeight = canvas.getHeight() - topY;
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

    this.darkroom.dispatchEvent('crop:update');
  }
});

})();
;(function () {
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
          hasBorders: false,
        });

        // Add image
        canvas.add(imgInstance);

        next(imgInstance);
      };

      canvas.add(this.options.pencilZone);
      canvas.renderAll();
      snapshot.src = canvas.toDataURL();
    },
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
        scaleY: this.scaleY / scaleY,
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
        hasBorders: false,
      });
    },
  });

  Darkroom.plugins.pencil = Darkroom.Plugin.extend({
    pencilMode: false,
    pencilZone: null,
    mouseDown: false,
    size: 30,
    defaults: {
      stroke: "black",
      size: 30,
    },

    initialize() {
      const buttonGroup = this.darkroom.toolbar.createButtonGroup();

      this.pencilButton = buttonGroup.createButton({
        image: "pencil",
        tooltip: "Draw",
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
        sy: event.e.screenY,
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
        hasBorders: false,
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
        pencilZone: zone,
      }));
      this.darkroom.canvas.add(this.pencilZone);
    },

    renderZone() {
      if (this.path && this.path.length > 0) {
        this.darkroom.dispatchEvent("pencil:update");
        this.pencilZone.path = this.path;
      }
      this.darkroom.canvas.bringToFront(this.pencilZone);
    },

  });
}());
;(function () {
  let rect;
  let isDown;
  let origX;
  let origY;
  let hasFocus = true;

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
          hasBorders: false,
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
    },
  });

  Darkroom.plugins.rectangle = Darkroom.Plugin.extend({
    rectangleZone: null,

    initialize() {
      const buttonGroup = this.darkroom.toolbar.createButtonGroup();

      this.rectangleButton = buttonGroup.createButton({
        image: "rectangle",
        tooltip: "Draw",
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
        transparentCorners: false,
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
            left: Math.abs(pointer.x),
          });
        }
        if (origY > pointer.y) {
          rect.set({
            top: Math.abs(pointer.y),
          });
        }

        rect.set({
          width: Math.abs(origX - pointer.x),
        });
        rect.set({
          height: Math.abs(origY - pointer.y),
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
        rectangle: rect,
      }));
    },
  });
}());
;(function () {
  let hasFocus = false;
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
      // this.colorPicker = buttonGroup.createInput({
      //   image: "color",
      //   title: "Color Picker",
      //   value: "",
      //   hide: true
      // });

      this.textButton.addEventListener("click", this.addText.bind(this));
      this.okButton.addEventListener("click", this.saveText.bind(this));
      // this.colorPicker.addEventListener("change", this.setColor.bind(this));
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
      // this.colorPicker.hide(true);
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
      // this.colorPicker.hide(false);

      const factor = this.darkroom.image.scaleX;
      const text = new fabric.IText(this.options.text, {
        left: 100 * factor,
        top: 100 * factor,
        fill: "black",
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

    // setColor(event) {
    //   this.setStyle(this, "fill", event.target.value);
    // },

    // setStyle(object, styleName, value) {
    //   const canvas = this.darkroom.canvas;
    //   object.newText.fill = value;
    //   canvas.renderAll();
    // },

    saveText() {
      this.okButton.hide(true);
      this.cancelButton.hide(true);
      // this.colorPicker.hide(true);
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
      // this.colorPicker.hide(true);
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
          hasBorders: false,
        });

        // Add image
        canvas.add(imgInstance);

        next(imgInstance);
      };

      canvas.add(this.options.circle);
      canvas.renderAll();
      snapshot.src = canvas.toDataURL();
    },
  });

  Darkroom.plugins.circle = Darkroom.Plugin.extend({

    initialize() {
      const buttonGroup = this.darkroom.toolbar.createButtonGroup();

      this.circleButton = buttonGroup.createButton({
        image: "circle",
        tooltip: "circle",
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
        ry: 0,
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
            left: Math.abs(pointer.x),
          });
        }

        if (origY > pointer.y) {
          ellip.set({
            top: Math.abs(pointer.y),
          });
        }

        ellip.set({
          rx: Math.abs(origX - pointer.x) / 2,
        });
        ellip.set({
          ry: Math.abs(origY - pointer.y) / 2,
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
        circle: ellip,
      }));
    },
  });
}());
;(function () {
  const maxZoom = 2;
  let minZoom;
  const states = {
    panActive: false,
    panning: false,
    realPan: null,
  };
  let origX;
  let origY;

  Darkroom.plugins.zoom = Darkroom.Plugin.extend({

    initialize() {
      const buttonGroup = this.darkroom.toolbar.createButtonGroup();

      this.zoomInButton = buttonGroup.createButton({
        image: "zoom-in",
        title: "zoom in",
      });

      this.zoomOutButton = buttonGroup.createButton({
        image: "zoom-out",
        title: "zoom out",
        disabled: true,
      });

      this.pan = buttonGroup.createButton({
        image: "hand",
        disabled: true,
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
              y: (touches[i].screenY - origY),
            };
            origX = touches[i].screenX;
            origY = touches[i].screenY;
            this.doPan(delta);
          }
        } else {
          const delta = {
            x: (event.e.screenX - origX),
            y: (event.e.screenY - origY),
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
        y: image.oCoords.tl.y,
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
    },
  });
}());
;(function() {
'use strict';

Darkroom.plugins['save'] = Darkroom.Plugin.extend({

  defaults: {
    callback: function() {
      this.darkroom.selfDestroy();
    }
  },

  initialize: function InitializeDarkroomSavePlugin() {
    var buttonGroup = this.darkroom.toolbar.createButtonGroup();

    this.destroyButton = buttonGroup.createButton({
      image: 'save'
    });

    this.destroyButton.addEventListener('click', this.options.callback.bind(this));
  },
});

})();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3RzdHJhcC5qcyIsImRhcmtyb29tLmpzIiwicGx1Z2luLmpzIiwidHJhbnNmb3JtYXRpb24uanMiLCJ1aS5qcyIsInV0aWxzLmpzIiwiZGFya3Jvb20uaGlzdG9yeS5qcyIsImRhcmtyb29tLnJvdGF0ZS5qcyIsImRhcmtyb29tLmNyb3AuanMiLCJkYXJrcm9vbS5wZW5jaWwuanMiLCJkYXJrcm9vbS5yZWN0YW5nbGUuanMiLCJkYXJrcm9vbS50ZXh0LmpzIiwiZGFya3Jvb20uY2lyY2xlLmpzIiwiem9vbS5qcyIsImRhcmtyb29tLnNhdmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0NwWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDdkpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0N2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0MvcUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0NwU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDL0lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDaE1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQzVJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDaE5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJkYXJrcm9vbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gSW5qZWN0IFNWRyBpY29ucyBpbnRvIHRoZSBET01cbnZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5lbGVtZW50LmlkID0gJ2Rhcmtyb29tLWljb25zJztcbmVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gMDtcbmVsZW1lbnQuc3R5bGUud2lkdGggPSAwO1xuZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG5lbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbmVsZW1lbnQuaW5uZXJIVE1MID0gJzwhLS0gaW5qZWN0OnN2ZyAtLT48IS0tIGVuZGluamVjdCAtLT4nO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KTtcblxufSkoKTtcbiIsIihmdW5jdGlvbiAoKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHdpbmRvdy5EYXJrcm9vbSA9IERhcmtyb29tO1xuXG4gIC8vIENvcmUgb2JqZWN0IG9mIERhcmtyb29tSlMuXG4gIC8vIEJhc2ljYWxseSBpdCdzIGEgc2luZ2xlIG9iamVjdCwgaW5zdGFuY2lhYmxlIHZpYSBhbiBlbGVtZW50XG4gIC8vIChpdCBjb3VsZCBiZSBhIENTUyBzZWxlY3RvciBvciBhIERPTSBlbGVtZW50KSwgc29tZSBjdXN0b20gb3B0aW9ucyxcbiAgLy8gYW5kIGEgbGlzdCBvZiBwbHVnaW4gb2JqZWN0cyAob3Igbm9uZSB0byB1c2UgZGVmYXVsdCBvbmVzKS5cbiAgZnVuY3Rpb24gRGFya3Jvb20oZWxlbWVudCwgb3B0aW9ucywgcGx1Z2lucykge1xuICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnMsIHBsdWdpbnMpO1xuICB9XG5cbiAgLy8gQ3JlYXRlIGFuIGVtcHR5IGxpc3Qgb2YgcGx1Z2luIG9iamVjdHMsIHdoaWNoIHdpbGwgYmUgZmlsbGVkIGJ5XG4gIC8vIG90aGVyIHBsdWdpbiBzY3JpcHRzLiBUaGlzIGlzIHRoZSBkZWZhdWx0IHBsdWdpbiBsaXN0IGlmIG5vbmUgaXNcbiAgLy8gc3BlY2lmaWVkIGluIERhcmtyb29tJ3NzIGNvbnN0cnVjdG9yLlxuICBEYXJrcm9vbS5wbHVnaW5zID0gW107XG5cbiAgRGFya3Jvb20ucHJvdG90eXBlID0ge1xuICAgIC8vIFJlZmVyZW5jZSB0byB0aGUgbWFpbiBjb250YWluZXIgZWxlbWVudFxuICAgIGNvbnRhaW5lckVsZW1lbnQ6IG51bGwsXG5cbiAgICAvLyBSZWZlcmVuY2UgdG8gdGhlIEZhYnJpYyBjYW52YXMgb2JqZWN0XG4gICAgY2FudmFzOiBudWxsLFxuXG4gICAgLy8gUmVmZXJlbmNlIHRvIHRoZSBGYWJyaWMgaW1hZ2Ugb2JqZWN0XG4gICAgaW1hZ2U6IG51bGwsXG5cbiAgICAvLyBSZWZlcmVuY2UgdG8gdGhlIEZhYnJpYyBzb3VyY2UgY2FudmFzIG9iamVjdFxuICAgIHNvdXJjZUNhbnZhczogbnVsbCxcblxuICAgIC8vIFJlZmVyZW5jZSB0byB0aGUgRmFicmljIHNvdXJjZSBpbWFnZSBvYmplY3RcbiAgICBzb3VyY2VJbWFnZTogbnVsbCxcblxuICAgIC8vIFRyYWNrIG9mIHRoZSBvcmlnaW5hbCBpbWFnZSBlbGVtZW50XG4gICAgb3JpZ2luYWxJbWFnZUVsZW1lbnQ6IG51bGwsXG5cbiAgICAvLyBTdGFjayBvZiB0cmFuc2Zvcm1hdGlvbnMgdG8gYXBwbHkgdG8gdGhlIGltYWdlIHNvdXJjZVxuICAgIHRyYW5zZm9ybWF0aW9uczogW10sXG5cbiAgICAvLyBEZWZhdWx0IG9wdGlvbnNcbiAgICBkZWZhdWx0czoge1xuICAgICAgLy8gQ2FudmFzIHByb3BlcnRpZXMgKGRpbWVuc2lvbiwgcmF0aW8sIGNvbG9yKVxuICAgICAgbWluV2lkdGg6IG51bGwsXG4gICAgICBtaW5IZWlnaHQ6IG51bGwsXG4gICAgICBtYXhXaWR0aDogbnVsbCxcbiAgICAgIG1heEhlaWdodDogbnVsbCxcbiAgICAgIHJhdGlvOiBudWxsLFxuICAgICAgbGVmdDogMCxcbiAgICAgIHRvcDogMCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmXCIsXG5cbiAgICAgIC8vIFBsdWdpbnMgb3B0aW9uc1xuICAgICAgcGx1Z2luczoge30sXG5cbiAgICAgIC8vIFBvc3QtaW5pdGlhbGlzYXRpb24gY2FsbGJhY2tcbiAgICAgIGluaXRpYWxpemUgKCkgeyAvKiBub29wICovIH1cbiAgICB9LFxuXG4gICAgLy8gTGlzdCBvZiB0aGUgaW5zdGFuY2llZCBwbHVnaW5zXG4gICAgcGx1Z2luczoge30sXG5cbiAgICAvLyBUaGlzIG9wdGlvbnMgYXJlIGEgbWVyZ2UgYmV0d2VlbiBgZGVmYXVsdHNgIGFuZCB0aGUgb3B0aW9ucyBwYXNzZWRcbiAgICAvLyB0aHJvdWdoIHRoZSBjb25zdHJ1Y3RvclxuICAgIG9wdGlvbnM6IHt9LFxuXG4gICAgY29uc3RydWN0b3IgKGVsZW1lbnQsIG9wdGlvbnMsIHBsdWdpbnMpIHtcbiAgICAgIHRoaXMub3B0aW9ucyA9IERhcmtyb29tLlV0aWxzLmV4dGVuZChvcHRpb25zLCB0aGlzLmRlZmF1bHRzKTtcblxuICAgICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJylcbiAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudCk7XG4gICAgICBpZiAobnVsbCA9PT0gZWxlbWVudClcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgICB2YXIgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSB0aGUgRE9NL0ZhYnJpYyBlbGVtZW50c1xuICAgICAgICB0aGlzLl9pbml0aWFsaXplRE9NKGVsZW1lbnQpO1xuICAgICAgICB0aGlzLl9pbml0aWFsaXplSW1hZ2UoKTtcblxuICAgICAgICAvLyBUaGVuIGluaXRpYWxpemUgdGhlIHBsdWdpbnNcbiAgICAgICAgdGhpcy5faW5pdGlhbGl6ZVBsdWdpbnMoRGFya3Jvb20ucGx1Z2lucyk7XG5cbiAgICAgICAgLy8gUHVibGljIG1ldGhvZCB0byBhZGp1c3QgaW1hZ2UgYWNjb3JkaW5nIHRvIHRoZSBjYW52YXNcbiAgICAgICAgdGhpcy5yZWZyZXNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBFeGVjdXRlIGEgY3VzdG9tIGNhbGxiYWNrIGFmdGVyIGluaXRpYWxpemF0aW9uXG4gICAgICAgICAgdGhpcy5vcHRpb25zLmluaXRpYWxpemUuYmluZCh0aGlzKS5jYWxsKCk7XG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAgIH0uYmluZCh0aGlzKVxuXG4gICAgICAvL2ltYWdlLmNyb3NzT3JpZ2luID0gJ2Fub255bW91cyc7XG4gICAgICBpbWFnZS5zcmMgPSBlbGVtZW50LnNyYztcbiAgICB9LFxuXG4gICAgc2VsZkRlc3Ryb3kgKCkge1xuICAgICAgdmFyIGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyRWxlbWVudDtcbiAgICAgIHZhciBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250YWluZXIucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoaW1hZ2UsIGNvbnRhaW5lcik7XG4gICAgICB9XG5cbiAgICAgIGltYWdlLnNyYyA9IHRoaXMuc291cmNlSW1hZ2UudG9EYXRhVVJMKCk7XG4gICAgfSxcblxuICAgIC8vIEFkZCBhYmlsaXR5IHRvIGF0dGFjaCBldmVudCBsaXN0ZW5lciBvbiB0aGUgY29yZSBvYmplY3QuXG4gICAgLy8gSXQgdXNlcyB0aGUgY2FudmFzIGVsZW1lbnQgdG8gcHJvY2VzcyBldmVudHMuXG4gICAgYWRkRXZlbnRMaXN0ZW5lciAoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgICAgdmFyIGVsID0gdGhpcy5jYW52YXMuZ2V0RWxlbWVudCgpO1xuICAgICAgaWYgKGVsLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrKTtcbiAgICAgIH0gZWxzZSBpZiAoZWwuYXR0YWNoRXZlbnQpIHtcbiAgICAgICAgZWwuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50TmFtZSwgY2FsbGJhY2spO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV2ZW50IChldmVudE5hbWUpIHtcbiAgICAgIC8vIFVzZSB0aGUgb2xkIHdheSBvZiBjcmVhdGluZyBldmVudCB0byBiZSBJRSBjb21wYXRpYmxlXG4gICAgICAvLyBTZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvR3VpZGUvRXZlbnRzL0NyZWF0aW5nX2FuZF90cmlnZ2VyaW5nX2V2ZW50c1xuICAgICAgdmFyIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG4gICAgICBldmVudC5pbml0RXZlbnQoZXZlbnROYW1lLCB0cnVlLCB0cnVlKTtcblxuICAgICAgdGhpcy5jYW52YXMuZ2V0RWxlbWVudCgpLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIH0sXG5cbiAgICAvLyBBZGp1c3QgaW1hZ2UgJiBjYW52YXMgZGltZW5zaW9uIGFjY29yZGluZyB0byBtaW4vbWF4IHdpZHRoL2hlaWdodFxuICAgIC8vIGFuZCByYXRpbyBzcGVjaWZpZWQgaW4gdGhlIG9wdGlvbnMuXG4gICAgLy8gVGhpcyBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZCBhZnRlciBlYWNoIGltYWdlIHRyYW5zZm9ybWF0aW9uLlxuICAgIHJlZnJlc2ggKG5leHQpIHtcbiAgICAgIHZhciBjbG9uZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgY2xvbmUub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9yZXBsYWNlQ3VycmVudEltYWdlKG5ldyBmYWJyaWMuSW1hZ2UoY2xvbmUpKTtcblxuICAgICAgICBpZiAobmV4dCkgbmV4dCgpO1xuICAgICAgfS5iaW5kKHRoaXMpO1xuICAgICAgY2xvbmUuc3JjID0gdGhpcy5zb3VyY2VJbWFnZS50b0RhdGFVUkwoKTtcbiAgICB9LFxuXG4gICAgX3JlcGxhY2VDdXJyZW50SW1hZ2UgKG5ld0ltYWdlKSB7XG4gICAgICBpZiAodGhpcy5pbWFnZSkge1xuICAgICAgICB0aGlzLmltYWdlLnJlbW92ZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmltYWdlID0gbmV3SW1hZ2U7XG4gICAgICB0aGlzLmltYWdlLnNlbGVjdGFibGUgPSBmYWxzZTtcbiAgICAgIHRoaXMuaW1hZ2UubGVmdCA9IHRoaXMub3B0aW9ucy5sZWZ0O1xuICAgICAgdGhpcy5pbWFnZS50b3AgPSB0aGlzLm9wdGlvbnMudG9wO1xuXG4gICAgICAvLyBBZGp1c3Qgd2lkdGggb3IgaGVpZ2h0IGFjY29yZGluZyB0byBzcGVjaWZpZWQgcmF0aW9cbiAgICAgIHZhciB2aWV3cG9ydCA9IERhcmtyb29tLlV0aWxzLmNvbXB1dGVJbWFnZVZpZXdQb3J0KHRoaXMuaW1hZ2UpO1xuICAgICAgdmFyIGNhbnZhc1dpZHRoID0gdmlld3BvcnQud2lkdGg7XG4gICAgICB2YXIgY2FudmFzSGVpZ2h0ID0gdmlld3BvcnQuaGVpZ2h0O1xuXG4gICAgICAvLyBpZiAobnVsbCAhPT0gdGhpcy5vcHRpb25zLnJhdGlvKSB7XG4gICAgICAvLyAgIHZhciBjYW52YXNSYXRpbyA9ICt0aGlzLm9wdGlvbnMucmF0aW87XG4gICAgICAvLyAgIHZhciBjdXJyZW50UmF0aW8gPSBjYW52YXNXaWR0aCAvIGNhbnZhc0hlaWdodDtcblxuICAgICAgLy8gICBpZiAoY3VycmVudFJhdGlvID4gY2FudmFzUmF0aW8pIHtcbiAgICAgIC8vICAgICBjYW52YXNIZWlnaHQgPSBjYW52YXNXaWR0aCAvIGNhbnZhc1JhdGlvO1xuICAgICAgLy8gICB9IGVsc2UgaWYgKGN1cnJlbnRSYXRpbyA8IGNhbnZhc1JhdGlvKSB7XG4gICAgICAvLyAgICAgY2FudmFzV2lkdGggPSBjYW52YXNIZWlnaHQgKiBjYW52YXNSYXRpbztcbiAgICAgIC8vICAgfVxuICAgICAgLy8gfVxuXG4gICAgICAvLyAvLyBUaGVuIHNjYWxlIHRoZSBpbWFnZSB0byBmaXQgaW50byBkaW1lbnNpb24gbGltaXRzXG4gICAgICAvLyB2YXIgc2NhbGVNaW4gPSAxO1xuICAgICAgLy8gdmFyIHNjYWxlTWF4ID0gMTtcbiAgICAgIC8vIHZhciBzY2FsZVggPSAxO1xuICAgICAgLy8gdmFyIHNjYWxlWSA9IDE7XG5cbiAgICAgIC8vIGlmIChudWxsICE9PSB0aGlzLm9wdGlvbnMubWF4V2lkdGggJiYgdGhpcy5vcHRpb25zLm1heFdpZHRoIDwgY2FudmFzV2lkdGgpIHtcbiAgICAgIC8vICAgc2NhbGVYID0gIHRoaXMub3B0aW9ucy5tYXhXaWR0aCAvIGNhbnZhc1dpZHRoO1xuICAgICAgLy8gfVxuICAgICAgLy8gaWYgKG51bGwgIT09IHRoaXMub3B0aW9ucy5tYXhIZWlnaHQgJiYgdGhpcy5vcHRpb25zLm1heEhlaWdodCA8IGNhbnZhc0hlaWdodCkge1xuICAgICAgLy8gICBzY2FsZVkgPSAgdGhpcy5vcHRpb25zLm1heEhlaWdodCAvIGNhbnZhc0hlaWdodDtcbiAgICAgIC8vIH1cbiAgICAgIC8vIHNjYWxlTWluID0gTWF0aC5taW4oc2NhbGVYLCBzY2FsZVkpO1xuXG4gICAgICAvLyBzY2FsZVggPSAxO1xuICAgICAgLy8gc2NhbGVZID0gMTtcbiAgICAgIC8vIGlmIChudWxsICE9PSB0aGlzLm9wdGlvbnMubWluV2lkdGggJiYgdGhpcy5vcHRpb25zLm1pbldpZHRoID4gY2FudmFzV2lkdGgpIHtcbiAgICAgIC8vICAgc2NhbGVYID0gIHRoaXMub3B0aW9ucy5taW5XaWR0aCAvIGNhbnZhc1dpZHRoO1xuICAgICAgLy8gfVxuICAgICAgLy8gaWYgKG51bGwgIT09IHRoaXMub3B0aW9ucy5taW5IZWlnaHQgJiYgdGhpcy5vcHRpb25zLm1pbkhlaWdodCA+IGNhbnZhc0hlaWdodCkge1xuICAgICAgLy8gICBzY2FsZVkgPSAgdGhpcy5vcHRpb25zLm1pbkhlaWdodCAvIGNhbnZhc0hlaWdodDtcbiAgICAgIC8vIH1cbiAgICAgIC8vIHNjYWxlTWF4ID0gTWF0aC5tYXgoc2NhbGVYLCBzY2FsZVkpO1xuXG4gICAgICAvLyB2YXIgc2NhbGUgPSBzY2FsZU1heCAqIHNjYWxlTWluOyAvLyBvbmUgc2hvdWxkIGJlIGVxdWFscyB0byAxXG5cbiAgICAgIC8vIGNhbnZhc1dpZHRoICo9IHNjYWxlO1xuICAgICAgLy8gY2FudmFzSGVpZ2h0ICo9IHNjYWxlO1xuXG4gICAgICAvLyBGaW5hbGx5IHBsYWNlIHRoZSBpbWFnZSBpbiB0aGUgY2VudGVyIG9mIHRoZSBjYW52YXNcbiAgICAgIC8vIHRoaXMuaW1hZ2Uuc2V0U2NhbGVYKDEgKiBzY2FsZSk7XG4gICAgICAvLyB0aGlzLmltYWdlLnNldFNjYWxlWSgxICogc2NhbGUpO1xuICAgICAgdGhpcy5jYW52YXMuYWRkKHRoaXMuaW1hZ2UpO1xuICAgICAgdGhpcy5jYW52YXMuc2V0V2lkdGgoY2FudmFzV2lkdGgpO1xuICAgICAgdGhpcy5jYW52YXMuc2V0SGVpZ2h0KGNhbnZhc0hlaWdodCk7XG5cbiAgICAgIC8vIFJlc2l6ZSB0aGUgaW1hZ2UgdG8gZml0IHRoZSBjYW52YXNcbiAgICAgIGlmICh0aGlzLmltYWdlLm9Db29yZHMuYnIueCA8IHRoaXMuY2FudmFzLndpZHRoKSB7XG4gICAgICAgIHRoaXMuaW1hZ2UubGVmdCA9IHRoaXMuaW1hZ2UubGVmdCArIE1hdGguY2VpbCh0aGlzLmNhbnZhcy53aWR0aCAtIHRoaXMuaW1hZ2Uub0Nvb3Jkcy5ici54KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmltYWdlLm9Db29yZHMuYnIueSA8IHRoaXMuY2FudmFzLmhlaWdodCkge1xuICAgICAgICB0aGlzLmltYWdlLnRvcCA9IHRoaXMuaW1hZ2UudG9wICsgTWF0aC5jZWlsKHRoaXMuY2FudmFzLmhlaWdodCAtIHRoaXMuaW1hZ2Uub0Nvb3Jkcy5ici55KTtcbiAgICAgIH1cbiAgICAgIC8vIHRoaXMuY2FudmFzLmNlbnRlck9iamVjdCh0aGlzLmltYWdlKTtcbiAgICAgIHRoaXMuaW1hZ2Uuc2V0Q29vcmRzKCk7XG4gICAgfSxcblxuICAgIC8vIEFwcGx5IHRoZSB0cmFuc2Zvcm1hdGlvbiBvbiB0aGUgY3VycmVudCBpbWFnZSBhbmQgc2F2ZSBpdCBpbiB0aGVcbiAgICAvLyB0cmFuc2Zvcm1hdGlvbnMgc3RhY2sgKGluIG9yZGVyIHRvIHJlY29uc3RpdHV0ZSB0aGUgcHJldmlvdXMgc3RhdGVzXG4gICAgLy8gb2YgdGhlIGltYWdlKS5cbiAgICBhcHBseVRyYW5zZm9ybWF0aW9uICh0cmFuc2Zvcm1hdGlvbikge1xuICAgICAgdGhpcy50cmFuc2Zvcm1hdGlvbnMucHVzaCh0cmFuc2Zvcm1hdGlvbik7XG5cbiAgICAgIHRyYW5zZm9ybWF0aW9uLmFwcGx5VHJhbnNmb3JtYXRpb24oXG4gICAgICAgIHRoaXMuc291cmNlQ2FudmFzLFxuICAgICAgICB0aGlzLnNvdXJjZUltYWdlLFxuICAgICAgICB0aGlzLl9wb3N0VHJhbnNmb3JtYXRpb24uYmluZCh0aGlzKVxuICAgICAgKTtcbiAgICB9LFxuXG4gICAgX3Bvc3RUcmFuc2Zvcm1hdGlvbiAobmV3SW1hZ2UpIHtcbiAgICAgIGlmIChuZXdJbWFnZSlcbiAgICAgICAgdGhpcy5zb3VyY2VJbWFnZSA9IG5ld0ltYWdlO1xuXG4gICAgICB0aGlzLnJlZnJlc2goZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2NvcmU6dHJhbnNmb3JtYXRpb24nKTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfSxcblxuICAgIC8vIEluaXRpYWxpemUgaW1hZ2UgZnJvbSBvcmlnaW5hbCBlbGVtZW50IHBsdXMgcmUtYXBwbHkgZXZlcnlcbiAgICAvLyB0cmFuc2Zvcm1hdGlvbnMuXG4gICAgcmVpbml0aWFsaXplSW1hZ2UgKCkge1xuICAgICAgdGhpcy5zb3VyY2VJbWFnZS5yZW1vdmUoKTtcbiAgICAgIHRoaXMuX2luaXRpYWxpemVJbWFnZSgpO1xuICAgICAgdGhpcy5fcG9wVHJhbnNmb3JtYXRpb24odGhpcy50cmFuc2Zvcm1hdGlvbnMuc2xpY2UoKSlcbiAgICB9LFxuXG4gICAgX3BvcFRyYW5zZm9ybWF0aW9uICh0cmFuc2Zvcm1hdGlvbnMpIHtcbiAgICAgIGlmICgwID09PSB0cmFuc2Zvcm1hdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnY29yZTpyZWluaXRpYWxpemVkJyk7XG4gICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciB0cmFuc2Zvcm1hdGlvbiA9IHRyYW5zZm9ybWF0aW9ucy5zaGlmdCgpO1xuXG4gICAgICB2YXIgbmV4dCA9IGZ1bmN0aW9uIChuZXdJbWFnZSkge1xuICAgICAgICBpZiAobmV3SW1hZ2UpIHRoaXMuc291cmNlSW1hZ2UgPSBuZXdJbWFnZTtcbiAgICAgICAgdGhpcy5fcG9wVHJhbnNmb3JtYXRpb24odHJhbnNmb3JtYXRpb25zKVxuICAgICAgfTtcblxuICAgICAgdHJhbnNmb3JtYXRpb24uYXBwbHlUcmFuc2Zvcm1hdGlvbihcbiAgICAgICAgdGhpcy5zb3VyY2VDYW52YXMsXG4gICAgICAgIHRoaXMuc291cmNlSW1hZ2UsXG4gICAgICAgIG5leHQuYmluZCh0aGlzKVxuICAgICAgKTtcbiAgICB9LFxuXG4gICAgLy8gQ3JlYXRlIHRoZSBET00gZWxlbWVudHMgYW5kIGluc3RhbmNpYXRlIHRoZSBGYWJyaWMgY2FudmFzLlxuICAgIC8vIFRoZSBpbWFnZSBlbGVtZW50IGlzIHJlcGxhY2VkIGJ5IGEgbmV3IGBkaXZgIGVsZW1lbnQuXG4gICAgLy8gSG93ZXZlciB0aGUgb3JpZ2luYWwgaW1hZ2UgaXMgcmUtaW5qZWN0ZWQgaW4gb3JkZXIgdG8ga2VlcCBhIHRyYWNlIG9mIGl0LlxuICAgIF9pbml0aWFsaXplRE9NIChpbWFnZUVsZW1lbnQpIHtcbiAgICAgIC8vIENvbnRhaW5lclxuICAgICAgdmFyIG1haW5Db250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBtYWluQ29udGFpbmVyRWxlbWVudC5jbGFzc05hbWUgPSAnZGFya3Jvb20tY29udGFpbmVyJztcblxuICAgICAgLy8gVG9vbGJhclxuICAgICAgdmFyIHRvb2xiYXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0b29sYmFyRWxlbWVudC5jbGFzc05hbWUgPSAnZGFya3Jvb20tdG9vbGJhcic7XG4gICAgICBtYWluQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZCh0b29sYmFyRWxlbWVudCk7XG5cbiAgICAgIC8vIFZpZXdwb3J0IGNhbnZhc1xuICAgICAgdmFyIGNhbnZhc0NvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNhbnZhc0NvbnRhaW5lckVsZW1lbnQuY2xhc3NOYW1lID0gJ2Rhcmtyb29tLWltYWdlLWNvbnRhaW5lcic7XG4gICAgICB2YXIgY2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgY2FudmFzQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChjYW52YXNFbGVtZW50KTtcbiAgICAgIG1haW5Db250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGNhbnZhc0NvbnRhaW5lckVsZW1lbnQpO1xuXG4gICAgICAvLyBTb3VyY2UgY2FudmFzXG4gICAgICB2YXIgc291cmNlQ2FudmFzQ29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgc291cmNlQ2FudmFzQ29udGFpbmVyRWxlbWVudC5jbGFzc05hbWUgPSAnZGFya3Jvb20tc291cmNlLWNvbnRhaW5lcic7XG4gICAgICBzb3VyY2VDYW52YXNDb250YWluZXJFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB2YXIgc291cmNlQ2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgc291cmNlQ2FudmFzQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChzb3VyY2VDYW52YXNFbGVtZW50KTtcbiAgICAgIG1haW5Db250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKHNvdXJjZUNhbnZhc0NvbnRhaW5lckVsZW1lbnQpO1xuXG4gICAgICAvLyBPcmlnaW5hbCBpbWFnZVxuICAgICAgaW1hZ2VFbGVtZW50LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG1haW5Db250YWluZXJFbGVtZW50LCBpbWFnZUVsZW1lbnQpO1xuICAgICAgaW1hZ2VFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBtYWluQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChpbWFnZUVsZW1lbnQpO1xuXG4gICAgICAvLyBJbnN0YW5jaWF0ZSBvYmplY3QgZnJvbSBlbGVtZW50c1xuICAgICAgdGhpcy5jb250YWluZXJFbGVtZW50ID0gbWFpbkNvbnRhaW5lckVsZW1lbnQ7XG4gICAgICB0aGlzLm9yaWdpbmFsSW1hZ2VFbGVtZW50ID0gaW1hZ2VFbGVtZW50O1xuXG4gICAgICB0aGlzLnRvb2xiYXIgPSBuZXcgRGFya3Jvb20uVUkuVG9vbGJhcih0b29sYmFyRWxlbWVudCk7XG5cbiAgICAgIHRoaXMuY2FudmFzID0gbmV3IGZhYnJpYy5DYW52YXMoY2FudmFzRWxlbWVudCwge1xuICAgICAgICBzZWxlY3Rpb246IGZhbHNlLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3JcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnNvdXJjZUNhbnZhcyA9IG5ldyBmYWJyaWMuQ2FudmFzKHNvdXJjZUNhbnZhc0VsZW1lbnQsIHtcbiAgICAgICAgc2VsZWN0aW9uOiBmYWxzZSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLm9wdGlvbnMuYmFja2dyb3VuZENvbG9yXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLy8gSW5zdGFuY2lhdGUgdGhlIEZhYnJpYyBpbWFnZSBvYmplY3QuXG4gICAgLy8gVGhlIGltYWdlIGlzIGNyZWF0ZWQgYXMgYSBzdGF0aWMgZWxlbWVudCB3aXRoIG5vIGNvbnRyb2wsXG4gICAgLy8gdGhlbiBpdCBpcyBhZGQgaW4gdGhlIEZhYnJpYyBjYW52YXMgb2JqZWN0LlxuICAgIF9pbml0aWFsaXplSW1hZ2UgKCkge1xuICAgICAgdGhpcy5zb3VyY2VJbWFnZSA9IG5ldyBmYWJyaWMuSW1hZ2UodGhpcy5vcmlnaW5hbEltYWdlRWxlbWVudCwge1xuICAgICAgICAvLyBTb21lIG9wdGlvbnMgdG8gbWFrZSB0aGUgaW1hZ2Ugc3RhdGljXG4gICAgICAgIHNlbGVjdGFibGU6IGZhbHNlLFxuICAgICAgICBldmVudGVkOiBmYWxzZSxcbiAgICAgICAgbG9ja01vdmVtZW50WDogdHJ1ZSxcbiAgICAgICAgbG9ja01vdmVtZW50WTogdHJ1ZSxcbiAgICAgICAgbG9ja1JvdGF0aW9uOiB0cnVlLFxuICAgICAgICBsb2NrU2NhbGluZ1g6IHRydWUsXG4gICAgICAgIGxvY2tTY2FsaW5nWTogdHJ1ZSxcbiAgICAgICAgbG9ja1VuaVNjYWxpbmc6IHRydWUsXG4gICAgICAgIGhhc0NvbnRyb2xzOiBmYWxzZSxcbiAgICAgICAgaGFzQm9yZGVyczogZmFsc2UsXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5zb3VyY2VDYW52YXMuYWRkKHRoaXMuc291cmNlSW1hZ2UpO1xuXG4gICAgICAvLyBBZGp1c3Qgd2lkdGggb3IgaGVpZ2h0IGFjY29yZGluZyB0byBzcGVjaWZpZWQgcmF0aW9cbiAgICAgIHZhciB2aWV3cG9ydCA9IERhcmtyb29tLlV0aWxzLmNvbXB1dGVJbWFnZVZpZXdQb3J0KHRoaXMuc291cmNlSW1hZ2UpO1xuICAgICAgdmFyIGNhbnZhc1dpZHRoID0gdmlld3BvcnQud2lkdGg7XG4gICAgICB2YXIgY2FudmFzSGVpZ2h0ID0gdmlld3BvcnQuaGVpZ2h0O1xuXG4gICAgICB0aGlzLnNvdXJjZUNhbnZhcy5zZXRXaWR0aChjYW52YXNXaWR0aCk7XG4gICAgICB0aGlzLnNvdXJjZUNhbnZhcy5zZXRIZWlnaHQoY2FudmFzSGVpZ2h0KTtcbiAgICAgIHRoaXMuc291cmNlQ2FudmFzLmNlbnRlck9iamVjdCh0aGlzLnNvdXJjZUltYWdlKTtcbiAgICAgIHRoaXMuc291cmNlSW1hZ2Uuc2V0Q29vcmRzKCk7XG4gICAgfSxcblxuICAgIC8vIEluaXRpYWxpemUgZXZlcnkgcGx1Z2lucy5cbiAgICAvLyBOb3RlIHRoYXQgcGx1Z2lucyBhcmUgaW5zdGFuY2lhdGVkIGluIHRoZSBzYW1lIG9yZGVyIHRoYW4gdGhleVxuICAgIC8vIGFyZSBkZWNsYXJlZCBpbiB0aGUgcGFyYW1ldGVyIG9iamVjdC5cbiAgICBfaW5pdGlhbGl6ZVBsdWdpbnMgKHBsdWdpbnMpIHtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gcGx1Z2lucykge1xuICAgICAgICB2YXIgcGx1Z2luID0gcGx1Z2luc1tuYW1lXTtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMucGx1Z2luc1tuYW1lXTtcblxuICAgICAgICAvLyBTZXR0aW5nIGZhbHNlIGludG8gdGhlIHBsdWdpbiBvcHRpb25zIHdpbGwgZGlzYWJsZSB0aGUgcGx1Z2luXG4gICAgICAgIGlmIChvcHRpb25zID09PSBmYWxzZSlcbiAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAvLyBBdm9pZCBhbnkgaXNzdWVzIHdpdGggX3Byb3RvX1xuICAgICAgICBpZiAoIXBsdWdpbnMuaGFzT3duUHJvcGVydHkobmFtZSkpXG4gICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgdGhpcy5wbHVnaW5zW25hbWVdID0gbmV3IHBsdWdpbih0aGlzLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgY2xlYXJGb2N1cyAoaW5zdGFuY2UpIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLnBsdWdpbnMpIHtcbiAgICAgICAgaWYgKGtleSAhPSBpbnN0YW5jZSkge1xuICAgICAgICAgIHRoaXMucGx1Z2luc1trZXldLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG59KCkpO1xuIiwiKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG5EYXJrcm9vbS5QbHVnaW4gPSBQbHVnaW47XG5cbi8vIERlZmluZSBhIHBsdWdpbiBvYmplY3QuIFRoaXMgaXMgdGhlIChhYnN0cmFjdCkgcGFyZW50IGNsYXNzIHdoaWNoXG4vLyBoYXMgdG8gYmUgZXh0ZW5kZWQgZm9yIGVhY2ggcGx1Z2luLlxuZnVuY3Rpb24gUGx1Z2luKGRhcmtyb29tLCBvcHRpb25zKSB7XG4gIHRoaXMuZGFya3Jvb20gPSBkYXJrcm9vbTtcbiAgdGhpcy5vcHRpb25zID0gRGFya3Jvb20uVXRpbHMuZXh0ZW5kKG9wdGlvbnMsIHRoaXMuZGVmYXVsdHMpO1xuICB0aGlzLmluaXRpYWxpemUoKTtcbn1cblxuUGx1Z2luLnByb3RvdHlwZSA9IHtcbiAgZGVmYXVsdHM6IHt9LFxuICBpbml0aWFsaXplOiBmdW5jdGlvbigpIHsgfSxcbiAgY2xlYXI6IGZ1bmN0aW9uKCkgeyB9XG59XG5cbi8vIEluc3BpcmVkIGJ5IEJhY2tib25lLmpzIGV4dGVuZCBjYXBhYmlsaXR5LlxuUGx1Z2luLmV4dGVuZCA9IGZ1bmN0aW9uKHByb3RvUHJvcHMpIHtcbiAgdmFyIHBhcmVudCA9IHRoaXM7XG4gIHZhciBjaGlsZDtcblxuICBpZiAocHJvdG9Qcm9wcyAmJiBwcm90b1Byb3BzLmhhc093blByb3BlcnR5KCdjb25zdHJ1Y3RvcicpKSB7XG4gICAgY2hpbGQgPSBwcm90b1Byb3BzLmNvbnN0cnVjdG9yO1xuICB9IGVsc2Uge1xuICAgIGNoaWxkID0gZnVuY3Rpb24oKXsgcmV0dXJuIHBhcmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9O1xuICB9XG5cbiAgRGFya3Jvb20uVXRpbHMuZXh0ZW5kKGNoaWxkLCBwYXJlbnQpO1xuXG4gIHZhciBTdXJyb2dhdGUgPSBmdW5jdGlvbigpeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH07XG4gIFN1cnJvZ2F0ZS5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlO1xuICBjaGlsZC5wcm90b3R5cGUgPSBuZXcgU3Vycm9nYXRlO1xuXG4gIGlmIChwcm90b1Byb3BzKSBEYXJrcm9vbS5VdGlscy5leHRlbmQoY2hpbGQucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcblxuICBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlO1xuXG4gIHJldHVybiBjaGlsZDtcbn1cblxufSkoKTtcbiIsIihmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuRGFya3Jvb20uVHJhbnNmb3JtYXRpb24gPSBUcmFuc2Zvcm1hdGlvbjtcblxuZnVuY3Rpb24gVHJhbnNmb3JtYXRpb24ob3B0aW9ucykge1xuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xufVxuXG5UcmFuc2Zvcm1hdGlvbi5wcm90b3R5cGUgPSB7XG4gIGFwcGx5VHJhbnNmb3JtYXRpb246IGZ1bmN0aW9uKGltYWdlKSB7IC8qIG5vLW9wICovICB9XG59XG5cbi8vIEluc3BpcmVkIGJ5IEJhY2tib25lLmpzIGV4dGVuZCBjYXBhYmlsaXR5LlxuVHJhbnNmb3JtYXRpb24uZXh0ZW5kID0gZnVuY3Rpb24ocHJvdG9Qcm9wcykge1xuICB2YXIgcGFyZW50ID0gdGhpcztcbiAgdmFyIGNoaWxkO1xuXG4gIGlmIChwcm90b1Byb3BzICYmIHByb3RvUHJvcHMuaGFzT3duUHJvcGVydHkoJ2NvbnN0cnVjdG9yJykpIHtcbiAgICBjaGlsZCA9IHByb3RvUHJvcHMuY29uc3RydWN0b3I7XG4gIH0gZWxzZSB7XG4gICAgY2hpbGQgPSBmdW5jdGlvbigpeyByZXR1cm4gcGFyZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XG4gIH1cblxuICBEYXJrcm9vbS5VdGlscy5leHRlbmQoY2hpbGQsIHBhcmVudCk7XG5cbiAgdmFyIFN1cnJvZ2F0ZSA9IGZ1bmN0aW9uKCl7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfTtcbiAgU3Vycm9nYXRlLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7XG4gIGNoaWxkLnByb3RvdHlwZSA9IG5ldyBTdXJyb2dhdGU7XG5cbiAgaWYgKHByb3RvUHJvcHMpIERhcmtyb29tLlV0aWxzLmV4dGVuZChjaGlsZC5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuXG4gIGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7XG5cbiAgcmV0dXJuIGNoaWxkO1xufVxuXG59KSgpO1xuIiwiKGZ1bmN0aW9uICgpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgRGFya3Jvb20uVUkgPSB7XG4gICAgVG9vbGJhcixcbiAgICBCdXR0b25Hcm91cCxcbiAgICBCdXR0b24sXG4gICAgSW5wdXRcbiAgfTtcblxuICAvLyBUb29sYmFyIG9iamVjdC5cbiAgZnVuY3Rpb24gVG9vbGJhcihlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIFRvb2xiYXIucHJvdG90eXBlID0ge1xuICAgIGNyZWF0ZUJ1dHRvbkdyb3VwKG9wdGlvbnMpIHtcbiAgICAgIHZhciBidXR0b25Hcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBidXR0b25Hcm91cC5jbGFzc05hbWUgPSBcImRhcmtyb29tLWJ1dHRvbi1ncm91cFwiO1xuICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbkdyb3VwKTtcblxuICAgICAgcmV0dXJuIG5ldyBCdXR0b25Hcm91cChidXR0b25Hcm91cCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIEJ1dHRvbkdyb3VwIG9iamVjdC5cbiAgZnVuY3Rpb24gQnV0dG9uR3JvdXAoZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICBCdXR0b25Hcm91cC5wcm90b3R5cGUgPSB7XG4gICAgY3JlYXRlQnV0dG9uKG9wdGlvbnMpIHtcbiAgICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgaW1hZ2U6IFwiaGVscFwiLFxuICAgICAgICB0eXBlOiBcImRlZmF1bHRcIixcbiAgICAgICAgZ3JvdXA6IFwiZGVmYXVsdFwiLFxuICAgICAgICBoaWRlOiBmYWxzZSxcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlXG4gICAgICB9O1xuXG4gICAgICBvcHRpb25zID0gRGFya3Jvb20uVXRpbHMuZXh0ZW5kKG9wdGlvbnMsIGRlZmF1bHRzKTtcblxuICAgICAgdmFyIGJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgYnV0dG9uRWxlbWVudC50eXBlID0gXCJidXR0b25cIjtcbiAgICAgIGJ1dHRvbkVsZW1lbnQuY2xhc3NOYW1lID0gXCJkYXJrcm9vbS1idXR0b24gZGFya3Jvb20tYnV0dG9uLVwiICsgb3B0aW9ucy50eXBlO1xuICAgICAgYnV0dG9uRWxlbWVudC5pbm5lckhUTUwgPSBcIjxzdmcgY2xhc3M9XFxcImRhcmtyb29tLWljb25cXFwiPjx1c2UgeGxpbms6aHJlZj1cXFwiI1wiICsgb3B0aW9ucy5pbWFnZSArIFwiXFxcIiAvPjwvc3ZnPlwiO1xuICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbkVsZW1lbnQpO1xuXG4gICAgICB2YXIgYnV0dG9uID0gbmV3IEJ1dHRvbihidXR0b25FbGVtZW50KTtcbiAgICAgIGJ1dHRvbi5oaWRlKG9wdGlvbnMuaGlkZSk7XG4gICAgICBidXR0b24uZGlzYWJsZShvcHRpb25zLmRpc2FibGVkKTtcblxuICAgICAgcmV0dXJuIGJ1dHRvbjtcbiAgICB9LFxuXG4gICAgY3JlYXRlSW5wdXQob3B0aW9ucykge1xuICAgICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICAgIGltYWdlOiBcImhlbHBcIixcbiAgICAgICAgdHlwZTogXCJpbnB1dFwiLFxuICAgICAgICBncm91cDogXCJkZWZhdWx0XCIsXG4gICAgICAgIGhpZGU6IGZhbHNlLFxuICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgIHZhbHVlOiBcIlwiXG4gICAgICB9O1xuXG4gICAgICBvcHRpb25zID0gRGFya3Jvb20uVXRpbHMuZXh0ZW5kKG9wdGlvbnMsIGRlZmF1bHRzKTtcblxuICAgICAgdmFyIGlucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIGlucHV0RWxlbWVudC50eXBlID0gXCJjb2xvclwiO1xuICAgICAgaW5wdXRFbGVtZW50LmNsYXNzTmFtZSA9IFwiZGFya3Jvb20tYnV0dG9uIGRhcmtyb29tLWlucHV0LVwiICsgb3B0aW9ucy50eXBlO1xuICAgICAgaW5wdXRFbGVtZW50LmlubmVySFRNTCA9IFwiPHN2ZyBjbGFzcz1cXFwiZGFya3Jvb20taWNvblxcXCI+PHVzZSB4bGluazpocmVmPVxcXCIjXCIgKyBvcHRpb25zLmltYWdlICsgXCJcXFwiIC8+PC9zdmc+XCI7XG4gICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoaW5wdXRFbGVtZW50KTtcblxuICAgICAgdmFyIGlucHV0ID0gbmV3IElucHV0KGlucHV0RWxlbWVudCk7XG4gICAgICBpbnB1dC5oaWRlKG9wdGlvbnMuaGlkZSk7XG4gICAgICBpbnB1dC5kaXNhYmxlKG9wdGlvbnMuZGlzYWJsZWQpO1xuXG4gICAgICByZXR1cm4gaW5wdXQ7XG4gICAgfVxuICB9O1xuXG4gIC8vIEJ1dHRvbiBvYmplY3QuXG4gIGZ1bmN0aW9uIEJ1dHRvbihlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIC8vIElucHV0IG9iamVjdC5cbiAgZnVuY3Rpb24gSW5wdXQoZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICBCdXR0b24ucHJvdG90eXBlID0ge1xuICAgIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lcikge1xuICAgICAgaWYgKHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnQuYXR0YWNoRXZlbnQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmF0dGFjaEV2ZW50KFwib25cIiArIGV2ZW50TmFtZSwgbGlzdGVuZXIpO1xuICAgICAgfVxuICAgIH0sXG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyKSB7XG4gICAgICBpZiAodGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lcik7XG4gICAgICB9XG4gICAgfSxcbiAgICBhY3RpdmUodmFsdWUpIHtcbiAgICAgIGlmICh2YWx1ZSlcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkYXJrcm9vbS1idXR0b24tYWN0aXZlXCIpO1xuICAgICAgZWxzZVxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRhcmtyb29tLWJ1dHRvbi1hY3RpdmVcIik7XG4gICAgfSxcbiAgICBoaWRlKHZhbHVlKSB7XG4gICAgICBpZiAodmFsdWUpXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZGFya3Jvb20tYnV0dG9uLWhpZGRlblwiKTtcbiAgICAgIGVsc2VcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkYXJrcm9vbS1idXR0b24taGlkZGVuXCIpO1xuICAgIH0sXG4gICAgZGlzYWJsZSh2YWx1ZSkge1xuICAgICAgdGhpcy5lbGVtZW50LmRpc2FibGVkID0gKHZhbHVlKSA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgSW5wdXQucHJvdG90eXBlID0ge1xuICAgIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lcikge1xuICAgICAgaWYgKHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnQuYXR0YWNoRXZlbnQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmF0dGFjaEV2ZW50KFwib25cIiArIGV2ZW50TmFtZSwgbGlzdGVuZXIpO1xuICAgICAgfVxuICAgIH0sXG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyKSB7XG4gICAgICBpZiAodGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lcik7XG4gICAgICB9XG4gICAgfSxcbiAgICBhY3RpdmUodmFsdWUpIHtcbiAgICAgIGlmICh2YWx1ZSlcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkYXJrcm9vbS1pbnB1dC1hY3RpdmVcIik7XG4gICAgICBlbHNlXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZGFya3Jvb20taW5wdXQtYWN0aXZlXCIpO1xuICAgIH0sXG4gICAgaGlkZSh2YWx1ZSkge1xuICAgICAgaWYgKHZhbHVlKVxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRhcmtyb29tLWJ1dHRvbi1oaWRkZW5cIik7XG4gICAgICBlbHNlXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZGFya3Jvb20tYnV0dG9uLWhpZGRlblwiKTtcbiAgICB9LFxuICAgIGRpc2FibGUodmFsdWUpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5kaXNhYmxlZCA9ICh2YWx1ZSkgPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuICB9O1xufSgpKTtcbiIsIihmdW5jdGlvbiAoKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIERhcmtyb29tLlV0aWxzID0ge1xuICAgIGV4dGVuZCxcbiAgICBjb21wdXRlSW1hZ2VWaWV3UG9ydFxuICB9O1xuXG5cbiAgLy8gVXRpbGl0eSBtZXRob2QgdG8gZWFzaWx5IGV4dGVuZCBvYmplY3RzLlxuICBmdW5jdGlvbiBleHRlbmQoYiwgYSkge1xuICAgIGxldCBwcm9wO1xuICAgIGlmIChiID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBhO1xuICAgIH1cbiAgICBmb3IgKHByb3AgaW4gYSkge1xuICAgICAgaWYgKGEuaGFzT3duUHJvcGVydHkocHJvcCkgJiYgYi5oYXNPd25Qcm9wZXJ0eShwcm9wKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgYltwcm9wXSA9IGFbcHJvcF07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBiO1xuICB9XG5cbiAgZnVuY3Rpb24gY29tcHV0ZUltYWdlVmlld1BvcnQoaW1hZ2UpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGVpZ2h0OiBNYXRoLmFicyhpbWFnZS5nZXRXaWR0aCgpICogKE1hdGguc2luKGltYWdlLmdldEFuZ2xlKCkgKiBNYXRoLlBJIC8gMTgwKSkpICsgTWF0aC5hYnMoaW1hZ2UuZ2V0SGVpZ2h0KCkgKiAoTWF0aC5jb3MoaW1hZ2UuZ2V0QW5nbGUoKSAqIE1hdGguUEkgLyAxODApKSksXG4gICAgICB3aWR0aDogTWF0aC5hYnMoaW1hZ2UuZ2V0SGVpZ2h0KCkgKiAoTWF0aC5zaW4oaW1hZ2UuZ2V0QW5nbGUoKSAqIE1hdGguUEkgLyAxODApKSkgKyBNYXRoLmFicyhpbWFnZS5nZXRXaWR0aCgpICogKE1hdGguY29zKGltYWdlLmdldEFuZ2xlKCkgKiBNYXRoLlBJIC8gMTgwKSkpXG4gICAgfTtcbiAgfVxufSgpKTtcbiIsIjsoZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgRGFya3Jvb20sIGZhYnJpYykge1xuICAndXNlIHN0cmljdCc7XG5cbiAgRGFya3Jvb20ucGx1Z2luc1snaGlzdG9yeSddID0gRGFya3Jvb20uUGx1Z2luLmV4dGVuZCh7XG4gICAgdW5kb1RyYW5zZm9ybWF0aW9uczogW10sXG5cbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbiBJbml0RGFya3Jvb21IaXN0b3J5UGx1Z2luKCkge1xuICAgICAgdGhpcy5faW5pdEJ1dHRvbnMoKTtcblxuICAgICAgdGhpcy5kYXJrcm9vbS5hZGRFdmVudExpc3RlbmVyKCdjb3JlOnRyYW5zZm9ybWF0aW9uJywgdGhpcy5fb25UcmFuZm9ybWF0aW9uQXBwbGllZC5iaW5kKHRoaXMpKTtcbiAgICB9LFxuXG4gICAgdW5kbzogZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy5kYXJrcm9vbS50cmFuc2Zvcm1hdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGxhc3RUcmFuc2Zvcm1hdGlvbiA9IHRoaXMuZGFya3Jvb20udHJhbnNmb3JtYXRpb25zLnBvcCgpO1xuICAgICAgdGhpcy51bmRvVHJhbnNmb3JtYXRpb25zLnVuc2hpZnQobGFzdFRyYW5zZm9ybWF0aW9uKTtcblxuICAgICAgdGhpcy5kYXJrcm9vbS5yZWluaXRpYWxpemVJbWFnZSgpO1xuICAgICAgdGhpcy5fdXBkYXRlQnV0dG9ucygpO1xuICAgIH0sXG5cbiAgICByZWRvOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLnVuZG9UcmFuc2Zvcm1hdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNhbmNlbFRyYW5zZm9ybWF0aW9uID0gdGhpcy51bmRvVHJhbnNmb3JtYXRpb25zLnNoaWZ0KCk7XG4gICAgICB0aGlzLmRhcmtyb29tLnRyYW5zZm9ybWF0aW9ucy5wdXNoKGNhbmNlbFRyYW5zZm9ybWF0aW9uKTtcblxuICAgICAgdGhpcy5kYXJrcm9vbS5yZWluaXRpYWxpemVJbWFnZSgpO1xuICAgICAgdGhpcy5fdXBkYXRlQnV0dG9ucygpO1xuICAgIH0sXG5cbiAgICBfaW5pdEJ1dHRvbnM6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGJ1dHRvbkdyb3VwID0gdGhpcy5kYXJrcm9vbS50b29sYmFyLmNyZWF0ZUJ1dHRvbkdyb3VwKCk7XG5cbiAgICAgIHRoaXMuYmFja0J1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XG4gICAgICAgIGltYWdlOiAndW5kbycsXG4gICAgICAgIGRpc2FibGVkOiB0cnVlXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5mb3J3YXJkQnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcbiAgICAgICAgaW1hZ2U6ICdyZWRvJyxcbiAgICAgICAgZGlzYWJsZWQ6IHRydWVcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmJhY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnVuZG8uYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLmZvcndhcmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJlZG8uYmluZCh0aGlzKSk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBfdXBkYXRlQnV0dG9uczogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmJhY2tCdXR0b24uZGlzYWJsZSgodGhpcy5kYXJrcm9vbS50cmFuc2Zvcm1hdGlvbnMubGVuZ3RoID09PSAwKSlcbiAgICAgIHRoaXMuZm9yd2FyZEJ1dHRvbi5kaXNhYmxlKCh0aGlzLnVuZG9UcmFuc2Zvcm1hdGlvbnMubGVuZ3RoID09PSAwKSlcbiAgICB9LFxuXG4gICAgX29uVHJhbmZvcm1hdGlvbkFwcGxpZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy51bmRvVHJhbnNmb3JtYXRpb25zID0gW107XG4gICAgICB0aGlzLl91cGRhdGVCdXR0b25zKCk7XG4gICAgfVxuICB9KTtcbn0pKHdpbmRvdywgZG9jdW1lbnQsIERhcmtyb29tLCBmYWJyaWMpO1xuIiwiKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgUm90YXRpb24gPSBEYXJrcm9vbS5UcmFuc2Zvcm1hdGlvbi5leHRlbmQoe1xuICAgIGFwcGx5VHJhbnNmb3JtYXRpb24oY2FudmFzLCBpbWFnZSwgbmV4dCkge1xuICAgICAgY29uc3QgYW5nbGUgPSAoaW1hZ2UuZ2V0QW5nbGUoKSArIHRoaXMub3B0aW9ucy5hbmdsZSkgJSAzNjA7XG4gICAgICBpbWFnZS5yb3RhdGUoYW5nbGUpO1xuXG4gICAgICBjb25zdCBoZWlnaHQgPSBNYXRoLmFicyhpbWFnZS5nZXRXaWR0aCgpICogKE1hdGguc2luKGFuZ2xlICogTWF0aC5QSSAvIDE4MCkpKSArIE1hdGguYWJzKGltYWdlLmdldEhlaWdodCgpICogKE1hdGguY29zKGFuZ2xlICogTWF0aC5QSSAvIDE4MCkpKTtcbiAgICAgIGNvbnN0IHdpZHRoID0gTWF0aC5hYnMoaW1hZ2UuZ2V0SGVpZ2h0KCkgKiAoTWF0aC5zaW4oYW5nbGUgKiBNYXRoLlBJIC8gMTgwKSkpICsgTWF0aC5hYnMoaW1hZ2UuZ2V0V2lkdGgoKSAqIChNYXRoLmNvcyhhbmdsZSAqIE1hdGguUEkgLyAxODApKSk7XG5cbiAgICAgIGNhbnZhcy5zZXRXaWR0aCh3aWR0aCk7XG4gICAgICBjYW52YXMuc2V0SGVpZ2h0KGhlaWdodCk7XG5cbiAgICAgIGNhbnZhcy5jZW50ZXJPYmplY3QoaW1hZ2UpO1xuICAgICAgaW1hZ2Uuc2V0Q29vcmRzKCk7XG4gICAgICBjYW52YXMucmVuZGVyQWxsKCk7XG5cbiAgICAgIG5leHQoKTtcbiAgICB9LFxuICB9KTtcblxuICBEYXJrcm9vbS5wbHVnaW5zLnJvdGF0ZSA9IERhcmtyb29tLlBsdWdpbi5leHRlbmQoe1xuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgIGNvbnN0IGJ1dHRvbkdyb3VwID0gdGhpcy5kYXJrcm9vbS50b29sYmFyLmNyZWF0ZUJ1dHRvbkdyb3VwKCk7XG5cbiAgICAgIGNvbnN0IGxlZnRCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xuICAgICAgICBpbWFnZTogXCJyb3RhdGUtbGVmdFwiLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHJpZ2h0QnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcbiAgICAgICAgaW1hZ2U6IFwicm90YXRlLXJpZ2h0XCIsXG4gICAgICB9KTtcblxuICAgICAgbGVmdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5yb3RhdGVMZWZ0LmJpbmQodGhpcykpO1xuICAgICAgcmlnaHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMucm90YXRlUmlnaHQuYmluZCh0aGlzKSk7XG4gICAgfSxcblxuICAgIHJvdGF0ZUxlZnQoKSB7XG4gICAgICB0aGlzLnJvdGF0ZSgtOTApO1xuICAgIH0sXG5cbiAgICByb3RhdGVSaWdodCgpIHtcbiAgICAgIHRoaXMucm90YXRlKDkwKTtcbiAgICB9LFxuXG4gICAgcm90YXRlKGFuZ2xlKSB7XG4gICAgICB0aGlzLmRhcmtyb29tLm9wdGlvbnMubGVmdCA9IDA7XG4gICAgICB0aGlzLmRhcmtyb29tLm9wdGlvbnMudG9wID0gMDtcbiAgICAgIHRoaXMuZGFya3Jvb20uYXBwbHlUcmFuc2Zvcm1hdGlvbihuZXcgUm90YXRpb24oe1xuICAgICAgICBhbmdsZSxcbiAgICAgIH0pKTtcbiAgICB9LFxuXG4gIH0pO1xufSgpKTtcbiIsIihmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIENyb3AgPSBEYXJrcm9vbS5UcmFuc2Zvcm1hdGlvbi5leHRlbmQoe1xuICBhcHBseVRyYW5zZm9ybWF0aW9uOiBmdW5jdGlvbihjYW52YXMsIGltYWdlLCBuZXh0KSB7XG4gICAgLy8gU25hcHNob3QgdGhlIGltYWdlIGRlbGltaXRlZCBieSB0aGUgY3JvcCB6b25lXG4gICAgdmFyIHNuYXBzaG90ID0gbmV3IEltYWdlKCk7XG4gICAgc25hcHNob3Qub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAvLyBWYWxpZGF0ZSBpbWFnZVxuICAgICAgaWYgKGhlaWdodCA8IDEgfHwgd2lkdGggPCAxKVxuICAgICAgICByZXR1cm47XG5cbiAgICAgIHZhciBpbWdJbnN0YW5jZSA9IG5ldyBmYWJyaWMuSW1hZ2UodGhpcywge1xuICAgICAgICAvLyBvcHRpb25zIHRvIG1ha2UgdGhlIGltYWdlIHN0YXRpY1xuICAgICAgICBzZWxlY3RhYmxlOiBmYWxzZSxcbiAgICAgICAgZXZlbnRlZDogZmFsc2UsXG4gICAgICAgIGxvY2tNb3ZlbWVudFg6IHRydWUsXG4gICAgICAgIGxvY2tNb3ZlbWVudFk6IHRydWUsXG4gICAgICAgIGxvY2tSb3RhdGlvbjogdHJ1ZSxcbiAgICAgICAgbG9ja1NjYWxpbmdYOiB0cnVlLFxuICAgICAgICBsb2NrU2NhbGluZ1k6IHRydWUsXG4gICAgICAgIGxvY2tVbmlTY2FsaW5nOiB0cnVlLFxuICAgICAgICBoYXNDb250cm9sczogZmFsc2UsXG4gICAgICAgIGhhc0JvcmRlcnM6IGZhbHNlXG4gICAgICB9KTtcblxuICAgICAgdmFyIHdpZHRoID0gdGhpcy53aWR0aDtcbiAgICAgIHZhciBoZWlnaHQgPSB0aGlzLmhlaWdodDtcblxuICAgICAgLy8gVXBkYXRlIGNhbnZhcyBzaXplXG4gICAgICBjYW52YXMuc2V0V2lkdGgod2lkdGgpO1xuICAgICAgY2FudmFzLnNldEhlaWdodChoZWlnaHQpO1xuXG4gICAgICAvLyBBZGQgaW1hZ2VcbiAgICAgIGltYWdlLnJlbW92ZSgpO1xuICAgICAgY2FudmFzLmFkZChpbWdJbnN0YW5jZSk7XG5cbiAgICAgIG5leHQoaW1nSW5zdGFuY2UpO1xuICAgIH07XG5cbiAgICB2YXIgdmlld3BvcnQgPSBEYXJrcm9vbS5VdGlscy5jb21wdXRlSW1hZ2VWaWV3UG9ydChpbWFnZSk7XG4gICAgdmFyIGltYWdlV2lkdGggPSB2aWV3cG9ydC53aWR0aDtcbiAgICB2YXIgaW1hZ2VIZWlnaHQgPSB2aWV3cG9ydC5oZWlnaHQ7XG5cbiAgICB2YXIgbGVmdCA9IHRoaXMub3B0aW9ucy5sZWZ0ICogaW1hZ2VXaWR0aDtcbiAgICB2YXIgdG9wID0gdGhpcy5vcHRpb25zLnRvcCAqIGltYWdlSGVpZ2h0O1xuICAgIHZhciB3aWR0aCA9IE1hdGgubWluKHRoaXMub3B0aW9ucy53aWR0aCAqIGltYWdlV2lkdGgsIGltYWdlV2lkdGggLSBsZWZ0KTtcbiAgICB2YXIgaGVpZ2h0ID0gTWF0aC5taW4odGhpcy5vcHRpb25zLmhlaWdodCAqIGltYWdlSGVpZ2h0LCBpbWFnZUhlaWdodCAtIHRvcCk7XG5cbiAgICBzbmFwc2hvdC5zcmMgPSBjYW52YXMudG9EYXRhVVJMKHtcbiAgICAgIGxlZnQ6IGxlZnQsXG4gICAgICB0b3A6IHRvcCxcbiAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIH0pO1xuICB9XG59KTtcblxudmFyIENyb3Bab25lID0gZmFicmljLnV0aWwuY3JlYXRlQ2xhc3MoZmFicmljLlJlY3QsIHtcbiAgX3JlbmRlcjogZnVuY3Rpb24oY3R4KSB7XG4gICAgdGhpcy5jYWxsU3VwZXIoJ19yZW5kZXInLCBjdHgpO1xuXG4gICAgdmFyIGNhbnZhcyA9IGN0eC5jYW52YXM7XG4gICAgdmFyIGRhc2hXaWR0aCA9IDc7XG5cbiAgICAvLyBTZXQgb3JpZ2luYWwgc2NhbGVcbiAgICB2YXIgZmxpcFggPSB0aGlzLmZsaXBYID8gLTEgOiAxO1xuICAgIHZhciBmbGlwWSA9IHRoaXMuZmxpcFkgPyAtMSA6IDE7XG4gICAgdmFyIHNjYWxlWCA9IGZsaXBYIC8gdGhpcy5zY2FsZVg7XG4gICAgdmFyIHNjYWxlWSA9IGZsaXBZIC8gdGhpcy5zY2FsZVk7XG5cbiAgICBjdHguc2NhbGUoc2NhbGVYLCBzY2FsZVkpO1xuXG4gICAgLy8gT3ZlcmxheSByZW5kZXJpbmdcbiAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMCwgMCwgMCwgMC41KSc7XG4gICAgdGhpcy5fcmVuZGVyT3ZlcmxheShjdHgpO1xuXG4gICAgLy8gU2V0IGRhc2hlZCBib3JkZXJzXG4gICAgaWYgKGN0eC5zZXRMaW5lRGFzaCAhPT0gdW5kZWZpbmVkKVxuICAgICAgY3R4LnNldExpbmVEYXNoKFtkYXNoV2lkdGgsIGRhc2hXaWR0aF0pO1xuICAgIGVsc2UgaWYgKGN0eC5tb3pEYXNoICE9PSB1bmRlZmluZWQpXG4gICAgICBjdHgubW96RGFzaCA9IFtkYXNoV2lkdGgsIGRhc2hXaWR0aF07XG5cbiAgICAvLyBGaXJzdCBsaW5lcyByZW5kZXJpbmcgd2l0aCBibGFja1xuICAgIGN0eC5zdHJva2VTdHlsZSA9ICdyZ2JhKDAsIDAsIDAsIDAuMiknO1xuICAgIHRoaXMuX3JlbmRlckJvcmRlcnMoY3R4KTtcbiAgICB0aGlzLl9yZW5kZXJHcmlkKGN0eCk7XG5cbiAgICAvLyBSZSByZW5kZXIgbGluZXMgaW4gd2hpdGVcbiAgICBjdHgubGluZURhc2hPZmZzZXQgPSBkYXNoV2lkdGg7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSc7XG4gICAgdGhpcy5fcmVuZGVyQm9yZGVycyhjdHgpO1xuICAgIHRoaXMuX3JlbmRlckdyaWQoY3R4KTtcblxuICAgIC8vIFJlc2V0IHNjYWxlXG4gICAgY3R4LnNjYWxlKDEvc2NhbGVYLCAxL3NjYWxlWSk7XG4gIH0sXG5cbiAgX3JlbmRlck92ZXJsYXk6IGZ1bmN0aW9uKGN0eCkge1xuICAgIHZhciBjYW52YXMgPSBjdHguY2FudmFzO1xuXG4gICAgLy9cbiAgICAvLyAgICB4MCAgICB4MSAgICAgICAgeDIgICAgICB4M1xuICAgIC8vIHkwICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rXG4gICAgLy8gICAgfFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXHxcbiAgICAvLyAgICB8XFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcfFxuICAgIC8vIHkxICstLS0tLS0rLS0tLS0tLS0tKy0tLS0tLS0rXG4gICAgLy8gICAgfFxcXFxcXFxcXFxcXHwgICAgICAgICB8XFxcXFxcXFxcXFxcXFx8XG4gICAgLy8gICAgfFxcXFxcXFxcXFxcXHwgICAgMCAgICB8XFxcXFxcXFxcXFxcXFx8XG4gICAgLy8gICAgfFxcXFxcXFxcXFxcXHwgICAgICAgICB8XFxcXFxcXFxcXFxcXFx8XG4gICAgLy8geTIgKy0tLS0tLSstLS0tLS0tLS0rLS0tLS0tLStcbiAgICAvLyAgICB8XFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcfFxuICAgIC8vICAgIHxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFx8XG4gICAgLy8geTMgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLStcbiAgICAvL1xuXG4gICAgdmFyIHgwID0gTWF0aC5jZWlsKC10aGlzLmdldFdpZHRoKCkgLyAyIC0gdGhpcy5nZXRMZWZ0KCkpO1xuICAgIHZhciB4MSA9IE1hdGguY2VpbCgtdGhpcy5nZXRXaWR0aCgpIC8gMik7XG4gICAgdmFyIHgyID0gTWF0aC5jZWlsKHRoaXMuZ2V0V2lkdGgoKSAvIDIpO1xuICAgIHZhciB4MyA9IE1hdGguY2VpbCh0aGlzLmdldFdpZHRoKCkgLyAyICsgKGNhbnZhcy53aWR0aCAtIHRoaXMuZ2V0V2lkdGgoKSAtIHRoaXMuZ2V0TGVmdCgpKSk7XG5cbiAgICB2YXIgeTAgPSBNYXRoLmNlaWwoLXRoaXMuZ2V0SGVpZ2h0KCkgLyAyIC0gdGhpcy5nZXRUb3AoKSk7XG4gICAgdmFyIHkxID0gTWF0aC5jZWlsKC10aGlzLmdldEhlaWdodCgpIC8gMik7XG4gICAgdmFyIHkyID0gTWF0aC5jZWlsKHRoaXMuZ2V0SGVpZ2h0KCkgLyAyKTtcbiAgICB2YXIgeTMgPSBNYXRoLmNlaWwodGhpcy5nZXRIZWlnaHQoKSAvIDIgKyAoY2FudmFzLmhlaWdodCAtIHRoaXMuZ2V0SGVpZ2h0KCkgLSB0aGlzLmdldFRvcCgpKSk7XG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgXG4gICAgLy8gRHJhdyBvdXRlciByZWN0YW5nbGUuXG4gICAgLy8gTnVtYmVycyBhcmUgKy8tMSBzbyB0aGF0IG92ZXJsYXkgZWRnZXMgZG9uJ3QgZ2V0IGJsdXJyeS5cbiAgICBjdHgubW92ZVRvKHgwIC0gMSwgeTAgLSAxKTtcbiAgICBjdHgubGluZVRvKHgzICsgMSwgeTAgLSAxKTtcbiAgICBjdHgubGluZVRvKHgzICsgMSwgeTMgKyAxKTtcbiAgICBjdHgubGluZVRvKHgwIC0gMSwgeTMgLSAxKTtcbiAgICBjdHgubGluZVRvKHgwIC0gMSwgeTAgLSAxKTtcbiAgICBjdHguY2xvc2VQYXRoKCk7XG5cbiAgICAvLyBEcmF3IGlubmVyIHJlY3RhbmdsZS5cbiAgICBjdHgubW92ZVRvKHgxLCB5MSk7XG4gICAgY3R4LmxpbmVUbyh4MSwgeTIpO1xuICAgIGN0eC5saW5lVG8oeDIsIHkyKTtcbiAgICBjdHgubGluZVRvKHgyLCB5MSk7XG4gICAgY3R4LmxpbmVUbyh4MSwgeTEpO1xuXG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIGN0eC5maWxsKCk7XG4gIH0sXG5cbiAgX3JlbmRlckJvcmRlcnM6IGZ1bmN0aW9uKGN0eCkge1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKC10aGlzLmdldFdpZHRoKCkvMiwgLXRoaXMuZ2V0SGVpZ2h0KCkvMik7IC8vIHVwcGVyIGxlZnRcbiAgICBjdHgubGluZVRvKHRoaXMuZ2V0V2lkdGgoKS8yLCAtdGhpcy5nZXRIZWlnaHQoKS8yKTsgLy8gdXBwZXIgcmlnaHRcbiAgICBjdHgubGluZVRvKHRoaXMuZ2V0V2lkdGgoKS8yLCB0aGlzLmdldEhlaWdodCgpLzIpOyAvLyBkb3duIHJpZ2h0XG4gICAgY3R4LmxpbmVUbygtdGhpcy5nZXRXaWR0aCgpLzIsIHRoaXMuZ2V0SGVpZ2h0KCkvMik7IC8vIGRvd24gbGVmdFxuICAgIGN0eC5saW5lVG8oLXRoaXMuZ2V0V2lkdGgoKS8yLCAtdGhpcy5nZXRIZWlnaHQoKS8yKTsgLy8gdXBwZXIgbGVmdFxuICAgIGN0eC5zdHJva2UoKTtcbiAgfSxcblxuICBfcmVuZGVyR3JpZDogZnVuY3Rpb24oY3R4KSB7XG4gICAgLy8gVmVydGljYWwgbGluZXNcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbygtdGhpcy5nZXRXaWR0aCgpLzIgKyAxLzMgKiB0aGlzLmdldFdpZHRoKCksIC10aGlzLmdldEhlaWdodCgpLzIpO1xuICAgIGN0eC5saW5lVG8oLXRoaXMuZ2V0V2lkdGgoKS8yICsgMS8zICogdGhpcy5nZXRXaWR0aCgpLCB0aGlzLmdldEhlaWdodCgpLzIpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbygtdGhpcy5nZXRXaWR0aCgpLzIgKyAyLzMgKiB0aGlzLmdldFdpZHRoKCksIC10aGlzLmdldEhlaWdodCgpLzIpO1xuICAgIGN0eC5saW5lVG8oLXRoaXMuZ2V0V2lkdGgoKS8yICsgMi8zICogdGhpcy5nZXRXaWR0aCgpLCB0aGlzLmdldEhlaWdodCgpLzIpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICAvLyBIb3Jpem9udGFsIGxpbmVzXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oLXRoaXMuZ2V0V2lkdGgoKS8yLCAtdGhpcy5nZXRIZWlnaHQoKS8yICsgMS8zICogdGhpcy5nZXRIZWlnaHQoKSk7XG4gICAgY3R4LmxpbmVUbyh0aGlzLmdldFdpZHRoKCkvMiwgLXRoaXMuZ2V0SGVpZ2h0KCkvMiArIDEvMyAqIHRoaXMuZ2V0SGVpZ2h0KCkpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbygtdGhpcy5nZXRXaWR0aCgpLzIsIC10aGlzLmdldEhlaWdodCgpLzIgKyAyLzMgKiB0aGlzLmdldEhlaWdodCgpKTtcbiAgICBjdHgubGluZVRvKHRoaXMuZ2V0V2lkdGgoKS8yLCAtdGhpcy5nZXRIZWlnaHQoKS8yICsgMi8zICogdGhpcy5nZXRIZWlnaHQoKSk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICB9XG59KTtcblxuRGFya3Jvb20ucGx1Z2luc1snY3JvcCddID0gRGFya3Jvb20uUGx1Z2luLmV4dGVuZCh7XG4gIC8vIEluaXQgcG9pbnRcbiAgc3RhcnRYOiBudWxsLFxuICBzdGFydFk6IG51bGwsXG5cbiAgLy8gS2V5Y3JvcFxuICBpc0tleUNyb3Bpbmc6IGZhbHNlLFxuICBpc0tleUxlZnQ6IGZhbHNlLFxuICBpc0tleVVwOiBmYWxzZSxcblxuICBkZWZhdWx0czoge1xuICAgIC8vIG1pbiBjcm9wIGRpbWVuc2lvblxuICAgIG1pbkhlaWdodDogMSxcbiAgICBtaW5XaWR0aDogMSxcbiAgICAvLyBlbnN1cmUgY3JvcCByYXRpb1xuICAgIHJhdGlvOiBudWxsLFxuICAgIC8vIHF1aWNrIGNyb3AgZmVhdHVyZSAoc2V0IGEga2V5IGNvZGUgdG8gZW5hYmxlIGl0KVxuICAgIHF1aWNrQ3JvcEtleTogZmFsc2VcbiAgfSxcblxuICBpbml0aWFsaXplOiBmdW5jdGlvbiBJbml0RGFya3Jvb21Dcm9wUGx1Z2luKCkge1xuICAgIHZhciBidXR0b25Hcm91cCA9IHRoaXMuZGFya3Jvb20udG9vbGJhci5jcmVhdGVCdXR0b25Hcm91cCgpO1xuXG4gICAgdGhpcy5jcm9wQnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcbiAgICAgIGltYWdlOiAnY3JvcCdcbiAgICB9KTtcbiAgICB0aGlzLm9rQnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcbiAgICAgIGltYWdlOiAnZG9uZScsXG4gICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICBoaWRlOiB0cnVlXG4gICAgfSk7XG4gICAgdGhpcy5jYW5jZWxCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xuICAgICAgaW1hZ2U6ICdjbG9zZScsXG4gICAgICB0eXBlOiAnZGFuZ2VyJyxcbiAgICAgIGhpZGU6IHRydWVcbiAgICB9KTtcblxuICAgIC8vIEJ1dHRvbnMgY2xpY2tcbiAgICB0aGlzLmNyb3BCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnRvZ2dsZUNyb3AuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5va0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY3JvcEN1cnJlbnRab25lLmJpbmQodGhpcykpO1xuICAgIHRoaXMuY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yZWxlYXNlRm9jdXMuYmluZCh0aGlzKSk7XG5cbiAgICAvLyBDYW52YXMgZXZlbnRzXG4gICAgdGhpcy5kYXJrcm9vbS5jYW52YXMub24oJ21vdXNlOmRvd24nLCB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcykpO1xuICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLm9uKCdtb3VzZTptb3ZlJywgdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbignbW91c2U6dXAnLCB0aGlzLm9uTW91c2VVcC5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbignb2JqZWN0Om1vdmluZycsIHRoaXMub25PYmplY3RNb3ZpbmcuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5kYXJrcm9vbS5jYW52YXMub24oJ29iamVjdDpzY2FsaW5nJywgdGhpcy5vbk9iamVjdFNjYWxpbmcuYmluZCh0aGlzKSk7XG5cbiAgICBmYWJyaWMudXRpbC5hZGRMaXN0ZW5lcihmYWJyaWMuZG9jdW1lbnQsICdrZXlkb3duJywgdGhpcy5vbktleURvd24uYmluZCh0aGlzKSk7XG4gICAgZmFicmljLnV0aWwuYWRkTGlzdGVuZXIoZmFicmljLmRvY3VtZW50LCAna2V5dXAnLCB0aGlzLm9uS2V5VXAuYmluZCh0aGlzKSk7XG5cbiAgICB0aGlzLmRhcmtyb29tLmFkZEV2ZW50TGlzdGVuZXIoJ2NvcmU6dHJhbnNmb3JtYXRpb24nLCB0aGlzLnJlbGVhc2VGb2N1cy5iaW5kKHRoaXMpKTtcbiAgfSxcblxuICBjbGVhcjogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuaGFzRm9jdXMoKSlcbiAgICB0aGlzLnJlbGVhc2VGb2N1cygpO1xuICB9LFxuICAvLyBBdm9pZCBjcm9wIHpvbmUgdG8gZ28gYmV5b25kIHRoZSBjYW52YXMgZWRnZXNcbiAgb25PYmplY3RNb3Zpbmc6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmhhc0ZvY3VzKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgY3VycmVudE9iamVjdCA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAoY3VycmVudE9iamVjdCAhPT0gdGhpcy5jcm9wWm9uZSlcbiAgICAgIHJldHVybjtcblxuICAgIHZhciBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcbiAgICB2YXIgeCA9IGN1cnJlbnRPYmplY3QuZ2V0TGVmdCgpLCB5ID0gY3VycmVudE9iamVjdC5nZXRUb3AoKTtcbiAgICB2YXIgdyA9IGN1cnJlbnRPYmplY3QuZ2V0V2lkdGgoKSwgaCA9IGN1cnJlbnRPYmplY3QuZ2V0SGVpZ2h0KCk7XG4gICAgdmFyIG1heFggPSBjYW52YXMuZ2V0V2lkdGgoKSAtIHc7XG4gICAgdmFyIG1heFkgPSBjYW52YXMuZ2V0SGVpZ2h0KCkgLSBoO1xuXG4gICAgaWYgKHggPCAwKVxuICAgICAgY3VycmVudE9iamVjdC5zZXQoJ2xlZnQnLCAwKTtcbiAgICBpZiAoeSA8IDApXG4gICAgICBjdXJyZW50T2JqZWN0LnNldCgndG9wJywgMCk7XG4gICAgaWYgKHggPiBtYXhYKVxuICAgICAgY3VycmVudE9iamVjdC5zZXQoJ2xlZnQnLCBtYXhYKTtcbiAgICBpZiAoeSA+IG1heFkpXG4gICAgICBjdXJyZW50T2JqZWN0LnNldCgndG9wJywgbWF4WSk7XG5cbiAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoJ2Nyb3A6dXBkYXRlJyk7XG4gIH0sXG5cbiAgLy8gUHJldmVudCBjcm9wIHpvbmUgZnJvbSBnb2luZyBiZXlvbmQgdGhlIGNhbnZhcyBlZGdlcyAobGlrZSBtb3VzZU1vdmUpXG4gIG9uT2JqZWN0U2NhbGluZzogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuaGFzRm9jdXMoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcmV2ZW50U2NhbGluZyA9IGZhbHNlO1xuICAgIHZhciBjdXJyZW50T2JqZWN0ID0gZXZlbnQudGFyZ2V0O1xuICAgIGlmIChjdXJyZW50T2JqZWN0ICE9PSB0aGlzLmNyb3Bab25lKVxuICAgICAgcmV0dXJuO1xuXG4gICAgdmFyIGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xuICAgIHZhciBwb2ludGVyID0gY2FudmFzLmdldFBvaW50ZXIoZXZlbnQuZSk7XG4gICAgdmFyIHggPSBwb2ludGVyLng7XG4gICAgdmFyIHkgPSBwb2ludGVyLnk7XG5cbiAgICB2YXIgbWluWCA9IGN1cnJlbnRPYmplY3QuZ2V0TGVmdCgpO1xuICAgIHZhciBtaW5ZID0gY3VycmVudE9iamVjdC5nZXRUb3AoKTtcbiAgICB2YXIgbWF4WCA9IGN1cnJlbnRPYmplY3QuZ2V0TGVmdCgpICsgY3VycmVudE9iamVjdC5nZXRXaWR0aCgpO1xuICAgIHZhciBtYXhZID0gY3VycmVudE9iamVjdC5nZXRUb3AoKSArIGN1cnJlbnRPYmplY3QuZ2V0SGVpZ2h0KCk7XG5cbiAgICBpZiAobnVsbCAhPT0gdGhpcy5vcHRpb25zLnJhdGlvKSB7XG4gICAgICBpZiAobWluWCA8IDAgfHwgbWF4WCA+IGNhbnZhcy5nZXRXaWR0aCgpIHx8IG1pblkgPCAwIHx8IG1heFkgPiBjYW52YXMuZ2V0SGVpZ2h0KCkpIHtcbiAgICAgICAgcHJldmVudFNjYWxpbmcgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtaW5YIDwgMCB8fCBtYXhYID4gY2FudmFzLmdldFdpZHRoKCkgfHwgcHJldmVudFNjYWxpbmcpIHtcbiAgICAgIHZhciBsYXN0U2NhbGVYID0gdGhpcy5sYXN0U2NhbGVYIHx8IDE7XG4gICAgICBjdXJyZW50T2JqZWN0LnNldFNjYWxlWChsYXN0U2NhbGVYKTtcbiAgICB9XG4gICAgaWYgKG1pblggPCAwKSB7XG4gICAgICBjdXJyZW50T2JqZWN0LnNldExlZnQoMCk7XG4gICAgfVxuXG4gICAgaWYgKG1pblkgPCAwIHx8IG1heFkgPiBjYW52YXMuZ2V0SGVpZ2h0KCkgfHwgcHJldmVudFNjYWxpbmcpIHtcbiAgICAgIHZhciBsYXN0U2NhbGVZID0gdGhpcy5sYXN0U2NhbGVZIHx8IDE7XG4gICAgICBjdXJyZW50T2JqZWN0LnNldFNjYWxlWShsYXN0U2NhbGVZKTtcbiAgICB9XG4gICAgaWYgKG1pblkgPCAwKSB7XG4gICAgICBjdXJyZW50T2JqZWN0LnNldFRvcCgwKTtcbiAgICB9XG5cbiAgICBpZiAoY3VycmVudE9iamVjdC5nZXRXaWR0aCgpIDwgdGhpcy5vcHRpb25zLm1pbldpZHRoKSB7XG4gICAgICBjdXJyZW50T2JqZWN0LnNjYWxlVG9XaWR0aCh0aGlzLm9wdGlvbnMubWluV2lkdGgpO1xuICAgIH1cbiAgICBpZiAoY3VycmVudE9iamVjdC5nZXRIZWlnaHQoKSA8IHRoaXMub3B0aW9ucy5taW5IZWlnaHQpIHtcbiAgICAgIGN1cnJlbnRPYmplY3Quc2NhbGVUb0hlaWdodCh0aGlzLm9wdGlvbnMubWluSGVpZ2h0KTtcbiAgICB9XG5cbiAgICB0aGlzLmxhc3RTY2FsZVggPSBjdXJyZW50T2JqZWN0LmdldFNjYWxlWCgpO1xuICAgIHRoaXMubGFzdFNjYWxlWSA9IGN1cnJlbnRPYmplY3QuZ2V0U2NhbGVZKCk7XG5cbiAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoJ2Nyb3A6dXBkYXRlJyk7XG4gIH0sXG5cbiAgLy8gSW5pdCBjcm9wIHpvbmVcbiAgb25Nb3VzZURvd246IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgZXZlbnQuZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghdGhpcy5oYXNGb2N1cygpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xuXG4gICAgLy8gcmVjYWxjdWxhdGUgb2Zmc2V0LCBpbiBjYXNlIGNhbnZhcyB3YXMgbWFuaXB1bGF0ZWQgc2luY2UgbGFzdCBgY2FsY09mZnNldGBcbiAgICBjYW52YXMuY2FsY09mZnNldCgpO1xuICAgIHZhciBwb2ludGVyID0gY2FudmFzLmdldFBvaW50ZXIoZXZlbnQuZSk7XG4gICAgdmFyIHggPSBwb2ludGVyLng7XG4gICAgdmFyIHkgPSBwb2ludGVyLnk7XG4gICAgdmFyIHBvaW50ID0gbmV3IGZhYnJpYy5Qb2ludCh4LCB5KTtcblxuICAgIC8vIENoZWNrIGlmIHVzZXIgd2FudCB0byBzY2FsZSBvciBkcmFnIHRoZSBjcm9wIHpvbmUuXG4gICAgdmFyIGFjdGl2ZU9iamVjdCA9IGNhbnZhcy5nZXRBY3RpdmVPYmplY3QoKTtcbiAgICBpZiAoYWN0aXZlT2JqZWN0ID09PSB0aGlzLmNyb3Bab25lIHx8IHRoaXMuY3JvcFpvbmUuY29udGFpbnNQb2ludChwb2ludCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjYW52YXMuZGlzY2FyZEFjdGl2ZU9iamVjdCgpO1xuICAgIHRoaXMuY3JvcFpvbmUuc2V0V2lkdGgoMCk7XG4gICAgdGhpcy5jcm9wWm9uZS5zZXRIZWlnaHQoMCk7XG4gICAgdGhpcy5jcm9wWm9uZS5zZXRTY2FsZVgoMSk7XG4gICAgdGhpcy5jcm9wWm9uZS5zZXRTY2FsZVkoMSk7XG5cbiAgICB0aGlzLnN0YXJ0WCA9IHg7XG4gICAgdGhpcy5zdGFydFkgPSB5O1xuICB9LFxuXG4gIC8vIEV4dGVuZCBjcm9wIHpvbmVcbiAgb25Nb3VzZU1vdmU6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgLy8gUXVpY2sgY3JvcCBmZWF0dXJlXG4gICAgaWYgKHRoaXMuaXNLZXlDcm9waW5nKVxuICAgICAgcmV0dXJuIHRoaXMub25Nb3VzZU1vdmVLZXlDcm9wKGV2ZW50KTtcblxuICAgIGlmIChudWxsID09PSB0aGlzLnN0YXJ0WCB8fCBudWxsID09PSB0aGlzLnN0YXJ0WSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcbiAgICB2YXIgcG9pbnRlciA9IGNhbnZhcy5nZXRQb2ludGVyKGV2ZW50LmUpO1xuICAgIHZhciB4ID0gcG9pbnRlci54O1xuICAgIHZhciB5ID0gcG9pbnRlci55O1xuXG4gICAgdGhpcy5fcmVuZGVyQ3JvcFpvbmUodGhpcy5zdGFydFgsIHRoaXMuc3RhcnRZLCB4LCB5KTtcbiAgfSxcblxuICBvbk1vdXNlTW92ZUtleUNyb3A6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xuICAgIHZhciB6b25lID0gdGhpcy5jcm9wWm9uZTtcblxuICAgIHZhciBwb2ludGVyID0gY2FudmFzLmdldFBvaW50ZXIoZXZlbnQuZSk7XG4gICAgdmFyIHggPSBwb2ludGVyLng7XG4gICAgdmFyIHkgPSBwb2ludGVyLnk7XG5cbiAgICBpZiAoIXpvbmUubGVmdCB8fCAhem9uZS50b3ApIHtcbiAgICAgIHpvbmUuc2V0VG9wKHkpO1xuICAgICAgem9uZS5zZXRMZWZ0KHgpO1xuICAgIH1cblxuICAgIHRoaXMuaXNLZXlMZWZ0ID0gIHggPCB6b25lLmxlZnQgKyB6b25lLndpZHRoIC8gMiA7XG4gICAgdGhpcy5pc0tleVVwID0geSA8IHpvbmUudG9wICsgem9uZS5oZWlnaHQgLyAyIDtcblxuICAgIHRoaXMuX3JlbmRlckNyb3Bab25lKFxuICAgICAgTWF0aC5taW4oem9uZS5sZWZ0LCB4KSxcbiAgICAgIE1hdGgubWluKHpvbmUudG9wLCB5KSxcbiAgICAgIE1hdGgubWF4KHpvbmUubGVmdCt6b25lLndpZHRoLCB4KSxcbiAgICAgIE1hdGgubWF4KHpvbmUudG9wK3pvbmUuaGVpZ2h0LCB5KVxuICAgICk7XG4gIH0sXG5cbiAgLy8gRmluaXNoIGNyb3Agem9uZVxuICBvbk1vdXNlVXA6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKG51bGwgPT09IHRoaXMuc3RhcnRYIHx8IG51bGwgPT09IHRoaXMuc3RhcnRZKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xuICAgIHRoaXMuY3JvcFpvbmUuc2V0Q29vcmRzKCk7XG4gICAgY2FudmFzLnNldEFjdGl2ZU9iamVjdCh0aGlzLmNyb3Bab25lKTtcbiAgICBjYW52YXMuY2FsY09mZnNldCgpO1xuXG4gICAgdGhpcy5zdGFydFggPSBudWxsO1xuICAgIHRoaXMuc3RhcnRZID0gbnVsbDtcbiAgfSxcblxuICBvbktleURvd246IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKGZhbHNlID09PSB0aGlzLm9wdGlvbnMucXVpY2tDcm9wS2V5IHx8IGV2ZW50LmtleUNvZGUgIT09IHRoaXMub3B0aW9ucy5xdWlja0Nyb3BLZXkgfHwgdGhpcy5pc0tleUNyb3BpbmcpXG4gICAgICByZXR1cm47XG5cbiAgICAvLyBBY3RpdmUgcXVpY2sgY3JvcCBmbG93XG4gICAgdGhpcy5pc0tleUNyb3BpbmcgPSB0cnVlIDtcbiAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5kaXNjYXJkQWN0aXZlT2JqZWN0KCk7XG4gICAgdGhpcy5jcm9wWm9uZS5zZXRXaWR0aCgwKTtcbiAgICB0aGlzLmNyb3Bab25lLnNldEhlaWdodCgwKTtcbiAgICB0aGlzLmNyb3Bab25lLnNldFNjYWxlWCgxKTtcbiAgICB0aGlzLmNyb3Bab25lLnNldFNjYWxlWSgxKTtcbiAgICB0aGlzLmNyb3Bab25lLnNldFRvcCgwKTtcbiAgICB0aGlzLmNyb3Bab25lLnNldExlZnQoMCk7XG4gIH0sXG5cbiAgb25LZXlVcDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoZmFsc2UgPT09IHRoaXMub3B0aW9ucy5xdWlja0Nyb3BLZXkgfHwgZXZlbnQua2V5Q29kZSAhPT0gdGhpcy5vcHRpb25zLnF1aWNrQ3JvcEtleSB8fCAhdGhpcy5pc0tleUNyb3BpbmcpXG4gICAgICByZXR1cm47XG5cbiAgICAvLyBVbmFjdGl2ZSBxdWljayBjcm9wIGZsb3dcbiAgICB0aGlzLmlzS2V5Q3JvcGluZyA9IGZhbHNlO1xuICAgIHRoaXMuc3RhcnRYID0gMTtcbiAgICB0aGlzLnN0YXJ0WSA9IDE7XG4gICAgdGhpcy5vbk1vdXNlVXAoKTtcbiAgfSxcblxuICBzZWxlY3Rab25lOiBmdW5jdGlvbih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBmb3JjZURpbWVuc2lvbikge1xuICAgIGlmICghdGhpcy5oYXNGb2N1cygpKVxuICAgICAgdGhpcy5yZXF1aXJlRm9jdXMoKTtcblxuICAgIGlmICghZm9yY2VEaW1lbnNpb24pIHtcbiAgICAgIHRoaXMuX3JlbmRlckNyb3Bab25lKHgsIHksIHgrd2lkdGgsIHkraGVpZ2h0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jcm9wWm9uZS5zZXQoe1xuICAgICAgICAnbGVmdCc6IHgsXG4gICAgICAgICd0b3AnOiB5LFxuICAgICAgICAnd2lkdGgnOiB3aWR0aCxcbiAgICAgICAgJ2hlaWdodCc6IGhlaWdodFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xuICAgIGNhbnZhcy5icmluZ1RvRnJvbnQodGhpcy5jcm9wWm9uZSk7XG4gICAgdGhpcy5jcm9wWm9uZS5zZXRDb29yZHMoKTtcbiAgICBjYW52YXMuc2V0QWN0aXZlT2JqZWN0KHRoaXMuY3JvcFpvbmUpO1xuICAgIGNhbnZhcy5jYWxjT2Zmc2V0KCk7XG5cbiAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoJ2Nyb3A6dXBkYXRlJyk7XG4gIH0sXG5cbiAgdG9nZ2xlQ3JvcDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLmhhc0ZvY3VzKCkpXG4gICAgICB0aGlzLnJlcXVpcmVGb2N1cygpO1xuICAgIGVsc2VcbiAgICAgIHRoaXMucmVsZWFzZUZvY3VzKCk7XG4gIH0sXG5cbiAgY3JvcEN1cnJlbnRab25lOiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuaGFzRm9jdXMoKSlcbiAgICAgIHJldHVybjtcblxuICAgIC8vIEF2b2lkIGNyb3BpbmcgZW1wdHkgem9uZVxuICAgIGlmICh0aGlzLmNyb3Bab25lLndpZHRoIDwgMSAmJiB0aGlzLmNyb3Bab25lLmhlaWdodCA8IDEpXG4gICAgICByZXR1cm47XG5cbiAgICB2YXIgaW1hZ2UgPSB0aGlzLmRhcmtyb29tLmltYWdlO1xuXG4gICAgLy8gQ29tcHV0ZSBjcm9wIHpvbmUgZGltZW5zaW9uc1xuICAgIHZhciB0b3AgPSB0aGlzLmNyb3Bab25lLmdldFRvcCgpIC0gaW1hZ2UuZ2V0VG9wKCk7XG4gICAgdmFyIGxlZnQgPSB0aGlzLmNyb3Bab25lLmdldExlZnQoKSAtIGltYWdlLmdldExlZnQoKTtcbiAgICB2YXIgd2lkdGggPSB0aGlzLmNyb3Bab25lLmdldFdpZHRoKCk7XG4gICAgdmFyIGhlaWdodCA9IHRoaXMuY3JvcFpvbmUuZ2V0SGVpZ2h0KCk7XG5cbiAgICAvLyBBZGp1c3QgZGltZW5zaW9ucyB0byBpbWFnZSBvbmx5XG4gICAgaWYgKHRvcCA8IDApIHtcbiAgICAgIGhlaWdodCArPSB0b3A7XG4gICAgICB0b3AgPSAwO1xuICAgIH1cblxuICAgIGlmIChsZWZ0IDwgMCkge1xuICAgICAgd2lkdGggKz0gbGVmdDtcbiAgICAgIGxlZnQgPSAwO1xuICAgIH1cblxuICAgIHRoaXMuZGFya3Jvb20ub3B0aW9ucy50b3AgPSAwO1xuICAgIHRoaXMuZGFya3Jvb20ub3B0aW9ucy5sZWZ0ID0gMDtcbiAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5zZXRab29tKDEpO1xuICAgIHRoaXMuZGFya3Jvb20ucGx1Z2lucy56b29tLnVwZGF0ZUJ1dHRvbnMoKTtcbiAgICAvLyBBcHBseSBjcm9wIHRyYW5zZm9ybWF0aW9uLlxuICAgIC8vIE1ha2Ugc3VyZSB0byB1c2UgcmVsYXRpdmUgZGltZW5zaW9uIHNpbmNlIHRoZSBjcm9wIHdpbGwgYmUgYXBwbGllZFxuICAgIC8vIG9uIHRoZSBzb3VyY2UgaW1hZ2UuXG4gICAgdGhpcy5kYXJrcm9vbS5hcHBseVRyYW5zZm9ybWF0aW9uKG5ldyBDcm9wKHtcbiAgICAgIHRvcDogdG9wIC8gaW1hZ2UuZ2V0SGVpZ2h0KCksXG4gICAgICBsZWZ0OiBsZWZ0IC8gaW1hZ2UuZ2V0V2lkdGgoKSxcbiAgICAgIHdpZHRoOiB3aWR0aCAvIGltYWdlLmdldFdpZHRoKCksXG4gICAgICBoZWlnaHQ6IGhlaWdodCAvIGltYWdlLmdldEhlaWdodCgpLFxuICAgIH0pKTtcbiAgfSxcblxuICAvLyBUZXN0IHdldGhlciBjcm9wIHpvbmUgaXMgc2V0XG4gIGhhc0ZvY3VzOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5jcm9wWm9uZSAhPT0gdW5kZWZpbmVkO1xuICB9LFxuXG4gIC8vIENyZWF0ZSB0aGUgY3JvcCB6b25lXG4gIHJlcXVpcmVGb2N1czogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5kYXJrcm9vbS5jbGVhckZvY3VzKCdjcm9wJyk7XG4gICAgdGhpcy5jcm9wWm9uZSA9IG5ldyBDcm9wWm9uZSh7XG4gICAgICBmaWxsOiAndHJhbnNwYXJlbnQnLFxuICAgICAgaGFzQm9yZGVyczogZmFsc2UsXG4gICAgICBvcmlnaW5YOiAnbGVmdCcsXG4gICAgICBvcmlnaW5ZOiAndG9wJyxcbiAgICAgIC8vc3Ryb2tlOiAnIzQ0NCcsXG4gICAgICAvL3N0cm9rZURhc2hBcnJheTogWzUsIDVdLFxuICAgICAgLy9ib3JkZXJDb2xvcjogJyM0NDQnLFxuICAgICAgY29ybmVyQ29sb3I6ICcjNDQ0JyxcbiAgICAgIGNvcm5lclNpemU6IDgsXG4gICAgICB0cmFuc3BhcmVudENvcm5lcnM6IGZhbHNlLFxuICAgICAgbG9ja1JvdGF0aW9uOiB0cnVlLFxuICAgICAgaGFzUm90YXRpbmdQb2ludDogZmFsc2UsXG4gICAgfSk7XG5cbiAgICBpZiAobnVsbCAhPT0gdGhpcy5vcHRpb25zLnJhdGlvKSB7XG4gICAgICB0aGlzLmNyb3Bab25lLnNldCgnbG9ja1VuaVNjYWxpbmcnLCB0cnVlKTtcbiAgICB9XG5cbiAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5hZGQodGhpcy5jcm9wWm9uZSk7XG4gICAgdGhpcy5kYXJrcm9vbS5jYW52YXMuZGVmYXVsdEN1cnNvciA9ICdjcm9zc2hhaXInO1xuXG4gICAgdGhpcy5jcm9wQnV0dG9uLmFjdGl2ZSh0cnVlKTtcbiAgICB0aGlzLm9rQnV0dG9uLmhpZGUoZmFsc2UpO1xuICAgIHRoaXMuY2FuY2VsQnV0dG9uLmhpZGUoZmFsc2UpO1xuICB9LFxuXG4gIC8vIFJlbW92ZSB0aGUgY3JvcCB6b25lXG4gIHJlbGVhc2VGb2N1czogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHVuZGVmaW5lZCA9PT0gdGhpcy5jcm9wWm9uZSlcbiAgICAgIHJldHVybjtcblxuICAgIHRoaXMuY3JvcFpvbmUucmVtb3ZlKCk7XG4gICAgdGhpcy5jcm9wWm9uZSA9IHVuZGVmaW5lZDtcblxuICAgIHRoaXMuY3JvcEJ1dHRvbi5hY3RpdmUoZmFsc2UpO1xuICAgIHRoaXMub2tCdXR0b24uaGlkZSh0cnVlKTtcbiAgICB0aGlzLmNhbmNlbEJ1dHRvbi5oaWRlKHRydWUpO1xuXG4gICAgdGhpcy5kYXJrcm9vbS5jYW52YXMuZGVmYXVsdEN1cnNvciA9ICdkZWZhdWx0JztcblxuICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudCgnY3JvcDp1cGRhdGUnKTtcbiAgfSxcblxuICBfcmVuZGVyQ3JvcFpvbmU6IGZ1bmN0aW9uKGZyb21YLCBmcm9tWSwgdG9YLCB0b1kpIHtcbiAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XG5cbiAgICB2YXIgaXNSaWdodCA9ICh0b1ggPiBmcm9tWCk7XG4gICAgdmFyIGlzTGVmdCA9ICFpc1JpZ2h0O1xuICAgIHZhciBpc0Rvd24gPSAodG9ZID4gZnJvbVkpO1xuICAgIHZhciBpc1VwID0gIWlzRG93bjtcblxuICAgIHZhciBtaW5XaWR0aCA9IE1hdGgubWluKCt0aGlzLm9wdGlvbnMubWluV2lkdGgsIGNhbnZhcy5nZXRXaWR0aCgpKTtcbiAgICB2YXIgbWluSGVpZ2h0ID0gTWF0aC5taW4oK3RoaXMub3B0aW9ucy5taW5IZWlnaHQsIGNhbnZhcy5nZXRIZWlnaHQoKSk7XG5cbiAgICAvLyBEZWZpbmUgY29ybmVyIGNvb3JkaW5hdGVzXG4gICAgdmFyIGxlZnRYID0gTWF0aC5taW4oZnJvbVgsIHRvWCk7XG4gICAgdmFyIHJpZ2h0WCA9IE1hdGgubWF4KGZyb21YLCB0b1gpO1xuICAgIHZhciB0b3BZID0gTWF0aC5taW4oZnJvbVksIHRvWSk7XG4gICAgdmFyIGJvdHRvbVkgPSBNYXRoLm1heChmcm9tWSwgdG9ZKTtcblxuICAgIC8vIFJlcGxhY2UgY3VycmVudCBwb2ludCBpbnRvIHRoZSBjYW52YXNcbiAgICBsZWZ0WCA9IE1hdGgubWF4KDAsIGxlZnRYKTtcbiAgICByaWdodFggPSBNYXRoLm1pbihjYW52YXMuZ2V0V2lkdGgoKSwgcmlnaHRYKTtcbiAgICB0b3BZID0gTWF0aC5tYXgoMCwgdG9wWSlcbiAgICBib3R0b21ZID0gTWF0aC5taW4oY2FudmFzLmdldEhlaWdodCgpLCBib3R0b21ZKTtcblxuICAgIC8vIFJlY2FsaWJyYXRlIGNvb3JkaW5hdGVzIGFjY29yZGluZyB0byBnaXZlbiBvcHRpb25zXG4gICAgaWYgKHJpZ2h0WCAtIGxlZnRYIDwgbWluV2lkdGgpIHtcbiAgICAgIGlmIChpc1JpZ2h0KVxuICAgICAgICByaWdodFggPSBsZWZ0WCArIG1pbldpZHRoO1xuICAgICAgZWxzZVxuICAgICAgICBsZWZ0WCA9IHJpZ2h0WCAtIG1pbldpZHRoO1xuICAgIH1cbiAgICBpZiAoYm90dG9tWSAtIHRvcFkgPCBtaW5IZWlnaHQpIHtcbiAgICAgIGlmIChpc0Rvd24pXG4gICAgICAgIGJvdHRvbVkgPSB0b3BZICsgbWluSGVpZ2h0O1xuICAgICAgZWxzZVxuICAgICAgICB0b3BZID0gYm90dG9tWSAtIG1pbkhlaWdodDtcbiAgICB9XG5cbiAgICAvLyBUcnVuY2F0ZSB0cnVuY2F0ZSBhY2NvcmRpbmcgdG8gY2FudmFzIGRpbWVuc2lvbnNcbiAgICBpZiAobGVmdFggPCAwKSB7XG4gICAgICAvLyBUcmFuc2xhdGUgdG8gdGhlIGxlZnRcbiAgICAgIHJpZ2h0WCArPSBNYXRoLmFicyhsZWZ0WCk7XG4gICAgICBsZWZ0WCA9IDBcbiAgICB9XG4gICAgaWYgKHJpZ2h0WCA+IGNhbnZhcy5nZXRXaWR0aCgpKSB7XG4gICAgICAvLyBUcmFuc2xhdGUgdG8gdGhlIHJpZ2h0XG4gICAgICBsZWZ0WCAtPSAocmlnaHRYIC0gY2FudmFzLmdldFdpZHRoKCkpO1xuICAgICAgcmlnaHRYID0gY2FudmFzLmdldFdpZHRoKCk7XG4gICAgfVxuICAgIGlmICh0b3BZIDwgMCkge1xuICAgICAgLy8gVHJhbnNsYXRlIHRvIHRoZSBib3R0b21cbiAgICAgIGJvdHRvbVkgKz0gTWF0aC5hYnModG9wWSk7XG4gICAgICB0b3BZID0gMFxuICAgIH1cbiAgICBpZiAoYm90dG9tWSA+IGNhbnZhcy5nZXRIZWlnaHQoKSkge1xuICAgICAgLy8gVHJhbnNsYXRlIHRvIHRoZSByaWdodFxuICAgICAgdG9wWSAtPSAoYm90dG9tWSAtIGNhbnZhcy5nZXRIZWlnaHQoKSk7XG4gICAgICBib3R0b21ZID0gY2FudmFzLmdldEhlaWdodCgpO1xuICAgIH1cblxuICAgIHZhciB3aWR0aCA9IHJpZ2h0WCAtIGxlZnRYO1xuICAgIHZhciBoZWlnaHQgPSBib3R0b21ZIC0gdG9wWTtcbiAgICB2YXIgY3VycmVudFJhdGlvID0gd2lkdGggLyBoZWlnaHQ7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnJhdGlvICYmICt0aGlzLm9wdGlvbnMucmF0aW8gIT09IGN1cnJlbnRSYXRpbykge1xuICAgICAgdmFyIHJhdGlvID0gK3RoaXMub3B0aW9ucy5yYXRpbztcblxuICAgICAgaWYodGhpcy5pc0tleUNyb3BpbmcpIHtcbiAgICAgICAgaXNMZWZ0ID0gdGhpcy5pc0tleUxlZnQ7XG4gICAgICAgIGlzVXAgPSB0aGlzLmlzS2V5VXA7XG4gICAgICB9XG5cbiAgICAgIGlmIChjdXJyZW50UmF0aW8gPCByYXRpbykge1xuICAgICAgICB2YXIgbmV3V2lkdGggPSBoZWlnaHQgKiByYXRpbztcbiAgICAgICAgaWYgKGlzTGVmdCkge1xuICAgICAgICAgIGxlZnRYIC09IChuZXdXaWR0aCAtIHdpZHRoKTtcbiAgICAgICAgfVxuICAgICAgICB3aWR0aCA9IG5ld1dpZHRoO1xuICAgICAgfSBlbHNlIGlmIChjdXJyZW50UmF0aW8gPiByYXRpbykge1xuICAgICAgICB2YXIgbmV3SGVpZ2h0ID0gaGVpZ2h0IC8gKHJhdGlvICogaGVpZ2h0L3dpZHRoKTtcbiAgICAgICAgaWYgKGlzVXApIHtcbiAgICAgICAgICB0b3BZIC09IChuZXdIZWlnaHQgLSBoZWlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIGhlaWdodCA9IG5ld0hlaWdodDtcbiAgICAgIH1cblxuICAgICAgaWYgKGxlZnRYIDwgMCkge1xuICAgICAgICBsZWZ0WCA9IDA7XG4gICAgICAgIC8vVE9ET1xuICAgICAgfVxuICAgICAgaWYgKHRvcFkgPCAwKSB7XG4gICAgICAgIHRvcFkgPSAwO1xuICAgICAgICAvL1RPRE9cbiAgICAgIH1cbiAgICAgIGlmIChsZWZ0WCArIHdpZHRoID4gY2FudmFzLmdldFdpZHRoKCkpIHtcbiAgICAgICAgdmFyIG5ld1dpZHRoID0gY2FudmFzLmdldFdpZHRoKCkgLSBsZWZ0WDtcbiAgICAgICAgaGVpZ2h0ID0gbmV3V2lkdGggKiBoZWlnaHQgLyB3aWR0aDtcbiAgICAgICAgd2lkdGggPSBuZXdXaWR0aDtcbiAgICAgICAgaWYgKGlzVXApIHtcbiAgICAgICAgICB0b3BZID0gZnJvbVkgLSBoZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0b3BZICsgaGVpZ2h0ID4gY2FudmFzLmdldEhlaWdodCgpKSB7XG4gICAgICAgIHZhciBuZXdIZWlnaHQgPSBjYW52YXMuZ2V0SGVpZ2h0KCkgLSB0b3BZO1xuICAgICAgICB3aWR0aCA9IHdpZHRoICogbmV3SGVpZ2h0IC8gaGVpZ2h0O1xuICAgICAgICBoZWlnaHQgPSBuZXdIZWlnaHQ7XG4gICAgICAgIGlmIChpc0xlZnQpIHtcbiAgICAgICAgICBsZWZ0WCA9IGZyb21YIC0gd2lkdGg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBcHBseSBjb29yZGluYXRlc1xuICAgIHRoaXMuY3JvcFpvbmUubGVmdCA9IGxlZnRYO1xuICAgIHRoaXMuY3JvcFpvbmUudG9wID0gdG9wWTtcbiAgICB0aGlzLmNyb3Bab25lLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5jcm9wWm9uZS5oZWlnaHQgPSBoZWlnaHQ7XG5cbiAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5icmluZ1RvRnJvbnQodGhpcy5jcm9wWm9uZSk7XG5cbiAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoJ2Nyb3A6dXBkYXRlJyk7XG4gIH1cbn0pO1xuXG59KSgpO1xuIiwiKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgUGVuY2lsID0gRGFya3Jvb20uVHJhbnNmb3JtYXRpb24uZXh0ZW5kKHtcbiAgICBhcHBseVRyYW5zZm9ybWF0aW9uKGNhbnZhcywgaW1hZ2UsIG5leHQpIHtcbiAgICAgIC8vIFNuYXBzaG90IHRoZSBpbWFnZSBkZWxpbWl0ZWQgYnkgdGhlIGNyb3Agem9uZVxuICAgICAgY29uc3Qgc25hcHNob3QgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIHNuYXBzaG90Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gVmFsaWRhdGUgaW1hZ2VcbiAgICAgICAgaWYgKHRoaXMuaGVpZ2h0IDwgMSB8fCB0aGlzLndpZHRoIDwgMSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGltZ0luc3RhbmNlID0gbmV3IGZhYnJpYy5JbWFnZSh0aGlzLCB7XG4gICAgICAgICAgLy8gb3B0aW9ucyB0byBtYWtlIHRoZSBpbWFnZSBzdGF0aWNcbiAgICAgICAgICBzZWxlY3RhYmxlOiBmYWxzZSxcbiAgICAgICAgICBldmVudGVkOiBmYWxzZSxcbiAgICAgICAgICBsb2NrTW92ZW1lbnRYOiB0cnVlLFxuICAgICAgICAgIGxvY2tNb3ZlbWVudFk6IHRydWUsXG4gICAgICAgICAgbG9ja1JvdGF0aW9uOiB0cnVlLFxuICAgICAgICAgIGxvY2tTY2FsaW5nWDogdHJ1ZSxcbiAgICAgICAgICBsb2NrU2NhbGluZ1k6IHRydWUsXG4gICAgICAgICAgbG9ja1VuaVNjYWxpbmc6IHRydWUsXG4gICAgICAgICAgaGFzQ29udHJvbHM6IGZhbHNlLFxuICAgICAgICAgIGhhc0JvcmRlcnM6IGZhbHNlLFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBBZGQgaW1hZ2VcbiAgICAgICAgY2FudmFzLmFkZChpbWdJbnN0YW5jZSk7XG5cbiAgICAgICAgbmV4dChpbWdJbnN0YW5jZSk7XG4gICAgICB9O1xuXG4gICAgICBjYW52YXMuYWRkKHRoaXMub3B0aW9ucy5wZW5jaWxab25lKTtcbiAgICAgIGNhbnZhcy5yZW5kZXJBbGwoKTtcbiAgICAgIHNuYXBzaG90LnNyYyA9IGNhbnZhcy50b0RhdGFVUkwoKTtcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCBQZW5jaWxab25lID0gZmFicmljLnV0aWwuY3JlYXRlQ2xhc3MoZmFicmljLk9iamVjdCwge1xuICAgIHR5cGU6IFwicGVuY2lsT2JqZWN0XCIsXG5cbiAgICBpbml0aWFsaXplKG9wdGlvbnMpIHtcbiAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICB0aGlzLmxlZnQgPSBvcHRpb25zLmxlZnQgfHwgMDtcbiAgICAgIHRoaXMudG9wID0gb3B0aW9ucy50b3AgfHwgMDtcbiAgICAgIHRoaXMud2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgICAgdGhpcy5oZWlnaHQgPSBvcHRpb25zLmhlaWdodDtcbiAgICAgIHRoaXMub3JpZ2luYWxXaWR0aCA9IHRoaXMud2lkdGg7XG4gICAgICB0aGlzLm9yaWdpbmFsSGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG4gICAgICB0aGlzLnN0cm9rZSA9IG9wdGlvbnMuc3Ryb2tlO1xuICAgICAgdGhpcy5zaXplID0gb3B0aW9ucy5zaXplO1xuICAgICAgdGhpcy5wYXRoID0gbnVsbDtcbiAgICAgIHRoaXMuY1ggPSAtdGhpcy5nZXRXaWR0aCgpIC8gMjtcbiAgICAgIHRoaXMuY1kgPSAtdGhpcy5nZXRIZWlnaHQoKSAvIDI7XG4gICAgICB0aGlzLmNhbGxTdXBlcihcImluaXRpYWxpemVcIiwgb3B0aW9ucyk7XG4gICAgfSxcblxuICAgIF9hcHBseVNjYWxpbmcodywgaCkge1xuICAgICAgY29uc3Qgc2NhbGVYID0gdGhpcy5nZXRXaWR0aCgpIC8gdztcbiAgICAgIGNvbnN0IHNjYWxlWSA9IHRoaXMuZ2V0SGVpZ2h0KCkgLyBoO1xuICAgICAgdGhpcy5zZXQoe1xuICAgICAgICBzY2FsZVg6IHRoaXMuc2NhbGVYIC8gc2NhbGVYLFxuICAgICAgICBzY2FsZVk6IHRoaXMuc2NhbGVZIC8gc2NhbGVZLFxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIF9yZW5kZXIoY3R4KSB7XG4gICAgICB0aGlzLl9kcmF3KGN0eCk7XG4gICAgfSxcblxuICAgIF9kcmF3KGN0eCkge1xuICAgICAgaWYgKGN0eCAmJiB0aGlzLnBhdGggJiYgdGhpcy5wYXRoLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY3R4LmxpbmVKb2luID0gXCJyb3VuZFwiO1xuICAgICAgICBjdHgubGluZUNhcCA9IFwicm91bmRcIjtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgubW92ZVRvKFxuICAgICAgICAgICh0aGlzLmNYICsgdGhpcy5wYXRoWzBdLngpLFxuICAgICAgICAgICh0aGlzLmNZICsgdGhpcy5wYXRoWzBdLnkpXG4gICAgICAgICk7XG5cbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLnBhdGgubGVuZ3RoOyB4ICs9IDEpIHtcbiAgICAgICAgICBjb25zdCBkcmF3WCA9ICh0aGlzLmNYICsgdGhpcy5wYXRoW3hdLngpO1xuICAgICAgICAgIGNvbnN0IGRyYXdZID0gKHRoaXMuY1kgKyB0aGlzLnBhdGhbeF0ueSk7XG4gICAgICAgICAgY3R4LmxpbmVUbyhkcmF3WCwgZHJhd1kpO1xuICAgICAgICB9XG5cblxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLnN0cm9rZTtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IHRoaXMuc2l6ZTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBjbG9uZSgpIHtcbiAgICAgIHJldHVybiBuZXcgUGVuY2lsWm9uZSh7XG4gICAgICAgIHN0cm9rZTogdGhpcy5zdHJva2UsXG4gICAgICAgIHNpemU6IHRoaXMuc2l6ZSxcbiAgICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXG4gICAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXG4gICAgICAgIHNlbGVjdGFibGU6IGZhbHNlLFxuICAgICAgICBsb2NrUm90YXRpb246IHRydWUsXG4gICAgICAgIGV2ZW50ZWQ6IGZhbHNlLFxuICAgICAgICBsb2NrTW92ZW1lbnRYOiB0cnVlLFxuICAgICAgICBsb2NrTW92ZW1lbnRZOiB0cnVlLFxuICAgICAgICBsb2NrU2NhbGluZ1g6IHRydWUsXG4gICAgICAgIGxvY2tTY2FsaW5nWTogdHJ1ZSxcbiAgICAgICAgbG9ja1VuaVNjYWxpbmc6IHRydWUsXG4gICAgICAgIGhhc0NvbnRyb2xzOiBmYWxzZSxcbiAgICAgICAgaGFzQm9yZGVyczogZmFsc2UsXG4gICAgICB9KTtcbiAgICB9LFxuICB9KTtcblxuICBEYXJrcm9vbS5wbHVnaW5zLnBlbmNpbCA9IERhcmtyb29tLlBsdWdpbi5leHRlbmQoe1xuICAgIHBlbmNpbE1vZGU6IGZhbHNlLFxuICAgIHBlbmNpbFpvbmU6IG51bGwsXG4gICAgbW91c2VEb3duOiBmYWxzZSxcbiAgICBzaXplOiAzMCxcbiAgICBkZWZhdWx0czoge1xuICAgICAgc3Ryb2tlOiBcImJsYWNrXCIsXG4gICAgICBzaXplOiAzMCxcbiAgICB9LFxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgIGNvbnN0IGJ1dHRvbkdyb3VwID0gdGhpcy5kYXJrcm9vbS50b29sYmFyLmNyZWF0ZUJ1dHRvbkdyb3VwKCk7XG5cbiAgICAgIHRoaXMucGVuY2lsQnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcbiAgICAgICAgaW1hZ2U6IFwicGVuY2lsXCIsXG4gICAgICAgIHRvb2x0aXA6IFwiRHJhd1wiLFxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMucGF0aCA9IFtdO1xuICAgICAgdGhpcy53aWR0aCA9IHRoaXMuZGFya3Jvb20uY2FudmFzLndpZHRoO1xuICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmRhcmtyb29tLmNhbnZhcy5oZWlnaHQ7XG4gICAgICB0aGlzLnNpemUgPSB0aGlzLm9wdGlvbnMuc2l6ZTtcbiAgICAgIHRoaXMuc3Ryb2tlID0gdGhpcy5vcHRpb25zLnN0cm9rZTtcblxuICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMub24oXCJtb3VzZTpkb3duXCIsIHRoaXMub25Nb3VzZURvd24uYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbihcIm1vdXNlOm1vdmVcIiwgdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLm9uKFwibW91c2U6dXBcIiwgdGhpcy5vbk1vdXNlVXAuYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLnBlbmNpbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5vbkNsaWNrLmJpbmQodGhpcykpO1xuICAgIH0sXG5cbiAgICBjbGVhcigpIHtcbiAgICAgIGlmICh0aGlzLmhhc0ZvY3VzKCkpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVGb2N1cygpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBoYXNGb2N1cygpIHtcbiAgICAgIHJldHVybiB0aGlzLnBlbmNpbFpvbmUgIT09IG51bGw7XG4gICAgfSxcblxuICAgIG9uQ2xpY2soKSB7XG4gICAgICBpZiAoIXRoaXMuaGFzRm9jdXMoKSkge1xuICAgICAgICB0aGlzLnJlcXVpcmVGb2N1cygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnJlbW92ZUZvY3VzKCk7XG4gICAgfSxcblxuICAgIG9uTW91c2VEb3duKGV2ZW50KSB7XG4gICAgICBldmVudC5lLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAoIXRoaXMuaGFzRm9jdXMoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudChcInBlbmNpbDpiZWdpblwiKTtcbiAgICAgIHRoaXMubW91c2VEb3duID0gdHJ1ZTtcbiAgICAgIHRoaXMucGF0aC5wdXNoKHRoaXMuZ2V0TW91c2VQb3NpdGlvbih0aGlzLmNhbnZhcywgZXZlbnQpKTtcbiAgICAgIHRoaXMucmVuZGVyWm9uZSgpO1xuICAgIH0sXG5cbiAgICBvbk1vdXNlVXAoZXZlbnQpIHtcbiAgICAgIGlmICghdGhpcy5oYXNGb2N1cygpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMubW91c2VEb3duKSB7XG4gICAgICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudChcInBlbmNpbDplbmRcIik7XG4gICAgICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IG1vdXNlUG9zID0gdGhpcy5nZXRNb3VzZVBvc2l0aW9uKHRoaXMuY2FudmFzLCBldmVudCk7XG4gICAgICAgIHRoaXMucGF0aC5wdXNoKG1vdXNlUG9zKTtcbiAgICAgICAgdGhpcy5yZW5kZXJab25lKCk7XG4gICAgICAgIHRoaXMuYXBwbHlQZW5jaWxQYXRoKCk7XG4gICAgICAgIHRoaXMucGF0aCA9IFtdO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBvbk1vdXNlTW92ZShldmVudCkge1xuICAgICAgaWYgKCF0aGlzLmhhc0ZvY3VzKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5tb3VzZURvd24pIHtcbiAgICAgICAgY29uc3QgbW91c2VQb3MgPSB0aGlzLmdldE1vdXNlUG9zaXRpb24odGhpcy5jYW52YXMsIGV2ZW50KTtcbiAgICAgICAgdGhpcy5wYXRoLnB1c2gobW91c2VQb3MpO1xuICAgICAgICB0aGlzLnJlbmRlclpvbmUoKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcmVtb3ZlRm9jdXMoKSB7XG4gICAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoXCJwZW5jaWw6ZGlzYWJsZWRcIik7XG4gICAgICB0aGlzLnBlbmNpbEJ1dHRvbi5hY3RpdmUoZmFsc2UpO1xuICAgICAgdGhpcy5wZW5jaWxNb2RlID0gZmFsc2U7XG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5kZWZhdWx0Q3Vyc29yID0gXCJkZWZhdWx0XCI7XG4gICAgICBpZiAodGhpcy5wZW5jaWxab25lKSB7XG4gICAgICAgIHRoaXMucGVuY2lsWm9uZS5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5wZW5jaWxab25lID0gbnVsbDtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcmVxdWlyZUZvY3VzKCkge1xuICAgICAgdGhpcy5kYXJrcm9vbS5jbGVhckZvY3VzKFwicGVuY2lsXCIpO1xuICAgICAgdGhpcy5kYXJrcm9vbS5kaXNwYXRjaEV2ZW50KFwicGVuY2lsOmVuYWJsZWRcIik7XG4gICAgICB0aGlzLnBlbmNpbE1vZGUgPSB0cnVlO1xuICAgICAgdGhpcy5wZW5jaWxCdXR0b24uYWN0aXZlKHRydWUpO1xuXG4gICAgICB0aGlzLnBlbmNpbFpvbmUgPSB0aGlzLm5ld1pvbmUoKTtcblxuICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMuYWRkKHRoaXMucGVuY2lsWm9uZSk7XG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5kZWZhdWx0Q3Vyc29yID0gXCJjcm9zc2hhaXJcIjtcbiAgICB9LFxuXG4gICAgZ2V0TW91c2VQb3NpdGlvbihjYW52YXMsIGV2ZW50KSB7XG4gICAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XG4gICAgICBjb25zdCByZWN0ID0gY2FudmFzLmxvd2VyQ2FudmFzRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCBwb2ludGVyID0gY2FudmFzLmdldFBvaW50ZXIoZXZlbnQuZSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB4OiBwb2ludGVyLngsXG4gICAgICAgIHk6IHBvaW50ZXIueSxcbiAgICAgICAgY3g6IGV2ZW50LmUuY2xpZW50WCAtIHJlY3QubGVmdCxcbiAgICAgICAgY3k6IGV2ZW50LmUuY2xpZW50WSAtIHJlY3QudG9wLFxuICAgICAgICBzeDogZXZlbnQuZS5zY3JlZW5YLFxuICAgICAgICBzeTogZXZlbnQuZS5zY3JlZW5ZLFxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgbmV3Wm9uZSgpIHtcbiAgICAgIHRoaXMucGF0aCA9IFtdO1xuICAgICAgY29uc3Qgc3Ryb2tlID0gdGhpcy5zdHJva2U7XG4gICAgICBjb25zdCBzaXplID0gdGhpcy5zaXplO1xuICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLmRhcmtyb29tLmNhbnZhcy5nZXRXaWR0aCgpO1xuICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5kYXJrcm9vbS5jYW52YXMuZ2V0SGVpZ2h0KCk7XG4gICAgICBjb25zdCB6b25lID0gbmV3IFBlbmNpbFpvbmUoe1xuICAgICAgICBzdHJva2UsXG4gICAgICAgIHNpemUsXG4gICAgICAgIHdpZHRoLFxuICAgICAgICBoZWlnaHQsXG4gICAgICAgIHNlbGVjdGFibGU6IGZhbHNlLFxuICAgICAgICBsb2NrUm90YXRpb246IHRydWUsXG4gICAgICAgIGV2ZW50ZWQ6IGZhbHNlLFxuICAgICAgICBsb2NrTW92ZW1lbnRYOiB0cnVlLFxuICAgICAgICBsb2NrTW92ZW1lbnRZOiB0cnVlLFxuICAgICAgICBsb2NrU2NhbGluZ1g6IHRydWUsXG4gICAgICAgIGxvY2tTY2FsaW5nWTogdHJ1ZSxcbiAgICAgICAgbG9ja1VuaVNjYWxpbmc6IHRydWUsXG4gICAgICAgIGhhc0NvbnRyb2xzOiBmYWxzZSxcbiAgICAgICAgaGFzQm9yZGVyczogZmFsc2UsXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHpvbmU7XG4gICAgfSxcblxuICAgIGFwcGx5UGVuY2lsUGF0aCgpIHtcbiAgICAgIGlmICghdGhpcy5oYXNGb2N1cygpKSB7IHJldHVybjsgfVxuXG4gICAgICAvLyBBdm9pZCBjcm9waW5nIGVtcHR5IHpvbmVcbiAgICAgIGlmICh0aGlzLnBhdGggPT09IG51bGwgfHwgdGhpcy5wYXRoLmxlbmd0aCA9PT0gMCkgeyByZXR1cm47IH1cblxuICAgICAgLy8gQXBwbHkgY3JvcCB0cmFuc2Zvcm1hdGlvbi5cbiAgICAgIC8vIE1ha2Ugc3VyZSB0byB1c2UgcmVsYXRpdmUgZGltZW5zaW9uIHNpbmNlIHRoZSBjcm9wIHdpbGwgYmUgYXBwbGllZFxuICAgICAgLy8gb24gdGhlIHNvdXJjZSBpbWFnZS5cbiAgICAgIGNvbnN0IHpvbmUgPSB0aGlzLnBlbmNpbFpvbmUuY2xvbmUoKTtcbiAgICAgIHpvbmUucGF0aCA9IHRoaXMucGF0aDtcbiAgICAgIHpvbmUubGVmdCAtPSB0aGlzLmRhcmtyb29tLm9wdGlvbnMubGVmdDtcbiAgICAgIHpvbmUudG9wIC09IHRoaXMuZGFya3Jvb20ub3B0aW9ucy50b3A7XG4gICAgICB0aGlzLmRhcmtyb29tLmFwcGx5VHJhbnNmb3JtYXRpb24obmV3IFBlbmNpbCh7XG4gICAgICAgIHBlbmNpbFpvbmU6IHpvbmUsXG4gICAgICB9KSk7XG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5hZGQodGhpcy5wZW5jaWxab25lKTtcbiAgICB9LFxuXG4gICAgcmVuZGVyWm9uZSgpIHtcbiAgICAgIGlmICh0aGlzLnBhdGggJiYgdGhpcy5wYXRoLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5kYXJrcm9vbS5kaXNwYXRjaEV2ZW50KFwicGVuY2lsOnVwZGF0ZVwiKTtcbiAgICAgICAgdGhpcy5wZW5jaWxab25lLnBhdGggPSB0aGlzLnBhdGg7XG4gICAgICB9XG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5icmluZ1RvRnJvbnQodGhpcy5wZW5jaWxab25lKTtcbiAgICB9LFxuXG4gIH0pO1xufSgpKTtcbiIsIihmdW5jdGlvbiAoKSB7XG4gIGxldCByZWN0O1xuICBsZXQgaXNEb3duO1xuICBsZXQgb3JpZ1g7XG4gIGxldCBvcmlnWTtcbiAgbGV0IGhhc0ZvY3VzID0gdHJ1ZTtcblxuICBjb25zdCBSZWN0YW5nbGVUcmFuc2Zvcm1hdGlvbiA9IERhcmtyb29tLlRyYW5zZm9ybWF0aW9uLmV4dGVuZCh7XG4gICAgYXBwbHlUcmFuc2Zvcm1hdGlvbihjYW52YXMsIGltYWdlLCBuZXh0KSB7XG4gICAgICBjb25zdCBzbmFwc2hvdCA9IG5ldyBJbWFnZSgpO1xuICAgICAgc25hcHNob3Qub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5oZWlnaHQgPCAxIHx8IHRoaXMud2lkdGggPCAxKSB7IHJldHVybjsgfVxuICAgICAgICBjb25zdCBpbWdJbnN0YW5jZSA9IG5ldyBmYWJyaWMuSW1hZ2UodGhpcywge1xuICAgICAgICAgIC8vIG9wdGlvbnMgdG8gbWFrZSB0aGUgaW1hZ2Ugc3RhdGljXG4gICAgICAgICAgc2VsZWN0YWJsZTogZmFsc2UsXG4gICAgICAgICAgZXZlbnRlZDogZmFsc2UsXG4gICAgICAgICAgbG9ja01vdmVtZW50WDogdHJ1ZSxcbiAgICAgICAgICBsb2NrTW92ZW1lbnRZOiB0cnVlLFxuICAgICAgICAgIGxvY2tSb3RhdGlvbjogdHJ1ZSxcbiAgICAgICAgICBsb2NrU2NhbGluZ1g6IHRydWUsXG4gICAgICAgICAgbG9ja1NjYWxpbmdZOiB0cnVlLFxuICAgICAgICAgIGxvY2tVbmlTY2FsaW5nOiB0cnVlLFxuICAgICAgICAgIGhhc0NvbnRyb2xzOiBmYWxzZSxcbiAgICAgICAgICBoYXNCb3JkZXJzOiBmYWxzZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQWRkIGltYWdlXG4gICAgICAgIGNhbnZhcy5hZGQoaW1nSW5zdGFuY2UpO1xuXG4gICAgICAgIG5leHQoaW1nSW5zdGFuY2UpO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgbmV3UmVjdCA9IHRoaXMub3B0aW9ucy5yZWN0YW5nbGU7XG4gICAgICBjb25zdCBzY2FsZVggPSB0aGlzLm9wdGlvbnMub3JpZ2luYWxXaWR0aCAvIGNhbnZhcy5nZXRXaWR0aCgpO1xuICAgICAgY29uc3Qgc2NhbGVZID0gdGhpcy5vcHRpb25zLm9yaWdpbmFsSGVpZ2h0IC8gY2FudmFzLmdldEhlaWdodCgpO1xuICAgICAgbmV3UmVjdC5zZXQoeyBzY2FsZVg6IDEgLyBzY2FsZVgsIHNjYWxlWTogMSAvIHNjYWxlWSB9KTtcbiAgICAgIGNhbnZhcy5hZGQobmV3UmVjdCk7XG4gICAgICBjYW52YXMucmVuZGVyQWxsKCk7XG4gICAgICBzbmFwc2hvdC5zcmMgPSBjYW52YXMudG9EYXRhVVJMKCk7XG4gICAgfSxcbiAgfSk7XG5cbiAgRGFya3Jvb20ucGx1Z2lucy5yZWN0YW5nbGUgPSBEYXJrcm9vbS5QbHVnaW4uZXh0ZW5kKHtcbiAgICByZWN0YW5nbGVab25lOiBudWxsLFxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgIGNvbnN0IGJ1dHRvbkdyb3VwID0gdGhpcy5kYXJrcm9vbS50b29sYmFyLmNyZWF0ZUJ1dHRvbkdyb3VwKCk7XG5cbiAgICAgIHRoaXMucmVjdGFuZ2xlQnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcbiAgICAgICAgaW1hZ2U6IFwicmVjdGFuZ2xlXCIsXG4gICAgICAgIHRvb2x0aXA6IFwiRHJhd1wiLFxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLm9uKFwibW91c2U6ZG93blwiLCB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMub24oXCJtb3VzZTptb3ZlXCIsIHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbihcIm1vdXNlOnVwXCIsIHRoaXMuaGFuZGxlTW91c2VVcC5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMucmVjdGFuZ2xlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgfSxcblxuICAgIGNsZWFyKCkge1xuICAgICAgdGhpcy5yZWN0YW5nbGVCdXR0b24uYWN0aXZlKGZhbHNlKTtcbiAgICAgIGhhc0ZvY3VzID0gdHJ1ZTtcbiAgICAgIGlzRG93biA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICBvbkNsaWNrKCkge1xuICAgICAgaWYgKCFoYXNGb2N1cykge1xuICAgICAgICB0aGlzLnJlY3RhbmdsZUJ1dHRvbi5hY3RpdmUoZmFsc2UpO1xuICAgICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5kZWZhdWx0Q3Vyc29yID0gXCJkZWZhdWx0XCI7XG4gICAgICAgIGhhc0ZvY3VzID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5kYXJrcm9vbS5jbGVhckZvY3VzKFwicmVjdGFuZ2xlXCIpO1xuICAgICAgdGhpcy5yZWN0YW5nbGVCdXR0b24uYWN0aXZlKHRydWUpO1xuICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMuZGVmYXVsdEN1cnNvciA9IFwiY3Jvc3NoYWlyXCI7XG4gICAgICBoYXNGb2N1cyA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICBvbk1vdXNlRG93bihldmVudCkge1xuICAgICAgZXZlbnQuZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKGhhc0ZvY3VzKSByZXR1cm47XG4gICAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoXCJyZWN0YW5nbGU6YmVnaW5cIik7XG4gICAgICBjb25zdCBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcbiAgICAgIGlzRG93biA9IHRydWU7XG4gICAgICBjb25zdCBwb2ludGVyID0gY2FudmFzLmdldFBvaW50ZXIoZXZlbnQuZSk7XG4gICAgICBvcmlnWCA9IHBvaW50ZXIueDtcbiAgICAgIG9yaWdZID0gcG9pbnRlci55O1xuICAgICAgcmVjdCA9IG5ldyBmYWJyaWMuUmVjdCh7XG4gICAgICAgIGxlZnQ6IG9yaWdYLFxuICAgICAgICB0b3A6IG9yaWdZLFxuICAgICAgICBvcmlnaW5YOiBcImxlZnRcIixcbiAgICAgICAgb3JpZ2luWTogXCJ0b3BcIixcbiAgICAgICAgd2lkdGg6IHBvaW50ZXIueCAtIG9yaWdYLFxuICAgICAgICBoZWlnaHQ6IHBvaW50ZXIueSAtIG9yaWdZLFxuICAgICAgICBhbmdsZTogMCxcbiAgICAgICAgZmlsbDogXCJibGFja1wiLFxuICAgICAgICB0cmFuc3BhcmVudENvcm5lcnM6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgICBjYW52YXMuYWRkKHJlY3QpO1xuICAgIH0sXG5cbiAgICBvbk1vdXNlTW92ZShldmVudCkge1xuICAgICAgaWYgKGlzRG93bikge1xuICAgICAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoXCJyZWN0YW5nbGU6dXBkYXRlXCIpO1xuICAgICAgICBjb25zdCBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcbiAgICAgICAgY29uc3QgcG9pbnRlciA9IGNhbnZhcy5nZXRQb2ludGVyKGV2ZW50LmUpO1xuXG4gICAgICAgIGlmIChvcmlnWCA+IHBvaW50ZXIueCkge1xuICAgICAgICAgIHJlY3Quc2V0KHtcbiAgICAgICAgICAgIGxlZnQ6IE1hdGguYWJzKHBvaW50ZXIueCksXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9yaWdZID4gcG9pbnRlci55KSB7XG4gICAgICAgICAgcmVjdC5zZXQoe1xuICAgICAgICAgICAgdG9wOiBNYXRoLmFicyhwb2ludGVyLnkpLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVjdC5zZXQoe1xuICAgICAgICAgIHdpZHRoOiBNYXRoLmFicyhvcmlnWCAtIHBvaW50ZXIueCksXG4gICAgICAgIH0pO1xuICAgICAgICByZWN0LnNldCh7XG4gICAgICAgICAgaGVpZ2h0OiBNYXRoLmFicyhvcmlnWSAtIHBvaW50ZXIueSksXG4gICAgICAgIH0pO1xuICAgICAgICBjYW52YXMucmVuZGVyQWxsKCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGhhbmRsZU1vdXNlVXAoKSB7XG4gICAgICBpZiAoaGFzRm9jdXMpIHJldHVybjtcbiAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xuICAgICAgaXNEb3duID0gZmFsc2U7XG4gICAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoXCJyZWN0YW5nbGU6ZW5kXCIpO1xuICAgICAgcmVjdC5sZWZ0IC09IHRoaXMuZGFya3Jvb20ub3B0aW9ucy5sZWZ0O1xuICAgICAgcmVjdC50b3AgLT0gdGhpcy5kYXJrcm9vbS5vcHRpb25zLnRvcDtcbiAgICAgIHRoaXMuZGFya3Jvb20uYXBwbHlUcmFuc2Zvcm1hdGlvbihuZXcgUmVjdGFuZ2xlVHJhbnNmb3JtYXRpb24oe1xuICAgICAgICBvcmlnaW5hbFdpZHRoOiBjYW52YXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgb3JpZ2luYWxIZWlnaHQ6IGNhbnZhcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgcmVjdGFuZ2xlOiByZWN0LFxuICAgICAgfSkpO1xuICAgIH0sXG4gIH0pO1xufSgpKTtcbiIsIihmdW5jdGlvbiAoKSB7XG4gIGxldCBoYXNGb2N1cyA9IGZhbHNlO1xuICBjb25zdCBUZXh0ID0gRGFya3Jvb20uVHJhbnNmb3JtYXRpb24uZXh0ZW5kKHtcbiAgICBhcHBseVRyYW5zZm9ybWF0aW9uKGNhbnZhcywgaW1hZ2UsIG5leHQpIHtcbiAgICAgIGNvbnN0IHNuYXBzaG90ID0gbmV3IEltYWdlKCk7XG4gICAgICBzbmFwc2hvdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFZhbGlkYXRlIGltYWdlXG4gICAgICAgIGlmICh0aGlzLmhlaWdodCA8IDEgfHwgdGhpcy53aWR0aCA8IDEpIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgY29uc3QgaW1nSW5zdGFuY2UgPSBuZXcgZmFicmljLkltYWdlKHRoaXMsIHtcbiAgICAgICAgICAvLyBvcHRpb25zIHRvIG1ha2UgdGhlIGltYWdlIHN0YXRpY1xuICAgICAgICAgIHNlbGVjdGFibGU6IGZhbHNlLFxuICAgICAgICAgIGV2ZW50ZWQ6IGZhbHNlLFxuICAgICAgICAgIGxvY2tNb3ZlbWVudFg6IHRydWUsXG4gICAgICAgICAgbG9ja01vdmVtZW50WTogdHJ1ZSxcbiAgICAgICAgICBsb2NrUm90YXRpb246IHRydWUsXG4gICAgICAgICAgbG9ja1NjYWxpbmdYOiB0cnVlLFxuICAgICAgICAgIGxvY2tTY2FsaW5nWTogdHJ1ZSxcbiAgICAgICAgICBsb2NrVW5pU2NhbGluZzogdHJ1ZSxcbiAgICAgICAgICBoYXNDb250cm9sczogZmFsc2UsXG4gICAgICAgICAgaGFzQm9yZGVyczogZmFsc2VcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQWRkIGltYWdlXG4gICAgICAgIGNhbnZhcy5hZGQoaW1nSW5zdGFuY2UpO1xuXG4gICAgICAgIG5leHQoaW1nSW5zdGFuY2UpO1xuICAgICAgfTtcblxuICAgICAgY2FudmFzLmFkZCh0aGlzLm9wdGlvbnMudGV4dCk7XG4gICAgICBjYW52YXMucmVuZGVyQWxsKCk7XG4gICAgICBzbmFwc2hvdC5zcmMgPSBjYW52YXMudG9EYXRhVVJMKCk7XG4gICAgfVxuICB9KTtcbiAgRGFya3Jvb20ucGx1Z2lucy50ZXh0ID0gRGFya3Jvb20uUGx1Z2luLmV4dGVuZCh7XG4gICAgZGVmYXVsdHM6IHtcbiAgICAgIHRleHQ6IFwiU2FtcGxlIFRleHQuLi5cIlxuICAgIH0sXG5cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgY29uc3QgYnV0dG9uR3JvdXAgPSB0aGlzLmRhcmtyb29tLnRvb2xiYXIuY3JlYXRlQnV0dG9uR3JvdXAoKTtcblxuICAgICAgdGhpcy50ZXh0QnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcbiAgICAgICAgaW1hZ2U6IFwidGV4dFwiLFxuICAgICAgICB0aXRsZTogXCJBZGQgVGV4dFwiXG4gICAgICB9KTtcbiAgICAgIHRoaXMub2tCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xuICAgICAgICBpbWFnZTogXCJkb25lXCIsXG4gICAgICAgIHR5cGU6IFwic3VjY2Vzc1wiLFxuICAgICAgICBoaWRlOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIHRoaXMuY2FuY2VsQnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcbiAgICAgICAgaW1hZ2U6IFwiY2xvc2VcIixcbiAgICAgICAgdHlwZTogXCJkYW5nZXJcIixcbiAgICAgICAgaGlkZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgICAvLyB0aGlzLmNvbG9yUGlja2VyID0gYnV0dG9uR3JvdXAuY3JlYXRlSW5wdXQoe1xuICAgICAgLy8gICBpbWFnZTogXCJjb2xvclwiLFxuICAgICAgLy8gICB0aXRsZTogXCJDb2xvciBQaWNrZXJcIixcbiAgICAgIC8vICAgdmFsdWU6IFwiXCIsXG4gICAgICAvLyAgIGhpZGU6IHRydWVcbiAgICAgIC8vIH0pO1xuXG4gICAgICB0aGlzLnRleHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuYWRkVGV4dC5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMub2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuc2F2ZVRleHQuYmluZCh0aGlzKSk7XG4gICAgICAvLyB0aGlzLmNvbG9yUGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgdGhpcy5zZXRDb2xvci5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMuY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnJlbGVhc2VGb2N1cy5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLm9uKFwibW91c2U6ZG93blwiLCB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMub24oXCJtb3VzZTptb3ZlXCIsIHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbihcIm1vdXNlOnVwXCIsIHRoaXMuaGFuZGxlTW91c2VVcC5iaW5kKHRoaXMpKTtcblxuICAgICAgdGhpcy5kYXJrcm9vbS5hZGRFdmVudExpc3RlbmVyKFwiY29yZTp0cmFuc2Zvcm1hdGlvblwiLCB0aGlzLnJlbGVhc2VGb2N1cy5iaW5kKHRoaXMpKTtcbiAgICB9LFxuXG4gICAgY2xlYXIoKSB7XG4gICAgICB0aGlzLnRleHRCdXR0b24uYWN0aXZlKGZhbHNlKTtcbiAgICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudChcInRleHQ6ZW5kXCIpO1xuICAgICAgdGhpcy50ZXh0QnV0dG9uLmFjdGl2ZShmYWxzZSk7XG4gICAgICB0aGlzLm9rQnV0dG9uLmhpZGUodHJ1ZSk7XG4gICAgICB0aGlzLmNhbmNlbEJ1dHRvbi5oaWRlKHRydWUpO1xuICAgICAgLy8gdGhpcy5jb2xvclBpY2tlci5oaWRlKHRydWUpO1xuICAgICAgaWYgKHRoaXMubmV3VGV4dCkge1xuICAgICAgICB0aGlzLm5ld1RleHQucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgICBoYXNGb2N1cyA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICBhZGRUZXh0KCkge1xuICAgICAgaWYgKGhhc0ZvY3VzKSB7XG4gICAgICAgIHRoaXMucmVsZWFzZUZvY3VzKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGhhc0ZvY3VzID0gdHJ1ZTtcbiAgICAgIHRoaXMuZGFya3Jvb20uY2xlYXJGb2N1cyhcInRleHRcIik7XG5cbiAgICAgIHRoaXMudGV4dEJ1dHRvbi5hY3RpdmUodHJ1ZSk7XG4gICAgICB0aGlzLm9rQnV0dG9uLmhpZGUoZmFsc2UpO1xuICAgICAgdGhpcy5jYW5jZWxCdXR0b24uaGlkZShmYWxzZSk7XG4gICAgICAvLyB0aGlzLmNvbG9yUGlja2VyLmhpZGUoZmFsc2UpO1xuXG4gICAgICBjb25zdCBmYWN0b3IgPSB0aGlzLmRhcmtyb29tLmltYWdlLnNjYWxlWDtcbiAgICAgIGNvbnN0IHRleHQgPSBuZXcgZmFicmljLklUZXh0KHRoaXMub3B0aW9ucy50ZXh0LCB7XG4gICAgICAgIGxlZnQ6IDEwMCAqIGZhY3RvcixcbiAgICAgICAgdG9wOiAxMDAgKiBmYWN0b3IsXG4gICAgICAgIGZpbGw6IFwiYmxhY2tcIixcbiAgICAgICAgZm9udEZhbWlseTogXCJNb25vc3BhY2VcIixcbiAgICAgICAgZm9udFNpemU6IDI1LFxuICAgICAgICBsb2NrU2tld2luZ1g6IHRydWUsXG4gICAgICAgIGxvY2tTa2V3aW5nWTogdHJ1ZSxcbiAgICAgICAgc2NhbGVYOiBmYWN0b3IsXG4gICAgICAgIHNjYWxlWTogZmFjdG9yLFxuICAgICAgICBwYWRkaW5nOiAxMFxuICAgICAgfSk7XG5cbiAgICAgIHRleHQub24odGhpcy5pbWFnZSA9IHRoaXMuZGFya3Jvb20uaW1hZ2UsIHtcbiAgICAgICAgc2NhbGluZygpIHtcbiAgICAgICAgICB0aGlzLmZhY3RvciA9IHRoaXMuaW1hZ2Uuc2NhbGVYO1xuXG4gICAgICAgICAgY29uc3Qgb2JqID0gdGhpcztcbiAgICAgICAgICBjb25zdCB3ID0gb2JqLndpZHRoICogb2JqLnNjYWxlWCAvIGZhY3RvcjtcbiAgICAgICAgICBjb25zdCBoID0gb2JqLmhlaWdodCAqIG9iai5zY2FsZVkgLyBmYWN0b3I7XG5cbiAgICAgICAgICBvYmouc2V0KHtcbiAgICAgICAgICAgIHdpZHRoOiB3LFxuICAgICAgICAgICAgaGVpZ2h0OiBoLFxuICAgICAgICAgICAgc2NhbGVYOiBmYWN0b3IsXG4gICAgICAgICAgICBzY2FsZVk6IGZhY3RvclxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMuYWRkKHRleHQpO1xuICAgICAgdGhpcy5uZXdUZXh0ID0gdGV4dDtcbiAgICB9LFxuXG4gICAgLy8gc2V0Q29sb3IoZXZlbnQpIHtcbiAgICAvLyAgIHRoaXMuc2V0U3R5bGUodGhpcywgXCJmaWxsXCIsIGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgLy8gfSxcblxuICAgIC8vIHNldFN0eWxlKG9iamVjdCwgc3R5bGVOYW1lLCB2YWx1ZSkge1xuICAgIC8vICAgY29uc3QgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XG4gICAgLy8gICBvYmplY3QubmV3VGV4dC5maWxsID0gdmFsdWU7XG4gICAgLy8gICBjYW52YXMucmVuZGVyQWxsKCk7XG4gICAgLy8gfSxcblxuICAgIHNhdmVUZXh0KCkge1xuICAgICAgdGhpcy5va0J1dHRvbi5oaWRlKHRydWUpO1xuICAgICAgdGhpcy5jYW5jZWxCdXR0b24uaGlkZSh0cnVlKTtcbiAgICAgIC8vIHRoaXMuY29sb3JQaWNrZXIuaGlkZSh0cnVlKTtcbiAgICAgIHRoaXMudGV4dEJ1dHRvbi5hY3RpdmUoZmFsc2UpO1xuICAgICAgdGhpcy5uZXdUZXh0Lmhhc0JvcmRlcnMgPSBmYWxzZTtcbiAgICAgIHRoaXMubmV3VGV4dC5oYXNDb250cm9scyA9IGZhbHNlO1xuICAgICAgdGhpcy5uZXdUZXh0Lmhhc1JvdGF0aW5nUG9pbnQgPSBmYWxzZTtcbiAgICAgIHRoaXMubmV3VGV4dC5zZWxlY3Rpb25Db2xvciA9IFwidHJhbnNwYXJlbnRcIjtcbiAgICAgIHRoaXMubmV3VGV4dC5hYm9ydEN1cnNvckFuaW1hdGlvbigpO1xuICAgICAgdGhpcy5uZXdUZXh0LmxlZnQgLT0gdGhpcy5kYXJrcm9vbS5vcHRpb25zLmxlZnQ7XG4gICAgICB0aGlzLm5ld1RleHQudG9wIC09IHRoaXMuZGFya3Jvb20ub3B0aW9ucy50b3A7XG4gICAgICB0aGlzLmRhcmtyb29tLmFwcGx5VHJhbnNmb3JtYXRpb24obmV3IFRleHQoe1xuICAgICAgICB0ZXh0OiB0aGlzLm5ld1RleHRcbiAgICAgIH0pKTtcbiAgICB9LFxuXG4gICAgb25Nb3VzZURvd24oKSB7XG4gICAgICBpZiAoIXRoaXMubmV3VGV4dCkgeyByZXR1cm47IH1cbiAgICAgIGlmICh0aGlzLm5ld1RleHQuYWN0aXZlKSB7XG4gICAgICAgIHRoaXMuaXNEb3duID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgb25Nb3VzZU1vdmUoKSB7XG4gICAgICBpZiAoIXRoaXMuaXNEb3duKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xuICAgICAgY2FudmFzLnJlbmRlckFsbCgpO1xuICAgIH0sXG5cbiAgICBoYW5kbGVNb3VzZVVwKCkge1xuICAgICAgdGhpcy5pc0Rvd24gPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgcmVsZWFzZUZvY3VzKCkge1xuICAgICAgaWYgKHRoaXMubmV3VGV4dCkgeyB0aGlzLm5ld1RleHQucmVtb3ZlKCk7IH1cblxuICAgICAgdGhpcy50ZXh0QnV0dG9uLmFjdGl2ZShmYWxzZSk7XG4gICAgICB0aGlzLm9rQnV0dG9uLmhpZGUodHJ1ZSk7XG4gICAgICB0aGlzLmNhbmNlbEJ1dHRvbi5oaWRlKHRydWUpO1xuICAgICAgLy8gdGhpcy5jb2xvclBpY2tlci5oaWRlKHRydWUpO1xuICAgICAgaGFzRm9jdXMgPSBmYWxzZTtcbiAgICB9XG4gIH0pO1xufSgpKTtcbiIsIihmdW5jdGlvbiAoKSB7XG4gIGxldCBlbGxpcDtcbiAgbGV0IGlzRG93biA9IGZhbHNlO1xuICBsZXQgb3JpZ1g7XG4gIGxldCBvcmlnWTtcbiAgbGV0IGhhc0ZvY3VzID0gdHJ1ZTtcblxuICBjb25zdCBDaXJjbGUgPSBEYXJrcm9vbS5UcmFuc2Zvcm1hdGlvbi5leHRlbmQoe1xuICAgIGFwcGx5VHJhbnNmb3JtYXRpb24oY2FudmFzLCBpbWFnZSwgbmV4dCkge1xuICAgICAgY29uc3Qgc25hcHNob3QgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIHNuYXBzaG90Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gVmFsaWRhdGUgaW1hZ2VcbiAgICAgICAgaWYgKHRoaXMuaGVpZ2h0IDwgMSB8fCB0aGlzLndpZHRoIDwgMSkgeyByZXR1cm47IH1cblxuICAgICAgICBjb25zdCBpbWdJbnN0YW5jZSA9IG5ldyBmYWJyaWMuSW1hZ2UodGhpcywge1xuICAgICAgICAgIC8vIG9wdGlvbnMgdG8gbWFrZSB0aGUgaW1hZ2Ugc3RhdGljXG4gICAgICAgICAgc2VsZWN0YWJsZTogZmFsc2UsXG4gICAgICAgICAgZXZlbnRlZDogZmFsc2UsXG4gICAgICAgICAgbG9ja01vdmVtZW50WDogdHJ1ZSxcbiAgICAgICAgICBsb2NrTW92ZW1lbnRZOiB0cnVlLFxuICAgICAgICAgIGxvY2tSb3RhdGlvbjogdHJ1ZSxcbiAgICAgICAgICBsb2NrU2NhbGluZ1g6IHRydWUsXG4gICAgICAgICAgbG9ja1NjYWxpbmdZOiB0cnVlLFxuICAgICAgICAgIGxvY2tVbmlTY2FsaW5nOiB0cnVlLFxuICAgICAgICAgIGhhc0NvbnRyb2xzOiBmYWxzZSxcbiAgICAgICAgICBoYXNCb3JkZXJzOiBmYWxzZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQWRkIGltYWdlXG4gICAgICAgIGNhbnZhcy5hZGQoaW1nSW5zdGFuY2UpO1xuXG4gICAgICAgIG5leHQoaW1nSW5zdGFuY2UpO1xuICAgICAgfTtcblxuICAgICAgY2FudmFzLmFkZCh0aGlzLm9wdGlvbnMuY2lyY2xlKTtcbiAgICAgIGNhbnZhcy5yZW5kZXJBbGwoKTtcbiAgICAgIHNuYXBzaG90LnNyYyA9IGNhbnZhcy50b0RhdGFVUkwoKTtcbiAgICB9LFxuICB9KTtcblxuICBEYXJrcm9vbS5wbHVnaW5zLmNpcmNsZSA9IERhcmtyb29tLlBsdWdpbi5leHRlbmQoe1xuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgIGNvbnN0IGJ1dHRvbkdyb3VwID0gdGhpcy5kYXJrcm9vbS50b29sYmFyLmNyZWF0ZUJ1dHRvbkdyb3VwKCk7XG5cbiAgICAgIHRoaXMuY2lyY2xlQnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcbiAgICAgICAgaW1hZ2U6IFwiY2lyY2xlXCIsXG4gICAgICAgIHRvb2x0aXA6IFwiY2lyY2xlXCIsXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMub24oXCJtb3VzZTpkb3duXCIsIHRoaXMub25Nb3VzZURvd24uYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbihcIm1vdXNlOm1vdmVcIiwgdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLm9uKFwibW91c2U6dXBcIiwgdGhpcy5oYW5kbGVNb3VzZVVwLmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5jaXJjbGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMub25DbGljay5iaW5kKHRoaXMpKTtcbiAgICB9LFxuXG4gICAgY2xlYXIoKSB7XG4gICAgICB0aGlzLmNpcmNsZUJ1dHRvbi5hY3RpdmUoZmFsc2UpO1xuICAgICAgaGFzRm9jdXMgPSB0cnVlO1xuICAgICAgaXNEb3duID0gZmFsc2U7XG4gICAgfSxcblxuICAgIG9uQ2xpY2soKSB7XG4gICAgICBpZiAoIWhhc0ZvY3VzKSB7XG4gICAgICAgIHRoaXMuY2lyY2xlQnV0dG9uLmFjdGl2ZShmYWxzZSk7XG4gICAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLmRlZmF1bHRDdXJzb3IgPSBcImRlZmF1bHRcIjtcbiAgICAgICAgaGFzRm9jdXMgPSB0cnVlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmRhcmtyb29tLmNsZWFyRm9jdXMoXCJjaXJjbGVcIik7XG4gICAgICB0aGlzLmNpcmNsZUJ1dHRvbi5hY3RpdmUodHJ1ZSk7XG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5kZWZhdWx0Q3Vyc29yID0gXCJjcm9zc2hhaXJcIjtcbiAgICAgIGhhc0ZvY3VzID0gZmFsc2U7XG4gICAgfSxcblxuICAgIG9uTW91c2VEb3duKGV2ZW50KSB7XG4gICAgICBldmVudC5lLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLmlzRG93biA9IHRydWU7XG4gICAgICBpZiAoaGFzRm9jdXMpIHJldHVybjtcbiAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xuICAgICAgaXNEb3duID0gdHJ1ZTtcbiAgICAgIGNvbnN0IHBvaW50ZXIgPSBjYW52YXMuZ2V0UG9pbnRlcihldmVudC5lKTtcbiAgICAgIG9yaWdYID0gcG9pbnRlci54O1xuICAgICAgb3JpZ1kgPSBwb2ludGVyLnk7XG4gICAgICBlbGxpcCA9IG5ldyBmYWJyaWMuRWxsaXBzZSh7XG4gICAgICAgIGxlZnQ6IHBvaW50ZXIueCxcbiAgICAgICAgdG9wOiBwb2ludGVyLnksXG4gICAgICAgIHN0cm9rZTogXCJibGFja1wiLFxuICAgICAgICBmaWxsOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgIHN0cm9rZVdpZHRoOiBcIjRcIixcbiAgICAgICAgcng6IDAsXG4gICAgICAgIHJ5OiAwLFxuICAgICAgfSk7XG4gICAgICBjYW52YXMuYWRkKGVsbGlwKTtcbiAgICB9LFxuXG4gICAgb25Nb3VzZU1vdmUoZXZlbnQpIHtcbiAgICAgIGlmICghdGhpcy5pc0Rvd24pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGlzRG93biAmJiBlbGxpcCkge1xuICAgICAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoXCJjaXJjbGU6dXBkYXRlXCIpO1xuICAgICAgICBjb25zdCBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcbiAgICAgICAgY29uc3QgcG9pbnRlciA9IGNhbnZhcy5nZXRQb2ludGVyKGV2ZW50LmUpO1xuXG4gICAgICAgIGlmIChvcmlnWCA+IHBvaW50ZXIueCkge1xuICAgICAgICAgIGVsbGlwLnNldCh7XG4gICAgICAgICAgICBsZWZ0OiBNYXRoLmFicyhwb2ludGVyLngpLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9yaWdZID4gcG9pbnRlci55KSB7XG4gICAgICAgICAgZWxsaXAuc2V0KHtcbiAgICAgICAgICAgIHRvcDogTWF0aC5hYnMocG9pbnRlci55KSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsbGlwLnNldCh7XG4gICAgICAgICAgcng6IE1hdGguYWJzKG9yaWdYIC0gcG9pbnRlci54KSAvIDIsXG4gICAgICAgIH0pO1xuICAgICAgICBlbGxpcC5zZXQoe1xuICAgICAgICAgIHJ5OiBNYXRoLmFicyhvcmlnWSAtIHBvaW50ZXIueSkgLyAyLFxuICAgICAgICB9KTtcblxuICAgICAgICBlbGxpcC5zZXRDb29yZHMoKTtcbiAgICAgICAgY2FudmFzLnJlbmRlckFsbCgpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBoYW5kbGVNb3VzZVVwKCkge1xuICAgICAgaWYgKGhhc0ZvY3VzKSB7IHJldHVybjsgfVxuICAgICAgdGhpcy5pc0Rvd24gPSBmYWxzZTtcbiAgICAgIGVsbGlwLmxlZnQgLT0gdGhpcy5kYXJrcm9vbS5vcHRpb25zLmxlZnQ7XG4gICAgICBlbGxpcC50b3AgLT0gdGhpcy5kYXJrcm9vbS5vcHRpb25zLnRvcDtcbiAgICAgIHRoaXMuZGFya3Jvb20uYXBwbHlUcmFuc2Zvcm1hdGlvbihuZXcgQ2lyY2xlKHtcbiAgICAgICAgY2lyY2xlOiBlbGxpcCxcbiAgICAgIH0pKTtcbiAgICB9LFxuICB9KTtcbn0oKSk7XG4iLCIoZnVuY3Rpb24gKCkge1xuICBjb25zdCBtYXhab29tID0gMjtcbiAgbGV0IG1pblpvb207XG4gIGNvbnN0IHN0YXRlcyA9IHtcbiAgICBwYW5BY3RpdmU6IGZhbHNlLFxuICAgIHBhbm5pbmc6IGZhbHNlLFxuICAgIHJlYWxQYW46IG51bGwsXG4gIH07XG4gIGxldCBvcmlnWDtcbiAgbGV0IG9yaWdZO1xuXG4gIERhcmtyb29tLnBsdWdpbnMuem9vbSA9IERhcmtyb29tLlBsdWdpbi5leHRlbmQoe1xuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgIGNvbnN0IGJ1dHRvbkdyb3VwID0gdGhpcy5kYXJrcm9vbS50b29sYmFyLmNyZWF0ZUJ1dHRvbkdyb3VwKCk7XG5cbiAgICAgIHRoaXMuem9vbUluQnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcbiAgICAgICAgaW1hZ2U6IFwiem9vbS1pblwiLFxuICAgICAgICB0aXRsZTogXCJ6b29tIGluXCIsXG4gICAgICB9KTtcblxuICAgICAgdGhpcy56b29tT3V0QnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcbiAgICAgICAgaW1hZ2U6IFwiem9vbS1vdXRcIixcbiAgICAgICAgdGl0bGU6IFwiem9vbSBvdXRcIixcbiAgICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5wYW4gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xuICAgICAgICBpbWFnZTogXCJoYW5kXCIsXG4gICAgICAgIGRpc2FibGVkOiB0cnVlLFxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuem9vbUluQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnpvb21Jbi5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMuem9vbU91dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy56b29tT3V0LmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5wYW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMub25QYW4uYmluZCh0aGlzKSk7XG4gICAgICBtaW5ab29tID0gdGhpcy5kYXJrcm9vbS5jYW52YXMuZ2V0Wm9vbSgpO1xuICAgIH0sXG5cbiAgICBjbGVhcigpIHtcbiAgICAgIHN0YXRlcy5wYW5BY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMucGFuLmFjdGl2ZShmYWxzZSk7XG4gICAgICBzdGF0ZXMucGFubmluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMuZGVmYXVsdEN1cnNvciA9IFwiZGVmYXVsdFwiO1xuICAgICAgdGhpcy5yZXN0b3JlWm9vbVBhbigpO1xuICAgIH0sXG5cbiAgICBvblBhbigpIHtcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBzdGF0ZXMucGFuQWN0aXZlKSB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGFya3Jvb20uY2xlYXJGb2N1cyhcInpvb21cIik7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xuICAgICAgICBjYW52YXMub24oXCJtb3VzZTpkb3duXCIsIHRoaXMucGFuRW50ZXIuYmluZCh0aGlzKSk7XG4gICAgICAgIGNhbnZhcy5vbihcIm1vdXNlOnVwXCIsIHRoaXMucGFuRXhpdC5iaW5kKHRoaXMpKTtcbiAgICAgICAgY2FudmFzLm9uKFwibW91c2U6bW92ZVwiLCB0aGlzLl9wYW4uYmluZCh0aGlzKSk7XG4gICAgICAgIGNhbnZhcy5kZWZhdWx0Q3Vyc29yID0gXCJtb3ZlXCI7XG4gICAgICAgIHN0YXRlcy5wYW5BY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnBhbi5hY3RpdmUodHJ1ZSk7XG4gICAgICB9XG4gICAgfSxcblxuXG4gICAgcGFuRW50ZXIoZXZlbnQpIHtcbiAgICAgIGlmIChzdGF0ZXMucGFuQWN0aXZlKSB7XG4gICAgICAgIHN0YXRlcy5wYW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgb3JpZ1ggPSBldmVudC5lLnNjcmVlblggfHwgZXZlbnQuZS50b3VjaGVzWzBdLnNjcmVlblg7XG4gICAgICAgIG9yaWdZID0gZXZlbnQuZS5zY3JlZW5ZIHx8IGV2ZW50LmUudG91Y2hlc1swXS5zY3JlZW5ZO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBfcGFuKGV2ZW50KSB7XG4gICAgICBldmVudC5lLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcbiAgICAgIGlmIChzdGF0ZXMucGFubmluZyAmJiBldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQuZS50b3VjaGVzKSB7XG4gICAgICAgICAgY29uc3QgdG91Y2hlcyA9IGV2ZW50LmUudG91Y2hlcztcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvdWNoZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhID0ge1xuICAgICAgICAgICAgICB4OiAodG91Y2hlc1tpXS5zY3JlZW5YIC0gb3JpZ1gpLFxuICAgICAgICAgICAgICB5OiAodG91Y2hlc1tpXS5zY3JlZW5ZIC0gb3JpZ1kpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG9yaWdYID0gdG91Y2hlc1tpXS5zY3JlZW5YO1xuICAgICAgICAgICAgb3JpZ1kgPSB0b3VjaGVzW2ldLnNjcmVlblk7XG4gICAgICAgICAgICB0aGlzLmRvUGFuKGRlbHRhKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgZGVsdGEgPSB7XG4gICAgICAgICAgICB4OiAoZXZlbnQuZS5zY3JlZW5YIC0gb3JpZ1gpLFxuICAgICAgICAgICAgeTogKGV2ZW50LmUuc2NyZWVuWSAtIG9yaWdZKSxcbiAgICAgICAgICB9O1xuICAgICAgICAgIG9yaWdYID0gZXZlbnQuZS5zY3JlZW5YO1xuICAgICAgICAgIG9yaWdZID0gZXZlbnQuZS5zY3JlZW5ZO1xuICAgICAgICAgIHRoaXMuZG9QYW4oZGVsdGEpO1xuICAgICAgICB9XG4gICAgICAgIGNhbnZhcy5yZW5kZXJBbGwoKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcGFuRXhpdCgpIHtcbiAgICAgIGlmIChzdGF0ZXMucGFuQWN0aXZlKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmRhcmtyb29tLm9wdGlvbnM7XG4gICAgICAgIGNvbnN0IGltYWdlID0gdGhpcy5kYXJrcm9vbS5pbWFnZTtcbiAgICAgICAgc3RhdGVzLnBhbm5pbmcgPSBmYWxzZTtcbiAgICAgICAgb3B0aW9ucy5sZWZ0ID0gaW1hZ2UubGVmdDtcbiAgICAgICAgb3B0aW9ucy50b3AgPSBpbWFnZS50b3A7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGRvUGFuKGRlbHRhKSB7XG4gICAgICBjb25zdCBpbWFnZSA9IHRoaXMuZGFya3Jvb20uaW1hZ2U7XG4gICAgICB0aGlzLmRlbHRhID0gdGhpcy5jb25zdHJhaW5QYW4oZGVsdGEpO1xuICAgICAgaW1hZ2UubGVmdCArPSBkZWx0YS54O1xuICAgICAgaW1hZ2UudG9wICs9IGRlbHRhLnk7XG4gICAgICBpbWFnZS5zZXRDb29yZHMoKTtcbiAgICAgIHN0YXRlcy5yZWFsUGFuID0ge1xuICAgICAgICB4OiBpbWFnZS5vQ29vcmRzLnRsLngsXG4gICAgICAgIHk6IGltYWdlLm9Db29yZHMudGwueSxcbiAgICAgIH07XG4gICAgfSxcblxuICAgIGNvbnN0cmFpblBhbihkZWx0YSkge1xuICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XG4gICAgICBjb25zdCBpbWFnZSA9IHRoaXMuZGFya3Jvb20uaW1hZ2U7XG4gICAgICBjb25zdCB0bCA9IGltYWdlLm9Db29yZHMudGw7IC8vIHRvcCBsZWZ0IGNvcm5lclxuICAgICAgY29uc3QgYnIgPSBpbWFnZS5vQ29vcmRzLmJyOyAvLyBib3R0b20gcmlnaHQgY29ybmVyXG4gICAgICBpZiAoZGVsdGEueCA+IDApIHtcbiAgICAgICAgZGVsdGEueCA9ICgodGwueCArIGRlbHRhLngpID4gMCkgPyAwIDogTWF0aC5mbG9vcihkZWx0YS54KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlbHRhLnggPSBNYXRoLmNlaWwoZGVsdGEueCk7XG4gICAgICAgIGlmICgoTWF0aC5jZWlsKGJyLngpICsgZGVsdGEueCkgPCBjYW52YXMud2lkdGgpIHtcbiAgICAgICAgICBkZWx0YS54ID0gMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGRlbHRhLnkgPiAwKSB7XG4gICAgICAgIGRlbHRhLnkgPSAoKHRsLnkgKyBkZWx0YS55KSA+IDApID8gMCA6IE1hdGguZmxvb3IoZGVsdGEueSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWx0YS55ID0gTWF0aC5jZWlsKGRlbHRhLnkpO1xuICAgICAgICBpZiAoKE1hdGguY2VpbChici55KSArIGRlbHRhLnkpIDwgY2FudmFzLmhlaWdodCkge1xuICAgICAgICAgIGRlbHRhLnkgPSAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZGVsdGE7XG4gICAgfSxcblxuICAgIHJlc3RvcmVab29tUGFuKCkge1xuICAgICAgaWYgKHN0YXRlcy5sYXN0U2NhbGUgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLmRhcmtyb29tLmltYWdlLnNjYWxlKHN0YXRlcy5sYXN0U2NhbGUpO1xuICAgICAgICBpZiAoc3RhdGVzLnJlYWxQYW4gIT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuZG9QYW4oc3RhdGVzLnJlYWxQYW4pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHpvb21JbigpIHtcbiAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xuICAgICAgaWYgKGNhbnZhcy5nZXRab29tKCkgPD0gbWF4Wm9vbSkge1xuICAgICAgICBjYW52YXMuc2V0Wm9vbShjYW52YXMuZ2V0Wm9vbSgpICogMS4xKTtcbiAgICAgICAgY2FudmFzLnJlbmRlckFsbCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5vblBhbigpO1xuICAgICAgdGhpcy51cGRhdGVCdXR0b25zKCk7XG4gICAgfSxcblxuICAgIHpvb21PdXQoKSB7XG4gICAgICBjb25zdCBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcbiAgICAgIGNvbnN0IGltYWdlID0gdGhpcy5kYXJrcm9vbS5pbWFnZTtcbiAgICAgIGlmIChjYW52YXMuZ2V0Wm9vbSgpID4gbWluWm9vbSkge1xuICAgICAgICBjYW52YXMuc2V0Wm9vbShjYW52YXMuZ2V0Wm9vbSgpIC8gMS4xKTtcbiAgICAgICAgaWYgKHRoaXMuZGFya3Jvb20uaW1hZ2Uub0Nvb3Jkcy5ici54IDwgdGhpcy5kYXJrcm9vbS5jYW52YXMud2lkdGgpIHtcbiAgICAgICAgICBjb25zdCBuZXdMZWZ0ID0gTWF0aC5jZWlsKHRoaXMuZGFya3Jvb20uY2FudmFzLndpZHRoIC0gdGhpcy5kYXJrcm9vbS5pbWFnZS5vQ29vcmRzLmJyLngpO1xuICAgICAgICAgIGltYWdlLmxlZnQgKz0gbmV3TGVmdDtcbiAgICAgICAgICB0aGlzLmRhcmtyb29tLm9wdGlvbnMubGVmdCA9IHRoaXMuZGFya3Jvb20ub3B0aW9ucy5sZWZ0ICsgbmV3TGVmdDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5kYXJrcm9vbS5pbWFnZS5vQ29vcmRzLmJyLnkgPCB0aGlzLmRhcmtyb29tLmNhbnZhcy5oZWlnaHQpIHtcbiAgICAgICAgICBjb25zdCBuZXdUb3AgPSBNYXRoLmNlaWwodGhpcy5kYXJrcm9vbS5jYW52YXMuaGVpZ2h0IC0gdGhpcy5kYXJrcm9vbS5pbWFnZS5vQ29vcmRzLmJyLnkpO1xuICAgICAgICAgIGltYWdlLnRvcCArPSBuZXdUb3A7XG4gICAgICAgICAgdGhpcy5kYXJrcm9vbS5vcHRpb25zLnRvcCA9IHRoaXMuZGFya3Jvb20ub3B0aW9ucy50b3AgKyBuZXdUb3A7XG4gICAgICAgIH1cbiAgICAgICAgaW1hZ2Uuc2V0Q29vcmRzKCk7XG4gICAgICAgIGNhbnZhcy5yZW5kZXJBbGwoKTtcbiAgICAgICAgaWYgKGNhbnZhcy5nZXRab29tKCkgPj0gbWluWm9vbSkge1xuICAgICAgICAgIHRoaXMub25QYW4oKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZUJ1dHRvbnMoKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgdXBkYXRlQnV0dG9ucygpIHtcbiAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xuICAgICAgY29uc3Qgc2hvdWxkRGlzYWJsZU1pblpvb20gPSBjYW52YXMuZ2V0Wm9vbSgpIDw9IG1pblpvb207XG4gICAgICBjb25zdCBzaG91bGREaXNhYmxlTWF4Wm9vb20gPSBjYW52YXMuZ2V0Wm9vbSgpID49IG1heFpvb207XG4gICAgICBjb25zdCBzaG91bGRFbmFibGVQYW4gPSBjYW52YXMuZ2V0Wm9vbSgpID4gbWluWm9vbTtcbiAgICAgIHRoaXMuem9vbU91dEJ1dHRvbi5kaXNhYmxlKHNob3VsZERpc2FibGVNaW5ab29tKTtcbiAgICAgIHRoaXMuem9vbUluQnV0dG9uLmRpc2FibGUoc2hvdWxkRGlzYWJsZU1heFpvb29tKTtcbiAgICAgIGlmIChzaG91bGREaXNhYmxlTWluWm9vbSkge1xuICAgICAgICB0aGlzLmRhcmtyb29tLm9wdGlvbnMubGVmdCA9IDA7XG4gICAgICAgIHRoaXMuZGFya3Jvb20ub3B0aW9ucy50b3AgPSAwO1xuICAgICAgICB0aGlzLnBhbi5hY3RpdmUoZmFsc2UpO1xuICAgICAgICB0aGlzLnBhbi5kaXNhYmxlKHRydWUpO1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzaG91bGRFbmFibGVQYW4pIHtcbiAgICAgICAgdGhpcy5wYW4uZGlzYWJsZShmYWxzZSk7XG4gICAgICB9XG4gICAgfSxcbiAgfSk7XG59KCkpO1xuIiwiKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG5EYXJrcm9vbS5wbHVnaW5zWydzYXZlJ10gPSBEYXJrcm9vbS5QbHVnaW4uZXh0ZW5kKHtcblxuICBkZWZhdWx0czoge1xuICAgIGNhbGxiYWNrOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZGFya3Jvb20uc2VsZkRlc3Ryb3koKTtcbiAgICB9XG4gIH0sXG5cbiAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gSW5pdGlhbGl6ZURhcmtyb29tU2F2ZVBsdWdpbigpIHtcbiAgICB2YXIgYnV0dG9uR3JvdXAgPSB0aGlzLmRhcmtyb29tLnRvb2xiYXIuY3JlYXRlQnV0dG9uR3JvdXAoKTtcblxuICAgIHRoaXMuZGVzdHJveUJ1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XG4gICAgICBpbWFnZTogJ3NhdmUnXG4gICAgfSk7XG5cbiAgICB0aGlzLmRlc3Ryb3lCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9wdGlvbnMuY2FsbGJhY2suYmluZCh0aGlzKSk7XG4gIH0sXG59KTtcblxufSkoKTtcbiJdfQ==
