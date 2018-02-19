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
      this.pan.active(false);
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
      this.pan.active(true);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3RzdHJhcC5qcyIsImRhcmtyb29tLmpzIiwicGx1Z2luLmpzIiwidHJhbnNmb3JtYXRpb24uanMiLCJ1aS5qcyIsInV0aWxzLmpzIiwiZGFya3Jvb20uaGlzdG9yeS5qcyIsImRhcmtyb29tLnJvdGF0ZS5qcyIsImRhcmtyb29tLmNyb3AuanMiLCJkYXJrcm9vbS5wZW5jaWwuanMiLCJkYXJrcm9vbS5yZWN0YW5nbGUuanMiLCJ6b29tLmpzIiwiZGFya3Jvb20uc2F2ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0NkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDclhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0N0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQzNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQzNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0M5cUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0M3U0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQzFKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQzlLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZGFya3Jvb20uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIEluamVjdCBTVkcgaWNvbnMgaW50byB0aGUgRE9NXG52YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZWxlbWVudC5pZCA9ICdkYXJrcm9vbS1pY29ucyc7XG5lbGVtZW50LnN0eWxlLmhlaWdodCA9IDA7XG5lbGVtZW50LnN0eWxlLndpZHRoID0gMDtcbmVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuZWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG5lbGVtZW50LmlubmVySFRNTCA9ICc8IS0tIGluamVjdDpzdmcgLS0+PCEtLSBlbmRpbmplY3QgLS0+JztcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cbn0pKCk7XG4iLCIoZnVuY3Rpb24gKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgd2luZG93LkRhcmtyb29tID0gRGFya3Jvb207XG5cbiAgLy8gQ29yZSBvYmplY3Qgb2YgRGFya3Jvb21KUy5cbiAgLy8gQmFzaWNhbGx5IGl0J3MgYSBzaW5nbGUgb2JqZWN0LCBpbnN0YW5jaWFibGUgdmlhIGFuIGVsZW1lbnRcbiAgLy8gKGl0IGNvdWxkIGJlIGEgQ1NTIHNlbGVjdG9yIG9yIGEgRE9NIGVsZW1lbnQpLCBzb21lIGN1c3RvbSBvcHRpb25zLFxuICAvLyBhbmQgYSBsaXN0IG9mIHBsdWdpbiBvYmplY3RzIChvciBub25lIHRvIHVzZSBkZWZhdWx0IG9uZXMpLlxuICBmdW5jdGlvbiBEYXJrcm9vbShlbGVtZW50LCBvcHRpb25zLCBwbHVnaW5zKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucywgcGx1Z2lucyk7XG4gIH1cblxuICAvLyBDcmVhdGUgYW4gZW1wdHkgbGlzdCBvZiBwbHVnaW4gb2JqZWN0cywgd2hpY2ggd2lsbCBiZSBmaWxsZWQgYnlcbiAgLy8gb3RoZXIgcGx1Z2luIHNjcmlwdHMuIFRoaXMgaXMgdGhlIGRlZmF1bHQgcGx1Z2luIGxpc3QgaWYgbm9uZSBpc1xuICAvLyBzcGVjaWZpZWQgaW4gRGFya3Jvb20nc3MgY29uc3RydWN0b3IuXG4gIERhcmtyb29tLnBsdWdpbnMgPSBbXTtcblxuICBEYXJrcm9vbS5wcm90b3R5cGUgPSB7XG4gICAgLy8gUmVmZXJlbmNlIHRvIHRoZSBtYWluIGNvbnRhaW5lciBlbGVtZW50XG4gICAgY29udGFpbmVyRWxlbWVudDogbnVsbCxcblxuICAgIC8vIFJlZmVyZW5jZSB0byB0aGUgRmFicmljIGNhbnZhcyBvYmplY3RcbiAgICBjYW52YXM6IG51bGwsXG5cbiAgICAvLyBSZWZlcmVuY2UgdG8gdGhlIEZhYnJpYyBpbWFnZSBvYmplY3RcbiAgICBpbWFnZTogbnVsbCxcblxuICAgIC8vIFJlZmVyZW5jZSB0byB0aGUgRmFicmljIHNvdXJjZSBjYW52YXMgb2JqZWN0XG4gICAgc291cmNlQ2FudmFzOiBudWxsLFxuXG4gICAgLy8gUmVmZXJlbmNlIHRvIHRoZSBGYWJyaWMgc291cmNlIGltYWdlIG9iamVjdFxuICAgIHNvdXJjZUltYWdlOiBudWxsLFxuXG4gICAgLy8gVHJhY2sgb2YgdGhlIG9yaWdpbmFsIGltYWdlIGVsZW1lbnRcbiAgICBvcmlnaW5hbEltYWdlRWxlbWVudDogbnVsbCxcblxuICAgIC8vIFN0YWNrIG9mIHRyYW5zZm9ybWF0aW9ucyB0byBhcHBseSB0byB0aGUgaW1hZ2Ugc291cmNlXG4gICAgdHJhbnNmb3JtYXRpb25zOiBbXSxcblxuICAgIC8vIERlZmF1bHQgb3B0aW9uc1xuICAgIGRlZmF1bHRzOiB7XG4gICAgICAvLyBDYW52YXMgcHJvcGVydGllcyAoZGltZW5zaW9uLCByYXRpbywgY29sb3IpXG4gICAgICBtaW5XaWR0aDogbnVsbCxcbiAgICAgIG1pbkhlaWdodDogbnVsbCxcbiAgICAgIG1heFdpZHRoOiBudWxsLFxuICAgICAgbWF4SGVpZ2h0OiBudWxsLFxuICAgICAgcmF0aW86IG51bGwsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgdG9wOiAwLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG5cbiAgICAgIC8vIFBsdWdpbnMgb3B0aW9uc1xuICAgICAgcGx1Z2luczoge30sXG5cbiAgICAgIC8vIFBvc3QtaW5pdGlhbGlzYXRpb24gY2FsbGJhY2tcbiAgICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uICgpIHsgLyogbm9vcCAqLyB9XG4gICAgfSxcblxuICAgIC8vIExpc3Qgb2YgdGhlIGluc3RhbmNpZWQgcGx1Z2luc1xuICAgIHBsdWdpbnM6IHt9LFxuXG4gICAgLy8gVGhpcyBvcHRpb25zIGFyZSBhIG1lcmdlIGJldHdlZW4gYGRlZmF1bHRzYCBhbmQgdGhlIG9wdGlvbnMgcGFzc2VkXG4gICAgLy8gdGhyb3VnaCB0aGUgY29uc3RydWN0b3JcbiAgICBvcHRpb25zOiB7fSxcblxuICAgIGNvbnN0cnVjdG9yOiBmdW5jdGlvbiAoZWxlbWVudCwgb3B0aW9ucywgcGx1Z2lucykge1xuICAgICAgdGhpcy5vcHRpb25zID0gRGFya3Jvb20uVXRpbHMuZXh0ZW5kKG9wdGlvbnMsIHRoaXMuZGVmYXVsdHMpO1xuXG4gICAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKVxuICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50KTtcbiAgICAgIGlmIChudWxsID09PSBlbGVtZW50KVxuICAgICAgICByZXR1cm47XG5cbiAgICAgIHZhciBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBJbml0aWFsaXplIHRoZSBET00vRmFicmljIGVsZW1lbnRzXG4gICAgICAgIHRoaXMuX2luaXRpYWxpemVET00oZWxlbWVudCk7XG4gICAgICAgIHRoaXMuX2luaXRpYWxpemVJbWFnZSgpO1xuXG4gICAgICAgIC8vIFRoZW4gaW5pdGlhbGl6ZSB0aGUgcGx1Z2luc1xuICAgICAgICB0aGlzLl9pbml0aWFsaXplUGx1Z2lucyhEYXJrcm9vbS5wbHVnaW5zKTtcblxuICAgICAgICAvLyBQdWJsaWMgbWV0aG9kIHRvIGFkanVzdCBpbWFnZSBhY2NvcmRpbmcgdG8gdGhlIGNhbnZhc1xuICAgICAgICB0aGlzLnJlZnJlc2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIEV4ZWN1dGUgYSBjdXN0b20gY2FsbGJhY2sgYWZ0ZXIgaW5pdGlhbGl6YXRpb25cbiAgICAgICAgICB0aGlzLm9wdGlvbnMuaW5pdGlhbGl6ZS5iaW5kKHRoaXMpLmNhbGwoKTtcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcblxuICAgICAgfS5iaW5kKHRoaXMpXG5cbiAgICAgIC8vaW1hZ2UuY3Jvc3NPcmlnaW4gPSAnYW5vbnltb3VzJztcbiAgICAgIGltYWdlLnNyYyA9IGVsZW1lbnQuc3JjO1xuICAgIH0sXG5cbiAgICBzZWxmRGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyRWxlbWVudDtcbiAgICAgIHZhciBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250YWluZXIucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoaW1hZ2UsIGNvbnRhaW5lcik7XG4gICAgICB9XG5cbiAgICAgIGltYWdlLnNyYyA9IHRoaXMuc291cmNlSW1hZ2UudG9EYXRhVVJMKCk7XG4gICAgfSxcblxuICAgIC8vIEFkZCBhYmlsaXR5IHRvIGF0dGFjaCBldmVudCBsaXN0ZW5lciBvbiB0aGUgY29yZSBvYmplY3QuXG4gICAgLy8gSXQgdXNlcyB0aGUgY2FudmFzIGVsZW1lbnQgdG8gcHJvY2VzcyBldmVudHMuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICAgIHZhciBlbCA9IHRoaXMuY2FudmFzLmdldEVsZW1lbnQoKTtcbiAgICAgIGlmIChlbC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjayk7XG4gICAgICB9IGVsc2UgaWYgKGVsLmF0dGFjaEV2ZW50KSB7XG4gICAgICAgIGVsLmF0dGFjaEV2ZW50KCdvbicgKyBldmVudE5hbWUsIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFdmVudDogZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuICAgICAgLy8gVXNlIHRoZSBvbGQgd2F5IG9mIGNyZWF0aW5nIGV2ZW50IHRvIGJlIElFIGNvbXBhdGlibGVcbiAgICAgIC8vIFNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9HdWlkZS9FdmVudHMvQ3JlYXRpbmdfYW5kX3RyaWdnZXJpbmdfZXZlbnRzXG4gICAgICB2YXIgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcbiAgICAgIGV2ZW50LmluaXRFdmVudChldmVudE5hbWUsIHRydWUsIHRydWUpO1xuXG4gICAgICB0aGlzLmNhbnZhcy5nZXRFbGVtZW50KCkuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgfSxcblxuICAgIC8vIEFkanVzdCBpbWFnZSAmIGNhbnZhcyBkaW1lbnNpb24gYWNjb3JkaW5nIHRvIG1pbi9tYXggd2lkdGgvaGVpZ2h0XG4gICAgLy8gYW5kIHJhdGlvIHNwZWNpZmllZCBpbiB0aGUgb3B0aW9ucy5cbiAgICAvLyBUaGlzIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkIGFmdGVyIGVhY2ggaW1hZ2UgdHJhbnNmb3JtYXRpb24uXG4gICAgcmVmcmVzaDogZnVuY3Rpb24gKG5leHQpIHtcbiAgICAgIHZhciBjbG9uZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgY2xvbmUub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9yZXBsYWNlQ3VycmVudEltYWdlKG5ldyBmYWJyaWMuSW1hZ2UoY2xvbmUpKTtcblxuICAgICAgICBpZiAobmV4dCkgbmV4dCgpO1xuICAgICAgfS5iaW5kKHRoaXMpO1xuICAgICAgY2xvbmUuc3JjID0gdGhpcy5zb3VyY2VJbWFnZS50b0RhdGFVUkwoKTtcbiAgICB9LFxuXG4gICAgX3JlcGxhY2VDdXJyZW50SW1hZ2U6IGZ1bmN0aW9uIChuZXdJbWFnZSkge1xuICAgICAgaWYgKHRoaXMuaW1hZ2UpIHtcbiAgICAgICAgdGhpcy5pbWFnZS5yZW1vdmUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5pbWFnZSA9IG5ld0ltYWdlO1xuICAgICAgdGhpcy5pbWFnZS5zZWxlY3RhYmxlID0gZmFsc2U7XG4gICAgICB0aGlzLmltYWdlLmxlZnQgPSB0aGlzLm9wdGlvbnMubGVmdDtcbiAgICAgIHRoaXMuaW1hZ2UudG9wID0gdGhpcy5vcHRpb25zLnRvcDtcblxuICAgICAgLy8gQWRqdXN0IHdpZHRoIG9yIGhlaWdodCBhY2NvcmRpbmcgdG8gc3BlY2lmaWVkIHJhdGlvXG4gICAgICB2YXIgdmlld3BvcnQgPSBEYXJrcm9vbS5VdGlscy5jb21wdXRlSW1hZ2VWaWV3UG9ydCh0aGlzLmltYWdlKTtcbiAgICAgIHZhciBjYW52YXNXaWR0aCA9IHZpZXdwb3J0LndpZHRoO1xuICAgICAgdmFyIGNhbnZhc0hlaWdodCA9IHZpZXdwb3J0LmhlaWdodDtcblxuICAgICAgLy8gaWYgKG51bGwgIT09IHRoaXMub3B0aW9ucy5yYXRpbykge1xuICAgICAgLy8gICB2YXIgY2FudmFzUmF0aW8gPSArdGhpcy5vcHRpb25zLnJhdGlvO1xuICAgICAgLy8gICB2YXIgY3VycmVudFJhdGlvID0gY2FudmFzV2lkdGggLyBjYW52YXNIZWlnaHQ7XG5cbiAgICAgIC8vICAgaWYgKGN1cnJlbnRSYXRpbyA+IGNhbnZhc1JhdGlvKSB7XG4gICAgICAvLyAgICAgY2FudmFzSGVpZ2h0ID0gY2FudmFzV2lkdGggLyBjYW52YXNSYXRpbztcbiAgICAgIC8vICAgfSBlbHNlIGlmIChjdXJyZW50UmF0aW8gPCBjYW52YXNSYXRpbykge1xuICAgICAgLy8gICAgIGNhbnZhc1dpZHRoID0gY2FudmFzSGVpZ2h0ICogY2FudmFzUmF0aW87XG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH1cblxuICAgICAgLy8gLy8gVGhlbiBzY2FsZSB0aGUgaW1hZ2UgdG8gZml0IGludG8gZGltZW5zaW9uIGxpbWl0c1xuICAgICAgLy8gdmFyIHNjYWxlTWluID0gMTtcbiAgICAgIC8vIHZhciBzY2FsZU1heCA9IDE7XG4gICAgICAvLyB2YXIgc2NhbGVYID0gMTtcbiAgICAgIC8vIHZhciBzY2FsZVkgPSAxO1xuXG4gICAgICAvLyBpZiAobnVsbCAhPT0gdGhpcy5vcHRpb25zLm1heFdpZHRoICYmIHRoaXMub3B0aW9ucy5tYXhXaWR0aCA8IGNhbnZhc1dpZHRoKSB7XG4gICAgICAvLyAgIHNjYWxlWCA9ICB0aGlzLm9wdGlvbnMubWF4V2lkdGggLyBjYW52YXNXaWR0aDtcbiAgICAgIC8vIH1cbiAgICAgIC8vIGlmIChudWxsICE9PSB0aGlzLm9wdGlvbnMubWF4SGVpZ2h0ICYmIHRoaXMub3B0aW9ucy5tYXhIZWlnaHQgPCBjYW52YXNIZWlnaHQpIHtcbiAgICAgIC8vICAgc2NhbGVZID0gIHRoaXMub3B0aW9ucy5tYXhIZWlnaHQgLyBjYW52YXNIZWlnaHQ7XG4gICAgICAvLyB9XG4gICAgICAvLyBzY2FsZU1pbiA9IE1hdGgubWluKHNjYWxlWCwgc2NhbGVZKTtcblxuICAgICAgLy8gc2NhbGVYID0gMTtcbiAgICAgIC8vIHNjYWxlWSA9IDE7XG4gICAgICAvLyBpZiAobnVsbCAhPT0gdGhpcy5vcHRpb25zLm1pbldpZHRoICYmIHRoaXMub3B0aW9ucy5taW5XaWR0aCA+IGNhbnZhc1dpZHRoKSB7XG4gICAgICAvLyAgIHNjYWxlWCA9ICB0aGlzLm9wdGlvbnMubWluV2lkdGggLyBjYW52YXNXaWR0aDtcbiAgICAgIC8vIH1cbiAgICAgIC8vIGlmIChudWxsICE9PSB0aGlzLm9wdGlvbnMubWluSGVpZ2h0ICYmIHRoaXMub3B0aW9ucy5taW5IZWlnaHQgPiBjYW52YXNIZWlnaHQpIHtcbiAgICAgIC8vICAgc2NhbGVZID0gIHRoaXMub3B0aW9ucy5taW5IZWlnaHQgLyBjYW52YXNIZWlnaHQ7XG4gICAgICAvLyB9XG4gICAgICAvLyBzY2FsZU1heCA9IE1hdGgubWF4KHNjYWxlWCwgc2NhbGVZKTtcblxuICAgICAgLy8gdmFyIHNjYWxlID0gc2NhbGVNYXggKiBzY2FsZU1pbjsgLy8gb25lIHNob3VsZCBiZSBlcXVhbHMgdG8gMVxuXG4gICAgICAvLyBjYW52YXNXaWR0aCAqPSBzY2FsZTtcbiAgICAgIC8vIGNhbnZhc0hlaWdodCAqPSBzY2FsZTtcblxuICAgICAgLy8gRmluYWxseSBwbGFjZSB0aGUgaW1hZ2UgaW4gdGhlIGNlbnRlciBvZiB0aGUgY2FudmFzXG4gICAgICAvLyB0aGlzLmltYWdlLnNldFNjYWxlWCgxICogc2NhbGUpO1xuICAgICAgLy8gdGhpcy5pbWFnZS5zZXRTY2FsZVkoMSAqIHNjYWxlKTtcbiAgICAgIHRoaXMuY2FudmFzLmFkZCh0aGlzLmltYWdlKTtcbiAgICAgIHRoaXMuY2FudmFzLnNldFdpZHRoKGNhbnZhc1dpZHRoKTtcbiAgICAgIHRoaXMuY2FudmFzLnNldEhlaWdodChjYW52YXNIZWlnaHQpO1xuXG4gICAgICAvLyBSZXNpemUgdGhlIGltYWdlIHRvIGZpdCB0aGUgY2FudmFzXG4gICAgICBpZiAodGhpcy5pbWFnZS5vQ29vcmRzLmJyLnggPCB0aGlzLmNhbnZhcy53aWR0aCkge1xuICAgICAgICB0aGlzLmltYWdlLmxlZnQgPSB0aGlzLmltYWdlLmxlZnQgKyBNYXRoLmNlaWwodGhpcy5jYW52YXMud2lkdGggLSB0aGlzLmltYWdlLm9Db29yZHMuYnIueCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5pbWFnZS5vQ29vcmRzLmJyLnkgPCB0aGlzLmNhbnZhcy5oZWlnaHQpIHtcbiAgICAgICAgdGhpcy5pbWFnZS50b3AgPSB0aGlzLmltYWdlLnRvcCArIE1hdGguY2VpbCh0aGlzLmNhbnZhcy5oZWlnaHQgLSB0aGlzLmltYWdlLm9Db29yZHMuYnIueSk7XG4gICAgICB9XG4gICAgICAvLyB0aGlzLmNhbnZhcy5jZW50ZXJPYmplY3QodGhpcy5pbWFnZSk7XG4gICAgICB0aGlzLmltYWdlLnNldENvb3JkcygpO1xuICAgIH0sXG5cbiAgICAvLyBBcHBseSB0aGUgdHJhbnNmb3JtYXRpb24gb24gdGhlIGN1cnJlbnQgaW1hZ2UgYW5kIHNhdmUgaXQgaW4gdGhlXG4gICAgLy8gdHJhbnNmb3JtYXRpb25zIHN0YWNrIChpbiBvcmRlciB0byByZWNvbnN0aXR1dGUgdGhlIHByZXZpb3VzIHN0YXRlc1xuICAgIC8vIG9mIHRoZSBpbWFnZSkuXG4gICAgYXBwbHlUcmFuc2Zvcm1hdGlvbjogZnVuY3Rpb24gKHRyYW5zZm9ybWF0aW9uKSB7XG4gICAgICB0aGlzLnRyYW5zZm9ybWF0aW9ucy5wdXNoKHRyYW5zZm9ybWF0aW9uKTtcblxuICAgICAgdHJhbnNmb3JtYXRpb24uYXBwbHlUcmFuc2Zvcm1hdGlvbihcbiAgICAgICAgdGhpcy5zb3VyY2VDYW52YXMsXG4gICAgICAgIHRoaXMuc291cmNlSW1hZ2UsXG4gICAgICAgIHRoaXMuX3Bvc3RUcmFuc2Zvcm1hdGlvbi5iaW5kKHRoaXMpXG4gICAgICApO1xuICAgIH0sXG5cbiAgICBfcG9zdFRyYW5zZm9ybWF0aW9uOiBmdW5jdGlvbiAobmV3SW1hZ2UpIHtcbiAgICAgIGlmIChuZXdJbWFnZSlcbiAgICAgICAgdGhpcy5zb3VyY2VJbWFnZSA9IG5ld0ltYWdlO1xuXG4gICAgICB0aGlzLnJlZnJlc2goZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2NvcmU6dHJhbnNmb3JtYXRpb24nKTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfSxcblxuICAgIC8vIEluaXRpYWxpemUgaW1hZ2UgZnJvbSBvcmlnaW5hbCBlbGVtZW50IHBsdXMgcmUtYXBwbHkgZXZlcnlcbiAgICAvLyB0cmFuc2Zvcm1hdGlvbnMuXG4gICAgcmVpbml0aWFsaXplSW1hZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuc291cmNlSW1hZ2UucmVtb3ZlKCk7XG4gICAgICB0aGlzLl9pbml0aWFsaXplSW1hZ2UoKTtcbiAgICAgIHRoaXMuX3BvcFRyYW5zZm9ybWF0aW9uKHRoaXMudHJhbnNmb3JtYXRpb25zLnNsaWNlKCkpXG4gICAgfSxcblxuICAgIF9wb3BUcmFuc2Zvcm1hdGlvbjogZnVuY3Rpb24gKHRyYW5zZm9ybWF0aW9ucykge1xuICAgICAgaWYgKDAgPT09IHRyYW5zZm9ybWF0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdjb3JlOnJlaW5pdGlhbGl6ZWQnKTtcbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHRyYW5zZm9ybWF0aW9uID0gdHJhbnNmb3JtYXRpb25zLnNoaWZ0KCk7XG5cbiAgICAgIHZhciBuZXh0ID0gZnVuY3Rpb24gKG5ld0ltYWdlKSB7XG4gICAgICAgIGlmIChuZXdJbWFnZSkgdGhpcy5zb3VyY2VJbWFnZSA9IG5ld0ltYWdlO1xuICAgICAgICB0aGlzLl9wb3BUcmFuc2Zvcm1hdGlvbih0cmFuc2Zvcm1hdGlvbnMpXG4gICAgICB9O1xuXG4gICAgICB0cmFuc2Zvcm1hdGlvbi5hcHBseVRyYW5zZm9ybWF0aW9uKFxuICAgICAgICB0aGlzLnNvdXJjZUNhbnZhcyxcbiAgICAgICAgdGhpcy5zb3VyY2VJbWFnZSxcbiAgICAgICAgbmV4dC5iaW5kKHRoaXMpXG4gICAgICApO1xuICAgIH0sXG5cbiAgICAvLyBDcmVhdGUgdGhlIERPTSBlbGVtZW50cyBhbmQgaW5zdGFuY2lhdGUgdGhlIEZhYnJpYyBjYW52YXMuXG4gICAgLy8gVGhlIGltYWdlIGVsZW1lbnQgaXMgcmVwbGFjZWQgYnkgYSBuZXcgYGRpdmAgZWxlbWVudC5cbiAgICAvLyBIb3dldmVyIHRoZSBvcmlnaW5hbCBpbWFnZSBpcyByZS1pbmplY3RlZCBpbiBvcmRlciB0byBrZWVwIGEgdHJhY2Ugb2YgaXQuXG4gICAgX2luaXRpYWxpemVET006IGZ1bmN0aW9uIChpbWFnZUVsZW1lbnQpIHtcbiAgICAgIC8vIENvbnRhaW5lclxuICAgICAgdmFyIG1haW5Db250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBtYWluQ29udGFpbmVyRWxlbWVudC5jbGFzc05hbWUgPSAnZGFya3Jvb20tY29udGFpbmVyJztcblxuICAgICAgLy8gVG9vbGJhclxuICAgICAgdmFyIHRvb2xiYXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0b29sYmFyRWxlbWVudC5jbGFzc05hbWUgPSAnZGFya3Jvb20tdG9vbGJhcic7XG4gICAgICBtYWluQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZCh0b29sYmFyRWxlbWVudCk7XG5cbiAgICAgIC8vIFZpZXdwb3J0IGNhbnZhc1xuICAgICAgdmFyIGNhbnZhc0NvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNhbnZhc0NvbnRhaW5lckVsZW1lbnQuY2xhc3NOYW1lID0gJ2Rhcmtyb29tLWltYWdlLWNvbnRhaW5lcic7XG4gICAgICB2YXIgY2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgY2FudmFzQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChjYW52YXNFbGVtZW50KTtcbiAgICAgIG1haW5Db250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGNhbnZhc0NvbnRhaW5lckVsZW1lbnQpO1xuXG4gICAgICAvLyBTb3VyY2UgY2FudmFzXG4gICAgICB2YXIgc291cmNlQ2FudmFzQ29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgc291cmNlQ2FudmFzQ29udGFpbmVyRWxlbWVudC5jbGFzc05hbWUgPSAnZGFya3Jvb20tc291cmNlLWNvbnRhaW5lcic7XG4gICAgICBzb3VyY2VDYW52YXNDb250YWluZXJFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB2YXIgc291cmNlQ2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgc291cmNlQ2FudmFzQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChzb3VyY2VDYW52YXNFbGVtZW50KTtcbiAgICAgIG1haW5Db250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKHNvdXJjZUNhbnZhc0NvbnRhaW5lckVsZW1lbnQpO1xuXG4gICAgICAvLyBPcmlnaW5hbCBpbWFnZVxuICAgICAgaW1hZ2VFbGVtZW50LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG1haW5Db250YWluZXJFbGVtZW50LCBpbWFnZUVsZW1lbnQpO1xuICAgICAgaW1hZ2VFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBtYWluQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChpbWFnZUVsZW1lbnQpO1xuXG4gICAgICAvLyBJbnN0YW5jaWF0ZSBvYmplY3QgZnJvbSBlbGVtZW50c1xuICAgICAgdGhpcy5jb250YWluZXJFbGVtZW50ID0gbWFpbkNvbnRhaW5lckVsZW1lbnQ7XG4gICAgICB0aGlzLm9yaWdpbmFsSW1hZ2VFbGVtZW50ID0gaW1hZ2VFbGVtZW50O1xuXG4gICAgICB0aGlzLnRvb2xiYXIgPSBuZXcgRGFya3Jvb20uVUkuVG9vbGJhcih0b29sYmFyRWxlbWVudCk7XG5cbiAgICAgIHRoaXMuY2FudmFzID0gbmV3IGZhYnJpYy5DYW52YXMoY2FudmFzRWxlbWVudCwge1xuICAgICAgICBzZWxlY3Rpb246IGZhbHNlLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3JcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnNvdXJjZUNhbnZhcyA9IG5ldyBmYWJyaWMuQ2FudmFzKHNvdXJjZUNhbnZhc0VsZW1lbnQsIHtcbiAgICAgICAgc2VsZWN0aW9uOiBmYWxzZSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLm9wdGlvbnMuYmFja2dyb3VuZENvbG9yXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLy8gSW5zdGFuY2lhdGUgdGhlIEZhYnJpYyBpbWFnZSBvYmplY3QuXG4gICAgLy8gVGhlIGltYWdlIGlzIGNyZWF0ZWQgYXMgYSBzdGF0aWMgZWxlbWVudCB3aXRoIG5vIGNvbnRyb2wsXG4gICAgLy8gdGhlbiBpdCBpcyBhZGQgaW4gdGhlIEZhYnJpYyBjYW52YXMgb2JqZWN0LlxuICAgIF9pbml0aWFsaXplSW1hZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuc291cmNlSW1hZ2UgPSBuZXcgZmFicmljLkltYWdlKHRoaXMub3JpZ2luYWxJbWFnZUVsZW1lbnQsIHtcbiAgICAgICAgLy8gU29tZSBvcHRpb25zIHRvIG1ha2UgdGhlIGltYWdlIHN0YXRpY1xuICAgICAgICBzZWxlY3RhYmxlOiBmYWxzZSxcbiAgICAgICAgZXZlbnRlZDogZmFsc2UsXG4gICAgICAgIGxvY2tNb3ZlbWVudFg6IHRydWUsXG4gICAgICAgIGxvY2tNb3ZlbWVudFk6IHRydWUsXG4gICAgICAgIGxvY2tSb3RhdGlvbjogdHJ1ZSxcbiAgICAgICAgbG9ja1NjYWxpbmdYOiB0cnVlLFxuICAgICAgICBsb2NrU2NhbGluZ1k6IHRydWUsXG4gICAgICAgIGxvY2tVbmlTY2FsaW5nOiB0cnVlLFxuICAgICAgICBoYXNDb250cm9sczogZmFsc2UsXG4gICAgICAgIGhhc0JvcmRlcnM6IGZhbHNlLFxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuc291cmNlQ2FudmFzLmFkZCh0aGlzLnNvdXJjZUltYWdlKTtcblxuICAgICAgLy8gQWRqdXN0IHdpZHRoIG9yIGhlaWdodCBhY2NvcmRpbmcgdG8gc3BlY2lmaWVkIHJhdGlvXG4gICAgICB2YXIgdmlld3BvcnQgPSBEYXJrcm9vbS5VdGlscy5jb21wdXRlSW1hZ2VWaWV3UG9ydCh0aGlzLnNvdXJjZUltYWdlKTtcbiAgICAgIHZhciBjYW52YXNXaWR0aCA9IHZpZXdwb3J0LndpZHRoO1xuICAgICAgdmFyIGNhbnZhc0hlaWdodCA9IHZpZXdwb3J0LmhlaWdodDtcblxuICAgICAgdGhpcy5zb3VyY2VDYW52YXMuc2V0V2lkdGgoY2FudmFzV2lkdGgpO1xuICAgICAgdGhpcy5zb3VyY2VDYW52YXMuc2V0SGVpZ2h0KGNhbnZhc0hlaWdodCk7XG4gICAgICB0aGlzLnNvdXJjZUNhbnZhcy5jZW50ZXJPYmplY3QodGhpcy5zb3VyY2VJbWFnZSk7XG4gICAgICB0aGlzLnNvdXJjZUltYWdlLnNldENvb3JkcygpO1xuICAgIH0sXG5cbiAgICAvLyBJbml0aWFsaXplIGV2ZXJ5IHBsdWdpbnMuXG4gICAgLy8gTm90ZSB0aGF0IHBsdWdpbnMgYXJlIGluc3RhbmNpYXRlZCBpbiB0aGUgc2FtZSBvcmRlciB0aGFuIHRoZXlcbiAgICAvLyBhcmUgZGVjbGFyZWQgaW4gdGhlIHBhcmFtZXRlciBvYmplY3QuXG4gICAgX2luaXRpYWxpemVQbHVnaW5zOiBmdW5jdGlvbiAocGx1Z2lucykge1xuICAgICAgZm9yICh2YXIgbmFtZSBpbiBwbHVnaW5zKSB7XG4gICAgICAgIHZhciBwbHVnaW4gPSBwbHVnaW5zW25hbWVdO1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucy5wbHVnaW5zW25hbWVdO1xuXG4gICAgICAgIC8vIFNldHRpbmcgZmFsc2UgaW50byB0aGUgcGx1Z2luIG9wdGlvbnMgd2lsbCBkaXNhYmxlIHRoZSBwbHVnaW5cbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IGZhbHNlKVxuICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgIC8vIEF2b2lkIGFueSBpc3N1ZXMgd2l0aCBfcHJvdG9fXG4gICAgICAgIGlmICghcGx1Z2lucy5oYXNPd25Qcm9wZXJ0eShuYW1lKSlcbiAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICB0aGlzLnBsdWdpbnNbbmFtZV0gPSBuZXcgcGx1Z2luKHRoaXMsIG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBjbGVhckZvY3VzOiBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLnBsdWdpbnMpIHtcbiAgICAgICAgaWYgKGtleSAhPSBpbnN0YW5jZSkge1xuICAgICAgICAgIHRoaXMucGx1Z2luc1trZXldLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxufSkoKTtcbiIsIihmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuRGFya3Jvb20uUGx1Z2luID0gUGx1Z2luO1xuXG4vLyBEZWZpbmUgYSBwbHVnaW4gb2JqZWN0LiBUaGlzIGlzIHRoZSAoYWJzdHJhY3QpIHBhcmVudCBjbGFzcyB3aGljaFxuLy8gaGFzIHRvIGJlIGV4dGVuZGVkIGZvciBlYWNoIHBsdWdpbi5cbmZ1bmN0aW9uIFBsdWdpbihkYXJrcm9vbSwgb3B0aW9ucykge1xuICB0aGlzLmRhcmtyb29tID0gZGFya3Jvb207XG4gIHRoaXMub3B0aW9ucyA9IERhcmtyb29tLlV0aWxzLmV4dGVuZChvcHRpb25zLCB0aGlzLmRlZmF1bHRzKTtcbiAgdGhpcy5pbml0aWFsaXplKCk7XG59XG5cblBsdWdpbi5wcm90b3R5cGUgPSB7XG4gIGRlZmF1bHRzOiB7fSxcbiAgaW5pdGlhbGl6ZTogZnVuY3Rpb24oKSB7IH0sXG4gIGNsZWFyOiBmdW5jdGlvbigpIHsgfVxufVxuXG4vLyBJbnNwaXJlZCBieSBCYWNrYm9uZS5qcyBleHRlbmQgY2FwYWJpbGl0eS5cblBsdWdpbi5leHRlbmQgPSBmdW5jdGlvbihwcm90b1Byb3BzKSB7XG4gIHZhciBwYXJlbnQgPSB0aGlzO1xuICB2YXIgY2hpbGQ7XG5cbiAgaWYgKHByb3RvUHJvcHMgJiYgcHJvdG9Qcm9wcy5oYXNPd25Qcm9wZXJ0eSgnY29uc3RydWN0b3InKSkge1xuICAgIGNoaWxkID0gcHJvdG9Qcm9wcy5jb25zdHJ1Y3RvcjtcbiAgfSBlbHNlIHtcbiAgICBjaGlsZCA9IGZ1bmN0aW9uKCl7IHJldHVybiBwYXJlbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfTtcbiAgfVxuXG4gIERhcmtyb29tLlV0aWxzLmV4dGVuZChjaGlsZCwgcGFyZW50KTtcblxuICB2YXIgU3Vycm9nYXRlID0gZnVuY3Rpb24oKXsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9O1xuICBTdXJyb2dhdGUucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTtcbiAgY2hpbGQucHJvdG90eXBlID0gbmV3IFN1cnJvZ2F0ZTtcblxuICBpZiAocHJvdG9Qcm9wcykgRGFya3Jvb20uVXRpbHMuZXh0ZW5kKGNoaWxkLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG5cbiAgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTtcblxuICByZXR1cm4gY2hpbGQ7XG59XG5cbn0pKCk7XG4iLCIoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbkRhcmtyb29tLlRyYW5zZm9ybWF0aW9uID0gVHJhbnNmb3JtYXRpb247XG5cbmZ1bmN0aW9uIFRyYW5zZm9ybWF0aW9uKG9wdGlvbnMpIHtcbiAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbn1cblxuVHJhbnNmb3JtYXRpb24ucHJvdG90eXBlID0ge1xuICBhcHBseVRyYW5zZm9ybWF0aW9uOiBmdW5jdGlvbihpbWFnZSkgeyAvKiBuby1vcCAqLyAgfVxufVxuXG4vLyBJbnNwaXJlZCBieSBCYWNrYm9uZS5qcyBleHRlbmQgY2FwYWJpbGl0eS5cblRyYW5zZm9ybWF0aW9uLmV4dGVuZCA9IGZ1bmN0aW9uKHByb3RvUHJvcHMpIHtcbiAgdmFyIHBhcmVudCA9IHRoaXM7XG4gIHZhciBjaGlsZDtcblxuICBpZiAocHJvdG9Qcm9wcyAmJiBwcm90b1Byb3BzLmhhc093blByb3BlcnR5KCdjb25zdHJ1Y3RvcicpKSB7XG4gICAgY2hpbGQgPSBwcm90b1Byb3BzLmNvbnN0cnVjdG9yO1xuICB9IGVsc2Uge1xuICAgIGNoaWxkID0gZnVuY3Rpb24oKXsgcmV0dXJuIHBhcmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9O1xuICB9XG5cbiAgRGFya3Jvb20uVXRpbHMuZXh0ZW5kKGNoaWxkLCBwYXJlbnQpO1xuXG4gIHZhciBTdXJyb2dhdGUgPSBmdW5jdGlvbigpeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH07XG4gIFN1cnJvZ2F0ZS5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlO1xuICBjaGlsZC5wcm90b3R5cGUgPSBuZXcgU3Vycm9nYXRlO1xuXG4gIGlmIChwcm90b1Byb3BzKSBEYXJrcm9vbS5VdGlscy5leHRlbmQoY2hpbGQucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcblxuICBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlO1xuXG4gIHJldHVybiBjaGlsZDtcbn1cblxufSkoKTtcbiIsIihmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuRGFya3Jvb20uVUkgPSB7XG4gIFRvb2xiYXI6IFRvb2xiYXIsXG4gIEJ1dHRvbkdyb3VwOiBCdXR0b25Hcm91cCxcbiAgQnV0dG9uOiBCdXR0b24sXG59O1xuXG4vLyBUb29sYmFyIG9iamVjdC5cbmZ1bmN0aW9uIFRvb2xiYXIoZWxlbWVudCkge1xuICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xufVxuXG5Ub29sYmFyLnByb3RvdHlwZSA9IHtcbiAgY3JlYXRlQnV0dG9uR3JvdXA6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICB2YXIgYnV0dG9uR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidXR0b25Hcm91cC5jbGFzc05hbWUgPSAnZGFya3Jvb20tYnV0dG9uLWdyb3VwJztcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uR3JvdXApO1xuXG4gICAgcmV0dXJuIG5ldyBCdXR0b25Hcm91cChidXR0b25Hcm91cCk7XG4gIH1cbn07XG5cbi8vIEJ1dHRvbkdyb3VwIG9iamVjdC5cbmZ1bmN0aW9uIEJ1dHRvbkdyb3VwKGVsZW1lbnQpIHtcbiAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbn1cblxuQnV0dG9uR3JvdXAucHJvdG90eXBlID0ge1xuICBjcmVhdGVCdXR0b246IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICBpbWFnZTogJ2hlbHAnLFxuICAgICAgdHlwZTogJ2RlZmF1bHQnLFxuICAgICAgZ3JvdXA6ICdkZWZhdWx0JyxcbiAgICAgIGhpZGU6IGZhbHNlLFxuICAgICAgZGlzYWJsZWQ6IGZhbHNlXG4gICAgfTtcblxuICAgIG9wdGlvbnMgPSBEYXJrcm9vbS5VdGlscy5leHRlbmQob3B0aW9ucywgZGVmYXVsdHMpO1xuXG4gICAgdmFyIGJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b25FbGVtZW50LnR5cGUgPSAnYnV0dG9uJztcbiAgICBidXR0b25FbGVtZW50LmNsYXNzTmFtZSA9ICdkYXJrcm9vbS1idXR0b24gZGFya3Jvb20tYnV0dG9uLScgKyBvcHRpb25zLnR5cGU7XG4gICAgYnV0dG9uRWxlbWVudC5pbm5lckhUTUwgPSAnPHN2ZyBjbGFzcz1cImRhcmtyb29tLWljb25cIj48dXNlIHhsaW5rOmhyZWY9XCIjJyArIG9wdGlvbnMuaW1hZ2UgKyAnXCIgLz48L3N2Zz4nO1xuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChidXR0b25FbGVtZW50KTtcblxuICAgIHZhciBidXR0b24gPSBuZXcgQnV0dG9uKGJ1dHRvbkVsZW1lbnQpO1xuICAgIGJ1dHRvbi5oaWRlKG9wdGlvbnMuaGlkZSk7XG4gICAgYnV0dG9uLmRpc2FibGUob3B0aW9ucy5kaXNhYmxlZCk7XG5cbiAgICByZXR1cm4gYnV0dG9uO1xuICB9XG59XG5cbi8vIEJ1dHRvbiBvYmplY3QuXG5mdW5jdGlvbiBCdXR0b24oZWxlbWVudCkge1xuICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xufVxuXG5CdXR0b24ucHJvdG90eXBlID0ge1xuICBhZGRFdmVudExpc3RlbmVyOiBmdW5jdGlvbihldmVudE5hbWUsIGxpc3RlbmVyKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKXtcbiAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50LmF0dGFjaEV2ZW50KSB7XG4gICAgICB0aGlzLmVsZW1lbnQuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50TmFtZSwgbGlzdGVuZXIpO1xuICAgIH1cbiAgfSxcbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24oZXZlbnROYW1lLCBsaXN0ZW5lcikge1xuICAgIGlmICh0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcil7XG4gICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyKTtcbiAgICB9XG4gIH0sXG4gIGFjdGl2ZTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICBpZiAodmFsdWUpXG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZGFya3Jvb20tYnV0dG9uLWFjdGl2ZScpO1xuICAgIGVsc2VcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrcm9vbS1idXR0b24tYWN0aXZlJyk7XG4gIH0sXG4gIGhpZGU6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlKVxuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Rhcmtyb29tLWJ1dHRvbi1oaWRkZW4nKTtcbiAgICBlbHNlXG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZGFya3Jvb20tYnV0dG9uLWhpZGRlbicpO1xuICB9LFxuICBkaXNhYmxlOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHRoaXMuZWxlbWVudC5kaXNhYmxlZCA9ICh2YWx1ZSkgPyB0cnVlIDogZmFsc2U7XG4gIH1cbn07XG5cbn0pKCk7XG4iLCIoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbkRhcmtyb29tLlV0aWxzID0ge1xuICBleHRlbmQ6IGV4dGVuZCxcbiAgY29tcHV0ZUltYWdlVmlld1BvcnQ6IGNvbXB1dGVJbWFnZVZpZXdQb3J0LFxufTtcblxuXG4vLyBVdGlsaXR5IG1ldGhvZCB0byBlYXNpbHkgZXh0ZW5kIG9iamVjdHMuXG5mdW5jdGlvbiBleHRlbmQoYiwgYSkge1xuICB2YXIgcHJvcDtcbiAgaWYgKGIgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBhO1xuICB9XG4gIGZvciAocHJvcCBpbiBhKSB7XG4gICAgaWYgKGEuaGFzT3duUHJvcGVydHkocHJvcCkgJiYgYi5oYXNPd25Qcm9wZXJ0eShwcm9wKSA9PT0gZmFsc2UpIHtcbiAgICAgIGJbcHJvcF0gPSBhW3Byb3BdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYjtcbn1cblxuZnVuY3Rpb24gY29tcHV0ZUltYWdlVmlld1BvcnQoaW1hZ2UpIHtcbiAgcmV0dXJuIHtcbiAgICBoZWlnaHQ6IE1hdGguYWJzKGltYWdlLmdldFdpZHRoKCkgKiAoTWF0aC5zaW4oaW1hZ2UuZ2V0QW5nbGUoKSAqIE1hdGguUEkvMTgwKSkpICsgTWF0aC5hYnMoaW1hZ2UuZ2V0SGVpZ2h0KCkgKiAoTWF0aC5jb3MoaW1hZ2UuZ2V0QW5nbGUoKSAqIE1hdGguUEkvMTgwKSkpLFxuICAgIHdpZHRoOiBNYXRoLmFicyhpbWFnZS5nZXRIZWlnaHQoKSAqIChNYXRoLnNpbihpbWFnZS5nZXRBbmdsZSgpICogTWF0aC5QSS8xODApKSkgKyBNYXRoLmFicyhpbWFnZS5nZXRXaWR0aCgpICogKE1hdGguY29zKGltYWdlLmdldEFuZ2xlKCkgKiBNYXRoLlBJLzE4MCkpKSxcbiAgfVxufVxuXG59KSgpO1xuIiwiOyhmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCBEYXJrcm9vbSwgZmFicmljKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBEYXJrcm9vbS5wbHVnaW5zWydoaXN0b3J5J10gPSBEYXJrcm9vbS5QbHVnaW4uZXh0ZW5kKHtcbiAgICB1bmRvVHJhbnNmb3JtYXRpb25zOiBbXSxcblxuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uIEluaXREYXJrcm9vbUhpc3RvcnlQbHVnaW4oKSB7XG4gICAgICB0aGlzLl9pbml0QnV0dG9ucygpO1xuXG4gICAgICB0aGlzLmRhcmtyb29tLmFkZEV2ZW50TGlzdGVuZXIoJ2NvcmU6dHJhbnNmb3JtYXRpb24nLCB0aGlzLl9vblRyYW5mb3JtYXRpb25BcHBsaWVkLmJpbmQodGhpcykpO1xuICAgIH0sXG5cbiAgICB1bmRvOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLmRhcmtyb29tLnRyYW5zZm9ybWF0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgbGFzdFRyYW5zZm9ybWF0aW9uID0gdGhpcy5kYXJrcm9vbS50cmFuc2Zvcm1hdGlvbnMucG9wKCk7XG4gICAgICB0aGlzLnVuZG9UcmFuc2Zvcm1hdGlvbnMudW5zaGlmdChsYXN0VHJhbnNmb3JtYXRpb24pO1xuXG4gICAgICB0aGlzLmRhcmtyb29tLnJlaW5pdGlhbGl6ZUltYWdlKCk7XG4gICAgICB0aGlzLl91cGRhdGVCdXR0b25zKCk7XG4gICAgfSxcblxuICAgIHJlZG86IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMudW5kb1RyYW5zZm9ybWF0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgY2FuY2VsVHJhbnNmb3JtYXRpb24gPSB0aGlzLnVuZG9UcmFuc2Zvcm1hdGlvbnMuc2hpZnQoKTtcbiAgICAgIHRoaXMuZGFya3Jvb20udHJhbnNmb3JtYXRpb25zLnB1c2goY2FuY2VsVHJhbnNmb3JtYXRpb24pO1xuXG4gICAgICB0aGlzLmRhcmtyb29tLnJlaW5pdGlhbGl6ZUltYWdlKCk7XG4gICAgICB0aGlzLl91cGRhdGVCdXR0b25zKCk7XG4gICAgfSxcblxuICAgIF9pbml0QnV0dG9uczogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgYnV0dG9uR3JvdXAgPSB0aGlzLmRhcmtyb29tLnRvb2xiYXIuY3JlYXRlQnV0dG9uR3JvdXAoKTtcblxuICAgICAgdGhpcy5iYWNrQnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcbiAgICAgICAgaW1hZ2U6ICd1bmRvJyxcbiAgICAgICAgZGlzYWJsZWQ6IHRydWVcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmZvcndhcmRCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xuICAgICAgICBpbWFnZTogJ3JlZG8nLFxuICAgICAgICBkaXNhYmxlZDogdHJ1ZVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuYmFja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudW5kby5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMuZm9yd2FyZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucmVkby5iaW5kKHRoaXMpKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIF91cGRhdGVCdXR0b25zOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuYmFja0J1dHRvbi5kaXNhYmxlKCh0aGlzLmRhcmtyb29tLnRyYW5zZm9ybWF0aW9ucy5sZW5ndGggPT09IDApKVxuICAgICAgdGhpcy5mb3J3YXJkQnV0dG9uLmRpc2FibGUoKHRoaXMudW5kb1RyYW5zZm9ybWF0aW9ucy5sZW5ndGggPT09IDApKVxuICAgIH0sXG5cbiAgICBfb25UcmFuZm9ybWF0aW9uQXBwbGllZDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnVuZG9UcmFuc2Zvcm1hdGlvbnMgPSBbXTtcbiAgICAgIHRoaXMuX3VwZGF0ZUJ1dHRvbnMoKTtcbiAgICB9XG4gIH0pO1xufSkod2luZG93LCBkb2N1bWVudCwgRGFya3Jvb20sIGZhYnJpYyk7XG4iLCIoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBSb3RhdGlvbiA9IERhcmtyb29tLlRyYW5zZm9ybWF0aW9uLmV4dGVuZCh7XG4gIGFwcGx5VHJhbnNmb3JtYXRpb246IGZ1bmN0aW9uKGNhbnZhcywgaW1hZ2UsIG5leHQpIHtcbiAgICB2YXIgYW5nbGUgPSAoaW1hZ2UuZ2V0QW5nbGUoKSArIHRoaXMub3B0aW9ucy5hbmdsZSkgJSAzNjA7XG4gICAgaW1hZ2Uucm90YXRlKGFuZ2xlKTtcblxuICAgIHZhciB3aWR0aCwgaGVpZ2h0O1xuICAgIGhlaWdodCA9IE1hdGguYWJzKGltYWdlLmdldFdpZHRoKCkqKE1hdGguc2luKGFuZ2xlKk1hdGguUEkvMTgwKSkpK01hdGguYWJzKGltYWdlLmdldEhlaWdodCgpKihNYXRoLmNvcyhhbmdsZSpNYXRoLlBJLzE4MCkpKTtcbiAgICB3aWR0aCA9IE1hdGguYWJzKGltYWdlLmdldEhlaWdodCgpKihNYXRoLnNpbihhbmdsZSpNYXRoLlBJLzE4MCkpKStNYXRoLmFicyhpbWFnZS5nZXRXaWR0aCgpKihNYXRoLmNvcyhhbmdsZSpNYXRoLlBJLzE4MCkpKTtcblxuICAgIGNhbnZhcy5zZXRXaWR0aCh3aWR0aCk7XG4gICAgY2FudmFzLnNldEhlaWdodChoZWlnaHQpO1xuXG4gICAgY2FudmFzLmNlbnRlck9iamVjdChpbWFnZSk7XG4gICAgaW1hZ2Uuc2V0Q29vcmRzKCk7XG4gICAgY2FudmFzLnJlbmRlckFsbCgpO1xuXG4gICAgbmV4dCgpO1xuICB9XG59KTtcblxuRGFya3Jvb20ucGx1Z2luc1sncm90YXRlJ10gPSBEYXJrcm9vbS5QbHVnaW4uZXh0ZW5kKHtcblxuICBpbml0aWFsaXplOiBmdW5jdGlvbiBJbml0RGFya3Jvb21Sb3RhdGVQbHVnaW4oKSB7XG4gICAgdmFyIGJ1dHRvbkdyb3VwID0gdGhpcy5kYXJrcm9vbS50b29sYmFyLmNyZWF0ZUJ1dHRvbkdyb3VwKCk7XG5cbiAgICB2YXIgbGVmdEJ1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XG4gICAgICBpbWFnZTogJ3JvdGF0ZS1sZWZ0J1xuICAgIH0pO1xuXG4gICAgdmFyIHJpZ2h0QnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcbiAgICAgIGltYWdlOiAncm90YXRlLXJpZ2h0J1xuICAgIH0pO1xuXG4gICAgbGVmdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucm90YXRlTGVmdC5iaW5kKHRoaXMpKTtcbiAgICByaWdodEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucm90YXRlUmlnaHQuYmluZCh0aGlzKSk7XG4gIH0sXG5cbiAgcm90YXRlTGVmdDogZnVuY3Rpb24gcm90YXRlTGVmdCgpIHtcbiAgICB0aGlzLnJvdGF0ZSgtOTApO1xuICB9LFxuXG4gIHJvdGF0ZVJpZ2h0OiBmdW5jdGlvbiByb3RhdGVSaWdodCgpIHtcbiAgICB0aGlzLnJvdGF0ZSg5MCk7XG4gIH0sXG5cbiAgcm90YXRlOiBmdW5jdGlvbiByb3RhdGUoYW5nbGUpIHtcbiAgICB0aGlzLmRhcmtyb29tLm9wdGlvbnMubGVmdCA9IDA7XG4gICAgdGhpcy5kYXJrcm9vbS5vcHRpb25zLnRvcCA9IDA7XG4gICAgdGhpcy5kYXJrcm9vbS5hcHBseVRyYW5zZm9ybWF0aW9uKFxuICAgICAgbmV3IFJvdGF0aW9uKHthbmdsZTogYW5nbGV9KVxuICAgICk7XG4gIH1cblxufSk7XG5cbn0pKCk7XG4iLCIoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBDcm9wID0gRGFya3Jvb20uVHJhbnNmb3JtYXRpb24uZXh0ZW5kKHtcbiAgYXBwbHlUcmFuc2Zvcm1hdGlvbjogZnVuY3Rpb24oY2FudmFzLCBpbWFnZSwgbmV4dCkge1xuICAgIC8vIFNuYXBzaG90IHRoZSBpbWFnZSBkZWxpbWl0ZWQgYnkgdGhlIGNyb3Agem9uZVxuICAgIHZhciBzbmFwc2hvdCA9IG5ldyBJbWFnZSgpO1xuICAgIHNuYXBzaG90Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gVmFsaWRhdGUgaW1hZ2VcbiAgICAgIGlmIChoZWlnaHQgPCAxIHx8IHdpZHRoIDwgMSlcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgICB2YXIgaW1nSW5zdGFuY2UgPSBuZXcgZmFicmljLkltYWdlKHRoaXMsIHtcbiAgICAgICAgLy8gb3B0aW9ucyB0byBtYWtlIHRoZSBpbWFnZSBzdGF0aWNcbiAgICAgICAgc2VsZWN0YWJsZTogZmFsc2UsXG4gICAgICAgIGV2ZW50ZWQ6IGZhbHNlLFxuICAgICAgICBsb2NrTW92ZW1lbnRYOiB0cnVlLFxuICAgICAgICBsb2NrTW92ZW1lbnRZOiB0cnVlLFxuICAgICAgICBsb2NrUm90YXRpb246IHRydWUsXG4gICAgICAgIGxvY2tTY2FsaW5nWDogdHJ1ZSxcbiAgICAgICAgbG9ja1NjYWxpbmdZOiB0cnVlLFxuICAgICAgICBsb2NrVW5pU2NhbGluZzogdHJ1ZSxcbiAgICAgICAgaGFzQ29udHJvbHM6IGZhbHNlLFxuICAgICAgICBoYXNCb3JkZXJzOiBmYWxzZVxuICAgICAgfSk7XG5cbiAgICAgIHZhciB3aWR0aCA9IHRoaXMud2lkdGg7XG4gICAgICB2YXIgaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG5cbiAgICAgIC8vIFVwZGF0ZSBjYW52YXMgc2l6ZVxuICAgICAgY2FudmFzLnNldFdpZHRoKHdpZHRoKTtcbiAgICAgIGNhbnZhcy5zZXRIZWlnaHQoaGVpZ2h0KTtcblxuICAgICAgLy8gQWRkIGltYWdlXG4gICAgICBpbWFnZS5yZW1vdmUoKTtcbiAgICAgIGNhbnZhcy5hZGQoaW1nSW5zdGFuY2UpO1xuXG4gICAgICBuZXh0KGltZ0luc3RhbmNlKTtcbiAgICB9O1xuXG4gICAgdmFyIHZpZXdwb3J0ID0gRGFya3Jvb20uVXRpbHMuY29tcHV0ZUltYWdlVmlld1BvcnQoaW1hZ2UpO1xuICAgIHZhciBpbWFnZVdpZHRoID0gdmlld3BvcnQud2lkdGg7XG4gICAgdmFyIGltYWdlSGVpZ2h0ID0gdmlld3BvcnQuaGVpZ2h0O1xuXG4gICAgdmFyIGxlZnQgPSB0aGlzLm9wdGlvbnMubGVmdCAqIGltYWdlV2lkdGg7XG4gICAgdmFyIHRvcCA9IHRoaXMub3B0aW9ucy50b3AgKiBpbWFnZUhlaWdodDtcbiAgICB2YXIgd2lkdGggPSBNYXRoLm1pbih0aGlzLm9wdGlvbnMud2lkdGggKiBpbWFnZVdpZHRoLCBpbWFnZVdpZHRoIC0gbGVmdCk7XG4gICAgdmFyIGhlaWdodCA9IE1hdGgubWluKHRoaXMub3B0aW9ucy5oZWlnaHQgKiBpbWFnZUhlaWdodCwgaW1hZ2VIZWlnaHQgLSB0b3ApO1xuXG4gICAgc25hcHNob3Quc3JjID0gY2FudmFzLnRvRGF0YVVSTCh7XG4gICAgICBsZWZ0OiBsZWZ0LFxuICAgICAgdG9wOiB0b3AsXG4gICAgICB3aWR0aDogd2lkdGgsXG4gICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICB9KTtcbiAgfVxufSk7XG5cbnZhciBDcm9wWm9uZSA9IGZhYnJpYy51dGlsLmNyZWF0ZUNsYXNzKGZhYnJpYy5SZWN0LCB7XG4gIF9yZW5kZXI6IGZ1bmN0aW9uKGN0eCkge1xuICAgIHRoaXMuY2FsbFN1cGVyKCdfcmVuZGVyJywgY3R4KTtcblxuICAgIHZhciBjYW52YXMgPSBjdHguY2FudmFzO1xuICAgIHZhciBkYXNoV2lkdGggPSA3O1xuXG4gICAgLy8gU2V0IG9yaWdpbmFsIHNjYWxlXG4gICAgdmFyIGZsaXBYID0gdGhpcy5mbGlwWCA/IC0xIDogMTtcbiAgICB2YXIgZmxpcFkgPSB0aGlzLmZsaXBZID8gLTEgOiAxO1xuICAgIHZhciBzY2FsZVggPSBmbGlwWCAvIHRoaXMuc2NhbGVYO1xuICAgIHZhciBzY2FsZVkgPSBmbGlwWSAvIHRoaXMuc2NhbGVZO1xuXG4gICAgY3R4LnNjYWxlKHNjYWxlWCwgc2NhbGVZKTtcblxuICAgIC8vIE92ZXJsYXkgcmVuZGVyaW5nXG4gICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDAsIDAsIDAsIDAuNSknO1xuICAgIHRoaXMuX3JlbmRlck92ZXJsYXkoY3R4KTtcblxuICAgIC8vIFNldCBkYXNoZWQgYm9yZGVyc1xuICAgIGlmIChjdHguc2V0TGluZURhc2ggIT09IHVuZGVmaW5lZClcbiAgICAgIGN0eC5zZXRMaW5lRGFzaChbZGFzaFdpZHRoLCBkYXNoV2lkdGhdKTtcbiAgICBlbHNlIGlmIChjdHgubW96RGFzaCAhPT0gdW5kZWZpbmVkKVxuICAgICAgY3R4Lm1vekRhc2ggPSBbZGFzaFdpZHRoLCBkYXNoV2lkdGhdO1xuXG4gICAgLy8gRmlyc3QgbGluZXMgcmVuZGVyaW5nIHdpdGggYmxhY2tcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSAncmdiYSgwLCAwLCAwLCAwLjIpJztcbiAgICB0aGlzLl9yZW5kZXJCb3JkZXJzKGN0eCk7XG4gICAgdGhpcy5fcmVuZGVyR3JpZChjdHgpO1xuXG4gICAgLy8gUmUgcmVuZGVyIGxpbmVzIGluIHdoaXRlXG4gICAgY3R4LmxpbmVEYXNoT2Zmc2V0ID0gZGFzaFdpZHRoO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCknO1xuICAgIHRoaXMuX3JlbmRlckJvcmRlcnMoY3R4KTtcbiAgICB0aGlzLl9yZW5kZXJHcmlkKGN0eCk7XG5cbiAgICAvLyBSZXNldCBzY2FsZVxuICAgIGN0eC5zY2FsZSgxL3NjYWxlWCwgMS9zY2FsZVkpO1xuICB9LFxuXG4gIF9yZW5kZXJPdmVybGF5OiBmdW5jdGlvbihjdHgpIHtcbiAgICB2YXIgY2FudmFzID0gY3R4LmNhbnZhcztcblxuICAgIC8vXG4gICAgLy8gICAgeDAgICAgeDEgICAgICAgIHgyICAgICAgeDNcbiAgICAvLyB5MCArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tK1xuICAgIC8vICAgIHxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFx8XG4gICAgLy8gICAgfFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXHxcbiAgICAvLyB5MSArLS0tLS0tKy0tLS0tLS0tLSstLS0tLS0tK1xuICAgIC8vICAgIHxcXFxcXFxcXFxcXFx8ICAgICAgICAgfFxcXFxcXFxcXFxcXFxcfFxuICAgIC8vICAgIHxcXFxcXFxcXFxcXFx8ICAgIDAgICAgfFxcXFxcXFxcXFxcXFxcfFxuICAgIC8vICAgIHxcXFxcXFxcXFxcXFx8ICAgICAgICAgfFxcXFxcXFxcXFxcXFxcfFxuICAgIC8vIHkyICstLS0tLS0rLS0tLS0tLS0tKy0tLS0tLS0rXG4gICAgLy8gICAgfFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXHxcbiAgICAvLyAgICB8XFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcfFxuICAgIC8vIHkzICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rXG4gICAgLy9cblxuICAgIHZhciB4MCA9IE1hdGguY2VpbCgtdGhpcy5nZXRXaWR0aCgpIC8gMiAtIHRoaXMuZ2V0TGVmdCgpKTtcbiAgICB2YXIgeDEgPSBNYXRoLmNlaWwoLXRoaXMuZ2V0V2lkdGgoKSAvIDIpO1xuICAgIHZhciB4MiA9IE1hdGguY2VpbCh0aGlzLmdldFdpZHRoKCkgLyAyKTtcbiAgICB2YXIgeDMgPSBNYXRoLmNlaWwodGhpcy5nZXRXaWR0aCgpIC8gMiArIChjYW52YXMud2lkdGggLSB0aGlzLmdldFdpZHRoKCkgLSB0aGlzLmdldExlZnQoKSkpO1xuXG4gICAgdmFyIHkwID0gTWF0aC5jZWlsKC10aGlzLmdldEhlaWdodCgpIC8gMiAtIHRoaXMuZ2V0VG9wKCkpO1xuICAgIHZhciB5MSA9IE1hdGguY2VpbCgtdGhpcy5nZXRIZWlnaHQoKSAvIDIpO1xuICAgIHZhciB5MiA9IE1hdGguY2VpbCh0aGlzLmdldEhlaWdodCgpIC8gMik7XG4gICAgdmFyIHkzID0gTWF0aC5jZWlsKHRoaXMuZ2V0SGVpZ2h0KCkgLyAyICsgKGNhbnZhcy5oZWlnaHQgLSB0aGlzLmdldEhlaWdodCgpIC0gdGhpcy5nZXRUb3AoKSkpO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIFxuICAgIC8vIERyYXcgb3V0ZXIgcmVjdGFuZ2xlLlxuICAgIC8vIE51bWJlcnMgYXJlICsvLTEgc28gdGhhdCBvdmVybGF5IGVkZ2VzIGRvbid0IGdldCBibHVycnkuXG4gICAgY3R4Lm1vdmVUbyh4MCAtIDEsIHkwIC0gMSk7XG4gICAgY3R4LmxpbmVUbyh4MyArIDEsIHkwIC0gMSk7XG4gICAgY3R4LmxpbmVUbyh4MyArIDEsIHkzICsgMSk7XG4gICAgY3R4LmxpbmVUbyh4MCAtIDEsIHkzIC0gMSk7XG4gICAgY3R4LmxpbmVUbyh4MCAtIDEsIHkwIC0gMSk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgLy8gRHJhdyBpbm5lciByZWN0YW5nbGUuXG4gICAgY3R4Lm1vdmVUbyh4MSwgeTEpO1xuICAgIGN0eC5saW5lVG8oeDEsIHkyKTtcbiAgICBjdHgubGluZVRvKHgyLCB5Mik7XG4gICAgY3R4LmxpbmVUbyh4MiwgeTEpO1xuICAgIGN0eC5saW5lVG8oeDEsIHkxKTtcblxuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBjdHguZmlsbCgpO1xuICB9LFxuXG4gIF9yZW5kZXJCb3JkZXJzOiBmdW5jdGlvbihjdHgpIHtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbygtdGhpcy5nZXRXaWR0aCgpLzIsIC10aGlzLmdldEhlaWdodCgpLzIpOyAvLyB1cHBlciBsZWZ0XG4gICAgY3R4LmxpbmVUbyh0aGlzLmdldFdpZHRoKCkvMiwgLXRoaXMuZ2V0SGVpZ2h0KCkvMik7IC8vIHVwcGVyIHJpZ2h0XG4gICAgY3R4LmxpbmVUbyh0aGlzLmdldFdpZHRoKCkvMiwgdGhpcy5nZXRIZWlnaHQoKS8yKTsgLy8gZG93biByaWdodFxuICAgIGN0eC5saW5lVG8oLXRoaXMuZ2V0V2lkdGgoKS8yLCB0aGlzLmdldEhlaWdodCgpLzIpOyAvLyBkb3duIGxlZnRcbiAgICBjdHgubGluZVRvKC10aGlzLmdldFdpZHRoKCkvMiwgLXRoaXMuZ2V0SGVpZ2h0KCkvMik7IC8vIHVwcGVyIGxlZnRcbiAgICBjdHguc3Ryb2tlKCk7XG4gIH0sXG5cbiAgX3JlbmRlckdyaWQ6IGZ1bmN0aW9uKGN0eCkge1xuICAgIC8vIFZlcnRpY2FsIGxpbmVzXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oLXRoaXMuZ2V0V2lkdGgoKS8yICsgMS8zICogdGhpcy5nZXRXaWR0aCgpLCAtdGhpcy5nZXRIZWlnaHQoKS8yKTtcbiAgICBjdHgubGluZVRvKC10aGlzLmdldFdpZHRoKCkvMiArIDEvMyAqIHRoaXMuZ2V0V2lkdGgoKSwgdGhpcy5nZXRIZWlnaHQoKS8yKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oLXRoaXMuZ2V0V2lkdGgoKS8yICsgMi8zICogdGhpcy5nZXRXaWR0aCgpLCAtdGhpcy5nZXRIZWlnaHQoKS8yKTtcbiAgICBjdHgubGluZVRvKC10aGlzLmdldFdpZHRoKCkvMiArIDIvMyAqIHRoaXMuZ2V0V2lkdGgoKSwgdGhpcy5nZXRIZWlnaHQoKS8yKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgLy8gSG9yaXpvbnRhbCBsaW5lc1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKC10aGlzLmdldFdpZHRoKCkvMiwgLXRoaXMuZ2V0SGVpZ2h0KCkvMiArIDEvMyAqIHRoaXMuZ2V0SGVpZ2h0KCkpO1xuICAgIGN0eC5saW5lVG8odGhpcy5nZXRXaWR0aCgpLzIsIC10aGlzLmdldEhlaWdodCgpLzIgKyAxLzMgKiB0aGlzLmdldEhlaWdodCgpKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oLXRoaXMuZ2V0V2lkdGgoKS8yLCAtdGhpcy5nZXRIZWlnaHQoKS8yICsgMi8zICogdGhpcy5nZXRIZWlnaHQoKSk7XG4gICAgY3R4LmxpbmVUbyh0aGlzLmdldFdpZHRoKCkvMiwgLXRoaXMuZ2V0SGVpZ2h0KCkvMiArIDIvMyAqIHRoaXMuZ2V0SGVpZ2h0KCkpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgfVxufSk7XG5cbkRhcmtyb29tLnBsdWdpbnNbJ2Nyb3AnXSA9IERhcmtyb29tLlBsdWdpbi5leHRlbmQoe1xuICAvLyBJbml0IHBvaW50XG4gIHN0YXJ0WDogbnVsbCxcbiAgc3RhcnRZOiBudWxsLFxuXG4gIC8vIEtleWNyb3BcbiAgaXNLZXlDcm9waW5nOiBmYWxzZSxcbiAgaXNLZXlMZWZ0OiBmYWxzZSxcbiAgaXNLZXlVcDogZmFsc2UsXG5cbiAgZGVmYXVsdHM6IHtcbiAgICAvLyBtaW4gY3JvcCBkaW1lbnNpb25cbiAgICBtaW5IZWlnaHQ6IDEsXG4gICAgbWluV2lkdGg6IDEsXG4gICAgLy8gZW5zdXJlIGNyb3AgcmF0aW9cbiAgICByYXRpbzogbnVsbCxcbiAgICAvLyBxdWljayBjcm9wIGZlYXR1cmUgKHNldCBhIGtleSBjb2RlIHRvIGVuYWJsZSBpdClcbiAgICBxdWlja0Nyb3BLZXk6IGZhbHNlXG4gIH0sXG5cbiAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gSW5pdERhcmtyb29tQ3JvcFBsdWdpbigpIHtcbiAgICB2YXIgYnV0dG9uR3JvdXAgPSB0aGlzLmRhcmtyb29tLnRvb2xiYXIuY3JlYXRlQnV0dG9uR3JvdXAoKTtcblxuICAgIHRoaXMuY3JvcEJ1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XG4gICAgICBpbWFnZTogJ2Nyb3AnXG4gICAgfSk7XG4gICAgdGhpcy5va0J1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XG4gICAgICBpbWFnZTogJ2RvbmUnLFxuICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgaGlkZTogdHJ1ZVxuICAgIH0pO1xuICAgIHRoaXMuY2FuY2VsQnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcbiAgICAgIGltYWdlOiAnY2xvc2UnLFxuICAgICAgdHlwZTogJ2RhbmdlcicsXG4gICAgICBoaWRlOiB0cnVlXG4gICAgfSk7XG5cbiAgICAvLyBCdXR0b25zIGNsaWNrXG4gICAgdGhpcy5jcm9wQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50b2dnbGVDcm9wLmJpbmQodGhpcykpO1xuICAgIHRoaXMub2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNyb3BDdXJyZW50Wm9uZS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucmVsZWFzZUZvY3VzLmJpbmQodGhpcykpO1xuXG4gICAgLy8gQ2FudmFzIGV2ZW50c1xuICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLm9uKCdtb3VzZTpkb3duJywgdGhpcy5vbk1vdXNlRG93bi5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbignbW91c2U6bW92ZScsIHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5kYXJrcm9vbS5jYW52YXMub24oJ21vdXNlOnVwJywgdGhpcy5vbk1vdXNlVXAuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5kYXJrcm9vbS5jYW52YXMub24oJ29iamVjdDptb3ZpbmcnLCB0aGlzLm9uT2JqZWN0TW92aW5nLmJpbmQodGhpcykpO1xuICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLm9uKCdvYmplY3Q6c2NhbGluZycsIHRoaXMub25PYmplY3RTY2FsaW5nLmJpbmQodGhpcykpO1xuXG4gICAgZmFicmljLnV0aWwuYWRkTGlzdGVuZXIoZmFicmljLmRvY3VtZW50LCAna2V5ZG93bicsIHRoaXMub25LZXlEb3duLmJpbmQodGhpcykpO1xuICAgIGZhYnJpYy51dGlsLmFkZExpc3RlbmVyKGZhYnJpYy5kb2N1bWVudCwgJ2tleXVwJywgdGhpcy5vbktleVVwLmJpbmQodGhpcykpO1xuXG4gICAgdGhpcy5kYXJrcm9vbS5hZGRFdmVudExpc3RlbmVyKCdjb3JlOnRyYW5zZm9ybWF0aW9uJywgdGhpcy5yZWxlYXNlRm9jdXMuYmluZCh0aGlzKSk7XG4gIH0sXG5cbiAgY2xlYXI6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmhhc0ZvY3VzKCkpXG4gICAgdGhpcy5yZWxlYXNlRm9jdXMoKTtcbiAgfSxcbiAgLy8gQXZvaWQgY3JvcCB6b25lIHRvIGdvIGJleW9uZCB0aGUgY2FudmFzIGVkZ2VzXG4gIG9uT2JqZWN0TW92aW5nOiBmdW5jdGlvbihldmVudCkge1xuICAgIGlmICghdGhpcy5oYXNGb2N1cygpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGN1cnJlbnRPYmplY3QgPSBldmVudC50YXJnZXQ7XG4gICAgaWYgKGN1cnJlbnRPYmplY3QgIT09IHRoaXMuY3JvcFpvbmUpXG4gICAgICByZXR1cm47XG5cbiAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XG4gICAgdmFyIHggPSBjdXJyZW50T2JqZWN0LmdldExlZnQoKSwgeSA9IGN1cnJlbnRPYmplY3QuZ2V0VG9wKCk7XG4gICAgdmFyIHcgPSBjdXJyZW50T2JqZWN0LmdldFdpZHRoKCksIGggPSBjdXJyZW50T2JqZWN0LmdldEhlaWdodCgpO1xuICAgIHZhciBtYXhYID0gY2FudmFzLmdldFdpZHRoKCkgLSB3O1xuICAgIHZhciBtYXhZID0gY2FudmFzLmdldEhlaWdodCgpIC0gaDtcblxuICAgIGlmICh4IDwgMClcbiAgICAgIGN1cnJlbnRPYmplY3Quc2V0KCdsZWZ0JywgMCk7XG4gICAgaWYgKHkgPCAwKVxuICAgICAgY3VycmVudE9iamVjdC5zZXQoJ3RvcCcsIDApO1xuICAgIGlmICh4ID4gbWF4WClcbiAgICAgIGN1cnJlbnRPYmplY3Quc2V0KCdsZWZ0JywgbWF4WCk7XG4gICAgaWYgKHkgPiBtYXhZKVxuICAgICAgY3VycmVudE9iamVjdC5zZXQoJ3RvcCcsIG1heFkpO1xuXG4gICAgdGhpcy5kYXJrcm9vbS5kaXNwYXRjaEV2ZW50KCdjcm9wOnVwZGF0ZScpO1xuICB9LFxuXG4gIC8vIFByZXZlbnQgY3JvcCB6b25lIGZyb20gZ29pbmcgYmV5b25kIHRoZSBjYW52YXMgZWRnZXMgKGxpa2UgbW91c2VNb3ZlKVxuICBvbk9iamVjdFNjYWxpbmc6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmhhc0ZvY3VzKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcHJldmVudFNjYWxpbmcgPSBmYWxzZTtcbiAgICB2YXIgY3VycmVudE9iamVjdCA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAoY3VycmVudE9iamVjdCAhPT0gdGhpcy5jcm9wWm9uZSlcbiAgICAgIHJldHVybjtcblxuICAgIHZhciBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcbiAgICB2YXIgcG9pbnRlciA9IGNhbnZhcy5nZXRQb2ludGVyKGV2ZW50LmUpO1xuICAgIHZhciB4ID0gcG9pbnRlci54O1xuICAgIHZhciB5ID0gcG9pbnRlci55O1xuXG4gICAgdmFyIG1pblggPSBjdXJyZW50T2JqZWN0LmdldExlZnQoKTtcbiAgICB2YXIgbWluWSA9IGN1cnJlbnRPYmplY3QuZ2V0VG9wKCk7XG4gICAgdmFyIG1heFggPSBjdXJyZW50T2JqZWN0LmdldExlZnQoKSArIGN1cnJlbnRPYmplY3QuZ2V0V2lkdGgoKTtcbiAgICB2YXIgbWF4WSA9IGN1cnJlbnRPYmplY3QuZ2V0VG9wKCkgKyBjdXJyZW50T2JqZWN0LmdldEhlaWdodCgpO1xuXG4gICAgaWYgKG51bGwgIT09IHRoaXMub3B0aW9ucy5yYXRpbykge1xuICAgICAgaWYgKG1pblggPCAwIHx8IG1heFggPiBjYW52YXMuZ2V0V2lkdGgoKSB8fCBtaW5ZIDwgMCB8fCBtYXhZID4gY2FudmFzLmdldEhlaWdodCgpKSB7XG4gICAgICAgIHByZXZlbnRTY2FsaW5nID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWluWCA8IDAgfHwgbWF4WCA+IGNhbnZhcy5nZXRXaWR0aCgpIHx8IHByZXZlbnRTY2FsaW5nKSB7XG4gICAgICB2YXIgbGFzdFNjYWxlWCA9IHRoaXMubGFzdFNjYWxlWCB8fCAxO1xuICAgICAgY3VycmVudE9iamVjdC5zZXRTY2FsZVgobGFzdFNjYWxlWCk7XG4gICAgfVxuICAgIGlmIChtaW5YIDwgMCkge1xuICAgICAgY3VycmVudE9iamVjdC5zZXRMZWZ0KDApO1xuICAgIH1cblxuICAgIGlmIChtaW5ZIDwgMCB8fCBtYXhZID4gY2FudmFzLmdldEhlaWdodCgpIHx8IHByZXZlbnRTY2FsaW5nKSB7XG4gICAgICB2YXIgbGFzdFNjYWxlWSA9IHRoaXMubGFzdFNjYWxlWSB8fCAxO1xuICAgICAgY3VycmVudE9iamVjdC5zZXRTY2FsZVkobGFzdFNjYWxlWSk7XG4gICAgfVxuICAgIGlmIChtaW5ZIDwgMCkge1xuICAgICAgY3VycmVudE9iamVjdC5zZXRUb3AoMCk7XG4gICAgfVxuXG4gICAgaWYgKGN1cnJlbnRPYmplY3QuZ2V0V2lkdGgoKSA8IHRoaXMub3B0aW9ucy5taW5XaWR0aCkge1xuICAgICAgY3VycmVudE9iamVjdC5zY2FsZVRvV2lkdGgodGhpcy5vcHRpb25zLm1pbldpZHRoKTtcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRPYmplY3QuZ2V0SGVpZ2h0KCkgPCB0aGlzLm9wdGlvbnMubWluSGVpZ2h0KSB7XG4gICAgICBjdXJyZW50T2JqZWN0LnNjYWxlVG9IZWlnaHQodGhpcy5vcHRpb25zLm1pbkhlaWdodCk7XG4gICAgfVxuXG4gICAgdGhpcy5sYXN0U2NhbGVYID0gY3VycmVudE9iamVjdC5nZXRTY2FsZVgoKTtcbiAgICB0aGlzLmxhc3RTY2FsZVkgPSBjdXJyZW50T2JqZWN0LmdldFNjYWxlWSgpO1xuXG4gICAgdGhpcy5kYXJrcm9vbS5kaXNwYXRjaEV2ZW50KCdjcm9wOnVwZGF0ZScpO1xuICB9LFxuXG4gIC8vIEluaXQgY3JvcCB6b25lXG4gIG9uTW91c2VEb3duOiBmdW5jdGlvbihldmVudCkge1xuICAgIGlmICghdGhpcy5oYXNGb2N1cygpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xuXG4gICAgLy8gcmVjYWxjdWxhdGUgb2Zmc2V0LCBpbiBjYXNlIGNhbnZhcyB3YXMgbWFuaXB1bGF0ZWQgc2luY2UgbGFzdCBgY2FsY09mZnNldGBcbiAgICBjYW52YXMuY2FsY09mZnNldCgpO1xuICAgIHZhciBwb2ludGVyID0gY2FudmFzLmdldFBvaW50ZXIoZXZlbnQuZSk7XG4gICAgdmFyIHggPSBwb2ludGVyLng7XG4gICAgdmFyIHkgPSBwb2ludGVyLnk7XG4gICAgdmFyIHBvaW50ID0gbmV3IGZhYnJpYy5Qb2ludCh4LCB5KTtcblxuICAgIC8vIENoZWNrIGlmIHVzZXIgd2FudCB0byBzY2FsZSBvciBkcmFnIHRoZSBjcm9wIHpvbmUuXG4gICAgdmFyIGFjdGl2ZU9iamVjdCA9IGNhbnZhcy5nZXRBY3RpdmVPYmplY3QoKTtcbiAgICBpZiAoYWN0aXZlT2JqZWN0ID09PSB0aGlzLmNyb3Bab25lIHx8IHRoaXMuY3JvcFpvbmUuY29udGFpbnNQb2ludChwb2ludCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjYW52YXMuZGlzY2FyZEFjdGl2ZU9iamVjdCgpO1xuICAgIHRoaXMuY3JvcFpvbmUuc2V0V2lkdGgoMCk7XG4gICAgdGhpcy5jcm9wWm9uZS5zZXRIZWlnaHQoMCk7XG4gICAgdGhpcy5jcm9wWm9uZS5zZXRTY2FsZVgoMSk7XG4gICAgdGhpcy5jcm9wWm9uZS5zZXRTY2FsZVkoMSk7XG5cbiAgICB0aGlzLnN0YXJ0WCA9IHg7XG4gICAgdGhpcy5zdGFydFkgPSB5O1xuICB9LFxuXG4gIC8vIEV4dGVuZCBjcm9wIHpvbmVcbiAgb25Nb3VzZU1vdmU6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgLy8gUXVpY2sgY3JvcCBmZWF0dXJlXG4gICAgaWYgKHRoaXMuaXNLZXlDcm9waW5nKVxuICAgICAgcmV0dXJuIHRoaXMub25Nb3VzZU1vdmVLZXlDcm9wKGV2ZW50KTtcblxuICAgIGlmIChudWxsID09PSB0aGlzLnN0YXJ0WCB8fCBudWxsID09PSB0aGlzLnN0YXJ0WSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcbiAgICB2YXIgcG9pbnRlciA9IGNhbnZhcy5nZXRQb2ludGVyKGV2ZW50LmUpO1xuICAgIHZhciB4ID0gcG9pbnRlci54O1xuICAgIHZhciB5ID0gcG9pbnRlci55O1xuXG4gICAgdGhpcy5fcmVuZGVyQ3JvcFpvbmUodGhpcy5zdGFydFgsIHRoaXMuc3RhcnRZLCB4LCB5KTtcbiAgfSxcblxuICBvbk1vdXNlTW92ZUtleUNyb3A6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xuICAgIHZhciB6b25lID0gdGhpcy5jcm9wWm9uZTtcblxuICAgIHZhciBwb2ludGVyID0gY2FudmFzLmdldFBvaW50ZXIoZXZlbnQuZSk7XG4gICAgdmFyIHggPSBwb2ludGVyLng7XG4gICAgdmFyIHkgPSBwb2ludGVyLnk7XG5cbiAgICBpZiAoIXpvbmUubGVmdCB8fCAhem9uZS50b3ApIHtcbiAgICAgIHpvbmUuc2V0VG9wKHkpO1xuICAgICAgem9uZS5zZXRMZWZ0KHgpO1xuICAgIH1cblxuICAgIHRoaXMuaXNLZXlMZWZ0ID0gIHggPCB6b25lLmxlZnQgKyB6b25lLndpZHRoIC8gMiA7XG4gICAgdGhpcy5pc0tleVVwID0geSA8IHpvbmUudG9wICsgem9uZS5oZWlnaHQgLyAyIDtcblxuICAgIHRoaXMuX3JlbmRlckNyb3Bab25lKFxuICAgICAgTWF0aC5taW4oem9uZS5sZWZ0LCB4KSxcbiAgICAgIE1hdGgubWluKHpvbmUudG9wLCB5KSxcbiAgICAgIE1hdGgubWF4KHpvbmUubGVmdCt6b25lLndpZHRoLCB4KSxcbiAgICAgIE1hdGgubWF4KHpvbmUudG9wK3pvbmUuaGVpZ2h0LCB5KVxuICAgICk7XG4gIH0sXG5cbiAgLy8gRmluaXNoIGNyb3Agem9uZVxuICBvbk1vdXNlVXA6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKG51bGwgPT09IHRoaXMuc3RhcnRYIHx8IG51bGwgPT09IHRoaXMuc3RhcnRZKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xuICAgIHRoaXMuY3JvcFpvbmUuc2V0Q29vcmRzKCk7XG4gICAgY2FudmFzLnNldEFjdGl2ZU9iamVjdCh0aGlzLmNyb3Bab25lKTtcbiAgICBjYW52YXMuY2FsY09mZnNldCgpO1xuXG4gICAgdGhpcy5zdGFydFggPSBudWxsO1xuICAgIHRoaXMuc3RhcnRZID0gbnVsbDtcbiAgfSxcblxuICBvbktleURvd246IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKGZhbHNlID09PSB0aGlzLm9wdGlvbnMucXVpY2tDcm9wS2V5IHx8IGV2ZW50LmtleUNvZGUgIT09IHRoaXMub3B0aW9ucy5xdWlja0Nyb3BLZXkgfHwgdGhpcy5pc0tleUNyb3BpbmcpXG4gICAgICByZXR1cm47XG5cbiAgICAvLyBBY3RpdmUgcXVpY2sgY3JvcCBmbG93XG4gICAgdGhpcy5pc0tleUNyb3BpbmcgPSB0cnVlIDtcbiAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5kaXNjYXJkQWN0aXZlT2JqZWN0KCk7XG4gICAgdGhpcy5jcm9wWm9uZS5zZXRXaWR0aCgwKTtcbiAgICB0aGlzLmNyb3Bab25lLnNldEhlaWdodCgwKTtcbiAgICB0aGlzLmNyb3Bab25lLnNldFNjYWxlWCgxKTtcbiAgICB0aGlzLmNyb3Bab25lLnNldFNjYWxlWSgxKTtcbiAgICB0aGlzLmNyb3Bab25lLnNldFRvcCgwKTtcbiAgICB0aGlzLmNyb3Bab25lLnNldExlZnQoMCk7XG4gIH0sXG5cbiAgb25LZXlVcDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoZmFsc2UgPT09IHRoaXMub3B0aW9ucy5xdWlja0Nyb3BLZXkgfHwgZXZlbnQua2V5Q29kZSAhPT0gdGhpcy5vcHRpb25zLnF1aWNrQ3JvcEtleSB8fCAhdGhpcy5pc0tleUNyb3BpbmcpXG4gICAgICByZXR1cm47XG5cbiAgICAvLyBVbmFjdGl2ZSBxdWljayBjcm9wIGZsb3dcbiAgICB0aGlzLmlzS2V5Q3JvcGluZyA9IGZhbHNlO1xuICAgIHRoaXMuc3RhcnRYID0gMTtcbiAgICB0aGlzLnN0YXJ0WSA9IDE7XG4gICAgdGhpcy5vbk1vdXNlVXAoKTtcbiAgfSxcblxuICBzZWxlY3Rab25lOiBmdW5jdGlvbih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBmb3JjZURpbWVuc2lvbikge1xuICAgIGlmICghdGhpcy5oYXNGb2N1cygpKVxuICAgICAgdGhpcy5yZXF1aXJlRm9jdXMoKTtcblxuICAgIGlmICghZm9yY2VEaW1lbnNpb24pIHtcbiAgICAgIHRoaXMuX3JlbmRlckNyb3Bab25lKHgsIHksIHgrd2lkdGgsIHkraGVpZ2h0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jcm9wWm9uZS5zZXQoe1xuICAgICAgICAnbGVmdCc6IHgsXG4gICAgICAgICd0b3AnOiB5LFxuICAgICAgICAnd2lkdGgnOiB3aWR0aCxcbiAgICAgICAgJ2hlaWdodCc6IGhlaWdodFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xuICAgIGNhbnZhcy5icmluZ1RvRnJvbnQodGhpcy5jcm9wWm9uZSk7XG4gICAgdGhpcy5jcm9wWm9uZS5zZXRDb29yZHMoKTtcbiAgICBjYW52YXMuc2V0QWN0aXZlT2JqZWN0KHRoaXMuY3JvcFpvbmUpO1xuICAgIGNhbnZhcy5jYWxjT2Zmc2V0KCk7XG5cbiAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoJ2Nyb3A6dXBkYXRlJyk7XG4gIH0sXG5cbiAgdG9nZ2xlQ3JvcDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLmhhc0ZvY3VzKCkpXG4gICAgICB0aGlzLnJlcXVpcmVGb2N1cygpO1xuICAgIGVsc2VcbiAgICAgIHRoaXMucmVsZWFzZUZvY3VzKCk7XG4gIH0sXG5cbiAgY3JvcEN1cnJlbnRab25lOiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuaGFzRm9jdXMoKSlcbiAgICAgIHJldHVybjtcblxuICAgIC8vIEF2b2lkIGNyb3BpbmcgZW1wdHkgem9uZVxuICAgIGlmICh0aGlzLmNyb3Bab25lLndpZHRoIDwgMSAmJiB0aGlzLmNyb3Bab25lLmhlaWdodCA8IDEpXG4gICAgICByZXR1cm47XG5cbiAgICB2YXIgaW1hZ2UgPSB0aGlzLmRhcmtyb29tLmltYWdlO1xuXG4gICAgLy8gQ29tcHV0ZSBjcm9wIHpvbmUgZGltZW5zaW9uc1xuICAgIHZhciB0b3AgPSB0aGlzLmNyb3Bab25lLmdldFRvcCgpIC0gaW1hZ2UuZ2V0VG9wKCk7XG4gICAgdmFyIGxlZnQgPSB0aGlzLmNyb3Bab25lLmdldExlZnQoKSAtIGltYWdlLmdldExlZnQoKTtcbiAgICB2YXIgd2lkdGggPSB0aGlzLmNyb3Bab25lLmdldFdpZHRoKCk7XG4gICAgdmFyIGhlaWdodCA9IHRoaXMuY3JvcFpvbmUuZ2V0SGVpZ2h0KCk7XG5cbiAgICAvLyBBZGp1c3QgZGltZW5zaW9ucyB0byBpbWFnZSBvbmx5XG4gICAgaWYgKHRvcCA8IDApIHtcbiAgICAgIGhlaWdodCArPSB0b3A7XG4gICAgICB0b3AgPSAwO1xuICAgIH1cblxuICAgIGlmIChsZWZ0IDwgMCkge1xuICAgICAgd2lkdGggKz0gbGVmdDtcbiAgICAgIGxlZnQgPSAwO1xuICAgIH1cblxuICAgIHRoaXMuZGFya3Jvb20ub3B0aW9ucy50b3AgPSAwO1xuICAgIHRoaXMuZGFya3Jvb20ub3B0aW9ucy5sZWZ0ID0gMDtcbiAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5zZXRab29tKDEpO1xuICAgIHRoaXMuZGFya3Jvb20ucGx1Z2lucy56b29tLnVwZGF0ZUJ1dHRvbnMoKTtcbiAgICAvLyBBcHBseSBjcm9wIHRyYW5zZm9ybWF0aW9uLlxuICAgIC8vIE1ha2Ugc3VyZSB0byB1c2UgcmVsYXRpdmUgZGltZW5zaW9uIHNpbmNlIHRoZSBjcm9wIHdpbGwgYmUgYXBwbGllZFxuICAgIC8vIG9uIHRoZSBzb3VyY2UgaW1hZ2UuXG4gICAgdGhpcy5kYXJrcm9vbS5hcHBseVRyYW5zZm9ybWF0aW9uKG5ldyBDcm9wKHtcbiAgICAgIHRvcDogdG9wIC8gaW1hZ2UuZ2V0SGVpZ2h0KCksXG4gICAgICBsZWZ0OiBsZWZ0IC8gaW1hZ2UuZ2V0V2lkdGgoKSxcbiAgICAgIHdpZHRoOiB3aWR0aCAvIGltYWdlLmdldFdpZHRoKCksXG4gICAgICBoZWlnaHQ6IGhlaWdodCAvIGltYWdlLmdldEhlaWdodCgpLFxuICAgIH0pKTtcbiAgfSxcblxuICAvLyBUZXN0IHdldGhlciBjcm9wIHpvbmUgaXMgc2V0XG4gIGhhc0ZvY3VzOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5jcm9wWm9uZSAhPT0gdW5kZWZpbmVkO1xuICB9LFxuXG4gIC8vIENyZWF0ZSB0aGUgY3JvcCB6b25lXG4gIHJlcXVpcmVGb2N1czogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5kYXJrcm9vbS5jbGVhckZvY3VzKCdjcm9wJyk7XG4gICAgdGhpcy5jcm9wWm9uZSA9IG5ldyBDcm9wWm9uZSh7XG4gICAgICBmaWxsOiAndHJhbnNwYXJlbnQnLFxuICAgICAgaGFzQm9yZGVyczogZmFsc2UsXG4gICAgICBvcmlnaW5YOiAnbGVmdCcsXG4gICAgICBvcmlnaW5ZOiAndG9wJyxcbiAgICAgIC8vc3Ryb2tlOiAnIzQ0NCcsXG4gICAgICAvL3N0cm9rZURhc2hBcnJheTogWzUsIDVdLFxuICAgICAgLy9ib3JkZXJDb2xvcjogJyM0NDQnLFxuICAgICAgY29ybmVyQ29sb3I6ICcjNDQ0JyxcbiAgICAgIGNvcm5lclNpemU6IDgsXG4gICAgICB0cmFuc3BhcmVudENvcm5lcnM6IGZhbHNlLFxuICAgICAgbG9ja1JvdGF0aW9uOiB0cnVlLFxuICAgICAgaGFzUm90YXRpbmdQb2ludDogZmFsc2UsXG4gICAgfSk7XG5cbiAgICBpZiAobnVsbCAhPT0gdGhpcy5vcHRpb25zLnJhdGlvKSB7XG4gICAgICB0aGlzLmNyb3Bab25lLnNldCgnbG9ja1VuaVNjYWxpbmcnLCB0cnVlKTtcbiAgICB9XG5cbiAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5hZGQodGhpcy5jcm9wWm9uZSk7XG4gICAgdGhpcy5kYXJrcm9vbS5jYW52YXMuZGVmYXVsdEN1cnNvciA9ICdjcm9zc2hhaXInO1xuXG4gICAgdGhpcy5jcm9wQnV0dG9uLmFjdGl2ZSh0cnVlKTtcbiAgICB0aGlzLm9rQnV0dG9uLmhpZGUoZmFsc2UpO1xuICAgIHRoaXMuY2FuY2VsQnV0dG9uLmhpZGUoZmFsc2UpO1xuICB9LFxuXG4gIC8vIFJlbW92ZSB0aGUgY3JvcCB6b25lXG4gIHJlbGVhc2VGb2N1czogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHVuZGVmaW5lZCA9PT0gdGhpcy5jcm9wWm9uZSlcbiAgICAgIHJldHVybjtcblxuICAgIHRoaXMuY3JvcFpvbmUucmVtb3ZlKCk7XG4gICAgdGhpcy5jcm9wWm9uZSA9IHVuZGVmaW5lZDtcblxuICAgIHRoaXMuY3JvcEJ1dHRvbi5hY3RpdmUoZmFsc2UpO1xuICAgIHRoaXMub2tCdXR0b24uaGlkZSh0cnVlKTtcbiAgICB0aGlzLmNhbmNlbEJ1dHRvbi5oaWRlKHRydWUpO1xuXG4gICAgdGhpcy5kYXJrcm9vbS5jYW52YXMuZGVmYXVsdEN1cnNvciA9ICdkZWZhdWx0JztcblxuICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudCgnY3JvcDp1cGRhdGUnKTtcbiAgfSxcblxuICBfcmVuZGVyQ3JvcFpvbmU6IGZ1bmN0aW9uKGZyb21YLCBmcm9tWSwgdG9YLCB0b1kpIHtcbiAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XG5cbiAgICB2YXIgaXNSaWdodCA9ICh0b1ggPiBmcm9tWCk7XG4gICAgdmFyIGlzTGVmdCA9ICFpc1JpZ2h0O1xuICAgIHZhciBpc0Rvd24gPSAodG9ZID4gZnJvbVkpO1xuICAgIHZhciBpc1VwID0gIWlzRG93bjtcblxuICAgIHZhciBtaW5XaWR0aCA9IE1hdGgubWluKCt0aGlzLm9wdGlvbnMubWluV2lkdGgsIGNhbnZhcy5nZXRXaWR0aCgpKTtcbiAgICB2YXIgbWluSGVpZ2h0ID0gTWF0aC5taW4oK3RoaXMub3B0aW9ucy5taW5IZWlnaHQsIGNhbnZhcy5nZXRIZWlnaHQoKSk7XG5cbiAgICAvLyBEZWZpbmUgY29ybmVyIGNvb3JkaW5hdGVzXG4gICAgdmFyIGxlZnRYID0gTWF0aC5taW4oZnJvbVgsIHRvWCk7XG4gICAgdmFyIHJpZ2h0WCA9IE1hdGgubWF4KGZyb21YLCB0b1gpO1xuICAgIHZhciB0b3BZID0gTWF0aC5taW4oZnJvbVksIHRvWSk7XG4gICAgdmFyIGJvdHRvbVkgPSBNYXRoLm1heChmcm9tWSwgdG9ZKTtcblxuICAgIC8vIFJlcGxhY2UgY3VycmVudCBwb2ludCBpbnRvIHRoZSBjYW52YXNcbiAgICBsZWZ0WCA9IE1hdGgubWF4KDAsIGxlZnRYKTtcbiAgICByaWdodFggPSBNYXRoLm1pbihjYW52YXMuZ2V0V2lkdGgoKSwgcmlnaHRYKTtcbiAgICB0b3BZID0gTWF0aC5tYXgoMCwgdG9wWSlcbiAgICBib3R0b21ZID0gTWF0aC5taW4oY2FudmFzLmdldEhlaWdodCgpLCBib3R0b21ZKTtcblxuICAgIC8vIFJlY2FsaWJyYXRlIGNvb3JkaW5hdGVzIGFjY29yZGluZyB0byBnaXZlbiBvcHRpb25zXG4gICAgaWYgKHJpZ2h0WCAtIGxlZnRYIDwgbWluV2lkdGgpIHtcbiAgICAgIGlmIChpc1JpZ2h0KVxuICAgICAgICByaWdodFggPSBsZWZ0WCArIG1pbldpZHRoO1xuICAgICAgZWxzZVxuICAgICAgICBsZWZ0WCA9IHJpZ2h0WCAtIG1pbldpZHRoO1xuICAgIH1cbiAgICBpZiAoYm90dG9tWSAtIHRvcFkgPCBtaW5IZWlnaHQpIHtcbiAgICAgIGlmIChpc0Rvd24pXG4gICAgICAgIGJvdHRvbVkgPSB0b3BZICsgbWluSGVpZ2h0O1xuICAgICAgZWxzZVxuICAgICAgICB0b3BZID0gYm90dG9tWSAtIG1pbkhlaWdodDtcbiAgICB9XG5cbiAgICAvLyBUcnVuY2F0ZSB0cnVuY2F0ZSBhY2NvcmRpbmcgdG8gY2FudmFzIGRpbWVuc2lvbnNcbiAgICBpZiAobGVmdFggPCAwKSB7XG4gICAgICAvLyBUcmFuc2xhdGUgdG8gdGhlIGxlZnRcbiAgICAgIHJpZ2h0WCArPSBNYXRoLmFicyhsZWZ0WCk7XG4gICAgICBsZWZ0WCA9IDBcbiAgICB9XG4gICAgaWYgKHJpZ2h0WCA+IGNhbnZhcy5nZXRXaWR0aCgpKSB7XG4gICAgICAvLyBUcmFuc2xhdGUgdG8gdGhlIHJpZ2h0XG4gICAgICBsZWZ0WCAtPSAocmlnaHRYIC0gY2FudmFzLmdldFdpZHRoKCkpO1xuICAgICAgcmlnaHRYID0gY2FudmFzLmdldFdpZHRoKCk7XG4gICAgfVxuICAgIGlmICh0b3BZIDwgMCkge1xuICAgICAgLy8gVHJhbnNsYXRlIHRvIHRoZSBib3R0b21cbiAgICAgIGJvdHRvbVkgKz0gTWF0aC5hYnModG9wWSk7XG4gICAgICB0b3BZID0gMFxuICAgIH1cbiAgICBpZiAoYm90dG9tWSA+IGNhbnZhcy5nZXRIZWlnaHQoKSkge1xuICAgICAgLy8gVHJhbnNsYXRlIHRvIHRoZSByaWdodFxuICAgICAgdG9wWSAtPSAoYm90dG9tWSAtIGNhbnZhcy5nZXRIZWlnaHQoKSk7XG4gICAgICBib3R0b21ZID0gY2FudmFzLmdldEhlaWdodCgpO1xuICAgIH1cblxuICAgIHZhciB3aWR0aCA9IHJpZ2h0WCAtIGxlZnRYO1xuICAgIHZhciBoZWlnaHQgPSBib3R0b21ZIC0gdG9wWTtcbiAgICB2YXIgY3VycmVudFJhdGlvID0gd2lkdGggLyBoZWlnaHQ7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnJhdGlvICYmICt0aGlzLm9wdGlvbnMucmF0aW8gIT09IGN1cnJlbnRSYXRpbykge1xuICAgICAgdmFyIHJhdGlvID0gK3RoaXMub3B0aW9ucy5yYXRpbztcblxuICAgICAgaWYodGhpcy5pc0tleUNyb3BpbmcpIHtcbiAgICAgICAgaXNMZWZ0ID0gdGhpcy5pc0tleUxlZnQ7XG4gICAgICAgIGlzVXAgPSB0aGlzLmlzS2V5VXA7XG4gICAgICB9XG5cbiAgICAgIGlmIChjdXJyZW50UmF0aW8gPCByYXRpbykge1xuICAgICAgICB2YXIgbmV3V2lkdGggPSBoZWlnaHQgKiByYXRpbztcbiAgICAgICAgaWYgKGlzTGVmdCkge1xuICAgICAgICAgIGxlZnRYIC09IChuZXdXaWR0aCAtIHdpZHRoKTtcbiAgICAgICAgfVxuICAgICAgICB3aWR0aCA9IG5ld1dpZHRoO1xuICAgICAgfSBlbHNlIGlmIChjdXJyZW50UmF0aW8gPiByYXRpbykge1xuICAgICAgICB2YXIgbmV3SGVpZ2h0ID0gaGVpZ2h0IC8gKHJhdGlvICogaGVpZ2h0L3dpZHRoKTtcbiAgICAgICAgaWYgKGlzVXApIHtcbiAgICAgICAgICB0b3BZIC09IChuZXdIZWlnaHQgLSBoZWlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIGhlaWdodCA9IG5ld0hlaWdodDtcbiAgICAgIH1cblxuICAgICAgaWYgKGxlZnRYIDwgMCkge1xuICAgICAgICBsZWZ0WCA9IDA7XG4gICAgICAgIC8vVE9ET1xuICAgICAgfVxuICAgICAgaWYgKHRvcFkgPCAwKSB7XG4gICAgICAgIHRvcFkgPSAwO1xuICAgICAgICAvL1RPRE9cbiAgICAgIH1cbiAgICAgIGlmIChsZWZ0WCArIHdpZHRoID4gY2FudmFzLmdldFdpZHRoKCkpIHtcbiAgICAgICAgdmFyIG5ld1dpZHRoID0gY2FudmFzLmdldFdpZHRoKCkgLSBsZWZ0WDtcbiAgICAgICAgaGVpZ2h0ID0gbmV3V2lkdGggKiBoZWlnaHQgLyB3aWR0aDtcbiAgICAgICAgd2lkdGggPSBuZXdXaWR0aDtcbiAgICAgICAgaWYgKGlzVXApIHtcbiAgICAgICAgICB0b3BZID0gZnJvbVkgLSBoZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0b3BZICsgaGVpZ2h0ID4gY2FudmFzLmdldEhlaWdodCgpKSB7XG4gICAgICAgIHZhciBuZXdIZWlnaHQgPSBjYW52YXMuZ2V0SGVpZ2h0KCkgLSB0b3BZO1xuICAgICAgICB3aWR0aCA9IHdpZHRoICogbmV3SGVpZ2h0IC8gaGVpZ2h0O1xuICAgICAgICBoZWlnaHQgPSBuZXdIZWlnaHQ7XG4gICAgICAgIGlmIChpc0xlZnQpIHtcbiAgICAgICAgICBsZWZ0WCA9IGZyb21YIC0gd2lkdGg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBcHBseSBjb29yZGluYXRlc1xuICAgIHRoaXMuY3JvcFpvbmUubGVmdCA9IGxlZnRYO1xuICAgIHRoaXMuY3JvcFpvbmUudG9wID0gdG9wWTtcbiAgICB0aGlzLmNyb3Bab25lLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5jcm9wWm9uZS5oZWlnaHQgPSBoZWlnaHQ7XG5cbiAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5icmluZ1RvRnJvbnQodGhpcy5jcm9wWm9uZSk7XG5cbiAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoJ2Nyb3A6dXBkYXRlJyk7XG4gIH1cbn0pO1xuXG59KSgpO1xuIiwiKGZ1bmN0aW9uICgpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgUGVuY2lsID0gRGFya3Jvb20uVHJhbnNmb3JtYXRpb24uZXh0ZW5kKHtcbiAgICAgICAgYXBwbHlUcmFuc2Zvcm1hdGlvbjogZnVuY3Rpb24gKGNhbnZhcywgaW1hZ2UsIG5leHQpIHtcbiAgICAgICAgICAgIC8vIFNuYXBzaG90IHRoZSBpbWFnZSBkZWxpbWl0ZWQgYnkgdGhlIGNyb3Agem9uZVxuICAgICAgICAgICAgdmFyIHNuYXBzaG90ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBzbmFwc2hvdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgLy8gVmFsaWRhdGUgaW1hZ2VcbiAgICAgICAgICAgICAgICBpZiAoaGVpZ2h0IDwgMSB8fCB3aWR0aCA8IDEpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgICAgIHZhciBpbWdJbnN0YW5jZSA9IG5ldyBmYWJyaWMuSW1hZ2UodGhpcywge1xuICAgICAgICAgICAgICAgICAgICAvLyBvcHRpb25zIHRvIG1ha2UgdGhlIGltYWdlIHN0YXRpY1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGxvY2tNb3ZlbWVudFg6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGxvY2tNb3ZlbWVudFk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGxvY2tSb3RhdGlvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbG9ja1NjYWxpbmdYOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBsb2NrU2NhbGluZ1k6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGxvY2tVbmlTY2FsaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBoYXNDb250cm9sczogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGhhc0JvcmRlcnM6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB2YXIgd2lkdGggPSB0aGlzLndpZHRoO1xuICAgICAgICAgICAgICAgIHZhciBoZWlnaHQgPSB0aGlzLmhlaWdodDtcblxuICAgICAgICAgICAgICAgIC8vIEFkZCBpbWFnZVxuICAgICAgICAgICAgICAgIGNhbnZhcy5hZGQoaW1nSW5zdGFuY2UpO1xuXG4gICAgICAgICAgICAgICAgbmV4dChpbWdJbnN0YW5jZSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB2YXIgdmlld3BvcnQgPSBEYXJrcm9vbS5VdGlscy5jb21wdXRlSW1hZ2VWaWV3UG9ydChpbWFnZSk7XG4gICAgICAgICAgICB2YXIgd2lkdGggPSB2aWV3cG9ydC53aWR0aDtcbiAgICAgICAgICAgIHZhciBoZWlnaHQgPSB2aWV3cG9ydC5oZWlnaHQ7XG5cbiAgICAgICAgICAgIC8vIHRoaXMub3B0aW9ucy5wZW5jaWxab25lLl9hcHBseVNjYWxpbmcoY2FudmFzLmdldFdpZHRoKCksIGNhbnZhcy5nZXRIZWlnaHQoKSk7XG4gICAgICAgICAgICBjYW52YXMuYWRkKHRoaXMub3B0aW9ucy5wZW5jaWxab25lKTtcbiAgICAgICAgICAgIGNhbnZhcy5yZW5kZXJBbGwoKTtcbiAgICAgICAgICAgIHNuYXBzaG90LnNyYyA9IGNhbnZhcy50b0RhdGFVUkwoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIFBlbmNpbFpvbmUgPSBmYWJyaWMudXRpbC5jcmVhdGVDbGFzcyhmYWJyaWMuT2JqZWN0LCB7XG4gICAgICAgIHR5cGU6ICdwZW5jaWxPYmplY3QnLFxuXG4gICAgICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgICAgIHRoaXMubGVmdCA9IG9wdGlvbnMubGVmdCB8fCAwO1xuICAgICAgICAgICAgdGhpcy50b3AgPSBvcHRpb25zLnRvcCB8fCAwO1xuICAgICAgICAgICAgdGhpcy53aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgICAgICAgICB0aGlzLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy5vcmlnaW5hbFdpZHRoID0gdGhpcy53aWR0aDtcbiAgICAgICAgICAgIHRoaXMub3JpZ2luYWxIZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICAgICAgICAgIHRoaXMuc3Ryb2tlID0gb3B0aW9ucy5zdHJva2U7XG4gICAgICAgICAgICB0aGlzLnNpemUgPSBvcHRpb25zLnNpemU7XG4gICAgICAgICAgICB0aGlzLnBhdGggPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5jWCA9IC10aGlzLmdldFdpZHRoKCkgLyAyO1xuICAgICAgICAgICAgdGhpcy5jWSA9IC10aGlzLmdldEhlaWdodCgpIC8gMjtcbiAgICAgICAgICAgIHRoaXMuY2FsbFN1cGVyKCdpbml0aWFsaXplJywgb3B0aW9ucyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgX2FwcGx5U2NhbGluZzogZnVuY3Rpb24gKHcsIGgpIHtcbiAgICAgICAgICAgIHZhciBzY2FsZVggPSB0aGlzLmdldFdpZHRoKCkgLyB3O1xuICAgICAgICAgICAgdmFyIHNjYWxlWSA9IHRoaXMuZ2V0SGVpZ2h0KCkgLyBoO1xuICAgICAgICAgICAgdGhpcy5zZXQoeyBzY2FsZVg6IHRoaXMuc2NhbGVYIC8gc2NhbGVYLCBzY2FsZVk6IHRoaXMuc2NhbGVZIC8gc2NhbGVZIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIF9yZW5kZXI6IGZ1bmN0aW9uIChjdHgpIHtcbiAgICAgICAgICAgIHZhciBjYW52YXMgPSBjdHguY2FudmFzO1xuICAgICAgICAgICAgdGhpcy5fZHJhdyhjdHgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIF9kcmF3OiBmdW5jdGlvbiAoY3R4KSB7XG4gICAgICAgICAgICBpZiAoY3R4ICYmIHRoaXMucGF0aCAmJiB0aGlzLnBhdGgubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGN0eC5saW5lSm9pbiA9IFwicm91bmRcIjtcbiAgICAgICAgICAgICAgICBjdHgubGluZUNhcCA9IFwicm91bmRcIjtcbiAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgY3R4Lm1vdmVUbygodGhpcy5jWCArIHRoaXMucGF0aFswXS54KSxcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuY1kgKyB0aGlzLnBhdGhbMF0ueSkpO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCB0aGlzLnBhdGgubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRyYXdYID0gKHRoaXMuY1ggKyB0aGlzLnBhdGhbeF0ueCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkcmF3WSA9ICh0aGlzLmNZICsgdGhpcy5wYXRoW3hdLnkpO1xuICAgICAgICAgICAgICAgICAgICBjdHgubGluZVRvKGRyYXdYLCBkcmF3WSk7XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLnN0cm9rZTtcbiAgICAgICAgICAgICAgICBjdHgubGluZVdpZHRoID0gdGhpcy5zaXplO1xuICAgICAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBfY2xvbmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUGVuY2lsWm9uZSh7XG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB0aGlzLnN0cm9rZSxcbiAgICAgICAgICAgICAgICBzaXplOiB0aGlzLnNpemUsXG4gICAgICAgICAgICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgICAgICAgICAgICBzZWxlY3RhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBsb2NrUm90YXRpb246IHRydWUsXG4gICAgICAgICAgICAgICAgZXZlbnRlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgbG9ja01vdmVtZW50WDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBsb2NrTW92ZW1lbnRZOiB0cnVlLFxuICAgICAgICAgICAgICAgIGxvY2tTY2FsaW5nWDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBsb2NrU2NhbGluZ1k6IHRydWUsXG4gICAgICAgICAgICAgICAgbG9ja1VuaVNjYWxpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgaGFzQ29udHJvbHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGhhc0JvcmRlcnM6IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgRGFya3Jvb20ucGx1Z2luc1sncGVuY2lsJ10gPSBEYXJrcm9vbS5QbHVnaW4uZXh0ZW5kKHtcbiAgICAgICAgcGVuY2lsTW9kZTogZmFsc2UsXG4gICAgICAgIHBlbmNpbFpvbmU6IG51bGwsXG4gICAgICAgIG1vdXNlRG93bjogZmFsc2UsXG4gICAgICAgIHNpemU6IDMwLFxuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgICAgc3Ryb2tlOiBcImJsYWNrXCIsXG4gICAgICAgICAgICBzaXplOiAzMFxuICAgICAgICB9LFxuXG4gICAgICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uIEluaXRpYWxpemVEYXJrcm9vbVBlbmNpbFBsdWdpbigpIHtcbiAgICAgICAgICAgIHZhciBidXR0b25Hcm91cCA9IHRoaXMuZGFya3Jvb20udG9vbGJhci5jcmVhdGVCdXR0b25Hcm91cCgpO1xuXG4gICAgICAgICAgICB0aGlzLnBlbmNpbEJ1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XG4gICAgICAgICAgICAgICAgaW1hZ2U6ICdwZW5jaWwnLFxuICAgICAgICAgICAgICAgIHRvb2x0aXA6ICdEcmF3J1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMucGF0aCA9IFtdO1xuICAgICAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMuZGFya3Jvb20uY2FudmFzLndpZHRoO1xuICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmRhcmtyb29tLmNhbnZhcy5oZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLnNpemUgPSB0aGlzLm9wdGlvbnMuc2l6ZTtcbiAgICAgICAgICAgIHRoaXMuc3Ryb2tlID0gdGhpcy5vcHRpb25zLnN0cm9rZTtcblxuICAgICAgICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMub24oJ21vdXNlOmRvd24nLCB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMub24oJ21vdXNlOm1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMub24oJ21vdXNlOnVwJywgdGhpcy5vbk1vdXNlVXAuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB0aGlzLnBlbmNpbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljay5iaW5kKHRoaXMpKTtcblxuXG4gICAgICAgIH0sXG5cbiAgICAgICAgY2xlYXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc0ZvY3VzKCkpXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVGb2N1cygpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGhhc0ZvY3VzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wZW5jaWxab25lICE9PSBudWxsO1xuICAgICAgICB9LFxuXG4gICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmhhc0ZvY3VzKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlcXVpcmVGb2N1cygpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRm9jdXMoKTtcbiAgICAgICAgfSxcblxuICAgICAgICBvbk1vdXNlRG93bjogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaGFzRm9jdXMoKSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudCgncGVuY2lsOmJlZ2luJyk7XG4gICAgICAgICAgICB0aGlzLm1vdXNlRG93biA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnBhdGgucHVzaCh0aGlzLmdldE1vdXNlUG9zaXRpb24odGhpcy5jYW52YXMsIGV2ZW50KSk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlclpvbmUoKTtcbiAgICAgICAgfSxcblxuICAgICAgICBvbk1vdXNlVXA6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmhhc0ZvY3VzKCkpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5tb3VzZURvd24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoJ3BlbmNpbDplbmQnKTtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHZhciBtb3VzZVBvcyA9IHRoaXMuZ2V0TW91c2VQb3NpdGlvbih0aGlzLmNhbnZhcywgZXZlbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMucGF0aC5wdXNoKG1vdXNlUG9zKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclpvbmUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGx5UGVuY2lsUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMucGF0aCA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG9uTW91c2VNb3ZlOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5oYXNGb2N1cygpKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgaWYgKHRoaXMubW91c2VEb3duKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1vdXNlUG9zID0gdGhpcy5nZXRNb3VzZVBvc2l0aW9uKHRoaXMuY2FudmFzLCBldmVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXRoLnB1c2gobW91c2VQb3MpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyWm9uZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHJlbW92ZUZvY3VzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoJ3BlbmNpbDpkaXNhYmxlZCcpO1xuICAgICAgICAgICAgdGhpcy5wZW5jaWxCdXR0b24uYWN0aXZlKGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMucGVuY2lsTW9kZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMuZGVmYXVsdEN1cnNvciA9ICdkZWZhdWx0JztcbiAgICAgICAgICAgIGlmICh0aGlzLnBlbmNpbFpvbmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBlbmNpbFpvbmUucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wZW5jaWxab25lID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICByZXF1aXJlRm9jdXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuZGFya3Jvb20uY2xlYXJGb2N1cygncGVuY2lsJyk7XG4gICAgICAgICAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoJ3BlbmNpbDplbmFibGVkJyk7XG4gICAgICAgICAgICB0aGlzLnBlbmNpbE1vZGUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5wZW5jaWxCdXR0b24uYWN0aXZlKHRydWUpO1xuXG4gICAgICAgICAgICB0aGlzLnBlbmNpbFpvbmUgPSB0aGlzLm5ld1pvbmUoKTtcblxuICAgICAgICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMuYWRkKHRoaXMucGVuY2lsWm9uZSk7XG4gICAgICAgICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5kZWZhdWx0Q3Vyc29yID0gJ2Nyb3NzaGFpcic7XG4gICAgICAgIH0sXG5cblxuICAgICAgICBnZXRNb3VzZVBvc2l0aW9uOiBmdW5jdGlvbiAoY2FudmFzLCBldmVudCkge1xuICAgICAgICAgICAgdmFyIGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xuICAgICAgICAgICAgdmFyIHJlY3QgPSBjYW52YXMubG93ZXJDYW52YXNFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIHZhciBwb2ludGVyID0gY2FudmFzLmdldFBvaW50ZXIoZXZlbnQuZSk7XG4gICAgICAgICAgICB2YXIgc2NhbGUgPSA3MjAgLyAxMjgwXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHg6IHBvaW50ZXIueCxcbiAgICAgICAgICAgICAgICB5OiBwb2ludGVyLnksXG4gICAgICAgICAgICAgICAgY3g6IGV2ZW50LmUuY2xpZW50WCAtIHJlY3QubGVmdCxcbiAgICAgICAgICAgICAgICBjeTogZXZlbnQuZS5jbGllbnRZIC0gcmVjdC50b3AsXG4gICAgICAgICAgICAgICAgc3g6IGV2ZW50LmUuc2NyZWVuWCxcbiAgICAgICAgICAgICAgICBzeTogZXZlbnQuZS5zY3JlZW5ZXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuXG4gICAgICAgIG5ld1pvbmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMucGF0aCA9IFtdO1xuICAgICAgICAgICAgdmFyIHN0cm9rZSA9IHRoaXMuc3Ryb2tlO1xuICAgICAgICAgICAgdmFyIHNpemUgPSB0aGlzLnNpemU7XG4gICAgICAgICAgICB2YXIgd2lkdGggPSB0aGlzLmRhcmtyb29tLmNhbnZhcy5nZXRXaWR0aCgpO1xuICAgICAgICAgICAgdmFyIGhlaWdodCA9IHRoaXMuZGFya3Jvb20uY2FudmFzLmdldEhlaWdodCgpO1xuICAgICAgICAgICAgdmFyIHpvbmUgPSBuZXcgUGVuY2lsWm9uZSh7XG4gICAgICAgICAgICAgICAgc3Ryb2tlOiBzdHJva2UsXG4gICAgICAgICAgICAgICAgc2l6ZTogc2l6ZSxcbiAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICAgICAgICAgICAgc2VsZWN0YWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgbG9ja1JvdGF0aW9uOiB0cnVlLFxuICAgICAgICAgICAgICAgIGV2ZW50ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGxvY2tNb3ZlbWVudFg6IHRydWUsXG4gICAgICAgICAgICAgICAgbG9ja01vdmVtZW50WTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBsb2NrU2NhbGluZ1g6IHRydWUsXG4gICAgICAgICAgICAgICAgbG9ja1NjYWxpbmdZOiB0cnVlLFxuICAgICAgICAgICAgICAgIGxvY2tVbmlTY2FsaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIGhhc0NvbnRyb2xzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBoYXNCb3JkZXJzOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiB6b25lO1xuICAgICAgICB9LFxuXG4gICAgICAgIGFwcGx5UGVuY2lsUGF0aDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmhhc0ZvY3VzKCkpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICAvLyBBdm9pZCBjcm9waW5nIGVtcHR5IHpvbmVcbiAgICAgICAgICAgIGlmICh0aGlzLnBhdGggPT09IG51bGwgfHwgdGhpcy5wYXRoLmxlbmd0aCA9PSAwKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgLy8gQXBwbHkgY3JvcCB0cmFuc2Zvcm1hdGlvbi5cbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0byB1c2UgcmVsYXRpdmUgZGltZW5zaW9uIHNpbmNlIHRoZSBjcm9wIHdpbGwgYmUgYXBwbGllZFxuICAgICAgICAgICAgLy8gb24gdGhlIHNvdXJjZSBpbWFnZS5cbiAgICAgICAgICAgIHZhciB6b25lID0gdGhpcy5wZW5jaWxab25lLl9jbG9uZSgpO1xuICAgICAgICAgICAgem9uZS5wYXRoID0gdGhpcy5wYXRoO1xuICAgICAgICAgICAgem9uZS5sZWZ0IC09IHRoaXMuZGFya3Jvb20ub3B0aW9ucy5sZWZ0O1xuICAgICAgICAgICAgem9uZS50b3AgLT0gdGhpcy5kYXJrcm9vbS5vcHRpb25zLnRvcDtcbiAgICAgICAgICAgIHRoaXMuZGFya3Jvb20uYXBwbHlUcmFuc2Zvcm1hdGlvbihuZXcgUGVuY2lsKHtcbiAgICAgICAgICAgICAgICBwZW5jaWxab25lOiB6b25lXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB0aGlzLnBlbmNpbFpvbmUucmVtb3ZlKCk7XG4gICAgICAgICAgICB0aGlzLnBlbmNpbFpvbmUgPSB0aGlzLm5ld1pvbmUoKTtcbiAgICAgICAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLmFkZCh0aGlzLnBlbmNpbFpvbmUpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlbmRlclpvbmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhdGggJiYgdGhpcy5wYXRoLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoJ3BlbmNpbDp1cGRhdGUnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBlbmNpbFpvbmUucGF0aCA9IHRoaXMucGF0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLmJyaW5nVG9Gcm9udCh0aGlzLnBlbmNpbFpvbmUpO1xuICAgICAgICB9XG5cbiAgICB9KTtcblxufSkoKTtcbiIsIihmdW5jdGlvbiAoKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICB2YXIgcmVjdCwgaXNEb3duLCBvcmlnWCwgb3JpZ1k7XHJcbiAgdmFyIGhhc0ZvY3VzID0gdHJ1ZTtcclxuXHJcbiAgdmFyIFJlY3RhbmdsZVRyYW5zZm9ybWF0aW9uID0gRGFya3Jvb20uVHJhbnNmb3JtYXRpb24uZXh0ZW5kKHtcclxuICAgIGFwcGx5VHJhbnNmb3JtYXRpb246IGZ1bmN0aW9uIChjYW52YXMsIGltYWdlLCBuZXh0KSB7XHJcbiAgICAgIHZhciBzbmFwc2hvdCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICBzbmFwc2hvdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKGhlaWdodCA8IDEgfHwgd2lkdGggPCAxKVxyXG4gICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB2YXIgaW1nSW5zdGFuY2UgPSBuZXcgZmFicmljLkltYWdlKHRoaXMsIHtcclxuICAgICAgICAgIC8vIG9wdGlvbnMgdG8gbWFrZSB0aGUgaW1hZ2Ugc3RhdGljXHJcbiAgICAgICAgICBzZWxlY3RhYmxlOiBmYWxzZSxcclxuICAgICAgICAgIGV2ZW50ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgbG9ja01vdmVtZW50WDogdHJ1ZSxcclxuICAgICAgICAgIGxvY2tNb3ZlbWVudFk6IHRydWUsXHJcbiAgICAgICAgICBsb2NrUm90YXRpb246IHRydWUsXHJcbiAgICAgICAgICBsb2NrU2NhbGluZ1g6IHRydWUsXHJcbiAgICAgICAgICBsb2NrU2NhbGluZ1k6IHRydWUsXHJcbiAgICAgICAgICBsb2NrVW5pU2NhbGluZzogdHJ1ZSxcclxuICAgICAgICAgIGhhc0NvbnRyb2xzOiBmYWxzZSxcclxuICAgICAgICAgIGhhc0JvcmRlcnM6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHZhciB3aWR0aCA9IHRoaXMud2lkdGg7XHJcbiAgICAgICAgdmFyIGhlaWdodCA9IHRoaXMuaGVpZ2h0O1xyXG5cclxuICAgICAgICAvLyBBZGQgaW1hZ2VcclxuICAgICAgICBjYW52YXMuYWRkKGltZ0luc3RhbmNlKTtcclxuXHJcbiAgICAgICAgbmV4dChpbWdJbnN0YW5jZSk7XHJcblxyXG4gICAgICB9O1xyXG5cclxuICAgICAgdmFyIHZpZXdwb3J0ID0gRGFya3Jvb20uVXRpbHMuY29tcHV0ZUltYWdlVmlld1BvcnQoaW1hZ2UpO1xyXG4gICAgICB2YXIgd2lkdGggPSB2aWV3cG9ydC53aWR0aDtcclxuICAgICAgdmFyIGhlaWdodCA9IHZpZXdwb3J0LmhlaWdodDtcclxuXHJcbiAgICAgIHZhciBuZXdSZWN0ID0gdGhpcy5vcHRpb25zLnJlY3RhbmdsZTtcclxuICAgICAgdmFyIHNjYWxlWCA9IHRoaXMub3B0aW9ucy5vcmlnaW5hbFdpZHRoIC8gY2FudmFzLmdldFdpZHRoKCk7XHJcbiAgICAgIHZhciBzY2FsZVkgPSB0aGlzLm9wdGlvbnMub3JpZ2luYWxIZWlnaHQgLyBjYW52YXMuZ2V0SGVpZ2h0KCk7XHJcbiAgICAgIG5ld1JlY3Quc2V0KHsgc2NhbGVYOiAxIC8gc2NhbGVYLCBzY2FsZVk6IDEgLyBzY2FsZVkgfSk7XHJcbiAgICAgIGNhbnZhcy5hZGQobmV3UmVjdCk7XHJcbiAgICAgIGNhbnZhcy5yZW5kZXJBbGwoKTtcclxuICAgICAgc25hcHNob3Quc3JjID0gY2FudmFzLnRvRGF0YVVSTCgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBEYXJrcm9vbS5wbHVnaW5zWydyZWN0YW5nbGUnXSA9IERhcmtyb29tLlBsdWdpbi5leHRlbmQoe1xyXG4gICAgcmVjdGFuZ2xlWm9uZTogbnVsbCxcclxuXHJcbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbiBJbml0aWFsaXplRGFya3Jvb21SZWN0YW5nbGVQbHVnaW4oKSB7XHJcbiAgICAgIHZhciBidXR0b25Hcm91cCA9IHRoaXMuZGFya3Jvb20udG9vbGJhci5jcmVhdGVCdXR0b25Hcm91cCgpO1xyXG5cclxuICAgICAgdGhpcy5yZWN0YW5nbGVCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xyXG4gICAgICAgIGltYWdlOiAncmVjdGFuZ2xlJyxcclxuICAgICAgICB0b29sdGlwOiAnRHJhdydcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbignbW91c2U6ZG93bicsIHRoaXMub25Nb3VzZURvd24uYmluZCh0aGlzKSk7XHJcbiAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLm9uKCdtb3VzZTptb3ZlJywgdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpKTtcclxuICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMub24oJ21vdXNlOnVwJywgdGhpcy5oYW5kbGVNb3VzZVVwLmJpbmQodGhpcykpO1xyXG4gICAgICB0aGlzLnJlY3RhbmdsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljay5iaW5kKHRoaXMpKTtcclxuICAgIH0sXHJcblxyXG4gICAgY2xlYXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLnJlY3RhbmdsZUJ1dHRvbi5hY3RpdmUoZmFsc2UpO1xyXG4gICAgICBoYXNGb2N1cyA9IHRydWU7XHJcbiAgICAgIGlzRG93biA9IGZhbHNlO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkNsaWNrOiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgaWYgKCFoYXNGb2N1cykge1xyXG4gICAgICAgIHRoaXMucmVjdGFuZ2xlQnV0dG9uLmFjdGl2ZShmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMuZGVmYXVsdEN1cnNvciA9ICdkZWZhdWx0JztcclxuICAgICAgICBoYXNGb2N1cyA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZGFya3Jvb20uY2xlYXJGb2N1cyhcInJlY3RhbmdsZVwiKTtcclxuICAgICAgdGhpcy5yZWN0YW5nbGVCdXR0b24uYWN0aXZlKHRydWUpO1xyXG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5kZWZhdWx0Q3Vyc29yID0gJ2Nyb3NzaGFpcic7XHJcbiAgICAgIGhhc0ZvY3VzID0gZmFsc2U7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uTW91c2VEb3duOiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgaWYgKGhhc0ZvY3VzKSByZXR1cm47XHJcbiAgICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudCgncmVjdGFuZ2xlOmJlZ2luJyk7XHJcbiAgICAgIHZhciBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcclxuICAgICAgaXNEb3duID0gdHJ1ZTtcclxuICAgICAgdmFyIHBvaW50ZXIgPSBjYW52YXMuZ2V0UG9pbnRlcihldmVudC5lKTtcclxuICAgICAgb3JpZ1ggPSBwb2ludGVyLng7XHJcbiAgICAgIG9yaWdZID0gcG9pbnRlci55O1xyXG4gICAgICByZWN0ID0gbmV3IGZhYnJpYy5SZWN0KHtcclxuICAgICAgICBsZWZ0OiBvcmlnWCxcclxuICAgICAgICB0b3A6IG9yaWdZLFxyXG4gICAgICAgIG9yaWdpblg6ICdsZWZ0JyxcclxuICAgICAgICBvcmlnaW5ZOiAndG9wJyxcclxuICAgICAgICB3aWR0aDogcG9pbnRlci54IC0gb3JpZ1gsXHJcbiAgICAgICAgaGVpZ2h0OiBwb2ludGVyLnkgLSBvcmlnWSxcclxuICAgICAgICBhbmdsZTogMCxcclxuICAgICAgICBmaWxsOiBcImJsYWNrXCIsXHJcbiAgICAgICAgdHJhbnNwYXJlbnRDb3JuZXJzOiBmYWxzZVxyXG4gICAgICB9KTtcclxuICAgICAgY2FudmFzLmFkZChyZWN0KTtcclxuICAgIH0sXHJcblxyXG4gICAgb25Nb3VzZU1vdmU6IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICBpZiAoaXNEb3duKSB7XHJcbiAgICAgICAgdGhpcy5kYXJrcm9vbS5kaXNwYXRjaEV2ZW50KCdyZWN0YW5nbGU6dXBkYXRlJyk7XHJcbiAgICAgICAgdmFyIGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xyXG4gICAgICAgIHZhciBwb2ludGVyID0gY2FudmFzLmdldFBvaW50ZXIoZXZlbnQuZSk7XHJcblxyXG4gICAgICAgIGlmIChvcmlnWCA+IHBvaW50ZXIueCkge1xyXG4gICAgICAgICAgcmVjdC5zZXQoe1xyXG4gICAgICAgICAgICBsZWZ0OiBNYXRoLmFicyhwb2ludGVyLngpXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9yaWdZID4gcG9pbnRlci55KSB7XHJcbiAgICAgICAgICByZWN0LnNldCh7XHJcbiAgICAgICAgICAgIHRvcDogTWF0aC5hYnMocG9pbnRlci55KVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZWN0LnNldCh7XHJcbiAgICAgICAgICB3aWR0aDogTWF0aC5hYnMob3JpZ1ggLSBwb2ludGVyLngpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmVjdC5zZXQoe1xyXG4gICAgICAgICAgaGVpZ2h0OiBNYXRoLmFicyhvcmlnWSAtIHBvaW50ZXIueSlcclxuICAgICAgICB9KTtcclxuICAgICAgICBjYW52YXMucmVuZGVyQWxsKCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgaGFuZGxlTW91c2VVcDogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgIGlmIChoYXNGb2N1cykgcmV0dXJuO1xyXG4gICAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XHJcbiAgICAgIGlzRG93biA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoJ3JlY3RhbmdsZTplbmQnKTtcclxuICAgICAgY2FudmFzLnJlbW92ZShyZWN0KTtcclxuICAgICAgdmFyIGNhbnZhc09mZnNldCA9IGNhbnZhcy5jYWxjT2Zmc2V0KCk7XHJcbiAgICAgIHJlY3QubGVmdCAtPSB0aGlzLmRhcmtyb29tLm9wdGlvbnMubGVmdDtcclxuICAgICAgcmVjdC50b3AgLT0gdGhpcy5kYXJrcm9vbS5vcHRpb25zLnRvcDtcclxuICAgICAgdGhpcy5kYXJrcm9vbS5hcHBseVRyYW5zZm9ybWF0aW9uKCBuZXcgUmVjdGFuZ2xlVHJhbnNmb3JtYXRpb24oe1xyXG4gICAgICAgIG9yaWdpbmFsV2lkdGg6IGNhbnZhcy5nZXRXaWR0aCgpLFxyXG4gICAgICAgIG9yaWdpbmFsSGVpZ2h0OiBjYW52YXMuZ2V0SGVpZ2h0KCksXHJcbiAgICAgICAgcmVjdGFuZ2xlOiByZWN0XHJcbiAgICAgIH0pKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbn0pKCk7XHJcbiIsIihmdW5jdGlvbiAoKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgdmFyIG1heFpvb20gPSAyO1xuICB2YXIgbWluWm9vbTtcbiAgdmFyIHN0YXRlcyA9IHtcbiAgICBwYW5BY3RpdmU6IGZhbHNlLFxuICAgIHBhbm5pbmc6IGZhbHNlXG4gIH07XG4gIHZhciBwYW5uaW5nID0gZmFsc2U7XG5cbiAgRGFya3Jvb20ucGx1Z2luc1snem9vbSddID0gRGFya3Jvb20uUGx1Z2luLmV4dGVuZCh7XG5cbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbiBJbml0RGFya3Jvb21Cb3hQbHVnaW4oKSB7XG4gICAgICB2YXIgYnV0dG9uR3JvdXAgPSB0aGlzLmRhcmtyb29tLnRvb2xiYXIuY3JlYXRlQnV0dG9uR3JvdXAoKTtcblxuICAgICAgdGhpcy56b29tSW5CdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xuICAgICAgICBpbWFnZTogJ3pvb20taW4nLFxuICAgICAgICB0aXRsZTogJ3pvb20gaW4nXG4gICAgICB9KTtcblxuICAgICAgdGhpcy56b29tT3V0QnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcbiAgICAgICAgaW1hZ2U6ICd6b29tLW91dCcsXG4gICAgICAgIHRpdGxlOiAnem9vbSBvdXQnLFxuICAgICAgICBkaXNhYmxlZDogdHJ1ZVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMucGFuID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcbiAgICAgICAgaW1hZ2U6ICdoYW5kJyxcbiAgICAgICAgZGlzYWJsZWQ6IHRydWVcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnpvb21JbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuem9vbUluLmJpbmQodGhpcykpO1xuICAgICAgdGhpcy56b29tT3V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy56b29tT3V0LmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5wYW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uUGFuLmJpbmQodGhpcykpO1xuICAgICAgbWluWm9vbSA9IHRoaXMuZGFya3Jvb20uY2FudmFzLmdldFpvb20oKTtcbiAgICB9LFxuXG4gICAgY2xlYXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHN0YXRlcy5wYW5BY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMucGFuLmFjdGl2ZShmYWxzZSk7XG4gICAgICBzdGF0ZXMucGFubmluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXN0b3JlWm9vbVBhbigpO1xuICAgIH0sXG5cbiAgICBvblBhbjogZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHBhbm5pbmcpIHtcbiAgICAgICAgcGFubmluZyA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgdGhpcy5kYXJrcm9vbS5jbGVhckZvY3VzKFwiem9vbVwiKTtcbiAgICAgIHZhciBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcbiAgICAgIGNhbnZhcy5vbignbW91c2U6ZG93bicsIHRoaXMucGFuRW50ZXIuYmluZCh0aGlzKSk7XG4gICAgICBjYW52YXMub24oJ21vdXNlOnVwJywgdGhpcy5wYW5FeGl0LmJpbmQodGhpcykpO1xuICAgICAgY2FudmFzLm9uKCdtb3VzZTptb3ZlJywgdGhpcy5fcGFuLmJpbmQodGhpcykpO1xuICAgICAgY2FudmFzLmRlZmF1bHRDdXJzb3IgPSAnbW92ZSc7XG4gICAgICBzdGF0ZXMucGFuQWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMucGFuLmFjdGl2ZSh0cnVlKTtcbiAgICB9LFxuXG4gICAgcGFuRW50ZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChzdGF0ZXMucGFuQWN0aXZlKSB7XG4gICAgICAgIHN0YXRlcy5wYW5uaW5nID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgX3BhbjogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB3aW5kb3cuZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmIChzdGF0ZXMucGFubmluZyAmJiBldmVudCAmJiBldmVudC5lKSB7XG4gICAgICAgIHZhciBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcbiAgICAgICAgdmFyIGRlbHRhID0ge1xuICAgICAgICAgIHg6IGV2ZW50LmUubW92ZW1lbnRYLFxuICAgICAgICAgIHk6IGV2ZW50LmUubW92ZW1lbnRZXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZG9QYW4oZGVsdGEpO1xuICAgICAgICBjYW52YXMucmVuZGVyQWxsKCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIHBhbkV4aXQ6IGZ1bmN0aW9uIChkZWx0YSkge1xuICAgICAgaWYgKHN0YXRlcy5wYW5BY3RpdmUpIHtcbiAgICAgICAgdmFyIGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHRoaXMuZGFya3Jvb20ub3B0aW9ucztcbiAgICAgICAgZGVsdGEgPSB0aGlzLmNvbnN0cmFpblBhbihkZWx0YSk7XG4gICAgICAgIHZhciBpbWFnZSA9IHRoaXMuZGFya3Jvb20uaW1hZ2U7XG4gICAgICAgIHN0YXRlcy5wYW5uaW5nID0gZmFsc2U7XG4gICAgICAgIG9wdGlvbnMubGVmdCA9IGltYWdlLmxlZnQ7XG4gICAgICAgIG9wdGlvbnMudG9wID0gaW1hZ2UudG9wO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBkb1BhbjogZnVuY3Rpb24gKGRlbHRhKSB7XG4gICAgICB2YXIgaW1hZ2UgPSB0aGlzLmRhcmtyb29tLmltYWdlO1xuICAgICAgZGVsdGEgPSB0aGlzLmNvbnN0cmFpblBhbihkZWx0YSk7XG4gICAgICBpbWFnZS5sZWZ0ID0gaW1hZ2UubGVmdCArIGRlbHRhLng7XG4gICAgICBpbWFnZS50b3AgPSBpbWFnZS50b3AgKyBkZWx0YS55O1xuICAgICAgaW1hZ2Uuc2V0Q29vcmRzKCk7XG4gICAgfSxcblxuICAgIGNvbnN0cmFpblBhbjogZnVuY3Rpb24gKGRlbHRhKSB7XG4gICAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXMsIGltYWdlID0gdGhpcy5kYXJrcm9vbS5pbWFnZSwgdGwgPSBpbWFnZS5vQ29vcmRzLnRsLCAvLyB0b3AgbGVmdCBjb3JuZXJcbiAgICAgICAgYnIgPSBpbWFnZS5vQ29vcmRzLmJyOyAvLyBib3R0b20gcmlnaHQgY29ybmVyXG4gICAgICBpZiAoZGVsdGEueCA+IDApIHtcbiAgICAgICAgZGVsdGEueCA9ICgodGwueCArIGRlbHRhLngpID4gMCkgPyAwIDogTWF0aC5mbG9vcihkZWx0YS54KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBkZWx0YS54ID0gTWF0aC5jZWlsKGRlbHRhLngpO1xuICAgICAgICBpZiAoKE1hdGguY2VpbChici54KSArIGRlbHRhLngpIDwgY2FudmFzLndpZHRoKSB7XG4gICAgICAgICAgZGVsdGEueCA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChkZWx0YS55ID4gMCkge1xuICAgICAgICBkZWx0YS55ID0gKCh0bC55ICsgZGVsdGEueSkgPiAwKSA/IDAgOiBNYXRoLmZsb29yKGRlbHRhLnkpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGRlbHRhLnkgPSBNYXRoLmNlaWwoZGVsdGEueSk7XG4gICAgICAgIGlmICgoTWF0aC5jZWlsKGJyLnkpICsgZGVsdGEueSkgPCBjYW52YXMuaGVpZ2h0KSB7XG4gICAgICAgICAgZGVsdGEueSA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBkZWx0YTtcbiAgICB9LFxuXG4gICAgcmVzdG9yZVpvb21QYW46IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChzdGF0ZXMubGFzdFNjYWxlICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy5kYXJrcm9vbS5pbWFnZS5zY2FsZShzdGF0ZXMubGFzdFNjYWxlKTtcbiAgICAgICAgaWYgKHN0YXRlcy5yZWFsUGFuICE9IG51bGwpIHtcbiAgICAgICAgICB0aGlzLmRvUGFuKHN0YXRlcy5yZWFsUGFuKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICB6b29tSW46IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcbiAgICAgIGlmIChjYW52YXMuZ2V0Wm9vbSgpIDw9IG1heFpvb20pIHtcbiAgICAgICAgY2FudmFzLnNldFpvb20oY2FudmFzLmdldFpvb20oKSAqIDEuMSk7XG4gICAgICAgIGNhbnZhcy5yZW5kZXJBbGwoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudXBkYXRlQnV0dG9ucygpO1xuICAgIH0sXG5cbiAgICB6b29tT3V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XG4gICAgICB2YXIgaW1hZ2UgPSB0aGlzLmRhcmtyb29tLmltYWdlO1xuICAgICAgaWYgKGNhbnZhcy5nZXRab29tKCkgPiBtaW5ab29tKSB7XG4gICAgICAgIGNhbnZhcy5zZXRab29tKGNhbnZhcy5nZXRab29tKCkgLyAxLjEpO1xuICAgICAgICBpZiAodGhpcy5kYXJrcm9vbS5pbWFnZS5vQ29vcmRzLmJyLnggPCB0aGlzLmRhcmtyb29tLmNhbnZhcy53aWR0aCkge1xuICAgICAgICAgIHZhciBuZXdMZWZ0ID0gTWF0aC5jZWlsKHRoaXMuZGFya3Jvb20uY2FudmFzLndpZHRoIC0gdGhpcy5kYXJrcm9vbS5pbWFnZS5vQ29vcmRzLmJyLngpO1xuICAgICAgICAgIGltYWdlLmxlZnQgPSBpbWFnZS5sZWZ0ICsgbmV3TGVmdDtcbiAgICAgICAgICB0aGlzLmRhcmtyb29tLm9wdGlvbnMubGVmdCA9IHRoaXMuZGFya3Jvb20ub3B0aW9ucy5sZWZ0ICsgbmV3TGVmdDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5kYXJrcm9vbS5pbWFnZS5vQ29vcmRzLmJyLnkgPCB0aGlzLmRhcmtyb29tLmNhbnZhcy5oZWlnaHQpIHtcbiAgICAgICAgICB2YXIgbmV3VG9wID0gTWF0aC5jZWlsKHRoaXMuZGFya3Jvb20uY2FudmFzLmhlaWdodCAtIHRoaXMuZGFya3Jvb20uaW1hZ2Uub0Nvb3Jkcy5ici55KTtcbiAgICAgICAgICBpbWFnZS50b3AgPSBpbWFnZS50b3AgKyBuZXdUb3A7XG4gICAgICAgICAgdGhpcy5kYXJrcm9vbS5vcHRpb25zLnRvcCA9IHRoaXMuZGFya3Jvb20ub3B0aW9ucy50b3AgKyBuZXdUb3A7XG4gICAgICAgIH1cbiAgICAgICAgaW1hZ2Uuc2V0Q29vcmRzKCk7XG4gICAgICAgIGNhbnZhcy5yZW5kZXJBbGwoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudXBkYXRlQnV0dG9ucygpO1xuICAgIH0sXG5cbiAgICB1cGRhdGVCdXR0b25zOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XG4gICAgICB2YXIgc2hvdWxkRGlzYWJsZU1pblpvb20gPSBjYW52YXMuZ2V0Wm9vbSgpIDw9IG1pblpvb207XG4gICAgICB2YXIgc2hvdWxkRGlzYWJsZU1heFpvb29tID0gY2FudmFzLmdldFpvb20oKSA+PSBtYXhab29tO1xuICAgICAgdGhpcy5wYW4uZGlzYWJsZShzaG91bGREaXNhYmxlTWluWm9vbSk7XG4gICAgICB0aGlzLnpvb21PdXRCdXR0b24uZGlzYWJsZShzaG91bGREaXNhYmxlTWluWm9vbSk7XG4gICAgICB0aGlzLnpvb21JbkJ1dHRvbi5kaXNhYmxlKHNob3VsZERpc2FibGVNYXhab29vbSk7XG4gICAgICBpZiAoc2hvdWxkRGlzYWJsZU1pblpvb20pIHtcbiAgICAgICAgdGhpcy5kYXJrcm9vbS5vcHRpb25zLmxlZnQgPSAwO1xuICAgICAgICB0aGlzLmRhcmtyb29tLm9wdGlvbnMudG9wID0gMDtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufSkoKTtcbiIsIihmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuRGFya3Jvb20ucGx1Z2luc1snc2F2ZSddID0gRGFya3Jvb20uUGx1Z2luLmV4dGVuZCh7XG5cbiAgZGVmYXVsdHM6IHtcbiAgICBjYWxsYmFjazogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRhcmtyb29tLnNlbGZEZXN0cm95KCk7XG4gICAgfVxuICB9LFxuXG4gIGluaXRpYWxpemU6IGZ1bmN0aW9uIEluaXRpYWxpemVEYXJrcm9vbVNhdmVQbHVnaW4oKSB7XG4gICAgdmFyIGJ1dHRvbkdyb3VwID0gdGhpcy5kYXJrcm9vbS50b29sYmFyLmNyZWF0ZUJ1dHRvbkdyb3VwKCk7XG5cbiAgICB0aGlzLmRlc3Ryb3lCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xuICAgICAgaW1hZ2U6ICdzYXZlJ1xuICAgIH0pO1xuXG4gICAgdGhpcy5kZXN0cm95QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcHRpb25zLmNhbGxiYWNrLmJpbmQodGhpcykpO1xuICB9LFxufSk7XG5cbn0pKCk7XG4iXX0=
