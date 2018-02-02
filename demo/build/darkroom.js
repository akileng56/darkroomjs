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
;(function() {
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
    backgroundColor: '#fff',

    // Plugins options
    plugins: {},

    // Post-initialisation callback
    initialize: function() { /* noop */ }
  },

  // List of the instancied plugins
  plugins: {},

  // This options are a merge between `defaults` and the options passed
  // through the constructor
  options: {},

  constructor: function(element, options, plugins) {
    this.options = Darkroom.Utils.extend(options, this.defaults);

    if (typeof element === 'string')
      element = document.querySelector(element);
    if (null === element)
      return;

    var image = new Image();
    image.onload = function() {
      // Initialize the DOM/Fabric elements
      this._initializeDOM(element);
      this._initializeImage();

      // Then initialize the plugins
      this._initializePlugins(Darkroom.plugins);

      // Public method to adjust image according to the canvas
      this.refresh(function() {
        // Execute a custom callback after initialization
        this.options.initialize.bind(this).call();
      }.bind(this));

    }.bind(this)

    //image.crossOrigin = 'anonymous';
    image.src = element.src;
  },

  selfDestroy: function() {
    var container = this.containerElement;
    var image = new Image();
    image.onload = function() {
      container.parentNode.replaceChild(image, container);
    }

    image.src = this.sourceImage.toDataURL();
  },

  // Add ability to attach event listener on the core object.
  // It uses the canvas element to process events.
  addEventListener: function(eventName, callback) {
    var el = this.canvas.getElement();
    if (el.addEventListener){
      el.addEventListener(eventName, callback);
    } else if (el.attachEvent) {
      el.attachEvent('on' + eventName, callback);
    }
  },

  dispatchEvent: function(eventName) {
    // Use the old way of creating event to be IE compatible
    // See https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
    var event = document.createEvent('Event');
    event.initEvent(eventName, true, true);

    this.canvas.getElement().dispatchEvent(event);
  },

  // Adjust image & canvas dimension according to min/max width/height
  // and ratio specified in the options.
  // This method should be called after each image transformation.
  refresh: function(next) {
    var clone = new Image();
    clone.onload = function() {
      this._replaceCurrentImage(new fabric.Image(clone));

      if (next) next();
    }.bind(this);
    clone.src = this.sourceImage.toDataURL();
  },

  _replaceCurrentImage: function(newImage) {
    if (this.image) {
      this.image.remove();
    }

    this.image = newImage;
    this.image.selectable = false;

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
    this.canvas.centerObject(this.image);
    this.image.setCoords();
  },

  // Apply the transformation on the current image and save it in the
  // transformations stack (in order to reconstitute the previous states
  // of the image).
  applyTransformation: function(transformation) {
    this.transformations.push(transformation);

    transformation.applyTransformation(
      this.sourceCanvas,
      this.sourceImage,
      this._postTransformation.bind(this)
    );
  },

  _postTransformation: function(newImage) {
    if (newImage)
      this.sourceImage = newImage;

    this.refresh(function() {
      this.dispatchEvent('core:transformation');
    }.bind(this));
  },

  // Initialize image from original element plus re-apply every
  // transformations.
  reinitializeImage: function() {
    this.sourceImage.remove();
    this._initializeImage();
    this._popTransformation(this.transformations.slice())
  },

  _popTransformation: function(transformations) {
    if (0 === transformations.length) {
      this.dispatchEvent('core:reinitialized');
      this.refresh();
      return;
    }

    var transformation = transformations.shift();

    var next = function(newImage) {
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
  _initializeDOM: function(imageElement) {
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
  _initializeImage: function() {
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
  _initializePlugins: function(plugins) {
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

            this.options.pencilZone._applyScaling(canvas.getWidth(), canvas.getHeight());
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
            this.darkroom.applyTransformation(new Pencil({
                pencilZone: zone,
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
      isDown = false
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
      this.darkroom.applyTransformation( new RectangleTransformation({
        offSet: canvasOffset,
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3RzdHJhcC5qcyIsImRhcmtyb29tLmpzIiwicGx1Z2luLmpzIiwidHJhbnNmb3JtYXRpb24uanMiLCJ1aS5qcyIsInV0aWxzLmpzIiwiZGFya3Jvb20uaGlzdG9yeS5qcyIsImRhcmtyb29tLnJvdGF0ZS5qcyIsImRhcmtyb29tLmNyb3AuanMiLCJkYXJrcm9vbS5wZW5jaWwuanMiLCJkYXJrcm9vbS5yZWN0YW5nbGUuanMiLCJ6b29tLmpzIiwiZGFya3Jvb20uc2F2ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0NkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDeldBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0N0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQzNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0MxcUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQzNTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQ3pKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZGFya3Jvb20uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIEluamVjdCBTVkcgaWNvbnMgaW50byB0aGUgRE9NXG52YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZWxlbWVudC5pZCA9ICdkYXJrcm9vbS1pY29ucyc7XG5lbGVtZW50LnN0eWxlLmhlaWdodCA9IDA7XG5lbGVtZW50LnN0eWxlLndpZHRoID0gMDtcbmVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuZWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG5lbGVtZW50LmlubmVySFRNTCA9ICc8IS0tIGluamVjdDpzdmcgLS0+PCEtLSBlbmRpbmplY3QgLS0+JztcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cbn0pKCk7XG4iLCIoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbndpbmRvdy5EYXJrcm9vbSA9IERhcmtyb29tO1xuXG4vLyBDb3JlIG9iamVjdCBvZiBEYXJrcm9vbUpTLlxuLy8gQmFzaWNhbGx5IGl0J3MgYSBzaW5nbGUgb2JqZWN0LCBpbnN0YW5jaWFibGUgdmlhIGFuIGVsZW1lbnRcbi8vIChpdCBjb3VsZCBiZSBhIENTUyBzZWxlY3RvciBvciBhIERPTSBlbGVtZW50KSwgc29tZSBjdXN0b20gb3B0aW9ucyxcbi8vIGFuZCBhIGxpc3Qgb2YgcGx1Z2luIG9iamVjdHMgKG9yIG5vbmUgdG8gdXNlIGRlZmF1bHQgb25lcykuXG5mdW5jdGlvbiBEYXJrcm9vbShlbGVtZW50LCBvcHRpb25zLCBwbHVnaW5zKSB7XG4gIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnMsIHBsdWdpbnMpO1xufVxuXG4vLyBDcmVhdGUgYW4gZW1wdHkgbGlzdCBvZiBwbHVnaW4gb2JqZWN0cywgd2hpY2ggd2lsbCBiZSBmaWxsZWQgYnlcbi8vIG90aGVyIHBsdWdpbiBzY3JpcHRzLiBUaGlzIGlzIHRoZSBkZWZhdWx0IHBsdWdpbiBsaXN0IGlmIG5vbmUgaXNcbi8vIHNwZWNpZmllZCBpbiBEYXJrcm9vbSdzcyBjb25zdHJ1Y3Rvci5cbkRhcmtyb29tLnBsdWdpbnMgPSBbXTtcblxuRGFya3Jvb20ucHJvdG90eXBlID0ge1xuICAvLyBSZWZlcmVuY2UgdG8gdGhlIG1haW4gY29udGFpbmVyIGVsZW1lbnRcbiAgY29udGFpbmVyRWxlbWVudDogbnVsbCxcblxuICAvLyBSZWZlcmVuY2UgdG8gdGhlIEZhYnJpYyBjYW52YXMgb2JqZWN0XG4gIGNhbnZhczogbnVsbCxcblxuICAvLyBSZWZlcmVuY2UgdG8gdGhlIEZhYnJpYyBpbWFnZSBvYmplY3RcbiAgaW1hZ2U6IG51bGwsXG5cbiAgLy8gUmVmZXJlbmNlIHRvIHRoZSBGYWJyaWMgc291cmNlIGNhbnZhcyBvYmplY3RcbiAgc291cmNlQ2FudmFzOiBudWxsLFxuXG4gIC8vIFJlZmVyZW5jZSB0byB0aGUgRmFicmljIHNvdXJjZSBpbWFnZSBvYmplY3RcbiAgc291cmNlSW1hZ2U6IG51bGwsXG5cbiAgLy8gVHJhY2sgb2YgdGhlIG9yaWdpbmFsIGltYWdlIGVsZW1lbnRcbiAgb3JpZ2luYWxJbWFnZUVsZW1lbnQ6IG51bGwsXG5cbiAgLy8gU3RhY2sgb2YgdHJhbnNmb3JtYXRpb25zIHRvIGFwcGx5IHRvIHRoZSBpbWFnZSBzb3VyY2VcbiAgdHJhbnNmb3JtYXRpb25zOiBbXSxcblxuICAvLyBEZWZhdWx0IG9wdGlvbnNcbiAgZGVmYXVsdHM6IHtcbiAgICAvLyBDYW52YXMgcHJvcGVydGllcyAoZGltZW5zaW9uLCByYXRpbywgY29sb3IpXG4gICAgbWluV2lkdGg6IG51bGwsXG4gICAgbWluSGVpZ2h0OiBudWxsLFxuICAgIG1heFdpZHRoOiBudWxsLFxuICAgIG1heEhlaWdodDogbnVsbCxcbiAgICByYXRpbzogbnVsbCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcblxuICAgIC8vIFBsdWdpbnMgb3B0aW9uc1xuICAgIHBsdWdpbnM6IHt9LFxuXG4gICAgLy8gUG9zdC1pbml0aWFsaXNhdGlvbiBjYWxsYmFja1xuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uKCkgeyAvKiBub29wICovIH1cbiAgfSxcblxuICAvLyBMaXN0IG9mIHRoZSBpbnN0YW5jaWVkIHBsdWdpbnNcbiAgcGx1Z2luczoge30sXG5cbiAgLy8gVGhpcyBvcHRpb25zIGFyZSBhIG1lcmdlIGJldHdlZW4gYGRlZmF1bHRzYCBhbmQgdGhlIG9wdGlvbnMgcGFzc2VkXG4gIC8vIHRocm91Z2ggdGhlIGNvbnN0cnVjdG9yXG4gIG9wdGlvbnM6IHt9LFxuXG4gIGNvbnN0cnVjdG9yOiBmdW5jdGlvbihlbGVtZW50LCBvcHRpb25zLCBwbHVnaW5zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gRGFya3Jvb20uVXRpbHMuZXh0ZW5kKG9wdGlvbnMsIHRoaXMuZGVmYXVsdHMpO1xuXG4gICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJylcbiAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpO1xuICAgIGlmIChudWxsID09PSBlbGVtZW50KVxuICAgICAgcmV0dXJuO1xuXG4gICAgdmFyIGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAvLyBJbml0aWFsaXplIHRoZSBET00vRmFicmljIGVsZW1lbnRzXG4gICAgICB0aGlzLl9pbml0aWFsaXplRE9NKGVsZW1lbnQpO1xuICAgICAgdGhpcy5faW5pdGlhbGl6ZUltYWdlKCk7XG5cbiAgICAgIC8vIFRoZW4gaW5pdGlhbGl6ZSB0aGUgcGx1Z2luc1xuICAgICAgdGhpcy5faW5pdGlhbGl6ZVBsdWdpbnMoRGFya3Jvb20ucGx1Z2lucyk7XG5cbiAgICAgIC8vIFB1YmxpYyBtZXRob2QgdG8gYWRqdXN0IGltYWdlIGFjY29yZGluZyB0byB0aGUgY2FudmFzXG4gICAgICB0aGlzLnJlZnJlc2goZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIEV4ZWN1dGUgYSBjdXN0b20gY2FsbGJhY2sgYWZ0ZXIgaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5vcHRpb25zLmluaXRpYWxpemUuYmluZCh0aGlzKS5jYWxsKCk7XG4gICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgfS5iaW5kKHRoaXMpXG5cbiAgICAvL2ltYWdlLmNyb3NzT3JpZ2luID0gJ2Fub255bW91cyc7XG4gICAgaW1hZ2Uuc3JjID0gZWxlbWVudC5zcmM7XG4gIH0sXG5cbiAgc2VsZkRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lckVsZW1lbnQ7XG4gICAgdmFyIGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICBjb250YWluZXIucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoaW1hZ2UsIGNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgaW1hZ2Uuc3JjID0gdGhpcy5zb3VyY2VJbWFnZS50b0RhdGFVUkwoKTtcbiAgfSxcblxuICAvLyBBZGQgYWJpbGl0eSB0byBhdHRhY2ggZXZlbnQgbGlzdGVuZXIgb24gdGhlIGNvcmUgb2JqZWN0LlxuICAvLyBJdCB1c2VzIHRoZSBjYW52YXMgZWxlbWVudCB0byBwcm9jZXNzIGV2ZW50cy5cbiAgYWRkRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24oZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgIHZhciBlbCA9IHRoaXMuY2FudmFzLmdldEVsZW1lbnQoKTtcbiAgICBpZiAoZWwuYWRkRXZlbnRMaXN0ZW5lcil7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2spO1xuICAgIH0gZWxzZSBpZiAoZWwuYXR0YWNoRXZlbnQpIHtcbiAgICAgIGVsLmF0dGFjaEV2ZW50KCdvbicgKyBldmVudE5hbWUsIGNhbGxiYWNrKTtcbiAgICB9XG4gIH0sXG5cbiAgZGlzcGF0Y2hFdmVudDogZnVuY3Rpb24oZXZlbnROYW1lKSB7XG4gICAgLy8gVXNlIHRoZSBvbGQgd2F5IG9mIGNyZWF0aW5nIGV2ZW50IHRvIGJlIElFIGNvbXBhdGlibGVcbiAgICAvLyBTZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvR3VpZGUvRXZlbnRzL0NyZWF0aW5nX2FuZF90cmlnZ2VyaW5nX2V2ZW50c1xuICAgIHZhciBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuICAgIGV2ZW50LmluaXRFdmVudChldmVudE5hbWUsIHRydWUsIHRydWUpO1xuXG4gICAgdGhpcy5jYW52YXMuZ2V0RWxlbWVudCgpLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICB9LFxuXG4gIC8vIEFkanVzdCBpbWFnZSAmIGNhbnZhcyBkaW1lbnNpb24gYWNjb3JkaW5nIHRvIG1pbi9tYXggd2lkdGgvaGVpZ2h0XG4gIC8vIGFuZCByYXRpbyBzcGVjaWZpZWQgaW4gdGhlIG9wdGlvbnMuXG4gIC8vIFRoaXMgbWV0aG9kIHNob3VsZCBiZSBjYWxsZWQgYWZ0ZXIgZWFjaCBpbWFnZSB0cmFuc2Zvcm1hdGlvbi5cbiAgcmVmcmVzaDogZnVuY3Rpb24obmV4dCkge1xuICAgIHZhciBjbG9uZSA9IG5ldyBJbWFnZSgpO1xuICAgIGNsb25lLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5fcmVwbGFjZUN1cnJlbnRJbWFnZShuZXcgZmFicmljLkltYWdlKGNsb25lKSk7XG5cbiAgICAgIGlmIChuZXh0KSBuZXh0KCk7XG4gICAgfS5iaW5kKHRoaXMpO1xuICAgIGNsb25lLnNyYyA9IHRoaXMuc291cmNlSW1hZ2UudG9EYXRhVVJMKCk7XG4gIH0sXG5cbiAgX3JlcGxhY2VDdXJyZW50SW1hZ2U6IGZ1bmN0aW9uKG5ld0ltYWdlKSB7XG4gICAgaWYgKHRoaXMuaW1hZ2UpIHtcbiAgICAgIHRoaXMuaW1hZ2UucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5pbWFnZSA9IG5ld0ltYWdlO1xuICAgIHRoaXMuaW1hZ2Uuc2VsZWN0YWJsZSA9IGZhbHNlO1xuXG4gICAgLy8gQWRqdXN0IHdpZHRoIG9yIGhlaWdodCBhY2NvcmRpbmcgdG8gc3BlY2lmaWVkIHJhdGlvXG4gICAgdmFyIHZpZXdwb3J0ID0gRGFya3Jvb20uVXRpbHMuY29tcHV0ZUltYWdlVmlld1BvcnQodGhpcy5pbWFnZSk7XG4gICAgdmFyIGNhbnZhc1dpZHRoID0gdmlld3BvcnQud2lkdGg7XG4gICAgdmFyIGNhbnZhc0hlaWdodCA9IHZpZXdwb3J0LmhlaWdodDtcblxuICAgIC8vIGlmIChudWxsICE9PSB0aGlzLm9wdGlvbnMucmF0aW8pIHtcbiAgICAvLyAgIHZhciBjYW52YXNSYXRpbyA9ICt0aGlzLm9wdGlvbnMucmF0aW87XG4gICAgLy8gICB2YXIgY3VycmVudFJhdGlvID0gY2FudmFzV2lkdGggLyBjYW52YXNIZWlnaHQ7XG5cbiAgICAvLyAgIGlmIChjdXJyZW50UmF0aW8gPiBjYW52YXNSYXRpbykge1xuICAgIC8vICAgICBjYW52YXNIZWlnaHQgPSBjYW52YXNXaWR0aCAvIGNhbnZhc1JhdGlvO1xuICAgIC8vICAgfSBlbHNlIGlmIChjdXJyZW50UmF0aW8gPCBjYW52YXNSYXRpbykge1xuICAgIC8vICAgICBjYW52YXNXaWR0aCA9IGNhbnZhc0hlaWdodCAqIGNhbnZhc1JhdGlvO1xuICAgIC8vICAgfVxuICAgIC8vIH1cblxuICAgIC8vIC8vIFRoZW4gc2NhbGUgdGhlIGltYWdlIHRvIGZpdCBpbnRvIGRpbWVuc2lvbiBsaW1pdHNcbiAgICAvLyB2YXIgc2NhbGVNaW4gPSAxO1xuICAgIC8vIHZhciBzY2FsZU1heCA9IDE7XG4gICAgLy8gdmFyIHNjYWxlWCA9IDE7XG4gICAgLy8gdmFyIHNjYWxlWSA9IDE7XG5cbiAgICAvLyBpZiAobnVsbCAhPT0gdGhpcy5vcHRpb25zLm1heFdpZHRoICYmIHRoaXMub3B0aW9ucy5tYXhXaWR0aCA8IGNhbnZhc1dpZHRoKSB7XG4gICAgLy8gICBzY2FsZVggPSAgdGhpcy5vcHRpb25zLm1heFdpZHRoIC8gY2FudmFzV2lkdGg7XG4gICAgLy8gfVxuICAgIC8vIGlmIChudWxsICE9PSB0aGlzLm9wdGlvbnMubWF4SGVpZ2h0ICYmIHRoaXMub3B0aW9ucy5tYXhIZWlnaHQgPCBjYW52YXNIZWlnaHQpIHtcbiAgICAvLyAgIHNjYWxlWSA9ICB0aGlzLm9wdGlvbnMubWF4SGVpZ2h0IC8gY2FudmFzSGVpZ2h0O1xuICAgIC8vIH1cbiAgICAvLyBzY2FsZU1pbiA9IE1hdGgubWluKHNjYWxlWCwgc2NhbGVZKTtcblxuICAgIC8vIHNjYWxlWCA9IDE7XG4gICAgLy8gc2NhbGVZID0gMTtcbiAgICAvLyBpZiAobnVsbCAhPT0gdGhpcy5vcHRpb25zLm1pbldpZHRoICYmIHRoaXMub3B0aW9ucy5taW5XaWR0aCA+IGNhbnZhc1dpZHRoKSB7XG4gICAgLy8gICBzY2FsZVggPSAgdGhpcy5vcHRpb25zLm1pbldpZHRoIC8gY2FudmFzV2lkdGg7XG4gICAgLy8gfVxuICAgIC8vIGlmIChudWxsICE9PSB0aGlzLm9wdGlvbnMubWluSGVpZ2h0ICYmIHRoaXMub3B0aW9ucy5taW5IZWlnaHQgPiBjYW52YXNIZWlnaHQpIHtcbiAgICAvLyAgIHNjYWxlWSA9ICB0aGlzLm9wdGlvbnMubWluSGVpZ2h0IC8gY2FudmFzSGVpZ2h0O1xuICAgIC8vIH1cbiAgICAvLyBzY2FsZU1heCA9IE1hdGgubWF4KHNjYWxlWCwgc2NhbGVZKTtcblxuICAgIC8vIHZhciBzY2FsZSA9IHNjYWxlTWF4ICogc2NhbGVNaW47IC8vIG9uZSBzaG91bGQgYmUgZXF1YWxzIHRvIDFcblxuICAgIC8vIGNhbnZhc1dpZHRoICo9IHNjYWxlO1xuICAgIC8vIGNhbnZhc0hlaWdodCAqPSBzY2FsZTtcblxuICAgIC8vIEZpbmFsbHkgcGxhY2UgdGhlIGltYWdlIGluIHRoZSBjZW50ZXIgb2YgdGhlIGNhbnZhc1xuICAgIC8vIHRoaXMuaW1hZ2Uuc2V0U2NhbGVYKDEgKiBzY2FsZSk7XG4gICAgLy8gdGhpcy5pbWFnZS5zZXRTY2FsZVkoMSAqIHNjYWxlKTtcbiAgICB0aGlzLmNhbnZhcy5hZGQodGhpcy5pbWFnZSk7XG4gICAgdGhpcy5jYW52YXMuc2V0V2lkdGgoY2FudmFzV2lkdGgpO1xuICAgIHRoaXMuY2FudmFzLnNldEhlaWdodChjYW52YXNIZWlnaHQpO1xuICAgIHRoaXMuY2FudmFzLmNlbnRlck9iamVjdCh0aGlzLmltYWdlKTtcbiAgICB0aGlzLmltYWdlLnNldENvb3JkcygpO1xuICB9LFxuXG4gIC8vIEFwcGx5IHRoZSB0cmFuc2Zvcm1hdGlvbiBvbiB0aGUgY3VycmVudCBpbWFnZSBhbmQgc2F2ZSBpdCBpbiB0aGVcbiAgLy8gdHJhbnNmb3JtYXRpb25zIHN0YWNrIChpbiBvcmRlciB0byByZWNvbnN0aXR1dGUgdGhlIHByZXZpb3VzIHN0YXRlc1xuICAvLyBvZiB0aGUgaW1hZ2UpLlxuICBhcHBseVRyYW5zZm9ybWF0aW9uOiBmdW5jdGlvbih0cmFuc2Zvcm1hdGlvbikge1xuICAgIHRoaXMudHJhbnNmb3JtYXRpb25zLnB1c2godHJhbnNmb3JtYXRpb24pO1xuXG4gICAgdHJhbnNmb3JtYXRpb24uYXBwbHlUcmFuc2Zvcm1hdGlvbihcbiAgICAgIHRoaXMuc291cmNlQ2FudmFzLFxuICAgICAgdGhpcy5zb3VyY2VJbWFnZSxcbiAgICAgIHRoaXMuX3Bvc3RUcmFuc2Zvcm1hdGlvbi5iaW5kKHRoaXMpXG4gICAgKTtcbiAgfSxcblxuICBfcG9zdFRyYW5zZm9ybWF0aW9uOiBmdW5jdGlvbihuZXdJbWFnZSkge1xuICAgIGlmIChuZXdJbWFnZSlcbiAgICAgIHRoaXMuc291cmNlSW1hZ2UgPSBuZXdJbWFnZTtcblxuICAgIHRoaXMucmVmcmVzaChmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnY29yZTp0cmFuc2Zvcm1hdGlvbicpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH0sXG5cbiAgLy8gSW5pdGlhbGl6ZSBpbWFnZSBmcm9tIG9yaWdpbmFsIGVsZW1lbnQgcGx1cyByZS1hcHBseSBldmVyeVxuICAvLyB0cmFuc2Zvcm1hdGlvbnMuXG4gIHJlaW5pdGlhbGl6ZUltYWdlOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnNvdXJjZUltYWdlLnJlbW92ZSgpO1xuICAgIHRoaXMuX2luaXRpYWxpemVJbWFnZSgpO1xuICAgIHRoaXMuX3BvcFRyYW5zZm9ybWF0aW9uKHRoaXMudHJhbnNmb3JtYXRpb25zLnNsaWNlKCkpXG4gIH0sXG5cbiAgX3BvcFRyYW5zZm9ybWF0aW9uOiBmdW5jdGlvbih0cmFuc2Zvcm1hdGlvbnMpIHtcbiAgICBpZiAoMCA9PT0gdHJhbnNmb3JtYXRpb25zLmxlbmd0aCkge1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdjb3JlOnJlaW5pdGlhbGl6ZWQnKTtcbiAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciB0cmFuc2Zvcm1hdGlvbiA9IHRyYW5zZm9ybWF0aW9ucy5zaGlmdCgpO1xuXG4gICAgdmFyIG5leHQgPSBmdW5jdGlvbihuZXdJbWFnZSkge1xuICAgICAgaWYgKG5ld0ltYWdlKSB0aGlzLnNvdXJjZUltYWdlID0gbmV3SW1hZ2U7XG4gICAgICB0aGlzLl9wb3BUcmFuc2Zvcm1hdGlvbih0cmFuc2Zvcm1hdGlvbnMpXG4gICAgfTtcblxuICAgIHRyYW5zZm9ybWF0aW9uLmFwcGx5VHJhbnNmb3JtYXRpb24oXG4gICAgICB0aGlzLnNvdXJjZUNhbnZhcyxcbiAgICAgIHRoaXMuc291cmNlSW1hZ2UsXG4gICAgICBuZXh0LmJpbmQodGhpcylcbiAgICApO1xuICB9LFxuXG4gIC8vIENyZWF0ZSB0aGUgRE9NIGVsZW1lbnRzIGFuZCBpbnN0YW5jaWF0ZSB0aGUgRmFicmljIGNhbnZhcy5cbiAgLy8gVGhlIGltYWdlIGVsZW1lbnQgaXMgcmVwbGFjZWQgYnkgYSBuZXcgYGRpdmAgZWxlbWVudC5cbiAgLy8gSG93ZXZlciB0aGUgb3JpZ2luYWwgaW1hZ2UgaXMgcmUtaW5qZWN0ZWQgaW4gb3JkZXIgdG8ga2VlcCBhIHRyYWNlIG9mIGl0LlxuICBfaW5pdGlhbGl6ZURPTTogZnVuY3Rpb24oaW1hZ2VFbGVtZW50KSB7XG4gICAgLy8gQ29udGFpbmVyXG4gICAgdmFyIG1haW5Db250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbkNvbnRhaW5lckVsZW1lbnQuY2xhc3NOYW1lID0gJ2Rhcmtyb29tLWNvbnRhaW5lcic7XG5cbiAgICAvLyBUb29sYmFyXG4gICAgdmFyIHRvb2xiYXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9vbGJhckVsZW1lbnQuY2xhc3NOYW1lID0gJ2Rhcmtyb29tLXRvb2xiYXInO1xuICAgIG1haW5Db250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKHRvb2xiYXJFbGVtZW50KTtcblxuICAgIC8vIFZpZXdwb3J0IGNhbnZhc1xuICAgIHZhciBjYW52YXNDb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FudmFzQ29udGFpbmVyRWxlbWVudC5jbGFzc05hbWUgPSAnZGFya3Jvb20taW1hZ2UtY29udGFpbmVyJztcbiAgICB2YXIgY2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIGNhbnZhc0NvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQoY2FudmFzRWxlbWVudCk7XG4gICAgbWFpbkNvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQoY2FudmFzQ29udGFpbmVyRWxlbWVudCk7XG5cbiAgICAvLyBTb3VyY2UgY2FudmFzXG4gICAgdmFyIHNvdXJjZUNhbnZhc0NvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzb3VyY2VDYW52YXNDb250YWluZXJFbGVtZW50LmNsYXNzTmFtZSA9ICdkYXJrcm9vbS1zb3VyY2UtY29udGFpbmVyJztcbiAgICBzb3VyY2VDYW52YXNDb250YWluZXJFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgdmFyIHNvdXJjZUNhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBzb3VyY2VDYW52YXNDb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKHNvdXJjZUNhbnZhc0VsZW1lbnQpO1xuICAgIG1haW5Db250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKHNvdXJjZUNhbnZhc0NvbnRhaW5lckVsZW1lbnQpO1xuXG4gICAgLy8gT3JpZ2luYWwgaW1hZ2VcbiAgICBpbWFnZUVsZW1lbnQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobWFpbkNvbnRhaW5lckVsZW1lbnQsIGltYWdlRWxlbWVudCk7XG4gICAgaW1hZ2VFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgbWFpbkNvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQoaW1hZ2VFbGVtZW50KTtcblxuICAgIC8vIEluc3RhbmNpYXRlIG9iamVjdCBmcm9tIGVsZW1lbnRzXG4gICAgdGhpcy5jb250YWluZXJFbGVtZW50ID0gbWFpbkNvbnRhaW5lckVsZW1lbnQ7XG4gICAgdGhpcy5vcmlnaW5hbEltYWdlRWxlbWVudCA9IGltYWdlRWxlbWVudDtcblxuICAgIHRoaXMudG9vbGJhciA9IG5ldyBEYXJrcm9vbS5VSS5Ub29sYmFyKHRvb2xiYXJFbGVtZW50KTtcblxuICAgIHRoaXMuY2FudmFzID0gbmV3IGZhYnJpYy5DYW52YXMoY2FudmFzRWxlbWVudCwge1xuICAgICAgc2VsZWN0aW9uOiBmYWxzZSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5vcHRpb25zLmJhY2tncm91bmRDb2xvclxuICAgIH0pO1xuXG4gICAgdGhpcy5zb3VyY2VDYW52YXMgPSBuZXcgZmFicmljLkNhbnZhcyhzb3VyY2VDYW52YXNFbGVtZW50LCB7XG4gICAgICBzZWxlY3Rpb246IGZhbHNlLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLm9wdGlvbnMuYmFja2dyb3VuZENvbG9yXG4gICAgfSk7XG4gIH0sXG5cbiAgLy8gSW5zdGFuY2lhdGUgdGhlIEZhYnJpYyBpbWFnZSBvYmplY3QuXG4gIC8vIFRoZSBpbWFnZSBpcyBjcmVhdGVkIGFzIGEgc3RhdGljIGVsZW1lbnQgd2l0aCBubyBjb250cm9sLFxuICAvLyB0aGVuIGl0IGlzIGFkZCBpbiB0aGUgRmFicmljIGNhbnZhcyBvYmplY3QuXG4gIF9pbml0aWFsaXplSW1hZ2U6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc291cmNlSW1hZ2UgPSBuZXcgZmFicmljLkltYWdlKHRoaXMub3JpZ2luYWxJbWFnZUVsZW1lbnQsIHtcbiAgICAgIC8vIFNvbWUgb3B0aW9ucyB0byBtYWtlIHRoZSBpbWFnZSBzdGF0aWNcbiAgICAgIHNlbGVjdGFibGU6IGZhbHNlLFxuICAgICAgZXZlbnRlZDogZmFsc2UsXG4gICAgICBsb2NrTW92ZW1lbnRYOiB0cnVlLFxuICAgICAgbG9ja01vdmVtZW50WTogdHJ1ZSxcbiAgICAgIGxvY2tSb3RhdGlvbjogdHJ1ZSxcbiAgICAgIGxvY2tTY2FsaW5nWDogdHJ1ZSxcbiAgICAgIGxvY2tTY2FsaW5nWTogdHJ1ZSxcbiAgICAgIGxvY2tVbmlTY2FsaW5nOiB0cnVlLFxuICAgICAgaGFzQ29udHJvbHM6IGZhbHNlLFxuICAgICAgaGFzQm9yZGVyczogZmFsc2UsXG4gICAgfSk7XG5cbiAgICB0aGlzLnNvdXJjZUNhbnZhcy5hZGQodGhpcy5zb3VyY2VJbWFnZSk7XG5cbiAgICAvLyBBZGp1c3Qgd2lkdGggb3IgaGVpZ2h0IGFjY29yZGluZyB0byBzcGVjaWZpZWQgcmF0aW9cbiAgICB2YXIgdmlld3BvcnQgPSBEYXJrcm9vbS5VdGlscy5jb21wdXRlSW1hZ2VWaWV3UG9ydCh0aGlzLnNvdXJjZUltYWdlKTtcbiAgICB2YXIgY2FudmFzV2lkdGggPSB2aWV3cG9ydC53aWR0aDtcbiAgICB2YXIgY2FudmFzSGVpZ2h0ID0gdmlld3BvcnQuaGVpZ2h0O1xuXG4gICAgdGhpcy5zb3VyY2VDYW52YXMuc2V0V2lkdGgoY2FudmFzV2lkdGgpO1xuICAgIHRoaXMuc291cmNlQ2FudmFzLnNldEhlaWdodChjYW52YXNIZWlnaHQpO1xuICAgIHRoaXMuc291cmNlQ2FudmFzLmNlbnRlck9iamVjdCh0aGlzLnNvdXJjZUltYWdlKTtcbiAgICB0aGlzLnNvdXJjZUltYWdlLnNldENvb3JkcygpO1xuICB9LFxuXG4gIC8vIEluaXRpYWxpemUgZXZlcnkgcGx1Z2lucy5cbiAgLy8gTm90ZSB0aGF0IHBsdWdpbnMgYXJlIGluc3RhbmNpYXRlZCBpbiB0aGUgc2FtZSBvcmRlciB0aGFuIHRoZXlcbiAgLy8gYXJlIGRlY2xhcmVkIGluIHRoZSBwYXJhbWV0ZXIgb2JqZWN0LlxuICBfaW5pdGlhbGl6ZVBsdWdpbnM6IGZ1bmN0aW9uKHBsdWdpbnMpIHtcbiAgICBmb3IgKHZhciBuYW1lIGluIHBsdWdpbnMpIHtcbiAgICAgIHZhciBwbHVnaW4gPSBwbHVnaW5zW25hbWVdO1xuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMucGx1Z2luc1tuYW1lXTtcblxuICAgICAgLy8gU2V0dGluZyBmYWxzZSBpbnRvIHRoZSBwbHVnaW4gb3B0aW9ucyB3aWxsIGRpc2FibGUgdGhlIHBsdWdpblxuICAgICAgaWYgKG9wdGlvbnMgPT09IGZhbHNlKVxuICAgICAgICBjb250aW51ZTtcblxuICAgICAgLy8gQXZvaWQgYW55IGlzc3VlcyB3aXRoIF9wcm90b19cbiAgICAgIGlmICghcGx1Z2lucy5oYXNPd25Qcm9wZXJ0eShuYW1lKSlcbiAgICAgICAgY29udGludWU7XG5cbiAgICAgIHRoaXMucGx1Z2luc1tuYW1lXSA9IG5ldyBwbHVnaW4odGhpcywgb3B0aW9ucyk7XG4gICAgfVxuICB9LFxuXG4gIGNsZWFyRm9jdXM6IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgIGZvciAodmFyIGtleSBpbiB0aGlzLnBsdWdpbnMpIHtcbiAgICAgIGlmIChrZXkgIT0gaW5zdGFuY2UpIHtcbiAgICAgICAgdGhpcy5wbHVnaW5zW2tleV0uY2xlYXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxufSkoKTtcbiIsIihmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuRGFya3Jvb20uUGx1Z2luID0gUGx1Z2luO1xuXG4vLyBEZWZpbmUgYSBwbHVnaW4gb2JqZWN0LiBUaGlzIGlzIHRoZSAoYWJzdHJhY3QpIHBhcmVudCBjbGFzcyB3aGljaFxuLy8gaGFzIHRvIGJlIGV4dGVuZGVkIGZvciBlYWNoIHBsdWdpbi5cbmZ1bmN0aW9uIFBsdWdpbihkYXJrcm9vbSwgb3B0aW9ucykge1xuICB0aGlzLmRhcmtyb29tID0gZGFya3Jvb207XG4gIHRoaXMub3B0aW9ucyA9IERhcmtyb29tLlV0aWxzLmV4dGVuZChvcHRpb25zLCB0aGlzLmRlZmF1bHRzKTtcbiAgdGhpcy5pbml0aWFsaXplKCk7XG59XG5cblBsdWdpbi5wcm90b3R5cGUgPSB7XG4gIGRlZmF1bHRzOiB7fSxcbiAgaW5pdGlhbGl6ZTogZnVuY3Rpb24oKSB7IH0sXG4gIGNsZWFyOiBmdW5jdGlvbigpIHsgfVxufVxuXG4vLyBJbnNwaXJlZCBieSBCYWNrYm9uZS5qcyBleHRlbmQgY2FwYWJpbGl0eS5cblBsdWdpbi5leHRlbmQgPSBmdW5jdGlvbihwcm90b1Byb3BzKSB7XG4gIHZhciBwYXJlbnQgPSB0aGlzO1xuICB2YXIgY2hpbGQ7XG5cbiAgaWYgKHByb3RvUHJvcHMgJiYgcHJvdG9Qcm9wcy5oYXNPd25Qcm9wZXJ0eSgnY29uc3RydWN0b3InKSkge1xuICAgIGNoaWxkID0gcHJvdG9Qcm9wcy5jb25zdHJ1Y3RvcjtcbiAgfSBlbHNlIHtcbiAgICBjaGlsZCA9IGZ1bmN0aW9uKCl7IHJldHVybiBwYXJlbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfTtcbiAgfVxuXG4gIERhcmtyb29tLlV0aWxzLmV4dGVuZChjaGlsZCwgcGFyZW50KTtcblxuICB2YXIgU3Vycm9nYXRlID0gZnVuY3Rpb24oKXsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9O1xuICBTdXJyb2dhdGUucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTtcbiAgY2hpbGQucHJvdG90eXBlID0gbmV3IFN1cnJvZ2F0ZTtcblxuICBpZiAocHJvdG9Qcm9wcykgRGFya3Jvb20uVXRpbHMuZXh0ZW5kKGNoaWxkLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG5cbiAgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTtcblxuICByZXR1cm4gY2hpbGQ7XG59XG5cbn0pKCk7XG4iLCIoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbkRhcmtyb29tLlRyYW5zZm9ybWF0aW9uID0gVHJhbnNmb3JtYXRpb247XG5cbmZ1bmN0aW9uIFRyYW5zZm9ybWF0aW9uKG9wdGlvbnMpIHtcbiAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbn1cblxuVHJhbnNmb3JtYXRpb24ucHJvdG90eXBlID0ge1xuICBhcHBseVRyYW5zZm9ybWF0aW9uOiBmdW5jdGlvbihpbWFnZSkgeyAvKiBuby1vcCAqLyAgfVxufVxuXG4vLyBJbnNwaXJlZCBieSBCYWNrYm9uZS5qcyBleHRlbmQgY2FwYWJpbGl0eS5cblRyYW5zZm9ybWF0aW9uLmV4dGVuZCA9IGZ1bmN0aW9uKHByb3RvUHJvcHMpIHtcbiAgdmFyIHBhcmVudCA9IHRoaXM7XG4gIHZhciBjaGlsZDtcblxuICBpZiAocHJvdG9Qcm9wcyAmJiBwcm90b1Byb3BzLmhhc093blByb3BlcnR5KCdjb25zdHJ1Y3RvcicpKSB7XG4gICAgY2hpbGQgPSBwcm90b1Byb3BzLmNvbnN0cnVjdG9yO1xuICB9IGVsc2Uge1xuICAgIGNoaWxkID0gZnVuY3Rpb24oKXsgcmV0dXJuIHBhcmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9O1xuICB9XG5cbiAgRGFya3Jvb20uVXRpbHMuZXh0ZW5kKGNoaWxkLCBwYXJlbnQpO1xuXG4gIHZhciBTdXJyb2dhdGUgPSBmdW5jdGlvbigpeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH07XG4gIFN1cnJvZ2F0ZS5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlO1xuICBjaGlsZC5wcm90b3R5cGUgPSBuZXcgU3Vycm9nYXRlO1xuXG4gIGlmIChwcm90b1Byb3BzKSBEYXJrcm9vbS5VdGlscy5leHRlbmQoY2hpbGQucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcblxuICBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlO1xuXG4gIHJldHVybiBjaGlsZDtcbn1cblxufSkoKTtcbiIsIihmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuRGFya3Jvb20uVUkgPSB7XG4gIFRvb2xiYXI6IFRvb2xiYXIsXG4gIEJ1dHRvbkdyb3VwOiBCdXR0b25Hcm91cCxcbiAgQnV0dG9uOiBCdXR0b24sXG59O1xuXG4vLyBUb29sYmFyIG9iamVjdC5cbmZ1bmN0aW9uIFRvb2xiYXIoZWxlbWVudCkge1xuICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xufVxuXG5Ub29sYmFyLnByb3RvdHlwZSA9IHtcbiAgY3JlYXRlQnV0dG9uR3JvdXA6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICB2YXIgYnV0dG9uR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidXR0b25Hcm91cC5jbGFzc05hbWUgPSAnZGFya3Jvb20tYnV0dG9uLWdyb3VwJztcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uR3JvdXApO1xuXG4gICAgcmV0dXJuIG5ldyBCdXR0b25Hcm91cChidXR0b25Hcm91cCk7XG4gIH1cbn07XG5cbi8vIEJ1dHRvbkdyb3VwIG9iamVjdC5cbmZ1bmN0aW9uIEJ1dHRvbkdyb3VwKGVsZW1lbnQpIHtcbiAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbn1cblxuQnV0dG9uR3JvdXAucHJvdG90eXBlID0ge1xuICBjcmVhdGVCdXR0b246IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICBpbWFnZTogJ2hlbHAnLFxuICAgICAgdHlwZTogJ2RlZmF1bHQnLFxuICAgICAgZ3JvdXA6ICdkZWZhdWx0JyxcbiAgICAgIGhpZGU6IGZhbHNlLFxuICAgICAgZGlzYWJsZWQ6IGZhbHNlXG4gICAgfTtcblxuICAgIG9wdGlvbnMgPSBEYXJrcm9vbS5VdGlscy5leHRlbmQob3B0aW9ucywgZGVmYXVsdHMpO1xuXG4gICAgdmFyIGJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b25FbGVtZW50LnR5cGUgPSAnYnV0dG9uJztcbiAgICBidXR0b25FbGVtZW50LmNsYXNzTmFtZSA9ICdkYXJrcm9vbS1idXR0b24gZGFya3Jvb20tYnV0dG9uLScgKyBvcHRpb25zLnR5cGU7XG4gICAgYnV0dG9uRWxlbWVudC5pbm5lckhUTUwgPSAnPHN2ZyBjbGFzcz1cImRhcmtyb29tLWljb25cIj48dXNlIHhsaW5rOmhyZWY9XCIjJyArIG9wdGlvbnMuaW1hZ2UgKyAnXCIgLz48L3N2Zz4nO1xuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChidXR0b25FbGVtZW50KTtcblxuICAgIHZhciBidXR0b24gPSBuZXcgQnV0dG9uKGJ1dHRvbkVsZW1lbnQpO1xuICAgIGJ1dHRvbi5oaWRlKG9wdGlvbnMuaGlkZSk7XG4gICAgYnV0dG9uLmRpc2FibGUob3B0aW9ucy5kaXNhYmxlZCk7XG5cbiAgICByZXR1cm4gYnV0dG9uO1xuICB9XG59XG5cbi8vIEJ1dHRvbiBvYmplY3QuXG5mdW5jdGlvbiBCdXR0b24oZWxlbWVudCkge1xuICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xufVxuXG5CdXR0b24ucHJvdG90eXBlID0ge1xuICBhZGRFdmVudExpc3RlbmVyOiBmdW5jdGlvbihldmVudE5hbWUsIGxpc3RlbmVyKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKXtcbiAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50LmF0dGFjaEV2ZW50KSB7XG4gICAgICB0aGlzLmVsZW1lbnQuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50TmFtZSwgbGlzdGVuZXIpO1xuICAgIH1cbiAgfSxcbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24oZXZlbnROYW1lLCBsaXN0ZW5lcikge1xuICAgIGlmICh0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcil7XG4gICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyKTtcbiAgICB9XG4gIH0sXG4gIGFjdGl2ZTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICBpZiAodmFsdWUpXG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZGFya3Jvb20tYnV0dG9uLWFjdGl2ZScpO1xuICAgIGVsc2VcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrcm9vbS1idXR0b24tYWN0aXZlJyk7XG4gIH0sXG4gIGhpZGU6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlKVxuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Rhcmtyb29tLWJ1dHRvbi1oaWRkZW4nKTtcbiAgICBlbHNlXG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZGFya3Jvb20tYnV0dG9uLWhpZGRlbicpO1xuICB9LFxuICBkaXNhYmxlOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHRoaXMuZWxlbWVudC5kaXNhYmxlZCA9ICh2YWx1ZSkgPyB0cnVlIDogZmFsc2U7XG4gIH1cbn07XG5cbn0pKCk7XG4iLCIoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbkRhcmtyb29tLlV0aWxzID0ge1xuICBleHRlbmQ6IGV4dGVuZCxcbiAgY29tcHV0ZUltYWdlVmlld1BvcnQ6IGNvbXB1dGVJbWFnZVZpZXdQb3J0LFxufTtcblxuXG4vLyBVdGlsaXR5IG1ldGhvZCB0byBlYXNpbHkgZXh0ZW5kIG9iamVjdHMuXG5mdW5jdGlvbiBleHRlbmQoYiwgYSkge1xuICB2YXIgcHJvcDtcbiAgaWYgKGIgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBhO1xuICB9XG4gIGZvciAocHJvcCBpbiBhKSB7XG4gICAgaWYgKGEuaGFzT3duUHJvcGVydHkocHJvcCkgJiYgYi5oYXNPd25Qcm9wZXJ0eShwcm9wKSA9PT0gZmFsc2UpIHtcbiAgICAgIGJbcHJvcF0gPSBhW3Byb3BdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYjtcbn1cblxuZnVuY3Rpb24gY29tcHV0ZUltYWdlVmlld1BvcnQoaW1hZ2UpIHtcbiAgcmV0dXJuIHtcbiAgICBoZWlnaHQ6IE1hdGguYWJzKGltYWdlLmdldFdpZHRoKCkgKiAoTWF0aC5zaW4oaW1hZ2UuZ2V0QW5nbGUoKSAqIE1hdGguUEkvMTgwKSkpICsgTWF0aC5hYnMoaW1hZ2UuZ2V0SGVpZ2h0KCkgKiAoTWF0aC5jb3MoaW1hZ2UuZ2V0QW5nbGUoKSAqIE1hdGguUEkvMTgwKSkpLFxuICAgIHdpZHRoOiBNYXRoLmFicyhpbWFnZS5nZXRIZWlnaHQoKSAqIChNYXRoLnNpbihpbWFnZS5nZXRBbmdsZSgpICogTWF0aC5QSS8xODApKSkgKyBNYXRoLmFicyhpbWFnZS5nZXRXaWR0aCgpICogKE1hdGguY29zKGltYWdlLmdldEFuZ2xlKCkgKiBNYXRoLlBJLzE4MCkpKSxcbiAgfVxufVxuXG59KSgpO1xuIiwiOyhmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCBEYXJrcm9vbSwgZmFicmljKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBEYXJrcm9vbS5wbHVnaW5zWydoaXN0b3J5J10gPSBEYXJrcm9vbS5QbHVnaW4uZXh0ZW5kKHtcbiAgICB1bmRvVHJhbnNmb3JtYXRpb25zOiBbXSxcblxuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uIEluaXREYXJrcm9vbUhpc3RvcnlQbHVnaW4oKSB7XG4gICAgICB0aGlzLl9pbml0QnV0dG9ucygpO1xuXG4gICAgICB0aGlzLmRhcmtyb29tLmFkZEV2ZW50TGlzdGVuZXIoJ2NvcmU6dHJhbnNmb3JtYXRpb24nLCB0aGlzLl9vblRyYW5mb3JtYXRpb25BcHBsaWVkLmJpbmQodGhpcykpO1xuICAgIH0sXG5cbiAgICB1bmRvOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLmRhcmtyb29tLnRyYW5zZm9ybWF0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgbGFzdFRyYW5zZm9ybWF0aW9uID0gdGhpcy5kYXJrcm9vbS50cmFuc2Zvcm1hdGlvbnMucG9wKCk7XG4gICAgICB0aGlzLnVuZG9UcmFuc2Zvcm1hdGlvbnMudW5zaGlmdChsYXN0VHJhbnNmb3JtYXRpb24pO1xuXG4gICAgICB0aGlzLmRhcmtyb29tLnJlaW5pdGlhbGl6ZUltYWdlKCk7XG4gICAgICB0aGlzLl91cGRhdGVCdXR0b25zKCk7XG4gICAgfSxcblxuICAgIHJlZG86IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMudW5kb1RyYW5zZm9ybWF0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgY2FuY2VsVHJhbnNmb3JtYXRpb24gPSB0aGlzLnVuZG9UcmFuc2Zvcm1hdGlvbnMuc2hpZnQoKTtcbiAgICAgIHRoaXMuZGFya3Jvb20udHJhbnNmb3JtYXRpb25zLnB1c2goY2FuY2VsVHJhbnNmb3JtYXRpb24pO1xuXG4gICAgICB0aGlzLmRhcmtyb29tLnJlaW5pdGlhbGl6ZUltYWdlKCk7XG4gICAgICB0aGlzLl91cGRhdGVCdXR0b25zKCk7XG4gICAgfSxcblxuICAgIF9pbml0QnV0dG9uczogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgYnV0dG9uR3JvdXAgPSB0aGlzLmRhcmtyb29tLnRvb2xiYXIuY3JlYXRlQnV0dG9uR3JvdXAoKTtcblxuICAgICAgdGhpcy5iYWNrQnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcbiAgICAgICAgaW1hZ2U6ICd1bmRvJyxcbiAgICAgICAgZGlzYWJsZWQ6IHRydWVcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmZvcndhcmRCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xuICAgICAgICBpbWFnZTogJ3JlZG8nLFxuICAgICAgICBkaXNhYmxlZDogdHJ1ZVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuYmFja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudW5kby5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMuZm9yd2FyZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucmVkby5iaW5kKHRoaXMpKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIF91cGRhdGVCdXR0b25zOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuYmFja0J1dHRvbi5kaXNhYmxlKCh0aGlzLmRhcmtyb29tLnRyYW5zZm9ybWF0aW9ucy5sZW5ndGggPT09IDApKVxuICAgICAgdGhpcy5mb3J3YXJkQnV0dG9uLmRpc2FibGUoKHRoaXMudW5kb1RyYW5zZm9ybWF0aW9ucy5sZW5ndGggPT09IDApKVxuICAgIH0sXG5cbiAgICBfb25UcmFuZm9ybWF0aW9uQXBwbGllZDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnVuZG9UcmFuc2Zvcm1hdGlvbnMgPSBbXTtcbiAgICAgIHRoaXMuX3VwZGF0ZUJ1dHRvbnMoKTtcbiAgICB9XG4gIH0pO1xufSkod2luZG93LCBkb2N1bWVudCwgRGFya3Jvb20sIGZhYnJpYyk7XG4iLCIoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBSb3RhdGlvbiA9IERhcmtyb29tLlRyYW5zZm9ybWF0aW9uLmV4dGVuZCh7XG4gIGFwcGx5VHJhbnNmb3JtYXRpb246IGZ1bmN0aW9uKGNhbnZhcywgaW1hZ2UsIG5leHQpIHtcbiAgICB2YXIgYW5nbGUgPSAoaW1hZ2UuZ2V0QW5nbGUoKSArIHRoaXMub3B0aW9ucy5hbmdsZSkgJSAzNjA7XG4gICAgaW1hZ2Uucm90YXRlKGFuZ2xlKTtcblxuICAgIHZhciB3aWR0aCwgaGVpZ2h0O1xuICAgIGhlaWdodCA9IE1hdGguYWJzKGltYWdlLmdldFdpZHRoKCkqKE1hdGguc2luKGFuZ2xlKk1hdGguUEkvMTgwKSkpK01hdGguYWJzKGltYWdlLmdldEhlaWdodCgpKihNYXRoLmNvcyhhbmdsZSpNYXRoLlBJLzE4MCkpKTtcbiAgICB3aWR0aCA9IE1hdGguYWJzKGltYWdlLmdldEhlaWdodCgpKihNYXRoLnNpbihhbmdsZSpNYXRoLlBJLzE4MCkpKStNYXRoLmFicyhpbWFnZS5nZXRXaWR0aCgpKihNYXRoLmNvcyhhbmdsZSpNYXRoLlBJLzE4MCkpKTtcblxuICAgIGNhbnZhcy5zZXRXaWR0aCh3aWR0aCk7XG4gICAgY2FudmFzLnNldEhlaWdodChoZWlnaHQpO1xuXG4gICAgY2FudmFzLmNlbnRlck9iamVjdChpbWFnZSk7XG4gICAgaW1hZ2Uuc2V0Q29vcmRzKCk7XG4gICAgY2FudmFzLnJlbmRlckFsbCgpO1xuXG4gICAgbmV4dCgpO1xuICB9XG59KTtcblxuRGFya3Jvb20ucGx1Z2luc1sncm90YXRlJ10gPSBEYXJrcm9vbS5QbHVnaW4uZXh0ZW5kKHtcblxuICBpbml0aWFsaXplOiBmdW5jdGlvbiBJbml0RGFya3Jvb21Sb3RhdGVQbHVnaW4oKSB7XG4gICAgdmFyIGJ1dHRvbkdyb3VwID0gdGhpcy5kYXJrcm9vbS50b29sYmFyLmNyZWF0ZUJ1dHRvbkdyb3VwKCk7XG5cbiAgICB2YXIgbGVmdEJ1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XG4gICAgICBpbWFnZTogJ3JvdGF0ZS1sZWZ0J1xuICAgIH0pO1xuXG4gICAgdmFyIHJpZ2h0QnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcbiAgICAgIGltYWdlOiAncm90YXRlLXJpZ2h0J1xuICAgIH0pO1xuXG4gICAgbGVmdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucm90YXRlTGVmdC5iaW5kKHRoaXMpKTtcbiAgICByaWdodEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucm90YXRlUmlnaHQuYmluZCh0aGlzKSk7XG4gIH0sXG5cbiAgcm90YXRlTGVmdDogZnVuY3Rpb24gcm90YXRlTGVmdCgpIHtcbiAgICB0aGlzLnJvdGF0ZSgtOTApO1xuICB9LFxuXG4gIHJvdGF0ZVJpZ2h0OiBmdW5jdGlvbiByb3RhdGVSaWdodCgpIHtcbiAgICB0aGlzLnJvdGF0ZSg5MCk7XG4gIH0sXG5cbiAgcm90YXRlOiBmdW5jdGlvbiByb3RhdGUoYW5nbGUpIHtcbiAgICB0aGlzLmRhcmtyb29tLmFwcGx5VHJhbnNmb3JtYXRpb24oXG4gICAgICBuZXcgUm90YXRpb24oe2FuZ2xlOiBhbmdsZX0pXG4gICAgKTtcbiAgfVxuXG59KTtcblxufSkoKTtcbiIsIihmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIENyb3AgPSBEYXJrcm9vbS5UcmFuc2Zvcm1hdGlvbi5leHRlbmQoe1xuICBhcHBseVRyYW5zZm9ybWF0aW9uOiBmdW5jdGlvbihjYW52YXMsIGltYWdlLCBuZXh0KSB7XG4gICAgLy8gU25hcHNob3QgdGhlIGltYWdlIGRlbGltaXRlZCBieSB0aGUgY3JvcCB6b25lXG4gICAgdmFyIHNuYXBzaG90ID0gbmV3IEltYWdlKCk7XG4gICAgc25hcHNob3Qub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAvLyBWYWxpZGF0ZSBpbWFnZVxuICAgICAgaWYgKGhlaWdodCA8IDEgfHwgd2lkdGggPCAxKVxuICAgICAgICByZXR1cm47XG5cbiAgICAgIHZhciBpbWdJbnN0YW5jZSA9IG5ldyBmYWJyaWMuSW1hZ2UodGhpcywge1xuICAgICAgICAvLyBvcHRpb25zIHRvIG1ha2UgdGhlIGltYWdlIHN0YXRpY1xuICAgICAgICBzZWxlY3RhYmxlOiBmYWxzZSxcbiAgICAgICAgZXZlbnRlZDogZmFsc2UsXG4gICAgICAgIGxvY2tNb3ZlbWVudFg6IHRydWUsXG4gICAgICAgIGxvY2tNb3ZlbWVudFk6IHRydWUsXG4gICAgICAgIGxvY2tSb3RhdGlvbjogdHJ1ZSxcbiAgICAgICAgbG9ja1NjYWxpbmdYOiB0cnVlLFxuICAgICAgICBsb2NrU2NhbGluZ1k6IHRydWUsXG4gICAgICAgIGxvY2tVbmlTY2FsaW5nOiB0cnVlLFxuICAgICAgICBoYXNDb250cm9sczogZmFsc2UsXG4gICAgICAgIGhhc0JvcmRlcnM6IGZhbHNlXG4gICAgICB9KTtcblxuICAgICAgdmFyIHdpZHRoID0gdGhpcy53aWR0aDtcbiAgICAgIHZhciBoZWlnaHQgPSB0aGlzLmhlaWdodDtcblxuICAgICAgLy8gVXBkYXRlIGNhbnZhcyBzaXplXG4gICAgICBjYW52YXMuc2V0V2lkdGgod2lkdGgpO1xuICAgICAgY2FudmFzLnNldEhlaWdodChoZWlnaHQpO1xuXG4gICAgICAvLyBBZGQgaW1hZ2VcbiAgICAgIGltYWdlLnJlbW92ZSgpO1xuICAgICAgY2FudmFzLmFkZChpbWdJbnN0YW5jZSk7XG5cbiAgICAgIG5leHQoaW1nSW5zdGFuY2UpO1xuICAgIH07XG5cbiAgICB2YXIgdmlld3BvcnQgPSBEYXJrcm9vbS5VdGlscy5jb21wdXRlSW1hZ2VWaWV3UG9ydChpbWFnZSk7XG4gICAgdmFyIGltYWdlV2lkdGggPSB2aWV3cG9ydC53aWR0aDtcbiAgICB2YXIgaW1hZ2VIZWlnaHQgPSB2aWV3cG9ydC5oZWlnaHQ7XG5cbiAgICB2YXIgbGVmdCA9IHRoaXMub3B0aW9ucy5sZWZ0ICogaW1hZ2VXaWR0aDtcbiAgICB2YXIgdG9wID0gdGhpcy5vcHRpb25zLnRvcCAqIGltYWdlSGVpZ2h0O1xuICAgIHZhciB3aWR0aCA9IE1hdGgubWluKHRoaXMub3B0aW9ucy53aWR0aCAqIGltYWdlV2lkdGgsIGltYWdlV2lkdGggLSBsZWZ0KTtcbiAgICB2YXIgaGVpZ2h0ID0gTWF0aC5taW4odGhpcy5vcHRpb25zLmhlaWdodCAqIGltYWdlSGVpZ2h0LCBpbWFnZUhlaWdodCAtIHRvcCk7XG5cbiAgICBzbmFwc2hvdC5zcmMgPSBjYW52YXMudG9EYXRhVVJMKHtcbiAgICAgIGxlZnQ6IGxlZnQsXG4gICAgICB0b3A6IHRvcCxcbiAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIH0pO1xuICB9XG59KTtcblxudmFyIENyb3Bab25lID0gZmFicmljLnV0aWwuY3JlYXRlQ2xhc3MoZmFicmljLlJlY3QsIHtcbiAgX3JlbmRlcjogZnVuY3Rpb24oY3R4KSB7XG4gICAgdGhpcy5jYWxsU3VwZXIoJ19yZW5kZXInLCBjdHgpO1xuXG4gICAgdmFyIGNhbnZhcyA9IGN0eC5jYW52YXM7XG4gICAgdmFyIGRhc2hXaWR0aCA9IDc7XG5cbiAgICAvLyBTZXQgb3JpZ2luYWwgc2NhbGVcbiAgICB2YXIgZmxpcFggPSB0aGlzLmZsaXBYID8gLTEgOiAxO1xuICAgIHZhciBmbGlwWSA9IHRoaXMuZmxpcFkgPyAtMSA6IDE7XG4gICAgdmFyIHNjYWxlWCA9IGZsaXBYIC8gdGhpcy5zY2FsZVg7XG4gICAgdmFyIHNjYWxlWSA9IGZsaXBZIC8gdGhpcy5zY2FsZVk7XG5cbiAgICBjdHguc2NhbGUoc2NhbGVYLCBzY2FsZVkpO1xuXG4gICAgLy8gT3ZlcmxheSByZW5kZXJpbmdcbiAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMCwgMCwgMCwgMC41KSc7XG4gICAgdGhpcy5fcmVuZGVyT3ZlcmxheShjdHgpO1xuXG4gICAgLy8gU2V0IGRhc2hlZCBib3JkZXJzXG4gICAgaWYgKGN0eC5zZXRMaW5lRGFzaCAhPT0gdW5kZWZpbmVkKVxuICAgICAgY3R4LnNldExpbmVEYXNoKFtkYXNoV2lkdGgsIGRhc2hXaWR0aF0pO1xuICAgIGVsc2UgaWYgKGN0eC5tb3pEYXNoICE9PSB1bmRlZmluZWQpXG4gICAgICBjdHgubW96RGFzaCA9IFtkYXNoV2lkdGgsIGRhc2hXaWR0aF07XG5cbiAgICAvLyBGaXJzdCBsaW5lcyByZW5kZXJpbmcgd2l0aCBibGFja1xuICAgIGN0eC5zdHJva2VTdHlsZSA9ICdyZ2JhKDAsIDAsIDAsIDAuMiknO1xuICAgIHRoaXMuX3JlbmRlckJvcmRlcnMoY3R4KTtcbiAgICB0aGlzLl9yZW5kZXJHcmlkKGN0eCk7XG5cbiAgICAvLyBSZSByZW5kZXIgbGluZXMgaW4gd2hpdGVcbiAgICBjdHgubGluZURhc2hPZmZzZXQgPSBkYXNoV2lkdGg7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSc7XG4gICAgdGhpcy5fcmVuZGVyQm9yZGVycyhjdHgpO1xuICAgIHRoaXMuX3JlbmRlckdyaWQoY3R4KTtcblxuICAgIC8vIFJlc2V0IHNjYWxlXG4gICAgY3R4LnNjYWxlKDEvc2NhbGVYLCAxL3NjYWxlWSk7XG4gIH0sXG5cbiAgX3JlbmRlck92ZXJsYXk6IGZ1bmN0aW9uKGN0eCkge1xuICAgIHZhciBjYW52YXMgPSBjdHguY2FudmFzO1xuXG4gICAgLy9cbiAgICAvLyAgICB4MCAgICB4MSAgICAgICAgeDIgICAgICB4M1xuICAgIC8vIHkwICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rXG4gICAgLy8gICAgfFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXHxcbiAgICAvLyAgICB8XFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcfFxuICAgIC8vIHkxICstLS0tLS0rLS0tLS0tLS0tKy0tLS0tLS0rXG4gICAgLy8gICAgfFxcXFxcXFxcXFxcXHwgICAgICAgICB8XFxcXFxcXFxcXFxcXFx8XG4gICAgLy8gICAgfFxcXFxcXFxcXFxcXHwgICAgMCAgICB8XFxcXFxcXFxcXFxcXFx8XG4gICAgLy8gICAgfFxcXFxcXFxcXFxcXHwgICAgICAgICB8XFxcXFxcXFxcXFxcXFx8XG4gICAgLy8geTIgKy0tLS0tLSstLS0tLS0tLS0rLS0tLS0tLStcbiAgICAvLyAgICB8XFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcfFxuICAgIC8vICAgIHxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFx8XG4gICAgLy8geTMgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLStcbiAgICAvL1xuXG4gICAgdmFyIHgwID0gTWF0aC5jZWlsKC10aGlzLmdldFdpZHRoKCkgLyAyIC0gdGhpcy5nZXRMZWZ0KCkpO1xuICAgIHZhciB4MSA9IE1hdGguY2VpbCgtdGhpcy5nZXRXaWR0aCgpIC8gMik7XG4gICAgdmFyIHgyID0gTWF0aC5jZWlsKHRoaXMuZ2V0V2lkdGgoKSAvIDIpO1xuICAgIHZhciB4MyA9IE1hdGguY2VpbCh0aGlzLmdldFdpZHRoKCkgLyAyICsgKGNhbnZhcy53aWR0aCAtIHRoaXMuZ2V0V2lkdGgoKSAtIHRoaXMuZ2V0TGVmdCgpKSk7XG5cbiAgICB2YXIgeTAgPSBNYXRoLmNlaWwoLXRoaXMuZ2V0SGVpZ2h0KCkgLyAyIC0gdGhpcy5nZXRUb3AoKSk7XG4gICAgdmFyIHkxID0gTWF0aC5jZWlsKC10aGlzLmdldEhlaWdodCgpIC8gMik7XG4gICAgdmFyIHkyID0gTWF0aC5jZWlsKHRoaXMuZ2V0SGVpZ2h0KCkgLyAyKTtcbiAgICB2YXIgeTMgPSBNYXRoLmNlaWwodGhpcy5nZXRIZWlnaHQoKSAvIDIgKyAoY2FudmFzLmhlaWdodCAtIHRoaXMuZ2V0SGVpZ2h0KCkgLSB0aGlzLmdldFRvcCgpKSk7XG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgXG4gICAgLy8gRHJhdyBvdXRlciByZWN0YW5nbGUuXG4gICAgLy8gTnVtYmVycyBhcmUgKy8tMSBzbyB0aGF0IG92ZXJsYXkgZWRnZXMgZG9uJ3QgZ2V0IGJsdXJyeS5cbiAgICBjdHgubW92ZVRvKHgwIC0gMSwgeTAgLSAxKTtcbiAgICBjdHgubGluZVRvKHgzICsgMSwgeTAgLSAxKTtcbiAgICBjdHgubGluZVRvKHgzICsgMSwgeTMgKyAxKTtcbiAgICBjdHgubGluZVRvKHgwIC0gMSwgeTMgLSAxKTtcbiAgICBjdHgubGluZVRvKHgwIC0gMSwgeTAgLSAxKTtcbiAgICBjdHguY2xvc2VQYXRoKCk7XG5cbiAgICAvLyBEcmF3IGlubmVyIHJlY3RhbmdsZS5cbiAgICBjdHgubW92ZVRvKHgxLCB5MSk7XG4gICAgY3R4LmxpbmVUbyh4MSwgeTIpO1xuICAgIGN0eC5saW5lVG8oeDIsIHkyKTtcbiAgICBjdHgubGluZVRvKHgyLCB5MSk7XG4gICAgY3R4LmxpbmVUbyh4MSwgeTEpO1xuXG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIGN0eC5maWxsKCk7XG4gIH0sXG5cbiAgX3JlbmRlckJvcmRlcnM6IGZ1bmN0aW9uKGN0eCkge1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKC10aGlzLmdldFdpZHRoKCkvMiwgLXRoaXMuZ2V0SGVpZ2h0KCkvMik7IC8vIHVwcGVyIGxlZnRcbiAgICBjdHgubGluZVRvKHRoaXMuZ2V0V2lkdGgoKS8yLCAtdGhpcy5nZXRIZWlnaHQoKS8yKTsgLy8gdXBwZXIgcmlnaHRcbiAgICBjdHgubGluZVRvKHRoaXMuZ2V0V2lkdGgoKS8yLCB0aGlzLmdldEhlaWdodCgpLzIpOyAvLyBkb3duIHJpZ2h0XG4gICAgY3R4LmxpbmVUbygtdGhpcy5nZXRXaWR0aCgpLzIsIHRoaXMuZ2V0SGVpZ2h0KCkvMik7IC8vIGRvd24gbGVmdFxuICAgIGN0eC5saW5lVG8oLXRoaXMuZ2V0V2lkdGgoKS8yLCAtdGhpcy5nZXRIZWlnaHQoKS8yKTsgLy8gdXBwZXIgbGVmdFxuICAgIGN0eC5zdHJva2UoKTtcbiAgfSxcblxuICBfcmVuZGVyR3JpZDogZnVuY3Rpb24oY3R4KSB7XG4gICAgLy8gVmVydGljYWwgbGluZXNcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbygtdGhpcy5nZXRXaWR0aCgpLzIgKyAxLzMgKiB0aGlzLmdldFdpZHRoKCksIC10aGlzLmdldEhlaWdodCgpLzIpO1xuICAgIGN0eC5saW5lVG8oLXRoaXMuZ2V0V2lkdGgoKS8yICsgMS8zICogdGhpcy5nZXRXaWR0aCgpLCB0aGlzLmdldEhlaWdodCgpLzIpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbygtdGhpcy5nZXRXaWR0aCgpLzIgKyAyLzMgKiB0aGlzLmdldFdpZHRoKCksIC10aGlzLmdldEhlaWdodCgpLzIpO1xuICAgIGN0eC5saW5lVG8oLXRoaXMuZ2V0V2lkdGgoKS8yICsgMi8zICogdGhpcy5nZXRXaWR0aCgpLCB0aGlzLmdldEhlaWdodCgpLzIpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICAvLyBIb3Jpem9udGFsIGxpbmVzXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oLXRoaXMuZ2V0V2lkdGgoKS8yLCAtdGhpcy5nZXRIZWlnaHQoKS8yICsgMS8zICogdGhpcy5nZXRIZWlnaHQoKSk7XG4gICAgY3R4LmxpbmVUbyh0aGlzLmdldFdpZHRoKCkvMiwgLXRoaXMuZ2V0SGVpZ2h0KCkvMiArIDEvMyAqIHRoaXMuZ2V0SGVpZ2h0KCkpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbygtdGhpcy5nZXRXaWR0aCgpLzIsIC10aGlzLmdldEhlaWdodCgpLzIgKyAyLzMgKiB0aGlzLmdldEhlaWdodCgpKTtcbiAgICBjdHgubGluZVRvKHRoaXMuZ2V0V2lkdGgoKS8yLCAtdGhpcy5nZXRIZWlnaHQoKS8yICsgMi8zICogdGhpcy5nZXRIZWlnaHQoKSk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICB9XG59KTtcblxuRGFya3Jvb20ucGx1Z2luc1snY3JvcCddID0gRGFya3Jvb20uUGx1Z2luLmV4dGVuZCh7XG4gIC8vIEluaXQgcG9pbnRcbiAgc3RhcnRYOiBudWxsLFxuICBzdGFydFk6IG51bGwsXG5cbiAgLy8gS2V5Y3JvcFxuICBpc0tleUNyb3Bpbmc6IGZhbHNlLFxuICBpc0tleUxlZnQ6IGZhbHNlLFxuICBpc0tleVVwOiBmYWxzZSxcblxuICBkZWZhdWx0czoge1xuICAgIC8vIG1pbiBjcm9wIGRpbWVuc2lvblxuICAgIG1pbkhlaWdodDogMSxcbiAgICBtaW5XaWR0aDogMSxcbiAgICAvLyBlbnN1cmUgY3JvcCByYXRpb1xuICAgIHJhdGlvOiBudWxsLFxuICAgIC8vIHF1aWNrIGNyb3AgZmVhdHVyZSAoc2V0IGEga2V5IGNvZGUgdG8gZW5hYmxlIGl0KVxuICAgIHF1aWNrQ3JvcEtleTogZmFsc2VcbiAgfSxcblxuICBpbml0aWFsaXplOiBmdW5jdGlvbiBJbml0RGFya3Jvb21Dcm9wUGx1Z2luKCkge1xuICAgIHZhciBidXR0b25Hcm91cCA9IHRoaXMuZGFya3Jvb20udG9vbGJhci5jcmVhdGVCdXR0b25Hcm91cCgpO1xuXG4gICAgdGhpcy5jcm9wQnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcbiAgICAgIGltYWdlOiAnY3JvcCdcbiAgICB9KTtcbiAgICB0aGlzLm9rQnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcbiAgICAgIGltYWdlOiAnZG9uZScsXG4gICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICBoaWRlOiB0cnVlXG4gICAgfSk7XG4gICAgdGhpcy5jYW5jZWxCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xuICAgICAgaW1hZ2U6ICdjbG9zZScsXG4gICAgICB0eXBlOiAnZGFuZ2VyJyxcbiAgICAgIGhpZGU6IHRydWVcbiAgICB9KTtcblxuICAgIC8vIEJ1dHRvbnMgY2xpY2tcbiAgICB0aGlzLmNyb3BCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnRvZ2dsZUNyb3AuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5va0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY3JvcEN1cnJlbnRab25lLmJpbmQodGhpcykpO1xuICAgIHRoaXMuY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yZWxlYXNlRm9jdXMuYmluZCh0aGlzKSk7XG5cbiAgICAvLyBDYW52YXMgZXZlbnRzXG4gICAgdGhpcy5kYXJrcm9vbS5jYW52YXMub24oJ21vdXNlOmRvd24nLCB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcykpO1xuICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLm9uKCdtb3VzZTptb3ZlJywgdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbignbW91c2U6dXAnLCB0aGlzLm9uTW91c2VVcC5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbignb2JqZWN0Om1vdmluZycsIHRoaXMub25PYmplY3RNb3ZpbmcuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5kYXJrcm9vbS5jYW52YXMub24oJ29iamVjdDpzY2FsaW5nJywgdGhpcy5vbk9iamVjdFNjYWxpbmcuYmluZCh0aGlzKSk7XG5cbiAgICBmYWJyaWMudXRpbC5hZGRMaXN0ZW5lcihmYWJyaWMuZG9jdW1lbnQsICdrZXlkb3duJywgdGhpcy5vbktleURvd24uYmluZCh0aGlzKSk7XG4gICAgZmFicmljLnV0aWwuYWRkTGlzdGVuZXIoZmFicmljLmRvY3VtZW50LCAna2V5dXAnLCB0aGlzLm9uS2V5VXAuYmluZCh0aGlzKSk7XG5cbiAgICB0aGlzLmRhcmtyb29tLmFkZEV2ZW50TGlzdGVuZXIoJ2NvcmU6dHJhbnNmb3JtYXRpb24nLCB0aGlzLnJlbGVhc2VGb2N1cy5iaW5kKHRoaXMpKTtcbiAgfSxcblxuICBjbGVhcjogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuaGFzRm9jdXMoKSlcbiAgICB0aGlzLnJlbGVhc2VGb2N1cygpO1xuICB9LFxuICAvLyBBdm9pZCBjcm9wIHpvbmUgdG8gZ28gYmV5b25kIHRoZSBjYW52YXMgZWRnZXNcbiAgb25PYmplY3RNb3Zpbmc6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmhhc0ZvY3VzKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgY3VycmVudE9iamVjdCA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAoY3VycmVudE9iamVjdCAhPT0gdGhpcy5jcm9wWm9uZSlcbiAgICAgIHJldHVybjtcblxuICAgIHZhciBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcbiAgICB2YXIgeCA9IGN1cnJlbnRPYmplY3QuZ2V0TGVmdCgpLCB5ID0gY3VycmVudE9iamVjdC5nZXRUb3AoKTtcbiAgICB2YXIgdyA9IGN1cnJlbnRPYmplY3QuZ2V0V2lkdGgoKSwgaCA9IGN1cnJlbnRPYmplY3QuZ2V0SGVpZ2h0KCk7XG4gICAgdmFyIG1heFggPSBjYW52YXMuZ2V0V2lkdGgoKSAtIHc7XG4gICAgdmFyIG1heFkgPSBjYW52YXMuZ2V0SGVpZ2h0KCkgLSBoO1xuXG4gICAgaWYgKHggPCAwKVxuICAgICAgY3VycmVudE9iamVjdC5zZXQoJ2xlZnQnLCAwKTtcbiAgICBpZiAoeSA8IDApXG4gICAgICBjdXJyZW50T2JqZWN0LnNldCgndG9wJywgMCk7XG4gICAgaWYgKHggPiBtYXhYKVxuICAgICAgY3VycmVudE9iamVjdC5zZXQoJ2xlZnQnLCBtYXhYKTtcbiAgICBpZiAoeSA+IG1heFkpXG4gICAgICBjdXJyZW50T2JqZWN0LnNldCgndG9wJywgbWF4WSk7XG5cbiAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoJ2Nyb3A6dXBkYXRlJyk7XG4gIH0sXG5cbiAgLy8gUHJldmVudCBjcm9wIHpvbmUgZnJvbSBnb2luZyBiZXlvbmQgdGhlIGNhbnZhcyBlZGdlcyAobGlrZSBtb3VzZU1vdmUpXG4gIG9uT2JqZWN0U2NhbGluZzogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuaGFzRm9jdXMoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcmV2ZW50U2NhbGluZyA9IGZhbHNlO1xuICAgIHZhciBjdXJyZW50T2JqZWN0ID0gZXZlbnQudGFyZ2V0O1xuICAgIGlmIChjdXJyZW50T2JqZWN0ICE9PSB0aGlzLmNyb3Bab25lKVxuICAgICAgcmV0dXJuO1xuXG4gICAgdmFyIGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xuICAgIHZhciBwb2ludGVyID0gY2FudmFzLmdldFBvaW50ZXIoZXZlbnQuZSk7XG4gICAgdmFyIHggPSBwb2ludGVyLng7XG4gICAgdmFyIHkgPSBwb2ludGVyLnk7XG5cbiAgICB2YXIgbWluWCA9IGN1cnJlbnRPYmplY3QuZ2V0TGVmdCgpO1xuICAgIHZhciBtaW5ZID0gY3VycmVudE9iamVjdC5nZXRUb3AoKTtcbiAgICB2YXIgbWF4WCA9IGN1cnJlbnRPYmplY3QuZ2V0TGVmdCgpICsgY3VycmVudE9iamVjdC5nZXRXaWR0aCgpO1xuICAgIHZhciBtYXhZID0gY3VycmVudE9iamVjdC5nZXRUb3AoKSArIGN1cnJlbnRPYmplY3QuZ2V0SGVpZ2h0KCk7XG5cbiAgICBpZiAobnVsbCAhPT0gdGhpcy5vcHRpb25zLnJhdGlvKSB7XG4gICAgICBpZiAobWluWCA8IDAgfHwgbWF4WCA+IGNhbnZhcy5nZXRXaWR0aCgpIHx8IG1pblkgPCAwIHx8IG1heFkgPiBjYW52YXMuZ2V0SGVpZ2h0KCkpIHtcbiAgICAgICAgcHJldmVudFNjYWxpbmcgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtaW5YIDwgMCB8fCBtYXhYID4gY2FudmFzLmdldFdpZHRoKCkgfHwgcHJldmVudFNjYWxpbmcpIHtcbiAgICAgIHZhciBsYXN0U2NhbGVYID0gdGhpcy5sYXN0U2NhbGVYIHx8IDE7XG4gICAgICBjdXJyZW50T2JqZWN0LnNldFNjYWxlWChsYXN0U2NhbGVYKTtcbiAgICB9XG4gICAgaWYgKG1pblggPCAwKSB7XG4gICAgICBjdXJyZW50T2JqZWN0LnNldExlZnQoMCk7XG4gICAgfVxuXG4gICAgaWYgKG1pblkgPCAwIHx8IG1heFkgPiBjYW52YXMuZ2V0SGVpZ2h0KCkgfHwgcHJldmVudFNjYWxpbmcpIHtcbiAgICAgIHZhciBsYXN0U2NhbGVZID0gdGhpcy5sYXN0U2NhbGVZIHx8IDE7XG4gICAgICBjdXJyZW50T2JqZWN0LnNldFNjYWxlWShsYXN0U2NhbGVZKTtcbiAgICB9XG4gICAgaWYgKG1pblkgPCAwKSB7XG4gICAgICBjdXJyZW50T2JqZWN0LnNldFRvcCgwKTtcbiAgICB9XG5cbiAgICBpZiAoY3VycmVudE9iamVjdC5nZXRXaWR0aCgpIDwgdGhpcy5vcHRpb25zLm1pbldpZHRoKSB7XG4gICAgICBjdXJyZW50T2JqZWN0LnNjYWxlVG9XaWR0aCh0aGlzLm9wdGlvbnMubWluV2lkdGgpO1xuICAgIH1cbiAgICBpZiAoY3VycmVudE9iamVjdC5nZXRIZWlnaHQoKSA8IHRoaXMub3B0aW9ucy5taW5IZWlnaHQpIHtcbiAgICAgIGN1cnJlbnRPYmplY3Quc2NhbGVUb0hlaWdodCh0aGlzLm9wdGlvbnMubWluSGVpZ2h0KTtcbiAgICB9XG5cbiAgICB0aGlzLmxhc3RTY2FsZVggPSBjdXJyZW50T2JqZWN0LmdldFNjYWxlWCgpO1xuICAgIHRoaXMubGFzdFNjYWxlWSA9IGN1cnJlbnRPYmplY3QuZ2V0U2NhbGVZKCk7XG5cbiAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoJ2Nyb3A6dXBkYXRlJyk7XG4gIH0sXG5cbiAgLy8gSW5pdCBjcm9wIHpvbmVcbiAgb25Nb3VzZURvd246IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmhhc0ZvY3VzKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XG5cbiAgICAvLyByZWNhbGN1bGF0ZSBvZmZzZXQsIGluIGNhc2UgY2FudmFzIHdhcyBtYW5pcHVsYXRlZCBzaW5jZSBsYXN0IGBjYWxjT2Zmc2V0YFxuICAgIGNhbnZhcy5jYWxjT2Zmc2V0KCk7XG4gICAgdmFyIHBvaW50ZXIgPSBjYW52YXMuZ2V0UG9pbnRlcihldmVudC5lKTtcbiAgICB2YXIgeCA9IHBvaW50ZXIueDtcbiAgICB2YXIgeSA9IHBvaW50ZXIueTtcbiAgICB2YXIgcG9pbnQgPSBuZXcgZmFicmljLlBvaW50KHgsIHkpO1xuXG4gICAgLy8gQ2hlY2sgaWYgdXNlciB3YW50IHRvIHNjYWxlIG9yIGRyYWcgdGhlIGNyb3Agem9uZS5cbiAgICB2YXIgYWN0aXZlT2JqZWN0ID0gY2FudmFzLmdldEFjdGl2ZU9iamVjdCgpO1xuICAgIGlmIChhY3RpdmVPYmplY3QgPT09IHRoaXMuY3JvcFpvbmUgfHwgdGhpcy5jcm9wWm9uZS5jb250YWluc1BvaW50KHBvaW50KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNhbnZhcy5kaXNjYXJkQWN0aXZlT2JqZWN0KCk7XG4gICAgdGhpcy5jcm9wWm9uZS5zZXRXaWR0aCgwKTtcbiAgICB0aGlzLmNyb3Bab25lLnNldEhlaWdodCgwKTtcbiAgICB0aGlzLmNyb3Bab25lLnNldFNjYWxlWCgxKTtcbiAgICB0aGlzLmNyb3Bab25lLnNldFNjYWxlWSgxKTtcblxuICAgIHRoaXMuc3RhcnRYID0geDtcbiAgICB0aGlzLnN0YXJ0WSA9IHk7XG4gIH0sXG5cbiAgLy8gRXh0ZW5kIGNyb3Agem9uZVxuICBvbk1vdXNlTW92ZTogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAvLyBRdWljayBjcm9wIGZlYXR1cmVcbiAgICBpZiAodGhpcy5pc0tleUNyb3BpbmcpXG4gICAgICByZXR1cm4gdGhpcy5vbk1vdXNlTW92ZUtleUNyb3AoZXZlbnQpO1xuXG4gICAgaWYgKG51bGwgPT09IHRoaXMuc3RhcnRYIHx8IG51bGwgPT09IHRoaXMuc3RhcnRZKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xuICAgIHZhciBwb2ludGVyID0gY2FudmFzLmdldFBvaW50ZXIoZXZlbnQuZSk7XG4gICAgdmFyIHggPSBwb2ludGVyLng7XG4gICAgdmFyIHkgPSBwb2ludGVyLnk7XG5cbiAgICB0aGlzLl9yZW5kZXJDcm9wWm9uZSh0aGlzLnN0YXJ0WCwgdGhpcy5zdGFydFksIHgsIHkpO1xuICB9LFxuXG4gIG9uTW91c2VNb3ZlS2V5Q3JvcDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XG4gICAgdmFyIHpvbmUgPSB0aGlzLmNyb3Bab25lO1xuXG4gICAgdmFyIHBvaW50ZXIgPSBjYW52YXMuZ2V0UG9pbnRlcihldmVudC5lKTtcbiAgICB2YXIgeCA9IHBvaW50ZXIueDtcbiAgICB2YXIgeSA9IHBvaW50ZXIueTtcblxuICAgIGlmICghem9uZS5sZWZ0IHx8ICF6b25lLnRvcCkge1xuICAgICAgem9uZS5zZXRUb3AoeSk7XG4gICAgICB6b25lLnNldExlZnQoeCk7XG4gICAgfVxuXG4gICAgdGhpcy5pc0tleUxlZnQgPSAgeCA8IHpvbmUubGVmdCArIHpvbmUud2lkdGggLyAyIDtcbiAgICB0aGlzLmlzS2V5VXAgPSB5IDwgem9uZS50b3AgKyB6b25lLmhlaWdodCAvIDIgO1xuXG4gICAgdGhpcy5fcmVuZGVyQ3JvcFpvbmUoXG4gICAgICBNYXRoLm1pbih6b25lLmxlZnQsIHgpLFxuICAgICAgTWF0aC5taW4oem9uZS50b3AsIHkpLFxuICAgICAgTWF0aC5tYXgoem9uZS5sZWZ0K3pvbmUud2lkdGgsIHgpLFxuICAgICAgTWF0aC5tYXgoem9uZS50b3Arem9uZS5oZWlnaHQsIHkpXG4gICAgKTtcbiAgfSxcblxuICAvLyBGaW5pc2ggY3JvcCB6b25lXG4gIG9uTW91c2VVcDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAobnVsbCA9PT0gdGhpcy5zdGFydFggfHwgbnVsbCA9PT0gdGhpcy5zdGFydFkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XG4gICAgdGhpcy5jcm9wWm9uZS5zZXRDb29yZHMoKTtcbiAgICBjYW52YXMuc2V0QWN0aXZlT2JqZWN0KHRoaXMuY3JvcFpvbmUpO1xuICAgIGNhbnZhcy5jYWxjT2Zmc2V0KCk7XG5cbiAgICB0aGlzLnN0YXJ0WCA9IG51bGw7XG4gICAgdGhpcy5zdGFydFkgPSBudWxsO1xuICB9LFxuXG4gIG9uS2V5RG93bjogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoZmFsc2UgPT09IHRoaXMub3B0aW9ucy5xdWlja0Nyb3BLZXkgfHwgZXZlbnQua2V5Q29kZSAhPT0gdGhpcy5vcHRpb25zLnF1aWNrQ3JvcEtleSB8fCB0aGlzLmlzS2V5Q3JvcGluZylcbiAgICAgIHJldHVybjtcblxuICAgIC8vIEFjdGl2ZSBxdWljayBjcm9wIGZsb3dcbiAgICB0aGlzLmlzS2V5Q3JvcGluZyA9IHRydWUgO1xuICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLmRpc2NhcmRBY3RpdmVPYmplY3QoKTtcbiAgICB0aGlzLmNyb3Bab25lLnNldFdpZHRoKDApO1xuICAgIHRoaXMuY3JvcFpvbmUuc2V0SGVpZ2h0KDApO1xuICAgIHRoaXMuY3JvcFpvbmUuc2V0U2NhbGVYKDEpO1xuICAgIHRoaXMuY3JvcFpvbmUuc2V0U2NhbGVZKDEpO1xuICAgIHRoaXMuY3JvcFpvbmUuc2V0VG9wKDApO1xuICAgIHRoaXMuY3JvcFpvbmUuc2V0TGVmdCgwKTtcbiAgfSxcblxuICBvbktleVVwOiBmdW5jdGlvbihldmVudCkge1xuICAgIGlmIChmYWxzZSA9PT0gdGhpcy5vcHRpb25zLnF1aWNrQ3JvcEtleSB8fCBldmVudC5rZXlDb2RlICE9PSB0aGlzLm9wdGlvbnMucXVpY2tDcm9wS2V5IHx8ICF0aGlzLmlzS2V5Q3JvcGluZylcbiAgICAgIHJldHVybjtcblxuICAgIC8vIFVuYWN0aXZlIHF1aWNrIGNyb3AgZmxvd1xuICAgIHRoaXMuaXNLZXlDcm9waW5nID0gZmFsc2U7XG4gICAgdGhpcy5zdGFydFggPSAxO1xuICAgIHRoaXMuc3RhcnRZID0gMTtcbiAgICB0aGlzLm9uTW91c2VVcCgpO1xuICB9LFxuXG4gIHNlbGVjdFpvbmU6IGZ1bmN0aW9uKHgsIHksIHdpZHRoLCBoZWlnaHQsIGZvcmNlRGltZW5zaW9uKSB7XG4gICAgaWYgKCF0aGlzLmhhc0ZvY3VzKCkpXG4gICAgICB0aGlzLnJlcXVpcmVGb2N1cygpO1xuXG4gICAgaWYgKCFmb3JjZURpbWVuc2lvbikge1xuICAgICAgdGhpcy5fcmVuZGVyQ3JvcFpvbmUoeCwgeSwgeCt3aWR0aCwgeStoZWlnaHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNyb3Bab25lLnNldCh7XG4gICAgICAgICdsZWZ0JzogeCxcbiAgICAgICAgJ3RvcCc6IHksXG4gICAgICAgICd3aWR0aCc6IHdpZHRoLFxuICAgICAgICAnaGVpZ2h0JzogaGVpZ2h0XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XG4gICAgY2FudmFzLmJyaW5nVG9Gcm9udCh0aGlzLmNyb3Bab25lKTtcbiAgICB0aGlzLmNyb3Bab25lLnNldENvb3JkcygpO1xuICAgIGNhbnZhcy5zZXRBY3RpdmVPYmplY3QodGhpcy5jcm9wWm9uZSk7XG4gICAgY2FudmFzLmNhbGNPZmZzZXQoKTtcblxuICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudCgnY3JvcDp1cGRhdGUnKTtcbiAgfSxcblxuICB0b2dnbGVDcm9wOiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuaGFzRm9jdXMoKSlcbiAgICAgIHRoaXMucmVxdWlyZUZvY3VzKCk7XG4gICAgZWxzZVxuICAgICAgdGhpcy5yZWxlYXNlRm9jdXMoKTtcbiAgfSxcblxuICBjcm9wQ3VycmVudFpvbmU6IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5oYXNGb2N1cygpKVxuICAgICAgcmV0dXJuO1xuXG4gICAgLy8gQXZvaWQgY3JvcGluZyBlbXB0eSB6b25lXG4gICAgaWYgKHRoaXMuY3JvcFpvbmUud2lkdGggPCAxICYmIHRoaXMuY3JvcFpvbmUuaGVpZ2h0IDwgMSlcbiAgICAgIHJldHVybjtcblxuICAgIHZhciBpbWFnZSA9IHRoaXMuZGFya3Jvb20uaW1hZ2U7XG5cbiAgICAvLyBDb21wdXRlIGNyb3Agem9uZSBkaW1lbnNpb25zXG4gICAgdmFyIHRvcCA9IHRoaXMuY3JvcFpvbmUuZ2V0VG9wKCkgLSBpbWFnZS5nZXRUb3AoKTtcbiAgICB2YXIgbGVmdCA9IHRoaXMuY3JvcFpvbmUuZ2V0TGVmdCgpIC0gaW1hZ2UuZ2V0TGVmdCgpO1xuICAgIHZhciB3aWR0aCA9IHRoaXMuY3JvcFpvbmUuZ2V0V2lkdGgoKTtcbiAgICB2YXIgaGVpZ2h0ID0gdGhpcy5jcm9wWm9uZS5nZXRIZWlnaHQoKTtcblxuICAgIC8vIEFkanVzdCBkaW1lbnNpb25zIHRvIGltYWdlIG9ubHlcbiAgICBpZiAodG9wIDwgMCkge1xuICAgICAgaGVpZ2h0ICs9IHRvcDtcbiAgICAgIHRvcCA9IDA7XG4gICAgfVxuXG4gICAgaWYgKGxlZnQgPCAwKSB7XG4gICAgICB3aWR0aCArPSBsZWZ0O1xuICAgICAgbGVmdCA9IDA7XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgY3JvcCB0cmFuc2Zvcm1hdGlvbi5cbiAgICAvLyBNYWtlIHN1cmUgdG8gdXNlIHJlbGF0aXZlIGRpbWVuc2lvbiBzaW5jZSB0aGUgY3JvcCB3aWxsIGJlIGFwcGxpZWRcbiAgICAvLyBvbiB0aGUgc291cmNlIGltYWdlLlxuICAgIHRoaXMuZGFya3Jvb20uYXBwbHlUcmFuc2Zvcm1hdGlvbihuZXcgQ3JvcCh7XG4gICAgICB0b3A6IHRvcCAvIGltYWdlLmdldEhlaWdodCgpLFxuICAgICAgbGVmdDogbGVmdCAvIGltYWdlLmdldFdpZHRoKCksXG4gICAgICB3aWR0aDogd2lkdGggLyBpbWFnZS5nZXRXaWR0aCgpLFxuICAgICAgaGVpZ2h0OiBoZWlnaHQgLyBpbWFnZS5nZXRIZWlnaHQoKSxcbiAgICB9KSk7XG4gIH0sXG5cbiAgLy8gVGVzdCB3ZXRoZXIgY3JvcCB6b25lIGlzIHNldFxuICBoYXNGb2N1czogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY3JvcFpvbmUgIT09IHVuZGVmaW5lZDtcbiAgfSxcblxuICAvLyBDcmVhdGUgdGhlIGNyb3Agem9uZVxuICByZXF1aXJlRm9jdXM6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZGFya3Jvb20uY2xlYXJGb2N1cygnY3JvcCcpO1xuICAgIHRoaXMuY3JvcFpvbmUgPSBuZXcgQ3JvcFpvbmUoe1xuICAgICAgZmlsbDogJ3RyYW5zcGFyZW50JyxcbiAgICAgIGhhc0JvcmRlcnM6IGZhbHNlLFxuICAgICAgb3JpZ2luWDogJ2xlZnQnLFxuICAgICAgb3JpZ2luWTogJ3RvcCcsXG4gICAgICAvL3N0cm9rZTogJyM0NDQnLFxuICAgICAgLy9zdHJva2VEYXNoQXJyYXk6IFs1LCA1XSxcbiAgICAgIC8vYm9yZGVyQ29sb3I6ICcjNDQ0JyxcbiAgICAgIGNvcm5lckNvbG9yOiAnIzQ0NCcsXG4gICAgICBjb3JuZXJTaXplOiA4LFxuICAgICAgdHJhbnNwYXJlbnRDb3JuZXJzOiBmYWxzZSxcbiAgICAgIGxvY2tSb3RhdGlvbjogdHJ1ZSxcbiAgICAgIGhhc1JvdGF0aW5nUG9pbnQ6IGZhbHNlLFxuICAgIH0pO1xuXG4gICAgaWYgKG51bGwgIT09IHRoaXMub3B0aW9ucy5yYXRpbykge1xuICAgICAgdGhpcy5jcm9wWm9uZS5zZXQoJ2xvY2tVbmlTY2FsaW5nJywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgdGhpcy5kYXJrcm9vbS5jYW52YXMuYWRkKHRoaXMuY3JvcFpvbmUpO1xuICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLmRlZmF1bHRDdXJzb3IgPSAnY3Jvc3NoYWlyJztcblxuICAgIHRoaXMuY3JvcEJ1dHRvbi5hY3RpdmUodHJ1ZSk7XG4gICAgdGhpcy5va0J1dHRvbi5oaWRlKGZhbHNlKTtcbiAgICB0aGlzLmNhbmNlbEJ1dHRvbi5oaWRlKGZhbHNlKTtcbiAgfSxcblxuICAvLyBSZW1vdmUgdGhlIGNyb3Agem9uZVxuICByZWxlYXNlRm9jdXM6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh1bmRlZmluZWQgPT09IHRoaXMuY3JvcFpvbmUpXG4gICAgICByZXR1cm47XG5cbiAgICB0aGlzLmNyb3Bab25lLnJlbW92ZSgpO1xuICAgIHRoaXMuY3JvcFpvbmUgPSB1bmRlZmluZWQ7XG5cbiAgICB0aGlzLmNyb3BCdXR0b24uYWN0aXZlKGZhbHNlKTtcbiAgICB0aGlzLm9rQnV0dG9uLmhpZGUodHJ1ZSk7XG4gICAgdGhpcy5jYW5jZWxCdXR0b24uaGlkZSh0cnVlKTtcblxuICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLmRlZmF1bHRDdXJzb3IgPSAnZGVmYXVsdCc7XG5cbiAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoJ2Nyb3A6dXBkYXRlJyk7XG4gIH0sXG5cbiAgX3JlbmRlckNyb3Bab25lOiBmdW5jdGlvbihmcm9tWCwgZnJvbVksIHRvWCwgdG9ZKSB7XG4gICAgdmFyIGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xuXG4gICAgdmFyIGlzUmlnaHQgPSAodG9YID4gZnJvbVgpO1xuICAgIHZhciBpc0xlZnQgPSAhaXNSaWdodDtcbiAgICB2YXIgaXNEb3duID0gKHRvWSA+IGZyb21ZKTtcbiAgICB2YXIgaXNVcCA9ICFpc0Rvd247XG5cbiAgICB2YXIgbWluV2lkdGggPSBNYXRoLm1pbigrdGhpcy5vcHRpb25zLm1pbldpZHRoLCBjYW52YXMuZ2V0V2lkdGgoKSk7XG4gICAgdmFyIG1pbkhlaWdodCA9IE1hdGgubWluKCt0aGlzLm9wdGlvbnMubWluSGVpZ2h0LCBjYW52YXMuZ2V0SGVpZ2h0KCkpO1xuXG4gICAgLy8gRGVmaW5lIGNvcm5lciBjb29yZGluYXRlc1xuICAgIHZhciBsZWZ0WCA9IE1hdGgubWluKGZyb21YLCB0b1gpO1xuICAgIHZhciByaWdodFggPSBNYXRoLm1heChmcm9tWCwgdG9YKTtcbiAgICB2YXIgdG9wWSA9IE1hdGgubWluKGZyb21ZLCB0b1kpO1xuICAgIHZhciBib3R0b21ZID0gTWF0aC5tYXgoZnJvbVksIHRvWSk7XG5cbiAgICAvLyBSZXBsYWNlIGN1cnJlbnQgcG9pbnQgaW50byB0aGUgY2FudmFzXG4gICAgbGVmdFggPSBNYXRoLm1heCgwLCBsZWZ0WCk7XG4gICAgcmlnaHRYID0gTWF0aC5taW4oY2FudmFzLmdldFdpZHRoKCksIHJpZ2h0WCk7XG4gICAgdG9wWSA9IE1hdGgubWF4KDAsIHRvcFkpXG4gICAgYm90dG9tWSA9IE1hdGgubWluKGNhbnZhcy5nZXRIZWlnaHQoKSwgYm90dG9tWSk7XG5cbiAgICAvLyBSZWNhbGlicmF0ZSBjb29yZGluYXRlcyBhY2NvcmRpbmcgdG8gZ2l2ZW4gb3B0aW9uc1xuICAgIGlmIChyaWdodFggLSBsZWZ0WCA8IG1pbldpZHRoKSB7XG4gICAgICBpZiAoaXNSaWdodClcbiAgICAgICAgcmlnaHRYID0gbGVmdFggKyBtaW5XaWR0aDtcbiAgICAgIGVsc2VcbiAgICAgICAgbGVmdFggPSByaWdodFggLSBtaW5XaWR0aDtcbiAgICB9XG4gICAgaWYgKGJvdHRvbVkgLSB0b3BZIDwgbWluSGVpZ2h0KSB7XG4gICAgICBpZiAoaXNEb3duKVxuICAgICAgICBib3R0b21ZID0gdG9wWSArIG1pbkhlaWdodDtcbiAgICAgIGVsc2VcbiAgICAgICAgdG9wWSA9IGJvdHRvbVkgLSBtaW5IZWlnaHQ7XG4gICAgfVxuXG4gICAgLy8gVHJ1bmNhdGUgdHJ1bmNhdGUgYWNjb3JkaW5nIHRvIGNhbnZhcyBkaW1lbnNpb25zXG4gICAgaWYgKGxlZnRYIDwgMCkge1xuICAgICAgLy8gVHJhbnNsYXRlIHRvIHRoZSBsZWZ0XG4gICAgICByaWdodFggKz0gTWF0aC5hYnMobGVmdFgpO1xuICAgICAgbGVmdFggPSAwXG4gICAgfVxuICAgIGlmIChyaWdodFggPiBjYW52YXMuZ2V0V2lkdGgoKSkge1xuICAgICAgLy8gVHJhbnNsYXRlIHRvIHRoZSByaWdodFxuICAgICAgbGVmdFggLT0gKHJpZ2h0WCAtIGNhbnZhcy5nZXRXaWR0aCgpKTtcbiAgICAgIHJpZ2h0WCA9IGNhbnZhcy5nZXRXaWR0aCgpO1xuICAgIH1cbiAgICBpZiAodG9wWSA8IDApIHtcbiAgICAgIC8vIFRyYW5zbGF0ZSB0byB0aGUgYm90dG9tXG4gICAgICBib3R0b21ZICs9IE1hdGguYWJzKHRvcFkpO1xuICAgICAgdG9wWSA9IDBcbiAgICB9XG4gICAgaWYgKGJvdHRvbVkgPiBjYW52YXMuZ2V0SGVpZ2h0KCkpIHtcbiAgICAgIC8vIFRyYW5zbGF0ZSB0byB0aGUgcmlnaHRcbiAgICAgIHRvcFkgLT0gKGJvdHRvbVkgLSBjYW52YXMuZ2V0SGVpZ2h0KCkpO1xuICAgICAgYm90dG9tWSA9IGNhbnZhcy5nZXRIZWlnaHQoKTtcbiAgICB9XG5cbiAgICB2YXIgd2lkdGggPSByaWdodFggLSBsZWZ0WDtcbiAgICB2YXIgaGVpZ2h0ID0gYm90dG9tWSAtIHRvcFk7XG4gICAgdmFyIGN1cnJlbnRSYXRpbyA9IHdpZHRoIC8gaGVpZ2h0O1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5yYXRpbyAmJiArdGhpcy5vcHRpb25zLnJhdGlvICE9PSBjdXJyZW50UmF0aW8pIHtcbiAgICAgIHZhciByYXRpbyA9ICt0aGlzLm9wdGlvbnMucmF0aW87XG5cbiAgICAgIGlmKHRoaXMuaXNLZXlDcm9waW5nKSB7XG4gICAgICAgIGlzTGVmdCA9IHRoaXMuaXNLZXlMZWZ0O1xuICAgICAgICBpc1VwID0gdGhpcy5pc0tleVVwO1xuICAgICAgfVxuXG4gICAgICBpZiAoY3VycmVudFJhdGlvIDwgcmF0aW8pIHtcbiAgICAgICAgdmFyIG5ld1dpZHRoID0gaGVpZ2h0ICogcmF0aW87XG4gICAgICAgIGlmIChpc0xlZnQpIHtcbiAgICAgICAgICBsZWZ0WCAtPSAobmV3V2lkdGggLSB3aWR0aCk7XG4gICAgICAgIH1cbiAgICAgICAgd2lkdGggPSBuZXdXaWR0aDtcbiAgICAgIH0gZWxzZSBpZiAoY3VycmVudFJhdGlvID4gcmF0aW8pIHtcbiAgICAgICAgdmFyIG5ld0hlaWdodCA9IGhlaWdodCAvIChyYXRpbyAqIGhlaWdodC93aWR0aCk7XG4gICAgICAgIGlmIChpc1VwKSB7XG4gICAgICAgICAgdG9wWSAtPSAobmV3SGVpZ2h0IC0gaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgICBoZWlnaHQgPSBuZXdIZWlnaHQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChsZWZ0WCA8IDApIHtcbiAgICAgICAgbGVmdFggPSAwO1xuICAgICAgICAvL1RPRE9cbiAgICAgIH1cbiAgICAgIGlmICh0b3BZIDwgMCkge1xuICAgICAgICB0b3BZID0gMDtcbiAgICAgICAgLy9UT0RPXG4gICAgICB9XG4gICAgICBpZiAobGVmdFggKyB3aWR0aCA+IGNhbnZhcy5nZXRXaWR0aCgpKSB7XG4gICAgICAgIHZhciBuZXdXaWR0aCA9IGNhbnZhcy5nZXRXaWR0aCgpIC0gbGVmdFg7XG4gICAgICAgIGhlaWdodCA9IG5ld1dpZHRoICogaGVpZ2h0IC8gd2lkdGg7XG4gICAgICAgIHdpZHRoID0gbmV3V2lkdGg7XG4gICAgICAgIGlmIChpc1VwKSB7XG4gICAgICAgICAgdG9wWSA9IGZyb21ZIC0gaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodG9wWSArIGhlaWdodCA+IGNhbnZhcy5nZXRIZWlnaHQoKSkge1xuICAgICAgICB2YXIgbmV3SGVpZ2h0ID0gY2FudmFzLmdldEhlaWdodCgpIC0gdG9wWTtcbiAgICAgICAgd2lkdGggPSB3aWR0aCAqIG5ld0hlaWdodCAvIGhlaWdodDtcbiAgICAgICAgaGVpZ2h0ID0gbmV3SGVpZ2h0O1xuICAgICAgICBpZiAoaXNMZWZ0KSB7XG4gICAgICAgICAgbGVmdFggPSBmcm9tWCAtIHdpZHRoO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgY29vcmRpbmF0ZXNcbiAgICB0aGlzLmNyb3Bab25lLmxlZnQgPSBsZWZ0WDtcbiAgICB0aGlzLmNyb3Bab25lLnRvcCA9IHRvcFk7XG4gICAgdGhpcy5jcm9wWm9uZS53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuY3JvcFpvbmUuaGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgdGhpcy5kYXJrcm9vbS5jYW52YXMuYnJpbmdUb0Zyb250KHRoaXMuY3JvcFpvbmUpO1xuXG4gICAgdGhpcy5kYXJrcm9vbS5kaXNwYXRjaEV2ZW50KCdjcm9wOnVwZGF0ZScpO1xuICB9XG59KTtcblxufSkoKTtcbiIsIihmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIFBlbmNpbCA9IERhcmtyb29tLlRyYW5zZm9ybWF0aW9uLmV4dGVuZCh7XG4gICAgICAgIGFwcGx5VHJhbnNmb3JtYXRpb246IGZ1bmN0aW9uIChjYW52YXMsIGltYWdlLCBuZXh0KSB7XG4gICAgICAgICAgICAvLyBTbmFwc2hvdCB0aGUgaW1hZ2UgZGVsaW1pdGVkIGJ5IHRoZSBjcm9wIHpvbmVcbiAgICAgICAgICAgIHZhciBzbmFwc2hvdCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgc25hcHNob3Qub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIC8vIFZhbGlkYXRlIGltYWdlXG4gICAgICAgICAgICAgICAgaWYgKGhlaWdodCA8IDEgfHwgd2lkdGggPCAxKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgICAgICB2YXIgaW1nSW5zdGFuY2UgPSBuZXcgZmFicmljLkltYWdlKHRoaXMsIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gb3B0aW9ucyB0byBtYWtlIHRoZSBpbWFnZSBzdGF0aWNcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0YWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBsb2NrTW92ZW1lbnRYOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBsb2NrTW92ZW1lbnRZOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBsb2NrUm90YXRpb246IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGxvY2tTY2FsaW5nWDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbG9ja1NjYWxpbmdZOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBsb2NrVW5pU2NhbGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgaGFzQ29udHJvbHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBoYXNCb3JkZXJzOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdmFyIHdpZHRoID0gdGhpcy53aWR0aDtcbiAgICAgICAgICAgICAgICB2YXIgaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG5cbiAgICAgICAgICAgICAgICAvLyBBZGQgaW1hZ2VcbiAgICAgICAgICAgICAgICBjYW52YXMuYWRkKGltZ0luc3RhbmNlKTtcblxuICAgICAgICAgICAgICAgIG5leHQoaW1nSW5zdGFuY2UpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdmFyIHZpZXdwb3J0ID0gRGFya3Jvb20uVXRpbHMuY29tcHV0ZUltYWdlVmlld1BvcnQoaW1hZ2UpO1xuICAgICAgICAgICAgdmFyIHdpZHRoID0gdmlld3BvcnQud2lkdGg7XG4gICAgICAgICAgICB2YXIgaGVpZ2h0ID0gdmlld3BvcnQuaGVpZ2h0O1xuXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMucGVuY2lsWm9uZS5fYXBwbHlTY2FsaW5nKGNhbnZhcy5nZXRXaWR0aCgpLCBjYW52YXMuZ2V0SGVpZ2h0KCkpO1xuICAgICAgICAgICAgY2FudmFzLmFkZCh0aGlzLm9wdGlvbnMucGVuY2lsWm9uZSk7XG4gICAgICAgICAgICBjYW52YXMucmVuZGVyQWxsKCk7XG4gICAgICAgICAgICBzbmFwc2hvdC5zcmMgPSBjYW52YXMudG9EYXRhVVJMKCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBQZW5jaWxab25lID0gZmFicmljLnV0aWwuY3JlYXRlQ2xhc3MoZmFicmljLk9iamVjdCwge1xuICAgICAgICB0eXBlOiAncGVuY2lsT2JqZWN0JyxcblxuICAgICAgICBpbml0aWFsaXplOiBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgICAgICB0aGlzLmxlZnQgPSBvcHRpb25zLmxlZnQgfHwgMDtcbiAgICAgICAgICAgIHRoaXMudG9wID0gb3B0aW9ucy50b3AgfHwgMDtcbiAgICAgICAgICAgIHRoaXMud2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSBvcHRpb25zLmhlaWdodDtcbiAgICAgICAgICAgIHRoaXMub3JpZ2luYWxXaWR0aCA9IHRoaXMud2lkdGg7XG4gICAgICAgICAgICB0aGlzLm9yaWdpbmFsSGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLnN0cm9rZSA9IG9wdGlvbnMuc3Ryb2tlO1xuICAgICAgICAgICAgdGhpcy5zaXplID0gb3B0aW9ucy5zaXplO1xuICAgICAgICAgICAgdGhpcy5wYXRoID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuY1ggPSAtdGhpcy5nZXRXaWR0aCgpIC8gMjtcbiAgICAgICAgICAgIHRoaXMuY1kgPSAtdGhpcy5nZXRIZWlnaHQoKSAvIDI7XG4gICAgICAgICAgICB0aGlzLmNhbGxTdXBlcignaW5pdGlhbGl6ZScsIG9wdGlvbnMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIF9hcHBseVNjYWxpbmc6IGZ1bmN0aW9uICh3LCBoKSB7XG4gICAgICAgICAgICB2YXIgc2NhbGVYID0gdGhpcy5nZXRXaWR0aCgpIC8gdztcbiAgICAgICAgICAgIHZhciBzY2FsZVkgPSB0aGlzLmdldEhlaWdodCgpIC8gaDtcbiAgICAgICAgICAgIHRoaXMuc2V0KHsgc2NhbGVYOiB0aGlzLnNjYWxlWCAvIHNjYWxlWCwgc2NhbGVZOiB0aGlzLnNjYWxlWSAvIHNjYWxlWSB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBfcmVuZGVyOiBmdW5jdGlvbiAoY3R4KSB7XG4gICAgICAgICAgICB2YXIgY2FudmFzID0gY3R4LmNhbnZhcztcbiAgICAgICAgICAgIHRoaXMuX2RyYXcoY3R4KTtcbiAgICAgICAgfSxcblxuICAgICAgICBfZHJhdzogZnVuY3Rpb24gKGN0eCkge1xuICAgICAgICAgICAgaWYgKGN0eCAmJiB0aGlzLnBhdGggJiYgdGhpcy5wYXRoLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBjdHgubGluZUpvaW4gPSBcInJvdW5kXCI7XG4gICAgICAgICAgICAgICAgY3R4LmxpbmVDYXAgPSBcInJvdW5kXCI7XG4gICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIGN0eC5tb3ZlVG8oKHRoaXMuY1ggKyB0aGlzLnBhdGhbMF0ueCksXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLmNZICsgdGhpcy5wYXRoWzBdLnkpKTtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgdGhpcy5wYXRoLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkcmF3WCA9ICh0aGlzLmNYICsgdGhpcy5wYXRoW3hdLngpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZHJhd1kgPSAodGhpcy5jWSArIHRoaXMucGF0aFt4XS55KTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmxpbmVUbyhkcmF3WCwgZHJhd1kpO1xuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5zdHJva2U7XG4gICAgICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IHRoaXMuc2l6ZTtcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgX2Nsb25lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFBlbmNpbFpvbmUoe1xuICAgICAgICAgICAgICAgIHN0cm9rZTogdGhpcy5zdHJva2UsXG4gICAgICAgICAgICAgICAgc2l6ZTogdGhpcy5zaXplLFxuICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXG4gICAgICAgICAgICAgICAgc2VsZWN0YWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgbG9ja1JvdGF0aW9uOiB0cnVlLFxuICAgICAgICAgICAgICAgIGV2ZW50ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGxvY2tNb3ZlbWVudFg6IHRydWUsXG4gICAgICAgICAgICAgICAgbG9ja01vdmVtZW50WTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBsb2NrU2NhbGluZ1g6IHRydWUsXG4gICAgICAgICAgICAgICAgbG9ja1NjYWxpbmdZOiB0cnVlLFxuICAgICAgICAgICAgICAgIGxvY2tVbmlTY2FsaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIGhhc0NvbnRyb2xzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBoYXNCb3JkZXJzOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIERhcmtyb29tLnBsdWdpbnNbJ3BlbmNpbCddID0gRGFya3Jvb20uUGx1Z2luLmV4dGVuZCh7XG4gICAgICAgIHBlbmNpbE1vZGU6IGZhbHNlLFxuICAgICAgICBwZW5jaWxab25lOiBudWxsLFxuICAgICAgICBtb3VzZURvd246IGZhbHNlLFxuICAgICAgICBzaXplOiAzMCxcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICAgIHN0cm9rZTogXCJibGFja1wiLFxuICAgICAgICAgICAgc2l6ZTogMzBcbiAgICAgICAgfSxcblxuICAgICAgICBpbml0aWFsaXplOiBmdW5jdGlvbiBJbml0aWFsaXplRGFya3Jvb21QZW5jaWxQbHVnaW4oKSB7XG4gICAgICAgICAgICB2YXIgYnV0dG9uR3JvdXAgPSB0aGlzLmRhcmtyb29tLnRvb2xiYXIuY3JlYXRlQnV0dG9uR3JvdXAoKTtcblxuICAgICAgICAgICAgdGhpcy5wZW5jaWxCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xuICAgICAgICAgICAgICAgIGltYWdlOiAncGVuY2lsJyxcbiAgICAgICAgICAgICAgICB0b29sdGlwOiAnRHJhdydcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLnBhdGggPSBbXTtcbiAgICAgICAgICAgIHRoaXMud2lkdGggPSB0aGlzLmRhcmtyb29tLmNhbnZhcy53aWR0aDtcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5kYXJrcm9vbS5jYW52YXMuaGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy5zaXplID0gdGhpcy5vcHRpb25zLnNpemU7XG4gICAgICAgICAgICB0aGlzLnN0cm9rZSA9IHRoaXMub3B0aW9ucy5zdHJva2U7XG5cbiAgICAgICAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLm9uKCdtb3VzZTpkb3duJywgdGhpcy5vbk1vdXNlRG93bi5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLm9uKCdtb3VzZTptb3ZlJywgdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLm9uKCdtb3VzZTp1cCcsIHRoaXMub25Nb3VzZVVwLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgdGhpcy5wZW5jaWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKSk7XG5cblxuICAgICAgICB9LFxuXG4gICAgICAgIGNsZWFyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5oYXNGb2N1cygpKVxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlRm9jdXMoKTtcbiAgICAgICAgfSxcblxuICAgICAgICBoYXNGb2N1czogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGVuY2lsWm9uZSAhPT0gbnVsbDtcbiAgICAgICAgfSxcblxuICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5oYXNGb2N1cygpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXF1aXJlRm9jdXMoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUZvY3VzKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgb25Nb3VzZURvd246IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmhhc0ZvY3VzKCkpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoJ3BlbmNpbDpiZWdpbicpO1xuICAgICAgICAgICAgdGhpcy5tb3VzZURvd24gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5wYXRoLnB1c2godGhpcy5nZXRNb3VzZVBvc2l0aW9uKHRoaXMuY2FudmFzLCBldmVudCkpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJab25lKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgb25Nb3VzZVVwOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5oYXNGb2N1cygpKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgaWYgKHRoaXMubW91c2VEb3duKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXJrcm9vbS5kaXNwYXRjaEV2ZW50KCdwZW5jaWw6ZW5kJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB2YXIgbW91c2VQb3MgPSB0aGlzLmdldE1vdXNlUG9zaXRpb24odGhpcy5jYW52YXMsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLnBhdGgucHVzaChtb3VzZVBvcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJab25lKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHBseVBlbmNpbFBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBhdGggPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBvbk1vdXNlTW92ZTogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaGFzRm9jdXMoKSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm1vdXNlRG93bikge1xuICAgICAgICAgICAgICAgIHZhciBtb3VzZVBvcyA9IHRoaXMuZ2V0TW91c2VQb3NpdGlvbih0aGlzLmNhbnZhcywgZXZlbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMucGF0aC5wdXNoKG1vdXNlUG9zKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclpvbmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICByZW1vdmVGb2N1czogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5kYXJrcm9vbS5kaXNwYXRjaEV2ZW50KCdwZW5jaWw6ZGlzYWJsZWQnKTtcbiAgICAgICAgICAgIHRoaXMucGVuY2lsQnV0dG9uLmFjdGl2ZShmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLnBlbmNpbE1vZGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLmRlZmF1bHRDdXJzb3IgPSAnZGVmYXVsdCc7XG4gICAgICAgICAgICBpZiAodGhpcy5wZW5jaWxab25lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wZW5jaWxab25lLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMucGVuY2lsWm9uZSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVxdWlyZUZvY3VzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmRhcmtyb29tLmNsZWFyRm9jdXMoJ3BlbmNpbCcpO1xuICAgICAgICAgICAgdGhpcy5kYXJrcm9vbS5kaXNwYXRjaEV2ZW50KCdwZW5jaWw6ZW5hYmxlZCcpO1xuICAgICAgICAgICAgdGhpcy5wZW5jaWxNb2RlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucGVuY2lsQnV0dG9uLmFjdGl2ZSh0cnVlKTtcblxuICAgICAgICAgICAgdGhpcy5wZW5jaWxab25lID0gdGhpcy5uZXdab25lKCk7XG5cbiAgICAgICAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLmFkZCh0aGlzLnBlbmNpbFpvbmUpO1xuICAgICAgICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMuZGVmYXVsdEN1cnNvciA9ICdjcm9zc2hhaXInO1xuICAgICAgICB9LFxuXG5cbiAgICAgICAgZ2V0TW91c2VQb3NpdGlvbjogZnVuY3Rpb24gKGNhbnZhcywgZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcbiAgICAgICAgICAgIHZhciByZWN0ID0gY2FudmFzLmxvd2VyQ2FudmFzRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICB2YXIgcG9pbnRlciA9IGNhbnZhcy5nZXRQb2ludGVyKGV2ZW50LmUpO1xuICAgICAgICAgICAgdmFyIHNjYWxlID0gNzIwIC8gMTI4MFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB4OiBwb2ludGVyLngsXG4gICAgICAgICAgICAgICAgeTogcG9pbnRlci55LFxuICAgICAgICAgICAgICAgIGN4OiBldmVudC5lLmNsaWVudFggLSByZWN0LmxlZnQsXG4gICAgICAgICAgICAgICAgY3k6IGV2ZW50LmUuY2xpZW50WSAtIHJlY3QudG9wLFxuICAgICAgICAgICAgICAgIHN4OiBldmVudC5lLnNjcmVlblgsXG4gICAgICAgICAgICAgICAgc3k6IGV2ZW50LmUuc2NyZWVuWVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcblxuICAgICAgICBuZXdab25lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnBhdGggPSBbXTtcbiAgICAgICAgICAgIHZhciBzdHJva2UgPSB0aGlzLnN0cm9rZTtcbiAgICAgICAgICAgIHZhciBzaXplID0gdGhpcy5zaXplO1xuICAgICAgICAgICAgdmFyIHdpZHRoID0gdGhpcy5kYXJrcm9vbS5jYW52YXMuZ2V0V2lkdGgoKTtcbiAgICAgICAgICAgIHZhciBoZWlnaHQgPSB0aGlzLmRhcmtyb29tLmNhbnZhcy5nZXRIZWlnaHQoKTtcbiAgICAgICAgICAgIHZhciB6b25lID0gbmV3IFBlbmNpbFpvbmUoe1xuICAgICAgICAgICAgICAgIHN0cm9rZTogc3Ryb2tlLFxuICAgICAgICAgICAgICAgIHNpemU6IHNpemUsXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICAgICAgICAgIHNlbGVjdGFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGxvY2tSb3RhdGlvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBldmVudGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBsb2NrTW92ZW1lbnRYOiB0cnVlLFxuICAgICAgICAgICAgICAgIGxvY2tNb3ZlbWVudFk6IHRydWUsXG4gICAgICAgICAgICAgICAgbG9ja1NjYWxpbmdYOiB0cnVlLFxuICAgICAgICAgICAgICAgIGxvY2tTY2FsaW5nWTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBsb2NrVW5pU2NhbGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBoYXNDb250cm9sczogZmFsc2UsXG4gICAgICAgICAgICAgICAgaGFzQm9yZGVyczogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gem9uZTtcbiAgICAgICAgfSxcblxuICAgICAgICBhcHBseVBlbmNpbFBhdGg6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5oYXNGb2N1cygpKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgLy8gQXZvaWQgY3JvcGluZyBlbXB0eSB6b25lXG4gICAgICAgICAgICBpZiAodGhpcy5wYXRoID09PSBudWxsIHx8IHRoaXMucGF0aC5sZW5ndGggPT0gMClcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIC8vIEFwcGx5IGNyb3AgdHJhbnNmb3JtYXRpb24uXG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgdG8gdXNlIHJlbGF0aXZlIGRpbWVuc2lvbiBzaW5jZSB0aGUgY3JvcCB3aWxsIGJlIGFwcGxpZWRcbiAgICAgICAgICAgIC8vIG9uIHRoZSBzb3VyY2UgaW1hZ2UuXG4gICAgICAgICAgICB2YXIgem9uZSA9IHRoaXMucGVuY2lsWm9uZS5fY2xvbmUoKTtcbiAgICAgICAgICAgIHpvbmUucGF0aCA9IHRoaXMucGF0aDtcbiAgICAgICAgICAgIHRoaXMuZGFya3Jvb20uYXBwbHlUcmFuc2Zvcm1hdGlvbihuZXcgUGVuY2lsKHtcbiAgICAgICAgICAgICAgICBwZW5jaWxab25lOiB6b25lLFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgdGhpcy5wZW5jaWxab25lLnJlbW92ZSgpO1xuICAgICAgICAgICAgdGhpcy5wZW5jaWxab25lID0gdGhpcy5uZXdab25lKCk7XG4gICAgICAgICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5hZGQodGhpcy5wZW5jaWxab25lKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZW5kZXJab25lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wYXRoICYmIHRoaXMucGF0aC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXJrcm9vbS5kaXNwYXRjaEV2ZW50KCdwZW5jaWw6dXBkYXRlJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5wZW5jaWxab25lLnBhdGggPSB0aGlzLnBhdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5icmluZ1RvRnJvbnQodGhpcy5wZW5jaWxab25lKTtcbiAgICAgICAgfVxuXG4gICAgfSk7XG5cbn0pKCk7XG4iLCIoZnVuY3Rpb24gKCkge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgdmFyIHJlY3QsIGlzRG93biwgb3JpZ1gsIG9yaWdZO1xyXG4gIHZhciBoYXNGb2N1cyA9IHRydWU7XHJcblxyXG4gIHZhciBSZWN0YW5nbGVUcmFuc2Zvcm1hdGlvbiA9IERhcmtyb29tLlRyYW5zZm9ybWF0aW9uLmV4dGVuZCh7XHJcbiAgICBhcHBseVRyYW5zZm9ybWF0aW9uOiBmdW5jdGlvbiAoY2FudmFzLCBpbWFnZSwgbmV4dCkge1xyXG4gICAgICB2YXIgc25hcHNob3QgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgc25hcHNob3Qub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmIChoZWlnaHQgPCAxIHx8IHdpZHRoIDwgMSlcclxuICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgdmFyIGltZ0luc3RhbmNlID0gbmV3IGZhYnJpYy5JbWFnZSh0aGlzLCB7XHJcbiAgICAgICAgICAvLyBvcHRpb25zIHRvIG1ha2UgdGhlIGltYWdlIHN0YXRpY1xyXG4gICAgICAgICAgc2VsZWN0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICBldmVudGVkOiBmYWxzZSxcclxuICAgICAgICAgIGxvY2tNb3ZlbWVudFg6IHRydWUsXHJcbiAgICAgICAgICBsb2NrTW92ZW1lbnRZOiB0cnVlLFxyXG4gICAgICAgICAgbG9ja1JvdGF0aW9uOiB0cnVlLFxyXG4gICAgICAgICAgbG9ja1NjYWxpbmdYOiB0cnVlLFxyXG4gICAgICAgICAgbG9ja1NjYWxpbmdZOiB0cnVlLFxyXG4gICAgICAgICAgbG9ja1VuaVNjYWxpbmc6IHRydWUsXHJcbiAgICAgICAgICBoYXNDb250cm9sczogZmFsc2UsXHJcbiAgICAgICAgICBoYXNCb3JkZXJzOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2YXIgd2lkdGggPSB0aGlzLndpZHRoO1xyXG4gICAgICAgIHZhciBoZWlnaHQgPSB0aGlzLmhlaWdodDtcclxuXHJcbiAgICAgICAgLy8gQWRkIGltYWdlXHJcbiAgICAgICAgY2FudmFzLmFkZChpbWdJbnN0YW5jZSk7XHJcblxyXG4gICAgICAgIG5leHQoaW1nSW5zdGFuY2UpO1xyXG5cclxuICAgICAgfTtcclxuXHJcbiAgICAgIHZhciB2aWV3cG9ydCA9IERhcmtyb29tLlV0aWxzLmNvbXB1dGVJbWFnZVZpZXdQb3J0KGltYWdlKTtcclxuICAgICAgdmFyIHdpZHRoID0gdmlld3BvcnQud2lkdGg7XHJcbiAgICAgIHZhciBoZWlnaHQgPSB2aWV3cG9ydC5oZWlnaHQ7XHJcblxyXG4gICAgICB2YXIgbmV3UmVjdCA9IHRoaXMub3B0aW9ucy5yZWN0YW5nbGU7XHJcbiAgICAgIHZhciBzY2FsZVggPSB0aGlzLm9wdGlvbnMub3JpZ2luYWxXaWR0aCAvIGNhbnZhcy5nZXRXaWR0aCgpO1xyXG4gICAgICB2YXIgc2NhbGVZID0gdGhpcy5vcHRpb25zLm9yaWdpbmFsSGVpZ2h0IC8gY2FudmFzLmdldEhlaWdodCgpO1xyXG4gICAgICBuZXdSZWN0LnNldCh7IHNjYWxlWDogMSAvIHNjYWxlWCwgc2NhbGVZOiAxIC8gc2NhbGVZIH0pO1xyXG4gICAgICBjYW52YXMuYWRkKG5ld1JlY3QpO1xyXG4gICAgICBjYW52YXMucmVuZGVyQWxsKCk7XHJcbiAgICAgIHNuYXBzaG90LnNyYyA9IGNhbnZhcy50b0RhdGFVUkwoKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgRGFya3Jvb20ucGx1Z2luc1sncmVjdGFuZ2xlJ10gPSBEYXJrcm9vbS5QbHVnaW4uZXh0ZW5kKHtcclxuICAgIHJlY3RhbmdsZVpvbmU6IG51bGwsXHJcblxyXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gSW5pdGlhbGl6ZURhcmtyb29tUmVjdGFuZ2xlUGx1Z2luKCkge1xyXG4gICAgICB2YXIgYnV0dG9uR3JvdXAgPSB0aGlzLmRhcmtyb29tLnRvb2xiYXIuY3JlYXRlQnV0dG9uR3JvdXAoKTtcclxuXHJcbiAgICAgIHRoaXMucmVjdGFuZ2xlQnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcclxuICAgICAgICBpbWFnZTogJ3JlY3RhbmdsZScsXHJcbiAgICAgICAgdG9vbHRpcDogJ0RyYXcnXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMub24oJ21vdXNlOmRvd24nLCB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcykpO1xyXG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbignbW91c2U6bW92ZScsIHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKSk7XHJcbiAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLm9uKCdtb3VzZTp1cCcsIHRoaXMuaGFuZGxlTW91c2VVcC5iaW5kKHRoaXMpKTtcclxuICAgICAgdGhpcy5yZWN0YW5nbGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGNsZWFyOiBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy5yZWN0YW5nbGVCdXR0b24uYWN0aXZlKGZhbHNlKTtcclxuICAgICAgaGFzRm9jdXMgPSB0cnVlO1xyXG4gICAgICBpc0Rvd24gPSBmYWxzZVxyXG4gICAgfSxcclxuXHJcbiAgICBvbkNsaWNrOiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgaWYgKCFoYXNGb2N1cykge1xyXG4gICAgICAgIHRoaXMucmVjdGFuZ2xlQnV0dG9uLmFjdGl2ZShmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMuZGVmYXVsdEN1cnNvciA9ICdkZWZhdWx0JztcclxuICAgICAgICBoYXNGb2N1cyA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZGFya3Jvb20uY2xlYXJGb2N1cyhcInJlY3RhbmdsZVwiKTtcclxuICAgICAgdGhpcy5yZWN0YW5nbGVCdXR0b24uYWN0aXZlKHRydWUpO1xyXG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5kZWZhdWx0Q3Vyc29yID0gJ2Nyb3NzaGFpcic7XHJcbiAgICAgIGhhc0ZvY3VzID0gZmFsc2U7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uTW91c2VEb3duOiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgaWYgKGhhc0ZvY3VzKSByZXR1cm47XHJcbiAgICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudCgncmVjdGFuZ2xlOmJlZ2luJyk7XHJcbiAgICAgIHZhciBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcclxuICAgICAgaXNEb3duID0gdHJ1ZTtcclxuICAgICAgdmFyIHBvaW50ZXIgPSBjYW52YXMuZ2V0UG9pbnRlcihldmVudC5lKTtcclxuICAgICAgb3JpZ1ggPSBwb2ludGVyLng7XHJcbiAgICAgIG9yaWdZID0gcG9pbnRlci55O1xyXG4gICAgICByZWN0ID0gbmV3IGZhYnJpYy5SZWN0KHtcclxuICAgICAgICBsZWZ0OiBvcmlnWCxcclxuICAgICAgICB0b3A6IG9yaWdZLFxyXG4gICAgICAgIG9yaWdpblg6ICdsZWZ0JyxcclxuICAgICAgICBvcmlnaW5ZOiAndG9wJyxcclxuICAgICAgICB3aWR0aDogcG9pbnRlci54IC0gb3JpZ1gsXHJcbiAgICAgICAgaGVpZ2h0OiBwb2ludGVyLnkgLSBvcmlnWSxcclxuICAgICAgICBhbmdsZTogMCxcclxuICAgICAgICBmaWxsOiBcImJsYWNrXCIsXHJcbiAgICAgICAgdHJhbnNwYXJlbnRDb3JuZXJzOiBmYWxzZVxyXG4gICAgICB9KTtcclxuICAgICAgY2FudmFzLmFkZChyZWN0KTtcclxuICAgIH0sXHJcblxyXG4gICAgb25Nb3VzZU1vdmU6IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICBpZiAoaXNEb3duKSB7XHJcbiAgICAgICAgdGhpcy5kYXJrcm9vbS5kaXNwYXRjaEV2ZW50KCdyZWN0YW5nbGU6dXBkYXRlJyk7XHJcbiAgICAgICAgdmFyIGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xyXG4gICAgICAgIHZhciBwb2ludGVyID0gY2FudmFzLmdldFBvaW50ZXIoZXZlbnQuZSk7XHJcblxyXG4gICAgICAgIGlmIChvcmlnWCA+IHBvaW50ZXIueCkge1xyXG4gICAgICAgICAgcmVjdC5zZXQoe1xyXG4gICAgICAgICAgICBsZWZ0OiBNYXRoLmFicyhwb2ludGVyLngpXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9yaWdZID4gcG9pbnRlci55KSB7XHJcbiAgICAgICAgICByZWN0LnNldCh7XHJcbiAgICAgICAgICAgIHRvcDogTWF0aC5hYnMocG9pbnRlci55KVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZWN0LnNldCh7XHJcbiAgICAgICAgICB3aWR0aDogTWF0aC5hYnMob3JpZ1ggLSBwb2ludGVyLngpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmVjdC5zZXQoe1xyXG4gICAgICAgICAgaGVpZ2h0OiBNYXRoLmFicyhvcmlnWSAtIHBvaW50ZXIueSlcclxuICAgICAgICB9KTtcclxuICAgICAgICBjYW52YXMucmVuZGVyQWxsKCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgaGFuZGxlTW91c2VVcDogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgIGlmIChoYXNGb2N1cykgcmV0dXJuO1xyXG4gICAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XHJcbiAgICAgIGlzRG93biA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoJ3JlY3RhbmdsZTplbmQnKTtcclxuICAgICAgY2FudmFzLnJlbW92ZShyZWN0KTtcclxuICAgICAgdmFyIGNhbnZhc09mZnNldCA9IGNhbnZhcy5jYWxjT2Zmc2V0KCk7XHJcbiAgICAgIHRoaXMuZGFya3Jvb20uYXBwbHlUcmFuc2Zvcm1hdGlvbiggbmV3IFJlY3RhbmdsZVRyYW5zZm9ybWF0aW9uKHtcclxuICAgICAgICBvZmZTZXQ6IGNhbnZhc09mZnNldCxcclxuICAgICAgICBvcmlnaW5hbFdpZHRoOiBjYW52YXMuZ2V0V2lkdGgoKSxcclxuICAgICAgICBvcmlnaW5hbEhlaWdodDogY2FudmFzLmdldEhlaWdodCgpLFxyXG4gICAgICAgIHJlY3RhbmdsZTogcmVjdFxyXG4gICAgICB9KSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG59KSgpO1xyXG4iLCIoZnVuY3Rpb24gKCkge1xuICAndXNlIHN0cmljdCc7XG4gIHZhciBtYXhab29tID0gMjtcblxuICBEYXJrcm9vbS5wbHVnaW5zWyd6b29tJ10gPSBEYXJrcm9vbS5QbHVnaW4uZXh0ZW5kKHtcblxuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uIEluaXREYXJrcm9vbUJveFBsdWdpbigpIHtcbiAgICAgIHZhciBidXR0b25Hcm91cCA9IHRoaXMuZGFya3Jvb20udG9vbGJhci5jcmVhdGVCdXR0b25Hcm91cCgpO1xuXG4gICAgICB0aGlzLnpvb21JbkJ1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XG4gICAgICAgIGltYWdlOiAnem9vbS1pbicsXG4gICAgICAgIHRpdGxlOiAnem9vbSBpbidcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnpvb21PdXRCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xuICAgICAgICBpbWFnZTogJ3pvb20tb3V0JyxcbiAgICAgICAgdGl0bGU6ICd6b29tIG91dCcsXG4gICAgICAgIGRpc2FibGVkOiB0cnVlXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5wYW4gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xuICAgICAgICBpbWFnZTogJ2hhbmQnLFxuICAgICAgICBkaXNhYmxlZDogdHJ1ZVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuem9vbUluQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy56b29tSW4uYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLnpvb21PdXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnpvb21PdXQuYmluZCh0aGlzKSk7XG4gICAgfSxcblxuICAgIHpvb21JbjogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xuICAgICAgbWluID0gY2FudmFzLmdldFpvb20oKTtcbiAgICAgIGlmIChjYW52YXMuZ2V0Wm9vbSgpIDw9IG1heFpvb20pIHtcbiAgICAgICAgY2FudmFzLnNldFpvb20oY2FudmFzLmdldFpvb20oKSAqIDEuMSk7XG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZUJ1dHRvbnMoKTtcbiAgICB9LFxuXG4gICAgem9vbU91dDogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xuICAgICAgY2FudmFzLnNldFpvb20oY2FudmFzLmdldFpvb20oKSAvIDEuMSk7XG4gICAgfSxcblxuICAgIHVwZGF0ZUJ1dHRvbnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcbiAgICAgIHZhciBzaG91bGREaXNhYmxlID0gY2FudmFzLmdldFpvb20oKSA8PSAwO1xuICAgICAgdGhpcy5wYW4uZGlzYWJsZShzaG91bGREaXNhYmxlKTtcbiAgICAgIHRoaXMuem9vbU91dEJ1dHRvbi5kaXNhYmxlKHNob3VsZERpc2FibGUpO1xuICAgIH1cbiAgfSk7XG59KSgpO1xuIiwiKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG5EYXJrcm9vbS5wbHVnaW5zWydzYXZlJ10gPSBEYXJrcm9vbS5QbHVnaW4uZXh0ZW5kKHtcblxuICBkZWZhdWx0czoge1xuICAgIGNhbGxiYWNrOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZGFya3Jvb20uc2VsZkRlc3Ryb3koKTtcbiAgICB9XG4gIH0sXG5cbiAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gSW5pdGlhbGl6ZURhcmtyb29tU2F2ZVBsdWdpbigpIHtcbiAgICB2YXIgYnV0dG9uR3JvdXAgPSB0aGlzLmRhcmtyb29tLnRvb2xiYXIuY3JlYXRlQnV0dG9uR3JvdXAoKTtcblxuICAgIHRoaXMuZGVzdHJveUJ1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XG4gICAgICBpbWFnZTogJ3NhdmUnXG4gICAgfSk7XG5cbiAgICB0aGlzLmRlc3Ryb3lCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9wdGlvbnMuY2FsbGJhY2suYmluZCh0aGlzKSk7XG4gIH0sXG59KTtcblxufSkoKTtcbiJdfQ==
