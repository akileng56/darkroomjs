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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3RzdHJhcC5qcyIsImRhcmtyb29tLmpzIiwicGx1Z2luLmpzIiwidHJhbnNmb3JtYXRpb24uanMiLCJ1aS5qcyIsInV0aWxzLmpzIiwiZGFya3Jvb20uaGlzdG9yeS5qcyIsImRhcmtyb29tLnJvdGF0ZS5qcyIsImRhcmtyb29tLmNyb3AuanMiLCJkYXJrcm9vbS5wZW5jaWwuanMiLCJkYXJrcm9vbS5yZWN0YW5nbGUuanMiLCJkYXJrcm9vbS50ZXh0LmpzIiwiZGFya3Jvb20uY2lyY2xlLmpzIiwiem9vbS5qcyIsImRhcmtyb29tLnNhdmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0NwWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDdkpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0N4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0M5ckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQ3JTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQ2hKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0NsTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0M3SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDak5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImRhcmtyb29tLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBJbmplY3QgU1ZHIGljb25zIGludG8gdGhlIERPTVxudmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmVsZW1lbnQuaWQgPSAnZGFya3Jvb20taWNvbnMnO1xuZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAwO1xuZWxlbWVudC5zdHlsZS53aWR0aCA9IDA7XG5lbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbmVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuZWxlbWVudC5pbm5lckhUTUwgPSAnPCEtLSBpbmplY3Q6c3ZnIC0tPjwhLS0gZW5kaW5qZWN0IC0tPic7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXG59KSgpO1xuIiwiKGZ1bmN0aW9uICgpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgd2luZG93LkRhcmtyb29tID0gRGFya3Jvb207XG5cbiAgLy8gQ29yZSBvYmplY3Qgb2YgRGFya3Jvb21KUy5cbiAgLy8gQmFzaWNhbGx5IGl0J3MgYSBzaW5nbGUgb2JqZWN0LCBpbnN0YW5jaWFibGUgdmlhIGFuIGVsZW1lbnRcbiAgLy8gKGl0IGNvdWxkIGJlIGEgQ1NTIHNlbGVjdG9yIG9yIGEgRE9NIGVsZW1lbnQpLCBzb21lIGN1c3RvbSBvcHRpb25zLFxuICAvLyBhbmQgYSBsaXN0IG9mIHBsdWdpbiBvYmplY3RzIChvciBub25lIHRvIHVzZSBkZWZhdWx0IG9uZXMpLlxuICBmdW5jdGlvbiBEYXJrcm9vbShlbGVtZW50LCBvcHRpb25zLCBwbHVnaW5zKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucywgcGx1Z2lucyk7XG4gIH1cblxuICAvLyBDcmVhdGUgYW4gZW1wdHkgbGlzdCBvZiBwbHVnaW4gb2JqZWN0cywgd2hpY2ggd2lsbCBiZSBmaWxsZWQgYnlcbiAgLy8gb3RoZXIgcGx1Z2luIHNjcmlwdHMuIFRoaXMgaXMgdGhlIGRlZmF1bHQgcGx1Z2luIGxpc3QgaWYgbm9uZSBpc1xuICAvLyBzcGVjaWZpZWQgaW4gRGFya3Jvb20nc3MgY29uc3RydWN0b3IuXG4gIERhcmtyb29tLnBsdWdpbnMgPSBbXTtcblxuICBEYXJrcm9vbS5wcm90b3R5cGUgPSB7XG4gICAgLy8gUmVmZXJlbmNlIHRvIHRoZSBtYWluIGNvbnRhaW5lciBlbGVtZW50XG4gICAgY29udGFpbmVyRWxlbWVudDogbnVsbCxcblxuICAgIC8vIFJlZmVyZW5jZSB0byB0aGUgRmFicmljIGNhbnZhcyBvYmplY3RcbiAgICBjYW52YXM6IG51bGwsXG5cbiAgICAvLyBSZWZlcmVuY2UgdG8gdGhlIEZhYnJpYyBpbWFnZSBvYmplY3RcbiAgICBpbWFnZTogbnVsbCxcblxuICAgIC8vIFJlZmVyZW5jZSB0byB0aGUgRmFicmljIHNvdXJjZSBjYW52YXMgb2JqZWN0XG4gICAgc291cmNlQ2FudmFzOiBudWxsLFxuXG4gICAgLy8gUmVmZXJlbmNlIHRvIHRoZSBGYWJyaWMgc291cmNlIGltYWdlIG9iamVjdFxuICAgIHNvdXJjZUltYWdlOiBudWxsLFxuXG4gICAgLy8gVHJhY2sgb2YgdGhlIG9yaWdpbmFsIGltYWdlIGVsZW1lbnRcbiAgICBvcmlnaW5hbEltYWdlRWxlbWVudDogbnVsbCxcblxuICAgIC8vIFN0YWNrIG9mIHRyYW5zZm9ybWF0aW9ucyB0byBhcHBseSB0byB0aGUgaW1hZ2Ugc291cmNlXG4gICAgdHJhbnNmb3JtYXRpb25zOiBbXSxcblxuICAgIC8vIERlZmF1bHQgb3B0aW9uc1xuICAgIGRlZmF1bHRzOiB7XG4gICAgICAvLyBDYW52YXMgcHJvcGVydGllcyAoZGltZW5zaW9uLCByYXRpbywgY29sb3IpXG4gICAgICBtaW5XaWR0aDogbnVsbCxcbiAgICAgIG1pbkhlaWdodDogbnVsbCxcbiAgICAgIG1heFdpZHRoOiBudWxsLFxuICAgICAgbWF4SGVpZ2h0OiBudWxsLFxuICAgICAgcmF0aW86IG51bGwsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgdG9wOiAwLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIixcblxuICAgICAgLy8gUGx1Z2lucyBvcHRpb25zXG4gICAgICBwbHVnaW5zOiB7fSxcblxuICAgICAgLy8gUG9zdC1pbml0aWFsaXNhdGlvbiBjYWxsYmFja1xuICAgICAgaW5pdGlhbGl6ZSAoKSB7IC8qIG5vb3AgKi8gfVxuICAgIH0sXG5cbiAgICAvLyBMaXN0IG9mIHRoZSBpbnN0YW5jaWVkIHBsdWdpbnNcbiAgICBwbHVnaW5zOiB7fSxcblxuICAgIC8vIFRoaXMgb3B0aW9ucyBhcmUgYSBtZXJnZSBiZXR3ZWVuIGBkZWZhdWx0c2AgYW5kIHRoZSBvcHRpb25zIHBhc3NlZFxuICAgIC8vIHRocm91Z2ggdGhlIGNvbnN0cnVjdG9yXG4gICAgb3B0aW9uczoge30sXG5cbiAgICBjb25zdHJ1Y3RvciAoZWxlbWVudCwgb3B0aW9ucywgcGx1Z2lucykge1xuICAgICAgdGhpcy5vcHRpb25zID0gRGFya3Jvb20uVXRpbHMuZXh0ZW5kKG9wdGlvbnMsIHRoaXMuZGVmYXVsdHMpO1xuXG4gICAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKVxuICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50KTtcbiAgICAgIGlmIChudWxsID09PSBlbGVtZW50KVxuICAgICAgICByZXR1cm47XG5cbiAgICAgIHZhciBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBJbml0aWFsaXplIHRoZSBET00vRmFicmljIGVsZW1lbnRzXG4gICAgICAgIHRoaXMuX2luaXRpYWxpemVET00oZWxlbWVudCk7XG4gICAgICAgIHRoaXMuX2luaXRpYWxpemVJbWFnZSgpO1xuXG4gICAgICAgIC8vIFRoZW4gaW5pdGlhbGl6ZSB0aGUgcGx1Z2luc1xuICAgICAgICB0aGlzLl9pbml0aWFsaXplUGx1Z2lucyhEYXJrcm9vbS5wbHVnaW5zKTtcblxuICAgICAgICAvLyBQdWJsaWMgbWV0aG9kIHRvIGFkanVzdCBpbWFnZSBhY2NvcmRpbmcgdG8gdGhlIGNhbnZhc1xuICAgICAgICB0aGlzLnJlZnJlc2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIEV4ZWN1dGUgYSBjdXN0b20gY2FsbGJhY2sgYWZ0ZXIgaW5pdGlhbGl6YXRpb25cbiAgICAgICAgICB0aGlzLm9wdGlvbnMuaW5pdGlhbGl6ZS5iaW5kKHRoaXMpLmNhbGwoKTtcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcblxuICAgICAgfS5iaW5kKHRoaXMpXG5cbiAgICAgIC8vaW1hZ2UuY3Jvc3NPcmlnaW4gPSAnYW5vbnltb3VzJztcbiAgICAgIGltYWdlLnNyYyA9IGVsZW1lbnQuc3JjO1xuICAgIH0sXG5cbiAgICBzZWxmRGVzdHJveSAoKSB7XG4gICAgICB2YXIgY29udGFpbmVyID0gdGhpcy5jb250YWluZXJFbGVtZW50O1xuICAgICAgdmFyIGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICBpbWFnZS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRhaW5lci5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChpbWFnZSwgY29udGFpbmVyKTtcbiAgICAgIH1cblxuICAgICAgaW1hZ2Uuc3JjID0gdGhpcy5zb3VyY2VJbWFnZS50b0RhdGFVUkwoKTtcbiAgICB9LFxuXG4gICAgLy8gQWRkIGFiaWxpdHkgdG8gYXR0YWNoIGV2ZW50IGxpc3RlbmVyIG9uIHRoZSBjb3JlIG9iamVjdC5cbiAgICAvLyBJdCB1c2VzIHRoZSBjYW52YXMgZWxlbWVudCB0byBwcm9jZXNzIGV2ZW50cy5cbiAgICBhZGRFdmVudExpc3RlbmVyIChldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICB2YXIgZWwgPSB0aGlzLmNhbnZhcy5nZXRFbGVtZW50KCk7XG4gICAgICBpZiAoZWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2spO1xuICAgICAgfSBlbHNlIGlmIChlbC5hdHRhY2hFdmVudCkge1xuICAgICAgICBlbC5hdHRhY2hFdmVudCgnb24nICsgZXZlbnROYW1lLCBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXZlbnQgKGV2ZW50TmFtZSkge1xuICAgICAgLy8gVXNlIHRoZSBvbGQgd2F5IG9mIGNyZWF0aW5nIGV2ZW50IHRvIGJlIElFIGNvbXBhdGlibGVcbiAgICAgIC8vIFNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9HdWlkZS9FdmVudHMvQ3JlYXRpbmdfYW5kX3RyaWdnZXJpbmdfZXZlbnRzXG4gICAgICB2YXIgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcbiAgICAgIGV2ZW50LmluaXRFdmVudChldmVudE5hbWUsIHRydWUsIHRydWUpO1xuXG4gICAgICB0aGlzLmNhbnZhcy5nZXRFbGVtZW50KCkuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgfSxcblxuICAgIC8vIEFkanVzdCBpbWFnZSAmIGNhbnZhcyBkaW1lbnNpb24gYWNjb3JkaW5nIHRvIG1pbi9tYXggd2lkdGgvaGVpZ2h0XG4gICAgLy8gYW5kIHJhdGlvIHNwZWNpZmllZCBpbiB0aGUgb3B0aW9ucy5cbiAgICAvLyBUaGlzIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkIGFmdGVyIGVhY2ggaW1hZ2UgdHJhbnNmb3JtYXRpb24uXG4gICAgcmVmcmVzaCAobmV4dCkge1xuICAgICAgdmFyIGNsb25lID0gbmV3IEltYWdlKCk7XG4gICAgICBjbG9uZS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX3JlcGxhY2VDdXJyZW50SW1hZ2UobmV3IGZhYnJpYy5JbWFnZShjbG9uZSkpO1xuXG4gICAgICAgIGlmIChuZXh0KSBuZXh0KCk7XG4gICAgICB9LmJpbmQodGhpcyk7XG4gICAgICBjbG9uZS5zcmMgPSB0aGlzLnNvdXJjZUltYWdlLnRvRGF0YVVSTCgpO1xuICAgIH0sXG5cbiAgICBfcmVwbGFjZUN1cnJlbnRJbWFnZSAobmV3SW1hZ2UpIHtcbiAgICAgIGlmICh0aGlzLmltYWdlKSB7XG4gICAgICAgIHRoaXMuaW1hZ2UucmVtb3ZlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaW1hZ2UgPSBuZXdJbWFnZTtcbiAgICAgIHRoaXMuaW1hZ2Uuc2VsZWN0YWJsZSA9IGZhbHNlO1xuICAgICAgdGhpcy5pbWFnZS5sZWZ0ID0gdGhpcy5vcHRpb25zLmxlZnQ7XG4gICAgICB0aGlzLmltYWdlLnRvcCA9IHRoaXMub3B0aW9ucy50b3A7XG5cbiAgICAgIC8vIEFkanVzdCB3aWR0aCBvciBoZWlnaHQgYWNjb3JkaW5nIHRvIHNwZWNpZmllZCByYXRpb1xuICAgICAgdmFyIHZpZXdwb3J0ID0gRGFya3Jvb20uVXRpbHMuY29tcHV0ZUltYWdlVmlld1BvcnQodGhpcy5pbWFnZSk7XG4gICAgICB2YXIgY2FudmFzV2lkdGggPSB2aWV3cG9ydC53aWR0aDtcbiAgICAgIHZhciBjYW52YXNIZWlnaHQgPSB2aWV3cG9ydC5oZWlnaHQ7XG5cbiAgICAgIC8vIGlmIChudWxsICE9PSB0aGlzLm9wdGlvbnMucmF0aW8pIHtcbiAgICAgIC8vICAgdmFyIGNhbnZhc1JhdGlvID0gK3RoaXMub3B0aW9ucy5yYXRpbztcbiAgICAgIC8vICAgdmFyIGN1cnJlbnRSYXRpbyA9IGNhbnZhc1dpZHRoIC8gY2FudmFzSGVpZ2h0O1xuXG4gICAgICAvLyAgIGlmIChjdXJyZW50UmF0aW8gPiBjYW52YXNSYXRpbykge1xuICAgICAgLy8gICAgIGNhbnZhc0hlaWdodCA9IGNhbnZhc1dpZHRoIC8gY2FudmFzUmF0aW87XG4gICAgICAvLyAgIH0gZWxzZSBpZiAoY3VycmVudFJhdGlvIDwgY2FudmFzUmF0aW8pIHtcbiAgICAgIC8vICAgICBjYW52YXNXaWR0aCA9IGNhbnZhc0hlaWdodCAqIGNhbnZhc1JhdGlvO1xuICAgICAgLy8gICB9XG4gICAgICAvLyB9XG5cbiAgICAgIC8vIC8vIFRoZW4gc2NhbGUgdGhlIGltYWdlIHRvIGZpdCBpbnRvIGRpbWVuc2lvbiBsaW1pdHNcbiAgICAgIC8vIHZhciBzY2FsZU1pbiA9IDE7XG4gICAgICAvLyB2YXIgc2NhbGVNYXggPSAxO1xuICAgICAgLy8gdmFyIHNjYWxlWCA9IDE7XG4gICAgICAvLyB2YXIgc2NhbGVZID0gMTtcblxuICAgICAgLy8gaWYgKG51bGwgIT09IHRoaXMub3B0aW9ucy5tYXhXaWR0aCAmJiB0aGlzLm9wdGlvbnMubWF4V2lkdGggPCBjYW52YXNXaWR0aCkge1xuICAgICAgLy8gICBzY2FsZVggPSAgdGhpcy5vcHRpb25zLm1heFdpZHRoIC8gY2FudmFzV2lkdGg7XG4gICAgICAvLyB9XG4gICAgICAvLyBpZiAobnVsbCAhPT0gdGhpcy5vcHRpb25zLm1heEhlaWdodCAmJiB0aGlzLm9wdGlvbnMubWF4SGVpZ2h0IDwgY2FudmFzSGVpZ2h0KSB7XG4gICAgICAvLyAgIHNjYWxlWSA9ICB0aGlzLm9wdGlvbnMubWF4SGVpZ2h0IC8gY2FudmFzSGVpZ2h0O1xuICAgICAgLy8gfVxuICAgICAgLy8gc2NhbGVNaW4gPSBNYXRoLm1pbihzY2FsZVgsIHNjYWxlWSk7XG5cbiAgICAgIC8vIHNjYWxlWCA9IDE7XG4gICAgICAvLyBzY2FsZVkgPSAxO1xuICAgICAgLy8gaWYgKG51bGwgIT09IHRoaXMub3B0aW9ucy5taW5XaWR0aCAmJiB0aGlzLm9wdGlvbnMubWluV2lkdGggPiBjYW52YXNXaWR0aCkge1xuICAgICAgLy8gICBzY2FsZVggPSAgdGhpcy5vcHRpb25zLm1pbldpZHRoIC8gY2FudmFzV2lkdGg7XG4gICAgICAvLyB9XG4gICAgICAvLyBpZiAobnVsbCAhPT0gdGhpcy5vcHRpb25zLm1pbkhlaWdodCAmJiB0aGlzLm9wdGlvbnMubWluSGVpZ2h0ID4gY2FudmFzSGVpZ2h0KSB7XG4gICAgICAvLyAgIHNjYWxlWSA9ICB0aGlzLm9wdGlvbnMubWluSGVpZ2h0IC8gY2FudmFzSGVpZ2h0O1xuICAgICAgLy8gfVxuICAgICAgLy8gc2NhbGVNYXggPSBNYXRoLm1heChzY2FsZVgsIHNjYWxlWSk7XG5cbiAgICAgIC8vIHZhciBzY2FsZSA9IHNjYWxlTWF4ICogc2NhbGVNaW47IC8vIG9uZSBzaG91bGQgYmUgZXF1YWxzIHRvIDFcblxuICAgICAgLy8gY2FudmFzV2lkdGggKj0gc2NhbGU7XG4gICAgICAvLyBjYW52YXNIZWlnaHQgKj0gc2NhbGU7XG5cbiAgICAgIC8vIEZpbmFsbHkgcGxhY2UgdGhlIGltYWdlIGluIHRoZSBjZW50ZXIgb2YgdGhlIGNhbnZhc1xuICAgICAgLy8gdGhpcy5pbWFnZS5zZXRTY2FsZVgoMSAqIHNjYWxlKTtcbiAgICAgIC8vIHRoaXMuaW1hZ2Uuc2V0U2NhbGVZKDEgKiBzY2FsZSk7XG4gICAgICB0aGlzLmNhbnZhcy5hZGQodGhpcy5pbWFnZSk7XG4gICAgICB0aGlzLmNhbnZhcy5zZXRXaWR0aChjYW52YXNXaWR0aCk7XG4gICAgICB0aGlzLmNhbnZhcy5zZXRIZWlnaHQoY2FudmFzSGVpZ2h0KTtcblxuICAgICAgLy8gUmVzaXplIHRoZSBpbWFnZSB0byBmaXQgdGhlIGNhbnZhc1xuICAgICAgaWYgKHRoaXMuaW1hZ2Uub0Nvb3Jkcy5ici54IDwgdGhpcy5jYW52YXMud2lkdGgpIHtcbiAgICAgICAgdGhpcy5pbWFnZS5sZWZ0ID0gdGhpcy5pbWFnZS5sZWZ0ICsgTWF0aC5jZWlsKHRoaXMuY2FudmFzLndpZHRoIC0gdGhpcy5pbWFnZS5vQ29vcmRzLmJyLngpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuaW1hZ2Uub0Nvb3Jkcy5ici55IDwgdGhpcy5jYW52YXMuaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuaW1hZ2UudG9wID0gdGhpcy5pbWFnZS50b3AgKyBNYXRoLmNlaWwodGhpcy5jYW52YXMuaGVpZ2h0IC0gdGhpcy5pbWFnZS5vQ29vcmRzLmJyLnkpO1xuICAgICAgfVxuICAgICAgLy8gdGhpcy5jYW52YXMuY2VudGVyT2JqZWN0KHRoaXMuaW1hZ2UpO1xuICAgICAgdGhpcy5pbWFnZS5zZXRDb29yZHMoKTtcbiAgICB9LFxuXG4gICAgLy8gQXBwbHkgdGhlIHRyYW5zZm9ybWF0aW9uIG9uIHRoZSBjdXJyZW50IGltYWdlIGFuZCBzYXZlIGl0IGluIHRoZVxuICAgIC8vIHRyYW5zZm9ybWF0aW9ucyBzdGFjayAoaW4gb3JkZXIgdG8gcmVjb25zdGl0dXRlIHRoZSBwcmV2aW91cyBzdGF0ZXNcbiAgICAvLyBvZiB0aGUgaW1hZ2UpLlxuICAgIGFwcGx5VHJhbnNmb3JtYXRpb24gKHRyYW5zZm9ybWF0aW9uKSB7XG4gICAgICB0aGlzLnRyYW5zZm9ybWF0aW9ucy5wdXNoKHRyYW5zZm9ybWF0aW9uKTtcblxuICAgICAgdHJhbnNmb3JtYXRpb24uYXBwbHlUcmFuc2Zvcm1hdGlvbihcbiAgICAgICAgdGhpcy5zb3VyY2VDYW52YXMsXG4gICAgICAgIHRoaXMuc291cmNlSW1hZ2UsXG4gICAgICAgIHRoaXMuX3Bvc3RUcmFuc2Zvcm1hdGlvbi5iaW5kKHRoaXMpXG4gICAgICApO1xuICAgIH0sXG5cbiAgICBfcG9zdFRyYW5zZm9ybWF0aW9uIChuZXdJbWFnZSkge1xuICAgICAgaWYgKG5ld0ltYWdlKVxuICAgICAgICB0aGlzLnNvdXJjZUltYWdlID0gbmV3SW1hZ2U7XG5cbiAgICAgIHRoaXMucmVmcmVzaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnY29yZTp0cmFuc2Zvcm1hdGlvbicpO1xuICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9LFxuXG4gICAgLy8gSW5pdGlhbGl6ZSBpbWFnZSBmcm9tIG9yaWdpbmFsIGVsZW1lbnQgcGx1cyByZS1hcHBseSBldmVyeVxuICAgIC8vIHRyYW5zZm9ybWF0aW9ucy5cbiAgICByZWluaXRpYWxpemVJbWFnZSAoKSB7XG4gICAgICB0aGlzLnNvdXJjZUltYWdlLnJlbW92ZSgpO1xuICAgICAgdGhpcy5faW5pdGlhbGl6ZUltYWdlKCk7XG4gICAgICB0aGlzLl9wb3BUcmFuc2Zvcm1hdGlvbih0aGlzLnRyYW5zZm9ybWF0aW9ucy5zbGljZSgpKVxuICAgIH0sXG5cbiAgICBfcG9wVHJhbnNmb3JtYXRpb24gKHRyYW5zZm9ybWF0aW9ucykge1xuICAgICAgaWYgKDAgPT09IHRyYW5zZm9ybWF0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdjb3JlOnJlaW5pdGlhbGl6ZWQnKTtcbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHRyYW5zZm9ybWF0aW9uID0gdHJhbnNmb3JtYXRpb25zLnNoaWZ0KCk7XG5cbiAgICAgIHZhciBuZXh0ID0gZnVuY3Rpb24gKG5ld0ltYWdlKSB7XG4gICAgICAgIGlmIChuZXdJbWFnZSkgdGhpcy5zb3VyY2VJbWFnZSA9IG5ld0ltYWdlO1xuICAgICAgICB0aGlzLl9wb3BUcmFuc2Zvcm1hdGlvbih0cmFuc2Zvcm1hdGlvbnMpXG4gICAgICB9O1xuXG4gICAgICB0cmFuc2Zvcm1hdGlvbi5hcHBseVRyYW5zZm9ybWF0aW9uKFxuICAgICAgICB0aGlzLnNvdXJjZUNhbnZhcyxcbiAgICAgICAgdGhpcy5zb3VyY2VJbWFnZSxcbiAgICAgICAgbmV4dC5iaW5kKHRoaXMpXG4gICAgICApO1xuICAgIH0sXG5cbiAgICAvLyBDcmVhdGUgdGhlIERPTSBlbGVtZW50cyBhbmQgaW5zdGFuY2lhdGUgdGhlIEZhYnJpYyBjYW52YXMuXG4gICAgLy8gVGhlIGltYWdlIGVsZW1lbnQgaXMgcmVwbGFjZWQgYnkgYSBuZXcgYGRpdmAgZWxlbWVudC5cbiAgICAvLyBIb3dldmVyIHRoZSBvcmlnaW5hbCBpbWFnZSBpcyByZS1pbmplY3RlZCBpbiBvcmRlciB0byBrZWVwIGEgdHJhY2Ugb2YgaXQuXG4gICAgX2luaXRpYWxpemVET00gKGltYWdlRWxlbWVudCkge1xuICAgICAgLy8gQ29udGFpbmVyXG4gICAgICB2YXIgbWFpbkNvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIG1haW5Db250YWluZXJFbGVtZW50LmNsYXNzTmFtZSA9ICdkYXJrcm9vbS1jb250YWluZXInO1xuXG4gICAgICAvLyBUb29sYmFyXG4gICAgICB2YXIgdG9vbGJhckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRvb2xiYXJFbGVtZW50LmNsYXNzTmFtZSA9ICdkYXJrcm9vbS10b29sYmFyJztcbiAgICAgIG1haW5Db250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKHRvb2xiYXJFbGVtZW50KTtcblxuICAgICAgLy8gVmlld3BvcnQgY2FudmFzXG4gICAgICB2YXIgY2FudmFzQ29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY2FudmFzQ29udGFpbmVyRWxlbWVudC5jbGFzc05hbWUgPSAnZGFya3Jvb20taW1hZ2UtY29udGFpbmVyJztcbiAgICAgIHZhciBjYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICBjYW52YXNDb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGNhbnZhc0VsZW1lbnQpO1xuICAgICAgbWFpbkNvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQoY2FudmFzQ29udGFpbmVyRWxlbWVudCk7XG5cbiAgICAgIC8vIFNvdXJjZSBjYW52YXNcbiAgICAgIHZhciBzb3VyY2VDYW52YXNDb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBzb3VyY2VDYW52YXNDb250YWluZXJFbGVtZW50LmNsYXNzTmFtZSA9ICdkYXJrcm9vbS1zb3VyY2UtY29udGFpbmVyJztcbiAgICAgIHNvdXJjZUNhbnZhc0NvbnRhaW5lckVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHZhciBzb3VyY2VDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICBzb3VyY2VDYW52YXNDb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKHNvdXJjZUNhbnZhc0VsZW1lbnQpO1xuICAgICAgbWFpbkNvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQoc291cmNlQ2FudmFzQ29udGFpbmVyRWxlbWVudCk7XG5cbiAgICAgIC8vIE9yaWdpbmFsIGltYWdlXG4gICAgICBpbWFnZUVsZW1lbnQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobWFpbkNvbnRhaW5lckVsZW1lbnQsIGltYWdlRWxlbWVudCk7XG4gICAgICBpbWFnZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIG1haW5Db250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGltYWdlRWxlbWVudCk7XG5cbiAgICAgIC8vIEluc3RhbmNpYXRlIG9iamVjdCBmcm9tIGVsZW1lbnRzXG4gICAgICB0aGlzLmNvbnRhaW5lckVsZW1lbnQgPSBtYWluQ29udGFpbmVyRWxlbWVudDtcbiAgICAgIHRoaXMub3JpZ2luYWxJbWFnZUVsZW1lbnQgPSBpbWFnZUVsZW1lbnQ7XG5cbiAgICAgIHRoaXMudG9vbGJhciA9IG5ldyBEYXJrcm9vbS5VSS5Ub29sYmFyKHRvb2xiYXJFbGVtZW50KTtcblxuICAgICAgdGhpcy5jYW52YXMgPSBuZXcgZmFicmljLkNhbnZhcyhjYW52YXNFbGVtZW50LCB7XG4gICAgICAgIHNlbGVjdGlvbjogZmFsc2UsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5vcHRpb25zLmJhY2tncm91bmRDb2xvclxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuc291cmNlQ2FudmFzID0gbmV3IGZhYnJpYy5DYW52YXMoc291cmNlQ2FudmFzRWxlbWVudCwge1xuICAgICAgICBzZWxlY3Rpb246IGZhbHNlLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3JcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvLyBJbnN0YW5jaWF0ZSB0aGUgRmFicmljIGltYWdlIG9iamVjdC5cbiAgICAvLyBUaGUgaW1hZ2UgaXMgY3JlYXRlZCBhcyBhIHN0YXRpYyBlbGVtZW50IHdpdGggbm8gY29udHJvbCxcbiAgICAvLyB0aGVuIGl0IGlzIGFkZCBpbiB0aGUgRmFicmljIGNhbnZhcyBvYmplY3QuXG4gICAgX2luaXRpYWxpemVJbWFnZSAoKSB7XG4gICAgICB0aGlzLnNvdXJjZUltYWdlID0gbmV3IGZhYnJpYy5JbWFnZSh0aGlzLm9yaWdpbmFsSW1hZ2VFbGVtZW50LCB7XG4gICAgICAgIC8vIFNvbWUgb3B0aW9ucyB0byBtYWtlIHRoZSBpbWFnZSBzdGF0aWNcbiAgICAgICAgc2VsZWN0YWJsZTogZmFsc2UsXG4gICAgICAgIGV2ZW50ZWQ6IGZhbHNlLFxuICAgICAgICBsb2NrTW92ZW1lbnRYOiB0cnVlLFxuICAgICAgICBsb2NrTW92ZW1lbnRZOiB0cnVlLFxuICAgICAgICBsb2NrUm90YXRpb246IHRydWUsXG4gICAgICAgIGxvY2tTY2FsaW5nWDogdHJ1ZSxcbiAgICAgICAgbG9ja1NjYWxpbmdZOiB0cnVlLFxuICAgICAgICBsb2NrVW5pU2NhbGluZzogdHJ1ZSxcbiAgICAgICAgaGFzQ29udHJvbHM6IGZhbHNlLFxuICAgICAgICBoYXNCb3JkZXJzOiBmYWxzZSxcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnNvdXJjZUNhbnZhcy5hZGQodGhpcy5zb3VyY2VJbWFnZSk7XG5cbiAgICAgIC8vIEFkanVzdCB3aWR0aCBvciBoZWlnaHQgYWNjb3JkaW5nIHRvIHNwZWNpZmllZCByYXRpb1xuICAgICAgdmFyIHZpZXdwb3J0ID0gRGFya3Jvb20uVXRpbHMuY29tcHV0ZUltYWdlVmlld1BvcnQodGhpcy5zb3VyY2VJbWFnZSk7XG4gICAgICB2YXIgY2FudmFzV2lkdGggPSB2aWV3cG9ydC53aWR0aDtcbiAgICAgIHZhciBjYW52YXNIZWlnaHQgPSB2aWV3cG9ydC5oZWlnaHQ7XG5cbiAgICAgIHRoaXMuc291cmNlQ2FudmFzLnNldFdpZHRoKGNhbnZhc1dpZHRoKTtcbiAgICAgIHRoaXMuc291cmNlQ2FudmFzLnNldEhlaWdodChjYW52YXNIZWlnaHQpO1xuICAgICAgdGhpcy5zb3VyY2VDYW52YXMuY2VudGVyT2JqZWN0KHRoaXMuc291cmNlSW1hZ2UpO1xuICAgICAgdGhpcy5zb3VyY2VJbWFnZS5zZXRDb29yZHMoKTtcbiAgICB9LFxuXG4gICAgLy8gSW5pdGlhbGl6ZSBldmVyeSBwbHVnaW5zLlxuICAgIC8vIE5vdGUgdGhhdCBwbHVnaW5zIGFyZSBpbnN0YW5jaWF0ZWQgaW4gdGhlIHNhbWUgb3JkZXIgdGhhbiB0aGV5XG4gICAgLy8gYXJlIGRlY2xhcmVkIGluIHRoZSBwYXJhbWV0ZXIgb2JqZWN0LlxuICAgIF9pbml0aWFsaXplUGx1Z2lucyAocGx1Z2lucykge1xuICAgICAgZm9yICh2YXIgbmFtZSBpbiBwbHVnaW5zKSB7XG4gICAgICAgIHZhciBwbHVnaW4gPSBwbHVnaW5zW25hbWVdO1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucy5wbHVnaW5zW25hbWVdO1xuXG4gICAgICAgIC8vIFNldHRpbmcgZmFsc2UgaW50byB0aGUgcGx1Z2luIG9wdGlvbnMgd2lsbCBkaXNhYmxlIHRoZSBwbHVnaW5cbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IGZhbHNlKVxuICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgIC8vIEF2b2lkIGFueSBpc3N1ZXMgd2l0aCBfcHJvdG9fXG4gICAgICAgIGlmICghcGx1Z2lucy5oYXNPd25Qcm9wZXJ0eShuYW1lKSlcbiAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICB0aGlzLnBsdWdpbnNbbmFtZV0gPSBuZXcgcGx1Z2luKHRoaXMsIG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBjbGVhckZvY3VzIChpbnN0YW5jZSkge1xuICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMucGx1Z2lucykge1xuICAgICAgICBpZiAoa2V5ICE9IGluc3RhbmNlKSB7XG4gICAgICAgICAgdGhpcy5wbHVnaW5zW2tleV0uY2xlYXIoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn0oKSk7XG4iLCIoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbkRhcmtyb29tLlBsdWdpbiA9IFBsdWdpbjtcblxuLy8gRGVmaW5lIGEgcGx1Z2luIG9iamVjdC4gVGhpcyBpcyB0aGUgKGFic3RyYWN0KSBwYXJlbnQgY2xhc3Mgd2hpY2hcbi8vIGhhcyB0byBiZSBleHRlbmRlZCBmb3IgZWFjaCBwbHVnaW4uXG5mdW5jdGlvbiBQbHVnaW4oZGFya3Jvb20sIG9wdGlvbnMpIHtcbiAgdGhpcy5kYXJrcm9vbSA9IGRhcmtyb29tO1xuICB0aGlzLm9wdGlvbnMgPSBEYXJrcm9vbS5VdGlscy5leHRlbmQob3B0aW9ucywgdGhpcy5kZWZhdWx0cyk7XG4gIHRoaXMuaW5pdGlhbGl6ZSgpO1xufVxuXG5QbHVnaW4ucHJvdG90eXBlID0ge1xuICBkZWZhdWx0czoge30sXG4gIGluaXRpYWxpemU6IGZ1bmN0aW9uKCkgeyB9LFxuICBjbGVhcjogZnVuY3Rpb24oKSB7IH1cbn1cblxuLy8gSW5zcGlyZWQgYnkgQmFja2JvbmUuanMgZXh0ZW5kIGNhcGFiaWxpdHkuXG5QbHVnaW4uZXh0ZW5kID0gZnVuY3Rpb24ocHJvdG9Qcm9wcykge1xuICB2YXIgcGFyZW50ID0gdGhpcztcbiAgdmFyIGNoaWxkO1xuXG4gIGlmIChwcm90b1Byb3BzICYmIHByb3RvUHJvcHMuaGFzT3duUHJvcGVydHkoJ2NvbnN0cnVjdG9yJykpIHtcbiAgICBjaGlsZCA9IHByb3RvUHJvcHMuY29uc3RydWN0b3I7XG4gIH0gZWxzZSB7XG4gICAgY2hpbGQgPSBmdW5jdGlvbigpeyByZXR1cm4gcGFyZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XG4gIH1cblxuICBEYXJrcm9vbS5VdGlscy5leHRlbmQoY2hpbGQsIHBhcmVudCk7XG5cbiAgdmFyIFN1cnJvZ2F0ZSA9IGZ1bmN0aW9uKCl7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfTtcbiAgU3Vycm9nYXRlLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7XG4gIGNoaWxkLnByb3RvdHlwZSA9IG5ldyBTdXJyb2dhdGU7XG5cbiAgaWYgKHByb3RvUHJvcHMpIERhcmtyb29tLlV0aWxzLmV4dGVuZChjaGlsZC5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuXG4gIGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7XG5cbiAgcmV0dXJuIGNoaWxkO1xufVxuXG59KSgpO1xuIiwiKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG5EYXJrcm9vbS5UcmFuc2Zvcm1hdGlvbiA9IFRyYW5zZm9ybWF0aW9uO1xuXG5mdW5jdGlvbiBUcmFuc2Zvcm1hdGlvbihvcHRpb25zKSB7XG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG59XG5cblRyYW5zZm9ybWF0aW9uLnByb3RvdHlwZSA9IHtcbiAgYXBwbHlUcmFuc2Zvcm1hdGlvbjogZnVuY3Rpb24oaW1hZ2UpIHsgLyogbm8tb3AgKi8gIH1cbn1cblxuLy8gSW5zcGlyZWQgYnkgQmFja2JvbmUuanMgZXh0ZW5kIGNhcGFiaWxpdHkuXG5UcmFuc2Zvcm1hdGlvbi5leHRlbmQgPSBmdW5jdGlvbihwcm90b1Byb3BzKSB7XG4gIHZhciBwYXJlbnQgPSB0aGlzO1xuICB2YXIgY2hpbGQ7XG5cbiAgaWYgKHByb3RvUHJvcHMgJiYgcHJvdG9Qcm9wcy5oYXNPd25Qcm9wZXJ0eSgnY29uc3RydWN0b3InKSkge1xuICAgIGNoaWxkID0gcHJvdG9Qcm9wcy5jb25zdHJ1Y3RvcjtcbiAgfSBlbHNlIHtcbiAgICBjaGlsZCA9IGZ1bmN0aW9uKCl7IHJldHVybiBwYXJlbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfTtcbiAgfVxuXG4gIERhcmtyb29tLlV0aWxzLmV4dGVuZChjaGlsZCwgcGFyZW50KTtcblxuICB2YXIgU3Vycm9nYXRlID0gZnVuY3Rpb24oKXsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9O1xuICBTdXJyb2dhdGUucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTtcbiAgY2hpbGQucHJvdG90eXBlID0gbmV3IFN1cnJvZ2F0ZTtcblxuICBpZiAocHJvdG9Qcm9wcykgRGFya3Jvb20uVXRpbHMuZXh0ZW5kKGNoaWxkLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG5cbiAgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTtcblxuICByZXR1cm4gY2hpbGQ7XG59XG5cbn0pKCk7XG4iLCIoZnVuY3Rpb24gKCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBEYXJrcm9vbS5VSSA9IHtcbiAgICBUb29sYmFyLFxuICAgIEJ1dHRvbkdyb3VwLFxuICAgIEJ1dHRvbixcbiAgICBJbnB1dFxuICB9O1xuXG4gIC8vIFRvb2xiYXIgb2JqZWN0LlxuICBmdW5jdGlvbiBUb29sYmFyKGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG5cbiAgVG9vbGJhci5wcm90b3R5cGUgPSB7XG4gICAgY3JlYXRlQnV0dG9uR3JvdXAob3B0aW9ucykge1xuICAgICAgdmFyIGJ1dHRvbkdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGJ1dHRvbkdyb3VwLmNsYXNzTmFtZSA9IFwiZGFya3Jvb20tYnV0dG9uLWdyb3VwXCI7XG4gICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uR3JvdXApO1xuXG4gICAgICByZXR1cm4gbmV3IEJ1dHRvbkdyb3VwKGJ1dHRvbkdyb3VwKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gQnV0dG9uR3JvdXAgb2JqZWN0LlxuICBmdW5jdGlvbiBCdXR0b25Hcm91cChlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIEJ1dHRvbkdyb3VwLnByb3RvdHlwZSA9IHtcbiAgICBjcmVhdGVCdXR0b24ob3B0aW9ucykge1xuICAgICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICBpbWFnZTogXCJoZWxwXCIsXG4gICAgICAgIHR5cGU6IFwiZGVmYXVsdFwiLFxuICAgICAgICBncm91cDogXCJkZWZhdWx0XCIsXG4gICAgICAgIGhpZGU6IGZhbHNlLFxuICAgICAgICBkaXNhYmxlZDogZmFsc2VcbiAgICAgIH07XG5cbiAgICAgIG9wdGlvbnMgPSBEYXJrcm9vbS5VdGlscy5leHRlbmQob3B0aW9ucywgZGVmYXVsdHMpO1xuXG4gICAgICB2YXIgYnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBidXR0b25FbGVtZW50LnR5cGUgPSBcImJ1dHRvblwiO1xuICAgICAgYnV0dG9uRWxlbWVudC5jbGFzc05hbWUgPSBcImRhcmtyb29tLWJ1dHRvbiBkYXJrcm9vbS1idXR0b24tXCIgKyBvcHRpb25zLnR5cGU7XG4gICAgICBidXR0b25FbGVtZW50LmlubmVySFRNTCA9IFwiPHN2ZyBjbGFzcz1cXFwiZGFya3Jvb20taWNvblxcXCI+PHVzZSB4bGluazpocmVmPVxcXCIjXCIgKyBvcHRpb25zLmltYWdlICsgXCJcXFwiIC8+PC9zdmc+XCI7XG4gICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uRWxlbWVudCk7XG5cbiAgICAgIHZhciBidXR0b24gPSBuZXcgQnV0dG9uKGJ1dHRvbkVsZW1lbnQpO1xuICAgICAgYnV0dG9uLmhpZGUob3B0aW9ucy5oaWRlKTtcbiAgICAgIGJ1dHRvbi5kaXNhYmxlKG9wdGlvbnMuZGlzYWJsZWQpO1xuXG4gICAgICByZXR1cm4gYnV0dG9uO1xuICAgIH0sXG5cbiAgICBjcmVhdGVJbnB1dChvcHRpb25zKSB7XG4gICAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgICAgaW1hZ2U6IFwiaGVscFwiLFxuICAgICAgICB0eXBlOiBcImlucHV0XCIsXG4gICAgICAgIGdyb3VwOiBcImRlZmF1bHRcIixcbiAgICAgICAgaGlkZTogZmFsc2UsXG4gICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgdmFsdWU6IFwiXCJcbiAgICAgIH07XG5cbiAgICAgIG9wdGlvbnMgPSBEYXJrcm9vbS5VdGlscy5leHRlbmQob3B0aW9ucywgZGVmYXVsdHMpO1xuXG4gICAgICB2YXIgaW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgaW5wdXRFbGVtZW50LnR5cGUgPSBcImNvbG9yXCI7XG4gICAgICBpbnB1dEVsZW1lbnQuY2xhc3NOYW1lID0gXCJkYXJrcm9vbS1idXR0b24gZGFya3Jvb20taW5wdXQtXCIgKyBvcHRpb25zLnR5cGU7XG4gICAgICBpbnB1dEVsZW1lbnQuaW5uZXJIVE1MID0gXCI8c3ZnIGNsYXNzPVxcXCJkYXJrcm9vbS1pY29uXFxcIj48dXNlIHhsaW5rOmhyZWY9XFxcIiNcIiArIG9wdGlvbnMuaW1hZ2UgKyBcIlxcXCIgLz48L3N2Zz5cIjtcbiAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChpbnB1dEVsZW1lbnQpO1xuXG4gICAgICB2YXIgaW5wdXQgPSBuZXcgSW5wdXQoaW5wdXRFbGVtZW50KTtcbiAgICAgIGlucHV0LmhpZGUob3B0aW9ucy5oaWRlKTtcbiAgICAgIGlucHV0LmRpc2FibGUob3B0aW9ucy5kaXNhYmxlZCk7XG5cbiAgICAgIHJldHVybiBpbnB1dDtcbiAgICB9XG4gIH07XG5cbiAgLy8gQnV0dG9uIG9iamVjdC5cbiAgZnVuY3Rpb24gQnV0dG9uKGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG5cbiAgLy8gSW5wdXQgb2JqZWN0LlxuICBmdW5jdGlvbiBJbnB1dChlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIEJ1dHRvbi5wcm90b3R5cGUgPSB7XG4gICAgYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyKSB7XG4gICAgICBpZiAodGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lcik7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudC5hdHRhY2hFdmVudCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuYXR0YWNoRXZlbnQoXCJvblwiICsgZXZlbnROYW1lLCBsaXN0ZW5lcik7XG4gICAgICB9XG4gICAgfSxcbiAgICByZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIpIHtcbiAgICAgIGlmICh0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGFjdGl2ZSh2YWx1ZSkge1xuICAgICAgaWYgKHZhbHVlKVxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRhcmtyb29tLWJ1dHRvbi1hY3RpdmVcIik7XG4gICAgICBlbHNlXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZGFya3Jvb20tYnV0dG9uLWFjdGl2ZVwiKTtcbiAgICB9LFxuICAgIGhpZGUodmFsdWUpIHtcbiAgICAgIGlmICh2YWx1ZSlcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkYXJrcm9vbS1idXR0b24taGlkZGVuXCIpO1xuICAgICAgZWxzZVxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRhcmtyb29tLWJ1dHRvbi1oaWRkZW5cIik7XG4gICAgfSxcbiAgICBkaXNhYmxlKHZhbHVlKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuZGlzYWJsZWQgPSAodmFsdWUpID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICBJbnB1dC5wcm90b3R5cGUgPSB7XG4gICAgYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyKSB7XG4gICAgICBpZiAodGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lcik7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudC5hdHRhY2hFdmVudCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuYXR0YWNoRXZlbnQoXCJvblwiICsgZXZlbnROYW1lLCBsaXN0ZW5lcik7XG4gICAgICB9XG4gICAgfSxcbiAgICByZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIpIHtcbiAgICAgIGlmICh0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGFjdGl2ZSh2YWx1ZSkge1xuICAgICAgaWYgKHZhbHVlKVxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRhcmtyb29tLWlucHV0LWFjdGl2ZVwiKTtcbiAgICAgIGVsc2VcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkYXJrcm9vbS1pbnB1dC1hY3RpdmVcIik7XG4gICAgfSxcbiAgICBoaWRlKHZhbHVlKSB7XG4gICAgICBpZiAodmFsdWUpXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZGFya3Jvb20tYnV0dG9uLWhpZGRlblwiKTtcbiAgICAgIGVsc2VcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkYXJrcm9vbS1idXR0b24taGlkZGVuXCIpO1xuICAgIH0sXG4gICAgZGlzYWJsZSh2YWx1ZSkge1xuICAgICAgdGhpcy5lbGVtZW50LmRpc2FibGVkID0gKHZhbHVlKSA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG4gIH07XG59KCkpO1xuIiwiKGZ1bmN0aW9uICgpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgRGFya3Jvb20uVXRpbHMgPSB7XG4gICAgZXh0ZW5kLFxuICAgIGNvbXB1dGVJbWFnZVZpZXdQb3J0XG4gIH07XG5cblxuICAvLyBVdGlsaXR5IG1ldGhvZCB0byBlYXNpbHkgZXh0ZW5kIG9iamVjdHMuXG4gIGZ1bmN0aW9uIGV4dGVuZChiLCBhKSB7XG4gICAgbGV0IHByb3A7XG4gICAgaWYgKGIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGE7XG4gICAgfVxuICAgIGZvciAocHJvcCBpbiBhKSB7XG4gICAgICBpZiAoYS5oYXNPd25Qcm9wZXJ0eShwcm9wKSAmJiBiLmhhc093blByb3BlcnR5KHByb3ApID09PSBmYWxzZSkge1xuICAgICAgICBiW3Byb3BdID0gYVtwcm9wXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGI7XG4gIH1cblxuICBmdW5jdGlvbiBjb21wdXRlSW1hZ2VWaWV3UG9ydChpbWFnZSkge1xuICAgIHJldHVybiB7XG4gICAgICBoZWlnaHQ6IE1hdGguYWJzKGltYWdlLmdldFdpZHRoKCkgKiAoTWF0aC5zaW4oaW1hZ2UuZ2V0QW5nbGUoKSAqIE1hdGguUEkgLyAxODApKSkgKyBNYXRoLmFicyhpbWFnZS5nZXRIZWlnaHQoKSAqIChNYXRoLmNvcyhpbWFnZS5nZXRBbmdsZSgpICogTWF0aC5QSSAvIDE4MCkpKSxcbiAgICAgIHdpZHRoOiBNYXRoLmFicyhpbWFnZS5nZXRIZWlnaHQoKSAqIChNYXRoLnNpbihpbWFnZS5nZXRBbmdsZSgpICogTWF0aC5QSSAvIDE4MCkpKSArIE1hdGguYWJzKGltYWdlLmdldFdpZHRoKCkgKiAoTWF0aC5jb3MoaW1hZ2UuZ2V0QW5nbGUoKSAqIE1hdGguUEkgLyAxODApKSlcbiAgICB9O1xuICB9XG59KCkpO1xuIiwiKGZ1bmN0aW9uICh3aW5kb3csIGRvY3VtZW50LCBEYXJrcm9vbSwgZmFicmljKSB7XG4gIGZhYnJpYy5JbWFnZS5wcm90b3R5cGUuc3Ryb2tlV2lkdGggPSAwO1xuICBEYXJrcm9vbS5wbHVnaW5zLmhpc3RvcnkgPSBEYXJrcm9vbS5QbHVnaW4uZXh0ZW5kKHtcbiAgICB1bmRvVHJhbnNmb3JtYXRpb25zOiBbXSxcblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICB0aGlzLl9pbml0QnV0dG9ucygpO1xuXG4gICAgICB0aGlzLmRhcmtyb29tLmFkZEV2ZW50TGlzdGVuZXIoXCJjb3JlOnRyYW5zZm9ybWF0aW9uXCIsIHRoaXMuX29uVHJhbmZvcm1hdGlvbkFwcGxpZWQuYmluZCh0aGlzKSk7XG4gICAgfSxcblxuICAgIHVuZG8oKSB7XG4gICAgICBpZiAodGhpcy5kYXJrcm9vbS50cmFuc2Zvcm1hdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbGFzdFRyYW5zZm9ybWF0aW9uID0gdGhpcy5kYXJrcm9vbS50cmFuc2Zvcm1hdGlvbnMucG9wKCk7XG4gICAgICB0aGlzLnVuZG9UcmFuc2Zvcm1hdGlvbnMudW5zaGlmdChsYXN0VHJhbnNmb3JtYXRpb24pO1xuXG4gICAgICB0aGlzLmRhcmtyb29tLnJlaW5pdGlhbGl6ZUltYWdlKCk7XG4gICAgICB0aGlzLl91cGRhdGVCdXR0b25zKCk7XG4gICAgfSxcblxuICAgIHJlZG8oKSB7XG4gICAgICBpZiAodGhpcy51bmRvVHJhbnNmb3JtYXRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNhbmNlbFRyYW5zZm9ybWF0aW9uID0gdGhpcy51bmRvVHJhbnNmb3JtYXRpb25zLnNoaWZ0KCk7XG4gICAgICB0aGlzLmRhcmtyb29tLnRyYW5zZm9ybWF0aW9ucy5wdXNoKGNhbmNlbFRyYW5zZm9ybWF0aW9uKTtcblxuICAgICAgdGhpcy5kYXJrcm9vbS5yZWluaXRpYWxpemVJbWFnZSgpO1xuICAgICAgdGhpcy5fdXBkYXRlQnV0dG9ucygpO1xuICAgIH0sXG5cbiAgICBfaW5pdEJ1dHRvbnMoKSB7XG4gICAgICBjb25zdCBidXR0b25Hcm91cCA9IHRoaXMuZGFya3Jvb20udG9vbGJhci5jcmVhdGVCdXR0b25Hcm91cCgpO1xuXG4gICAgICB0aGlzLmJhY2tCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xuICAgICAgICBpbWFnZTogXCJ1bmRvXCIsXG4gICAgICAgIGRpc2FibGVkOiB0cnVlXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5mb3J3YXJkQnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcbiAgICAgICAgaW1hZ2U6IFwicmVkb1wiLFxuICAgICAgICBkaXNhYmxlZDogdHJ1ZVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuYmFja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy51bmRvLmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5mb3J3YXJkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnJlZG8uYmluZCh0aGlzKSk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBfdXBkYXRlQnV0dG9ucygpIHtcbiAgICAgIHRoaXMuYmFja0J1dHRvbi5kaXNhYmxlKCh0aGlzLmRhcmtyb29tLnRyYW5zZm9ybWF0aW9ucy5sZW5ndGggPT09IDApKTtcbiAgICAgIHRoaXMuZm9yd2FyZEJ1dHRvbi5kaXNhYmxlKCh0aGlzLnVuZG9UcmFuc2Zvcm1hdGlvbnMubGVuZ3RoID09PSAwKSk7XG4gICAgfSxcblxuICAgIF9vblRyYW5mb3JtYXRpb25BcHBsaWVkKCkge1xuICAgICAgdGhpcy51bmRvVHJhbnNmb3JtYXRpb25zID0gW107XG4gICAgICB0aGlzLl91cGRhdGVCdXR0b25zKCk7XG4gICAgfVxuICB9KTtcbn0od2luZG93LCBkb2N1bWVudCwgRGFya3Jvb20sIGZhYnJpYykpO1xuIiwiKGZ1bmN0aW9uICgpIHtcbiAgZmFicmljLkltYWdlLnByb3RvdHlwZS5zdHJva2VXaWR0aCA9IDA7XG4gIGNvbnN0IFJvdGF0aW9uID0gRGFya3Jvb20uVHJhbnNmb3JtYXRpb24uZXh0ZW5kKHtcbiAgICBhcHBseVRyYW5zZm9ybWF0aW9uKGNhbnZhcywgaW1hZ2UsIG5leHQpIHtcbiAgICAgIGNvbnN0IGFuZ2xlID0gKGltYWdlLmdldEFuZ2xlKCkgKyB0aGlzLm9wdGlvbnMuYW5nbGUpICUgMzYwO1xuICAgICAgaW1hZ2Uucm90YXRlKGFuZ2xlKTtcblxuICAgICAgY29uc3QgaGVpZ2h0ID0gTWF0aC5hYnMoaW1hZ2UuZ2V0V2lkdGgoKSAqIChNYXRoLnNpbihhbmdsZSAqIE1hdGguUEkgLyAxODApKSkgKyBNYXRoLmFicyhpbWFnZS5nZXRIZWlnaHQoKSAqIChNYXRoLmNvcyhhbmdsZSAqIE1hdGguUEkgLyAxODApKSk7XG4gICAgICBjb25zdCB3aWR0aCA9IE1hdGguYWJzKGltYWdlLmdldEhlaWdodCgpICogKE1hdGguc2luKGFuZ2xlICogTWF0aC5QSSAvIDE4MCkpKSArIE1hdGguYWJzKGltYWdlLmdldFdpZHRoKCkgKiAoTWF0aC5jb3MoYW5nbGUgKiBNYXRoLlBJIC8gMTgwKSkpO1xuXG4gICAgICBjYW52YXMuc2V0V2lkdGgod2lkdGgpO1xuICAgICAgY2FudmFzLnNldEhlaWdodChoZWlnaHQpO1xuXG4gICAgICBjYW52YXMuY2VudGVyT2JqZWN0KGltYWdlKTtcbiAgICAgIGltYWdlLnNldENvb3JkcygpO1xuICAgICAgY2FudmFzLnJlbmRlckFsbCgpO1xuXG4gICAgICBuZXh0KCk7XG4gICAgfVxuICB9KTtcblxuICBEYXJrcm9vbS5wbHVnaW5zLnJvdGF0ZSA9IERhcmtyb29tLlBsdWdpbi5leHRlbmQoe1xuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgIGNvbnN0IGJ1dHRvbkdyb3VwID0gdGhpcy5kYXJrcm9vbS50b29sYmFyLmNyZWF0ZUJ1dHRvbkdyb3VwKCk7XG5cbiAgICAgIGNvbnN0IGxlZnRCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xuICAgICAgICBpbWFnZTogXCJyb3RhdGUtbGVmdFwiXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgcmlnaHRCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xuICAgICAgICBpbWFnZTogXCJyb3RhdGUtcmlnaHRcIlxuICAgICAgfSk7XG5cbiAgICAgIGxlZnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMucm90YXRlTGVmdC5iaW5kKHRoaXMpKTtcbiAgICAgIHJpZ2h0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnJvdGF0ZVJpZ2h0LmJpbmQodGhpcykpO1xuICAgIH0sXG5cbiAgICByb3RhdGVMZWZ0KCkge1xuICAgICAgdGhpcy5yb3RhdGUoLTkwKTtcbiAgICB9LFxuXG4gICAgcm90YXRlUmlnaHQoKSB7XG4gICAgICB0aGlzLnJvdGF0ZSg5MCk7XG4gICAgfSxcblxuICAgIHJvdGF0ZShhbmdsZSkge1xuICAgICAgdGhpcy5kYXJrcm9vbS5vcHRpb25zLmxlZnQgPSAwO1xuICAgICAgdGhpcy5kYXJrcm9vbS5vcHRpb25zLnRvcCA9IDA7XG4gICAgICB0aGlzLmRhcmtyb29tLmFwcGx5VHJhbnNmb3JtYXRpb24obmV3IFJvdGF0aW9uKHtcbiAgICAgICAgYW5nbGVcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgfSk7XG59KCkpO1xuIiwiKGZ1bmN0aW9uICgpIHtcbiAgZmFicmljLkltYWdlLnByb3RvdHlwZS5zdHJva2VXaWR0aCA9IDA7XG4gIGNvbnN0IENyb3AgPSBEYXJrcm9vbS5UcmFuc2Zvcm1hdGlvbi5leHRlbmQoe1xuICAgIGFwcGx5VHJhbnNmb3JtYXRpb24oY2FudmFzLCBpbWFnZSwgbmV4dCkge1xuICAgICAgLy8gU25hcHNob3QgdGhlIGltYWdlIGRlbGltaXRlZCBieSB0aGUgY3JvcCB6b25lXG4gICAgICBjb25zdCBzbmFwc2hvdCA9IG5ldyBJbWFnZSgpO1xuICAgICAgc25hcHNob3Qub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBWYWxpZGF0ZSBpbWFnZVxuICAgICAgICBpZiAodGhpcy5oZWlnaHQgPCAxIHx8IHRoaXMud2lkdGggPCAxKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaW1nSW5zdGFuY2UgPSBuZXcgZmFicmljLkltYWdlKHRoaXMsIHtcbiAgICAgICAgICAvLyBvcHRpb25zIHRvIG1ha2UgdGhlIGltYWdlIHN0YXRpY1xuICAgICAgICAgIHNlbGVjdGFibGU6IGZhbHNlLFxuICAgICAgICAgIGV2ZW50ZWQ6IGZhbHNlLFxuICAgICAgICAgIGxvY2tNb3ZlbWVudFg6IHRydWUsXG4gICAgICAgICAgbG9ja01vdmVtZW50WTogdHJ1ZSxcbiAgICAgICAgICBsb2NrUm90YXRpb246IHRydWUsXG4gICAgICAgICAgbG9ja1NjYWxpbmdYOiB0cnVlLFxuICAgICAgICAgIGxvY2tTY2FsaW5nWTogdHJ1ZSxcbiAgICAgICAgICBsb2NrVW5pU2NhbGluZzogdHJ1ZSxcbiAgICAgICAgICBoYXNDb250cm9sczogZmFsc2UsXG4gICAgICAgICAgaGFzQm9yZGVyczogZmFsc2VcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLndpZHRoO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmhlaWdodDtcblxuICAgICAgICAvLyBVcGRhdGUgY2FudmFzIHNpemVcbiAgICAgICAgY2FudmFzLnNldFdpZHRoKHdpZHRoKTtcbiAgICAgICAgY2FudmFzLnNldEhlaWdodChoZWlnaHQpO1xuXG4gICAgICAgIC8vIEFkZCBpbWFnZVxuICAgICAgICBpbWFnZS5yZW1vdmUoKTtcbiAgICAgICAgY2FudmFzLmFkZChpbWdJbnN0YW5jZSk7XG5cbiAgICAgICAgbmV4dChpbWdJbnN0YW5jZSk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCB2aWV3cG9ydCA9IERhcmtyb29tLlV0aWxzLmNvbXB1dGVJbWFnZVZpZXdQb3J0KGltYWdlKTtcbiAgICAgIGNvbnN0IGltYWdlV2lkdGggPSB2aWV3cG9ydC53aWR0aDtcbiAgICAgIGNvbnN0IGltYWdlSGVpZ2h0ID0gdmlld3BvcnQuaGVpZ2h0O1xuXG4gICAgICBjb25zdCBsZWZ0ID0gdGhpcy5vcHRpb25zLmxlZnQgKiBpbWFnZVdpZHRoO1xuICAgICAgY29uc3QgdG9wID0gdGhpcy5vcHRpb25zLnRvcCAqIGltYWdlSGVpZ2h0O1xuICAgICAgY29uc3Qgd2lkdGggPSBNYXRoLm1pbih0aGlzLm9wdGlvbnMud2lkdGggKiBpbWFnZVdpZHRoLCBpbWFnZVdpZHRoIC0gbGVmdCk7XG4gICAgICBjb25zdCBoZWlnaHQgPSBNYXRoLm1pbih0aGlzLm9wdGlvbnMuaGVpZ2h0ICogaW1hZ2VIZWlnaHQsIGltYWdlSGVpZ2h0IC0gdG9wKTtcblxuICAgICAgc25hcHNob3Quc3JjID0gY2FudmFzLnRvRGF0YVVSTCh7XG4gICAgICAgIGxlZnQsXG4gICAgICAgIHRvcCxcbiAgICAgICAgd2lkdGgsXG4gICAgICAgIGhlaWdodFxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBDcm9wWm9uZSA9IGZhYnJpYy51dGlsLmNyZWF0ZUNsYXNzKGZhYnJpYy5SZWN0LCB7XG4gICAgX3JlbmRlcihjdHgpIHtcbiAgICAgIHRoaXMuY2FsbFN1cGVyKFwiX3JlbmRlclwiLCBjdHgpO1xuXG4gICAgICBjb25zdCBkYXNoV2lkdGggPSA3O1xuXG4gICAgICAvLyBTZXQgb3JpZ2luYWwgc2NhbGVcbiAgICAgIGNvbnN0IGZsaXBYID0gdGhpcy5mbGlwWCA/IC0xIDogMTtcbiAgICAgIGNvbnN0IGZsaXBZID0gdGhpcy5mbGlwWSA/IC0xIDogMTtcbiAgICAgIGNvbnN0IHNjYWxlWCA9IGZsaXBYIC8gdGhpcy5zY2FsZVg7XG4gICAgICBjb25zdCBzY2FsZVkgPSBmbGlwWSAvIHRoaXMuc2NhbGVZO1xuXG4gICAgICBjdHguc2NhbGUoc2NhbGVYLCBzY2FsZVkpO1xuXG4gICAgICAvLyBPdmVybGF5IHJlbmRlcmluZ1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLCAwLCAwLCAwLjUpXCI7XG4gICAgICB0aGlzLl9yZW5kZXJPdmVybGF5KGN0eCk7XG5cbiAgICAgIC8vIFNldCBkYXNoZWQgYm9yZGVyc1xuICAgICAgaWYgKGN0eC5zZXRMaW5lRGFzaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGN0eC5zZXRMaW5lRGFzaChbZGFzaFdpZHRoLCBkYXNoV2lkdGhdKTtcbiAgICAgIH0gZWxzZSBpZiAoY3R4Lm1vekRhc2ggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjdHgubW96RGFzaCA9IFtkYXNoV2lkdGgsIGRhc2hXaWR0aF07XG4gICAgICB9XG5cbiAgICAgIC8vIEZpcnN0IGxpbmVzIHJlbmRlcmluZyB3aXRoIGJsYWNrXG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcInJnYmEoMCwgMCwgMCwgMC4yKVwiO1xuICAgICAgdGhpcy5fcmVuZGVyQm9yZGVycyhjdHgpO1xuICAgICAgdGhpcy5fcmVuZGVyR3JpZChjdHgpO1xuXG4gICAgICAvLyBSZSByZW5kZXIgbGluZXMgaW4gd2hpdGVcbiAgICAgIGN0eC5saW5lRGFzaE9mZnNldCA9IGRhc2hXaWR0aDtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpXCI7XG4gICAgICB0aGlzLl9yZW5kZXJCb3JkZXJzKGN0eCk7XG4gICAgICB0aGlzLl9yZW5kZXJHcmlkKGN0eCk7XG5cbiAgICAgIC8vIFJlc2V0IHNjYWxlXG4gICAgICBjdHguc2NhbGUoMSAvIHNjYWxlWCwgMSAvIHNjYWxlWSk7XG4gICAgfSxcblxuICAgIF9yZW5kZXJPdmVybGF5KGN0eCkge1xuICAgICAgY29uc3QgY2FudmFzID0gY3R4LmNhbnZhcztcblxuICAgICAgLy9cbiAgICAgIC8vICAgIHgwICAgIHgxICAgICAgICB4MiAgICAgIHgzXG4gICAgICAvLyB5MCArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tK1xuICAgICAgLy8gICAgfFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXHxcbiAgICAgIC8vICAgIHxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFx8XG4gICAgICAvLyB5MSArLS0tLS0tKy0tLS0tLS0tLSstLS0tLS0tK1xuICAgICAgLy8gICAgfFxcXFxcXFxcXFxcXHwgICAgICAgICB8XFxcXFxcXFxcXFxcXFx8XG4gICAgICAvLyAgICB8XFxcXFxcXFxcXFxcfCAgICAwICAgIHxcXFxcXFxcXFxcXFxcXHxcbiAgICAgIC8vICAgIHxcXFxcXFxcXFxcXFx8ICAgICAgICAgfFxcXFxcXFxcXFxcXFxcfFxuICAgICAgLy8geTIgKy0tLS0tLSstLS0tLS0tLS0rLS0tLS0tLStcbiAgICAgIC8vICAgIHxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFx8XG4gICAgICAvLyAgICB8XFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcfFxuICAgICAgLy8geTMgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLStcbiAgICAgIC8vXG5cbiAgICAgIGNvbnN0IHgwID0gTWF0aC5jZWlsKC10aGlzLmdldFdpZHRoKCkgLyAyIC0gdGhpcy5nZXRMZWZ0KCkpO1xuICAgICAgY29uc3QgeDEgPSBNYXRoLmNlaWwoLXRoaXMuZ2V0V2lkdGgoKSAvIDIpO1xuICAgICAgY29uc3QgeDIgPSBNYXRoLmNlaWwodGhpcy5nZXRXaWR0aCgpIC8gMik7XG4gICAgICBjb25zdCB4MyA9IE1hdGguY2VpbCh0aGlzLmdldFdpZHRoKCkgLyAyICsgKGNhbnZhcy53aWR0aCAtIHRoaXMuZ2V0V2lkdGgoKSAtIHRoaXMuZ2V0TGVmdCgpKSk7XG5cbiAgICAgIGNvbnN0IHkwID0gTWF0aC5jZWlsKC10aGlzLmdldEhlaWdodCgpIC8gMiAtIHRoaXMuZ2V0VG9wKCkpO1xuICAgICAgY29uc3QgeTEgPSBNYXRoLmNlaWwoLXRoaXMuZ2V0SGVpZ2h0KCkgLyAyKTtcbiAgICAgIGNvbnN0IHkyID0gTWF0aC5jZWlsKHRoaXMuZ2V0SGVpZ2h0KCkgLyAyKTtcbiAgICAgIGNvbnN0IHkzID0gTWF0aC5jZWlsKHRoaXMuZ2V0SGVpZ2h0KCkgLyAyICsgKGNhbnZhcy5oZWlnaHQgLSB0aGlzLmdldEhlaWdodCgpIC0gdGhpcy5nZXRUb3AoKSkpO1xuXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG5cbiAgICAgIC8vIERyYXcgb3V0ZXIgcmVjdGFuZ2xlLlxuICAgICAgLy8gTnVtYmVycyBhcmUgKy8tMSBzbyB0aGF0IG92ZXJsYXkgZWRnZXMgZG9uJ3QgZ2V0IGJsdXJyeS5cbiAgICAgIGN0eC5tb3ZlVG8oeDAgLSAxLCB5MCAtIDEpO1xuICAgICAgY3R4LmxpbmVUbyh4MyArIDEsIHkwIC0gMSk7XG4gICAgICBjdHgubGluZVRvKHgzICsgMSwgeTMgKyAxKTtcbiAgICAgIGN0eC5saW5lVG8oeDAgLSAxLCB5MyAtIDEpO1xuICAgICAgY3R4LmxpbmVUbyh4MCAtIDEsIHkwIC0gMSk7XG4gICAgICBjdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgIC8vIERyYXcgaW5uZXIgcmVjdGFuZ2xlLlxuICAgICAgY3R4Lm1vdmVUbyh4MSwgeTEpO1xuICAgICAgY3R4LmxpbmVUbyh4MSwgeTIpO1xuICAgICAgY3R4LmxpbmVUbyh4MiwgeTIpO1xuICAgICAgY3R4LmxpbmVUbyh4MiwgeTEpO1xuICAgICAgY3R4LmxpbmVUbyh4MSwgeTEpO1xuXG4gICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICBjdHguZmlsbCgpO1xuICAgIH0sXG5cbiAgICBfcmVuZGVyQm9yZGVycyhjdHgpIHtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5tb3ZlVG8oLXRoaXMuZ2V0V2lkdGgoKSAvIDIsIC10aGlzLmdldEhlaWdodCgpIC8gMik7IC8vIHVwcGVyIGxlZnRcbiAgICAgIGN0eC5saW5lVG8odGhpcy5nZXRXaWR0aCgpIC8gMiwgLXRoaXMuZ2V0SGVpZ2h0KCkgLyAyKTsgLy8gdXBwZXIgcmlnaHRcbiAgICAgIGN0eC5saW5lVG8odGhpcy5nZXRXaWR0aCgpIC8gMiwgdGhpcy5nZXRIZWlnaHQoKSAvIDIpOyAvLyBkb3duIHJpZ2h0XG4gICAgICBjdHgubGluZVRvKC10aGlzLmdldFdpZHRoKCkgLyAyLCB0aGlzLmdldEhlaWdodCgpIC8gMik7IC8vIGRvd24gbGVmdFxuICAgICAgY3R4LmxpbmVUbygtdGhpcy5nZXRXaWR0aCgpIC8gMiwgLXRoaXMuZ2V0SGVpZ2h0KCkgLyAyKTsgLy8gdXBwZXIgbGVmdFxuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH0sXG5cbiAgICBfcmVuZGVyR3JpZChjdHgpIHtcbiAgICAgIC8vIFZlcnRpY2FsIGxpbmVzXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHgubW92ZVRvKC10aGlzLmdldFdpZHRoKCkgLyAyICsgMSAvIDMgKiB0aGlzLmdldFdpZHRoKCksIC10aGlzLmdldEhlaWdodCgpIC8gMik7XG4gICAgICBjdHgubGluZVRvKC10aGlzLmdldFdpZHRoKCkgLyAyICsgMSAvIDMgKiB0aGlzLmdldFdpZHRoKCksIHRoaXMuZ2V0SGVpZ2h0KCkgLyAyKTtcbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5tb3ZlVG8oLXRoaXMuZ2V0V2lkdGgoKSAvIDIgKyAyIC8gMyAqIHRoaXMuZ2V0V2lkdGgoKSwgLXRoaXMuZ2V0SGVpZ2h0KCkgLyAyKTtcbiAgICAgIGN0eC5saW5lVG8oLXRoaXMuZ2V0V2lkdGgoKSAvIDIgKyAyIC8gMyAqIHRoaXMuZ2V0V2lkdGgoKSwgdGhpcy5nZXRIZWlnaHQoKSAvIDIpO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgLy8gSG9yaXpvbnRhbCBsaW5lc1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4Lm1vdmVUbygtdGhpcy5nZXRXaWR0aCgpIC8gMiwgLXRoaXMuZ2V0SGVpZ2h0KCkgLyAyICsgMSAvIDMgKiB0aGlzLmdldEhlaWdodCgpKTtcbiAgICAgIGN0eC5saW5lVG8odGhpcy5nZXRXaWR0aCgpIC8gMiwgLXRoaXMuZ2V0SGVpZ2h0KCkgLyAyICsgMSAvIDMgKiB0aGlzLmdldEhlaWdodCgpKTtcbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5tb3ZlVG8oLXRoaXMuZ2V0V2lkdGgoKSAvIDIsIC10aGlzLmdldEhlaWdodCgpIC8gMiArIDIgLyAzICogdGhpcy5nZXRIZWlnaHQoKSk7XG4gICAgICBjdHgubGluZVRvKHRoaXMuZ2V0V2lkdGgoKSAvIDIsIC10aGlzLmdldEhlaWdodCgpIC8gMiArIDIgLyAzICogdGhpcy5nZXRIZWlnaHQoKSk7XG4gICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfVxuICB9KTtcblxuICBEYXJrcm9vbS5wbHVnaW5zLmNyb3AgPSBEYXJrcm9vbS5QbHVnaW4uZXh0ZW5kKHtcbiAgICAvLyBJbml0IHBvaW50XG4gICAgc3RhcnRYOiBudWxsLFxuICAgIHN0YXJ0WTogbnVsbCxcblxuICAgIC8vIEtleWNyb3BcbiAgICBpc0tleUNyb3Bpbmc6IGZhbHNlLFxuICAgIGlzS2V5TGVmdDogZmFsc2UsXG4gICAgaXNLZXlVcDogZmFsc2UsXG5cbiAgICBkZWZhdWx0czoge1xuICAgICAgLy8gbWluIGNyb3AgZGltZW5zaW9uXG4gICAgICBtaW5IZWlnaHQ6IDEsXG4gICAgICBtaW5XaWR0aDogMSxcbiAgICAgIC8vIGVuc3VyZSBjcm9wIHJhdGlvXG4gICAgICByYXRpbzogbnVsbCxcbiAgICAgIC8vIHF1aWNrIGNyb3AgZmVhdHVyZSAoc2V0IGEga2V5IGNvZGUgdG8gZW5hYmxlIGl0KVxuICAgICAgcXVpY2tDcm9wS2V5OiBmYWxzZVxuICAgIH0sXG5cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgY29uc3QgYnV0dG9uR3JvdXAgPSB0aGlzLmRhcmtyb29tLnRvb2xiYXIuY3JlYXRlQnV0dG9uR3JvdXAoKTtcblxuICAgICAgdGhpcy5jcm9wQnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcbiAgICAgICAgaW1hZ2U6IFwiY3JvcFwiXG4gICAgICB9KTtcbiAgICAgIHRoaXMub2tCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xuICAgICAgICBpbWFnZTogXCJkb25lXCIsXG4gICAgICAgIHR5cGU6IFwic3VjY2Vzc1wiLFxuICAgICAgICBoaWRlOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIHRoaXMuY2FuY2VsQnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcbiAgICAgICAgaW1hZ2U6IFwiY2xvc2VcIixcbiAgICAgICAgdHlwZTogXCJkYW5nZXJcIixcbiAgICAgICAgaGlkZTogdHJ1ZVxuICAgICAgfSk7XG5cbiAgICAgIC8vIEJ1dHRvbnMgY2xpY2tcbiAgICAgIHRoaXMuY3JvcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy50b2dnbGVDcm9wLmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5va0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5jcm9wQ3VycmVudFpvbmUuYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLmNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5yZWxlYXNlRm9jdXMuYmluZCh0aGlzKSk7XG5cbiAgICAgIC8vIENhbnZhcyBldmVudHNcbiAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLm9uKFwibW91c2U6ZG93blwiLCB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMub24oXCJtb3VzZTptb3ZlXCIsIHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbihcIm1vdXNlOnVwXCIsIHRoaXMub25Nb3VzZVVwLmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMub24oXCJvYmplY3Q6bW92aW5nXCIsIHRoaXMub25PYmplY3RNb3ZpbmcuYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbihcIm9iamVjdDpzY2FsaW5nXCIsIHRoaXMub25PYmplY3RTY2FsaW5nLmJpbmQodGhpcykpO1xuXG4gICAgICBmYWJyaWMudXRpbC5hZGRMaXN0ZW5lcihmYWJyaWMuZG9jdW1lbnQsIFwia2V5ZG93blwiLCB0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpKTtcbiAgICAgIGZhYnJpYy51dGlsLmFkZExpc3RlbmVyKGZhYnJpYy5kb2N1bWVudCwgXCJrZXl1cFwiLCB0aGlzLm9uS2V5VXAuYmluZCh0aGlzKSk7XG5cbiAgICAgIHRoaXMuZGFya3Jvb20uYWRkRXZlbnRMaXN0ZW5lcihcImNvcmU6dHJhbnNmb3JtYXRpb25cIiwgdGhpcy5yZWxlYXNlRm9jdXMuYmluZCh0aGlzKSk7XG4gICAgfSxcblxuICAgIGNsZWFyKCkge1xuICAgICAgaWYgKHRoaXMuaGFzRm9jdXMoKSkge1xuICAgICAgICB0aGlzLnJlbGVhc2VGb2N1cygpO1xuICAgICAgfVxuICAgIH0sXG4gICAgLy8gQXZvaWQgY3JvcCB6b25lIHRvIGdvIGJleW9uZCB0aGUgY2FudmFzIGVkZ2VzXG4gICAgb25PYmplY3RNb3ZpbmcoZXZlbnQpIHtcbiAgICAgIGlmICghdGhpcy5oYXNGb2N1cygpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY3VycmVudE9iamVjdCA9IGV2ZW50LnRhcmdldDtcbiAgICAgIGlmIChjdXJyZW50T2JqZWN0ICE9PSB0aGlzLmNyb3Bab25lKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XG4gICAgICBjb25zdCB4ID0gY3VycmVudE9iamVjdC5nZXRMZWZ0KCk7XG4gICAgICBjb25zdCB5ID0gY3VycmVudE9iamVjdC5nZXRUb3AoKTtcbiAgICAgIGNvbnN0IHcgPSBjdXJyZW50T2JqZWN0LmdldFdpZHRoKCk7XG4gICAgICBjb25zdCBoID0gY3VycmVudE9iamVjdC5nZXRIZWlnaHQoKTtcbiAgICAgIGNvbnN0IG1heFggPSBjYW52YXMuZ2V0V2lkdGgoKSAtIHc7XG4gICAgICBjb25zdCBtYXhZID0gY2FudmFzLmdldEhlaWdodCgpIC0gaDtcblxuICAgICAgaWYgKHggPCAwKSB7XG4gICAgICAgIGN1cnJlbnRPYmplY3Quc2V0KFwibGVmdFwiLCAwKTtcbiAgICAgIH1cbiAgICAgIGlmICh5IDwgMCkge1xuICAgICAgICBjdXJyZW50T2JqZWN0LnNldChcInRvcFwiLCAwKTtcbiAgICAgIH1cbiAgICAgIGlmICh4ID4gbWF4WCkge1xuICAgICAgICBjdXJyZW50T2JqZWN0LnNldChcImxlZnRcIiwgbWF4WCk7XG4gICAgICB9XG4gICAgICBpZiAoeSA+IG1heFkpIHtcbiAgICAgICAgY3VycmVudE9iamVjdC5zZXQoXCJ0b3BcIiwgbWF4WSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudChcImNyb3A6dXBkYXRlXCIpO1xuICAgIH0sXG5cbiAgICAvLyBQcmV2ZW50IGNyb3Agem9uZSBmcm9tIGdvaW5nIGJleW9uZCB0aGUgY2FudmFzIGVkZ2VzIChsaWtlIG1vdXNlTW92ZSlcbiAgICBvbk9iamVjdFNjYWxpbmcoZXZlbnQpIHtcbiAgICAgIGlmICghdGhpcy5oYXNGb2N1cygpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IHByZXZlbnRTY2FsaW5nID0gZmFsc2U7XG4gICAgICBjb25zdCBjdXJyZW50T2JqZWN0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgaWYgKGN1cnJlbnRPYmplY3QgIT09IHRoaXMuY3JvcFpvbmUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcblxuICAgICAgY29uc3QgbWluWCA9IGN1cnJlbnRPYmplY3QuZ2V0TGVmdCgpO1xuICAgICAgY29uc3QgbWluWSA9IGN1cnJlbnRPYmplY3QuZ2V0VG9wKCk7XG4gICAgICBjb25zdCBtYXhYID0gY3VycmVudE9iamVjdC5nZXRMZWZ0KCkgKyBjdXJyZW50T2JqZWN0LmdldFdpZHRoKCk7XG4gICAgICBjb25zdCBtYXhZID0gY3VycmVudE9iamVjdC5nZXRUb3AoKSArIGN1cnJlbnRPYmplY3QuZ2V0SGVpZ2h0KCk7XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmF0aW8gIT09IG51bGwpIHtcbiAgICAgICAgaWYgKG1pblggPCAwIHx8IG1heFggPiBjYW52YXMuZ2V0V2lkdGgoKSB8fCBtaW5ZIDwgMCB8fCBtYXhZID4gY2FudmFzLmdldEhlaWdodCgpKSB7XG4gICAgICAgICAgcHJldmVudFNjYWxpbmcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtaW5YIDwgMCB8fCBtYXhYID4gY2FudmFzLmdldFdpZHRoKCkgfHwgcHJldmVudFNjYWxpbmcpIHtcbiAgICAgICAgY29uc3QgbGFzdFNjYWxlWCA9IHRoaXMubGFzdFNjYWxlWCB8fCAxO1xuICAgICAgICBjdXJyZW50T2JqZWN0LnNldFNjYWxlWChsYXN0U2NhbGVYKTtcbiAgICAgIH1cbiAgICAgIGlmIChtaW5YIDwgMCkge1xuICAgICAgICBjdXJyZW50T2JqZWN0LnNldExlZnQoMCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChtaW5ZIDwgMCB8fCBtYXhZID4gY2FudmFzLmdldEhlaWdodCgpIHx8IHByZXZlbnRTY2FsaW5nKSB7XG4gICAgICAgIGNvbnN0IGxhc3RTY2FsZVkgPSB0aGlzLmxhc3RTY2FsZVkgfHwgMTtcbiAgICAgICAgY3VycmVudE9iamVjdC5zZXRTY2FsZVkobGFzdFNjYWxlWSk7XG4gICAgICB9XG4gICAgICBpZiAobWluWSA8IDApIHtcbiAgICAgICAgY3VycmVudE9iamVjdC5zZXRUb3AoMCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjdXJyZW50T2JqZWN0LmdldFdpZHRoKCkgPCB0aGlzLm9wdGlvbnMubWluV2lkdGgpIHtcbiAgICAgICAgY3VycmVudE9iamVjdC5zY2FsZVRvV2lkdGgodGhpcy5vcHRpb25zLm1pbldpZHRoKTtcbiAgICAgIH1cbiAgICAgIGlmIChjdXJyZW50T2JqZWN0LmdldEhlaWdodCgpIDwgdGhpcy5vcHRpb25zLm1pbkhlaWdodCkge1xuICAgICAgICBjdXJyZW50T2JqZWN0LnNjYWxlVG9IZWlnaHQodGhpcy5vcHRpb25zLm1pbkhlaWdodCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMubGFzdFNjYWxlWCA9IGN1cnJlbnRPYmplY3QuZ2V0U2NhbGVYKCk7XG4gICAgICB0aGlzLmxhc3RTY2FsZVkgPSBjdXJyZW50T2JqZWN0LmdldFNjYWxlWSgpO1xuXG4gICAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoXCJjcm9wOnVwZGF0ZVwiKTtcbiAgICB9LFxuXG4gICAgLy8gSW5pdCBjcm9wIHpvbmVcbiAgICBvbk1vdXNlRG93bihldmVudCkge1xuICAgICAgZXZlbnQuZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKCF0aGlzLmhhc0ZvY3VzKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcblxuICAgICAgLy8gcmVjYWxjdWxhdGUgb2Zmc2V0LCBpbiBjYXNlIGNhbnZhcyB3YXMgbWFuaXB1bGF0ZWQgc2luY2UgbGFzdCBgY2FsY09mZnNldGBcbiAgICAgIGNhbnZhcy5jYWxjT2Zmc2V0KCk7XG4gICAgICBjb25zdCBwb2ludGVyID0gY2FudmFzLmdldFBvaW50ZXIoZXZlbnQuZSk7XG4gICAgICBjb25zdCB4ID0gcG9pbnRlci54O1xuICAgICAgY29uc3QgeSA9IHBvaW50ZXIueTtcbiAgICAgIGNvbnN0IHBvaW50ID0gbmV3IGZhYnJpYy5Qb2ludCh4LCB5KTtcblxuICAgICAgLy8gQ2hlY2sgaWYgdXNlciB3YW50IHRvIHNjYWxlIG9yIGRyYWcgdGhlIGNyb3Agem9uZS5cbiAgICAgIGNvbnN0IGFjdGl2ZU9iamVjdCA9IGNhbnZhcy5nZXRBY3RpdmVPYmplY3QoKTtcbiAgICAgIGlmIChhY3RpdmVPYmplY3QgPT09IHRoaXMuY3JvcFpvbmUgfHwgdGhpcy5jcm9wWm9uZS5jb250YWluc1BvaW50KHBvaW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNhbnZhcy5kaXNjYXJkQWN0aXZlT2JqZWN0KCk7XG4gICAgICB0aGlzLmNyb3Bab25lLnNldFdpZHRoKDApO1xuICAgICAgdGhpcy5jcm9wWm9uZS5zZXRIZWlnaHQoMCk7XG4gICAgICB0aGlzLmNyb3Bab25lLnNldFNjYWxlWCgxKTtcbiAgICAgIHRoaXMuY3JvcFpvbmUuc2V0U2NhbGVZKDEpO1xuXG4gICAgICB0aGlzLnN0YXJ0WCA9IHg7XG4gICAgICB0aGlzLnN0YXJ0WSA9IHk7XG4gICAgfSxcblxuICAgIC8vIEV4dGVuZCBjcm9wIHpvbmVcbiAgICBvbk1vdXNlTW92ZShldmVudCkge1xuICAgICAgLy8gUXVpY2sgY3JvcCBmZWF0dXJlXG4gICAgICBpZiAodGhpcy5pc0tleUNyb3BpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub25Nb3VzZU1vdmVLZXlDcm9wKGV2ZW50KTtcbiAgICAgIH1cblxuICAgICAgaWYgKG51bGwgPT09IHRoaXMuc3RhcnRYIHx8IG51bGwgPT09IHRoaXMuc3RhcnRZKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XG4gICAgICBjb25zdCBwb2ludGVyID0gY2FudmFzLmdldFBvaW50ZXIoZXZlbnQuZSk7XG4gICAgICBjb25zdCB4ID0gcG9pbnRlci54O1xuICAgICAgY29uc3QgeSA9IHBvaW50ZXIueTtcblxuICAgICAgdGhpcy5fcmVuZGVyQ3JvcFpvbmUodGhpcy5zdGFydFgsIHRoaXMuc3RhcnRZLCB4LCB5KTtcbiAgICB9LFxuXG4gICAgb25Nb3VzZU1vdmVLZXlDcm9wKGV2ZW50KSB7XG4gICAgICBjb25zdCBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcbiAgICAgIGNvbnN0IHpvbmUgPSB0aGlzLmNyb3Bab25lO1xuXG4gICAgICBjb25zdCBwb2ludGVyID0gY2FudmFzLmdldFBvaW50ZXIoZXZlbnQuZSk7XG4gICAgICBjb25zdCB4ID0gcG9pbnRlci54O1xuICAgICAgY29uc3QgeSA9IHBvaW50ZXIueTtcblxuICAgICAgaWYgKCF6b25lLmxlZnQgfHwgIXpvbmUudG9wKSB7XG4gICAgICAgIHpvbmUuc2V0VG9wKHkpO1xuICAgICAgICB6b25lLnNldExlZnQoeCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaXNLZXlMZWZ0ID0geCA8IHpvbmUubGVmdCArIHpvbmUud2lkdGggLyAyO1xuICAgICAgdGhpcy5pc0tleVVwID0geSA8IHpvbmUudG9wICsgem9uZS5oZWlnaHQgLyAyO1xuXG4gICAgICB0aGlzLl9yZW5kZXJDcm9wWm9uZShcbiAgICAgICAgTWF0aC5taW4oem9uZS5sZWZ0LCB4KSxcbiAgICAgICAgTWF0aC5taW4oem9uZS50b3AsIHkpLFxuICAgICAgICBNYXRoLm1heCh6b25lLmxlZnQgKyB6b25lLndpZHRoLCB4KSxcbiAgICAgICAgTWF0aC5tYXgoem9uZS50b3AgKyB6b25lLmhlaWdodCwgeSlcbiAgICAgICk7XG4gICAgfSxcblxuICAgIC8vIEZpbmlzaCBjcm9wIHpvbmVcbiAgICBvbk1vdXNlVXAoZXZlbnQpIHtcbiAgICAgIGlmIChudWxsID09PSB0aGlzLnN0YXJ0WCB8fCBudWxsID09PSB0aGlzLnN0YXJ0WSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xuICAgICAgdGhpcy5jcm9wWm9uZS5zZXRDb29yZHMoKTtcbiAgICAgIGNhbnZhcy5zZXRBY3RpdmVPYmplY3QodGhpcy5jcm9wWm9uZSk7XG4gICAgICBjYW52YXMuY2FsY09mZnNldCgpO1xuXG4gICAgICB0aGlzLnN0YXJ0WCA9IG51bGw7XG4gICAgICB0aGlzLnN0YXJ0WSA9IG51bGw7XG4gICAgfSxcblxuICAgIG9uS2V5RG93bihldmVudCkge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5xdWlja0Nyb3BLZXkgPT09IGZhbHNlIHx8IGV2ZW50LmtleUNvZGUgIT09IHRoaXMub3B0aW9ucy5xdWlja0Nyb3BLZXkgfHwgdGhpcy5pc0tleUNyb3BpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBBY3RpdmUgcXVpY2sgY3JvcCBmbG93XG4gICAgICB0aGlzLmlzS2V5Q3JvcGluZyA9IHRydWU7XG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5kaXNjYXJkQWN0aXZlT2JqZWN0KCk7XG4gICAgICB0aGlzLmNyb3Bab25lLnNldFdpZHRoKDApO1xuICAgICAgdGhpcy5jcm9wWm9uZS5zZXRIZWlnaHQoMCk7XG4gICAgICB0aGlzLmNyb3Bab25lLnNldFNjYWxlWCgxKTtcbiAgICAgIHRoaXMuY3JvcFpvbmUuc2V0U2NhbGVZKDEpO1xuICAgICAgdGhpcy5jcm9wWm9uZS5zZXRUb3AoMCk7XG4gICAgICB0aGlzLmNyb3Bab25lLnNldExlZnQoMCk7XG4gICAgfSxcblxuICAgIG9uS2V5VXAoZXZlbnQpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucXVpY2tDcm9wS2V5ID09PSBmYWxzZSB8fCBldmVudC5rZXlDb2RlICE9PSB0aGlzLm9wdGlvbnMucXVpY2tDcm9wS2V5IHx8ICF0aGlzLmlzS2V5Q3JvcGluZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFVuYWN0aXZlIHF1aWNrIGNyb3AgZmxvd1xuICAgICAgdGhpcy5pc0tleUNyb3BpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuc3RhcnRYID0gMTtcbiAgICAgIHRoaXMuc3RhcnRZID0gMTtcbiAgICAgIHRoaXMub25Nb3VzZVVwKCk7XG4gICAgfSxcblxuICAgIHNlbGVjdFpvbmUoeCwgeSwgd2lkdGgsIGhlaWdodCwgZm9yY2VEaW1lbnNpb24pIHtcbiAgICAgIGlmICghdGhpcy5oYXNGb2N1cygpKSB7XG4gICAgICAgIHRoaXMucmVxdWlyZUZvY3VzKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICghZm9yY2VEaW1lbnNpb24pIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyQ3JvcFpvbmUoeCwgeSwgeCArIHdpZHRoLCB5ICsgaGVpZ2h0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY3JvcFpvbmUuc2V0KHtcbiAgICAgICAgICBsZWZ0OiB4LFxuICAgICAgICAgIHRvcDogeSxcbiAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICBoZWlnaHRcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xuICAgICAgY2FudmFzLmJyaW5nVG9Gcm9udCh0aGlzLmNyb3Bab25lKTtcbiAgICAgIHRoaXMuY3JvcFpvbmUuc2V0Q29vcmRzKCk7XG4gICAgICBjYW52YXMuc2V0QWN0aXZlT2JqZWN0KHRoaXMuY3JvcFpvbmUpO1xuICAgICAgY2FudmFzLmNhbGNPZmZzZXQoKTtcblxuICAgICAgdGhpcy5kYXJrcm9vbS5kaXNwYXRjaEV2ZW50KFwiY3JvcDp1cGRhdGVcIik7XG4gICAgfSxcblxuICAgIHRvZ2dsZUNyb3AoKSB7XG4gICAgICBpZiAoIXRoaXMuaGFzRm9jdXMoKSkge1xuICAgICAgICB0aGlzLnJlcXVpcmVGb2N1cygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZWxlYXNlRm9jdXMoKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgY3JvcEN1cnJlbnRab25lKCkge1xuICAgICAgaWYgKCF0aGlzLmhhc0ZvY3VzKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBBdm9pZCBjcm9waW5nIGVtcHR5IHpvbmVcbiAgICAgIGlmICh0aGlzLmNyb3Bab25lLndpZHRoIDwgMSAmJiB0aGlzLmNyb3Bab25lLmhlaWdodCA8IDEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBpbWFnZSA9IHRoaXMuZGFya3Jvb20uaW1hZ2U7XG5cbiAgICAgIC8vIENvbXB1dGUgY3JvcCB6b25lIGRpbWVuc2lvbnNcbiAgICAgIGxldCB0b3AgPSB0aGlzLmNyb3Bab25lLmdldFRvcCgpIC0gaW1hZ2UuZ2V0VG9wKCk7XG4gICAgICBsZXQgbGVmdCA9IHRoaXMuY3JvcFpvbmUuZ2V0TGVmdCgpIC0gaW1hZ2UuZ2V0TGVmdCgpO1xuICAgICAgbGV0IHdpZHRoID0gdGhpcy5jcm9wWm9uZS5nZXRXaWR0aCgpO1xuICAgICAgbGV0IGhlaWdodCA9IHRoaXMuY3JvcFpvbmUuZ2V0SGVpZ2h0KCk7XG5cbiAgICAgIC8vIEFkanVzdCBkaW1lbnNpb25zIHRvIGltYWdlIG9ubHlcbiAgICAgIGlmICh0b3AgPCAwKSB7XG4gICAgICAgIGhlaWdodCArPSB0b3A7XG4gICAgICAgIHRvcCA9IDA7XG4gICAgICB9XG5cbiAgICAgIGlmIChsZWZ0IDwgMCkge1xuICAgICAgICB3aWR0aCArPSBsZWZ0O1xuICAgICAgICBsZWZ0ID0gMDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5kYXJrcm9vbS5vcHRpb25zLnRvcCA9IDA7XG4gICAgICB0aGlzLmRhcmtyb29tLm9wdGlvbnMubGVmdCA9IDA7XG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5zZXRab29tKDEpO1xuICAgICAgdGhpcy5kYXJrcm9vbS5wbHVnaW5zLnpvb20udXBkYXRlQnV0dG9ucygpO1xuICAgICAgLy8gQXBwbHkgY3JvcCB0cmFuc2Zvcm1hdGlvbi5cbiAgICAgIC8vIE1ha2Ugc3VyZSB0byB1c2UgcmVsYXRpdmUgZGltZW5zaW9uIHNpbmNlIHRoZSBjcm9wIHdpbGwgYmUgYXBwbGllZFxuICAgICAgLy8gb24gdGhlIHNvdXJjZSBpbWFnZS5cbiAgICAgIHRoaXMuZGFya3Jvb20uYXBwbHlUcmFuc2Zvcm1hdGlvbihuZXcgQ3JvcCh7XG4gICAgICAgIHRvcDogdG9wIC8gaW1hZ2UuZ2V0SGVpZ2h0KCksXG4gICAgICAgIGxlZnQ6IGxlZnQgLyBpbWFnZS5nZXRXaWR0aCgpLFxuICAgICAgICB3aWR0aDogd2lkdGggLyBpbWFnZS5nZXRXaWR0aCgpLFxuICAgICAgICBoZWlnaHQ6IGhlaWdodCAvIGltYWdlLmdldEhlaWdodCgpXG4gICAgICB9KSk7XG4gICAgfSxcblxuICAgIC8vIFRlc3Qgd2V0aGVyIGNyb3Agem9uZSBpcyBzZXRcbiAgICBoYXNGb2N1cygpIHtcbiAgICAgIHJldHVybiB0aGlzLmNyb3Bab25lICE9PSB1bmRlZmluZWQ7XG4gICAgfSxcblxuICAgIC8vIENyZWF0ZSB0aGUgY3JvcCB6b25lXG4gICAgcmVxdWlyZUZvY3VzKCkge1xuICAgICAgdGhpcy5kYXJrcm9vbS5jbGVhckZvY3VzKFwiY3JvcFwiKTtcbiAgICAgIHRoaXMuY3JvcFpvbmUgPSBuZXcgQ3JvcFpvbmUoe1xuICAgICAgICBmaWxsOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgIGhhc0JvcmRlcnM6IGZhbHNlLFxuICAgICAgICBvcmlnaW5YOiBcImxlZnRcIixcbiAgICAgICAgb3JpZ2luWTogXCJ0b3BcIixcbiAgICAgICAgLy8gc3Ryb2tlOiAnIzQ0NCcsXG4gICAgICAgIC8vIHN0cm9rZURhc2hBcnJheTogWzUsIDVdLFxuICAgICAgICAvLyBib3JkZXJDb2xvcjogJyM0NDQnLFxuICAgICAgICBjb3JuZXJDb2xvcjogXCIjNDQ0XCIsXG4gICAgICAgIGNvcm5lclNpemU6IDgsXG4gICAgICAgIHRyYW5zcGFyZW50Q29ybmVyczogZmFsc2UsXG4gICAgICAgIGxvY2tSb3RhdGlvbjogdHJ1ZSxcbiAgICAgICAgaGFzUm90YXRpbmdQb2ludDogZmFsc2VcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJhdGlvICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuY3JvcFpvbmUuc2V0KFwibG9ja1VuaVNjYWxpbmdcIiwgdHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLmFkZCh0aGlzLmNyb3Bab25lKTtcbiAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLmRlZmF1bHRDdXJzb3IgPSBcImNyb3NzaGFpclwiO1xuXG4gICAgICB0aGlzLmNyb3BCdXR0b24uYWN0aXZlKHRydWUpO1xuICAgICAgdGhpcy5va0J1dHRvbi5oaWRlKGZhbHNlKTtcbiAgICAgIHRoaXMuY2FuY2VsQnV0dG9uLmhpZGUoZmFsc2UpO1xuICAgIH0sXG5cbiAgICAvLyBSZW1vdmUgdGhlIGNyb3Agem9uZVxuICAgIHJlbGVhc2VGb2N1cygpIHtcbiAgICAgIGlmICh1bmRlZmluZWQgPT09IHRoaXMuY3JvcFpvbmUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNyb3Bab25lLnJlbW92ZSgpO1xuICAgICAgdGhpcy5jcm9wWm9uZSA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy5jcm9wQnV0dG9uLmFjdGl2ZShmYWxzZSk7XG4gICAgICB0aGlzLm9rQnV0dG9uLmhpZGUodHJ1ZSk7XG4gICAgICB0aGlzLmNhbmNlbEJ1dHRvbi5oaWRlKHRydWUpO1xuXG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5kZWZhdWx0Q3Vyc29yID0gXCJkZWZhdWx0XCI7XG5cbiAgICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudChcImNyb3A6dXBkYXRlXCIpO1xuICAgIH0sXG5cbiAgICBfcmVuZGVyQ3JvcFpvbmUoZnJvbVgsIGZyb21ZLCB0b1gsIHRvWSkge1xuICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XG5cbiAgICAgIGNvbnN0IGlzUmlnaHQgPSAodG9YID4gZnJvbVgpO1xuICAgICAgbGV0IGlzTGVmdCA9ICFpc1JpZ2h0O1xuICAgICAgY29uc3QgaXNEb3duID0gKHRvWSA+IGZyb21ZKTtcbiAgICAgIGxldCBpc1VwID0gIWlzRG93bjtcblxuICAgICAgY29uc3QgbWluV2lkdGggPSBNYXRoLm1pbigrdGhpcy5vcHRpb25zLm1pbldpZHRoLCBjYW52YXMuZ2V0V2lkdGgoKSk7XG4gICAgICBjb25zdCBtaW5IZWlnaHQgPSBNYXRoLm1pbigrdGhpcy5vcHRpb25zLm1pbkhlaWdodCwgY2FudmFzLmdldEhlaWdodCgpKTtcblxuICAgICAgLy8gRGVmaW5lIGNvcm5lciBjb29yZGluYXRlc1xuICAgICAgbGV0IGxlZnRYID0gTWF0aC5taW4oZnJvbVgsIHRvWCk7XG4gICAgICBsZXQgcmlnaHRYID0gTWF0aC5tYXgoZnJvbVgsIHRvWCk7XG4gICAgICBsZXQgdG9wWSA9IE1hdGgubWluKGZyb21ZLCB0b1kpO1xuICAgICAgbGV0IGJvdHRvbVkgPSBNYXRoLm1heChmcm9tWSwgdG9ZKTtcblxuICAgICAgLy8gUmVwbGFjZSBjdXJyZW50IHBvaW50IGludG8gdGhlIGNhbnZhc1xuICAgICAgbGVmdFggPSBNYXRoLm1heCgwLCBsZWZ0WCk7XG4gICAgICByaWdodFggPSBNYXRoLm1pbihjYW52YXMuZ2V0V2lkdGgoKSwgcmlnaHRYKTtcbiAgICAgIHRvcFkgPSBNYXRoLm1heCgwLCB0b3BZKTtcbiAgICAgIGJvdHRvbVkgPSBNYXRoLm1pbihjYW52YXMuZ2V0SGVpZ2h0KCksIGJvdHRvbVkpO1xuXG4gICAgICAvLyBSZWNhbGlicmF0ZSBjb29yZGluYXRlcyBhY2NvcmRpbmcgdG8gZ2l2ZW4gb3B0aW9uc1xuICAgICAgaWYgKHJpZ2h0WCAtIGxlZnRYIDwgbWluV2lkdGgpIHtcbiAgICAgICAgaWYgKGlzUmlnaHQpIHtcbiAgICAgICAgICByaWdodFggPSBsZWZ0WCArIG1pbldpZHRoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxlZnRYID0gcmlnaHRYIC0gbWluV2lkdGg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChib3R0b21ZIC0gdG9wWSA8IG1pbkhlaWdodCkge1xuICAgICAgICBpZiAoaXNEb3duKSB7XG4gICAgICAgICAgYm90dG9tWSA9IHRvcFkgKyBtaW5IZWlnaHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdG9wWSA9IGJvdHRvbVkgLSBtaW5IZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVHJ1bmNhdGUgdHJ1bmNhdGUgYWNjb3JkaW5nIHRvIGNhbnZhcyBkaW1lbnNpb25zXG4gICAgICBpZiAobGVmdFggPCAwKSB7XG4gICAgICAgIC8vIFRyYW5zbGF0ZSB0byB0aGUgbGVmdFxuICAgICAgICByaWdodFggKz0gTWF0aC5hYnMobGVmdFgpO1xuICAgICAgICBsZWZ0WCA9IDA7XG4gICAgICB9XG4gICAgICBpZiAocmlnaHRYID4gY2FudmFzLmdldFdpZHRoKCkpIHtcbiAgICAgICAgLy8gVHJhbnNsYXRlIHRvIHRoZSByaWdodFxuICAgICAgICBsZWZ0WCAtPSAocmlnaHRYIC0gY2FudmFzLmdldFdpZHRoKCkpO1xuICAgICAgICByaWdodFggPSBjYW52YXMuZ2V0V2lkdGgoKTtcbiAgICAgIH1cbiAgICAgIGlmICh0b3BZIDwgMCkge1xuICAgICAgICAvLyBUcmFuc2xhdGUgdG8gdGhlIGJvdHRvbVxuICAgICAgICBib3R0b21ZICs9IE1hdGguYWJzKHRvcFkpO1xuICAgICAgICB0b3BZID0gMDtcbiAgICAgIH1cbiAgICAgIGlmIChib3R0b21ZID4gY2FudmFzLmdldEhlaWdodCgpKSB7XG4gICAgICAgIC8vIFRyYW5zbGF0ZSB0byB0aGUgcmlnaHRcbiAgICAgICAgdG9wWSAtPSAoYm90dG9tWSAtIGNhbnZhcy5nZXRIZWlnaHQoKSk7XG4gICAgICAgIGJvdHRvbVkgPSBjYW52YXMuZ2V0SGVpZ2h0KCk7XG4gICAgICB9XG5cbiAgICAgIGxldCB3aWR0aCA9IHJpZ2h0WCAtIGxlZnRYO1xuICAgICAgbGV0IGhlaWdodCA9IGJvdHRvbVkgLSB0b3BZO1xuICAgICAgY29uc3QgY3VycmVudFJhdGlvID0gd2lkdGggLyBoZWlnaHQ7XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmF0aW8gJiYgK3RoaXMub3B0aW9ucy5yYXRpbyAhPT0gY3VycmVudFJhdGlvKSB7XG4gICAgICAgIGNvbnN0IHJhdGlvID0gK3RoaXMub3B0aW9ucy5yYXRpbztcblxuICAgICAgICBpZiAodGhpcy5pc0tleUNyb3BpbmcpIHtcbiAgICAgICAgICBpc0xlZnQgPSB0aGlzLmlzS2V5TGVmdDtcbiAgICAgICAgICBpc1VwID0gdGhpcy5pc0tleVVwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1cnJlbnRSYXRpbyA8IHJhdGlvKSB7XG4gICAgICAgICAgY29uc3QgbmV3V2lkdGggPSBoZWlnaHQgKiByYXRpbztcbiAgICAgICAgICBpZiAoaXNMZWZ0KSB7XG4gICAgICAgICAgICBsZWZ0WCAtPSAobmV3V2lkdGggLSB3aWR0aCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHdpZHRoID0gbmV3V2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFJhdGlvID4gcmF0aW8pIHtcbiAgICAgICAgICBjb25zdCBuZXdIZWlnaHQgPSBoZWlnaHQgLyAocmF0aW8gKiBoZWlnaHQgLyB3aWR0aCk7XG4gICAgICAgICAgaWYgKGlzVXApIHtcbiAgICAgICAgICAgIHRvcFkgLT0gKG5ld0hlaWdodCAtIGhlaWdodCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGhlaWdodCA9IG5ld0hlaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsZWZ0WCA8IDApIHtcbiAgICAgICAgICBsZWZ0WCA9IDA7XG4gICAgICAgICAgLy8gVE9ET1xuICAgICAgICB9XG4gICAgICAgIGlmICh0b3BZIDwgMCkge1xuICAgICAgICAgIHRvcFkgPSAwO1xuICAgICAgICAgIC8vIFRPRE9cbiAgICAgICAgfVxuICAgICAgICBpZiAobGVmdFggKyB3aWR0aCA+IGNhbnZhcy5nZXRXaWR0aCgpKSB7XG4gICAgICAgICAgY29uc3QgbmV3V2lkdGggPSBjYW52YXMuZ2V0V2lkdGgoKSAtIGxlZnRYO1xuICAgICAgICAgIGhlaWdodCA9IG5ld1dpZHRoICogaGVpZ2h0IC8gd2lkdGg7XG4gICAgICAgICAgd2lkdGggPSBuZXdXaWR0aDtcbiAgICAgICAgICBpZiAoaXNVcCkge1xuICAgICAgICAgICAgdG9wWSA9IGZyb21ZIC0gaGVpZ2h0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodG9wWSArIGhlaWdodCA+IGNhbnZhcy5nZXRIZWlnaHQoKSkge1xuICAgICAgICAgIGNvbnN0IG5ld0hlaWdodCA9IGNhbnZhcy5nZXRIZWlnaHQoKSAtIHRvcFk7XG4gICAgICAgICAgd2lkdGggPSB3aWR0aCAqIG5ld0hlaWdodCAvIGhlaWdodDtcbiAgICAgICAgICBoZWlnaHQgPSBuZXdIZWlnaHQ7XG4gICAgICAgICAgaWYgKGlzTGVmdCkge1xuICAgICAgICAgICAgbGVmdFggPSBmcm9tWCAtIHdpZHRoO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBBcHBseSBjb29yZGluYXRlc1xuICAgICAgdGhpcy5jcm9wWm9uZS5sZWZ0ID0gbGVmdFg7XG4gICAgICB0aGlzLmNyb3Bab25lLnRvcCA9IHRvcFk7XG4gICAgICB0aGlzLmNyb3Bab25lLndpZHRoID0gd2lkdGg7XG4gICAgICB0aGlzLmNyb3Bab25lLmhlaWdodCA9IGhlaWdodDtcblxuICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMuYnJpbmdUb0Zyb250KHRoaXMuY3JvcFpvbmUpO1xuXG4gICAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoXCJjcm9wOnVwZGF0ZVwiKTtcbiAgICB9XG4gIH0pO1xufSgpKTtcbiIsIihmdW5jdGlvbiAoKSB7XG4gIGZhYnJpYy5JbWFnZS5wcm90b3R5cGUuc3Ryb2tlV2lkdGggPSAwO1xuICBjb25zdCBQZW5jaWwgPSBEYXJrcm9vbS5UcmFuc2Zvcm1hdGlvbi5leHRlbmQoe1xuICAgIGFwcGx5VHJhbnNmb3JtYXRpb24oY2FudmFzLCBpbWFnZSwgbmV4dCkge1xuICAgICAgLy8gU25hcHNob3QgdGhlIGltYWdlIGRlbGltaXRlZCBieSB0aGUgY3JvcCB6b25lXG4gICAgICBjb25zdCBzbmFwc2hvdCA9IG5ldyBJbWFnZSgpO1xuICAgICAgc25hcHNob3Qub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBWYWxpZGF0ZSBpbWFnZVxuICAgICAgICBpZiAodGhpcy5oZWlnaHQgPCAxIHx8IHRoaXMud2lkdGggPCAxKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaW1nSW5zdGFuY2UgPSBuZXcgZmFicmljLkltYWdlKHRoaXMsIHtcbiAgICAgICAgICAvLyBvcHRpb25zIHRvIG1ha2UgdGhlIGltYWdlIHN0YXRpY1xuICAgICAgICAgIHNlbGVjdGFibGU6IGZhbHNlLFxuICAgICAgICAgIGV2ZW50ZWQ6IGZhbHNlLFxuICAgICAgICAgIGxvY2tNb3ZlbWVudFg6IHRydWUsXG4gICAgICAgICAgbG9ja01vdmVtZW50WTogdHJ1ZSxcbiAgICAgICAgICBsb2NrUm90YXRpb246IHRydWUsXG4gICAgICAgICAgbG9ja1NjYWxpbmdYOiB0cnVlLFxuICAgICAgICAgIGxvY2tTY2FsaW5nWTogdHJ1ZSxcbiAgICAgICAgICBsb2NrVW5pU2NhbGluZzogdHJ1ZSxcbiAgICAgICAgICBoYXNDb250cm9sczogZmFsc2UsXG4gICAgICAgICAgaGFzQm9yZGVyczogZmFsc2VcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQWRkIGltYWdlXG4gICAgICAgIGNhbnZhcy5hZGQoaW1nSW5zdGFuY2UpO1xuXG4gICAgICAgIG5leHQoaW1nSW5zdGFuY2UpO1xuICAgICAgfTtcblxuICAgICAgY2FudmFzLmFkZCh0aGlzLm9wdGlvbnMucGVuY2lsWm9uZSk7XG4gICAgICBjYW52YXMucmVuZGVyQWxsKCk7XG4gICAgICBzbmFwc2hvdC5zcmMgPSBjYW52YXMudG9EYXRhVVJMKCk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBQZW5jaWxab25lID0gZmFicmljLnV0aWwuY3JlYXRlQ2xhc3MoZmFicmljLk9iamVjdCwge1xuICAgIHR5cGU6IFwicGVuY2lsT2JqZWN0XCIsXG5cbiAgICBpbml0aWFsaXplKG9wdGlvbnMpIHtcbiAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICB0aGlzLmxlZnQgPSBvcHRpb25zLmxlZnQgfHwgMDtcbiAgICAgIHRoaXMudG9wID0gb3B0aW9ucy50b3AgfHwgMDtcbiAgICAgIHRoaXMud2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgICAgdGhpcy5oZWlnaHQgPSBvcHRpb25zLmhlaWdodDtcbiAgICAgIHRoaXMub3JpZ2luYWxXaWR0aCA9IHRoaXMud2lkdGg7XG4gICAgICB0aGlzLm9yaWdpbmFsSGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG4gICAgICB0aGlzLnN0cm9rZSA9IG9wdGlvbnMuc3Ryb2tlO1xuICAgICAgdGhpcy5zaXplID0gb3B0aW9ucy5zaXplO1xuICAgICAgdGhpcy5wYXRoID0gbnVsbDtcbiAgICAgIHRoaXMuY1ggPSAtdGhpcy5nZXRXaWR0aCgpIC8gMjtcbiAgICAgIHRoaXMuY1kgPSAtdGhpcy5nZXRIZWlnaHQoKSAvIDI7XG4gICAgICB0aGlzLmNhbGxTdXBlcihcImluaXRpYWxpemVcIiwgb3B0aW9ucyk7XG4gICAgfSxcblxuICAgIF9hcHBseVNjYWxpbmcodywgaCkge1xuICAgICAgY29uc3Qgc2NhbGVYID0gdGhpcy5nZXRXaWR0aCgpIC8gdztcbiAgICAgIGNvbnN0IHNjYWxlWSA9IHRoaXMuZ2V0SGVpZ2h0KCkgLyBoO1xuICAgICAgdGhpcy5zZXQoe1xuICAgICAgICBzY2FsZVg6IHRoaXMuc2NhbGVYIC8gc2NhbGVYLFxuICAgICAgICBzY2FsZVk6IHRoaXMuc2NhbGVZIC8gc2NhbGVZXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgX3JlbmRlcihjdHgpIHtcbiAgICAgIHRoaXMuX2RyYXcoY3R4KTtcbiAgICB9LFxuXG4gICAgX2RyYXcoY3R4KSB7XG4gICAgICBpZiAoY3R4ICYmIHRoaXMucGF0aCAmJiB0aGlzLnBhdGgubGVuZ3RoID4gMCkge1xuICAgICAgICBjdHgubGluZUpvaW4gPSBcInJvdW5kXCI7XG4gICAgICAgIGN0eC5saW5lQ2FwID0gXCJyb3VuZFwiO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5tb3ZlVG8oXG4gICAgICAgICAgKHRoaXMuY1ggKyB0aGlzLnBhdGhbMF0ueCksXG4gICAgICAgICAgKHRoaXMuY1kgKyB0aGlzLnBhdGhbMF0ueSlcbiAgICAgICAgKTtcblxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMucGF0aC5sZW5ndGg7IHggKz0gMSkge1xuICAgICAgICAgIGNvbnN0IGRyYXdYID0gKHRoaXMuY1ggKyB0aGlzLnBhdGhbeF0ueCk7XG4gICAgICAgICAgY29uc3QgZHJhd1kgPSAodGhpcy5jWSArIHRoaXMucGF0aFt4XS55KTtcbiAgICAgICAgICBjdHgubGluZVRvKGRyYXdYLCBkcmF3WSk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuc3Ryb2tlO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gdGhpcy5zaXplO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGNsb25lKCkge1xuICAgICAgcmV0dXJuIG5ldyBQZW5jaWxab25lKHtcbiAgICAgICAgc3Ryb2tlOiB0aGlzLnN0cm9rZSxcbiAgICAgICAgc2l6ZTogdGhpcy5zaXplLFxuICAgICAgICB3aWR0aDogdGhpcy53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgICAgc2VsZWN0YWJsZTogZmFsc2UsXG4gICAgICAgIGxvY2tSb3RhdGlvbjogdHJ1ZSxcbiAgICAgICAgZXZlbnRlZDogZmFsc2UsXG4gICAgICAgIGxvY2tNb3ZlbWVudFg6IHRydWUsXG4gICAgICAgIGxvY2tNb3ZlbWVudFk6IHRydWUsXG4gICAgICAgIGxvY2tTY2FsaW5nWDogdHJ1ZSxcbiAgICAgICAgbG9ja1NjYWxpbmdZOiB0cnVlLFxuICAgICAgICBsb2NrVW5pU2NhbGluZzogdHJ1ZSxcbiAgICAgICAgaGFzQ29udHJvbHM6IGZhbHNlLFxuICAgICAgICBoYXNCb3JkZXJzOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICBEYXJrcm9vbS5wbHVnaW5zLnBlbmNpbCA9IERhcmtyb29tLlBsdWdpbi5leHRlbmQoe1xuICAgIHBlbmNpbE1vZGU6IGZhbHNlLFxuICAgIHBlbmNpbFpvbmU6IG51bGwsXG4gICAgbW91c2VEb3duOiBmYWxzZSxcbiAgICBzaXplOiAzMCxcbiAgICBkZWZhdWx0czoge1xuICAgICAgc3Ryb2tlOiBcImJsYWNrXCIsXG4gICAgICBzaXplOiAzMFxuICAgIH0sXG5cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgY29uc3QgYnV0dG9uR3JvdXAgPSB0aGlzLmRhcmtyb29tLnRvb2xiYXIuY3JlYXRlQnV0dG9uR3JvdXAoKTtcblxuICAgICAgdGhpcy5wZW5jaWxCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xuICAgICAgICBpbWFnZTogXCJwZW5jaWxcIixcbiAgICAgICAgdG9vbHRpcDogXCJEcmF3XCJcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnBhdGggPSBbXTtcbiAgICAgIHRoaXMud2lkdGggPSB0aGlzLmRhcmtyb29tLmNhbnZhcy53aWR0aDtcbiAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5kYXJrcm9vbS5jYW52YXMuaGVpZ2h0O1xuICAgICAgdGhpcy5zaXplID0gdGhpcy5vcHRpb25zLnNpemU7XG4gICAgICB0aGlzLnN0cm9rZSA9IHRoaXMub3B0aW9ucy5zdHJva2U7XG5cbiAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLm9uKFwibW91c2U6ZG93blwiLCB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMub24oXCJtb3VzZTptb3ZlXCIsIHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbihcIm1vdXNlOnVwXCIsIHRoaXMub25Nb3VzZVVwLmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5wZW5jaWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMub25DbGljay5iaW5kKHRoaXMpKTtcbiAgICB9LFxuXG4gICAgY2xlYXIoKSB7XG4gICAgICBpZiAodGhpcy5oYXNGb2N1cygpKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRm9jdXMoKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgaGFzRm9jdXMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wZW5jaWxab25lICE9PSBudWxsO1xuICAgIH0sXG5cbiAgICBvbkNsaWNrKCkge1xuICAgICAgaWYgKCF0aGlzLmhhc0ZvY3VzKCkpIHtcbiAgICAgICAgdGhpcy5yZXF1aXJlRm9jdXMoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5yZW1vdmVGb2N1cygpO1xuICAgIH0sXG5cbiAgICBvbk1vdXNlRG93bihldmVudCkge1xuICAgICAgZXZlbnQuZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKCF0aGlzLmhhc0ZvY3VzKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoXCJwZW5jaWw6YmVnaW5cIik7XG4gICAgICB0aGlzLm1vdXNlRG93biA9IHRydWU7XG4gICAgICB0aGlzLnBhdGgucHVzaCh0aGlzLmdldE1vdXNlUG9zaXRpb24odGhpcy5jYW52YXMsIGV2ZW50KSk7XG4gICAgICB0aGlzLnJlbmRlclpvbmUoKTtcbiAgICB9LFxuXG4gICAgb25Nb3VzZVVwKGV2ZW50KSB7XG4gICAgICBpZiAoIXRoaXMuaGFzRm9jdXMoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLm1vdXNlRG93bikge1xuICAgICAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoXCJwZW5jaWw6ZW5kXCIpO1xuICAgICAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xuICAgICAgICBjb25zdCBtb3VzZVBvcyA9IHRoaXMuZ2V0TW91c2VQb3NpdGlvbih0aGlzLmNhbnZhcywgZXZlbnQpO1xuICAgICAgICB0aGlzLnBhdGgucHVzaChtb3VzZVBvcyk7XG4gICAgICAgIHRoaXMucmVuZGVyWm9uZSgpO1xuICAgICAgICB0aGlzLmFwcGx5UGVuY2lsUGF0aCgpO1xuICAgICAgICB0aGlzLnBhdGggPSBbXTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgb25Nb3VzZU1vdmUoZXZlbnQpIHtcbiAgICAgIGlmICghdGhpcy5oYXNGb2N1cygpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMubW91c2VEb3duKSB7XG4gICAgICAgIGNvbnN0IG1vdXNlUG9zID0gdGhpcy5nZXRNb3VzZVBvc2l0aW9uKHRoaXMuY2FudmFzLCBldmVudCk7XG4gICAgICAgIHRoaXMucGF0aC5wdXNoKG1vdXNlUG9zKTtcbiAgICAgICAgdGhpcy5yZW5kZXJab25lKCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIHJlbW92ZUZvY3VzKCkge1xuICAgICAgdGhpcy5kYXJrcm9vbS5kaXNwYXRjaEV2ZW50KFwicGVuY2lsOmRpc2FibGVkXCIpO1xuICAgICAgdGhpcy5wZW5jaWxCdXR0b24uYWN0aXZlKGZhbHNlKTtcbiAgICAgIHRoaXMucGVuY2lsTW9kZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMuZGVmYXVsdEN1cnNvciA9IFwiZGVmYXVsdFwiO1xuICAgICAgaWYgKHRoaXMucGVuY2lsWm9uZSkge1xuICAgICAgICB0aGlzLnBlbmNpbFpvbmUucmVtb3ZlKCk7XG4gICAgICAgIHRoaXMucGVuY2lsWm9uZSA9IG51bGw7XG4gICAgICB9XG4gICAgfSxcblxuICAgIHJlcXVpcmVGb2N1cygpIHtcbiAgICAgIHRoaXMuZGFya3Jvb20uY2xlYXJGb2N1cyhcInBlbmNpbFwiKTtcbiAgICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudChcInBlbmNpbDplbmFibGVkXCIpO1xuICAgICAgdGhpcy5wZW5jaWxNb2RlID0gdHJ1ZTtcbiAgICAgIHRoaXMucGVuY2lsQnV0dG9uLmFjdGl2ZSh0cnVlKTtcblxuICAgICAgdGhpcy5wZW5jaWxab25lID0gdGhpcy5uZXdab25lKCk7XG5cbiAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLmFkZCh0aGlzLnBlbmNpbFpvbmUpO1xuICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMuZGVmYXVsdEN1cnNvciA9IFwiY3Jvc3NoYWlyXCI7XG4gICAgfSxcblxuICAgIGdldE1vdXNlUG9zaXRpb24oY2FudmFzLCBldmVudCkge1xuICAgICAgdmFyIGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xuICAgICAgY29uc3QgcmVjdCA9IGNhbnZhcy5sb3dlckNhbnZhc0VsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3QgcG9pbnRlciA9IGNhbnZhcy5nZXRQb2ludGVyKGV2ZW50LmUpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgeDogcG9pbnRlci54LFxuICAgICAgICB5OiBwb2ludGVyLnksXG4gICAgICAgIGN4OiBldmVudC5lLmNsaWVudFggLSByZWN0LmxlZnQsXG4gICAgICAgIGN5OiBldmVudC5lLmNsaWVudFkgLSByZWN0LnRvcCxcbiAgICAgICAgc3g6IGV2ZW50LmUuc2NyZWVuWCxcbiAgICAgICAgc3k6IGV2ZW50LmUuc2NyZWVuWVxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgbmV3Wm9uZSgpIHtcbiAgICAgIHRoaXMucGF0aCA9IFtdO1xuICAgICAgY29uc3Qgc3Ryb2tlID0gdGhpcy5zdHJva2U7XG4gICAgICBjb25zdCBzaXplID0gdGhpcy5zaXplO1xuICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLmRhcmtyb29tLmNhbnZhcy5nZXRXaWR0aCgpO1xuICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5kYXJrcm9vbS5jYW52YXMuZ2V0SGVpZ2h0KCk7XG4gICAgICBjb25zdCB6b25lID0gbmV3IFBlbmNpbFpvbmUoe1xuICAgICAgICBzdHJva2UsXG4gICAgICAgIHNpemUsXG4gICAgICAgIHdpZHRoLFxuICAgICAgICBoZWlnaHQsXG4gICAgICAgIHNlbGVjdGFibGU6IGZhbHNlLFxuICAgICAgICBsb2NrUm90YXRpb246IHRydWUsXG4gICAgICAgIGV2ZW50ZWQ6IGZhbHNlLFxuICAgICAgICBsb2NrTW92ZW1lbnRYOiB0cnVlLFxuICAgICAgICBsb2NrTW92ZW1lbnRZOiB0cnVlLFxuICAgICAgICBsb2NrU2NhbGluZ1g6IHRydWUsXG4gICAgICAgIGxvY2tTY2FsaW5nWTogdHJ1ZSxcbiAgICAgICAgbG9ja1VuaVNjYWxpbmc6IHRydWUsXG4gICAgICAgIGhhc0NvbnRyb2xzOiBmYWxzZSxcbiAgICAgICAgaGFzQm9yZGVyczogZmFsc2VcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gem9uZTtcbiAgICB9LFxuXG4gICAgYXBwbHlQZW5jaWxQYXRoKCkge1xuICAgICAgaWYgKCF0aGlzLmhhc0ZvY3VzKCkpIHsgcmV0dXJuOyB9XG5cbiAgICAgIC8vIEF2b2lkIGNyb3BpbmcgZW1wdHkgem9uZVxuICAgICAgaWYgKHRoaXMucGF0aCA9PT0gbnVsbCB8fCB0aGlzLnBhdGgubGVuZ3RoID09PSAwKSB7IHJldHVybjsgfVxuXG4gICAgICAvLyBBcHBseSBjcm9wIHRyYW5zZm9ybWF0aW9uLlxuICAgICAgLy8gTWFrZSBzdXJlIHRvIHVzZSByZWxhdGl2ZSBkaW1lbnNpb24gc2luY2UgdGhlIGNyb3Agd2lsbCBiZSBhcHBsaWVkXG4gICAgICAvLyBvbiB0aGUgc291cmNlIGltYWdlLlxuICAgICAgY29uc3Qgem9uZSA9IHRoaXMucGVuY2lsWm9uZS5jbG9uZSgpO1xuICAgICAgem9uZS5wYXRoID0gdGhpcy5wYXRoO1xuICAgICAgem9uZS5sZWZ0IC09IHRoaXMuZGFya3Jvb20ub3B0aW9ucy5sZWZ0O1xuICAgICAgem9uZS50b3AgLT0gdGhpcy5kYXJrcm9vbS5vcHRpb25zLnRvcDtcbiAgICAgIHRoaXMuZGFya3Jvb20uYXBwbHlUcmFuc2Zvcm1hdGlvbihuZXcgUGVuY2lsKHtcbiAgICAgICAgcGVuY2lsWm9uZTogem9uZVxuICAgICAgfSkpO1xuICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMuYWRkKHRoaXMucGVuY2lsWm9uZSk7XG4gICAgfSxcblxuICAgIHJlbmRlclpvbmUoKSB7XG4gICAgICBpZiAodGhpcy5wYXRoICYmIHRoaXMucGF0aC5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudChcInBlbmNpbDp1cGRhdGVcIik7XG4gICAgICAgIHRoaXMucGVuY2lsWm9uZS5wYXRoID0gdGhpcy5wYXRoO1xuICAgICAgfVxuICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMuYnJpbmdUb0Zyb250KHRoaXMucGVuY2lsWm9uZSk7XG4gICAgfVxuXG4gIH0pO1xufSgpKTtcbiIsIihmdW5jdGlvbiAoKSB7XG4gIGxldCByZWN0O1xuICBsZXQgaXNEb3duO1xuICBsZXQgb3JpZ1g7XG4gIGxldCBvcmlnWTtcbiAgbGV0IGhhc0ZvY3VzID0gdHJ1ZTtcblxuICBmYWJyaWMuSW1hZ2UucHJvdG90eXBlLnN0cm9rZVdpZHRoID0gMDtcbiAgY29uc3QgUmVjdGFuZ2xlVHJhbnNmb3JtYXRpb24gPSBEYXJrcm9vbS5UcmFuc2Zvcm1hdGlvbi5leHRlbmQoe1xuICAgIGFwcGx5VHJhbnNmb3JtYXRpb24oY2FudmFzLCBpbWFnZSwgbmV4dCkge1xuICAgICAgY29uc3Qgc25hcHNob3QgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIHNuYXBzaG90Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaGVpZ2h0IDwgMSB8fCB0aGlzLndpZHRoIDwgMSkgeyByZXR1cm47IH1cbiAgICAgICAgY29uc3QgaW1nSW5zdGFuY2UgPSBuZXcgZmFicmljLkltYWdlKHRoaXMsIHtcbiAgICAgICAgICAvLyBvcHRpb25zIHRvIG1ha2UgdGhlIGltYWdlIHN0YXRpY1xuICAgICAgICAgIHNlbGVjdGFibGU6IGZhbHNlLFxuICAgICAgICAgIGV2ZW50ZWQ6IGZhbHNlLFxuICAgICAgICAgIGxvY2tNb3ZlbWVudFg6IHRydWUsXG4gICAgICAgICAgbG9ja01vdmVtZW50WTogdHJ1ZSxcbiAgICAgICAgICBsb2NrUm90YXRpb246IHRydWUsXG4gICAgICAgICAgbG9ja1NjYWxpbmdYOiB0cnVlLFxuICAgICAgICAgIGxvY2tTY2FsaW5nWTogdHJ1ZSxcbiAgICAgICAgICBsb2NrVW5pU2NhbGluZzogdHJ1ZSxcbiAgICAgICAgICBoYXNDb250cm9sczogZmFsc2UsXG4gICAgICAgICAgaGFzQm9yZGVyczogZmFsc2VcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQWRkIGltYWdlXG4gICAgICAgIGNhbnZhcy5hZGQoaW1nSW5zdGFuY2UpO1xuXG4gICAgICAgIG5leHQoaW1nSW5zdGFuY2UpO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgbmV3UmVjdCA9IHRoaXMub3B0aW9ucy5yZWN0YW5nbGU7XG4gICAgICBjb25zdCBzY2FsZVggPSB0aGlzLm9wdGlvbnMub3JpZ2luYWxXaWR0aCAvIGNhbnZhcy5nZXRXaWR0aCgpO1xuICAgICAgY29uc3Qgc2NhbGVZID0gdGhpcy5vcHRpb25zLm9yaWdpbmFsSGVpZ2h0IC8gY2FudmFzLmdldEhlaWdodCgpO1xuICAgICAgbmV3UmVjdC5zZXQoeyBzY2FsZVg6IDEgLyBzY2FsZVgsIHNjYWxlWTogMSAvIHNjYWxlWSB9KTtcbiAgICAgIGNhbnZhcy5hZGQobmV3UmVjdCk7XG4gICAgICBjYW52YXMucmVuZGVyQWxsKCk7XG4gICAgICBzbmFwc2hvdC5zcmMgPSBjYW52YXMudG9EYXRhVVJMKCk7XG4gICAgfVxuICB9KTtcblxuICBEYXJrcm9vbS5wbHVnaW5zLnJlY3RhbmdsZSA9IERhcmtyb29tLlBsdWdpbi5leHRlbmQoe1xuICAgIHJlY3RhbmdsZVpvbmU6IG51bGwsXG5cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgY29uc3QgYnV0dG9uR3JvdXAgPSB0aGlzLmRhcmtyb29tLnRvb2xiYXIuY3JlYXRlQnV0dG9uR3JvdXAoKTtcblxuICAgICAgdGhpcy5yZWN0YW5nbGVCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xuICAgICAgICBpbWFnZTogXCJyZWN0YW5nbGVcIixcbiAgICAgICAgdG9vbHRpcDogXCJEcmF3XCJcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbihcIm1vdXNlOmRvd25cIiwgdGhpcy5vbk1vdXNlRG93bi5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLm9uKFwibW91c2U6bW92ZVwiLCB0aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMub24oXCJtb3VzZTp1cFwiLCB0aGlzLmhhbmRsZU1vdXNlVXAuYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLnJlY3RhbmdsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5vbkNsaWNrLmJpbmQodGhpcykpO1xuICAgIH0sXG5cbiAgICBjbGVhcigpIHtcbiAgICAgIHRoaXMucmVjdGFuZ2xlQnV0dG9uLmFjdGl2ZShmYWxzZSk7XG4gICAgICBoYXNGb2N1cyA9IHRydWU7XG4gICAgICBpc0Rvd24gPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgb25DbGljaygpIHtcbiAgICAgIGlmICghaGFzRm9jdXMpIHtcbiAgICAgICAgdGhpcy5yZWN0YW5nbGVCdXR0b24uYWN0aXZlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMuZGVmYXVsdEN1cnNvciA9IFwiZGVmYXVsdFwiO1xuICAgICAgICBoYXNGb2N1cyA9IHRydWU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGFya3Jvb20uY2xlYXJGb2N1cyhcInJlY3RhbmdsZVwiKTtcbiAgICAgIHRoaXMucmVjdGFuZ2xlQnV0dG9uLmFjdGl2ZSh0cnVlKTtcbiAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLmRlZmF1bHRDdXJzb3IgPSBcImNyb3NzaGFpclwiO1xuICAgICAgaGFzRm9jdXMgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgb25Nb3VzZURvd24oZXZlbnQpIHtcbiAgICAgIGV2ZW50LmUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmIChoYXNGb2N1cykgcmV0dXJuO1xuICAgICAgdGhpcy5kYXJrcm9vbS5kaXNwYXRjaEV2ZW50KFwicmVjdGFuZ2xlOmJlZ2luXCIpO1xuICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XG4gICAgICBpc0Rvd24gPSB0cnVlO1xuICAgICAgY29uc3QgcG9pbnRlciA9IGNhbnZhcy5nZXRQb2ludGVyKGV2ZW50LmUpO1xuICAgICAgb3JpZ1ggPSBwb2ludGVyLng7XG4gICAgICBvcmlnWSA9IHBvaW50ZXIueTtcbiAgICAgIHJlY3QgPSBuZXcgZmFicmljLlJlY3Qoe1xuICAgICAgICBsZWZ0OiBvcmlnWCxcbiAgICAgICAgdG9wOiBvcmlnWSxcbiAgICAgICAgb3JpZ2luWDogXCJsZWZ0XCIsXG4gICAgICAgIG9yaWdpblk6IFwidG9wXCIsXG4gICAgICAgIHdpZHRoOiBwb2ludGVyLnggLSBvcmlnWCxcbiAgICAgICAgaGVpZ2h0OiBwb2ludGVyLnkgLSBvcmlnWSxcbiAgICAgICAgYW5nbGU6IDAsXG4gICAgICAgIGZpbGw6IFwiYmxhY2tcIixcbiAgICAgICAgdHJhbnNwYXJlbnRDb3JuZXJzOiBmYWxzZVxuICAgICAgfSk7XG4gICAgICBjYW52YXMuYWRkKHJlY3QpO1xuICAgIH0sXG5cbiAgICBvbk1vdXNlTW92ZShldmVudCkge1xuICAgICAgaWYgKGlzRG93bikge1xuICAgICAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoXCJyZWN0YW5nbGU6dXBkYXRlXCIpO1xuICAgICAgICBjb25zdCBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcbiAgICAgICAgY29uc3QgcG9pbnRlciA9IGNhbnZhcy5nZXRQb2ludGVyKGV2ZW50LmUpO1xuXG4gICAgICAgIGlmIChvcmlnWCA+IHBvaW50ZXIueCkge1xuICAgICAgICAgIHJlY3Quc2V0KHtcbiAgICAgICAgICAgIGxlZnQ6IE1hdGguYWJzKHBvaW50ZXIueClcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3JpZ1kgPiBwb2ludGVyLnkpIHtcbiAgICAgICAgICByZWN0LnNldCh7XG4gICAgICAgICAgICB0b3A6IE1hdGguYWJzKHBvaW50ZXIueSlcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlY3Quc2V0KHtcbiAgICAgICAgICB3aWR0aDogTWF0aC5hYnMob3JpZ1ggLSBwb2ludGVyLngpXG4gICAgICAgIH0pO1xuICAgICAgICByZWN0LnNldCh7XG4gICAgICAgICAgaGVpZ2h0OiBNYXRoLmFicyhvcmlnWSAtIHBvaW50ZXIueSlcbiAgICAgICAgfSk7XG4gICAgICAgIGNhbnZhcy5yZW5kZXJBbGwoKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgaGFuZGxlTW91c2VVcCgpIHtcbiAgICAgIGlmIChoYXNGb2N1cykgcmV0dXJuO1xuICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XG4gICAgICBpc0Rvd24gPSBmYWxzZTtcbiAgICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudChcInJlY3RhbmdsZTplbmRcIik7XG4gICAgICByZWN0LmxlZnQgLT0gdGhpcy5kYXJrcm9vbS5vcHRpb25zLmxlZnQ7XG4gICAgICByZWN0LnRvcCAtPSB0aGlzLmRhcmtyb29tLm9wdGlvbnMudG9wO1xuICAgICAgdGhpcy5kYXJrcm9vbS5hcHBseVRyYW5zZm9ybWF0aW9uKG5ldyBSZWN0YW5nbGVUcmFuc2Zvcm1hdGlvbih7XG4gICAgICAgIG9yaWdpbmFsV2lkdGg6IGNhbnZhcy5nZXRXaWR0aCgpLFxuICAgICAgICBvcmlnaW5hbEhlaWdodDogY2FudmFzLmdldEhlaWdodCgpLFxuICAgICAgICByZWN0YW5nbGU6IHJlY3RcbiAgICAgIH0pKTtcbiAgICB9XG4gIH0pO1xufSgpKTtcbiIsIihmdW5jdGlvbiAoKSB7XG4gIGxldCBoYXNGb2N1cyA9IGZhbHNlO1xuXG4gIGZhYnJpYy5JbWFnZS5wcm90b3R5cGUuc3Ryb2tlV2lkdGggPSAwO1xuICBjb25zdCBUZXh0ID0gRGFya3Jvb20uVHJhbnNmb3JtYXRpb24uZXh0ZW5kKHtcbiAgICBhcHBseVRyYW5zZm9ybWF0aW9uKGNhbnZhcywgaW1hZ2UsIG5leHQpIHtcbiAgICAgIGNvbnN0IHNuYXBzaG90ID0gbmV3IEltYWdlKCk7XG4gICAgICBzbmFwc2hvdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFZhbGlkYXRlIGltYWdlXG4gICAgICAgIGlmICh0aGlzLmhlaWdodCA8IDEgfHwgdGhpcy53aWR0aCA8IDEpIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgY29uc3QgaW1nSW5zdGFuY2UgPSBuZXcgZmFicmljLkltYWdlKHRoaXMsIHtcbiAgICAgICAgICAvLyBvcHRpb25zIHRvIG1ha2UgdGhlIGltYWdlIHN0YXRpY1xuICAgICAgICAgIHNlbGVjdGFibGU6IGZhbHNlLFxuICAgICAgICAgIGV2ZW50ZWQ6IGZhbHNlLFxuICAgICAgICAgIGxvY2tNb3ZlbWVudFg6IHRydWUsXG4gICAgICAgICAgbG9ja01vdmVtZW50WTogdHJ1ZSxcbiAgICAgICAgICBsb2NrUm90YXRpb246IHRydWUsXG4gICAgICAgICAgbG9ja1NjYWxpbmdYOiB0cnVlLFxuICAgICAgICAgIGxvY2tTY2FsaW5nWTogdHJ1ZSxcbiAgICAgICAgICBsb2NrVW5pU2NhbGluZzogdHJ1ZSxcbiAgICAgICAgICBoYXNDb250cm9sczogZmFsc2UsXG4gICAgICAgICAgaGFzQm9yZGVyczogZmFsc2VcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQWRkIGltYWdlXG4gICAgICAgIGNhbnZhcy5hZGQoaW1nSW5zdGFuY2UpO1xuXG4gICAgICAgIG5leHQoaW1nSW5zdGFuY2UpO1xuICAgICAgfTtcblxuICAgICAgY2FudmFzLmFkZCh0aGlzLm9wdGlvbnMudGV4dCk7XG4gICAgICBjYW52YXMucmVuZGVyQWxsKCk7XG4gICAgICBzbmFwc2hvdC5zcmMgPSBjYW52YXMudG9EYXRhVVJMKCk7XG4gICAgfVxuICB9KTtcbiAgRGFya3Jvb20ucGx1Z2lucy50ZXh0ID0gRGFya3Jvb20uUGx1Z2luLmV4dGVuZCh7XG4gICAgZGVmYXVsdHM6IHtcbiAgICAgIHRleHQ6IFwiU2FtcGxlIFRleHQuLi5cIlxuICAgIH0sXG5cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgY29uc3QgYnV0dG9uR3JvdXAgPSB0aGlzLmRhcmtyb29tLnRvb2xiYXIuY3JlYXRlQnV0dG9uR3JvdXAoKTtcblxuICAgICAgdGhpcy50ZXh0QnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcbiAgICAgICAgaW1hZ2U6IFwidGV4dFwiLFxuICAgICAgICB0aXRsZTogXCJBZGQgVGV4dFwiXG4gICAgICB9KTtcbiAgICAgIHRoaXMub2tCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xuICAgICAgICBpbWFnZTogXCJkb25lXCIsXG4gICAgICAgIHR5cGU6IFwic3VjY2Vzc1wiLFxuICAgICAgICBoaWRlOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIHRoaXMuY2FuY2VsQnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcbiAgICAgICAgaW1hZ2U6IFwiY2xvc2VcIixcbiAgICAgICAgdHlwZTogXCJkYW5nZXJcIixcbiAgICAgICAgaGlkZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgICAvLyB0aGlzLmNvbG9yUGlja2VyID0gYnV0dG9uR3JvdXAuY3JlYXRlSW5wdXQoe1xuICAgICAgLy8gICBpbWFnZTogXCJjb2xvclwiLFxuICAgICAgLy8gICB0aXRsZTogXCJDb2xvciBQaWNrZXJcIixcbiAgICAgIC8vICAgdmFsdWU6IFwiXCIsXG4gICAgICAvLyAgIGhpZGU6IHRydWVcbiAgICAgIC8vIH0pO1xuXG4gICAgICB0aGlzLnRleHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuYWRkVGV4dC5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMub2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuc2F2ZVRleHQuYmluZCh0aGlzKSk7XG4gICAgICAvLyB0aGlzLmNvbG9yUGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgdGhpcy5zZXRDb2xvci5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMuY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnJlbGVhc2VGb2N1cy5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLm9uKFwibW91c2U6ZG93blwiLCB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMub24oXCJtb3VzZTptb3ZlXCIsIHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbihcIm1vdXNlOnVwXCIsIHRoaXMuaGFuZGxlTW91c2VVcC5iaW5kKHRoaXMpKTtcblxuICAgICAgdGhpcy5kYXJrcm9vbS5hZGRFdmVudExpc3RlbmVyKFwiY29yZTp0cmFuc2Zvcm1hdGlvblwiLCB0aGlzLnJlbGVhc2VGb2N1cy5iaW5kKHRoaXMpKTtcbiAgICB9LFxuXG4gICAgY2xlYXIoKSB7XG4gICAgICB0aGlzLnRleHRCdXR0b24uYWN0aXZlKGZhbHNlKTtcbiAgICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudChcInRleHQ6ZW5kXCIpO1xuICAgICAgdGhpcy50ZXh0QnV0dG9uLmFjdGl2ZShmYWxzZSk7XG4gICAgICB0aGlzLm9rQnV0dG9uLmhpZGUodHJ1ZSk7XG4gICAgICB0aGlzLmNhbmNlbEJ1dHRvbi5oaWRlKHRydWUpO1xuICAgICAgLy8gdGhpcy5jb2xvclBpY2tlci5oaWRlKHRydWUpO1xuICAgICAgaWYgKHRoaXMubmV3VGV4dCkge1xuICAgICAgICB0aGlzLm5ld1RleHQucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgICBoYXNGb2N1cyA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICBhZGRUZXh0KCkge1xuICAgICAgaWYgKGhhc0ZvY3VzKSB7XG4gICAgICAgIHRoaXMucmVsZWFzZUZvY3VzKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGhhc0ZvY3VzID0gdHJ1ZTtcbiAgICAgIHRoaXMuZGFya3Jvb20uY2xlYXJGb2N1cyhcInRleHRcIik7XG5cbiAgICAgIHRoaXMudGV4dEJ1dHRvbi5hY3RpdmUodHJ1ZSk7XG4gICAgICB0aGlzLm9rQnV0dG9uLmhpZGUoZmFsc2UpO1xuICAgICAgdGhpcy5jYW5jZWxCdXR0b24uaGlkZShmYWxzZSk7XG4gICAgICAvLyB0aGlzLmNvbG9yUGlja2VyLmhpZGUoZmFsc2UpO1xuXG4gICAgICBjb25zdCBmYWN0b3IgPSB0aGlzLmRhcmtyb29tLmltYWdlLnNjYWxlWDtcbiAgICAgIGNvbnN0IHRleHQgPSBuZXcgZmFicmljLklUZXh0KHRoaXMub3B0aW9ucy50ZXh0LCB7XG4gICAgICAgIGxlZnQ6IDEwMCAqIGZhY3RvcixcbiAgICAgICAgdG9wOiAxMDAgKiBmYWN0b3IsXG4gICAgICAgIGZpbGw6IFwiYmxhY2tcIixcbiAgICAgICAgZm9udEZhbWlseTogXCJNb25vc3BhY2VcIixcbiAgICAgICAgZm9udFNpemU6IDI1LFxuICAgICAgICBsb2NrU2tld2luZ1g6IHRydWUsXG4gICAgICAgIGxvY2tTa2V3aW5nWTogdHJ1ZSxcbiAgICAgICAgc2NhbGVYOiBmYWN0b3IsXG4gICAgICAgIHNjYWxlWTogZmFjdG9yLFxuICAgICAgICBwYWRkaW5nOiAxMFxuICAgICAgfSk7XG5cbiAgICAgIHRleHQub24odGhpcy5pbWFnZSA9IHRoaXMuZGFya3Jvb20uaW1hZ2UsIHtcbiAgICAgICAgc2NhbGluZygpIHtcbiAgICAgICAgICB0aGlzLmZhY3RvciA9IHRoaXMuaW1hZ2Uuc2NhbGVYO1xuXG4gICAgICAgICAgY29uc3Qgb2JqID0gdGhpcztcbiAgICAgICAgICBjb25zdCB3ID0gb2JqLndpZHRoICogb2JqLnNjYWxlWCAvIGZhY3RvcjtcbiAgICAgICAgICBjb25zdCBoID0gb2JqLmhlaWdodCAqIG9iai5zY2FsZVkgLyBmYWN0b3I7XG5cbiAgICAgICAgICBvYmouc2V0KHtcbiAgICAgICAgICAgIHdpZHRoOiB3LFxuICAgICAgICAgICAgaGVpZ2h0OiBoLFxuICAgICAgICAgICAgc2NhbGVYOiBmYWN0b3IsXG4gICAgICAgICAgICBzY2FsZVk6IGZhY3RvclxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMuYWRkKHRleHQpO1xuICAgICAgdGhpcy5uZXdUZXh0ID0gdGV4dDtcbiAgICB9LFxuXG4gICAgLy8gc2V0Q29sb3IoZXZlbnQpIHtcbiAgICAvLyAgIHRoaXMuc2V0U3R5bGUodGhpcywgXCJmaWxsXCIsIGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgLy8gfSxcblxuICAgIC8vIHNldFN0eWxlKG9iamVjdCwgc3R5bGVOYW1lLCB2YWx1ZSkge1xuICAgIC8vICAgY29uc3QgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XG4gICAgLy8gICBvYmplY3QubmV3VGV4dC5maWxsID0gdmFsdWU7XG4gICAgLy8gICBjYW52YXMucmVuZGVyQWxsKCk7XG4gICAgLy8gfSxcblxuICAgIHNhdmVUZXh0KCkge1xuICAgICAgdGhpcy5va0J1dHRvbi5oaWRlKHRydWUpO1xuICAgICAgdGhpcy5jYW5jZWxCdXR0b24uaGlkZSh0cnVlKTtcbiAgICAgIC8vIHRoaXMuY29sb3JQaWNrZXIuaGlkZSh0cnVlKTtcbiAgICAgIHRoaXMudGV4dEJ1dHRvbi5hY3RpdmUoZmFsc2UpO1xuICAgICAgdGhpcy5uZXdUZXh0Lmhhc0JvcmRlcnMgPSBmYWxzZTtcbiAgICAgIHRoaXMubmV3VGV4dC5oYXNDb250cm9scyA9IGZhbHNlO1xuICAgICAgdGhpcy5uZXdUZXh0Lmhhc1JvdGF0aW5nUG9pbnQgPSBmYWxzZTtcbiAgICAgIHRoaXMubmV3VGV4dC5zZWxlY3Rpb25Db2xvciA9IFwidHJhbnNwYXJlbnRcIjtcbiAgICAgIHRoaXMubmV3VGV4dC5hYm9ydEN1cnNvckFuaW1hdGlvbigpO1xuICAgICAgdGhpcy5uZXdUZXh0LmxlZnQgLT0gdGhpcy5kYXJrcm9vbS5vcHRpb25zLmxlZnQ7XG4gICAgICB0aGlzLm5ld1RleHQudG9wIC09IHRoaXMuZGFya3Jvb20ub3B0aW9ucy50b3A7XG4gICAgICB0aGlzLmRhcmtyb29tLmFwcGx5VHJhbnNmb3JtYXRpb24obmV3IFRleHQoe1xuICAgICAgICB0ZXh0OiB0aGlzLm5ld1RleHRcbiAgICAgIH0pKTtcbiAgICB9LFxuXG4gICAgb25Nb3VzZURvd24oKSB7XG4gICAgICBpZiAoIXRoaXMubmV3VGV4dCkgeyByZXR1cm47IH1cbiAgICAgIGlmICh0aGlzLm5ld1RleHQuYWN0aXZlKSB7XG4gICAgICAgIHRoaXMuaXNEb3duID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgb25Nb3VzZU1vdmUoKSB7XG4gICAgICBpZiAoIXRoaXMuaXNEb3duKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xuICAgICAgY2FudmFzLnJlbmRlckFsbCgpO1xuICAgIH0sXG5cbiAgICBoYW5kbGVNb3VzZVVwKCkge1xuICAgICAgdGhpcy5pc0Rvd24gPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgcmVsZWFzZUZvY3VzKCkge1xuICAgICAgaWYgKHRoaXMubmV3VGV4dCkgeyB0aGlzLm5ld1RleHQucmVtb3ZlKCk7IH1cblxuICAgICAgdGhpcy50ZXh0QnV0dG9uLmFjdGl2ZShmYWxzZSk7XG4gICAgICB0aGlzLm9rQnV0dG9uLmhpZGUodHJ1ZSk7XG4gICAgICB0aGlzLmNhbmNlbEJ1dHRvbi5oaWRlKHRydWUpO1xuICAgICAgLy8gdGhpcy5jb2xvclBpY2tlci5oaWRlKHRydWUpO1xuICAgICAgaGFzRm9jdXMgPSBmYWxzZTtcbiAgICB9XG4gIH0pO1xufSgpKTtcbiIsIihmdW5jdGlvbiAoKSB7XG4gIGxldCBlbGxpcDtcbiAgbGV0IGlzRG93biA9IGZhbHNlO1xuICBsZXQgb3JpZ1g7XG4gIGxldCBvcmlnWTtcbiAgbGV0IGhhc0ZvY3VzID0gdHJ1ZTtcblxuICBmYWJyaWMuSW1hZ2UucHJvdG90eXBlLnN0cm9rZVdpZHRoID0gMDtcbiAgY29uc3QgQ2lyY2xlID0gRGFya3Jvb20uVHJhbnNmb3JtYXRpb24uZXh0ZW5kKHtcbiAgICBhcHBseVRyYW5zZm9ybWF0aW9uKGNhbnZhcywgaW1hZ2UsIG5leHQpIHtcbiAgICAgIGNvbnN0IHNuYXBzaG90ID0gbmV3IEltYWdlKCk7XG4gICAgICBzbmFwc2hvdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFZhbGlkYXRlIGltYWdlXG4gICAgICAgIGlmICh0aGlzLmhlaWdodCA8IDEgfHwgdGhpcy53aWR0aCA8IDEpIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgY29uc3QgaW1nSW5zdGFuY2UgPSBuZXcgZmFicmljLkltYWdlKHRoaXMsIHtcbiAgICAgICAgICAvLyBvcHRpb25zIHRvIG1ha2UgdGhlIGltYWdlIHN0YXRpY1xuICAgICAgICAgIHNlbGVjdGFibGU6IGZhbHNlLFxuICAgICAgICAgIGV2ZW50ZWQ6IGZhbHNlLFxuICAgICAgICAgIGxvY2tNb3ZlbWVudFg6IHRydWUsXG4gICAgICAgICAgbG9ja01vdmVtZW50WTogdHJ1ZSxcbiAgICAgICAgICBsb2NrUm90YXRpb246IHRydWUsXG4gICAgICAgICAgbG9ja1NjYWxpbmdYOiB0cnVlLFxuICAgICAgICAgIGxvY2tTY2FsaW5nWTogdHJ1ZSxcbiAgICAgICAgICBsb2NrVW5pU2NhbGluZzogdHJ1ZSxcbiAgICAgICAgICBoYXNDb250cm9sczogZmFsc2UsXG4gICAgICAgICAgaGFzQm9yZGVyczogZmFsc2VcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQWRkIGltYWdlXG4gICAgICAgIGNhbnZhcy5hZGQoaW1nSW5zdGFuY2UpO1xuXG4gICAgICAgIG5leHQoaW1nSW5zdGFuY2UpO1xuICAgICAgfTtcblxuICAgICAgY2FudmFzLmFkZCh0aGlzLm9wdGlvbnMuY2lyY2xlKTtcbiAgICAgIGNhbnZhcy5yZW5kZXJBbGwoKTtcbiAgICAgIHNuYXBzaG90LnNyYyA9IGNhbnZhcy50b0RhdGFVUkwoKTtcbiAgICB9XG4gIH0pO1xuXG4gIERhcmtyb29tLnBsdWdpbnMuY2lyY2xlID0gRGFya3Jvb20uUGx1Z2luLmV4dGVuZCh7XG5cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgY29uc3QgYnV0dG9uR3JvdXAgPSB0aGlzLmRhcmtyb29tLnRvb2xiYXIuY3JlYXRlQnV0dG9uR3JvdXAoKTtcblxuICAgICAgdGhpcy5jaXJjbGVCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xuICAgICAgICBpbWFnZTogXCJjaXJjbGVcIixcbiAgICAgICAgdG9vbHRpcDogXCJjaXJjbGVcIlxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLm9uKFwibW91c2U6ZG93blwiLCB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMub24oXCJtb3VzZTptb3ZlXCIsIHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbihcIm1vdXNlOnVwXCIsIHRoaXMuaGFuZGxlTW91c2VVcC5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMuY2lyY2xlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgfSxcblxuICAgIGNsZWFyKCkge1xuICAgICAgdGhpcy5jaXJjbGVCdXR0b24uYWN0aXZlKGZhbHNlKTtcbiAgICAgIGhhc0ZvY3VzID0gdHJ1ZTtcbiAgICAgIGlzRG93biA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICBvbkNsaWNrKCkge1xuICAgICAgaWYgKCFoYXNGb2N1cykge1xuICAgICAgICB0aGlzLmNpcmNsZUJ1dHRvbi5hY3RpdmUoZmFsc2UpO1xuICAgICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5kZWZhdWx0Q3Vyc29yID0gXCJkZWZhdWx0XCI7XG4gICAgICAgIGhhc0ZvY3VzID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5kYXJrcm9vbS5jbGVhckZvY3VzKFwiY2lyY2xlXCIpO1xuICAgICAgdGhpcy5jaXJjbGVCdXR0b24uYWN0aXZlKHRydWUpO1xuICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMuZGVmYXVsdEN1cnNvciA9IFwiY3Jvc3NoYWlyXCI7XG4gICAgICBoYXNGb2N1cyA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICBvbk1vdXNlRG93bihldmVudCkge1xuICAgICAgZXZlbnQuZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5pc0Rvd24gPSB0cnVlO1xuICAgICAgaWYgKGhhc0ZvY3VzKSByZXR1cm47XG4gICAgICBjb25zdCBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcbiAgICAgIGlzRG93biA9IHRydWU7XG4gICAgICBjb25zdCBwb2ludGVyID0gY2FudmFzLmdldFBvaW50ZXIoZXZlbnQuZSk7XG4gICAgICBvcmlnWCA9IHBvaW50ZXIueDtcbiAgICAgIG9yaWdZID0gcG9pbnRlci55O1xuICAgICAgZWxsaXAgPSBuZXcgZmFicmljLkVsbGlwc2Uoe1xuICAgICAgICBsZWZ0OiBwb2ludGVyLngsXG4gICAgICAgIHRvcDogcG9pbnRlci55LFxuICAgICAgICBzdHJva2U6IFwiYmxhY2tcIixcbiAgICAgICAgZmlsbDogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICBzdHJva2VXaWR0aDogXCI0XCIsXG4gICAgICAgIHJ4OiAwLFxuICAgICAgICByeTogMFxuICAgICAgfSk7XG4gICAgICBjYW52YXMuYWRkKGVsbGlwKTtcbiAgICB9LFxuXG4gICAgb25Nb3VzZU1vdmUoZXZlbnQpIHtcbiAgICAgIGlmICghdGhpcy5pc0Rvd24pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGlzRG93biAmJiBlbGxpcCkge1xuICAgICAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoXCJjaXJjbGU6dXBkYXRlXCIpO1xuICAgICAgICBjb25zdCBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcbiAgICAgICAgY29uc3QgcG9pbnRlciA9IGNhbnZhcy5nZXRQb2ludGVyKGV2ZW50LmUpO1xuXG4gICAgICAgIGlmIChvcmlnWCA+IHBvaW50ZXIueCkge1xuICAgICAgICAgIGVsbGlwLnNldCh7XG4gICAgICAgICAgICBsZWZ0OiBNYXRoLmFicyhwb2ludGVyLngpXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3JpZ1kgPiBwb2ludGVyLnkpIHtcbiAgICAgICAgICBlbGxpcC5zZXQoe1xuICAgICAgICAgICAgdG9wOiBNYXRoLmFicyhwb2ludGVyLnkpXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBlbGxpcC5zZXQoe1xuICAgICAgICAgIHJ4OiBNYXRoLmFicyhvcmlnWCAtIHBvaW50ZXIueCkgLyAyXG4gICAgICAgIH0pO1xuICAgICAgICBlbGxpcC5zZXQoe1xuICAgICAgICAgIHJ5OiBNYXRoLmFicyhvcmlnWSAtIHBvaW50ZXIueSkgLyAyXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGVsbGlwLnNldENvb3JkcygpO1xuICAgICAgICBjYW52YXMucmVuZGVyQWxsKCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGhhbmRsZU1vdXNlVXAoKSB7XG4gICAgICBpZiAoaGFzRm9jdXMpIHsgcmV0dXJuOyB9XG4gICAgICB0aGlzLmlzRG93biA9IGZhbHNlO1xuICAgICAgZWxsaXAubGVmdCAtPSB0aGlzLmRhcmtyb29tLm9wdGlvbnMubGVmdDtcbiAgICAgIGVsbGlwLnRvcCAtPSB0aGlzLmRhcmtyb29tLm9wdGlvbnMudG9wO1xuICAgICAgdGhpcy5kYXJrcm9vbS5hcHBseVRyYW5zZm9ybWF0aW9uKG5ldyBDaXJjbGUoe1xuICAgICAgICBjaXJjbGU6IGVsbGlwXG4gICAgICB9KSk7XG4gICAgfVxuICB9KTtcbn0oKSk7XG4iLCIoZnVuY3Rpb24gKCkge1xuICBjb25zdCBtYXhab29tID0gMjtcbiAgbGV0IG1pblpvb207XG4gIGNvbnN0IHN0YXRlcyA9IHtcbiAgICBwYW5BY3RpdmU6IGZhbHNlLFxuICAgIHBhbm5pbmc6IGZhbHNlLFxuICAgIHJlYWxQYW46IG51bGxcbiAgfTtcbiAgbGV0IG9yaWdYO1xuICBsZXQgb3JpZ1k7XG5cbiAgZmFicmljLkltYWdlLnByb3RvdHlwZS5zdHJva2VXaWR0aCA9IDA7XG4gIERhcmtyb29tLnBsdWdpbnMuem9vbSA9IERhcmtyb29tLlBsdWdpbi5leHRlbmQoe1xuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgIGNvbnN0IGJ1dHRvbkdyb3VwID0gdGhpcy5kYXJrcm9vbS50b29sYmFyLmNyZWF0ZUJ1dHRvbkdyb3VwKCk7XG5cbiAgICAgIHRoaXMuem9vbUluQnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcbiAgICAgICAgaW1hZ2U6IFwiem9vbS1pblwiLFxuICAgICAgICB0aXRsZTogXCJ6b29tIGluXCJcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnpvb21PdXRCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xuICAgICAgICBpbWFnZTogXCJ6b29tLW91dFwiLFxuICAgICAgICB0aXRsZTogXCJ6b29tIG91dFwiLFxuICAgICAgICBkaXNhYmxlZDogdHJ1ZVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMucGFuID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcbiAgICAgICAgaW1hZ2U6IFwiaGFuZFwiLFxuICAgICAgICBkaXNhYmxlZDogdHJ1ZVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuem9vbUluQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnpvb21Jbi5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMuem9vbU91dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy56b29tT3V0LmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5wYW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMub25QYW4uYmluZCh0aGlzKSk7XG4gICAgICBtaW5ab29tID0gdGhpcy5kYXJrcm9vbS5jYW52YXMuZ2V0Wm9vbSgpO1xuICAgIH0sXG5cbiAgICBjbGVhcigpIHtcbiAgICAgIHN0YXRlcy5wYW5BY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMucGFuLmFjdGl2ZShmYWxzZSk7XG4gICAgICBzdGF0ZXMucGFubmluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMuZGVmYXVsdEN1cnNvciA9IFwiZGVmYXVsdFwiO1xuICAgICAgdGhpcy5yZXN0b3JlWm9vbVBhbigpO1xuICAgIH0sXG5cbiAgICBvblBhbigpIHtcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBzdGF0ZXMucGFuQWN0aXZlKSB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGFya3Jvb20uY2xlYXJGb2N1cyhcInpvb21cIik7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xuICAgICAgICBjYW52YXMub24oXCJtb3VzZTpkb3duXCIsIHRoaXMucGFuRW50ZXIuYmluZCh0aGlzKSk7XG4gICAgICAgIGNhbnZhcy5vbihcIm1vdXNlOnVwXCIsIHRoaXMucGFuRXhpdC5iaW5kKHRoaXMpKTtcbiAgICAgICAgY2FudmFzLm9uKFwibW91c2U6bW92ZVwiLCB0aGlzLl9wYW4uYmluZCh0aGlzKSk7XG4gICAgICAgIGNhbnZhcy5kZWZhdWx0Q3Vyc29yID0gXCJtb3ZlXCI7XG4gICAgICAgIHN0YXRlcy5wYW5BY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnBhbi5hY3RpdmUodHJ1ZSk7XG4gICAgICB9XG4gICAgfSxcblxuXG4gICAgcGFuRW50ZXIoZXZlbnQpIHtcbiAgICAgIGlmIChzdGF0ZXMucGFuQWN0aXZlKSB7XG4gICAgICAgIHN0YXRlcy5wYW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgb3JpZ1ggPSBldmVudC5lLnNjcmVlblggfHwgZXZlbnQuZS50b3VjaGVzWzBdLnNjcmVlblg7XG4gICAgICAgIG9yaWdZID0gZXZlbnQuZS5zY3JlZW5ZIHx8IGV2ZW50LmUudG91Y2hlc1swXS5zY3JlZW5ZO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBfcGFuKGV2ZW50KSB7XG4gICAgICBldmVudC5lLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcbiAgICAgIGlmIChzdGF0ZXMucGFubmluZyAmJiBldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQuZS50b3VjaGVzKSB7XG4gICAgICAgICAgY29uc3QgdG91Y2hlcyA9IGV2ZW50LmUudG91Y2hlcztcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvdWNoZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhID0ge1xuICAgICAgICAgICAgICB4OiAodG91Y2hlc1tpXS5zY3JlZW5YIC0gb3JpZ1gpLFxuICAgICAgICAgICAgICB5OiAodG91Y2hlc1tpXS5zY3JlZW5ZIC0gb3JpZ1kpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgb3JpZ1ggPSB0b3VjaGVzW2ldLnNjcmVlblg7XG4gICAgICAgICAgICBvcmlnWSA9IHRvdWNoZXNbaV0uc2NyZWVuWTtcbiAgICAgICAgICAgIHRoaXMuZG9QYW4oZGVsdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBkZWx0YSA9IHtcbiAgICAgICAgICAgIHg6IChldmVudC5lLnNjcmVlblggLSBvcmlnWCksXG4gICAgICAgICAgICB5OiAoZXZlbnQuZS5zY3JlZW5ZIC0gb3JpZ1kpXG4gICAgICAgICAgfTtcbiAgICAgICAgICBvcmlnWCA9IGV2ZW50LmUuc2NyZWVuWDtcbiAgICAgICAgICBvcmlnWSA9IGV2ZW50LmUuc2NyZWVuWTtcbiAgICAgICAgICB0aGlzLmRvUGFuKGRlbHRhKTtcbiAgICAgICAgfVxuICAgICAgICBjYW52YXMucmVuZGVyQWxsKCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIHBhbkV4aXQoKSB7XG4gICAgICBpZiAoc3RhdGVzLnBhbkFjdGl2ZSkge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5kYXJrcm9vbS5vcHRpb25zO1xuICAgICAgICBjb25zdCBpbWFnZSA9IHRoaXMuZGFya3Jvb20uaW1hZ2U7XG4gICAgICAgIHN0YXRlcy5wYW5uaW5nID0gZmFsc2U7XG4gICAgICAgIG9wdGlvbnMubGVmdCA9IGltYWdlLmxlZnQ7XG4gICAgICAgIG9wdGlvbnMudG9wID0gaW1hZ2UudG9wO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBkb1BhbihkZWx0YSkge1xuICAgICAgY29uc3QgaW1hZ2UgPSB0aGlzLmRhcmtyb29tLmltYWdlO1xuICAgICAgdGhpcy5kZWx0YSA9IHRoaXMuY29uc3RyYWluUGFuKGRlbHRhKTtcbiAgICAgIGltYWdlLmxlZnQgKz0gZGVsdGEueDtcbiAgICAgIGltYWdlLnRvcCArPSBkZWx0YS55O1xuICAgICAgaW1hZ2Uuc2V0Q29vcmRzKCk7XG4gICAgICBzdGF0ZXMucmVhbFBhbiA9IHtcbiAgICAgICAgeDogaW1hZ2Uub0Nvb3Jkcy50bC54LFxuICAgICAgICB5OiBpbWFnZS5vQ29vcmRzLnRsLnlcbiAgICAgIH07XG4gICAgfSxcblxuICAgIGNvbnN0cmFpblBhbihkZWx0YSkge1xuICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XG4gICAgICBjb25zdCBpbWFnZSA9IHRoaXMuZGFya3Jvb20uaW1hZ2U7XG4gICAgICBjb25zdCB0bCA9IGltYWdlLm9Db29yZHMudGw7IC8vIHRvcCBsZWZ0IGNvcm5lclxuICAgICAgY29uc3QgYnIgPSBpbWFnZS5vQ29vcmRzLmJyOyAvLyBib3R0b20gcmlnaHQgY29ybmVyXG4gICAgICBpZiAoZGVsdGEueCA+IDApIHtcbiAgICAgICAgZGVsdGEueCA9ICgodGwueCArIGRlbHRhLngpID4gMCkgPyAwIDogTWF0aC5mbG9vcihkZWx0YS54KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlbHRhLnggPSBNYXRoLmNlaWwoZGVsdGEueCk7XG4gICAgICAgIGlmICgoTWF0aC5jZWlsKGJyLngpICsgZGVsdGEueCkgPCBjYW52YXMud2lkdGgpIHtcbiAgICAgICAgICBkZWx0YS54ID0gMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGRlbHRhLnkgPiAwKSB7XG4gICAgICAgIGRlbHRhLnkgPSAoKHRsLnkgKyBkZWx0YS55KSA+IDApID8gMCA6IE1hdGguZmxvb3IoZGVsdGEueSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWx0YS55ID0gTWF0aC5jZWlsKGRlbHRhLnkpO1xuICAgICAgICBpZiAoKE1hdGguY2VpbChici55KSArIGRlbHRhLnkpIDwgY2FudmFzLmhlaWdodCkge1xuICAgICAgICAgIGRlbHRhLnkgPSAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZGVsdGE7XG4gICAgfSxcblxuICAgIHJlc3RvcmVab29tUGFuKCkge1xuICAgICAgaWYgKHN0YXRlcy5sYXN0U2NhbGUgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLmRhcmtyb29tLmltYWdlLnNjYWxlKHN0YXRlcy5sYXN0U2NhbGUpO1xuICAgICAgICBpZiAoc3RhdGVzLnJlYWxQYW4gIT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuZG9QYW4oc3RhdGVzLnJlYWxQYW4pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHpvb21JbigpIHtcbiAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xuICAgICAgaWYgKGNhbnZhcy5nZXRab29tKCkgPD0gbWF4Wm9vbSkge1xuICAgICAgICBjYW52YXMuc2V0Wm9vbShjYW52YXMuZ2V0Wm9vbSgpICogMS4xKTtcbiAgICAgICAgY2FudmFzLnJlbmRlckFsbCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5vblBhbigpO1xuICAgICAgdGhpcy51cGRhdGVCdXR0b25zKCk7XG4gICAgfSxcblxuICAgIHpvb21PdXQoKSB7XG4gICAgICBjb25zdCBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcbiAgICAgIGNvbnN0IGltYWdlID0gdGhpcy5kYXJrcm9vbS5pbWFnZTtcbiAgICAgIGlmIChjYW52YXMuZ2V0Wm9vbSgpID4gbWluWm9vbSkge1xuICAgICAgICBjYW52YXMuc2V0Wm9vbShjYW52YXMuZ2V0Wm9vbSgpIC8gMS4xKTtcbiAgICAgICAgaWYgKHRoaXMuZGFya3Jvb20uaW1hZ2Uub0Nvb3Jkcy5ici54IDwgdGhpcy5kYXJrcm9vbS5jYW52YXMud2lkdGgpIHtcbiAgICAgICAgICBjb25zdCBuZXdMZWZ0ID0gTWF0aC5jZWlsKHRoaXMuZGFya3Jvb20uY2FudmFzLndpZHRoIC0gdGhpcy5kYXJrcm9vbS5pbWFnZS5vQ29vcmRzLmJyLngpO1xuICAgICAgICAgIGltYWdlLmxlZnQgKz0gbmV3TGVmdDtcbiAgICAgICAgICB0aGlzLmRhcmtyb29tLm9wdGlvbnMubGVmdCA9IHRoaXMuZGFya3Jvb20ub3B0aW9ucy5sZWZ0ICsgbmV3TGVmdDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5kYXJrcm9vbS5pbWFnZS5vQ29vcmRzLmJyLnkgPCB0aGlzLmRhcmtyb29tLmNhbnZhcy5oZWlnaHQpIHtcbiAgICAgICAgICBjb25zdCBuZXdUb3AgPSBNYXRoLmNlaWwodGhpcy5kYXJrcm9vbS5jYW52YXMuaGVpZ2h0IC0gdGhpcy5kYXJrcm9vbS5pbWFnZS5vQ29vcmRzLmJyLnkpO1xuICAgICAgICAgIGltYWdlLnRvcCArPSBuZXdUb3A7XG4gICAgICAgICAgdGhpcy5kYXJrcm9vbS5vcHRpb25zLnRvcCA9IHRoaXMuZGFya3Jvb20ub3B0aW9ucy50b3AgKyBuZXdUb3A7XG4gICAgICAgIH1cbiAgICAgICAgaW1hZ2Uuc2V0Q29vcmRzKCk7XG4gICAgICAgIGNhbnZhcy5yZW5kZXJBbGwoKTtcbiAgICAgICAgaWYgKGNhbnZhcy5nZXRab29tKCkgPj0gbWluWm9vbSkge1xuICAgICAgICAgIHRoaXMub25QYW4oKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZUJ1dHRvbnMoKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgdXBkYXRlQnV0dG9ucygpIHtcbiAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xuICAgICAgY29uc3Qgc2hvdWxkRGlzYWJsZU1pblpvb20gPSBjYW52YXMuZ2V0Wm9vbSgpIDw9IG1pblpvb207XG4gICAgICBjb25zdCBzaG91bGREaXNhYmxlTWF4Wm9vb20gPSBjYW52YXMuZ2V0Wm9vbSgpID49IG1heFpvb207XG4gICAgICBjb25zdCBzaG91bGRFbmFibGVQYW4gPSBjYW52YXMuZ2V0Wm9vbSgpID4gbWluWm9vbTtcbiAgICAgIHRoaXMuem9vbU91dEJ1dHRvbi5kaXNhYmxlKHNob3VsZERpc2FibGVNaW5ab29tKTtcbiAgICAgIHRoaXMuem9vbUluQnV0dG9uLmRpc2FibGUoc2hvdWxkRGlzYWJsZU1heFpvb29tKTtcbiAgICAgIGlmIChzaG91bGREaXNhYmxlTWluWm9vbSkge1xuICAgICAgICB0aGlzLmRhcmtyb29tLm9wdGlvbnMubGVmdCA9IDA7XG4gICAgICAgIHRoaXMuZGFya3Jvb20ub3B0aW9ucy50b3AgPSAwO1xuICAgICAgICB0aGlzLnBhbi5hY3RpdmUoZmFsc2UpO1xuICAgICAgICB0aGlzLnBhbi5kaXNhYmxlKHRydWUpO1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzaG91bGRFbmFibGVQYW4pIHtcbiAgICAgICAgdGhpcy5wYW4uZGlzYWJsZShmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn0oKSk7XG4iLCIoZnVuY3Rpb24gKCkge1xuICBmYWJyaWMuSW1hZ2UucHJvdG90eXBlLnN0cm9rZVdpZHRoID0gMDtcbiAgRGFya3Jvb20ucGx1Z2lucy5zYXZlID0gRGFya3Jvb20uUGx1Z2luLmV4dGVuZCh7XG5cbiAgICBkZWZhdWx0czoge1xuICAgICAgY2FsbGJhY2soKSB7XG4gICAgICAgIHRoaXMuZGFya3Jvb20uc2VsZkRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgIGNvbnN0IGJ1dHRvbkdyb3VwID0gdGhpcy5kYXJrcm9vbS50b29sYmFyLmNyZWF0ZUJ1dHRvbkdyb3VwKCk7XG5cbiAgICAgIHRoaXMuZGVzdHJveUJ1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XG4gICAgICAgIGltYWdlOiBcInNhdmVcIlxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZGVzdHJveUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5vcHRpb25zLmNhbGxiYWNrLmJpbmQodGhpcykpO1xuICAgIH1cbiAgfSk7XG59KCkpO1xuIl19
