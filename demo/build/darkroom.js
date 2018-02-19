(function() {
'use strict';

// Inject SVG icons into the DOM
var element = document.createElement('div');
element.id = 'darkroom-icons';
element.style.height = 0;
element.style.width = 0;
element.style.position = 'absolute';
element.style.visibility = 'hidden';
element.innerHTML = '<!-- inject:svg --><svg xmlns="http://www.w3.org/2000/svg"><symbol id="close" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></symbol><symbol id="crop" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 15h2V7c0-1.1-.9-2-2-2H9v2h8v8zM7 17V1H5v4H1v2h4v10c0 1.1.9 2 2 2h10v4h2v-4h4v-2H7z"/></symbol><symbol id="done" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></symbol><symbol id="hand" viewBox="0 0 128 128"><path class="iconic-property-fill" d="M101.657 70.343a8 8 0 0 0-11.314 0L80 78.846c-3.165 2.602-8 .778-8-2.846V14a6 6 0 1 0-12 0v38a4 4 0 0 1-8 0V6a6 6 0 1 0-12 0v50a4 4 0 0 1-8 0V14a6 6 0 1 0-12 0v46a4 4 0 0 1-8 0V22a6 6 0 1 0-12 0v70c0 19.882 16.118 36 36 36 9.223 0 17.631-3.472 24.001-9.175l-.001.007s41.448-36.966 41.657-37.175a8 8 0 0 0 0-11.314z"/></symbol><symbol id="pencil" viewBox="0 0 129 129"><path d="M119.2 114.3H9.8c-2.3 0-4.1 1.9-4.1 4.1s1.9 4.1 4.1 4.1h109.5c2.3 0 4.1-1.9 4.1-4.1s-1.9-4.1-4.2-4.1zM5.7 78l-.1 19.5c0 1.1.4 2.2 1.2 3 .8.8 1.8 1.2 2.9 1.2l19.4-.1c1.1 0 2.1-.4 2.9-1.2l67-67c1.6-1.6 1.6-4.2 0-5.9L79.8 8.1c-1.6-1.6-4.2-1.6-5.9 0L60.5 21.6 6.9 75.1c-.7.8-1.2 1.8-1.2 2.9zm71.2-61.1l13.5 13.5-7.6 7.6-13.5-13.5 7.6-7.6zM14 79.8l49.4-49.4 13.5 13.5-49.4 49.3-13.6.1.1-13.5z"/></symbol><symbol id="rectangle" viewBox="0 0 297 297"><path d="M294.088 99.52a9.946 9.946 0 0 0-7.032-2.913L9.955 96.62c-5.491 0-9.942 4.451-9.943 9.943L0 190.448a9.941 9.941 0 0 0 9.945 9.945l277.1-.016c5.491 0 9.942-4.451 9.943-9.943l.012-83.882a9.941 9.941 0 0 0-2.912-7.032z"/></symbol><symbol id="redo" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16a8.002 8.002 0 0 1 7.6-5.5c1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"/></symbol><symbol id="rotate-left" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M7.11 8.53L5.7 7.11C4.8 8.27 4.24 9.61 4.07 11h2.02c.14-.87.49-1.72 1.02-2.47zM6.09 13H4.07c.17 1.39.72 2.73 1.62 3.89l1.41-1.42c-.52-.75-.87-1.59-1.01-2.47zm1.01 5.32c1.16.9 2.51 1.44 3.9 1.61V17.9c-.87-.15-1.71-.49-2.46-1.03L7.1 18.32zM13 4.07V1L8.45 5.55 13 10V6.09c2.84.48 5 2.94 5 5.91s-2.16 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93s-3.05-7.44-7-7.93z"/></symbol><symbol id="rotate-right" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.55 5.55L11 1v3.07C7.06 4.56 4 7.92 4 12s3.05 7.44 7 7.93v-2.02c-2.84-.48-5-2.94-5-5.91s2.16-5.43 5-5.91V10l4.55-4.45zM19.93 11a7.906 7.906 0 0 0-1.62-3.89l-1.42 1.42c.54.75.88 1.6 1.02 2.47h2.02zM13 17.9v2.02c1.39-.17 2.74-.71 3.9-1.61l-1.44-1.44c-.75.54-1.59.89-2.46 1.03zm3.89-2.42l1.42 1.41c.9-1.16 1.45-2.5 1.62-3.89h-2.02c-.14.87-.48 1.72-1.02 2.48z"/></symbol><symbol id="save" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/></symbol><symbol id="undo" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"/></symbol><symbol id="zoom-in" viewBox="0 0 96 96.000001"><path style="marker:none" overflow="visible" fill="none" d="M96 0v96H0V0z"/><path d="M72.396 73.883c.017.021.04.035.057.056.02.026.03.057.05.083zM23.56 73.896l-.107.14c.02-.026.03-.058.05-.083.017-.021.041-.035.058-.057z"/><path d="M42 6C22.141 6 6 22.142 6 42s16.141 35.996 36 35.996c8.85 0 16.957-3.21 23.23-8.521l19.647 19.644 4.244-4.24-19.646-19.647C74.789 58.958 78 50.852 78 42 78 22.142 61.859 6 42 6zm0 3.998c17.696 0 31.998 14.305 31.998 32.002 0 17.697-14.302 31.998-31.998 31.998S10 59.698 10 42C10 24.303 24.304 9.998 42 9.998zM40 24v15.998H24v4h16V60h4.002V43.998H60v-4H44.002V24H40z"/></symbol><symbol id="zoom-out" viewBox="0 0 96 96.000001"><path style="marker:none" overflow="visible" fill="none" d="M96 0v96H0V0z"/><path d="M72.396 73.883c.017.021.04.035.057.056.02.026.03.057.05.083zM23.56 73.896l-.107.14c.02-.026.03-.058.05-.083.017-.021.041-.035.058-.057z"/><path d="M42 6C22.141 6 6 22.142 6 42s16.141 35.996 36 35.996c8.85 0 16.957-3.21 23.23-8.521l19.647 19.644 4.244-4.24-19.646-19.647C74.789 58.958 78 50.852 78 42 78 22.142 61.859 6 42 6zm0 3.998c17.696 0 31.998 14.305 31.998 32.002 0 17.697-14.302 31.998-31.998 31.998S10 59.698 10 42C10 24.303 24.304 9.998 42 9.998zm-18 30v4h36v-4H24z"/></symbol></svg><!-- endinject -->';
document.body.appendChild(element);

})();
;(function () {
  'use strict';

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
      backgroundColor: '#fff',

      // Plugins options
      plugins: {},

      // Post-initialisation callback
      initialize: function () { /* noop */ }
    },

    // List of the instancied plugins
    plugins: {},

    // This options are a merge between `defaults` and the options passed
    // through the constructor
    options: {},

    constructor: function (element, options, plugins) {
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

    selfDestroy: function () {
      var container = this.containerElement;
      var image = new Image();
      image.onload = function () {
        container.parentNode.replaceChild(image, container);
      }

      image.src = this.sourceImage.toDataURL();
    },

    // Add ability to attach event listener on the core object.
    // It uses the canvas element to process events.
    addEventListener: function (eventName, callback) {
      var el = this.canvas.getElement();
      if (el.addEventListener) {
        el.addEventListener(eventName, callback);
      } else if (el.attachEvent) {
        el.attachEvent('on' + eventName, callback);
      }
    },

    dispatchEvent: function (eventName) {
      // Use the old way of creating event to be IE compatible
      // See https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
      var event = document.createEvent('Event');
      event.initEvent(eventName, true, true);

      this.canvas.getElement().dispatchEvent(event);
    },

    // Adjust image & canvas dimension according to min/max width/height
    // and ratio specified in the options.
    // This method should be called after each image transformation.
    refresh: function (next) {
      var clone = new Image();
      clone.onload = function () {
        this._replaceCurrentImage(new fabric.Image(clone));

        if (next) next();
      }.bind(this);
      clone.src = this.sourceImage.toDataURL();
    },

    _replaceCurrentImage: function (newImage) {
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
    applyTransformation: function (transformation) {
      this.transformations.push(transformation);

      transformation.applyTransformation(
        this.sourceCanvas,
        this.sourceImage,
        this._postTransformation.bind(this)
      );
    },

    _postTransformation: function (newImage) {
      if (newImage)
        this.sourceImage = newImage;

      this.refresh(function () {
        this.dispatchEvent('core:transformation');
      }.bind(this));
    },

    // Initialize image from original element plus re-apply every
    // transformations.
    reinitializeImage: function () {
      this.sourceImage.remove();
      this._initializeImage();
      this._popTransformation(this.transformations.slice())
    },

    _popTransformation: function (transformations) {
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
    _initializeDOM: function (imageElement) {
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
    _initializeImage: function () {
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
    _initializePlugins: function (plugins) {
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

    clearFocus: function (instance) {
      for (var key in this.plugins) {
        if (key != instance) {
          this.plugins[key].clear();
        }
      }
    }
  }

})();
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
;(function() {
'use strict';

Darkroom.UI = {
  Toolbar: Toolbar,
  ButtonGroup: ButtonGroup,
  Button: Button,
};

// Toolbar object.
function Toolbar(element) {
  this.element = element;
}

Toolbar.prototype = {
  createButtonGroup: function(options) {
    var buttonGroup = document.createElement('div');
    buttonGroup.className = 'darkroom-button-group';
    this.element.appendChild(buttonGroup);

    return new ButtonGroup(buttonGroup);
  }
};

// ButtonGroup object.
function ButtonGroup(element) {
  this.element = element;
}

ButtonGroup.prototype = {
  createButton: function(options) {
    var defaults = {
      image: 'help',
      type: 'default',
      group: 'default',
      hide: false,
      disabled: false
    };

    options = Darkroom.Utils.extend(options, defaults);

    var buttonElement = document.createElement('button');
    buttonElement.type = 'button';
    buttonElement.className = 'darkroom-button darkroom-button-' + options.type;
    buttonElement.innerHTML = '<svg class="darkroom-icon"><use xlink:href="#' + options.image + '" /></svg>';
    this.element.appendChild(buttonElement);

    var button = new Button(buttonElement);
    button.hide(options.hide);
    button.disable(options.disabled);

    return button;
  }
}

// Button object.
function Button(element) {
  this.element = element;
}

Button.prototype = {
  addEventListener: function(eventName, listener) {
    if (this.element.addEventListener){
      this.element.addEventListener(eventName, listener);
    } else if (this.element.attachEvent) {
      this.element.attachEvent('on' + eventName, listener);
    }
  },
  removeEventListener: function(eventName, listener) {
    if (this.element.removeEventListener){
      this.element.removeEventListener(eventName, listener);
    }
  },
  active: function(value) {
    if (value)
      this.element.classList.add('darkroom-button-active');
    else
      this.element.classList.remove('darkroom-button-active');
  },
  hide: function(value) {
    if (value)
      this.element.classList.add('darkroom-button-hidden');
    else
      this.element.classList.remove('darkroom-button-hidden');
  },
  disable: function(value) {
    this.element.disabled = (value) ? true : false;
  }
};

})();
;(function() {
'use strict';

Darkroom.Utils = {
  extend: extend,
  computeImageViewPort: computeImageViewPort,
};


// Utility method to easily extend objects.
function extend(b, a) {
  var prop;
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
    height: Math.abs(image.getWidth() * (Math.sin(image.getAngle() * Math.PI/180))) + Math.abs(image.getHeight() * (Math.cos(image.getAngle() * Math.PI/180))),
    width: Math.abs(image.getHeight() * (Math.sin(image.getAngle() * Math.PI/180))) + Math.abs(image.getWidth() * (Math.cos(image.getAngle() * Math.PI/180))),
  }
}

})();
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
;(function() {
'use strict';

var Rotation = Darkroom.Transformation.extend({
  applyTransformation: function(canvas, image, next) {
    var angle = (image.getAngle() + this.options.angle) % 360;
    image.rotate(angle);

    var width, height;
    height = Math.abs(image.getWidth()*(Math.sin(angle*Math.PI/180)))+Math.abs(image.getHeight()*(Math.cos(angle*Math.PI/180)));
    width = Math.abs(image.getHeight()*(Math.sin(angle*Math.PI/180)))+Math.abs(image.getWidth()*(Math.cos(angle*Math.PI/180)));

    canvas.setWidth(width);
    canvas.setHeight(height);

    canvas.centerObject(image);
    image.setCoords();
    canvas.renderAll();

    next();
  }
});

Darkroom.plugins['rotate'] = Darkroom.Plugin.extend({

  initialize: function InitDarkroomRotatePlugin() {
    var buttonGroup = this.darkroom.toolbar.createButtonGroup();

    var leftButton = buttonGroup.createButton({
      image: 'rotate-left'
    });

    var rightButton = buttonGroup.createButton({
      image: 'rotate-right'
    });

    leftButton.addEventListener('click', this.rotateLeft.bind(this));
    rightButton.addEventListener('click', this.rotateRight.bind(this));
  },

  rotateLeft: function rotateLeft() {
    this.rotate(-90);
  },

  rotateRight: function rotateRight() {
    this.rotate(90);
  },

  rotate: function rotate(angle) {
    this.darkroom.options.left = 0;
    this.darkroom.options.top = 0;
    this.darkroom.applyTransformation(
      new Rotation({angle: angle})
    );
  }

});

})();
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
    'use strict';

    var Pencil = Darkroom.Transformation.extend({
        applyTransformation: function (canvas, image, next) {
            // Snapshot the image delimited by the crop zone
            var snapshot = new Image();
            snapshot.onload = function () {
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

                // Add image
                canvas.add(imgInstance);

                next(imgInstance);
            };

            var viewport = Darkroom.Utils.computeImageViewPort(image);
            var width = viewport.width;
            var height = viewport.height;

            // this.options.pencilZone._applyScaling(canvas.getWidth(), canvas.getHeight());
            canvas.add(this.options.pencilZone);
            canvas.renderAll();
            snapshot.src = canvas.toDataURL();
        }
    });

    var PencilZone = fabric.util.createClass(fabric.Object, {
        type: 'pencilObject',

        initialize: function (options) {
            options = options || {};
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
            this.callSuper('initialize', options);
        },

        _applyScaling: function (w, h) {
            var scaleX = this.getWidth() / w;
            var scaleY = this.getHeight() / h;
            this.set({ scaleX: this.scaleX / scaleX, scaleY: this.scaleY / scaleY });
        },

        _render: function (ctx) {
            var canvas = ctx.canvas;
            this._draw(ctx);
        },

        _draw: function (ctx) {
            if (ctx && this.path && this.path.length > 0) {
                ctx.lineJoin = "round";
                ctx.lineCap = "round";
                ctx.beginPath();
                ctx.moveTo((this.cX + this.path[0].x),
                    (this.cY + this.path[0].y));

                for (var x = 0; x < this.path.length; x++) {
                    let drawX = (this.cX + this.path[x].x);
                    let drawY = (this.cY + this.path[x].y);
                    ctx.lineTo(drawX, drawY);
                }


                ctx.strokeStyle = this.stroke;
                ctx.lineWidth = this.size;
                ctx.stroke();
            }
        },

        _clone: function () {
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

    Darkroom.plugins['pencil'] = Darkroom.Plugin.extend({
        pencilMode: false,
        pencilZone: null,
        mouseDown: false,
        size: 30,
        defaults: {
            stroke: "black",
            size: 30
        },

        initialize: function InitializeDarkroomPencilPlugin() {
            var buttonGroup = this.darkroom.toolbar.createButtonGroup();

            this.pencilButton = buttonGroup.createButton({
                image: 'pencil',
                tooltip: 'Draw'
            });

            this.path = [];
            this.width = this.darkroom.canvas.width;
            this.height = this.darkroom.canvas.height;
            this.size = this.options.size;
            this.stroke = this.options.stroke;

            this.darkroom.canvas.on('mouse:down', this.onMouseDown.bind(this));
            this.darkroom.canvas.on('mouse:move', this.onMouseMove.bind(this));
            this.darkroom.canvas.on('mouse:up', this.onMouseUp.bind(this));
            this.pencilButton.addEventListener('click', this.onClick.bind(this));


        },

        clear: function () {
            if (this.hasFocus())
                this.removeFocus();
        },

        hasFocus: function () {
            return this.pencilZone !== null;
        },

        onClick: function (event) {
            if (!this.hasFocus()) {
                this.requireFocus();
                return;
            }
            this.removeFocus();
        },

        onMouseDown: function (event) {
            if (!this.hasFocus())
                return;

            this.darkroom.dispatchEvent('pencil:begin');
            this.mouseDown = true;
            this.path.push(this.getMousePosition(this.canvas, event));
            this.renderZone();
        },

        onMouseUp: function (event) {
            if (!this.hasFocus())
                return;

            if (this.mouseDown) {
                this.darkroom.dispatchEvent('pencil:end');
                this.mouseDown = false;
                var mousePos = this.getMousePosition(this.canvas, event);
                this.path.push(mousePos);
                this.renderZone();
                this.applyPencilPath();
                this.path = [];
            }
        },

        onMouseMove: function (event) {
            if (!this.hasFocus())
                return;

            if (this.mouseDown) {
                var mousePos = this.getMousePosition(this.canvas, event);
                this.path.push(mousePos);
                this.renderZone();
            }
        },

        removeFocus: function () {
            this.darkroom.dispatchEvent('pencil:disabled');
            this.pencilButton.active(false);
            this.pencilMode = false;
            this.darkroom.canvas.defaultCursor = 'default';
            if (this.pencilZone) {
                this.pencilZone.remove();
                this.pencilZone = null;
            }
        },

        requireFocus: function () {
            this.darkroom.clearFocus('pencil');
            this.darkroom.dispatchEvent('pencil:enabled');
            this.pencilMode = true;
            this.pencilButton.active(true);

            this.pencilZone = this.newZone();

            this.darkroom.canvas.add(this.pencilZone);
            this.darkroom.canvas.defaultCursor = 'crosshair';
        },


        getMousePosition: function (canvas, event) {
            var canvas = this.darkroom.canvas;
            var rect = canvas.lowerCanvasEl.getBoundingClientRect();
            var pointer = canvas.getPointer(event.e);
            var scale = 720 / 1280
            return {
                x: pointer.x,
                y: pointer.y,
                cx: event.e.clientX - rect.left,
                cy: event.e.clientY - rect.top,
                sx: event.e.screenX,
                sy: event.e.screenY
            };
        },

        newZone: function () {
            this.path = [];
            var stroke = this.stroke;
            var size = this.size;
            var width = this.darkroom.canvas.getWidth();
            var height = this.darkroom.canvas.getHeight();
            var zone = new PencilZone({
                stroke: stroke,
                size: size,
                width: width,
                height: height,
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

        applyPencilPath: function () {
            if (!this.hasFocus())
                return;

            // Avoid croping empty zone
            if (this.path === null || this.path.length == 0)
                return;

            // Apply crop transformation.
            // Make sure to use relative dimension since the crop will be applied
            // on the source image.
            var zone = this.pencilZone._clone();
            zone.path = this.path;
            zone.left -= this.darkroom.options.left;
            zone.top -= this.darkroom.options.top;
            this.darkroom.applyTransformation(new Pencil({
                pencilZone: zone
            }));
            this.pencilZone.remove();
            this.pencilZone = this.newZone();
            this.darkroom.canvas.add(this.pencilZone);
        },

        renderZone: function () {
            if (this.path && this.path.length > 0) {
                this.darkroom.dispatchEvent('pencil:update');
                this.pencilZone.path = this.path;
            }
            this.darkroom.canvas.bringToFront(this.pencilZone);
        }

    });

})();
;(function () {
  'use strict';

  var rect, isDown, origX, origY;
  var hasFocus = true;

  var RectangleTransformation = Darkroom.Transformation.extend({
    applyTransformation: function (canvas, image, next) {
      var snapshot = new Image();
      snapshot.onload = function () {
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

        // Add image
        canvas.add(imgInstance);

        next(imgInstance);

      };

      var viewport = Darkroom.Utils.computeImageViewPort(image);
      var width = viewport.width;
      var height = viewport.height;

      var newRect = this.options.rectangle;
      var scaleX = this.options.originalWidth / canvas.getWidth();
      var scaleY = this.options.originalHeight / canvas.getHeight();
      newRect.set({ scaleX: 1 / scaleX, scaleY: 1 / scaleY });
      canvas.add(newRect);
      canvas.renderAll();
      snapshot.src = canvas.toDataURL();
    }
  });

  Darkroom.plugins['rectangle'] = Darkroom.Plugin.extend({
    rectangleZone: null,

    initialize: function InitializeDarkroomRectanglePlugin() {
      var buttonGroup = this.darkroom.toolbar.createButtonGroup();

      this.rectangleButton = buttonGroup.createButton({
        image: 'rectangle',
        tooltip: 'Draw'
      });

      this.darkroom.canvas.on('mouse:down', this.onMouseDown.bind(this));
      this.darkroom.canvas.on('mouse:move', this.onMouseMove.bind(this));
      this.darkroom.canvas.on('mouse:up', this.handleMouseUp.bind(this));
      this.rectangleButton.addEventListener('click', this.onClick.bind(this));
    },

    clear: function() {
      this.rectangleButton.active(false);
      hasFocus = true;
      isDown = false;
    },

    onClick: function (event) {
      if (!hasFocus) {
        this.rectangleButton.active(false);
        this.darkroom.canvas.defaultCursor = 'default';
        hasFocus = true;
        return;
      }
      this.darkroom.clearFocus("rectangle");
      this.rectangleButton.active(true);
      this.darkroom.canvas.defaultCursor = 'crosshair';
      hasFocus = false;
    },

    onMouseDown: function (event) {
      if (hasFocus) return;
      this.darkroom.dispatchEvent('rectangle:begin');
      var canvas = this.darkroom.canvas;
      isDown = true;
      var pointer = canvas.getPointer(event.e);
      origX = pointer.x;
      origY = pointer.y;
      rect = new fabric.Rect({
        left: origX,
        top: origY,
        originX: 'left',
        originY: 'top',
        width: pointer.x - origX,
        height: pointer.y - origY,
        angle: 0,
        fill: "black",
        transparentCorners: false
      });
      canvas.add(rect);
    },

    onMouseMove: function (event) {
      if (isDown) {
        this.darkroom.dispatchEvent('rectangle:update');
        var canvas = this.darkroom.canvas;
        var pointer = canvas.getPointer(event.e);

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

    handleMouseUp: function (event) {
      if (hasFocus) return;
      var canvas = this.darkroom.canvas;
      isDown = false;
      this.darkroom.dispatchEvent('rectangle:end');
      canvas.remove(rect);
      var canvasOffset = canvas.calcOffset();
      rect.left -= this.darkroom.options.left;
      rect.top -= this.darkroom.options.top;
      this.darkroom.applyTransformation( new RectangleTransformation({
        originalWidth: canvas.getWidth(),
        originalHeight: canvas.getHeight(),
        rectangle: rect
      }));
    }
  });

})();
;(function () {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3RzdHJhcC5qcyIsImRhcmtyb29tLmpzIiwicGx1Z2luLmpzIiwidHJhbnNmb3JtYXRpb24uanMiLCJ1aS5qcyIsInV0aWxzLmpzIiwiZGFya3Jvb20uaGlzdG9yeS5qcyIsImRhcmtyb29tLnJvdGF0ZS5qcyIsImRhcmtyb29tLmNyb3AuanMiLCJkYXJrcm9vbS5wZW5jaWwuanMiLCJkYXJrcm9vbS5yZWN0YW5nbGUuanMiLCJ6b29tLmpzIiwiZGFya3Jvb20uc2F2ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0NkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDclhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0N0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQzNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQzNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0M5cUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0M3U0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQzFKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDNUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJkYXJrcm9vbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHtcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuLy8gSW5qZWN0IFNWRyBpY29ucyBpbnRvIHRoZSBET01cclxudmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuZWxlbWVudC5pZCA9ICdkYXJrcm9vbS1pY29ucyc7XHJcbmVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gMDtcclxuZWxlbWVudC5zdHlsZS53aWR0aCA9IDA7XHJcbmVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG5lbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuZWxlbWVudC5pbm5lckhUTUwgPSAnPCEtLSBpbmplY3Q6c3ZnIC0tPjwhLS0gZW5kaW5qZWN0IC0tPic7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcblxyXG59KSgpO1xyXG4iLCIoZnVuY3Rpb24gKCkge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgd2luZG93LkRhcmtyb29tID0gRGFya3Jvb207XHJcblxyXG4gIC8vIENvcmUgb2JqZWN0IG9mIERhcmtyb29tSlMuXHJcbiAgLy8gQmFzaWNhbGx5IGl0J3MgYSBzaW5nbGUgb2JqZWN0LCBpbnN0YW5jaWFibGUgdmlhIGFuIGVsZW1lbnRcclxuICAvLyAoaXQgY291bGQgYmUgYSBDU1Mgc2VsZWN0b3Igb3IgYSBET00gZWxlbWVudCksIHNvbWUgY3VzdG9tIG9wdGlvbnMsXHJcbiAgLy8gYW5kIGEgbGlzdCBvZiBwbHVnaW4gb2JqZWN0cyAob3Igbm9uZSB0byB1c2UgZGVmYXVsdCBvbmVzKS5cclxuICBmdW5jdGlvbiBEYXJrcm9vbShlbGVtZW50LCBvcHRpb25zLCBwbHVnaW5zKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zLCBwbHVnaW5zKTtcclxuICB9XHJcblxyXG4gIC8vIENyZWF0ZSBhbiBlbXB0eSBsaXN0IG9mIHBsdWdpbiBvYmplY3RzLCB3aGljaCB3aWxsIGJlIGZpbGxlZCBieVxyXG4gIC8vIG90aGVyIHBsdWdpbiBzY3JpcHRzLiBUaGlzIGlzIHRoZSBkZWZhdWx0IHBsdWdpbiBsaXN0IGlmIG5vbmUgaXNcclxuICAvLyBzcGVjaWZpZWQgaW4gRGFya3Jvb20nc3MgY29uc3RydWN0b3IuXHJcbiAgRGFya3Jvb20ucGx1Z2lucyA9IFtdO1xyXG5cclxuICBEYXJrcm9vbS5wcm90b3R5cGUgPSB7XHJcbiAgICAvLyBSZWZlcmVuY2UgdG8gdGhlIG1haW4gY29udGFpbmVyIGVsZW1lbnRcclxuICAgIGNvbnRhaW5lckVsZW1lbnQ6IG51bGwsXHJcblxyXG4gICAgLy8gUmVmZXJlbmNlIHRvIHRoZSBGYWJyaWMgY2FudmFzIG9iamVjdFxyXG4gICAgY2FudmFzOiBudWxsLFxyXG5cclxuICAgIC8vIFJlZmVyZW5jZSB0byB0aGUgRmFicmljIGltYWdlIG9iamVjdFxyXG4gICAgaW1hZ2U6IG51bGwsXHJcblxyXG4gICAgLy8gUmVmZXJlbmNlIHRvIHRoZSBGYWJyaWMgc291cmNlIGNhbnZhcyBvYmplY3RcclxuICAgIHNvdXJjZUNhbnZhczogbnVsbCxcclxuXHJcbiAgICAvLyBSZWZlcmVuY2UgdG8gdGhlIEZhYnJpYyBzb3VyY2UgaW1hZ2Ugb2JqZWN0XHJcbiAgICBzb3VyY2VJbWFnZTogbnVsbCxcclxuXHJcbiAgICAvLyBUcmFjayBvZiB0aGUgb3JpZ2luYWwgaW1hZ2UgZWxlbWVudFxyXG4gICAgb3JpZ2luYWxJbWFnZUVsZW1lbnQ6IG51bGwsXHJcblxyXG4gICAgLy8gU3RhY2sgb2YgdHJhbnNmb3JtYXRpb25zIHRvIGFwcGx5IHRvIHRoZSBpbWFnZSBzb3VyY2VcclxuICAgIHRyYW5zZm9ybWF0aW9uczogW10sXHJcblxyXG4gICAgLy8gRGVmYXVsdCBvcHRpb25zXHJcbiAgICBkZWZhdWx0czoge1xyXG4gICAgICAvLyBDYW52YXMgcHJvcGVydGllcyAoZGltZW5zaW9uLCByYXRpbywgY29sb3IpXHJcbiAgICAgIG1pbldpZHRoOiBudWxsLFxyXG4gICAgICBtaW5IZWlnaHQ6IG51bGwsXHJcbiAgICAgIG1heFdpZHRoOiBudWxsLFxyXG4gICAgICBtYXhIZWlnaHQ6IG51bGwsXHJcbiAgICAgIHJhdGlvOiBudWxsLFxyXG4gICAgICBsZWZ0OiAwLFxyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxyXG5cclxuICAgICAgLy8gUGx1Z2lucyBvcHRpb25zXHJcbiAgICAgIHBsdWdpbnM6IHt9LFxyXG5cclxuICAgICAgLy8gUG9zdC1pbml0aWFsaXNhdGlvbiBjYWxsYmFja1xyXG4gICAgICBpbml0aWFsaXplOiBmdW5jdGlvbiAoKSB7IC8qIG5vb3AgKi8gfVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMaXN0IG9mIHRoZSBpbnN0YW5jaWVkIHBsdWdpbnNcclxuICAgIHBsdWdpbnM6IHt9LFxyXG5cclxuICAgIC8vIFRoaXMgb3B0aW9ucyBhcmUgYSBtZXJnZSBiZXR3ZWVuIGBkZWZhdWx0c2AgYW5kIHRoZSBvcHRpb25zIHBhc3NlZFxyXG4gICAgLy8gdGhyb3VnaCB0aGUgY29uc3RydWN0b3JcclxuICAgIG9wdGlvbnM6IHt9LFxyXG5cclxuICAgIGNvbnN0cnVjdG9yOiBmdW5jdGlvbiAoZWxlbWVudCwgb3B0aW9ucywgcGx1Z2lucykge1xyXG4gICAgICB0aGlzLm9wdGlvbnMgPSBEYXJrcm9vbS5VdGlscy5leHRlbmQob3B0aW9ucywgdGhpcy5kZWZhdWx0cyk7XHJcblxyXG4gICAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKVxyXG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpO1xyXG4gICAgICBpZiAobnVsbCA9PT0gZWxlbWVudClcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICB2YXIgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIEluaXRpYWxpemUgdGhlIERPTS9GYWJyaWMgZWxlbWVudHNcclxuICAgICAgICB0aGlzLl9pbml0aWFsaXplRE9NKGVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMuX2luaXRpYWxpemVJbWFnZSgpO1xyXG5cclxuICAgICAgICAvLyBUaGVuIGluaXRpYWxpemUgdGhlIHBsdWdpbnNcclxuICAgICAgICB0aGlzLl9pbml0aWFsaXplUGx1Z2lucyhEYXJrcm9vbS5wbHVnaW5zKTtcclxuXHJcbiAgICAgICAgLy8gUHVibGljIG1ldGhvZCB0byBhZGp1c3QgaW1hZ2UgYWNjb3JkaW5nIHRvIHRoZSBjYW52YXNcclxuICAgICAgICB0aGlzLnJlZnJlc2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgLy8gRXhlY3V0ZSBhIGN1c3RvbSBjYWxsYmFjayBhZnRlciBpbml0aWFsaXphdGlvblxyXG4gICAgICAgICAgdGhpcy5vcHRpb25zLmluaXRpYWxpemUuYmluZCh0aGlzKS5jYWxsKCk7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgIH0uYmluZCh0aGlzKVxyXG5cclxuICAgICAgLy9pbWFnZS5jcm9zc09yaWdpbiA9ICdhbm9ueW1vdXMnO1xyXG4gICAgICBpbWFnZS5zcmMgPSBlbGVtZW50LnNyYztcclxuICAgIH0sXHJcblxyXG4gICAgc2VsZkRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyRWxlbWVudDtcclxuICAgICAgdmFyIGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb250YWluZXIucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoaW1hZ2UsIGNvbnRhaW5lcik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGltYWdlLnNyYyA9IHRoaXMuc291cmNlSW1hZ2UudG9EYXRhVVJMKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIEFkZCBhYmlsaXR5IHRvIGF0dGFjaCBldmVudCBsaXN0ZW5lciBvbiB0aGUgY29yZSBvYmplY3QuXHJcbiAgICAvLyBJdCB1c2VzIHRoZSBjYW52YXMgZWxlbWVudCB0byBwcm9jZXNzIGV2ZW50cy5cclxuICAgIGFkZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uIChldmVudE5hbWUsIGNhbGxiYWNrKSB7XHJcbiAgICAgIHZhciBlbCA9IHRoaXMuY2FudmFzLmdldEVsZW1lbnQoKTtcclxuICAgICAgaWYgKGVsLmFkZEV2ZW50TGlzdGVuZXIpIHtcclxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2spO1xyXG4gICAgICB9IGVsc2UgaWYgKGVsLmF0dGFjaEV2ZW50KSB7XHJcbiAgICAgICAgZWwuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50TmFtZSwgY2FsbGJhY2spO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGRpc3BhdGNoRXZlbnQ6IGZ1bmN0aW9uIChldmVudE5hbWUpIHtcclxuICAgICAgLy8gVXNlIHRoZSBvbGQgd2F5IG9mIGNyZWF0aW5nIGV2ZW50IHRvIGJlIElFIGNvbXBhdGlibGVcclxuICAgICAgLy8gU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0d1aWRlL0V2ZW50cy9DcmVhdGluZ19hbmRfdHJpZ2dlcmluZ19ldmVudHNcclxuICAgICAgdmFyIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XHJcbiAgICAgIGV2ZW50LmluaXRFdmVudChldmVudE5hbWUsIHRydWUsIHRydWUpO1xyXG5cclxuICAgICAgdGhpcy5jYW52YXMuZ2V0RWxlbWVudCgpLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBBZGp1c3QgaW1hZ2UgJiBjYW52YXMgZGltZW5zaW9uIGFjY29yZGluZyB0byBtaW4vbWF4IHdpZHRoL2hlaWdodFxyXG4gICAgLy8gYW5kIHJhdGlvIHNwZWNpZmllZCBpbiB0aGUgb3B0aW9ucy5cclxuICAgIC8vIFRoaXMgbWV0aG9kIHNob3VsZCBiZSBjYWxsZWQgYWZ0ZXIgZWFjaCBpbWFnZSB0cmFuc2Zvcm1hdGlvbi5cclxuICAgIHJlZnJlc2g6IGZ1bmN0aW9uIChuZXh0KSB7XHJcbiAgICAgIHZhciBjbG9uZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICBjbG9uZS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5fcmVwbGFjZUN1cnJlbnRJbWFnZShuZXcgZmFicmljLkltYWdlKGNsb25lKSk7XHJcblxyXG4gICAgICAgIGlmIChuZXh0KSBuZXh0KCk7XHJcbiAgICAgIH0uYmluZCh0aGlzKTtcclxuICAgICAgY2xvbmUuc3JjID0gdGhpcy5zb3VyY2VJbWFnZS50b0RhdGFVUkwoKTtcclxuICAgIH0sXHJcblxyXG4gICAgX3JlcGxhY2VDdXJyZW50SW1hZ2U6IGZ1bmN0aW9uIChuZXdJbWFnZSkge1xyXG4gICAgICBpZiAodGhpcy5pbWFnZSkge1xyXG4gICAgICAgIHRoaXMuaW1hZ2UucmVtb3ZlKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuaW1hZ2UgPSBuZXdJbWFnZTtcclxuICAgICAgdGhpcy5pbWFnZS5zZWxlY3RhYmxlID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuaW1hZ2UubGVmdCA9IHRoaXMub3B0aW9ucy5sZWZ0O1xyXG4gICAgICB0aGlzLmltYWdlLnRvcCA9IHRoaXMub3B0aW9ucy50b3A7XHJcblxyXG4gICAgICAvLyBBZGp1c3Qgd2lkdGggb3IgaGVpZ2h0IGFjY29yZGluZyB0byBzcGVjaWZpZWQgcmF0aW9cclxuICAgICAgdmFyIHZpZXdwb3J0ID0gRGFya3Jvb20uVXRpbHMuY29tcHV0ZUltYWdlVmlld1BvcnQodGhpcy5pbWFnZSk7XHJcbiAgICAgIHZhciBjYW52YXNXaWR0aCA9IHZpZXdwb3J0LndpZHRoO1xyXG4gICAgICB2YXIgY2FudmFzSGVpZ2h0ID0gdmlld3BvcnQuaGVpZ2h0O1xyXG5cclxuICAgICAgLy8gaWYgKG51bGwgIT09IHRoaXMub3B0aW9ucy5yYXRpbykge1xyXG4gICAgICAvLyAgIHZhciBjYW52YXNSYXRpbyA9ICt0aGlzLm9wdGlvbnMucmF0aW87XHJcbiAgICAgIC8vICAgdmFyIGN1cnJlbnRSYXRpbyA9IGNhbnZhc1dpZHRoIC8gY2FudmFzSGVpZ2h0O1xyXG5cclxuICAgICAgLy8gICBpZiAoY3VycmVudFJhdGlvID4gY2FudmFzUmF0aW8pIHtcclxuICAgICAgLy8gICAgIGNhbnZhc0hlaWdodCA9IGNhbnZhc1dpZHRoIC8gY2FudmFzUmF0aW87XHJcbiAgICAgIC8vICAgfSBlbHNlIGlmIChjdXJyZW50UmF0aW8gPCBjYW52YXNSYXRpbykge1xyXG4gICAgICAvLyAgICAgY2FudmFzV2lkdGggPSBjYW52YXNIZWlnaHQgKiBjYW52YXNSYXRpbztcclxuICAgICAgLy8gICB9XHJcbiAgICAgIC8vIH1cclxuXHJcbiAgICAgIC8vIC8vIFRoZW4gc2NhbGUgdGhlIGltYWdlIHRvIGZpdCBpbnRvIGRpbWVuc2lvbiBsaW1pdHNcclxuICAgICAgLy8gdmFyIHNjYWxlTWluID0gMTtcclxuICAgICAgLy8gdmFyIHNjYWxlTWF4ID0gMTtcclxuICAgICAgLy8gdmFyIHNjYWxlWCA9IDE7XHJcbiAgICAgIC8vIHZhciBzY2FsZVkgPSAxO1xyXG5cclxuICAgICAgLy8gaWYgKG51bGwgIT09IHRoaXMub3B0aW9ucy5tYXhXaWR0aCAmJiB0aGlzLm9wdGlvbnMubWF4V2lkdGggPCBjYW52YXNXaWR0aCkge1xyXG4gICAgICAvLyAgIHNjYWxlWCA9ICB0aGlzLm9wdGlvbnMubWF4V2lkdGggLyBjYW52YXNXaWR0aDtcclxuICAgICAgLy8gfVxyXG4gICAgICAvLyBpZiAobnVsbCAhPT0gdGhpcy5vcHRpb25zLm1heEhlaWdodCAmJiB0aGlzLm9wdGlvbnMubWF4SGVpZ2h0IDwgY2FudmFzSGVpZ2h0KSB7XHJcbiAgICAgIC8vICAgc2NhbGVZID0gIHRoaXMub3B0aW9ucy5tYXhIZWlnaHQgLyBjYW52YXNIZWlnaHQ7XHJcbiAgICAgIC8vIH1cclxuICAgICAgLy8gc2NhbGVNaW4gPSBNYXRoLm1pbihzY2FsZVgsIHNjYWxlWSk7XHJcblxyXG4gICAgICAvLyBzY2FsZVggPSAxO1xyXG4gICAgICAvLyBzY2FsZVkgPSAxO1xyXG4gICAgICAvLyBpZiAobnVsbCAhPT0gdGhpcy5vcHRpb25zLm1pbldpZHRoICYmIHRoaXMub3B0aW9ucy5taW5XaWR0aCA+IGNhbnZhc1dpZHRoKSB7XHJcbiAgICAgIC8vICAgc2NhbGVYID0gIHRoaXMub3B0aW9ucy5taW5XaWR0aCAvIGNhbnZhc1dpZHRoO1xyXG4gICAgICAvLyB9XHJcbiAgICAgIC8vIGlmIChudWxsICE9PSB0aGlzLm9wdGlvbnMubWluSGVpZ2h0ICYmIHRoaXMub3B0aW9ucy5taW5IZWlnaHQgPiBjYW52YXNIZWlnaHQpIHtcclxuICAgICAgLy8gICBzY2FsZVkgPSAgdGhpcy5vcHRpb25zLm1pbkhlaWdodCAvIGNhbnZhc0hlaWdodDtcclxuICAgICAgLy8gfVxyXG4gICAgICAvLyBzY2FsZU1heCA9IE1hdGgubWF4KHNjYWxlWCwgc2NhbGVZKTtcclxuXHJcbiAgICAgIC8vIHZhciBzY2FsZSA9IHNjYWxlTWF4ICogc2NhbGVNaW47IC8vIG9uZSBzaG91bGQgYmUgZXF1YWxzIHRvIDFcclxuXHJcbiAgICAgIC8vIGNhbnZhc1dpZHRoICo9IHNjYWxlO1xyXG4gICAgICAvLyBjYW52YXNIZWlnaHQgKj0gc2NhbGU7XHJcblxyXG4gICAgICAvLyBGaW5hbGx5IHBsYWNlIHRoZSBpbWFnZSBpbiB0aGUgY2VudGVyIG9mIHRoZSBjYW52YXNcclxuICAgICAgLy8gdGhpcy5pbWFnZS5zZXRTY2FsZVgoMSAqIHNjYWxlKTtcclxuICAgICAgLy8gdGhpcy5pbWFnZS5zZXRTY2FsZVkoMSAqIHNjYWxlKTtcclxuICAgICAgdGhpcy5jYW52YXMuYWRkKHRoaXMuaW1hZ2UpO1xyXG4gICAgICB0aGlzLmNhbnZhcy5zZXRXaWR0aChjYW52YXNXaWR0aCk7XHJcbiAgICAgIHRoaXMuY2FudmFzLnNldEhlaWdodChjYW52YXNIZWlnaHQpO1xyXG5cclxuICAgICAgLy8gUmVzaXplIHRoZSBpbWFnZSB0byBmaXQgdGhlIGNhbnZhc1xyXG4gICAgICBpZiAodGhpcy5pbWFnZS5vQ29vcmRzLmJyLnggPCB0aGlzLmNhbnZhcy53aWR0aCkge1xyXG4gICAgICAgIHRoaXMuaW1hZ2UubGVmdCA9IHRoaXMuaW1hZ2UubGVmdCArIE1hdGguY2VpbCh0aGlzLmNhbnZhcy53aWR0aCAtIHRoaXMuaW1hZ2Uub0Nvb3Jkcy5ici54KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5pbWFnZS5vQ29vcmRzLmJyLnkgPCB0aGlzLmNhbnZhcy5oZWlnaHQpIHtcclxuICAgICAgICB0aGlzLmltYWdlLnRvcCA9IHRoaXMuaW1hZ2UudG9wICsgTWF0aC5jZWlsKHRoaXMuY2FudmFzLmhlaWdodCAtIHRoaXMuaW1hZ2Uub0Nvb3Jkcy5ici55KTtcclxuICAgICAgfVxyXG4gICAgICAvLyB0aGlzLmNhbnZhcy5jZW50ZXJPYmplY3QodGhpcy5pbWFnZSk7XHJcbiAgICAgIHRoaXMuaW1hZ2Uuc2V0Q29vcmRzKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIEFwcGx5IHRoZSB0cmFuc2Zvcm1hdGlvbiBvbiB0aGUgY3VycmVudCBpbWFnZSBhbmQgc2F2ZSBpdCBpbiB0aGVcclxuICAgIC8vIHRyYW5zZm9ybWF0aW9ucyBzdGFjayAoaW4gb3JkZXIgdG8gcmVjb25zdGl0dXRlIHRoZSBwcmV2aW91cyBzdGF0ZXNcclxuICAgIC8vIG9mIHRoZSBpbWFnZSkuXHJcbiAgICBhcHBseVRyYW5zZm9ybWF0aW9uOiBmdW5jdGlvbiAodHJhbnNmb3JtYXRpb24pIHtcclxuICAgICAgdGhpcy50cmFuc2Zvcm1hdGlvbnMucHVzaCh0cmFuc2Zvcm1hdGlvbik7XHJcblxyXG4gICAgICB0cmFuc2Zvcm1hdGlvbi5hcHBseVRyYW5zZm9ybWF0aW9uKFxyXG4gICAgICAgIHRoaXMuc291cmNlQ2FudmFzLFxyXG4gICAgICAgIHRoaXMuc291cmNlSW1hZ2UsXHJcbiAgICAgICAgdGhpcy5fcG9zdFRyYW5zZm9ybWF0aW9uLmJpbmQodGhpcylcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgX3Bvc3RUcmFuc2Zvcm1hdGlvbjogZnVuY3Rpb24gKG5ld0ltYWdlKSB7XHJcbiAgICAgIGlmIChuZXdJbWFnZSlcclxuICAgICAgICB0aGlzLnNvdXJjZUltYWdlID0gbmV3SW1hZ2U7XHJcblxyXG4gICAgICB0aGlzLnJlZnJlc2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnY29yZTp0cmFuc2Zvcm1hdGlvbicpO1xyXG4gICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBJbml0aWFsaXplIGltYWdlIGZyb20gb3JpZ2luYWwgZWxlbWVudCBwbHVzIHJlLWFwcGx5IGV2ZXJ5XHJcbiAgICAvLyB0cmFuc2Zvcm1hdGlvbnMuXHJcbiAgICByZWluaXRpYWxpemVJbWFnZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLnNvdXJjZUltYWdlLnJlbW92ZSgpO1xyXG4gICAgICB0aGlzLl9pbml0aWFsaXplSW1hZ2UoKTtcclxuICAgICAgdGhpcy5fcG9wVHJhbnNmb3JtYXRpb24odGhpcy50cmFuc2Zvcm1hdGlvbnMuc2xpY2UoKSlcclxuICAgIH0sXHJcblxyXG4gICAgX3BvcFRyYW5zZm9ybWF0aW9uOiBmdW5jdGlvbiAodHJhbnNmb3JtYXRpb25zKSB7XHJcbiAgICAgIGlmICgwID09PSB0cmFuc2Zvcm1hdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdjb3JlOnJlaW5pdGlhbGl6ZWQnKTtcclxuICAgICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciB0cmFuc2Zvcm1hdGlvbiA9IHRyYW5zZm9ybWF0aW9ucy5zaGlmdCgpO1xyXG5cclxuICAgICAgdmFyIG5leHQgPSBmdW5jdGlvbiAobmV3SW1hZ2UpIHtcclxuICAgICAgICBpZiAobmV3SW1hZ2UpIHRoaXMuc291cmNlSW1hZ2UgPSBuZXdJbWFnZTtcclxuICAgICAgICB0aGlzLl9wb3BUcmFuc2Zvcm1hdGlvbih0cmFuc2Zvcm1hdGlvbnMpXHJcbiAgICAgIH07XHJcblxyXG4gICAgICB0cmFuc2Zvcm1hdGlvbi5hcHBseVRyYW5zZm9ybWF0aW9uKFxyXG4gICAgICAgIHRoaXMuc291cmNlQ2FudmFzLFxyXG4gICAgICAgIHRoaXMuc291cmNlSW1hZ2UsXHJcbiAgICAgICAgbmV4dC5iaW5kKHRoaXMpXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIENyZWF0ZSB0aGUgRE9NIGVsZW1lbnRzIGFuZCBpbnN0YW5jaWF0ZSB0aGUgRmFicmljIGNhbnZhcy5cclxuICAgIC8vIFRoZSBpbWFnZSBlbGVtZW50IGlzIHJlcGxhY2VkIGJ5IGEgbmV3IGBkaXZgIGVsZW1lbnQuXHJcbiAgICAvLyBIb3dldmVyIHRoZSBvcmlnaW5hbCBpbWFnZSBpcyByZS1pbmplY3RlZCBpbiBvcmRlciB0byBrZWVwIGEgdHJhY2Ugb2YgaXQuXHJcbiAgICBfaW5pdGlhbGl6ZURPTTogZnVuY3Rpb24gKGltYWdlRWxlbWVudCkge1xyXG4gICAgICAvLyBDb250YWluZXJcclxuICAgICAgdmFyIG1haW5Db250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIG1haW5Db250YWluZXJFbGVtZW50LmNsYXNzTmFtZSA9ICdkYXJrcm9vbS1jb250YWluZXInO1xyXG5cclxuICAgICAgLy8gVG9vbGJhclxyXG4gICAgICB2YXIgdG9vbGJhckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgdG9vbGJhckVsZW1lbnQuY2xhc3NOYW1lID0gJ2Rhcmtyb29tLXRvb2xiYXInO1xyXG4gICAgICBtYWluQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZCh0b29sYmFyRWxlbWVudCk7XHJcblxyXG4gICAgICAvLyBWaWV3cG9ydCBjYW52YXNcclxuICAgICAgdmFyIGNhbnZhc0NvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgY2FudmFzQ29udGFpbmVyRWxlbWVudC5jbGFzc05hbWUgPSAnZGFya3Jvb20taW1hZ2UtY29udGFpbmVyJztcclxuICAgICAgdmFyIGNhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgY2FudmFzQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChjYW52YXNFbGVtZW50KTtcclxuICAgICAgbWFpbkNvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQoY2FudmFzQ29udGFpbmVyRWxlbWVudCk7XHJcblxyXG4gICAgICAvLyBTb3VyY2UgY2FudmFzXHJcbiAgICAgIHZhciBzb3VyY2VDYW52YXNDb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHNvdXJjZUNhbnZhc0NvbnRhaW5lckVsZW1lbnQuY2xhc3NOYW1lID0gJ2Rhcmtyb29tLXNvdXJjZS1jb250YWluZXInO1xyXG4gICAgICBzb3VyY2VDYW52YXNDb250YWluZXJFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIHZhciBzb3VyY2VDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgIHNvdXJjZUNhbnZhc0NvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQoc291cmNlQ2FudmFzRWxlbWVudCk7XHJcbiAgICAgIG1haW5Db250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKHNvdXJjZUNhbnZhc0NvbnRhaW5lckVsZW1lbnQpO1xyXG5cclxuICAgICAgLy8gT3JpZ2luYWwgaW1hZ2VcclxuICAgICAgaW1hZ2VFbGVtZW50LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG1haW5Db250YWluZXJFbGVtZW50LCBpbWFnZUVsZW1lbnQpO1xyXG4gICAgICBpbWFnZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgbWFpbkNvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQoaW1hZ2VFbGVtZW50KTtcclxuXHJcbiAgICAgIC8vIEluc3RhbmNpYXRlIG9iamVjdCBmcm9tIGVsZW1lbnRzXHJcbiAgICAgIHRoaXMuY29udGFpbmVyRWxlbWVudCA9IG1haW5Db250YWluZXJFbGVtZW50O1xyXG4gICAgICB0aGlzLm9yaWdpbmFsSW1hZ2VFbGVtZW50ID0gaW1hZ2VFbGVtZW50O1xyXG5cclxuICAgICAgdGhpcy50b29sYmFyID0gbmV3IERhcmtyb29tLlVJLlRvb2xiYXIodG9vbGJhckVsZW1lbnQpO1xyXG5cclxuICAgICAgdGhpcy5jYW52YXMgPSBuZXcgZmFicmljLkNhbnZhcyhjYW52YXNFbGVtZW50LCB7XHJcbiAgICAgICAgc2VsZWN0aW9uOiBmYWxzZSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3JcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLnNvdXJjZUNhbnZhcyA9IG5ldyBmYWJyaWMuQ2FudmFzKHNvdXJjZUNhbnZhc0VsZW1lbnQsIHtcclxuICAgICAgICBzZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5vcHRpb25zLmJhY2tncm91bmRDb2xvclxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gSW5zdGFuY2lhdGUgdGhlIEZhYnJpYyBpbWFnZSBvYmplY3QuXHJcbiAgICAvLyBUaGUgaW1hZ2UgaXMgY3JlYXRlZCBhcyBhIHN0YXRpYyBlbGVtZW50IHdpdGggbm8gY29udHJvbCxcclxuICAgIC8vIHRoZW4gaXQgaXMgYWRkIGluIHRoZSBGYWJyaWMgY2FudmFzIG9iamVjdC5cclxuICAgIF9pbml0aWFsaXplSW1hZ2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGhpcy5zb3VyY2VJbWFnZSA9IG5ldyBmYWJyaWMuSW1hZ2UodGhpcy5vcmlnaW5hbEltYWdlRWxlbWVudCwge1xyXG4gICAgICAgIC8vIFNvbWUgb3B0aW9ucyB0byBtYWtlIHRoZSBpbWFnZSBzdGF0aWNcclxuICAgICAgICBzZWxlY3RhYmxlOiBmYWxzZSxcclxuICAgICAgICBldmVudGVkOiBmYWxzZSxcclxuICAgICAgICBsb2NrTW92ZW1lbnRYOiB0cnVlLFxyXG4gICAgICAgIGxvY2tNb3ZlbWVudFk6IHRydWUsXHJcbiAgICAgICAgbG9ja1JvdGF0aW9uOiB0cnVlLFxyXG4gICAgICAgIGxvY2tTY2FsaW5nWDogdHJ1ZSxcclxuICAgICAgICBsb2NrU2NhbGluZ1k6IHRydWUsXHJcbiAgICAgICAgbG9ja1VuaVNjYWxpbmc6IHRydWUsXHJcbiAgICAgICAgaGFzQ29udHJvbHM6IGZhbHNlLFxyXG4gICAgICAgIGhhc0JvcmRlcnM6IGZhbHNlLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuc291cmNlQ2FudmFzLmFkZCh0aGlzLnNvdXJjZUltYWdlKTtcclxuXHJcbiAgICAgIC8vIEFkanVzdCB3aWR0aCBvciBoZWlnaHQgYWNjb3JkaW5nIHRvIHNwZWNpZmllZCByYXRpb1xyXG4gICAgICB2YXIgdmlld3BvcnQgPSBEYXJrcm9vbS5VdGlscy5jb21wdXRlSW1hZ2VWaWV3UG9ydCh0aGlzLnNvdXJjZUltYWdlKTtcclxuICAgICAgdmFyIGNhbnZhc1dpZHRoID0gdmlld3BvcnQud2lkdGg7XHJcbiAgICAgIHZhciBjYW52YXNIZWlnaHQgPSB2aWV3cG9ydC5oZWlnaHQ7XHJcblxyXG4gICAgICB0aGlzLnNvdXJjZUNhbnZhcy5zZXRXaWR0aChjYW52YXNXaWR0aCk7XHJcbiAgICAgIHRoaXMuc291cmNlQ2FudmFzLnNldEhlaWdodChjYW52YXNIZWlnaHQpO1xyXG4gICAgICB0aGlzLnNvdXJjZUNhbnZhcy5jZW50ZXJPYmplY3QodGhpcy5zb3VyY2VJbWFnZSk7XHJcbiAgICAgIHRoaXMuc291cmNlSW1hZ2Uuc2V0Q29vcmRzKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIEluaXRpYWxpemUgZXZlcnkgcGx1Z2lucy5cclxuICAgIC8vIE5vdGUgdGhhdCBwbHVnaW5zIGFyZSBpbnN0YW5jaWF0ZWQgaW4gdGhlIHNhbWUgb3JkZXIgdGhhbiB0aGV5XHJcbiAgICAvLyBhcmUgZGVjbGFyZWQgaW4gdGhlIHBhcmFtZXRlciBvYmplY3QuXHJcbiAgICBfaW5pdGlhbGl6ZVBsdWdpbnM6IGZ1bmN0aW9uIChwbHVnaW5zKSB7XHJcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gcGx1Z2lucykge1xyXG4gICAgICAgIHZhciBwbHVnaW4gPSBwbHVnaW5zW25hbWVdO1xyXG4gICAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zLnBsdWdpbnNbbmFtZV07XHJcblxyXG4gICAgICAgIC8vIFNldHRpbmcgZmFsc2UgaW50byB0aGUgcGx1Z2luIG9wdGlvbnMgd2lsbCBkaXNhYmxlIHRoZSBwbHVnaW5cclxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gZmFsc2UpXHJcbiAgICAgICAgICBjb250aW51ZTtcclxuXHJcbiAgICAgICAgLy8gQXZvaWQgYW55IGlzc3VlcyB3aXRoIF9wcm90b19cclxuICAgICAgICBpZiAoIXBsdWdpbnMuaGFzT3duUHJvcGVydHkobmFtZSkpXHJcbiAgICAgICAgICBjb250aW51ZTtcclxuXHJcbiAgICAgICAgdGhpcy5wbHVnaW5zW25hbWVdID0gbmV3IHBsdWdpbih0aGlzLCBvcHRpb25zKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBjbGVhckZvY3VzOiBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcclxuICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMucGx1Z2lucykge1xyXG4gICAgICAgIGlmIChrZXkgIT0gaW5zdGFuY2UpIHtcclxuICAgICAgICAgIHRoaXMucGx1Z2luc1trZXldLmNsZWFyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufSkoKTtcclxuIiwiKGZ1bmN0aW9uKCkge1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG5EYXJrcm9vbS5QbHVnaW4gPSBQbHVnaW47XHJcblxyXG4vLyBEZWZpbmUgYSBwbHVnaW4gb2JqZWN0LiBUaGlzIGlzIHRoZSAoYWJzdHJhY3QpIHBhcmVudCBjbGFzcyB3aGljaFxyXG4vLyBoYXMgdG8gYmUgZXh0ZW5kZWQgZm9yIGVhY2ggcGx1Z2luLlxyXG5mdW5jdGlvbiBQbHVnaW4oZGFya3Jvb20sIG9wdGlvbnMpIHtcclxuICB0aGlzLmRhcmtyb29tID0gZGFya3Jvb207XHJcbiAgdGhpcy5vcHRpb25zID0gRGFya3Jvb20uVXRpbHMuZXh0ZW5kKG9wdGlvbnMsIHRoaXMuZGVmYXVsdHMpO1xyXG4gIHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG59XHJcblxyXG5QbHVnaW4ucHJvdG90eXBlID0ge1xyXG4gIGRlZmF1bHRzOiB7fSxcclxuICBpbml0aWFsaXplOiBmdW5jdGlvbigpIHsgfSxcclxuICBjbGVhcjogZnVuY3Rpb24oKSB7IH1cclxufVxyXG5cclxuLy8gSW5zcGlyZWQgYnkgQmFja2JvbmUuanMgZXh0ZW5kIGNhcGFiaWxpdHkuXHJcblBsdWdpbi5leHRlbmQgPSBmdW5jdGlvbihwcm90b1Byb3BzKSB7XHJcbiAgdmFyIHBhcmVudCA9IHRoaXM7XHJcbiAgdmFyIGNoaWxkO1xyXG5cclxuICBpZiAocHJvdG9Qcm9wcyAmJiBwcm90b1Byb3BzLmhhc093blByb3BlcnR5KCdjb25zdHJ1Y3RvcicpKSB7XHJcbiAgICBjaGlsZCA9IHByb3RvUHJvcHMuY29uc3RydWN0b3I7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNoaWxkID0gZnVuY3Rpb24oKXsgcmV0dXJuIHBhcmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9O1xyXG4gIH1cclxuXHJcbiAgRGFya3Jvb20uVXRpbHMuZXh0ZW5kKGNoaWxkLCBwYXJlbnQpO1xyXG5cclxuICB2YXIgU3Vycm9nYXRlID0gZnVuY3Rpb24oKXsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9O1xyXG4gIFN1cnJvZ2F0ZS5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlO1xyXG4gIGNoaWxkLnByb3RvdHlwZSA9IG5ldyBTdXJyb2dhdGU7XHJcblxyXG4gIGlmIChwcm90b1Byb3BzKSBEYXJrcm9vbS5VdGlscy5leHRlbmQoY2hpbGQucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcclxuXHJcbiAgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTtcclxuXHJcbiAgcmV0dXJuIGNoaWxkO1xyXG59XHJcblxyXG59KSgpO1xyXG4iLCIoZnVuY3Rpb24oKSB7XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbkRhcmtyb29tLlRyYW5zZm9ybWF0aW9uID0gVHJhbnNmb3JtYXRpb247XHJcblxyXG5mdW5jdGlvbiBUcmFuc2Zvcm1hdGlvbihvcHRpb25zKSB7XHJcbiAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxufVxyXG5cclxuVHJhbnNmb3JtYXRpb24ucHJvdG90eXBlID0ge1xyXG4gIGFwcGx5VHJhbnNmb3JtYXRpb246IGZ1bmN0aW9uKGltYWdlKSB7IC8qIG5vLW9wICovICB9XHJcbn1cclxuXHJcbi8vIEluc3BpcmVkIGJ5IEJhY2tib25lLmpzIGV4dGVuZCBjYXBhYmlsaXR5LlxyXG5UcmFuc2Zvcm1hdGlvbi5leHRlbmQgPSBmdW5jdGlvbihwcm90b1Byb3BzKSB7XHJcbiAgdmFyIHBhcmVudCA9IHRoaXM7XHJcbiAgdmFyIGNoaWxkO1xyXG5cclxuICBpZiAocHJvdG9Qcm9wcyAmJiBwcm90b1Byb3BzLmhhc093blByb3BlcnR5KCdjb25zdHJ1Y3RvcicpKSB7XHJcbiAgICBjaGlsZCA9IHByb3RvUHJvcHMuY29uc3RydWN0b3I7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNoaWxkID0gZnVuY3Rpb24oKXsgcmV0dXJuIHBhcmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9O1xyXG4gIH1cclxuXHJcbiAgRGFya3Jvb20uVXRpbHMuZXh0ZW5kKGNoaWxkLCBwYXJlbnQpO1xyXG5cclxuICB2YXIgU3Vycm9nYXRlID0gZnVuY3Rpb24oKXsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9O1xyXG4gIFN1cnJvZ2F0ZS5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlO1xyXG4gIGNoaWxkLnByb3RvdHlwZSA9IG5ldyBTdXJyb2dhdGU7XHJcblxyXG4gIGlmIChwcm90b1Byb3BzKSBEYXJrcm9vbS5VdGlscy5leHRlbmQoY2hpbGQucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcclxuXHJcbiAgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTtcclxuXHJcbiAgcmV0dXJuIGNoaWxkO1xyXG59XHJcblxyXG59KSgpO1xyXG4iLCIoZnVuY3Rpb24oKSB7XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbkRhcmtyb29tLlVJID0ge1xyXG4gIFRvb2xiYXI6IFRvb2xiYXIsXHJcbiAgQnV0dG9uR3JvdXA6IEJ1dHRvbkdyb3VwLFxyXG4gIEJ1dHRvbjogQnV0dG9uLFxyXG59O1xyXG5cclxuLy8gVG9vbGJhciBvYmplY3QuXHJcbmZ1bmN0aW9uIFRvb2xiYXIoZWxlbWVudCkge1xyXG4gIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbn1cclxuXHJcblRvb2xiYXIucHJvdG90eXBlID0ge1xyXG4gIGNyZWF0ZUJ1dHRvbkdyb3VwOiBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgICB2YXIgYnV0dG9uR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJ1dHRvbkdyb3VwLmNsYXNzTmFtZSA9ICdkYXJrcm9vbS1idXR0b24tZ3JvdXAnO1xyXG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbkdyb3VwKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IEJ1dHRvbkdyb3VwKGJ1dHRvbkdyb3VwKTtcclxuICB9XHJcbn07XHJcblxyXG4vLyBCdXR0b25Hcm91cCBvYmplY3QuXHJcbmZ1bmN0aW9uIEJ1dHRvbkdyb3VwKGVsZW1lbnQpIHtcclxuICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG59XHJcblxyXG5CdXR0b25Hcm91cC5wcm90b3R5cGUgPSB7XHJcbiAgY3JlYXRlQnV0dG9uOiBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgICB2YXIgZGVmYXVsdHMgPSB7XHJcbiAgICAgIGltYWdlOiAnaGVscCcsXHJcbiAgICAgIHR5cGU6ICdkZWZhdWx0JyxcclxuICAgICAgZ3JvdXA6ICdkZWZhdWx0JyxcclxuICAgICAgaGlkZTogZmFsc2UsXHJcbiAgICAgIGRpc2FibGVkOiBmYWxzZVxyXG4gICAgfTtcclxuXHJcbiAgICBvcHRpb25zID0gRGFya3Jvb20uVXRpbHMuZXh0ZW5kKG9wdGlvbnMsIGRlZmF1bHRzKTtcclxuXHJcbiAgICB2YXIgYnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYnV0dG9uRWxlbWVudC50eXBlID0gJ2J1dHRvbic7XHJcbiAgICBidXR0b25FbGVtZW50LmNsYXNzTmFtZSA9ICdkYXJrcm9vbS1idXR0b24gZGFya3Jvb20tYnV0dG9uLScgKyBvcHRpb25zLnR5cGU7XHJcbiAgICBidXR0b25FbGVtZW50LmlubmVySFRNTCA9ICc8c3ZnIGNsYXNzPVwiZGFya3Jvb20taWNvblwiPjx1c2UgeGxpbms6aHJlZj1cIiMnICsgb3B0aW9ucy5pbWFnZSArICdcIiAvPjwvc3ZnPic7XHJcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uRWxlbWVudCk7XHJcblxyXG4gICAgdmFyIGJ1dHRvbiA9IG5ldyBCdXR0b24oYnV0dG9uRWxlbWVudCk7XHJcbiAgICBidXR0b24uaGlkZShvcHRpb25zLmhpZGUpO1xyXG4gICAgYnV0dG9uLmRpc2FibGUob3B0aW9ucy5kaXNhYmxlZCk7XHJcblxyXG4gICAgcmV0dXJuIGJ1dHRvbjtcclxuICB9XHJcbn1cclxuXHJcbi8vIEJ1dHRvbiBvYmplY3QuXHJcbmZ1bmN0aW9uIEJ1dHRvbihlbGVtZW50KSB7XHJcbiAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxufVxyXG5cclxuQnV0dG9uLnByb3RvdHlwZSA9IHtcclxuICBhZGRFdmVudExpc3RlbmVyOiBmdW5jdGlvbihldmVudE5hbWUsIGxpc3RlbmVyKSB7XHJcbiAgICBpZiAodGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIpe1xyXG4gICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50LmF0dGFjaEV2ZW50KSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5hdHRhY2hFdmVudCgnb24nICsgZXZlbnROYW1lLCBsaXN0ZW5lcik7XHJcbiAgICB9XHJcbiAgfSxcclxuICByZW1vdmVFdmVudExpc3RlbmVyOiBmdW5jdGlvbihldmVudE5hbWUsIGxpc3RlbmVyKSB7XHJcbiAgICBpZiAodGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIpe1xyXG4gICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyKTtcclxuICAgIH1cclxuICB9LFxyXG4gIGFjdGl2ZTogZnVuY3Rpb24odmFsdWUpIHtcclxuICAgIGlmICh2YWx1ZSlcclxuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Rhcmtyb29tLWJ1dHRvbi1hY3RpdmUnKTtcclxuICAgIGVsc2VcclxuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Rhcmtyb29tLWJ1dHRvbi1hY3RpdmUnKTtcclxuICB9LFxyXG4gIGhpZGU6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICBpZiAodmFsdWUpXHJcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkYXJrcm9vbS1idXR0b24taGlkZGVuJyk7XHJcbiAgICBlbHNlXHJcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrcm9vbS1idXR0b24taGlkZGVuJyk7XHJcbiAgfSxcclxuICBkaXNhYmxlOiBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgdGhpcy5lbGVtZW50LmRpc2FibGVkID0gKHZhbHVlKSA/IHRydWUgOiBmYWxzZTtcclxuICB9XHJcbn07XHJcblxyXG59KSgpO1xyXG4iLCIoZnVuY3Rpb24oKSB7XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbkRhcmtyb29tLlV0aWxzID0ge1xyXG4gIGV4dGVuZDogZXh0ZW5kLFxyXG4gIGNvbXB1dGVJbWFnZVZpZXdQb3J0OiBjb21wdXRlSW1hZ2VWaWV3UG9ydCxcclxufTtcclxuXHJcblxyXG4vLyBVdGlsaXR5IG1ldGhvZCB0byBlYXNpbHkgZXh0ZW5kIG9iamVjdHMuXHJcbmZ1bmN0aW9uIGV4dGVuZChiLCBhKSB7XHJcbiAgdmFyIHByb3A7XHJcbiAgaWYgKGIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgcmV0dXJuIGE7XHJcbiAgfVxyXG4gIGZvciAocHJvcCBpbiBhKSB7XHJcbiAgICBpZiAoYS5oYXNPd25Qcm9wZXJ0eShwcm9wKSAmJiBiLmhhc093blByb3BlcnR5KHByb3ApID09PSBmYWxzZSkge1xyXG4gICAgICBiW3Byb3BdID0gYVtwcm9wXTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbXB1dGVJbWFnZVZpZXdQb3J0KGltYWdlKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGhlaWdodDogTWF0aC5hYnMoaW1hZ2UuZ2V0V2lkdGgoKSAqIChNYXRoLnNpbihpbWFnZS5nZXRBbmdsZSgpICogTWF0aC5QSS8xODApKSkgKyBNYXRoLmFicyhpbWFnZS5nZXRIZWlnaHQoKSAqIChNYXRoLmNvcyhpbWFnZS5nZXRBbmdsZSgpICogTWF0aC5QSS8xODApKSksXHJcbiAgICB3aWR0aDogTWF0aC5hYnMoaW1hZ2UuZ2V0SGVpZ2h0KCkgKiAoTWF0aC5zaW4oaW1hZ2UuZ2V0QW5nbGUoKSAqIE1hdGguUEkvMTgwKSkpICsgTWF0aC5hYnMoaW1hZ2UuZ2V0V2lkdGgoKSAqIChNYXRoLmNvcyhpbWFnZS5nZXRBbmdsZSgpICogTWF0aC5QSS8xODApKSksXHJcbiAgfVxyXG59XHJcblxyXG59KSgpO1xyXG4iLCI7KGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsIERhcmtyb29tLCBmYWJyaWMpIHtcclxuICAndXNlIHN0cmljdCc7XHJcblxyXG4gIERhcmtyb29tLnBsdWdpbnNbJ2hpc3RvcnknXSA9IERhcmtyb29tLlBsdWdpbi5leHRlbmQoe1xyXG4gICAgdW5kb1RyYW5zZm9ybWF0aW9uczogW10sXHJcblxyXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gSW5pdERhcmtyb29tSGlzdG9yeVBsdWdpbigpIHtcclxuICAgICAgdGhpcy5faW5pdEJ1dHRvbnMoKTtcclxuXHJcbiAgICAgIHRoaXMuZGFya3Jvb20uYWRkRXZlbnRMaXN0ZW5lcignY29yZTp0cmFuc2Zvcm1hdGlvbicsIHRoaXMuX29uVHJhbmZvcm1hdGlvbkFwcGxpZWQuYmluZCh0aGlzKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHVuZG86IGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAodGhpcy5kYXJrcm9vbS50cmFuc2Zvcm1hdGlvbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgbGFzdFRyYW5zZm9ybWF0aW9uID0gdGhpcy5kYXJrcm9vbS50cmFuc2Zvcm1hdGlvbnMucG9wKCk7XHJcbiAgICAgIHRoaXMudW5kb1RyYW5zZm9ybWF0aW9ucy51bnNoaWZ0KGxhc3RUcmFuc2Zvcm1hdGlvbik7XHJcblxyXG4gICAgICB0aGlzLmRhcmtyb29tLnJlaW5pdGlhbGl6ZUltYWdlKCk7XHJcbiAgICAgIHRoaXMuX3VwZGF0ZUJ1dHRvbnMoKTtcclxuICAgIH0sXHJcblxyXG4gICAgcmVkbzogZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmICh0aGlzLnVuZG9UcmFuc2Zvcm1hdGlvbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgY2FuY2VsVHJhbnNmb3JtYXRpb24gPSB0aGlzLnVuZG9UcmFuc2Zvcm1hdGlvbnMuc2hpZnQoKTtcclxuICAgICAgdGhpcy5kYXJrcm9vbS50cmFuc2Zvcm1hdGlvbnMucHVzaChjYW5jZWxUcmFuc2Zvcm1hdGlvbik7XHJcblxyXG4gICAgICB0aGlzLmRhcmtyb29tLnJlaW5pdGlhbGl6ZUltYWdlKCk7XHJcbiAgICAgIHRoaXMuX3VwZGF0ZUJ1dHRvbnMoKTtcclxuICAgIH0sXHJcblxyXG4gICAgX2luaXRCdXR0b25zOiBmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIGJ1dHRvbkdyb3VwID0gdGhpcy5kYXJrcm9vbS50b29sYmFyLmNyZWF0ZUJ1dHRvbkdyb3VwKCk7XHJcblxyXG4gICAgICB0aGlzLmJhY2tCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xyXG4gICAgICAgIGltYWdlOiAndW5kbycsXHJcbiAgICAgICAgZGlzYWJsZWQ6IHRydWVcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLmZvcndhcmRCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xyXG4gICAgICAgIGltYWdlOiAncmVkbycsXHJcbiAgICAgICAgZGlzYWJsZWQ6IHRydWVcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLmJhY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnVuZG8uYmluZCh0aGlzKSk7XHJcbiAgICAgIHRoaXMuZm9yd2FyZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucmVkby5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuXHJcbiAgICBfdXBkYXRlQnV0dG9uczogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMuYmFja0J1dHRvbi5kaXNhYmxlKCh0aGlzLmRhcmtyb29tLnRyYW5zZm9ybWF0aW9ucy5sZW5ndGggPT09IDApKVxyXG4gICAgICB0aGlzLmZvcndhcmRCdXR0b24uZGlzYWJsZSgodGhpcy51bmRvVHJhbnNmb3JtYXRpb25zLmxlbmd0aCA9PT0gMCkpXHJcbiAgICB9LFxyXG5cclxuICAgIF9vblRyYW5mb3JtYXRpb25BcHBsaWVkOiBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy51bmRvVHJhbnNmb3JtYXRpb25zID0gW107XHJcbiAgICAgIHRoaXMuX3VwZGF0ZUJ1dHRvbnMoKTtcclxuICAgIH1cclxuICB9KTtcclxufSkod2luZG93LCBkb2N1bWVudCwgRGFya3Jvb20sIGZhYnJpYyk7XHJcbiIsIihmdW5jdGlvbigpIHtcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIFJvdGF0aW9uID0gRGFya3Jvb20uVHJhbnNmb3JtYXRpb24uZXh0ZW5kKHtcclxuICBhcHBseVRyYW5zZm9ybWF0aW9uOiBmdW5jdGlvbihjYW52YXMsIGltYWdlLCBuZXh0KSB7XHJcbiAgICB2YXIgYW5nbGUgPSAoaW1hZ2UuZ2V0QW5nbGUoKSArIHRoaXMub3B0aW9ucy5hbmdsZSkgJSAzNjA7XHJcbiAgICBpbWFnZS5yb3RhdGUoYW5nbGUpO1xyXG5cclxuICAgIHZhciB3aWR0aCwgaGVpZ2h0O1xyXG4gICAgaGVpZ2h0ID0gTWF0aC5hYnMoaW1hZ2UuZ2V0V2lkdGgoKSooTWF0aC5zaW4oYW5nbGUqTWF0aC5QSS8xODApKSkrTWF0aC5hYnMoaW1hZ2UuZ2V0SGVpZ2h0KCkqKE1hdGguY29zKGFuZ2xlKk1hdGguUEkvMTgwKSkpO1xyXG4gICAgd2lkdGggPSBNYXRoLmFicyhpbWFnZS5nZXRIZWlnaHQoKSooTWF0aC5zaW4oYW5nbGUqTWF0aC5QSS8xODApKSkrTWF0aC5hYnMoaW1hZ2UuZ2V0V2lkdGgoKSooTWF0aC5jb3MoYW5nbGUqTWF0aC5QSS8xODApKSk7XHJcblxyXG4gICAgY2FudmFzLnNldFdpZHRoKHdpZHRoKTtcclxuICAgIGNhbnZhcy5zZXRIZWlnaHQoaGVpZ2h0KTtcclxuXHJcbiAgICBjYW52YXMuY2VudGVyT2JqZWN0KGltYWdlKTtcclxuICAgIGltYWdlLnNldENvb3JkcygpO1xyXG4gICAgY2FudmFzLnJlbmRlckFsbCgpO1xyXG5cclxuICAgIG5leHQoKTtcclxuICB9XHJcbn0pO1xyXG5cclxuRGFya3Jvb20ucGx1Z2luc1sncm90YXRlJ10gPSBEYXJrcm9vbS5QbHVnaW4uZXh0ZW5kKHtcclxuXHJcbiAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gSW5pdERhcmtyb29tUm90YXRlUGx1Z2luKCkge1xyXG4gICAgdmFyIGJ1dHRvbkdyb3VwID0gdGhpcy5kYXJrcm9vbS50b29sYmFyLmNyZWF0ZUJ1dHRvbkdyb3VwKCk7XHJcblxyXG4gICAgdmFyIGxlZnRCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xyXG4gICAgICBpbWFnZTogJ3JvdGF0ZS1sZWZ0J1xyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIHJpZ2h0QnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcclxuICAgICAgaW1hZ2U6ICdyb3RhdGUtcmlnaHQnXHJcbiAgICB9KTtcclxuXHJcbiAgICBsZWZ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yb3RhdGVMZWZ0LmJpbmQodGhpcykpO1xyXG4gICAgcmlnaHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJvdGF0ZVJpZ2h0LmJpbmQodGhpcykpO1xyXG4gIH0sXHJcblxyXG4gIHJvdGF0ZUxlZnQ6IGZ1bmN0aW9uIHJvdGF0ZUxlZnQoKSB7XHJcbiAgICB0aGlzLnJvdGF0ZSgtOTApO1xyXG4gIH0sXHJcblxyXG4gIHJvdGF0ZVJpZ2h0OiBmdW5jdGlvbiByb3RhdGVSaWdodCgpIHtcclxuICAgIHRoaXMucm90YXRlKDkwKTtcclxuICB9LFxyXG5cclxuICByb3RhdGU6IGZ1bmN0aW9uIHJvdGF0ZShhbmdsZSkge1xyXG4gICAgdGhpcy5kYXJrcm9vbS5vcHRpb25zLmxlZnQgPSAwO1xyXG4gICAgdGhpcy5kYXJrcm9vbS5vcHRpb25zLnRvcCA9IDA7XHJcbiAgICB0aGlzLmRhcmtyb29tLmFwcGx5VHJhbnNmb3JtYXRpb24oXHJcbiAgICAgIG5ldyBSb3RhdGlvbih7YW5nbGU6IGFuZ2xlfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxufSk7XHJcblxyXG59KSgpO1xyXG4iLCIoZnVuY3Rpb24oKSB7XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBDcm9wID0gRGFya3Jvb20uVHJhbnNmb3JtYXRpb24uZXh0ZW5kKHtcclxuICBhcHBseVRyYW5zZm9ybWF0aW9uOiBmdW5jdGlvbihjYW52YXMsIGltYWdlLCBuZXh0KSB7XHJcbiAgICAvLyBTbmFwc2hvdCB0aGUgaW1hZ2UgZGVsaW1pdGVkIGJ5IHRoZSBjcm9wIHpvbmVcclxuICAgIHZhciBzbmFwc2hvdCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgc25hcHNob3Qub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIC8vIFZhbGlkYXRlIGltYWdlXHJcbiAgICAgIGlmIChoZWlnaHQgPCAxIHx8IHdpZHRoIDwgMSlcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICB2YXIgaW1nSW5zdGFuY2UgPSBuZXcgZmFicmljLkltYWdlKHRoaXMsIHtcclxuICAgICAgICAvLyBvcHRpb25zIHRvIG1ha2UgdGhlIGltYWdlIHN0YXRpY1xyXG4gICAgICAgIHNlbGVjdGFibGU6IGZhbHNlLFxyXG4gICAgICAgIGV2ZW50ZWQ6IGZhbHNlLFxyXG4gICAgICAgIGxvY2tNb3ZlbWVudFg6IHRydWUsXHJcbiAgICAgICAgbG9ja01vdmVtZW50WTogdHJ1ZSxcclxuICAgICAgICBsb2NrUm90YXRpb246IHRydWUsXHJcbiAgICAgICAgbG9ja1NjYWxpbmdYOiB0cnVlLFxyXG4gICAgICAgIGxvY2tTY2FsaW5nWTogdHJ1ZSxcclxuICAgICAgICBsb2NrVW5pU2NhbGluZzogdHJ1ZSxcclxuICAgICAgICBoYXNDb250cm9sczogZmFsc2UsXHJcbiAgICAgICAgaGFzQm9yZGVyczogZmFsc2VcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB2YXIgd2lkdGggPSB0aGlzLndpZHRoO1xyXG4gICAgICB2YXIgaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XHJcblxyXG4gICAgICAvLyBVcGRhdGUgY2FudmFzIHNpemVcclxuICAgICAgY2FudmFzLnNldFdpZHRoKHdpZHRoKTtcclxuICAgICAgY2FudmFzLnNldEhlaWdodChoZWlnaHQpO1xyXG5cclxuICAgICAgLy8gQWRkIGltYWdlXHJcbiAgICAgIGltYWdlLnJlbW92ZSgpO1xyXG4gICAgICBjYW52YXMuYWRkKGltZ0luc3RhbmNlKTtcclxuXHJcbiAgICAgIG5leHQoaW1nSW5zdGFuY2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgdmlld3BvcnQgPSBEYXJrcm9vbS5VdGlscy5jb21wdXRlSW1hZ2VWaWV3UG9ydChpbWFnZSk7XHJcbiAgICB2YXIgaW1hZ2VXaWR0aCA9IHZpZXdwb3J0LndpZHRoO1xyXG4gICAgdmFyIGltYWdlSGVpZ2h0ID0gdmlld3BvcnQuaGVpZ2h0O1xyXG5cclxuICAgIHZhciBsZWZ0ID0gdGhpcy5vcHRpb25zLmxlZnQgKiBpbWFnZVdpZHRoO1xyXG4gICAgdmFyIHRvcCA9IHRoaXMub3B0aW9ucy50b3AgKiBpbWFnZUhlaWdodDtcclxuICAgIHZhciB3aWR0aCA9IE1hdGgubWluKHRoaXMub3B0aW9ucy53aWR0aCAqIGltYWdlV2lkdGgsIGltYWdlV2lkdGggLSBsZWZ0KTtcclxuICAgIHZhciBoZWlnaHQgPSBNYXRoLm1pbih0aGlzLm9wdGlvbnMuaGVpZ2h0ICogaW1hZ2VIZWlnaHQsIGltYWdlSGVpZ2h0IC0gdG9wKTtcclxuXHJcbiAgICBzbmFwc2hvdC5zcmMgPSBjYW52YXMudG9EYXRhVVJMKHtcclxuICAgICAgbGVmdDogbGVmdCxcclxuICAgICAgdG9wOiB0b3AsXHJcbiAgICAgIHdpZHRoOiB3aWR0aCxcclxuICAgICAgaGVpZ2h0OiBoZWlnaHQsXHJcbiAgICB9KTtcclxuICB9XHJcbn0pO1xyXG5cclxudmFyIENyb3Bab25lID0gZmFicmljLnV0aWwuY3JlYXRlQ2xhc3MoZmFicmljLlJlY3QsIHtcclxuICBfcmVuZGVyOiBmdW5jdGlvbihjdHgpIHtcclxuICAgIHRoaXMuY2FsbFN1cGVyKCdfcmVuZGVyJywgY3R4KTtcclxuXHJcbiAgICB2YXIgY2FudmFzID0gY3R4LmNhbnZhcztcclxuICAgIHZhciBkYXNoV2lkdGggPSA3O1xyXG5cclxuICAgIC8vIFNldCBvcmlnaW5hbCBzY2FsZVxyXG4gICAgdmFyIGZsaXBYID0gdGhpcy5mbGlwWCA/IC0xIDogMTtcclxuICAgIHZhciBmbGlwWSA9IHRoaXMuZmxpcFkgPyAtMSA6IDE7XHJcbiAgICB2YXIgc2NhbGVYID0gZmxpcFggLyB0aGlzLnNjYWxlWDtcclxuICAgIHZhciBzY2FsZVkgPSBmbGlwWSAvIHRoaXMuc2NhbGVZO1xyXG5cclxuICAgIGN0eC5zY2FsZShzY2FsZVgsIHNjYWxlWSk7XHJcblxyXG4gICAgLy8gT3ZlcmxheSByZW5kZXJpbmdcclxuICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgwLCAwLCAwLCAwLjUpJztcclxuICAgIHRoaXMuX3JlbmRlck92ZXJsYXkoY3R4KTtcclxuXHJcbiAgICAvLyBTZXQgZGFzaGVkIGJvcmRlcnNcclxuICAgIGlmIChjdHguc2V0TGluZURhc2ggIT09IHVuZGVmaW5lZClcclxuICAgICAgY3R4LnNldExpbmVEYXNoKFtkYXNoV2lkdGgsIGRhc2hXaWR0aF0pO1xyXG4gICAgZWxzZSBpZiAoY3R4Lm1vekRhc2ggIT09IHVuZGVmaW5lZClcclxuICAgICAgY3R4Lm1vekRhc2ggPSBbZGFzaFdpZHRoLCBkYXNoV2lkdGhdO1xyXG5cclxuICAgIC8vIEZpcnN0IGxpbmVzIHJlbmRlcmluZyB3aXRoIGJsYWNrXHJcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSAncmdiYSgwLCAwLCAwLCAwLjIpJztcclxuICAgIHRoaXMuX3JlbmRlckJvcmRlcnMoY3R4KTtcclxuICAgIHRoaXMuX3JlbmRlckdyaWQoY3R4KTtcclxuXHJcbiAgICAvLyBSZSByZW5kZXIgbGluZXMgaW4gd2hpdGVcclxuICAgIGN0eC5saW5lRGFzaE9mZnNldCA9IGRhc2hXaWR0aDtcclxuICAgIGN0eC5zdHJva2VTdHlsZSA9ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCknO1xyXG4gICAgdGhpcy5fcmVuZGVyQm9yZGVycyhjdHgpO1xyXG4gICAgdGhpcy5fcmVuZGVyR3JpZChjdHgpO1xyXG5cclxuICAgIC8vIFJlc2V0IHNjYWxlXHJcbiAgICBjdHguc2NhbGUoMS9zY2FsZVgsIDEvc2NhbGVZKTtcclxuICB9LFxyXG5cclxuICBfcmVuZGVyT3ZlcmxheTogZnVuY3Rpb24oY3R4KSB7XHJcbiAgICB2YXIgY2FudmFzID0gY3R4LmNhbnZhcztcclxuXHJcbiAgICAvL1xyXG4gICAgLy8gICAgeDAgICAgeDEgICAgICAgIHgyICAgICAgeDNcclxuICAgIC8vIHkwICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rXHJcbiAgICAvLyAgICB8XFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcfFxyXG4gICAgLy8gICAgfFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXHxcclxuICAgIC8vIHkxICstLS0tLS0rLS0tLS0tLS0tKy0tLS0tLS0rXHJcbiAgICAvLyAgICB8XFxcXFxcXFxcXFxcfCAgICAgICAgIHxcXFxcXFxcXFxcXFxcXHxcclxuICAgIC8vICAgIHxcXFxcXFxcXFxcXFx8ICAgIDAgICAgfFxcXFxcXFxcXFxcXFxcfFxyXG4gICAgLy8gICAgfFxcXFxcXFxcXFxcXHwgICAgICAgICB8XFxcXFxcXFxcXFxcXFx8XHJcbiAgICAvLyB5MiArLS0tLS0tKy0tLS0tLS0tLSstLS0tLS0tK1xyXG4gICAgLy8gICAgfFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXHxcclxuICAgIC8vICAgIHxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFx8XHJcbiAgICAvLyB5MyArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tK1xyXG4gICAgLy9cclxuXHJcbiAgICB2YXIgeDAgPSBNYXRoLmNlaWwoLXRoaXMuZ2V0V2lkdGgoKSAvIDIgLSB0aGlzLmdldExlZnQoKSk7XHJcbiAgICB2YXIgeDEgPSBNYXRoLmNlaWwoLXRoaXMuZ2V0V2lkdGgoKSAvIDIpO1xyXG4gICAgdmFyIHgyID0gTWF0aC5jZWlsKHRoaXMuZ2V0V2lkdGgoKSAvIDIpO1xyXG4gICAgdmFyIHgzID0gTWF0aC5jZWlsKHRoaXMuZ2V0V2lkdGgoKSAvIDIgKyAoY2FudmFzLndpZHRoIC0gdGhpcy5nZXRXaWR0aCgpIC0gdGhpcy5nZXRMZWZ0KCkpKTtcclxuXHJcbiAgICB2YXIgeTAgPSBNYXRoLmNlaWwoLXRoaXMuZ2V0SGVpZ2h0KCkgLyAyIC0gdGhpcy5nZXRUb3AoKSk7XHJcbiAgICB2YXIgeTEgPSBNYXRoLmNlaWwoLXRoaXMuZ2V0SGVpZ2h0KCkgLyAyKTtcclxuICAgIHZhciB5MiA9IE1hdGguY2VpbCh0aGlzLmdldEhlaWdodCgpIC8gMik7XHJcbiAgICB2YXIgeTMgPSBNYXRoLmNlaWwodGhpcy5nZXRIZWlnaHQoKSAvIDIgKyAoY2FudmFzLmhlaWdodCAtIHRoaXMuZ2V0SGVpZ2h0KCkgLSB0aGlzLmdldFRvcCgpKSk7XHJcblxyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgXHJcbiAgICAvLyBEcmF3IG91dGVyIHJlY3RhbmdsZS5cclxuICAgIC8vIE51bWJlcnMgYXJlICsvLTEgc28gdGhhdCBvdmVybGF5IGVkZ2VzIGRvbid0IGdldCBibHVycnkuXHJcbiAgICBjdHgubW92ZVRvKHgwIC0gMSwgeTAgLSAxKTtcclxuICAgIGN0eC5saW5lVG8oeDMgKyAxLCB5MCAtIDEpO1xyXG4gICAgY3R4LmxpbmVUbyh4MyArIDEsIHkzICsgMSk7XHJcbiAgICBjdHgubGluZVRvKHgwIC0gMSwgeTMgLSAxKTtcclxuICAgIGN0eC5saW5lVG8oeDAgLSAxLCB5MCAtIDEpO1xyXG4gICAgY3R4LmNsb3NlUGF0aCgpO1xyXG5cclxuICAgIC8vIERyYXcgaW5uZXIgcmVjdGFuZ2xlLlxyXG4gICAgY3R4Lm1vdmVUbyh4MSwgeTEpO1xyXG4gICAgY3R4LmxpbmVUbyh4MSwgeTIpO1xyXG4gICAgY3R4LmxpbmVUbyh4MiwgeTIpO1xyXG4gICAgY3R4LmxpbmVUbyh4MiwgeTEpO1xyXG4gICAgY3R4LmxpbmVUbyh4MSwgeTEpO1xyXG5cclxuICAgIGN0eC5jbG9zZVBhdGgoKTtcclxuICAgIGN0eC5maWxsKCk7XHJcbiAgfSxcclxuXHJcbiAgX3JlbmRlckJvcmRlcnM6IGZ1bmN0aW9uKGN0eCkge1xyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgY3R4Lm1vdmVUbygtdGhpcy5nZXRXaWR0aCgpLzIsIC10aGlzLmdldEhlaWdodCgpLzIpOyAvLyB1cHBlciBsZWZ0XHJcbiAgICBjdHgubGluZVRvKHRoaXMuZ2V0V2lkdGgoKS8yLCAtdGhpcy5nZXRIZWlnaHQoKS8yKTsgLy8gdXBwZXIgcmlnaHRcclxuICAgIGN0eC5saW5lVG8odGhpcy5nZXRXaWR0aCgpLzIsIHRoaXMuZ2V0SGVpZ2h0KCkvMik7IC8vIGRvd24gcmlnaHRcclxuICAgIGN0eC5saW5lVG8oLXRoaXMuZ2V0V2lkdGgoKS8yLCB0aGlzLmdldEhlaWdodCgpLzIpOyAvLyBkb3duIGxlZnRcclxuICAgIGN0eC5saW5lVG8oLXRoaXMuZ2V0V2lkdGgoKS8yLCAtdGhpcy5nZXRIZWlnaHQoKS8yKTsgLy8gdXBwZXIgbGVmdFxyXG4gICAgY3R4LnN0cm9rZSgpO1xyXG4gIH0sXHJcblxyXG4gIF9yZW5kZXJHcmlkOiBmdW5jdGlvbihjdHgpIHtcclxuICAgIC8vIFZlcnRpY2FsIGxpbmVzXHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHgubW92ZVRvKC10aGlzLmdldFdpZHRoKCkvMiArIDEvMyAqIHRoaXMuZ2V0V2lkdGgoKSwgLXRoaXMuZ2V0SGVpZ2h0KCkvMik7XHJcbiAgICBjdHgubGluZVRvKC10aGlzLmdldFdpZHRoKCkvMiArIDEvMyAqIHRoaXMuZ2V0V2lkdGgoKSwgdGhpcy5nZXRIZWlnaHQoKS8yKTtcclxuICAgIGN0eC5zdHJva2UoKTtcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5tb3ZlVG8oLXRoaXMuZ2V0V2lkdGgoKS8yICsgMi8zICogdGhpcy5nZXRXaWR0aCgpLCAtdGhpcy5nZXRIZWlnaHQoKS8yKTtcclxuICAgIGN0eC5saW5lVG8oLXRoaXMuZ2V0V2lkdGgoKS8yICsgMi8zICogdGhpcy5nZXRXaWR0aCgpLCB0aGlzLmdldEhlaWdodCgpLzIpO1xyXG4gICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgLy8gSG9yaXpvbnRhbCBsaW5lc1xyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgY3R4Lm1vdmVUbygtdGhpcy5nZXRXaWR0aCgpLzIsIC10aGlzLmdldEhlaWdodCgpLzIgKyAxLzMgKiB0aGlzLmdldEhlaWdodCgpKTtcclxuICAgIGN0eC5saW5lVG8odGhpcy5nZXRXaWR0aCgpLzIsIC10aGlzLmdldEhlaWdodCgpLzIgKyAxLzMgKiB0aGlzLmdldEhlaWdodCgpKTtcclxuICAgIGN0eC5zdHJva2UoKTtcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5tb3ZlVG8oLXRoaXMuZ2V0V2lkdGgoKS8yLCAtdGhpcy5nZXRIZWlnaHQoKS8yICsgMi8zICogdGhpcy5nZXRIZWlnaHQoKSk7XHJcbiAgICBjdHgubGluZVRvKHRoaXMuZ2V0V2lkdGgoKS8yLCAtdGhpcy5nZXRIZWlnaHQoKS8yICsgMi8zICogdGhpcy5nZXRIZWlnaHQoKSk7XHJcbiAgICBjdHguc3Ryb2tlKCk7XHJcbiAgfVxyXG59KTtcclxuXHJcbkRhcmtyb29tLnBsdWdpbnNbJ2Nyb3AnXSA9IERhcmtyb29tLlBsdWdpbi5leHRlbmQoe1xyXG4gIC8vIEluaXQgcG9pbnRcclxuICBzdGFydFg6IG51bGwsXHJcbiAgc3RhcnRZOiBudWxsLFxyXG5cclxuICAvLyBLZXljcm9wXHJcbiAgaXNLZXlDcm9waW5nOiBmYWxzZSxcclxuICBpc0tleUxlZnQ6IGZhbHNlLFxyXG4gIGlzS2V5VXA6IGZhbHNlLFxyXG5cclxuICBkZWZhdWx0czoge1xyXG4gICAgLy8gbWluIGNyb3AgZGltZW5zaW9uXHJcbiAgICBtaW5IZWlnaHQ6IDEsXHJcbiAgICBtaW5XaWR0aDogMSxcclxuICAgIC8vIGVuc3VyZSBjcm9wIHJhdGlvXHJcbiAgICByYXRpbzogbnVsbCxcclxuICAgIC8vIHF1aWNrIGNyb3AgZmVhdHVyZSAoc2V0IGEga2V5IGNvZGUgdG8gZW5hYmxlIGl0KVxyXG4gICAgcXVpY2tDcm9wS2V5OiBmYWxzZVxyXG4gIH0sXHJcblxyXG4gIGluaXRpYWxpemU6IGZ1bmN0aW9uIEluaXREYXJrcm9vbUNyb3BQbHVnaW4oKSB7XHJcbiAgICB2YXIgYnV0dG9uR3JvdXAgPSB0aGlzLmRhcmtyb29tLnRvb2xiYXIuY3JlYXRlQnV0dG9uR3JvdXAoKTtcclxuXHJcbiAgICB0aGlzLmNyb3BCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xyXG4gICAgICBpbWFnZTogJ2Nyb3AnXHJcbiAgICB9KTtcclxuICAgIHRoaXMub2tCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xyXG4gICAgICBpbWFnZTogJ2RvbmUnLFxyXG4gICAgICB0eXBlOiAnc3VjY2VzcycsXHJcbiAgICAgIGhpZGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgdGhpcy5jYW5jZWxCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xyXG4gICAgICBpbWFnZTogJ2Nsb3NlJyxcclxuICAgICAgdHlwZTogJ2RhbmdlcicsXHJcbiAgICAgIGhpZGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEJ1dHRvbnMgY2xpY2tcclxuICAgIHRoaXMuY3JvcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudG9nZ2xlQ3JvcC5iaW5kKHRoaXMpKTtcclxuICAgIHRoaXMub2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNyb3BDdXJyZW50Wm9uZS5iaW5kKHRoaXMpKTtcclxuICAgIHRoaXMuY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yZWxlYXNlRm9jdXMuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgLy8gQ2FudmFzIGV2ZW50c1xyXG4gICAgdGhpcy5kYXJrcm9vbS5jYW52YXMub24oJ21vdXNlOmRvd24nLCB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcykpO1xyXG4gICAgdGhpcy5kYXJrcm9vbS5jYW52YXMub24oJ21vdXNlOm1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcykpO1xyXG4gICAgdGhpcy5kYXJrcm9vbS5jYW52YXMub24oJ21vdXNlOnVwJywgdGhpcy5vbk1vdXNlVXAuYmluZCh0aGlzKSk7XHJcbiAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbignb2JqZWN0Om1vdmluZycsIHRoaXMub25PYmplY3RNb3ZpbmcuYmluZCh0aGlzKSk7XHJcbiAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbignb2JqZWN0OnNjYWxpbmcnLCB0aGlzLm9uT2JqZWN0U2NhbGluZy5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICBmYWJyaWMudXRpbC5hZGRMaXN0ZW5lcihmYWJyaWMuZG9jdW1lbnQsICdrZXlkb3duJywgdGhpcy5vbktleURvd24uYmluZCh0aGlzKSk7XHJcbiAgICBmYWJyaWMudXRpbC5hZGRMaXN0ZW5lcihmYWJyaWMuZG9jdW1lbnQsICdrZXl1cCcsIHRoaXMub25LZXlVcC5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICB0aGlzLmRhcmtyb29tLmFkZEV2ZW50TGlzdGVuZXIoJ2NvcmU6dHJhbnNmb3JtYXRpb24nLCB0aGlzLnJlbGVhc2VGb2N1cy5iaW5kKHRoaXMpKTtcclxuICB9LFxyXG5cclxuICBjbGVhcjogZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAodGhpcy5oYXNGb2N1cygpKVxyXG4gICAgdGhpcy5yZWxlYXNlRm9jdXMoKTtcclxuICB9LFxyXG4gIC8vIEF2b2lkIGNyb3Agem9uZSB0byBnbyBiZXlvbmQgdGhlIGNhbnZhcyBlZGdlc1xyXG4gIG9uT2JqZWN0TW92aW5nOiBmdW5jdGlvbihldmVudCkge1xyXG4gICAgaWYgKCF0aGlzLmhhc0ZvY3VzKCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBjdXJyZW50T2JqZWN0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgaWYgKGN1cnJlbnRPYmplY3QgIT09IHRoaXMuY3JvcFpvbmUpXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XHJcbiAgICB2YXIgeCA9IGN1cnJlbnRPYmplY3QuZ2V0TGVmdCgpLCB5ID0gY3VycmVudE9iamVjdC5nZXRUb3AoKTtcclxuICAgIHZhciB3ID0gY3VycmVudE9iamVjdC5nZXRXaWR0aCgpLCBoID0gY3VycmVudE9iamVjdC5nZXRIZWlnaHQoKTtcclxuICAgIHZhciBtYXhYID0gY2FudmFzLmdldFdpZHRoKCkgLSB3O1xyXG4gICAgdmFyIG1heFkgPSBjYW52YXMuZ2V0SGVpZ2h0KCkgLSBoO1xyXG5cclxuICAgIGlmICh4IDwgMClcclxuICAgICAgY3VycmVudE9iamVjdC5zZXQoJ2xlZnQnLCAwKTtcclxuICAgIGlmICh5IDwgMClcclxuICAgICAgY3VycmVudE9iamVjdC5zZXQoJ3RvcCcsIDApO1xyXG4gICAgaWYgKHggPiBtYXhYKVxyXG4gICAgICBjdXJyZW50T2JqZWN0LnNldCgnbGVmdCcsIG1heFgpO1xyXG4gICAgaWYgKHkgPiBtYXhZKVxyXG4gICAgICBjdXJyZW50T2JqZWN0LnNldCgndG9wJywgbWF4WSk7XHJcblxyXG4gICAgdGhpcy5kYXJrcm9vbS5kaXNwYXRjaEV2ZW50KCdjcm9wOnVwZGF0ZScpO1xyXG4gIH0sXHJcblxyXG4gIC8vIFByZXZlbnQgY3JvcCB6b25lIGZyb20gZ29pbmcgYmV5b25kIHRoZSBjYW52YXMgZWRnZXMgKGxpa2UgbW91c2VNb3ZlKVxyXG4gIG9uT2JqZWN0U2NhbGluZzogZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGlmICghdGhpcy5oYXNGb2N1cygpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgcHJldmVudFNjYWxpbmcgPSBmYWxzZTtcclxuICAgIHZhciBjdXJyZW50T2JqZWN0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgaWYgKGN1cnJlbnRPYmplY3QgIT09IHRoaXMuY3JvcFpvbmUpXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XHJcbiAgICB2YXIgcG9pbnRlciA9IGNhbnZhcy5nZXRQb2ludGVyKGV2ZW50LmUpO1xyXG4gICAgdmFyIHggPSBwb2ludGVyLng7XHJcbiAgICB2YXIgeSA9IHBvaW50ZXIueTtcclxuXHJcbiAgICB2YXIgbWluWCA9IGN1cnJlbnRPYmplY3QuZ2V0TGVmdCgpO1xyXG4gICAgdmFyIG1pblkgPSBjdXJyZW50T2JqZWN0LmdldFRvcCgpO1xyXG4gICAgdmFyIG1heFggPSBjdXJyZW50T2JqZWN0LmdldExlZnQoKSArIGN1cnJlbnRPYmplY3QuZ2V0V2lkdGgoKTtcclxuICAgIHZhciBtYXhZID0gY3VycmVudE9iamVjdC5nZXRUb3AoKSArIGN1cnJlbnRPYmplY3QuZ2V0SGVpZ2h0KCk7XHJcblxyXG4gICAgaWYgKG51bGwgIT09IHRoaXMub3B0aW9ucy5yYXRpbykge1xyXG4gICAgICBpZiAobWluWCA8IDAgfHwgbWF4WCA+IGNhbnZhcy5nZXRXaWR0aCgpIHx8IG1pblkgPCAwIHx8IG1heFkgPiBjYW52YXMuZ2V0SGVpZ2h0KCkpIHtcclxuICAgICAgICBwcmV2ZW50U2NhbGluZyA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAobWluWCA8IDAgfHwgbWF4WCA+IGNhbnZhcy5nZXRXaWR0aCgpIHx8IHByZXZlbnRTY2FsaW5nKSB7XHJcbiAgICAgIHZhciBsYXN0U2NhbGVYID0gdGhpcy5sYXN0U2NhbGVYIHx8IDE7XHJcbiAgICAgIGN1cnJlbnRPYmplY3Quc2V0U2NhbGVYKGxhc3RTY2FsZVgpO1xyXG4gICAgfVxyXG4gICAgaWYgKG1pblggPCAwKSB7XHJcbiAgICAgIGN1cnJlbnRPYmplY3Quc2V0TGVmdCgwKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobWluWSA8IDAgfHwgbWF4WSA+IGNhbnZhcy5nZXRIZWlnaHQoKSB8fCBwcmV2ZW50U2NhbGluZykge1xyXG4gICAgICB2YXIgbGFzdFNjYWxlWSA9IHRoaXMubGFzdFNjYWxlWSB8fCAxO1xyXG4gICAgICBjdXJyZW50T2JqZWN0LnNldFNjYWxlWShsYXN0U2NhbGVZKTtcclxuICAgIH1cclxuICAgIGlmIChtaW5ZIDwgMCkge1xyXG4gICAgICBjdXJyZW50T2JqZWN0LnNldFRvcCgwKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY3VycmVudE9iamVjdC5nZXRXaWR0aCgpIDwgdGhpcy5vcHRpb25zLm1pbldpZHRoKSB7XHJcbiAgICAgIGN1cnJlbnRPYmplY3Quc2NhbGVUb1dpZHRoKHRoaXMub3B0aW9ucy5taW5XaWR0aCk7XHJcbiAgICB9XHJcbiAgICBpZiAoY3VycmVudE9iamVjdC5nZXRIZWlnaHQoKSA8IHRoaXMub3B0aW9ucy5taW5IZWlnaHQpIHtcclxuICAgICAgY3VycmVudE9iamVjdC5zY2FsZVRvSGVpZ2h0KHRoaXMub3B0aW9ucy5taW5IZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubGFzdFNjYWxlWCA9IGN1cnJlbnRPYmplY3QuZ2V0U2NhbGVYKCk7XHJcbiAgICB0aGlzLmxhc3RTY2FsZVkgPSBjdXJyZW50T2JqZWN0LmdldFNjYWxlWSgpO1xyXG5cclxuICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudCgnY3JvcDp1cGRhdGUnKTtcclxuICB9LFxyXG5cclxuICAvLyBJbml0IGNyb3Agem9uZVxyXG4gIG9uTW91c2VEb3duOiBmdW5jdGlvbihldmVudCkge1xyXG4gICAgaWYgKCF0aGlzLmhhc0ZvY3VzKCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcclxuXHJcbiAgICAvLyByZWNhbGN1bGF0ZSBvZmZzZXQsIGluIGNhc2UgY2FudmFzIHdhcyBtYW5pcHVsYXRlZCBzaW5jZSBsYXN0IGBjYWxjT2Zmc2V0YFxyXG4gICAgY2FudmFzLmNhbGNPZmZzZXQoKTtcclxuICAgIHZhciBwb2ludGVyID0gY2FudmFzLmdldFBvaW50ZXIoZXZlbnQuZSk7XHJcbiAgICB2YXIgeCA9IHBvaW50ZXIueDtcclxuICAgIHZhciB5ID0gcG9pbnRlci55O1xyXG4gICAgdmFyIHBvaW50ID0gbmV3IGZhYnJpYy5Qb2ludCh4LCB5KTtcclxuXHJcbiAgICAvLyBDaGVjayBpZiB1c2VyIHdhbnQgdG8gc2NhbGUgb3IgZHJhZyB0aGUgY3JvcCB6b25lLlxyXG4gICAgdmFyIGFjdGl2ZU9iamVjdCA9IGNhbnZhcy5nZXRBY3RpdmVPYmplY3QoKTtcclxuICAgIGlmIChhY3RpdmVPYmplY3QgPT09IHRoaXMuY3JvcFpvbmUgfHwgdGhpcy5jcm9wWm9uZS5jb250YWluc1BvaW50KHBvaW50KSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY2FudmFzLmRpc2NhcmRBY3RpdmVPYmplY3QoKTtcclxuICAgIHRoaXMuY3JvcFpvbmUuc2V0V2lkdGgoMCk7XHJcbiAgICB0aGlzLmNyb3Bab25lLnNldEhlaWdodCgwKTtcclxuICAgIHRoaXMuY3JvcFpvbmUuc2V0U2NhbGVYKDEpO1xyXG4gICAgdGhpcy5jcm9wWm9uZS5zZXRTY2FsZVkoMSk7XHJcblxyXG4gICAgdGhpcy5zdGFydFggPSB4O1xyXG4gICAgdGhpcy5zdGFydFkgPSB5O1xyXG4gIH0sXHJcblxyXG4gIC8vIEV4dGVuZCBjcm9wIHpvbmVcclxuICBvbk1vdXNlTW92ZTogZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIC8vIFF1aWNrIGNyb3AgZmVhdHVyZVxyXG4gICAgaWYgKHRoaXMuaXNLZXlDcm9waW5nKVxyXG4gICAgICByZXR1cm4gdGhpcy5vbk1vdXNlTW92ZUtleUNyb3AoZXZlbnQpO1xyXG5cclxuICAgIGlmIChudWxsID09PSB0aGlzLnN0YXJ0WCB8fCBudWxsID09PSB0aGlzLnN0YXJ0WSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xyXG4gICAgdmFyIHBvaW50ZXIgPSBjYW52YXMuZ2V0UG9pbnRlcihldmVudC5lKTtcclxuICAgIHZhciB4ID0gcG9pbnRlci54O1xyXG4gICAgdmFyIHkgPSBwb2ludGVyLnk7XHJcblxyXG4gICAgdGhpcy5fcmVuZGVyQ3JvcFpvbmUodGhpcy5zdGFydFgsIHRoaXMuc3RhcnRZLCB4LCB5KTtcclxuICB9LFxyXG5cclxuICBvbk1vdXNlTW92ZUtleUNyb3A6IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XHJcbiAgICB2YXIgem9uZSA9IHRoaXMuY3JvcFpvbmU7XHJcblxyXG4gICAgdmFyIHBvaW50ZXIgPSBjYW52YXMuZ2V0UG9pbnRlcihldmVudC5lKTtcclxuICAgIHZhciB4ID0gcG9pbnRlci54O1xyXG4gICAgdmFyIHkgPSBwb2ludGVyLnk7XHJcblxyXG4gICAgaWYgKCF6b25lLmxlZnQgfHwgIXpvbmUudG9wKSB7XHJcbiAgICAgIHpvbmUuc2V0VG9wKHkpO1xyXG4gICAgICB6b25lLnNldExlZnQoeCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pc0tleUxlZnQgPSAgeCA8IHpvbmUubGVmdCArIHpvbmUud2lkdGggLyAyIDtcclxuICAgIHRoaXMuaXNLZXlVcCA9IHkgPCB6b25lLnRvcCArIHpvbmUuaGVpZ2h0IC8gMiA7XHJcblxyXG4gICAgdGhpcy5fcmVuZGVyQ3JvcFpvbmUoXHJcbiAgICAgIE1hdGgubWluKHpvbmUubGVmdCwgeCksXHJcbiAgICAgIE1hdGgubWluKHpvbmUudG9wLCB5KSxcclxuICAgICAgTWF0aC5tYXgoem9uZS5sZWZ0K3pvbmUud2lkdGgsIHgpLFxyXG4gICAgICBNYXRoLm1heCh6b25lLnRvcCt6b25lLmhlaWdodCwgeSlcclxuICAgICk7XHJcbiAgfSxcclxuXHJcbiAgLy8gRmluaXNoIGNyb3Agem9uZVxyXG4gIG9uTW91c2VVcDogZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGlmIChudWxsID09PSB0aGlzLnN0YXJ0WCB8fCBudWxsID09PSB0aGlzLnN0YXJ0WSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xyXG4gICAgdGhpcy5jcm9wWm9uZS5zZXRDb29yZHMoKTtcclxuICAgIGNhbnZhcy5zZXRBY3RpdmVPYmplY3QodGhpcy5jcm9wWm9uZSk7XHJcbiAgICBjYW52YXMuY2FsY09mZnNldCgpO1xyXG5cclxuICAgIHRoaXMuc3RhcnRYID0gbnVsbDtcclxuICAgIHRoaXMuc3RhcnRZID0gbnVsbDtcclxuICB9LFxyXG5cclxuICBvbktleURvd246IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBpZiAoZmFsc2UgPT09IHRoaXMub3B0aW9ucy5xdWlja0Nyb3BLZXkgfHwgZXZlbnQua2V5Q29kZSAhPT0gdGhpcy5vcHRpb25zLnF1aWNrQ3JvcEtleSB8fCB0aGlzLmlzS2V5Q3JvcGluZylcclxuICAgICAgcmV0dXJuO1xyXG5cclxuICAgIC8vIEFjdGl2ZSBxdWljayBjcm9wIGZsb3dcclxuICAgIHRoaXMuaXNLZXlDcm9waW5nID0gdHJ1ZSA7XHJcbiAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5kaXNjYXJkQWN0aXZlT2JqZWN0KCk7XHJcbiAgICB0aGlzLmNyb3Bab25lLnNldFdpZHRoKDApO1xyXG4gICAgdGhpcy5jcm9wWm9uZS5zZXRIZWlnaHQoMCk7XHJcbiAgICB0aGlzLmNyb3Bab25lLnNldFNjYWxlWCgxKTtcclxuICAgIHRoaXMuY3JvcFpvbmUuc2V0U2NhbGVZKDEpO1xyXG4gICAgdGhpcy5jcm9wWm9uZS5zZXRUb3AoMCk7XHJcbiAgICB0aGlzLmNyb3Bab25lLnNldExlZnQoMCk7XHJcbiAgfSxcclxuXHJcbiAgb25LZXlVcDogZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGlmIChmYWxzZSA9PT0gdGhpcy5vcHRpb25zLnF1aWNrQ3JvcEtleSB8fCBldmVudC5rZXlDb2RlICE9PSB0aGlzLm9wdGlvbnMucXVpY2tDcm9wS2V5IHx8ICF0aGlzLmlzS2V5Q3JvcGluZylcclxuICAgICAgcmV0dXJuO1xyXG5cclxuICAgIC8vIFVuYWN0aXZlIHF1aWNrIGNyb3AgZmxvd1xyXG4gICAgdGhpcy5pc0tleUNyb3BpbmcgPSBmYWxzZTtcclxuICAgIHRoaXMuc3RhcnRYID0gMTtcclxuICAgIHRoaXMuc3RhcnRZID0gMTtcclxuICAgIHRoaXMub25Nb3VzZVVwKCk7XHJcbiAgfSxcclxuXHJcbiAgc2VsZWN0Wm9uZTogZnVuY3Rpb24oeCwgeSwgd2lkdGgsIGhlaWdodCwgZm9yY2VEaW1lbnNpb24pIHtcclxuICAgIGlmICghdGhpcy5oYXNGb2N1cygpKVxyXG4gICAgICB0aGlzLnJlcXVpcmVGb2N1cygpO1xyXG5cclxuICAgIGlmICghZm9yY2VEaW1lbnNpb24pIHtcclxuICAgICAgdGhpcy5fcmVuZGVyQ3JvcFpvbmUoeCwgeSwgeCt3aWR0aCwgeStoZWlnaHQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jcm9wWm9uZS5zZXQoe1xyXG4gICAgICAgICdsZWZ0JzogeCxcclxuICAgICAgICAndG9wJzogeSxcclxuICAgICAgICAnd2lkdGgnOiB3aWR0aCxcclxuICAgICAgICAnaGVpZ2h0JzogaGVpZ2h0XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcclxuICAgIGNhbnZhcy5icmluZ1RvRnJvbnQodGhpcy5jcm9wWm9uZSk7XHJcbiAgICB0aGlzLmNyb3Bab25lLnNldENvb3JkcygpO1xyXG4gICAgY2FudmFzLnNldEFjdGl2ZU9iamVjdCh0aGlzLmNyb3Bab25lKTtcclxuICAgIGNhbnZhcy5jYWxjT2Zmc2V0KCk7XHJcblxyXG4gICAgdGhpcy5kYXJrcm9vbS5kaXNwYXRjaEV2ZW50KCdjcm9wOnVwZGF0ZScpO1xyXG4gIH0sXHJcblxyXG4gIHRvZ2dsZUNyb3A6IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKCF0aGlzLmhhc0ZvY3VzKCkpXHJcbiAgICAgIHRoaXMucmVxdWlyZUZvY3VzKCk7XHJcbiAgICBlbHNlXHJcbiAgICAgIHRoaXMucmVsZWFzZUZvY3VzKCk7XHJcbiAgfSxcclxuXHJcbiAgY3JvcEN1cnJlbnRab25lOiBmdW5jdGlvbigpIHtcclxuICAgIGlmICghdGhpcy5oYXNGb2N1cygpKVxyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgLy8gQXZvaWQgY3JvcGluZyBlbXB0eSB6b25lXHJcbiAgICBpZiAodGhpcy5jcm9wWm9uZS53aWR0aCA8IDEgJiYgdGhpcy5jcm9wWm9uZS5oZWlnaHQgPCAxKVxyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgdmFyIGltYWdlID0gdGhpcy5kYXJrcm9vbS5pbWFnZTtcclxuXHJcbiAgICAvLyBDb21wdXRlIGNyb3Agem9uZSBkaW1lbnNpb25zXHJcbiAgICB2YXIgdG9wID0gdGhpcy5jcm9wWm9uZS5nZXRUb3AoKSAtIGltYWdlLmdldFRvcCgpO1xyXG4gICAgdmFyIGxlZnQgPSB0aGlzLmNyb3Bab25lLmdldExlZnQoKSAtIGltYWdlLmdldExlZnQoKTtcclxuICAgIHZhciB3aWR0aCA9IHRoaXMuY3JvcFpvbmUuZ2V0V2lkdGgoKTtcclxuICAgIHZhciBoZWlnaHQgPSB0aGlzLmNyb3Bab25lLmdldEhlaWdodCgpO1xyXG5cclxuICAgIC8vIEFkanVzdCBkaW1lbnNpb25zIHRvIGltYWdlIG9ubHlcclxuICAgIGlmICh0b3AgPCAwKSB7XHJcbiAgICAgIGhlaWdodCArPSB0b3A7XHJcbiAgICAgIHRvcCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGxlZnQgPCAwKSB7XHJcbiAgICAgIHdpZHRoICs9IGxlZnQ7XHJcbiAgICAgIGxlZnQgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZGFya3Jvb20ub3B0aW9ucy50b3AgPSAwO1xyXG4gICAgdGhpcy5kYXJrcm9vbS5vcHRpb25zLmxlZnQgPSAwO1xyXG4gICAgdGhpcy5kYXJrcm9vbS5jYW52YXMuc2V0Wm9vbSgxKTtcclxuICAgIHRoaXMuZGFya3Jvb20ucGx1Z2lucy56b29tLnVwZGF0ZUJ1dHRvbnMoKTtcclxuICAgIC8vIEFwcGx5IGNyb3AgdHJhbnNmb3JtYXRpb24uXHJcbiAgICAvLyBNYWtlIHN1cmUgdG8gdXNlIHJlbGF0aXZlIGRpbWVuc2lvbiBzaW5jZSB0aGUgY3JvcCB3aWxsIGJlIGFwcGxpZWRcclxuICAgIC8vIG9uIHRoZSBzb3VyY2UgaW1hZ2UuXHJcbiAgICB0aGlzLmRhcmtyb29tLmFwcGx5VHJhbnNmb3JtYXRpb24obmV3IENyb3Aoe1xyXG4gICAgICB0b3A6IHRvcCAvIGltYWdlLmdldEhlaWdodCgpLFxyXG4gICAgICBsZWZ0OiBsZWZ0IC8gaW1hZ2UuZ2V0V2lkdGgoKSxcclxuICAgICAgd2lkdGg6IHdpZHRoIC8gaW1hZ2UuZ2V0V2lkdGgoKSxcclxuICAgICAgaGVpZ2h0OiBoZWlnaHQgLyBpbWFnZS5nZXRIZWlnaHQoKSxcclxuICAgIH0pKTtcclxuICB9LFxyXG5cclxuICAvLyBUZXN0IHdldGhlciBjcm9wIHpvbmUgaXMgc2V0XHJcbiAgaGFzRm9jdXM6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY3JvcFpvbmUgIT09IHVuZGVmaW5lZDtcclxuICB9LFxyXG5cclxuICAvLyBDcmVhdGUgdGhlIGNyb3Agem9uZVxyXG4gIHJlcXVpcmVGb2N1czogZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLmRhcmtyb29tLmNsZWFyRm9jdXMoJ2Nyb3AnKTtcclxuICAgIHRoaXMuY3JvcFpvbmUgPSBuZXcgQ3JvcFpvbmUoe1xyXG4gICAgICBmaWxsOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICBoYXNCb3JkZXJzOiBmYWxzZSxcclxuICAgICAgb3JpZ2luWDogJ2xlZnQnLFxyXG4gICAgICBvcmlnaW5ZOiAndG9wJyxcclxuICAgICAgLy9zdHJva2U6ICcjNDQ0JyxcclxuICAgICAgLy9zdHJva2VEYXNoQXJyYXk6IFs1LCA1XSxcclxuICAgICAgLy9ib3JkZXJDb2xvcjogJyM0NDQnLFxyXG4gICAgICBjb3JuZXJDb2xvcjogJyM0NDQnLFxyXG4gICAgICBjb3JuZXJTaXplOiA4LFxyXG4gICAgICB0cmFuc3BhcmVudENvcm5lcnM6IGZhbHNlLFxyXG4gICAgICBsb2NrUm90YXRpb246IHRydWUsXHJcbiAgICAgIGhhc1JvdGF0aW5nUG9pbnQ6IGZhbHNlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKG51bGwgIT09IHRoaXMub3B0aW9ucy5yYXRpbykge1xyXG4gICAgICB0aGlzLmNyb3Bab25lLnNldCgnbG9ja1VuaVNjYWxpbmcnLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5hZGQodGhpcy5jcm9wWm9uZSk7XHJcbiAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5kZWZhdWx0Q3Vyc29yID0gJ2Nyb3NzaGFpcic7XHJcblxyXG4gICAgdGhpcy5jcm9wQnV0dG9uLmFjdGl2ZSh0cnVlKTtcclxuICAgIHRoaXMub2tCdXR0b24uaGlkZShmYWxzZSk7XHJcbiAgICB0aGlzLmNhbmNlbEJ1dHRvbi5oaWRlKGZhbHNlKTtcclxuICB9LFxyXG5cclxuICAvLyBSZW1vdmUgdGhlIGNyb3Agem9uZVxyXG4gIHJlbGVhc2VGb2N1czogZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAodW5kZWZpbmVkID09PSB0aGlzLmNyb3Bab25lKVxyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgdGhpcy5jcm9wWm9uZS5yZW1vdmUoKTtcclxuICAgIHRoaXMuY3JvcFpvbmUgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgdGhpcy5jcm9wQnV0dG9uLmFjdGl2ZShmYWxzZSk7XHJcbiAgICB0aGlzLm9rQnV0dG9uLmhpZGUodHJ1ZSk7XHJcbiAgICB0aGlzLmNhbmNlbEJ1dHRvbi5oaWRlKHRydWUpO1xyXG5cclxuICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLmRlZmF1bHRDdXJzb3IgPSAnZGVmYXVsdCc7XHJcblxyXG4gICAgdGhpcy5kYXJrcm9vbS5kaXNwYXRjaEV2ZW50KCdjcm9wOnVwZGF0ZScpO1xyXG4gIH0sXHJcblxyXG4gIF9yZW5kZXJDcm9wWm9uZTogZnVuY3Rpb24oZnJvbVgsIGZyb21ZLCB0b1gsIHRvWSkge1xyXG4gICAgdmFyIGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xyXG5cclxuICAgIHZhciBpc1JpZ2h0ID0gKHRvWCA+IGZyb21YKTtcclxuICAgIHZhciBpc0xlZnQgPSAhaXNSaWdodDtcclxuICAgIHZhciBpc0Rvd24gPSAodG9ZID4gZnJvbVkpO1xyXG4gICAgdmFyIGlzVXAgPSAhaXNEb3duO1xyXG5cclxuICAgIHZhciBtaW5XaWR0aCA9IE1hdGgubWluKCt0aGlzLm9wdGlvbnMubWluV2lkdGgsIGNhbnZhcy5nZXRXaWR0aCgpKTtcclxuICAgIHZhciBtaW5IZWlnaHQgPSBNYXRoLm1pbigrdGhpcy5vcHRpb25zLm1pbkhlaWdodCwgY2FudmFzLmdldEhlaWdodCgpKTtcclxuXHJcbiAgICAvLyBEZWZpbmUgY29ybmVyIGNvb3JkaW5hdGVzXHJcbiAgICB2YXIgbGVmdFggPSBNYXRoLm1pbihmcm9tWCwgdG9YKTtcclxuICAgIHZhciByaWdodFggPSBNYXRoLm1heChmcm9tWCwgdG9YKTtcclxuICAgIHZhciB0b3BZID0gTWF0aC5taW4oZnJvbVksIHRvWSk7XHJcbiAgICB2YXIgYm90dG9tWSA9IE1hdGgubWF4KGZyb21ZLCB0b1kpO1xyXG5cclxuICAgIC8vIFJlcGxhY2UgY3VycmVudCBwb2ludCBpbnRvIHRoZSBjYW52YXNcclxuICAgIGxlZnRYID0gTWF0aC5tYXgoMCwgbGVmdFgpO1xyXG4gICAgcmlnaHRYID0gTWF0aC5taW4oY2FudmFzLmdldFdpZHRoKCksIHJpZ2h0WCk7XHJcbiAgICB0b3BZID0gTWF0aC5tYXgoMCwgdG9wWSlcclxuICAgIGJvdHRvbVkgPSBNYXRoLm1pbihjYW52YXMuZ2V0SGVpZ2h0KCksIGJvdHRvbVkpO1xyXG5cclxuICAgIC8vIFJlY2FsaWJyYXRlIGNvb3JkaW5hdGVzIGFjY29yZGluZyB0byBnaXZlbiBvcHRpb25zXHJcbiAgICBpZiAocmlnaHRYIC0gbGVmdFggPCBtaW5XaWR0aCkge1xyXG4gICAgICBpZiAoaXNSaWdodClcclxuICAgICAgICByaWdodFggPSBsZWZ0WCArIG1pbldpZHRoO1xyXG4gICAgICBlbHNlXHJcbiAgICAgICAgbGVmdFggPSByaWdodFggLSBtaW5XaWR0aDtcclxuICAgIH1cclxuICAgIGlmIChib3R0b21ZIC0gdG9wWSA8IG1pbkhlaWdodCkge1xyXG4gICAgICBpZiAoaXNEb3duKVxyXG4gICAgICAgIGJvdHRvbVkgPSB0b3BZICsgbWluSGVpZ2h0O1xyXG4gICAgICBlbHNlXHJcbiAgICAgICAgdG9wWSA9IGJvdHRvbVkgLSBtaW5IZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVHJ1bmNhdGUgdHJ1bmNhdGUgYWNjb3JkaW5nIHRvIGNhbnZhcyBkaW1lbnNpb25zXHJcbiAgICBpZiAobGVmdFggPCAwKSB7XHJcbiAgICAgIC8vIFRyYW5zbGF0ZSB0byB0aGUgbGVmdFxyXG4gICAgICByaWdodFggKz0gTWF0aC5hYnMobGVmdFgpO1xyXG4gICAgICBsZWZ0WCA9IDBcclxuICAgIH1cclxuICAgIGlmIChyaWdodFggPiBjYW52YXMuZ2V0V2lkdGgoKSkge1xyXG4gICAgICAvLyBUcmFuc2xhdGUgdG8gdGhlIHJpZ2h0XHJcbiAgICAgIGxlZnRYIC09IChyaWdodFggLSBjYW52YXMuZ2V0V2lkdGgoKSk7XHJcbiAgICAgIHJpZ2h0WCA9IGNhbnZhcy5nZXRXaWR0aCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRvcFkgPCAwKSB7XHJcbiAgICAgIC8vIFRyYW5zbGF0ZSB0byB0aGUgYm90dG9tXHJcbiAgICAgIGJvdHRvbVkgKz0gTWF0aC5hYnModG9wWSk7XHJcbiAgICAgIHRvcFkgPSAwXHJcbiAgICB9XHJcbiAgICBpZiAoYm90dG9tWSA+IGNhbnZhcy5nZXRIZWlnaHQoKSkge1xyXG4gICAgICAvLyBUcmFuc2xhdGUgdG8gdGhlIHJpZ2h0XHJcbiAgICAgIHRvcFkgLT0gKGJvdHRvbVkgLSBjYW52YXMuZ2V0SGVpZ2h0KCkpO1xyXG4gICAgICBib3R0b21ZID0gY2FudmFzLmdldEhlaWdodCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciB3aWR0aCA9IHJpZ2h0WCAtIGxlZnRYO1xyXG4gICAgdmFyIGhlaWdodCA9IGJvdHRvbVkgLSB0b3BZO1xyXG4gICAgdmFyIGN1cnJlbnRSYXRpbyA9IHdpZHRoIC8gaGVpZ2h0O1xyXG5cclxuICAgIGlmICh0aGlzLm9wdGlvbnMucmF0aW8gJiYgK3RoaXMub3B0aW9ucy5yYXRpbyAhPT0gY3VycmVudFJhdGlvKSB7XHJcbiAgICAgIHZhciByYXRpbyA9ICt0aGlzLm9wdGlvbnMucmF0aW87XHJcblxyXG4gICAgICBpZih0aGlzLmlzS2V5Q3JvcGluZykge1xyXG4gICAgICAgIGlzTGVmdCA9IHRoaXMuaXNLZXlMZWZ0O1xyXG4gICAgICAgIGlzVXAgPSB0aGlzLmlzS2V5VXA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChjdXJyZW50UmF0aW8gPCByYXRpbykge1xyXG4gICAgICAgIHZhciBuZXdXaWR0aCA9IGhlaWdodCAqIHJhdGlvO1xyXG4gICAgICAgIGlmIChpc0xlZnQpIHtcclxuICAgICAgICAgIGxlZnRYIC09IChuZXdXaWR0aCAtIHdpZHRoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2lkdGggPSBuZXdXaWR0aDtcclxuICAgICAgfSBlbHNlIGlmIChjdXJyZW50UmF0aW8gPiByYXRpbykge1xyXG4gICAgICAgIHZhciBuZXdIZWlnaHQgPSBoZWlnaHQgLyAocmF0aW8gKiBoZWlnaHQvd2lkdGgpO1xyXG4gICAgICAgIGlmIChpc1VwKSB7XHJcbiAgICAgICAgICB0b3BZIC09IChuZXdIZWlnaHQgLSBoZWlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoZWlnaHQgPSBuZXdIZWlnaHQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChsZWZ0WCA8IDApIHtcclxuICAgICAgICBsZWZ0WCA9IDA7XHJcbiAgICAgICAgLy9UT0RPXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRvcFkgPCAwKSB7XHJcbiAgICAgICAgdG9wWSA9IDA7XHJcbiAgICAgICAgLy9UT0RPXHJcbiAgICAgIH1cclxuICAgICAgaWYgKGxlZnRYICsgd2lkdGggPiBjYW52YXMuZ2V0V2lkdGgoKSkge1xyXG4gICAgICAgIHZhciBuZXdXaWR0aCA9IGNhbnZhcy5nZXRXaWR0aCgpIC0gbGVmdFg7XHJcbiAgICAgICAgaGVpZ2h0ID0gbmV3V2lkdGggKiBoZWlnaHQgLyB3aWR0aDtcclxuICAgICAgICB3aWR0aCA9IG5ld1dpZHRoO1xyXG4gICAgICAgIGlmIChpc1VwKSB7XHJcbiAgICAgICAgICB0b3BZID0gZnJvbVkgLSBoZWlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICh0b3BZICsgaGVpZ2h0ID4gY2FudmFzLmdldEhlaWdodCgpKSB7XHJcbiAgICAgICAgdmFyIG5ld0hlaWdodCA9IGNhbnZhcy5nZXRIZWlnaHQoKSAtIHRvcFk7XHJcbiAgICAgICAgd2lkdGggPSB3aWR0aCAqIG5ld0hlaWdodCAvIGhlaWdodDtcclxuICAgICAgICBoZWlnaHQgPSBuZXdIZWlnaHQ7XHJcbiAgICAgICAgaWYgKGlzTGVmdCkge1xyXG4gICAgICAgICAgbGVmdFggPSBmcm9tWCAtIHdpZHRoO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEFwcGx5IGNvb3JkaW5hdGVzXHJcbiAgICB0aGlzLmNyb3Bab25lLmxlZnQgPSBsZWZ0WDtcclxuICAgIHRoaXMuY3JvcFpvbmUudG9wID0gdG9wWTtcclxuICAgIHRoaXMuY3JvcFpvbmUud2lkdGggPSB3aWR0aDtcclxuICAgIHRoaXMuY3JvcFpvbmUuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLmJyaW5nVG9Gcm9udCh0aGlzLmNyb3Bab25lKTtcclxuXHJcbiAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoJ2Nyb3A6dXBkYXRlJyk7XHJcbiAgfVxyXG59KTtcclxuXHJcbn0pKCk7XHJcbiIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgdmFyIFBlbmNpbCA9IERhcmtyb29tLlRyYW5zZm9ybWF0aW9uLmV4dGVuZCh7XHJcbiAgICAgICAgYXBwbHlUcmFuc2Zvcm1hdGlvbjogZnVuY3Rpb24gKGNhbnZhcywgaW1hZ2UsIG5leHQpIHtcclxuICAgICAgICAgICAgLy8gU25hcHNob3QgdGhlIGltYWdlIGRlbGltaXRlZCBieSB0aGUgY3JvcCB6b25lXHJcbiAgICAgICAgICAgIHZhciBzbmFwc2hvdCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICBzbmFwc2hvdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBWYWxpZGF0ZSBpbWFnZVxyXG4gICAgICAgICAgICAgICAgaWYgKGhlaWdodCA8IDEgfHwgd2lkdGggPCAxKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgaW1nSW5zdGFuY2UgPSBuZXcgZmFicmljLkltYWdlKHRoaXMsIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBvcHRpb25zIHRvIG1ha2UgdGhlIGltYWdlIHN0YXRpY1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvY2tNb3ZlbWVudFg6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9ja01vdmVtZW50WTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBsb2NrUm90YXRpb246IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9ja1NjYWxpbmdYOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvY2tTY2FsaW5nWTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBsb2NrVW5pU2NhbGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBoYXNDb250cm9sczogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgaGFzQm9yZGVyczogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciB3aWR0aCA9IHRoaXMud2lkdGg7XHJcbiAgICAgICAgICAgICAgICB2YXIgaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQWRkIGltYWdlXHJcbiAgICAgICAgICAgICAgICBjYW52YXMuYWRkKGltZ0luc3RhbmNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBuZXh0KGltZ0luc3RhbmNlKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHZhciB2aWV3cG9ydCA9IERhcmtyb29tLlV0aWxzLmNvbXB1dGVJbWFnZVZpZXdQb3J0KGltYWdlKTtcclxuICAgICAgICAgICAgdmFyIHdpZHRoID0gdmlld3BvcnQud2lkdGg7XHJcbiAgICAgICAgICAgIHZhciBoZWlnaHQgPSB2aWV3cG9ydC5oZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICAvLyB0aGlzLm9wdGlvbnMucGVuY2lsWm9uZS5fYXBwbHlTY2FsaW5nKGNhbnZhcy5nZXRXaWR0aCgpLCBjYW52YXMuZ2V0SGVpZ2h0KCkpO1xyXG4gICAgICAgICAgICBjYW52YXMuYWRkKHRoaXMub3B0aW9ucy5wZW5jaWxab25lKTtcclxuICAgICAgICAgICAgY2FudmFzLnJlbmRlckFsbCgpO1xyXG4gICAgICAgICAgICBzbmFwc2hvdC5zcmMgPSBjYW52YXMudG9EYXRhVVJMKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIFBlbmNpbFpvbmUgPSBmYWJyaWMudXRpbC5jcmVhdGVDbGFzcyhmYWJyaWMuT2JqZWN0LCB7XHJcbiAgICAgICAgdHlwZTogJ3BlbmNpbE9iamVjdCcsXHJcblxyXG4gICAgICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG4gICAgICAgICAgICB0aGlzLmxlZnQgPSBvcHRpb25zLmxlZnQgfHwgMDtcclxuICAgICAgICAgICAgdGhpcy50b3AgPSBvcHRpb25zLnRvcCB8fCAwO1xyXG4gICAgICAgICAgICB0aGlzLndpZHRoID0gb3B0aW9ucy53aWR0aDtcclxuICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSBvcHRpb25zLmhlaWdodDtcclxuICAgICAgICAgICAgdGhpcy5vcmlnaW5hbFdpZHRoID0gdGhpcy53aWR0aDtcclxuICAgICAgICAgICAgdGhpcy5vcmlnaW5hbEhlaWdodCA9IHRoaXMuaGVpZ2h0O1xyXG4gICAgICAgICAgICB0aGlzLnN0cm9rZSA9IG9wdGlvbnMuc3Ryb2tlO1xyXG4gICAgICAgICAgICB0aGlzLnNpemUgPSBvcHRpb25zLnNpemU7XHJcbiAgICAgICAgICAgIHRoaXMucGF0aCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuY1ggPSAtdGhpcy5nZXRXaWR0aCgpIC8gMjtcclxuICAgICAgICAgICAgdGhpcy5jWSA9IC10aGlzLmdldEhlaWdodCgpIC8gMjtcclxuICAgICAgICAgICAgdGhpcy5jYWxsU3VwZXIoJ2luaXRpYWxpemUnLCBvcHRpb25zKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBfYXBwbHlTY2FsaW5nOiBmdW5jdGlvbiAodywgaCkge1xyXG4gICAgICAgICAgICB2YXIgc2NhbGVYID0gdGhpcy5nZXRXaWR0aCgpIC8gdztcclxuICAgICAgICAgICAgdmFyIHNjYWxlWSA9IHRoaXMuZ2V0SGVpZ2h0KCkgLyBoO1xyXG4gICAgICAgICAgICB0aGlzLnNldCh7IHNjYWxlWDogdGhpcy5zY2FsZVggLyBzY2FsZVgsIHNjYWxlWTogdGhpcy5zY2FsZVkgLyBzY2FsZVkgfSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgX3JlbmRlcjogZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICAgICAgICB2YXIgY2FudmFzID0gY3R4LmNhbnZhcztcclxuICAgICAgICAgICAgdGhpcy5fZHJhdyhjdHgpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIF9kcmF3OiBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgICAgIGlmIChjdHggJiYgdGhpcy5wYXRoICYmIHRoaXMucGF0aC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjdHgubGluZUpvaW4gPSBcInJvdW5kXCI7XHJcbiAgICAgICAgICAgICAgICBjdHgubGluZUNhcCA9IFwicm91bmRcIjtcclxuICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgICAgIGN0eC5tb3ZlVG8oKHRoaXMuY1ggKyB0aGlzLnBhdGhbMF0ueCksXHJcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuY1kgKyB0aGlzLnBhdGhbMF0ueSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgdGhpcy5wYXRoLmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRyYXdYID0gKHRoaXMuY1ggKyB0aGlzLnBhdGhbeF0ueCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRyYXdZID0gKHRoaXMuY1kgKyB0aGlzLnBhdGhbeF0ueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LmxpbmVUbyhkcmF3WCwgZHJhd1kpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLnN0cm9rZTtcclxuICAgICAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSB0aGlzLnNpemU7XHJcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBfY2xvbmU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQZW5jaWxab25lKHtcclxuICAgICAgICAgICAgICAgIHN0cm9rZTogdGhpcy5zdHJva2UsXHJcbiAgICAgICAgICAgICAgICBzaXplOiB0aGlzLnNpemUsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy53aWR0aCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGxvY2tSb3RhdGlvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGV2ZW50ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbG9ja01vdmVtZW50WDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGxvY2tNb3ZlbWVudFk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBsb2NrU2NhbGluZ1g6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBsb2NrU2NhbGluZ1k6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBsb2NrVW5pU2NhbGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGhhc0NvbnRyb2xzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGhhc0JvcmRlcnM6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIERhcmtyb29tLnBsdWdpbnNbJ3BlbmNpbCddID0gRGFya3Jvb20uUGx1Z2luLmV4dGVuZCh7XHJcbiAgICAgICAgcGVuY2lsTW9kZTogZmFsc2UsXHJcbiAgICAgICAgcGVuY2lsWm9uZTogbnVsbCxcclxuICAgICAgICBtb3VzZURvd246IGZhbHNlLFxyXG4gICAgICAgIHNpemU6IDMwLFxyXG4gICAgICAgIGRlZmF1bHRzOiB7XHJcbiAgICAgICAgICAgIHN0cm9rZTogXCJibGFja1wiLFxyXG4gICAgICAgICAgICBzaXplOiAzMFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uIEluaXRpYWxpemVEYXJrcm9vbVBlbmNpbFBsdWdpbigpIHtcclxuICAgICAgICAgICAgdmFyIGJ1dHRvbkdyb3VwID0gdGhpcy5kYXJrcm9vbS50b29sYmFyLmNyZWF0ZUJ1dHRvbkdyb3VwKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBlbmNpbEJ1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XHJcbiAgICAgICAgICAgICAgICBpbWFnZTogJ3BlbmNpbCcsXHJcbiAgICAgICAgICAgICAgICB0b29sdGlwOiAnRHJhdydcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBhdGggPSBbXTtcclxuICAgICAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMuZGFya3Jvb20uY2FudmFzLndpZHRoO1xyXG4gICAgICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMuZGFya3Jvb20uY2FudmFzLmhlaWdodDtcclxuICAgICAgICAgICAgdGhpcy5zaXplID0gdGhpcy5vcHRpb25zLnNpemU7XHJcbiAgICAgICAgICAgIHRoaXMuc3Ryb2tlID0gdGhpcy5vcHRpb25zLnN0cm9rZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLm9uKCdtb3VzZTpkb3duJywgdGhpcy5vbk1vdXNlRG93bi5iaW5kKHRoaXMpKTtcclxuICAgICAgICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMub24oJ21vdXNlOm1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbignbW91c2U6dXAnLCB0aGlzLm9uTW91c2VVcC5iaW5kKHRoaXMpKTtcclxuICAgICAgICAgICAgdGhpcy5wZW5jaWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKSk7XHJcblxyXG5cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBjbGVhcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5oYXNGb2N1cygpKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVGb2N1cygpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGhhc0ZvY3VzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBlbmNpbFpvbmUgIT09IG51bGw7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgb25DbGljazogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5oYXNGb2N1cygpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlcXVpcmVGb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRm9jdXMoKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBvbk1vdXNlRG93bjogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5oYXNGb2N1cygpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5kYXJrcm9vbS5kaXNwYXRjaEV2ZW50KCdwZW5jaWw6YmVnaW4nKTtcclxuICAgICAgICAgICAgdGhpcy5tb3VzZURvd24gPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnBhdGgucHVzaCh0aGlzLmdldE1vdXNlUG9zaXRpb24odGhpcy5jYW52YXMsIGV2ZW50KSk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyWm9uZSgpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG9uTW91c2VVcDogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5oYXNGb2N1cygpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMubW91c2VEb3duKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoJ3BlbmNpbDplbmQnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB2YXIgbW91c2VQb3MgPSB0aGlzLmdldE1vdXNlUG9zaXRpb24odGhpcy5jYW52YXMsIGV2ZW50KTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGF0aC5wdXNoKG1vdXNlUG9zKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyWm9uZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBseVBlbmNpbFBhdGgoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGF0aCA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgb25Nb3VzZU1vdmU6IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaGFzRm9jdXMoKSlcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1vdXNlRG93bikge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1vdXNlUG9zID0gdGhpcy5nZXRNb3VzZVBvc2l0aW9uKHRoaXMuY2FudmFzLCBldmVudCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhdGgucHVzaChtb3VzZVBvcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclpvbmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHJlbW92ZUZvY3VzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudCgncGVuY2lsOmRpc2FibGVkJyk7XHJcbiAgICAgICAgICAgIHRoaXMucGVuY2lsQnV0dG9uLmFjdGl2ZShmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMucGVuY2lsTW9kZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5kZWZhdWx0Q3Vyc29yID0gJ2RlZmF1bHQnO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wZW5jaWxab25lKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlbmNpbFpvbmUucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlbmNpbFpvbmUgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcmVxdWlyZUZvY3VzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGFya3Jvb20uY2xlYXJGb2N1cygncGVuY2lsJyk7XHJcbiAgICAgICAgICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudCgncGVuY2lsOmVuYWJsZWQnKTtcclxuICAgICAgICAgICAgdGhpcy5wZW5jaWxNb2RlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5wZW5jaWxCdXR0b24uYWN0aXZlKHRydWUpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wZW5jaWxab25lID0gdGhpcy5uZXdab25lKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5hZGQodGhpcy5wZW5jaWxab25lKTtcclxuICAgICAgICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMuZGVmYXVsdEN1cnNvciA9ICdjcm9zc2hhaXInO1xyXG4gICAgICAgIH0sXHJcblxyXG5cclxuICAgICAgICBnZXRNb3VzZVBvc2l0aW9uOiBmdW5jdGlvbiAoY2FudmFzLCBldmVudCkge1xyXG4gICAgICAgICAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XHJcbiAgICAgICAgICAgIHZhciByZWN0ID0gY2FudmFzLmxvd2VyQ2FudmFzRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgIHZhciBwb2ludGVyID0gY2FudmFzLmdldFBvaW50ZXIoZXZlbnQuZSk7XHJcbiAgICAgICAgICAgIHZhciBzY2FsZSA9IDcyMCAvIDEyODBcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHg6IHBvaW50ZXIueCxcclxuICAgICAgICAgICAgICAgIHk6IHBvaW50ZXIueSxcclxuICAgICAgICAgICAgICAgIGN4OiBldmVudC5lLmNsaWVudFggLSByZWN0LmxlZnQsXHJcbiAgICAgICAgICAgICAgICBjeTogZXZlbnQuZS5jbGllbnRZIC0gcmVjdC50b3AsXHJcbiAgICAgICAgICAgICAgICBzeDogZXZlbnQuZS5zY3JlZW5YLFxyXG4gICAgICAgICAgICAgICAgc3k6IGV2ZW50LmUuc2NyZWVuWVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG5ld1pvbmU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXRoID0gW107XHJcbiAgICAgICAgICAgIHZhciBzdHJva2UgPSB0aGlzLnN0cm9rZTtcclxuICAgICAgICAgICAgdmFyIHNpemUgPSB0aGlzLnNpemU7XHJcbiAgICAgICAgICAgIHZhciB3aWR0aCA9IHRoaXMuZGFya3Jvb20uY2FudmFzLmdldFdpZHRoKCk7XHJcbiAgICAgICAgICAgIHZhciBoZWlnaHQgPSB0aGlzLmRhcmtyb29tLmNhbnZhcy5nZXRIZWlnaHQoKTtcclxuICAgICAgICAgICAgdmFyIHpvbmUgPSBuZXcgUGVuY2lsWm9uZSh7XHJcbiAgICAgICAgICAgICAgICBzdHJva2U6IHN0cm9rZSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHNpemUsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGgsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcclxuICAgICAgICAgICAgICAgIHNlbGVjdGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbG9ja1JvdGF0aW9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBsb2NrTW92ZW1lbnRYOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbG9ja01vdmVtZW50WTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGxvY2tTY2FsaW5nWDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGxvY2tTY2FsaW5nWTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGxvY2tVbmlTY2FsaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaGFzQ29udHJvbHM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaGFzQm9yZGVyczogZmFsc2VcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gem9uZTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBhcHBseVBlbmNpbFBhdGg6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmhhc0ZvY3VzKCkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAvLyBBdm9pZCBjcm9waW5nIGVtcHR5IHpvbmVcclxuICAgICAgICAgICAgaWYgKHRoaXMucGF0aCA9PT0gbnVsbCB8fCB0aGlzLnBhdGgubGVuZ3RoID09IDApXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAvLyBBcHBseSBjcm9wIHRyYW5zZm9ybWF0aW9uLlxyXG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgdG8gdXNlIHJlbGF0aXZlIGRpbWVuc2lvbiBzaW5jZSB0aGUgY3JvcCB3aWxsIGJlIGFwcGxpZWRcclxuICAgICAgICAgICAgLy8gb24gdGhlIHNvdXJjZSBpbWFnZS5cclxuICAgICAgICAgICAgdmFyIHpvbmUgPSB0aGlzLnBlbmNpbFpvbmUuX2Nsb25lKCk7XHJcbiAgICAgICAgICAgIHpvbmUucGF0aCA9IHRoaXMucGF0aDtcclxuICAgICAgICAgICAgem9uZS5sZWZ0IC09IHRoaXMuZGFya3Jvb20ub3B0aW9ucy5sZWZ0O1xyXG4gICAgICAgICAgICB6b25lLnRvcCAtPSB0aGlzLmRhcmtyb29tLm9wdGlvbnMudG9wO1xyXG4gICAgICAgICAgICB0aGlzLmRhcmtyb29tLmFwcGx5VHJhbnNmb3JtYXRpb24obmV3IFBlbmNpbCh7XHJcbiAgICAgICAgICAgICAgICBwZW5jaWxab25lOiB6b25lXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgdGhpcy5wZW5jaWxab25lLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnBlbmNpbFpvbmUgPSB0aGlzLm5ld1pvbmUoKTtcclxuICAgICAgICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMuYWRkKHRoaXMucGVuY2lsWm9uZSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcmVuZGVyWm9uZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wYXRoICYmIHRoaXMucGF0aC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoJ3BlbmNpbDp1cGRhdGUnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGVuY2lsWm9uZS5wYXRoID0gdGhpcy5wYXRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLmJyaW5nVG9Gcm9udCh0aGlzLnBlbmNpbFpvbmUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbn0pKCk7XHJcbiIsIihmdW5jdGlvbiAoKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICB2YXIgcmVjdCwgaXNEb3duLCBvcmlnWCwgb3JpZ1k7XHJcbiAgdmFyIGhhc0ZvY3VzID0gdHJ1ZTtcclxuXHJcbiAgdmFyIFJlY3RhbmdsZVRyYW5zZm9ybWF0aW9uID0gRGFya3Jvb20uVHJhbnNmb3JtYXRpb24uZXh0ZW5kKHtcclxuICAgIGFwcGx5VHJhbnNmb3JtYXRpb246IGZ1bmN0aW9uIChjYW52YXMsIGltYWdlLCBuZXh0KSB7XHJcbiAgICAgIHZhciBzbmFwc2hvdCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICBzbmFwc2hvdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKGhlaWdodCA8IDEgfHwgd2lkdGggPCAxKVxyXG4gICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB2YXIgaW1nSW5zdGFuY2UgPSBuZXcgZmFicmljLkltYWdlKHRoaXMsIHtcclxuICAgICAgICAgIC8vIG9wdGlvbnMgdG8gbWFrZSB0aGUgaW1hZ2Ugc3RhdGljXHJcbiAgICAgICAgICBzZWxlY3RhYmxlOiBmYWxzZSxcclxuICAgICAgICAgIGV2ZW50ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgbG9ja01vdmVtZW50WDogdHJ1ZSxcclxuICAgICAgICAgIGxvY2tNb3ZlbWVudFk6IHRydWUsXHJcbiAgICAgICAgICBsb2NrUm90YXRpb246IHRydWUsXHJcbiAgICAgICAgICBsb2NrU2NhbGluZ1g6IHRydWUsXHJcbiAgICAgICAgICBsb2NrU2NhbGluZ1k6IHRydWUsXHJcbiAgICAgICAgICBsb2NrVW5pU2NhbGluZzogdHJ1ZSxcclxuICAgICAgICAgIGhhc0NvbnRyb2xzOiBmYWxzZSxcclxuICAgICAgICAgIGhhc0JvcmRlcnM6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHZhciB3aWR0aCA9IHRoaXMud2lkdGg7XHJcbiAgICAgICAgdmFyIGhlaWdodCA9IHRoaXMuaGVpZ2h0O1xyXG5cclxuICAgICAgICAvLyBBZGQgaW1hZ2VcclxuICAgICAgICBjYW52YXMuYWRkKGltZ0luc3RhbmNlKTtcclxuXHJcbiAgICAgICAgbmV4dChpbWdJbnN0YW5jZSk7XHJcblxyXG4gICAgICB9O1xyXG5cclxuICAgICAgdmFyIHZpZXdwb3J0ID0gRGFya3Jvb20uVXRpbHMuY29tcHV0ZUltYWdlVmlld1BvcnQoaW1hZ2UpO1xyXG4gICAgICB2YXIgd2lkdGggPSB2aWV3cG9ydC53aWR0aDtcclxuICAgICAgdmFyIGhlaWdodCA9IHZpZXdwb3J0LmhlaWdodDtcclxuXHJcbiAgICAgIHZhciBuZXdSZWN0ID0gdGhpcy5vcHRpb25zLnJlY3RhbmdsZTtcclxuICAgICAgdmFyIHNjYWxlWCA9IHRoaXMub3B0aW9ucy5vcmlnaW5hbFdpZHRoIC8gY2FudmFzLmdldFdpZHRoKCk7XHJcbiAgICAgIHZhciBzY2FsZVkgPSB0aGlzLm9wdGlvbnMub3JpZ2luYWxIZWlnaHQgLyBjYW52YXMuZ2V0SGVpZ2h0KCk7XHJcbiAgICAgIG5ld1JlY3Quc2V0KHsgc2NhbGVYOiAxIC8gc2NhbGVYLCBzY2FsZVk6IDEgLyBzY2FsZVkgfSk7XHJcbiAgICAgIGNhbnZhcy5hZGQobmV3UmVjdCk7XHJcbiAgICAgIGNhbnZhcy5yZW5kZXJBbGwoKTtcclxuICAgICAgc25hcHNob3Quc3JjID0gY2FudmFzLnRvRGF0YVVSTCgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBEYXJrcm9vbS5wbHVnaW5zWydyZWN0YW5nbGUnXSA9IERhcmtyb29tLlBsdWdpbi5leHRlbmQoe1xyXG4gICAgcmVjdGFuZ2xlWm9uZTogbnVsbCxcclxuXHJcbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbiBJbml0aWFsaXplRGFya3Jvb21SZWN0YW5nbGVQbHVnaW4oKSB7XHJcbiAgICAgIHZhciBidXR0b25Hcm91cCA9IHRoaXMuZGFya3Jvb20udG9vbGJhci5jcmVhdGVCdXR0b25Hcm91cCgpO1xyXG5cclxuICAgICAgdGhpcy5yZWN0YW5nbGVCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xyXG4gICAgICAgIGltYWdlOiAncmVjdGFuZ2xlJyxcclxuICAgICAgICB0b29sdGlwOiAnRHJhdydcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbignbW91c2U6ZG93bicsIHRoaXMub25Nb3VzZURvd24uYmluZCh0aGlzKSk7XHJcbiAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLm9uKCdtb3VzZTptb3ZlJywgdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpKTtcclxuICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMub24oJ21vdXNlOnVwJywgdGhpcy5oYW5kbGVNb3VzZVVwLmJpbmQodGhpcykpO1xyXG4gICAgICB0aGlzLnJlY3RhbmdsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljay5iaW5kKHRoaXMpKTtcclxuICAgIH0sXHJcblxyXG4gICAgY2xlYXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLnJlY3RhbmdsZUJ1dHRvbi5hY3RpdmUoZmFsc2UpO1xyXG4gICAgICBoYXNGb2N1cyA9IHRydWU7XHJcbiAgICAgIGlzRG93biA9IGZhbHNlO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkNsaWNrOiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgaWYgKCFoYXNGb2N1cykge1xyXG4gICAgICAgIHRoaXMucmVjdGFuZ2xlQnV0dG9uLmFjdGl2ZShmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMuZGVmYXVsdEN1cnNvciA9ICdkZWZhdWx0JztcclxuICAgICAgICBoYXNGb2N1cyA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZGFya3Jvb20uY2xlYXJGb2N1cyhcInJlY3RhbmdsZVwiKTtcclxuICAgICAgdGhpcy5yZWN0YW5nbGVCdXR0b24uYWN0aXZlKHRydWUpO1xyXG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5kZWZhdWx0Q3Vyc29yID0gJ2Nyb3NzaGFpcic7XHJcbiAgICAgIGhhc0ZvY3VzID0gZmFsc2U7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uTW91c2VEb3duOiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgaWYgKGhhc0ZvY3VzKSByZXR1cm47XHJcbiAgICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudCgncmVjdGFuZ2xlOmJlZ2luJyk7XHJcbiAgICAgIHZhciBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcclxuICAgICAgaXNEb3duID0gdHJ1ZTtcclxuICAgICAgdmFyIHBvaW50ZXIgPSBjYW52YXMuZ2V0UG9pbnRlcihldmVudC5lKTtcclxuICAgICAgb3JpZ1ggPSBwb2ludGVyLng7XHJcbiAgICAgIG9yaWdZID0gcG9pbnRlci55O1xyXG4gICAgICByZWN0ID0gbmV3IGZhYnJpYy5SZWN0KHtcclxuICAgICAgICBsZWZ0OiBvcmlnWCxcclxuICAgICAgICB0b3A6IG9yaWdZLFxyXG4gICAgICAgIG9yaWdpblg6ICdsZWZ0JyxcclxuICAgICAgICBvcmlnaW5ZOiAndG9wJyxcclxuICAgICAgICB3aWR0aDogcG9pbnRlci54IC0gb3JpZ1gsXHJcbiAgICAgICAgaGVpZ2h0OiBwb2ludGVyLnkgLSBvcmlnWSxcclxuICAgICAgICBhbmdsZTogMCxcclxuICAgICAgICBmaWxsOiBcImJsYWNrXCIsXHJcbiAgICAgICAgdHJhbnNwYXJlbnRDb3JuZXJzOiBmYWxzZVxyXG4gICAgICB9KTtcclxuICAgICAgY2FudmFzLmFkZChyZWN0KTtcclxuICAgIH0sXHJcblxyXG4gICAgb25Nb3VzZU1vdmU6IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICBpZiAoaXNEb3duKSB7XHJcbiAgICAgICAgdGhpcy5kYXJrcm9vbS5kaXNwYXRjaEV2ZW50KCdyZWN0YW5nbGU6dXBkYXRlJyk7XHJcbiAgICAgICAgdmFyIGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xyXG4gICAgICAgIHZhciBwb2ludGVyID0gY2FudmFzLmdldFBvaW50ZXIoZXZlbnQuZSk7XHJcblxyXG4gICAgICAgIGlmIChvcmlnWCA+IHBvaW50ZXIueCkge1xyXG4gICAgICAgICAgcmVjdC5zZXQoe1xyXG4gICAgICAgICAgICBsZWZ0OiBNYXRoLmFicyhwb2ludGVyLngpXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9yaWdZID4gcG9pbnRlci55KSB7XHJcbiAgICAgICAgICByZWN0LnNldCh7XHJcbiAgICAgICAgICAgIHRvcDogTWF0aC5hYnMocG9pbnRlci55KVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZWN0LnNldCh7XHJcbiAgICAgICAgICB3aWR0aDogTWF0aC5hYnMob3JpZ1ggLSBwb2ludGVyLngpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmVjdC5zZXQoe1xyXG4gICAgICAgICAgaGVpZ2h0OiBNYXRoLmFicyhvcmlnWSAtIHBvaW50ZXIueSlcclxuICAgICAgICB9KTtcclxuICAgICAgICBjYW52YXMucmVuZGVyQWxsKCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgaGFuZGxlTW91c2VVcDogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgIGlmIChoYXNGb2N1cykgcmV0dXJuO1xyXG4gICAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XHJcbiAgICAgIGlzRG93biA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoJ3JlY3RhbmdsZTplbmQnKTtcclxuICAgICAgY2FudmFzLnJlbW92ZShyZWN0KTtcclxuICAgICAgdmFyIGNhbnZhc09mZnNldCA9IGNhbnZhcy5jYWxjT2Zmc2V0KCk7XHJcbiAgICAgIHJlY3QubGVmdCAtPSB0aGlzLmRhcmtyb29tLm9wdGlvbnMubGVmdDtcclxuICAgICAgcmVjdC50b3AgLT0gdGhpcy5kYXJrcm9vbS5vcHRpb25zLnRvcDtcclxuICAgICAgdGhpcy5kYXJrcm9vbS5hcHBseVRyYW5zZm9ybWF0aW9uKCBuZXcgUmVjdGFuZ2xlVHJhbnNmb3JtYXRpb24oe1xyXG4gICAgICAgIG9yaWdpbmFsV2lkdGg6IGNhbnZhcy5nZXRXaWR0aCgpLFxyXG4gICAgICAgIG9yaWdpbmFsSGVpZ2h0OiBjYW52YXMuZ2V0SGVpZ2h0KCksXHJcbiAgICAgICAgcmVjdGFuZ2xlOiByZWN0XHJcbiAgICAgIH0pKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbn0pKCk7XHJcbiIsIihmdW5jdGlvbiAoKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG4gIHZhciBtYXhab29tID0gMjtcclxuICB2YXIgbWluWm9vbTtcclxuICB2YXIgc3RhdGVzID0ge1xyXG4gICAgcGFuQWN0aXZlOiBmYWxzZSxcclxuICAgIHBhbm5pbmc6IGZhbHNlXHJcbiAgfTtcclxuICB2YXIgcGFubmluZyA9IGZhbHNlO1xyXG5cclxuICBEYXJrcm9vbS5wbHVnaW5zWyd6b29tJ10gPSBEYXJrcm9vbS5QbHVnaW4uZXh0ZW5kKHtcclxuXHJcbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbiBJbml0RGFya3Jvb21Cb3hQbHVnaW4oKSB7XHJcbiAgICAgIHZhciBidXR0b25Hcm91cCA9IHRoaXMuZGFya3Jvb20udG9vbGJhci5jcmVhdGVCdXR0b25Hcm91cCgpO1xyXG5cclxuICAgICAgdGhpcy56b29tSW5CdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xyXG4gICAgICAgIGltYWdlOiAnem9vbS1pbicsXHJcbiAgICAgICAgdGl0bGU6ICd6b29tIGluJ1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuem9vbU91dEJ1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XHJcbiAgICAgICAgaW1hZ2U6ICd6b29tLW91dCcsXHJcbiAgICAgICAgdGl0bGU6ICd6b29tIG91dCcsXHJcbiAgICAgICAgZGlzYWJsZWQ6IHRydWVcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLnBhbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XHJcbiAgICAgICAgaW1hZ2U6ICdoYW5kJyxcclxuICAgICAgICBkaXNhYmxlZDogdHJ1ZVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuem9vbUluQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy56b29tSW4uYmluZCh0aGlzKSk7XHJcbiAgICAgIHRoaXMuem9vbU91dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuem9vbU91dC5iaW5kKHRoaXMpKTtcclxuICAgICAgdGhpcy5wYW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uUGFuLmJpbmQodGhpcykpO1xyXG4gICAgICBtaW5ab29tID0gdGhpcy5kYXJrcm9vbS5jYW52YXMuZ2V0Wm9vbSgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBjbGVhcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICBzdGF0ZXMucGFuQWN0aXZlID0gZmFsc2U7XHJcbiAgICAgIHN0YXRlcy5wYW5uaW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMucmVzdG9yZVpvb21QYW4oKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25QYW46IGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKHBhbm5pbmcpIHtcclxuICAgICAgICBwYW5uaW5nID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5kYXJrcm9vbS5jbGVhckZvY3VzKFwiem9vbVwiKTtcclxuICAgICAgdmFyIGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xyXG4gICAgICBjYW52YXMub24oJ21vdXNlOmRvd24nLCB0aGlzLnBhbkVudGVyLmJpbmQodGhpcykpO1xyXG4gICAgICBjYW52YXMub24oJ21vdXNlOnVwJywgdGhpcy5wYW5FeGl0LmJpbmQodGhpcykpO1xyXG4gICAgICBjYW52YXMub24oJ21vdXNlOm1vdmUnLCB0aGlzLl9wYW4uYmluZCh0aGlzKSk7XHJcbiAgICAgIGNhbnZhcy5kZWZhdWx0Q3Vyc29yID0gJ21vdmUnO1xyXG4gICAgICBzdGF0ZXMucGFuQWN0aXZlID0gdHJ1ZTtcclxuICAgIH0sXHJcblxyXG4gICAgcGFuRW50ZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKHN0YXRlcy5wYW5BY3RpdmUpIHtcclxuICAgICAgICBzdGF0ZXMucGFubmluZyA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgX3BhbjogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgIHdpbmRvdy5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBpZiAoc3RhdGVzLnBhbm5pbmcgJiYgZXZlbnQgJiYgZXZlbnQuZSkge1xyXG4gICAgICAgIHZhciBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcclxuICAgICAgICB2YXIgZGVsdGEgPSB7XHJcbiAgICAgICAgICB4OiBldmVudC5lLm1vdmVtZW50WCxcclxuICAgICAgICAgIHk6IGV2ZW50LmUubW92ZW1lbnRZXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmRvUGFuKGRlbHRhKTtcclxuICAgICAgICBjYW52YXMucmVuZGVyQWxsKCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgcGFuRXhpdDogZnVuY3Rpb24gKGRlbHRhKSB7XHJcbiAgICAgIGlmIChzdGF0ZXMucGFuQWN0aXZlKSB7XHJcbiAgICAgICAgdmFyIGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xyXG4gICAgICAgIHZhciBvcHRpb25zID0gdGhpcy5kYXJrcm9vbS5vcHRpb25zO1xyXG4gICAgICAgIGRlbHRhID0gdGhpcy5jb25zdHJhaW5QYW4oZGVsdGEpO1xyXG4gICAgICAgIHZhciBpbWFnZSA9IHRoaXMuZGFya3Jvb20uaW1hZ2U7XHJcbiAgICAgICAgc3RhdGVzLnBhbm5pbmcgPSBmYWxzZTtcclxuICAgICAgICBvcHRpb25zLmxlZnQgPSBpbWFnZS5sZWZ0O1xyXG4gICAgICAgIG9wdGlvbnMudG9wID0gaW1hZ2UudG9wO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGRvUGFuOiBmdW5jdGlvbiAoZGVsdGEpIHtcclxuICAgICAgdmFyIGltYWdlID0gdGhpcy5kYXJrcm9vbS5pbWFnZTtcclxuICAgICAgZGVsdGEgPSB0aGlzLmNvbnN0cmFpblBhbihkZWx0YSk7XHJcbiAgICAgIGltYWdlLmxlZnQgPSBpbWFnZS5sZWZ0ICsgZGVsdGEueDtcclxuICAgICAgaW1hZ2UudG9wID0gaW1hZ2UudG9wICsgZGVsdGEueTtcclxuICAgICAgaW1hZ2Uuc2V0Q29vcmRzKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGNvbnN0cmFpblBhbjogZnVuY3Rpb24gKGRlbHRhKSB7XHJcbiAgICAgIHZhciBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcywgaW1hZ2UgPSB0aGlzLmRhcmtyb29tLmltYWdlLCB0bCA9IGltYWdlLm9Db29yZHMudGwsIC8vIHRvcCBsZWZ0IGNvcm5lclxyXG4gICAgICAgIGJyID0gaW1hZ2Uub0Nvb3Jkcy5icjsgLy8gYm90dG9tIHJpZ2h0IGNvcm5lclxyXG4gICAgICBpZiAoZGVsdGEueCA+IDApIHtcclxuICAgICAgICBkZWx0YS54ID0gKCh0bC54ICsgZGVsdGEueCkgPiAwKSA/IDAgOiBNYXRoLmZsb29yKGRlbHRhLngpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGRlbHRhLnggPSBNYXRoLmNlaWwoZGVsdGEueCk7XHJcbiAgICAgICAgaWYgKChNYXRoLmNlaWwoYnIueCkgKyBkZWx0YS54KSA8IGNhbnZhcy53aWR0aCkge1xyXG4gICAgICAgICAgZGVsdGEueCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChkZWx0YS55ID4gMCkge1xyXG4gICAgICAgIGRlbHRhLnkgPSAoKHRsLnkgKyBkZWx0YS55KSA+IDApID8gMCA6IE1hdGguZmxvb3IoZGVsdGEueSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgZGVsdGEueSA9IE1hdGguY2VpbChkZWx0YS55KTtcclxuICAgICAgICBpZiAoKE1hdGguY2VpbChici55KSArIGRlbHRhLnkpIDwgY2FudmFzLmhlaWdodCkge1xyXG4gICAgICAgICAgZGVsdGEueSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBkZWx0YTtcclxuICAgIH0sXHJcblxyXG4gICAgcmVzdG9yZVpvb21QYW46IGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKHN0YXRlcy5sYXN0U2NhbGUgIT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMuZGFya3Jvb20uaW1hZ2Uuc2NhbGUoc3RhdGVzLmxhc3RTY2FsZSk7XHJcbiAgICAgICAgaWYgKHN0YXRlcy5yZWFsUGFuICE9IG51bGwpIHtcclxuICAgICAgICAgIHRoaXMuZG9QYW4oc3RhdGVzLnJlYWxQYW4pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICB6b29tSW46IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xyXG4gICAgICBpZiAoY2FudmFzLmdldFpvb20oKSA8PSBtYXhab29tKSB7XHJcbiAgICAgICAgY2FudmFzLnNldFpvb20oY2FudmFzLmdldFpvb20oKSAqIDEuMSk7XHJcbiAgICAgICAgY2FudmFzLnJlbmRlckFsbCgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudXBkYXRlQnV0dG9ucygpO1xyXG4gICAgfSxcclxuXHJcbiAgICB6b29tT3V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcclxuICAgICAgdmFyIGltYWdlID0gdGhpcy5kYXJrcm9vbS5pbWFnZTtcclxuICAgICAgaWYgKGNhbnZhcy5nZXRab29tKCkgPiBtaW5ab29tKSB7XHJcbiAgICAgICAgY2FudmFzLnNldFpvb20oY2FudmFzLmdldFpvb20oKSAvIDEuMSk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGFya3Jvb20uaW1hZ2Uub0Nvb3Jkcy5ici54IDwgdGhpcy5kYXJrcm9vbS5jYW52YXMud2lkdGgpIHtcclxuICAgICAgICAgIHZhciBuZXdMZWZ0ID0gTWF0aC5jZWlsKHRoaXMuZGFya3Jvb20uY2FudmFzLndpZHRoIC0gdGhpcy5kYXJrcm9vbS5pbWFnZS5vQ29vcmRzLmJyLngpO1xyXG4gICAgICAgICAgaW1hZ2UubGVmdCA9IGltYWdlLmxlZnQgKyBuZXdMZWZ0O1xyXG4gICAgICAgICAgdGhpcy5kYXJrcm9vbS5vcHRpb25zLmxlZnQgPSB0aGlzLmRhcmtyb29tLm9wdGlvbnMubGVmdCArIG5ld0xlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmRhcmtyb29tLmltYWdlLm9Db29yZHMuYnIueSA8IHRoaXMuZGFya3Jvb20uY2FudmFzLmhlaWdodCkge1xyXG4gICAgICAgICAgdmFyIG5ld1RvcCA9IE1hdGguY2VpbCh0aGlzLmRhcmtyb29tLmNhbnZhcy5oZWlnaHQgLSB0aGlzLmRhcmtyb29tLmltYWdlLm9Db29yZHMuYnIueSk7XHJcbiAgICAgICAgICBpbWFnZS50b3AgPSBpbWFnZS50b3AgKyBuZXdUb3A7XHJcbiAgICAgICAgICB0aGlzLmRhcmtyb29tLm9wdGlvbnMudG9wID0gdGhpcy5kYXJrcm9vbS5vcHRpb25zLnRvcCArIG5ld1RvcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW1hZ2Uuc2V0Q29vcmRzKCk7XHJcbiAgICAgICAgY2FudmFzLnJlbmRlckFsbCgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudXBkYXRlQnV0dG9ucygpO1xyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGVCdXR0b25zOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcclxuICAgICAgdmFyIHNob3VsZERpc2FibGVNaW5ab29tID0gY2FudmFzLmdldFpvb20oKSA8PSBtaW5ab29tO1xyXG4gICAgICB2YXIgc2hvdWxkRGlzYWJsZU1heFpvb29tID0gY2FudmFzLmdldFpvb20oKSA+PSBtYXhab29tO1xyXG4gICAgICB0aGlzLnBhbi5kaXNhYmxlKHNob3VsZERpc2FibGVNaW5ab29tKTtcclxuICAgICAgdGhpcy56b29tT3V0QnV0dG9uLmRpc2FibGUoc2hvdWxkRGlzYWJsZU1pblpvb20pO1xyXG4gICAgICB0aGlzLnpvb21JbkJ1dHRvbi5kaXNhYmxlKHNob3VsZERpc2FibGVNYXhab29vbSk7XHJcbiAgICAgIGlmIChzaG91bGREaXNhYmxlTWluWm9vbSkge1xyXG4gICAgICAgIHRoaXMuZGFya3Jvb20ub3B0aW9ucy5sZWZ0ID0gMDtcclxuICAgICAgICB0aGlzLmRhcmtyb29tLm9wdGlvbnMudG9wID0gMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59KSgpO1xyXG4iLCIoZnVuY3Rpb24oKSB7XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbkRhcmtyb29tLnBsdWdpbnNbJ3NhdmUnXSA9IERhcmtyb29tLlBsdWdpbi5leHRlbmQoe1xyXG5cclxuICBkZWZhdWx0czoge1xyXG4gICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLmRhcmtyb29tLnNlbGZEZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gSW5pdGlhbGl6ZURhcmtyb29tU2F2ZVBsdWdpbigpIHtcclxuICAgIHZhciBidXR0b25Hcm91cCA9IHRoaXMuZGFya3Jvb20udG9vbGJhci5jcmVhdGVCdXR0b25Hcm91cCgpO1xyXG5cclxuICAgIHRoaXMuZGVzdHJveUJ1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XHJcbiAgICAgIGltYWdlOiAnc2F2ZSdcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZGVzdHJveUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3B0aW9ucy5jYWxsYmFjay5iaW5kKHRoaXMpKTtcclxuICB9LFxyXG59KTtcclxuXHJcbn0pKCk7XHJcbiJdfQ==
