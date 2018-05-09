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

      Stickyfill.add(toolbarElement);
      Stickyfill.refreshAll();

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
    },

    createInput: function(options) {
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
      inputElement.setAttribute("type", "color");
      inputElement.setAttribute("list", "rainbow");
      inputElement.value = "#ff0000";
      inputElement.className = "darkroom-button darkroom-input-" + options.type;
      inputElement.innerHTML = '<svg class="darkroom-icon"><use xlink:href="#' + options.image + '" /></svg>';
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

  Input.prototype = {
    addEventListener: function(eventName, listener) {
      if (this.element.addEventListener) {
        this.element.addEventListener(eventName, listener);
      } else if (this.element.attachEvent) {
        this.element.attachEvent("on" + eventName, listener);
      }
    },
    removeEventListener: function(eventName, listener) {
      if (this.element.removeEventListener) {
        this.element.removeEventListener(eventName, listener);
      }
    },
    active: function(value) {
      if (value) { this.element.classList.add("darkroom-input-active"); } else { this.element.classList.remove("darkroom-input-active"); }
    },
    hide: function(value) {
      if (value) { this.element.classList.add("darkroom-button-hidden"); } else { this.element.classList.remove("darkroom-button-hidden"); }
    },
    disable: function(value) {
      this.element.disabled = !!value;
    }
  };
}());
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
;(function () {
  fabric.Image.prototype.strokeWidth = 0;
  const Rotation = Darkroom.Transformation.extend({
    applyTransformation: function(canvas, image, next) {
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

    initialize: function() {
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

    rotateLeft: function() {
      this.rotate(-90);
    },

    rotateRight: function() {
      this.rotate(90);
    },

    rotate: function(angle) {
      this.darkroom.options.left = 0;
      this.darkroom.options.top = 0;
      this.darkroom.applyTransformation(new Rotation({
        angle: angle
      }));
    }

  });
}());
;(function () {
  fabric.Image.prototype.strokeWidth = 0;
  const Crop = Darkroom.Transformation.extend({
    applyTransformation: function(canvas, image, next) {
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
        left: left,
        top: top,
        width: width,
        height: height
      });
    }
  });

  const CropZone = fabric.util.createClass(fabric.Rect, {
    _render: function(ctx) {
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

    _renderOverlay: function(ctx) {
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

    _renderBorders: function(ctx) {
      ctx.beginPath();
      ctx.moveTo(-this.getWidth() / 2, -this.getHeight() / 2); // upper left
      ctx.lineTo(this.getWidth() / 2, -this.getHeight() / 2); // upper right
      ctx.lineTo(this.getWidth() / 2, this.getHeight() / 2); // down right
      ctx.lineTo(-this.getWidth() / 2, this.getHeight() / 2); // down left
      ctx.lineTo(-this.getWidth() / 2, -this.getHeight() / 2); // upper left
      ctx.stroke();
    },

    _renderGrid: function(ctx) {
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

    initialize: function() {
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

    clear: function() {
      if (this.hasFocus()) {
        this.releaseFocus();
      }
    },
    // Avoid crop zone to go beyond the canvas edges
    onObjectMoving: function(event) {
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
    onObjectScaling: function(event) {
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
    onMouseDown: function(event) {
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
    onMouseMove: function(event) {
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

    onMouseMoveKeyCrop: function(event) {
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
    onMouseUp: function(event) {
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

    onKeyDown: function(event) {
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

    onKeyUp: function(event) {
      if (this.options.quickCropKey === false || event.keyCode !== this.options.quickCropKey || !this.isKeyCroping) {
        return;
      }

      // Unactive quick crop flow
      this.isKeyCroping = false;
      this.startX = 1;
      this.startY = 1;
      this.onMouseUp();
    },

    selectZone: function(x, y, width, height, forceDimension) {
      if (!this.hasFocus()) {
        this.requireFocus();
      }

      if (!forceDimension) {
        this._renderCropZone(x, y, x + width, y + height);
      } else {
        this.cropZone.set({
          left: x,
          top: y,
          width: width,
          height: height
        });
      }

      const canvas = this.darkroom.canvas;
      canvas.bringToFront(this.cropZone);
      this.cropZone.setCoords();
      canvas.setActiveObject(this.cropZone);
      canvas.calcOffset();

      this.darkroom.dispatchEvent("crop:update");
    },

    toggleCrop: function() {
      if (!this.hasFocus()) {
        this.requireFocus();
      } else {
        this.releaseFocus();
      }
    },

    cropCurrentZone: function() {
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
    hasFocus: function() {
      return this.cropZone !== undefined;
    },

    // Create the crop zone
    requireFocus: function() {
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
    releaseFocus: function() {
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

    _renderCropZone: function(fromX, fromY, toX, toY) {
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
    applyTransformation: function(canvas, image, next) {
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

    initialize: function(options) {
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

    _applyScaling: function(w, h) {
      const scaleX = this.getWidth() / w;
      const scaleY = this.getHeight() / h;
      this.set({
        scaleX: this.scaleX / scaleX,
        scaleY: this.scaleY / scaleY
      });
    },

    _render: function(ctx) {
      this._draw(ctx);
    },

    _draw: function(ctx) {
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

    clone: function() {
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

    initialize: function() {
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

    clear: function() {
      if (this.hasFocus()) {
        this.removeFocus();
      }
    },

    hasFocus: function() {
      return this.pencilZone !== null;
    },

    onClick: function() {
      if (!this.hasFocus()) {
        this.requireFocus();
        return;
      }
      this.removeFocus();
    },

    onMouseDown: function(event) {
      event.e.preventDefault();
      if (!this.hasFocus()) {
        return;
      }

      this.darkroom.dispatchEvent("pencil:begin");
      this.mouseDown = true;
      this.path.push(this.getMousePosition(this.canvas, event));
      this.renderZone();
    },

    onMouseUp: function(event) {
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

    onMouseMove: function(event) {
      if (!this.hasFocus()) {
        return;
      }

      if (this.mouseDown) {
        const mousePos = this.getMousePosition(this.canvas, event);
        this.path.push(mousePos);
        this.renderZone();
      }
    },

    removeFocus: function() {
      this.darkroom.dispatchEvent("pencil:disabled");
      this.pencilButton.active(false);
      this.pencilMode = false;
      this.darkroom.canvas.defaultCursor = "default";
      if (this.pencilZone) {
        this.pencilZone.remove();
        this.pencilZone = null;
      }
    },

    requireFocus: function() {
      this.darkroom.clearFocus("pencil");
      this.darkroom.dispatchEvent("pencil:enabled");
      this.pencilMode = true;
      this.pencilButton.active(true);

      this.pencilZone = this.newZone();

      this.darkroom.canvas.add(this.pencilZone);
      this.darkroom.canvas.defaultCursor = "crosshair";
    },

    getMousePosition: function(canvas, event) {
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

    newZone: function() {
      this.path = [];
      const stroke = this.stroke;
      const size = this.size;
      const width = this.darkroom.canvas.getWidth();
      const height = this.darkroom.canvas.getHeight();
      const zone = new PencilZone({
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

    applyPencilPath: function() {
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

    renderZone: function() {
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
    applyTransformation: function(canvas, image, next) {
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

    initialize: function() {
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

    clear: function() {
      this.rectangleButton.active(false);
      hasFocus = true;
      isDown = false;
    },

    onClick: function() {
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

    onMouseDown: function(event) {
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

    onMouseMove: function(event) {
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

    handleMouseUp: function() {
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
    applyTransformation: function(canvas, image, next) {
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

    initialize: function() {
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

    clear: function() {
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

    addText: function() {
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
        scaling: function() {
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

    setColor: function(event) {
      this.setStyle(this, "fill", event.target.value);
    },

    setStyle: function(object, styleName, value) {
      const canvas = this.darkroom.canvas;
      object.newText.fill = value;
      canvas.renderAll();
    },

    saveText: function() {
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

    onMouseDown: function() {
      if (!this.newText) { return; }
      if (this.newText.active) {
        this.isDown = true;
      }
    },

    onMouseMove: function() {
      if (!this.isDown) {
        return;
      }
      const canvas = this.darkroom.canvas;
      canvas.renderAll();
    },

    handleMouseUp: function() {
      this.isDown = false;
    },

    releaseFocus: function() {
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
    applyTransformation: function(canvas, image, next) {
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

        next:(imgInstance);
      };

      canvas.add(this.options.circle);
      canvas.renderAll();
      snapshot.src = canvas.toDataURL();
    }
  });

  Darkroom.plugins.circle = Darkroom.Plugin.extend({

    initialize: function() {
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

    clear: function() {
      this.circleButton.active(false);
      hasFocus = true;
      isDown = false;
    },

    onClick: function() {
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

    onMouseDown: function(event) {
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

    onMouseMove: function(event) {
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

    handleMouseUp: function() {
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

    initialize: function() {
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

    clear: function() {
      states.panActive = false;
      this.pan.active(false);
      states.panning = false;
      this.darkroom.canvas.defaultCursor = "default";
      this.restoreZoomPan();
    },

    onPan: function() {
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


    panEnter: function(event) {
      if (states.panActive) {
        states.panning = true;
        origX = event.e.screenX || event.e.touches[0].screenX;
        origY = event.e.screenY || event.e.touches[0].screenY;
      }
    },

    _pan: function(event) {
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

    panExit: function() {
      if (states.panActive) {
        const options = this.darkroom.options;
        const image = this.darkroom.image;
        states.panning = false;
        options.left = image.left;
        options.top = image.top;
      }
    },

    doPan: function(delta) {
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

    constrainPan: function(delta) {
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

    restoreZoomPan: function() {
      if (states.lastScale != null) {
        this.darkroom.image.scale(states.lastScale);
        if (states.realPan != null) {
          this.doPan(states.realPan);
        }
      }
    },

    zoomIn: function() {
      const canvas = this.darkroom.canvas;
      if (canvas.getZoom() <= maxZoom) {
        canvas.setZoom(canvas.getZoom() * 1.1);
        canvas.renderAll();
      }
      this.onPan();
      this.updateButtons();
    },

    zoomOut: function() {
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

    updateButtons: function() {
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
      callback: function() {
        this.darkroom.selfDestroy();
      }
    },

    initialize: function() {
      const buttonGroup = this.darkroom.toolbar.createButtonGroup();

      this.destroyButton = buttonGroup.createButton({
        image: "save"
      });

      this.destroyButton.addEventListener("click", this.options.callback.bind(this));
    }
  });
}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3RzdHJhcC5qcyIsImRhcmtyb29tLmpzIiwicGx1Z2luLmpzIiwidHJhbnNmb3JtYXRpb24uanMiLCJ1aS5qcyIsInV0aWxzLmpzIiwiZGFya3Jvb20uaGlzdG9yeS5qcyIsImRhcmtyb29tLnJvdGF0ZS5qcyIsImRhcmtyb29tLmNyb3AuanMiLCJkYXJrcm9vbS5wZW5jaWwuanMiLCJkYXJrcm9vbS5yZWN0YW5nbGUuanMiLCJkYXJrcm9vbS50ZXh0LmpzIiwiZGFya3Jvb20uY2lyY2xlLmpzIiwiem9vbS5qcyIsImRhcmtyb29tLnNhdmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQ3hYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0M1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQzFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQzlyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDclNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDaEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0NwTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0M3SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDak5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImRhcmtyb29tLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIC8vIEluamVjdCBTVkcgaWNvbnMgaW50byB0aGUgRE9NXG4gICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtZW50LmlkID0gJ2Rhcmtyb29tLWljb25zJztcbiAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IDA7XG4gICAgZWxlbWVudC5zdHlsZS53aWR0aCA9IDA7XG4gICAgZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgZWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSAnPCEtLSBpbmplY3Q6c3ZnIC0tPjwhLS0gZW5kaW5qZWN0IC0tPic7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KTtcblxuICAgIH0pKCk7XG4iLCIoZnVuY3Rpb24gKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgd2luZG93LkRhcmtyb29tID0gRGFya3Jvb207XG5cbiAgLy8gQ29yZSBvYmplY3Qgb2YgRGFya3Jvb21KUy5cbiAgLy8gQmFzaWNhbGx5IGl0J3MgYSBzaW5nbGUgb2JqZWN0LCBpbnN0YW5jaWFibGUgdmlhIGFuIGVsZW1lbnRcbiAgLy8gKGl0IGNvdWxkIGJlIGEgQ1NTIHNlbGVjdG9yIG9yIGEgRE9NIGVsZW1lbnQpLCBzb21lIGN1c3RvbSBvcHRpb25zLFxuICAvLyBhbmQgYSBsaXN0IG9mIHBsdWdpbiBvYmplY3RzIChvciBub25lIHRvIHVzZSBkZWZhdWx0IG9uZXMpLlxuICBmdW5jdGlvbiBEYXJrcm9vbShlbGVtZW50LCBvcHRpb25zLCBwbHVnaW5zKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucywgcGx1Z2lucyk7XG4gIH1cblxuICAvLyBDcmVhdGUgYW4gZW1wdHkgbGlzdCBvZiBwbHVnaW4gb2JqZWN0cywgd2hpY2ggd2lsbCBiZSBmaWxsZWQgYnlcbiAgLy8gb3RoZXIgcGx1Z2luIHNjcmlwdHMuIFRoaXMgaXMgdGhlIGRlZmF1bHQgcGx1Z2luIGxpc3QgaWYgbm9uZSBpc1xuICAvLyBzcGVjaWZpZWQgaW4gRGFya3Jvb20nc3MgY29uc3RydWN0b3IuXG4gIERhcmtyb29tLnBsdWdpbnMgPSBbXTtcblxuICBEYXJrcm9vbS5wcm90b3R5cGUgPSB7XG4gICAgLy8gUmVmZXJlbmNlIHRvIHRoZSBtYWluIGNvbnRhaW5lciBlbGVtZW50XG4gICAgY29udGFpbmVyRWxlbWVudDogbnVsbCxcblxuICAgIC8vIFJlZmVyZW5jZSB0byB0aGUgRmFicmljIGNhbnZhcyBvYmplY3RcbiAgICBjYW52YXM6IG51bGwsXG5cbiAgICAvLyBSZWZlcmVuY2UgdG8gdGhlIEZhYnJpYyBpbWFnZSBvYmplY3RcbiAgICBpbWFnZTogbnVsbCxcblxuICAgIC8vIFJlZmVyZW5jZSB0byB0aGUgRmFicmljIHNvdXJjZSBjYW52YXMgb2JqZWN0XG4gICAgc291cmNlQ2FudmFzOiBudWxsLFxuXG4gICAgLy8gUmVmZXJlbmNlIHRvIHRoZSBGYWJyaWMgc291cmNlIGltYWdlIG9iamVjdFxuICAgIHNvdXJjZUltYWdlOiBudWxsLFxuXG4gICAgLy8gVHJhY2sgb2YgdGhlIG9yaWdpbmFsIGltYWdlIGVsZW1lbnRcbiAgICBvcmlnaW5hbEltYWdlRWxlbWVudDogbnVsbCxcblxuICAgIC8vIFN0YWNrIG9mIHRyYW5zZm9ybWF0aW9ucyB0byBhcHBseSB0byB0aGUgaW1hZ2Ugc291cmNlXG4gICAgdHJhbnNmb3JtYXRpb25zOiBbXSxcblxuICAgIC8vIERlZmF1bHQgb3B0aW9uc1xuICAgIGRlZmF1bHRzOiB7XG4gICAgICAvLyBDYW52YXMgcHJvcGVydGllcyAoZGltZW5zaW9uLCByYXRpbywgY29sb3IpXG4gICAgICBtaW5XaWR0aDogbnVsbCxcbiAgICAgIG1pbkhlaWdodDogbnVsbCxcbiAgICAgIG1heFdpZHRoOiBudWxsLFxuICAgICAgbWF4SGVpZ2h0OiBudWxsLFxuICAgICAgcmF0aW86IG51bGwsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgdG9wOiAwLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG5cbiAgICAgIC8vIFBsdWdpbnMgb3B0aW9uc1xuICAgICAgcGx1Z2luczoge30sXG5cbiAgICAgIC8vIFBvc3QtaW5pdGlhbGlzYXRpb24gY2FsbGJhY2tcbiAgICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uICgpIHsgLyogbm9vcCAqLyB9XG4gICAgfSxcblxuICAgIC8vIExpc3Qgb2YgdGhlIGluc3RhbmNpZWQgcGx1Z2luc1xuICAgIHBsdWdpbnM6IHt9LFxuXG4gICAgLy8gVGhpcyBvcHRpb25zIGFyZSBhIG1lcmdlIGJldHdlZW4gYGRlZmF1bHRzYCBhbmQgdGhlIG9wdGlvbnMgcGFzc2VkXG4gICAgLy8gdGhyb3VnaCB0aGUgY29uc3RydWN0b3JcbiAgICBvcHRpb25zOiB7fSxcblxuICAgIGNvbnN0cnVjdG9yOiBmdW5jdGlvbiAoZWxlbWVudCwgb3B0aW9ucywgcGx1Z2lucykge1xuICAgICAgdGhpcy5vcHRpb25zID0gRGFya3Jvb20uVXRpbHMuZXh0ZW5kKG9wdGlvbnMsIHRoaXMuZGVmYXVsdHMpO1xuXG4gICAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKVxuICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50KTtcbiAgICAgIGlmIChudWxsID09PSBlbGVtZW50KVxuICAgICAgICByZXR1cm47XG5cbiAgICAgIHZhciBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBJbml0aWFsaXplIHRoZSBET00vRmFicmljIGVsZW1lbnRzXG4gICAgICAgIHRoaXMuX2luaXRpYWxpemVET00oZWxlbWVudCk7XG4gICAgICAgIHRoaXMuX2luaXRpYWxpemVJbWFnZSgpO1xuXG4gICAgICAgIC8vIFRoZW4gaW5pdGlhbGl6ZSB0aGUgcGx1Z2luc1xuICAgICAgICB0aGlzLl9pbml0aWFsaXplUGx1Z2lucyhEYXJrcm9vbS5wbHVnaW5zKTtcblxuICAgICAgICAvLyBQdWJsaWMgbWV0aG9kIHRvIGFkanVzdCBpbWFnZSBhY2NvcmRpbmcgdG8gdGhlIGNhbnZhc1xuICAgICAgICB0aGlzLnJlZnJlc2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIEV4ZWN1dGUgYSBjdXN0b20gY2FsbGJhY2sgYWZ0ZXIgaW5pdGlhbGl6YXRpb25cbiAgICAgICAgICB0aGlzLm9wdGlvbnMuaW5pdGlhbGl6ZS5iaW5kKHRoaXMpLmNhbGwoKTtcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcblxuICAgICAgfS5iaW5kKHRoaXMpXG5cbiAgICAgIC8vaW1hZ2UuY3Jvc3NPcmlnaW4gPSAnYW5vbnltb3VzJztcbiAgICAgIGltYWdlLnNyYyA9IGVsZW1lbnQuc3JjO1xuICAgIH0sXG5cbiAgICBzZWxmRGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyRWxlbWVudDtcbiAgICAgIHZhciBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250YWluZXIucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoaW1hZ2UsIGNvbnRhaW5lcik7XG4gICAgICB9XG5cbiAgICAgIGltYWdlLnNyYyA9IHRoaXMuc291cmNlSW1hZ2UudG9EYXRhVVJMKCk7XG4gICAgfSxcblxuICAgIC8vIEFkZCBhYmlsaXR5IHRvIGF0dGFjaCBldmVudCBsaXN0ZW5lciBvbiB0aGUgY29yZSBvYmplY3QuXG4gICAgLy8gSXQgdXNlcyB0aGUgY2FudmFzIGVsZW1lbnQgdG8gcHJvY2VzcyBldmVudHMuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICAgIHZhciBlbCA9IHRoaXMuY2FudmFzLmdldEVsZW1lbnQoKTtcbiAgICAgIGlmIChlbC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjayk7XG4gICAgICB9IGVsc2UgaWYgKGVsLmF0dGFjaEV2ZW50KSB7XG4gICAgICAgIGVsLmF0dGFjaEV2ZW50KCdvbicgKyBldmVudE5hbWUsIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFdmVudDogZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuICAgICAgLy8gVXNlIHRoZSBvbGQgd2F5IG9mIGNyZWF0aW5nIGV2ZW50IHRvIGJlIElFIGNvbXBhdGlibGVcbiAgICAgIC8vIFNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9HdWlkZS9FdmVudHMvQ3JlYXRpbmdfYW5kX3RyaWdnZXJpbmdfZXZlbnRzXG4gICAgICB2YXIgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcbiAgICAgIGV2ZW50LmluaXRFdmVudChldmVudE5hbWUsIHRydWUsIHRydWUpO1xuXG4gICAgICB0aGlzLmNhbnZhcy5nZXRFbGVtZW50KCkuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgfSxcblxuICAgIC8vIEFkanVzdCBpbWFnZSAmIGNhbnZhcyBkaW1lbnNpb24gYWNjb3JkaW5nIHRvIG1pbi9tYXggd2lkdGgvaGVpZ2h0XG4gICAgLy8gYW5kIHJhdGlvIHNwZWNpZmllZCBpbiB0aGUgb3B0aW9ucy5cbiAgICAvLyBUaGlzIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkIGFmdGVyIGVhY2ggaW1hZ2UgdHJhbnNmb3JtYXRpb24uXG4gICAgcmVmcmVzaDogZnVuY3Rpb24gKG5leHQpIHtcbiAgICAgIHZhciBjbG9uZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgY2xvbmUub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9yZXBsYWNlQ3VycmVudEltYWdlKG5ldyBmYWJyaWMuSW1hZ2UoY2xvbmUpKTtcblxuICAgICAgICBpZiAobmV4dCkgbmV4dCgpO1xuICAgICAgfS5iaW5kKHRoaXMpO1xuICAgICAgY2xvbmUuc3JjID0gdGhpcy5zb3VyY2VJbWFnZS50b0RhdGFVUkwoKTtcbiAgICB9LFxuXG4gICAgX3JlcGxhY2VDdXJyZW50SW1hZ2U6IGZ1bmN0aW9uIChuZXdJbWFnZSkge1xuICAgICAgaWYgKHRoaXMuaW1hZ2UpIHtcbiAgICAgICAgdGhpcy5pbWFnZS5yZW1vdmUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5pbWFnZSA9IG5ld0ltYWdlO1xuICAgICAgdGhpcy5pbWFnZS5zZWxlY3RhYmxlID0gZmFsc2U7XG4gICAgICB0aGlzLmltYWdlLmxlZnQgPSB0aGlzLm9wdGlvbnMubGVmdDtcbiAgICAgIHRoaXMuaW1hZ2UudG9wID0gdGhpcy5vcHRpb25zLnRvcDtcblxuICAgICAgLy8gQWRqdXN0IHdpZHRoIG9yIGhlaWdodCBhY2NvcmRpbmcgdG8gc3BlY2lmaWVkIHJhdGlvXG4gICAgICB2YXIgdmlld3BvcnQgPSBEYXJrcm9vbS5VdGlscy5jb21wdXRlSW1hZ2VWaWV3UG9ydCh0aGlzLmltYWdlKTtcbiAgICAgIHZhciBjYW52YXNXaWR0aCA9IHZpZXdwb3J0LndpZHRoO1xuICAgICAgdmFyIGNhbnZhc0hlaWdodCA9IHZpZXdwb3J0LmhlaWdodDtcblxuICAgICAgLy8gaWYgKG51bGwgIT09IHRoaXMub3B0aW9ucy5yYXRpbykge1xuICAgICAgLy8gICB2YXIgY2FudmFzUmF0aW8gPSArdGhpcy5vcHRpb25zLnJhdGlvO1xuICAgICAgLy8gICB2YXIgY3VycmVudFJhdGlvID0gY2FudmFzV2lkdGggLyBjYW52YXNIZWlnaHQ7XG5cbiAgICAgIC8vICAgaWYgKGN1cnJlbnRSYXRpbyA+IGNhbnZhc1JhdGlvKSB7XG4gICAgICAvLyAgICAgY2FudmFzSGVpZ2h0ID0gY2FudmFzV2lkdGggLyBjYW52YXNSYXRpbztcbiAgICAgIC8vICAgfSBlbHNlIGlmIChjdXJyZW50UmF0aW8gPCBjYW52YXNSYXRpbykge1xuICAgICAgLy8gICAgIGNhbnZhc1dpZHRoID0gY2FudmFzSGVpZ2h0ICogY2FudmFzUmF0aW87XG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH1cblxuICAgICAgLy8gLy8gVGhlbiBzY2FsZSB0aGUgaW1hZ2UgdG8gZml0IGludG8gZGltZW5zaW9uIGxpbWl0c1xuICAgICAgLy8gdmFyIHNjYWxlTWluID0gMTtcbiAgICAgIC8vIHZhciBzY2FsZU1heCA9IDE7XG4gICAgICAvLyB2YXIgc2NhbGVYID0gMTtcbiAgICAgIC8vIHZhciBzY2FsZVkgPSAxO1xuXG4gICAgICAvLyBpZiAobnVsbCAhPT0gdGhpcy5vcHRpb25zLm1heFdpZHRoICYmIHRoaXMub3B0aW9ucy5tYXhXaWR0aCA8IGNhbnZhc1dpZHRoKSB7XG4gICAgICAvLyAgIHNjYWxlWCA9ICB0aGlzLm9wdGlvbnMubWF4V2lkdGggLyBjYW52YXNXaWR0aDtcbiAgICAgIC8vIH1cbiAgICAgIC8vIGlmIChudWxsICE9PSB0aGlzLm9wdGlvbnMubWF4SGVpZ2h0ICYmIHRoaXMub3B0aW9ucy5tYXhIZWlnaHQgPCBjYW52YXNIZWlnaHQpIHtcbiAgICAgIC8vICAgc2NhbGVZID0gIHRoaXMub3B0aW9ucy5tYXhIZWlnaHQgLyBjYW52YXNIZWlnaHQ7XG4gICAgICAvLyB9XG4gICAgICAvLyBzY2FsZU1pbiA9IE1hdGgubWluKHNjYWxlWCwgc2NhbGVZKTtcblxuICAgICAgLy8gc2NhbGVYID0gMTtcbiAgICAgIC8vIHNjYWxlWSA9IDE7XG4gICAgICAvLyBpZiAobnVsbCAhPT0gdGhpcy5vcHRpb25zLm1pbldpZHRoICYmIHRoaXMub3B0aW9ucy5taW5XaWR0aCA+IGNhbnZhc1dpZHRoKSB7XG4gICAgICAvLyAgIHNjYWxlWCA9ICB0aGlzLm9wdGlvbnMubWluV2lkdGggLyBjYW52YXNXaWR0aDtcbiAgICAgIC8vIH1cbiAgICAgIC8vIGlmIChudWxsICE9PSB0aGlzLm9wdGlvbnMubWluSGVpZ2h0ICYmIHRoaXMub3B0aW9ucy5taW5IZWlnaHQgPiBjYW52YXNIZWlnaHQpIHtcbiAgICAgIC8vICAgc2NhbGVZID0gIHRoaXMub3B0aW9ucy5taW5IZWlnaHQgLyBjYW52YXNIZWlnaHQ7XG4gICAgICAvLyB9XG4gICAgICAvLyBzY2FsZU1heCA9IE1hdGgubWF4KHNjYWxlWCwgc2NhbGVZKTtcblxuICAgICAgLy8gdmFyIHNjYWxlID0gc2NhbGVNYXggKiBzY2FsZU1pbjsgLy8gb25lIHNob3VsZCBiZSBlcXVhbHMgdG8gMVxuXG4gICAgICAvLyBjYW52YXNXaWR0aCAqPSBzY2FsZTtcbiAgICAgIC8vIGNhbnZhc0hlaWdodCAqPSBzY2FsZTtcblxuICAgICAgLy8gRmluYWxseSBwbGFjZSB0aGUgaW1hZ2UgaW4gdGhlIGNlbnRlciBvZiB0aGUgY2FudmFzXG4gICAgICAvLyB0aGlzLmltYWdlLnNldFNjYWxlWCgxICogc2NhbGUpO1xuICAgICAgLy8gdGhpcy5pbWFnZS5zZXRTY2FsZVkoMSAqIHNjYWxlKTtcbiAgICAgIHRoaXMuY2FudmFzLmFkZCh0aGlzLmltYWdlKTtcbiAgICAgIHRoaXMuY2FudmFzLnNldFdpZHRoKGNhbnZhc1dpZHRoKTtcbiAgICAgIHRoaXMuY2FudmFzLnNldEhlaWdodChjYW52YXNIZWlnaHQpO1xuXG4gICAgICAvLyBSZXNpemUgdGhlIGltYWdlIHRvIGZpdCB0aGUgY2FudmFzXG4gICAgICBpZiAodGhpcy5pbWFnZS5vQ29vcmRzLmJyLnggPCB0aGlzLmNhbnZhcy53aWR0aCkge1xuICAgICAgICB0aGlzLmltYWdlLmxlZnQgPSB0aGlzLmltYWdlLmxlZnQgKyBNYXRoLmNlaWwodGhpcy5jYW52YXMud2lkdGggLSB0aGlzLmltYWdlLm9Db29yZHMuYnIueCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5pbWFnZS5vQ29vcmRzLmJyLnkgPCB0aGlzLmNhbnZhcy5oZWlnaHQpIHtcbiAgICAgICAgdGhpcy5pbWFnZS50b3AgPSB0aGlzLmltYWdlLnRvcCArIE1hdGguY2VpbCh0aGlzLmNhbnZhcy5oZWlnaHQgLSB0aGlzLmltYWdlLm9Db29yZHMuYnIueSk7XG4gICAgICB9XG4gICAgICAvLyB0aGlzLmNhbnZhcy5jZW50ZXJPYmplY3QodGhpcy5pbWFnZSk7XG4gICAgICB0aGlzLmltYWdlLnNldENvb3JkcygpO1xuICAgIH0sXG5cbiAgICAvLyBBcHBseSB0aGUgdHJhbnNmb3JtYXRpb24gb24gdGhlIGN1cnJlbnQgaW1hZ2UgYW5kIHNhdmUgaXQgaW4gdGhlXG4gICAgLy8gdHJhbnNmb3JtYXRpb25zIHN0YWNrIChpbiBvcmRlciB0byByZWNvbnN0aXR1dGUgdGhlIHByZXZpb3VzIHN0YXRlc1xuICAgIC8vIG9mIHRoZSBpbWFnZSkuXG4gICAgYXBwbHlUcmFuc2Zvcm1hdGlvbjogZnVuY3Rpb24gKHRyYW5zZm9ybWF0aW9uKSB7XG4gICAgICB0aGlzLnRyYW5zZm9ybWF0aW9ucy5wdXNoKHRyYW5zZm9ybWF0aW9uKTtcblxuICAgICAgdHJhbnNmb3JtYXRpb24uYXBwbHlUcmFuc2Zvcm1hdGlvbihcbiAgICAgICAgdGhpcy5zb3VyY2VDYW52YXMsXG4gICAgICAgIHRoaXMuc291cmNlSW1hZ2UsXG4gICAgICAgIHRoaXMuX3Bvc3RUcmFuc2Zvcm1hdGlvbi5iaW5kKHRoaXMpXG4gICAgICApO1xuICAgIH0sXG5cbiAgICBfcG9zdFRyYW5zZm9ybWF0aW9uOiBmdW5jdGlvbiAobmV3SW1hZ2UpIHtcbiAgICAgIGlmIChuZXdJbWFnZSlcbiAgICAgICAgdGhpcy5zb3VyY2VJbWFnZSA9IG5ld0ltYWdlO1xuXG4gICAgICB0aGlzLnJlZnJlc2goZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2NvcmU6dHJhbnNmb3JtYXRpb24nKTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfSxcblxuICAgIC8vIEluaXRpYWxpemUgaW1hZ2UgZnJvbSBvcmlnaW5hbCBlbGVtZW50IHBsdXMgcmUtYXBwbHkgZXZlcnlcbiAgICAvLyB0cmFuc2Zvcm1hdGlvbnMuXG4gICAgcmVpbml0aWFsaXplSW1hZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuc291cmNlSW1hZ2UucmVtb3ZlKCk7XG4gICAgICB0aGlzLl9pbml0aWFsaXplSW1hZ2UoKTtcbiAgICAgIHRoaXMuX3BvcFRyYW5zZm9ybWF0aW9uKHRoaXMudHJhbnNmb3JtYXRpb25zLnNsaWNlKCkpXG4gICAgfSxcblxuICAgIF9wb3BUcmFuc2Zvcm1hdGlvbjogZnVuY3Rpb24gKHRyYW5zZm9ybWF0aW9ucykge1xuICAgICAgaWYgKDAgPT09IHRyYW5zZm9ybWF0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdjb3JlOnJlaW5pdGlhbGl6ZWQnKTtcbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHRyYW5zZm9ybWF0aW9uID0gdHJhbnNmb3JtYXRpb25zLnNoaWZ0KCk7XG5cbiAgICAgIHZhciBuZXh0ID0gZnVuY3Rpb24gKG5ld0ltYWdlKSB7XG4gICAgICAgIGlmIChuZXdJbWFnZSkgdGhpcy5zb3VyY2VJbWFnZSA9IG5ld0ltYWdlO1xuICAgICAgICB0aGlzLl9wb3BUcmFuc2Zvcm1hdGlvbih0cmFuc2Zvcm1hdGlvbnMpXG4gICAgICB9O1xuXG4gICAgICB0cmFuc2Zvcm1hdGlvbi5hcHBseVRyYW5zZm9ybWF0aW9uKFxuICAgICAgICB0aGlzLnNvdXJjZUNhbnZhcyxcbiAgICAgICAgdGhpcy5zb3VyY2VJbWFnZSxcbiAgICAgICAgbmV4dC5iaW5kKHRoaXMpXG4gICAgICApO1xuICAgIH0sXG5cbiAgICAvLyBDcmVhdGUgdGhlIERPTSBlbGVtZW50cyBhbmQgaW5zdGFuY2lhdGUgdGhlIEZhYnJpYyBjYW52YXMuXG4gICAgLy8gVGhlIGltYWdlIGVsZW1lbnQgaXMgcmVwbGFjZWQgYnkgYSBuZXcgYGRpdmAgZWxlbWVudC5cbiAgICAvLyBIb3dldmVyIHRoZSBvcmlnaW5hbCBpbWFnZSBpcyByZS1pbmplY3RlZCBpbiBvcmRlciB0byBrZWVwIGEgdHJhY2Ugb2YgaXQuXG4gICAgX2luaXRpYWxpemVET006IGZ1bmN0aW9uIChpbWFnZUVsZW1lbnQpIHtcbiAgICAgIC8vIENvbnRhaW5lclxuICAgICAgdmFyIG1haW5Db250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBtYWluQ29udGFpbmVyRWxlbWVudC5jbGFzc05hbWUgPSAnZGFya3Jvb20tY29udGFpbmVyJztcblxuICAgICAgLy8gVG9vbGJhclxuICAgICAgdmFyIHRvb2xiYXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0b29sYmFyRWxlbWVudC5jbGFzc05hbWUgPSAnZGFya3Jvb20tdG9vbGJhcic7XG4gICAgICBtYWluQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZCh0b29sYmFyRWxlbWVudCk7XG5cbiAgICAgIC8vIFZpZXdwb3J0IGNhbnZhc1xuICAgICAgdmFyIGNhbnZhc0NvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNhbnZhc0NvbnRhaW5lckVsZW1lbnQuY2xhc3NOYW1lID0gJ2Rhcmtyb29tLWltYWdlLWNvbnRhaW5lcic7XG4gICAgICB2YXIgY2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgY2FudmFzQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChjYW52YXNFbGVtZW50KTtcbiAgICAgIG1haW5Db250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGNhbnZhc0NvbnRhaW5lckVsZW1lbnQpO1xuXG4gICAgICAvLyBTb3VyY2UgY2FudmFzXG4gICAgICB2YXIgc291cmNlQ2FudmFzQ29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgc291cmNlQ2FudmFzQ29udGFpbmVyRWxlbWVudC5jbGFzc05hbWUgPSAnZGFya3Jvb20tc291cmNlLWNvbnRhaW5lcic7XG4gICAgICBzb3VyY2VDYW52YXNDb250YWluZXJFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB2YXIgc291cmNlQ2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgc291cmNlQ2FudmFzQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChzb3VyY2VDYW52YXNFbGVtZW50KTtcbiAgICAgIG1haW5Db250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKHNvdXJjZUNhbnZhc0NvbnRhaW5lckVsZW1lbnQpO1xuXG4gICAgICAvLyBPcmlnaW5hbCBpbWFnZVxuICAgICAgaW1hZ2VFbGVtZW50LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG1haW5Db250YWluZXJFbGVtZW50LCBpbWFnZUVsZW1lbnQpO1xuICAgICAgaW1hZ2VFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBtYWluQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChpbWFnZUVsZW1lbnQpO1xuXG4gICAgICBTdGlja3lmaWxsLmFkZCh0b29sYmFyRWxlbWVudCk7XG4gICAgICBTdGlja3lmaWxsLnJlZnJlc2hBbGwoKTtcblxuICAgICAgLy8gSW5zdGFuY2lhdGUgb2JqZWN0IGZyb20gZWxlbWVudHNcbiAgICAgIHRoaXMuY29udGFpbmVyRWxlbWVudCA9IG1haW5Db250YWluZXJFbGVtZW50O1xuICAgICAgdGhpcy5vcmlnaW5hbEltYWdlRWxlbWVudCA9IGltYWdlRWxlbWVudDtcblxuICAgICAgdGhpcy50b29sYmFyID0gbmV3IERhcmtyb29tLlVJLlRvb2xiYXIodG9vbGJhckVsZW1lbnQpO1xuXG4gICAgICB0aGlzLmNhbnZhcyA9IG5ldyBmYWJyaWMuQ2FudmFzKGNhbnZhc0VsZW1lbnQsIHtcbiAgICAgICAgc2VsZWN0aW9uOiBmYWxzZSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLm9wdGlvbnMuYmFja2dyb3VuZENvbG9yXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5zb3VyY2VDYW52YXMgPSBuZXcgZmFicmljLkNhbnZhcyhzb3VyY2VDYW52YXNFbGVtZW50LCB7XG4gICAgICAgIHNlbGVjdGlvbjogZmFsc2UsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5vcHRpb25zLmJhY2tncm91bmRDb2xvclxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8vIEluc3RhbmNpYXRlIHRoZSBGYWJyaWMgaW1hZ2Ugb2JqZWN0LlxuICAgIC8vIFRoZSBpbWFnZSBpcyBjcmVhdGVkIGFzIGEgc3RhdGljIGVsZW1lbnQgd2l0aCBubyBjb250cm9sLFxuICAgIC8vIHRoZW4gaXQgaXMgYWRkIGluIHRoZSBGYWJyaWMgY2FudmFzIG9iamVjdC5cbiAgICBfaW5pdGlhbGl6ZUltYWdlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnNvdXJjZUltYWdlID0gbmV3IGZhYnJpYy5JbWFnZSh0aGlzLm9yaWdpbmFsSW1hZ2VFbGVtZW50LCB7XG4gICAgICAgIC8vIFNvbWUgb3B0aW9ucyB0byBtYWtlIHRoZSBpbWFnZSBzdGF0aWNcbiAgICAgICAgc2VsZWN0YWJsZTogZmFsc2UsXG4gICAgICAgIGV2ZW50ZWQ6IGZhbHNlLFxuICAgICAgICBsb2NrTW92ZW1lbnRYOiB0cnVlLFxuICAgICAgICBsb2NrTW92ZW1lbnRZOiB0cnVlLFxuICAgICAgICBsb2NrUm90YXRpb246IHRydWUsXG4gICAgICAgIGxvY2tTY2FsaW5nWDogdHJ1ZSxcbiAgICAgICAgbG9ja1NjYWxpbmdZOiB0cnVlLFxuICAgICAgICBsb2NrVW5pU2NhbGluZzogdHJ1ZSxcbiAgICAgICAgaGFzQ29udHJvbHM6IGZhbHNlLFxuICAgICAgICBoYXNCb3JkZXJzOiBmYWxzZSxcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnNvdXJjZUNhbnZhcy5hZGQodGhpcy5zb3VyY2VJbWFnZSk7XG5cbiAgICAgIC8vIEFkanVzdCB3aWR0aCBvciBoZWlnaHQgYWNjb3JkaW5nIHRvIHNwZWNpZmllZCByYXRpb1xuICAgICAgdmFyIHZpZXdwb3J0ID0gRGFya3Jvb20uVXRpbHMuY29tcHV0ZUltYWdlVmlld1BvcnQodGhpcy5zb3VyY2VJbWFnZSk7XG4gICAgICB2YXIgY2FudmFzV2lkdGggPSB2aWV3cG9ydC53aWR0aDtcbiAgICAgIHZhciBjYW52YXNIZWlnaHQgPSB2aWV3cG9ydC5oZWlnaHQ7XG5cbiAgICAgIHRoaXMuc291cmNlQ2FudmFzLnNldFdpZHRoKGNhbnZhc1dpZHRoKTtcbiAgICAgIHRoaXMuc291cmNlQ2FudmFzLnNldEhlaWdodChjYW52YXNIZWlnaHQpO1xuICAgICAgdGhpcy5zb3VyY2VDYW52YXMuY2VudGVyT2JqZWN0KHRoaXMuc291cmNlSW1hZ2UpO1xuICAgICAgdGhpcy5zb3VyY2VJbWFnZS5zZXRDb29yZHMoKTtcbiAgICB9LFxuXG4gICAgLy8gSW5pdGlhbGl6ZSBldmVyeSBwbHVnaW5zLlxuICAgIC8vIE5vdGUgdGhhdCBwbHVnaW5zIGFyZSBpbnN0YW5jaWF0ZWQgaW4gdGhlIHNhbWUgb3JkZXIgdGhhbiB0aGV5XG4gICAgLy8gYXJlIGRlY2xhcmVkIGluIHRoZSBwYXJhbWV0ZXIgb2JqZWN0LlxuICAgIF9pbml0aWFsaXplUGx1Z2luczogZnVuY3Rpb24gKHBsdWdpbnMpIHtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gcGx1Z2lucykge1xuICAgICAgICB2YXIgcGx1Z2luID0gcGx1Z2luc1tuYW1lXTtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMucGx1Z2luc1tuYW1lXTtcblxuICAgICAgICAvLyBTZXR0aW5nIGZhbHNlIGludG8gdGhlIHBsdWdpbiBvcHRpb25zIHdpbGwgZGlzYWJsZSB0aGUgcGx1Z2luXG4gICAgICAgIGlmIChvcHRpb25zID09PSBmYWxzZSlcbiAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAvLyBBdm9pZCBhbnkgaXNzdWVzIHdpdGggX3Byb3RvX1xuICAgICAgICBpZiAoIXBsdWdpbnMuaGFzT3duUHJvcGVydHkobmFtZSkpXG4gICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgdGhpcy5wbHVnaW5zW25hbWVdID0gbmV3IHBsdWdpbih0aGlzLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgY2xlYXJGb2N1czogZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5wbHVnaW5zKSB7XG4gICAgICAgIGlmIChrZXkgIT0gaW5zdGFuY2UpIHtcbiAgICAgICAgICB0aGlzLnBsdWdpbnNba2V5XS5jbGVhcigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn0pKCk7XG4iLCIoZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBEYXJrcm9vbS5QbHVnaW4gPSBQbHVnaW47XG5cbiAgLy8gRGVmaW5lIGEgcGx1Z2luIG9iamVjdC4gVGhpcyBpcyB0aGUgKGFic3RyYWN0KSBwYXJlbnQgY2xhc3Mgd2hpY2hcbiAgLy8gaGFzIHRvIGJlIGV4dGVuZGVkIGZvciBlYWNoIHBsdWdpbi5cbiAgZnVuY3Rpb24gUGx1Z2luKGRhcmtyb29tLCBvcHRpb25zKSB7XG4gICAgdGhpcy5kYXJrcm9vbSA9IGRhcmtyb29tO1xuICAgIHRoaXMub3B0aW9ucyA9IERhcmtyb29tLlV0aWxzLmV4dGVuZChvcHRpb25zLCB0aGlzLmRlZmF1bHRzKTtcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgfVxuXG4gIFBsdWdpbi5wcm90b3R5cGUgPSB7XG4gICAgZGVmYXVsdHM6IHt9LFxuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uKCkgeyB9LFxuICAgIGNsZWFyOiBmdW5jdGlvbigpIHsgfVxuICB9XG5cbiAgLy8gSW5zcGlyZWQgYnkgQmFja2JvbmUuanMgZXh0ZW5kIGNhcGFiaWxpdHkuXG4gIFBsdWdpbi5leHRlbmQgPSBmdW5jdGlvbihwcm90b1Byb3BzKSB7XG4gICAgdmFyIHBhcmVudCA9IHRoaXM7XG4gICAgdmFyIGNoaWxkO1xuXG4gICAgaWYgKHByb3RvUHJvcHMgJiYgcHJvdG9Qcm9wcy5oYXNPd25Qcm9wZXJ0eSgnY29uc3RydWN0b3InKSkge1xuICAgICAgY2hpbGQgPSBwcm90b1Byb3BzLmNvbnN0cnVjdG9yO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGlsZCA9IGZ1bmN0aW9uKCl7IHJldHVybiBwYXJlbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfTtcbiAgICB9XG5cbiAgICBEYXJrcm9vbS5VdGlscy5leHRlbmQoY2hpbGQsIHBhcmVudCk7XG5cbiAgICB2YXIgU3Vycm9nYXRlID0gZnVuY3Rpb24oKXsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9O1xuICAgIFN1cnJvZ2F0ZS5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlO1xuICAgIGNoaWxkLnByb3RvdHlwZSA9IG5ldyBTdXJyb2dhdGU7XG5cbiAgICBpZiAocHJvdG9Qcm9wcykgRGFya3Jvb20uVXRpbHMuZXh0ZW5kKGNoaWxkLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG5cbiAgICBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlO1xuXG4gICAgcmV0dXJuIGNoaWxkO1xuICB9XG5cbiAgfSkoKTtcbiIsIihmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIERhcmtyb29tLlRyYW5zZm9ybWF0aW9uID0gVHJhbnNmb3JtYXRpb247XG5cbiAgZnVuY3Rpb24gVHJhbnNmb3JtYXRpb24ob3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICBUcmFuc2Zvcm1hdGlvbi5wcm90b3R5cGUgPSB7XG4gICAgYXBwbHlUcmFuc2Zvcm1hdGlvbjogZnVuY3Rpb24oaW1hZ2UpIHsgLyogbm8tb3AgKi8gIH1cbiAgfVxuXG4gIC8vIEluc3BpcmVkIGJ5IEJhY2tib25lLmpzIGV4dGVuZCBjYXBhYmlsaXR5LlxuICBUcmFuc2Zvcm1hdGlvbi5leHRlbmQgPSBmdW5jdGlvbihwcm90b1Byb3BzKSB7XG4gICAgdmFyIHBhcmVudCA9IHRoaXM7XG4gICAgdmFyIGNoaWxkO1xuXG4gICAgaWYgKHByb3RvUHJvcHMgJiYgcHJvdG9Qcm9wcy5oYXNPd25Qcm9wZXJ0eSgnY29uc3RydWN0b3InKSkge1xuICAgICAgY2hpbGQgPSBwcm90b1Byb3BzLmNvbnN0cnVjdG9yO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGlsZCA9IGZ1bmN0aW9uKCl7IHJldHVybiBwYXJlbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfTtcbiAgICB9XG5cbiAgICBEYXJrcm9vbS5VdGlscy5leHRlbmQoY2hpbGQsIHBhcmVudCk7XG5cbiAgICB2YXIgU3Vycm9nYXRlID0gZnVuY3Rpb24oKXsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9O1xuICAgIFN1cnJvZ2F0ZS5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlO1xuICAgIGNoaWxkLnByb3RvdHlwZSA9IG5ldyBTdXJyb2dhdGU7XG5cbiAgICBpZiAocHJvdG9Qcm9wcykgRGFya3Jvb20uVXRpbHMuZXh0ZW5kKGNoaWxkLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG5cbiAgICBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlO1xuXG4gICAgcmV0dXJuIGNoaWxkO1xuICB9XG5cbiAgfSkoKTtcbiIsIihmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIERhcmtyb29tLlVJID0ge1xuICAgIFRvb2xiYXI6IFRvb2xiYXIsXG4gICAgQnV0dG9uR3JvdXA6IEJ1dHRvbkdyb3VwLFxuICAgIEJ1dHRvbjogQnV0dG9uLFxuICB9O1xuXG4gIC8vIFRvb2xiYXIgb2JqZWN0LlxuICBmdW5jdGlvbiBUb29sYmFyKGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG5cbiAgVG9vbGJhci5wcm90b3R5cGUgPSB7XG4gICAgY3JlYXRlQnV0dG9uR3JvdXA6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgIHZhciBidXR0b25Hcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgYnV0dG9uR3JvdXAuY2xhc3NOYW1lID0gJ2Rhcmtyb29tLWJ1dHRvbi1ncm91cCc7XG4gICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uR3JvdXApO1xuXG4gICAgICByZXR1cm4gbmV3IEJ1dHRvbkdyb3VwKGJ1dHRvbkdyb3VwKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gQnV0dG9uR3JvdXAgb2JqZWN0LlxuICBmdW5jdGlvbiBCdXR0b25Hcm91cChlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIEJ1dHRvbkdyb3VwLnByb3RvdHlwZSA9IHtcbiAgICBjcmVhdGVCdXR0b246IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgaW1hZ2U6ICdoZWxwJyxcbiAgICAgICAgdHlwZTogJ2RlZmF1bHQnLFxuICAgICAgICBncm91cDogJ2RlZmF1bHQnLFxuICAgICAgICBoaWRlOiBmYWxzZSxcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlXG4gICAgICB9O1xuXG4gICAgICBvcHRpb25zID0gRGFya3Jvb20uVXRpbHMuZXh0ZW5kKG9wdGlvbnMsIGRlZmF1bHRzKTtcblxuICAgICAgdmFyIGJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGJ1dHRvbkVsZW1lbnQudHlwZSA9ICdidXR0b24nO1xuICAgICAgYnV0dG9uRWxlbWVudC5jbGFzc05hbWUgPSAnZGFya3Jvb20tYnV0dG9uIGRhcmtyb29tLWJ1dHRvbi0nICsgb3B0aW9ucy50eXBlO1xuICAgICAgYnV0dG9uRWxlbWVudC5pbm5lckhUTUwgPSAnPHN2ZyBjbGFzcz1cImRhcmtyb29tLWljb25cIj48dXNlIHhsaW5rOmhyZWY9XCIjJyArIG9wdGlvbnMuaW1hZ2UgKyAnXCIgLz48L3N2Zz4nO1xuICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbkVsZW1lbnQpO1xuXG4gICAgICB2YXIgYnV0dG9uID0gbmV3IEJ1dHRvbihidXR0b25FbGVtZW50KTtcbiAgICAgIGJ1dHRvbi5oaWRlKG9wdGlvbnMuaGlkZSk7XG4gICAgICBidXR0b24uZGlzYWJsZShvcHRpb25zLmRpc2FibGVkKTtcblxuICAgICAgcmV0dXJuIGJ1dHRvbjtcbiAgICB9LFxuXG4gICAgY3JlYXRlSW5wdXQ6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgICBpbWFnZTogXCJoZWxwXCIsXG4gICAgICAgIHR5cGU6IFwiaW5wdXRcIixcbiAgICAgICAgZ3JvdXA6IFwiZGVmYXVsdFwiLFxuICAgICAgICBoaWRlOiBmYWxzZSxcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICB2YWx1ZTogXCJcIlxuICAgICAgfTtcblxuICAgICAgb3B0aW9ucyA9IERhcmtyb29tLlV0aWxzLmV4dGVuZChvcHRpb25zLCBkZWZhdWx0cyk7XG5cbiAgICAgIGNvbnN0IGRhdGFsaXN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkYXRhbGlzdFwiKTtcbiAgICAgIGRhdGFsaXN0RWxlbWVudC5pZCA9IFwicmFpbmJvd1wiO1xuICAgICAgY29uc3QgZGF0YWxpc3RFbGVtZW50T3B0aW9ucmVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvbnNcIik7XG4gICAgICBkYXRhbGlzdEVsZW1lbnRPcHRpb25yZWQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCIjRkYwMDAwXCIpO1xuICAgICAgZGF0YWxpc3RFbGVtZW50T3B0aW9ucmVkLmlubmVySFRNTCA9IFwicmVkXCI7XG4gICAgICBkYXRhbGlzdEVsZW1lbnQuYXBwZW5kQ2hpbGQoZGF0YWxpc3RFbGVtZW50T3B0aW9ucmVkKTtcbiAgICAgIGNvbnN0IGRhdGFsaXN0RWxlbWVudE9wdGlvbk9yYW5nZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25zXCIpO1xuICAgICAgZGF0YWxpc3RFbGVtZW50T3B0aW9uT3JhbmdlLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiI0ZGQTUwMFwiKTtcbiAgICAgIGRhdGFsaXN0RWxlbWVudE9wdGlvbk9yYW5nZS5pbm5lckhUTUwgPSBcIk9yYW5nZVwiO1xuICAgICAgZGF0YWxpc3RFbGVtZW50LmFwcGVuZENoaWxkKGRhdGFsaXN0RWxlbWVudE9wdGlvbk9yYW5nZSk7XG4gICAgICBjb25zdCBkYXRhbGlzdEVsZW1lbnRPcHRpb25ZZWxsb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uc1wiKTtcbiAgICAgIGRhdGFsaXN0RWxlbWVudE9wdGlvblllbGxvdy5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIiNGRkZGMDBcIik7XG4gICAgICBkYXRhbGlzdEVsZW1lbnRPcHRpb25ZZWxsb3cuaW5uZXJIVE1MID0gXCJZZWxsb3dcIjtcbiAgICAgIGRhdGFsaXN0RWxlbWVudC5hcHBlbmRDaGlsZChkYXRhbGlzdEVsZW1lbnRPcHRpb25ZZWxsb3cpO1xuICAgICAgY29uc3QgZGF0YWxpc3RFbGVtZW50T3B0aW9uR3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uc1wiKTtcbiAgICAgIGRhdGFsaXN0RWxlbWVudE9wdGlvbkdyZWVuLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiIzAwODAwMFwiKTtcbiAgICAgIGRhdGFsaXN0RWxlbWVudE9wdGlvbkdyZWVuLmlubmVySFRNTCA9IFwiR3JlZW5cIjtcbiAgICAgIGRhdGFsaXN0RWxlbWVudC5hcHBlbmRDaGlsZChkYXRhbGlzdEVsZW1lbnRPcHRpb25HcmVlbik7XG4gICAgICBjb25zdCBkYXRhbGlzdEVsZW1lbnRPcHRpb25CbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvbnNcIik7XG4gICAgICBkYXRhbGlzdEVsZW1lbnRPcHRpb25CbHVlLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiIzAwMDBGRlwiKTtcbiAgICAgIGRhdGFsaXN0RWxlbWVudE9wdGlvbkJsdWUuaW5uZXJIVE1MID0gXCJCbHVlXCI7XG4gICAgICBkYXRhbGlzdEVsZW1lbnQuYXBwZW5kQ2hpbGQoZGF0YWxpc3RFbGVtZW50T3B0aW9uQmx1ZSk7XG4gICAgICAvLyB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoZGF0YWxpc3RFbGVtZW50KTtcblxuICAgICAgY29uc3QgaW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgaW5wdXRFbGVtZW50LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjb2xvclwiKTtcbiAgICAgIGlucHV0RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJsaXN0XCIsIFwicmFpbmJvd1wiKTtcbiAgICAgIGlucHV0RWxlbWVudC52YWx1ZSA9IFwiI2ZmMDAwMFwiO1xuICAgICAgaW5wdXRFbGVtZW50LmNsYXNzTmFtZSA9IFwiZGFya3Jvb20tYnV0dG9uIGRhcmtyb29tLWlucHV0LVwiICsgb3B0aW9ucy50eXBlO1xuICAgICAgaW5wdXRFbGVtZW50LmlubmVySFRNTCA9ICc8c3ZnIGNsYXNzPVwiZGFya3Jvb20taWNvblwiPjx1c2UgeGxpbms6aHJlZj1cIiMnICsgb3B0aW9ucy5pbWFnZSArICdcIiAvPjwvc3ZnPic7XG4gICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoaW5wdXRFbGVtZW50KTtcblxuICAgICAgY29uc3QgaW5wdXQgPSBuZXcgSW5wdXQoaW5wdXRFbGVtZW50KTtcbiAgICAgIGlucHV0LmhpZGUob3B0aW9ucy5oaWRlKTtcbiAgICAgIGlucHV0LmRpc2FibGUob3B0aW9ucy5kaXNhYmxlZCk7XG5cbiAgICAgIHJldHVybiBpbnB1dDtcbiAgICB9XG4gIH07XG5cbiAgLy8gQnV0dG9uIG9iamVjdC5cbiAgZnVuY3Rpb24gQnV0dG9uKGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG5cbiAgLy8gSW5wdXQgb2JqZWN0LlxuICBmdW5jdGlvbiBJbnB1dChlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIEJ1dHRvbi5wcm90b3R5cGUgPSB7XG4gICAgYWRkRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24oZXZlbnROYW1lLCBsaXN0ZW5lcikge1xuICAgICAgaWYgKHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKXtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lcik7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudC5hdHRhY2hFdmVudCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50TmFtZSwgbGlzdGVuZXIpO1xuICAgICAgfVxuICAgIH0sXG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24oZXZlbnROYW1lLCBsaXN0ZW5lcikge1xuICAgICAgaWYgKHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKXtcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lcik7XG4gICAgICB9XG4gICAgfSxcbiAgICBhY3RpdmU6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAodmFsdWUpXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkYXJrcm9vbS1idXR0b24tYWN0aXZlJyk7XG4gICAgICBlbHNlXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrcm9vbS1idXR0b24tYWN0aXZlJyk7XG4gICAgfSxcbiAgICBoaWRlOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgaWYgKHZhbHVlKVxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZGFya3Jvb20tYnV0dG9uLWhpZGRlbicpO1xuICAgICAgZWxzZVxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZGFya3Jvb20tYnV0dG9uLWhpZGRlbicpO1xuICAgIH0sXG4gICAgZGlzYWJsZTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5kaXNhYmxlZCA9ICh2YWx1ZSkgPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIElucHV0LnByb3RvdHlwZSA9IHtcbiAgICBhZGRFdmVudExpc3RlbmVyOiBmdW5jdGlvbihldmVudE5hbWUsIGxpc3RlbmVyKSB7XG4gICAgICBpZiAodGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lcik7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudC5hdHRhY2hFdmVudCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuYXR0YWNoRXZlbnQoXCJvblwiICsgZXZlbnROYW1lLCBsaXN0ZW5lcik7XG4gICAgICB9XG4gICAgfSxcbiAgICByZW1vdmVFdmVudExpc3RlbmVyOiBmdW5jdGlvbihldmVudE5hbWUsIGxpc3RlbmVyKSB7XG4gICAgICBpZiAodGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lcik7XG4gICAgICB9XG4gICAgfSxcbiAgICBhY3RpdmU6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAodmFsdWUpIHsgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkYXJrcm9vbS1pbnB1dC1hY3RpdmVcIik7IH0gZWxzZSB7IHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZGFya3Jvb20taW5wdXQtYWN0aXZlXCIpOyB9XG4gICAgfSxcbiAgICBoaWRlOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgaWYgKHZhbHVlKSB7IHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZGFya3Jvb20tYnV0dG9uLWhpZGRlblwiKTsgfSBlbHNlIHsgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkYXJrcm9vbS1idXR0b24taGlkZGVuXCIpOyB9XG4gICAgfSxcbiAgICBkaXNhYmxlOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgdGhpcy5lbGVtZW50LmRpc2FibGVkID0gISF2YWx1ZTtcbiAgICB9XG4gIH07XG59KCkpO1xuIiwiKGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgRGFya3Jvb20uVXRpbHMgPSB7XG4gICAgZXh0ZW5kOiBleHRlbmQsXG4gICAgY29tcHV0ZUltYWdlVmlld1BvcnQ6IGNvbXB1dGVJbWFnZVZpZXdQb3J0LFxuICB9O1xuXG5cbiAgLy8gVXRpbGl0eSBtZXRob2QgdG8gZWFzaWx5IGV4dGVuZCBvYmplY3RzLlxuICBmdW5jdGlvbiBleHRlbmQoYiwgYSkge1xuICAgIHZhciBwcm9wO1xuICAgIGlmIChiID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBhO1xuICAgIH1cbiAgICBmb3IgKHByb3AgaW4gYSkge1xuICAgICAgaWYgKGEuaGFzT3duUHJvcGVydHkocHJvcCkgJiYgYi5oYXNPd25Qcm9wZXJ0eShwcm9wKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgYltwcm9wXSA9IGFbcHJvcF07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBiO1xuICB9XG5cbiAgZnVuY3Rpb24gY29tcHV0ZUltYWdlVmlld1BvcnQoaW1hZ2UpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGVpZ2h0OiBNYXRoLmFicyhpbWFnZS5nZXRXaWR0aCgpICogKE1hdGguc2luKGltYWdlLmdldEFuZ2xlKCkgKiBNYXRoLlBJLzE4MCkpKSArIE1hdGguYWJzKGltYWdlLmdldEhlaWdodCgpICogKE1hdGguY29zKGltYWdlLmdldEFuZ2xlKCkgKiBNYXRoLlBJLzE4MCkpKSxcbiAgICAgIHdpZHRoOiBNYXRoLmFicyhpbWFnZS5nZXRIZWlnaHQoKSAqIChNYXRoLnNpbihpbWFnZS5nZXRBbmdsZSgpICogTWF0aC5QSS8xODApKSkgKyBNYXRoLmFicyhpbWFnZS5nZXRXaWR0aCgpICogKE1hdGguY29zKGltYWdlLmdldEFuZ2xlKCkgKiBNYXRoLlBJLzE4MCkpKSxcbiAgICB9XG4gIH1cblxuICB9KSgpO1xuIiwiOyhmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCBEYXJrcm9vbSwgZmFicmljKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBEYXJrcm9vbS5wbHVnaW5zWydoaXN0b3J5J10gPSBEYXJrcm9vbS5QbHVnaW4uZXh0ZW5kKHtcbiAgICB1bmRvVHJhbnNmb3JtYXRpb25zOiBbXSxcblxuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uIEluaXREYXJrcm9vbUhpc3RvcnlQbHVnaW4oKSB7XG4gICAgICB0aGlzLl9pbml0QnV0dG9ucygpO1xuXG4gICAgICB0aGlzLmRhcmtyb29tLmFkZEV2ZW50TGlzdGVuZXIoJ2NvcmU6dHJhbnNmb3JtYXRpb24nLCB0aGlzLl9vblRyYW5mb3JtYXRpb25BcHBsaWVkLmJpbmQodGhpcykpO1xuICAgIH0sXG5cbiAgICB1bmRvOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLmRhcmtyb29tLnRyYW5zZm9ybWF0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgbGFzdFRyYW5zZm9ybWF0aW9uID0gdGhpcy5kYXJrcm9vbS50cmFuc2Zvcm1hdGlvbnMucG9wKCk7XG4gICAgICB0aGlzLnVuZG9UcmFuc2Zvcm1hdGlvbnMudW5zaGlmdChsYXN0VHJhbnNmb3JtYXRpb24pO1xuXG4gICAgICB0aGlzLmRhcmtyb29tLnJlaW5pdGlhbGl6ZUltYWdlKCk7XG4gICAgICB0aGlzLl91cGRhdGVCdXR0b25zKCk7XG4gICAgfSxcblxuICAgIHJlZG86IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMudW5kb1RyYW5zZm9ybWF0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgY2FuY2VsVHJhbnNmb3JtYXRpb24gPSB0aGlzLnVuZG9UcmFuc2Zvcm1hdGlvbnMuc2hpZnQoKTtcbiAgICAgIHRoaXMuZGFya3Jvb20udHJhbnNmb3JtYXRpb25zLnB1c2goY2FuY2VsVHJhbnNmb3JtYXRpb24pO1xuXG4gICAgICB0aGlzLmRhcmtyb29tLnJlaW5pdGlhbGl6ZUltYWdlKCk7XG4gICAgICB0aGlzLl91cGRhdGVCdXR0b25zKCk7XG4gICAgfSxcblxuICAgIF9pbml0QnV0dG9uczogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgYnV0dG9uR3JvdXAgPSB0aGlzLmRhcmtyb29tLnRvb2xiYXIuY3JlYXRlQnV0dG9uR3JvdXAoKTtcblxuICAgICAgdGhpcy5iYWNrQnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcbiAgICAgICAgaW1hZ2U6ICd1bmRvJyxcbiAgICAgICAgZGlzYWJsZWQ6IHRydWVcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmZvcndhcmRCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xuICAgICAgICBpbWFnZTogJ3JlZG8nLFxuICAgICAgICBkaXNhYmxlZDogdHJ1ZVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuYmFja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudW5kby5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMuZm9yd2FyZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucmVkby5iaW5kKHRoaXMpKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIF91cGRhdGVCdXR0b25zOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuYmFja0J1dHRvbi5kaXNhYmxlKCh0aGlzLmRhcmtyb29tLnRyYW5zZm9ybWF0aW9ucy5sZW5ndGggPT09IDApKVxuICAgICAgdGhpcy5mb3J3YXJkQnV0dG9uLmRpc2FibGUoKHRoaXMudW5kb1RyYW5zZm9ybWF0aW9ucy5sZW5ndGggPT09IDApKVxuICAgIH0sXG5cbiAgICBfb25UcmFuZm9ybWF0aW9uQXBwbGllZDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnVuZG9UcmFuc2Zvcm1hdGlvbnMgPSBbXTtcbiAgICAgIHRoaXMuX3VwZGF0ZUJ1dHRvbnMoKTtcbiAgICB9XG4gIH0pO1xufSkod2luZG93LCBkb2N1bWVudCwgRGFya3Jvb20sIGZhYnJpYyk7XG4iLCIoZnVuY3Rpb24gKCkge1xuICBmYWJyaWMuSW1hZ2UucHJvdG90eXBlLnN0cm9rZVdpZHRoID0gMDtcbiAgY29uc3QgUm90YXRpb24gPSBEYXJrcm9vbS5UcmFuc2Zvcm1hdGlvbi5leHRlbmQoe1xuICAgIGFwcGx5VHJhbnNmb3JtYXRpb246IGZ1bmN0aW9uKGNhbnZhcywgaW1hZ2UsIG5leHQpIHtcbiAgICAgIGNvbnN0IGFuZ2xlID0gKGltYWdlLmdldEFuZ2xlKCkgKyB0aGlzLm9wdGlvbnMuYW5nbGUpICUgMzYwO1xuICAgICAgaW1hZ2Uucm90YXRlKGFuZ2xlKTtcblxuICAgICAgY29uc3QgaGVpZ2h0ID0gTWF0aC5hYnMoaW1hZ2UuZ2V0V2lkdGgoKSAqIChNYXRoLnNpbihhbmdsZSAqIE1hdGguUEkgLyAxODApKSkgKyBNYXRoLmFicyhpbWFnZS5nZXRIZWlnaHQoKSAqIChNYXRoLmNvcyhhbmdsZSAqIE1hdGguUEkgLyAxODApKSk7XG4gICAgICBjb25zdCB3aWR0aCA9IE1hdGguYWJzKGltYWdlLmdldEhlaWdodCgpICogKE1hdGguc2luKGFuZ2xlICogTWF0aC5QSSAvIDE4MCkpKSArIE1hdGguYWJzKGltYWdlLmdldFdpZHRoKCkgKiAoTWF0aC5jb3MoYW5nbGUgKiBNYXRoLlBJIC8gMTgwKSkpO1xuXG4gICAgICBjYW52YXMuc2V0V2lkdGgod2lkdGgpO1xuICAgICAgY2FudmFzLnNldEhlaWdodChoZWlnaHQpO1xuXG4gICAgICBjYW52YXMuY2VudGVyT2JqZWN0KGltYWdlKTtcbiAgICAgIGltYWdlLnNldENvb3JkcygpO1xuICAgICAgY2FudmFzLnJlbmRlckFsbCgpO1xuXG4gICAgICBuZXh0KCk7XG4gICAgfVxuICB9KTtcblxuICBEYXJrcm9vbS5wbHVnaW5zLnJvdGF0ZSA9IERhcmtyb29tLlBsdWdpbi5leHRlbmQoe1xuXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCBidXR0b25Hcm91cCA9IHRoaXMuZGFya3Jvb20udG9vbGJhci5jcmVhdGVCdXR0b25Hcm91cCgpO1xuXG4gICAgICBjb25zdCBsZWZ0QnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcbiAgICAgICAgaW1hZ2U6IFwicm90YXRlLWxlZnRcIlxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHJpZ2h0QnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcbiAgICAgICAgaW1hZ2U6IFwicm90YXRlLXJpZ2h0XCJcbiAgICAgIH0pO1xuXG4gICAgICBsZWZ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnJvdGF0ZUxlZnQuYmluZCh0aGlzKSk7XG4gICAgICByaWdodEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5yb3RhdGVSaWdodC5iaW5kKHRoaXMpKTtcbiAgICB9LFxuXG4gICAgcm90YXRlTGVmdDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnJvdGF0ZSgtOTApO1xuICAgIH0sXG5cbiAgICByb3RhdGVSaWdodDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnJvdGF0ZSg5MCk7XG4gICAgfSxcblxuICAgIHJvdGF0ZTogZnVuY3Rpb24oYW5nbGUpIHtcbiAgICAgIHRoaXMuZGFya3Jvb20ub3B0aW9ucy5sZWZ0ID0gMDtcbiAgICAgIHRoaXMuZGFya3Jvb20ub3B0aW9ucy50b3AgPSAwO1xuICAgICAgdGhpcy5kYXJrcm9vbS5hcHBseVRyYW5zZm9ybWF0aW9uKG5ldyBSb3RhdGlvbih7XG4gICAgICAgIGFuZ2xlOiBhbmdsZVxuICAgICAgfSkpO1xuICAgIH1cblxuICB9KTtcbn0oKSk7XG4iLCIoZnVuY3Rpb24gKCkge1xuICBmYWJyaWMuSW1hZ2UucHJvdG90eXBlLnN0cm9rZVdpZHRoID0gMDtcbiAgY29uc3QgQ3JvcCA9IERhcmtyb29tLlRyYW5zZm9ybWF0aW9uLmV4dGVuZCh7XG4gICAgYXBwbHlUcmFuc2Zvcm1hdGlvbjogZnVuY3Rpb24oY2FudmFzLCBpbWFnZSwgbmV4dCkge1xuICAgICAgLy8gU25hcHNob3QgdGhlIGltYWdlIGRlbGltaXRlZCBieSB0aGUgY3JvcCB6b25lXG4gICAgICBjb25zdCBzbmFwc2hvdCA9IG5ldyBJbWFnZSgpO1xuICAgICAgc25hcHNob3Qub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBWYWxpZGF0ZSBpbWFnZVxuICAgICAgICBpZiAodGhpcy5oZWlnaHQgPCAxIHx8IHRoaXMud2lkdGggPCAxKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaW1nSW5zdGFuY2UgPSBuZXcgZmFicmljLkltYWdlKHRoaXMsIHtcbiAgICAgICAgICAvLyBvcHRpb25zIHRvIG1ha2UgdGhlIGltYWdlIHN0YXRpY1xuICAgICAgICAgIHNlbGVjdGFibGU6IGZhbHNlLFxuICAgICAgICAgIGV2ZW50ZWQ6IGZhbHNlLFxuICAgICAgICAgIGxvY2tNb3ZlbWVudFg6IHRydWUsXG4gICAgICAgICAgbG9ja01vdmVtZW50WTogdHJ1ZSxcbiAgICAgICAgICBsb2NrUm90YXRpb246IHRydWUsXG4gICAgICAgICAgbG9ja1NjYWxpbmdYOiB0cnVlLFxuICAgICAgICAgIGxvY2tTY2FsaW5nWTogdHJ1ZSxcbiAgICAgICAgICBsb2NrVW5pU2NhbGluZzogdHJ1ZSxcbiAgICAgICAgICBoYXNDb250cm9sczogZmFsc2UsXG4gICAgICAgICAgaGFzQm9yZGVyczogZmFsc2VcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLndpZHRoO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmhlaWdodDtcblxuICAgICAgICAvLyBVcGRhdGUgY2FudmFzIHNpemVcbiAgICAgICAgY2FudmFzLnNldFdpZHRoKHdpZHRoKTtcbiAgICAgICAgY2FudmFzLnNldEhlaWdodChoZWlnaHQpO1xuXG4gICAgICAgIC8vIEFkZCBpbWFnZVxuICAgICAgICBpbWFnZS5yZW1vdmUoKTtcbiAgICAgICAgY2FudmFzLmFkZChpbWdJbnN0YW5jZSk7XG5cbiAgICAgICAgbmV4dChpbWdJbnN0YW5jZSk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCB2aWV3cG9ydCA9IERhcmtyb29tLlV0aWxzLmNvbXB1dGVJbWFnZVZpZXdQb3J0KGltYWdlKTtcbiAgICAgIGNvbnN0IGltYWdlV2lkdGggPSB2aWV3cG9ydC53aWR0aDtcbiAgICAgIGNvbnN0IGltYWdlSGVpZ2h0ID0gdmlld3BvcnQuaGVpZ2h0O1xuXG4gICAgICBjb25zdCBsZWZ0ID0gdGhpcy5vcHRpb25zLmxlZnQgKiBpbWFnZVdpZHRoO1xuICAgICAgY29uc3QgdG9wID0gdGhpcy5vcHRpb25zLnRvcCAqIGltYWdlSGVpZ2h0O1xuICAgICAgY29uc3Qgd2lkdGggPSBNYXRoLm1pbih0aGlzLm9wdGlvbnMud2lkdGggKiBpbWFnZVdpZHRoLCBpbWFnZVdpZHRoIC0gbGVmdCk7XG4gICAgICBjb25zdCBoZWlnaHQgPSBNYXRoLm1pbih0aGlzLm9wdGlvbnMuaGVpZ2h0ICogaW1hZ2VIZWlnaHQsIGltYWdlSGVpZ2h0IC0gdG9wKTtcblxuICAgICAgc25hcHNob3Quc3JjID0gY2FudmFzLnRvRGF0YVVSTCh7XG4gICAgICAgIGxlZnQ6IGxlZnQsXG4gICAgICAgIHRvcDogdG9wLFxuICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IENyb3Bab25lID0gZmFicmljLnV0aWwuY3JlYXRlQ2xhc3MoZmFicmljLlJlY3QsIHtcbiAgICBfcmVuZGVyOiBmdW5jdGlvbihjdHgpIHtcbiAgICAgIHRoaXMuY2FsbFN1cGVyKFwiX3JlbmRlclwiLCBjdHgpO1xuXG4gICAgICBjb25zdCBkYXNoV2lkdGggPSA3O1xuXG4gICAgICAvLyBTZXQgb3JpZ2luYWwgc2NhbGVcbiAgICAgIGNvbnN0IGZsaXBYID0gdGhpcy5mbGlwWCA/IC0xIDogMTtcbiAgICAgIGNvbnN0IGZsaXBZID0gdGhpcy5mbGlwWSA/IC0xIDogMTtcbiAgICAgIGNvbnN0IHNjYWxlWCA9IGZsaXBYIC8gdGhpcy5zY2FsZVg7XG4gICAgICBjb25zdCBzY2FsZVkgPSBmbGlwWSAvIHRoaXMuc2NhbGVZO1xuXG4gICAgICBjdHguc2NhbGUoc2NhbGVYLCBzY2FsZVkpO1xuXG4gICAgICAvLyBPdmVybGF5IHJlbmRlcmluZ1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLCAwLCAwLCAwLjUpXCI7XG4gICAgICB0aGlzLl9yZW5kZXJPdmVybGF5KGN0eCk7XG5cbiAgICAgIC8vIFNldCBkYXNoZWQgYm9yZGVyc1xuICAgICAgaWYgKGN0eC5zZXRMaW5lRGFzaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGN0eC5zZXRMaW5lRGFzaChbZGFzaFdpZHRoLCBkYXNoV2lkdGhdKTtcbiAgICAgIH0gZWxzZSBpZiAoY3R4Lm1vekRhc2ggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjdHgubW96RGFzaCA9IFtkYXNoV2lkdGgsIGRhc2hXaWR0aF07XG4gICAgICB9XG5cbiAgICAgIC8vIEZpcnN0IGxpbmVzIHJlbmRlcmluZyB3aXRoIGJsYWNrXG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcInJnYmEoMCwgMCwgMCwgMC4yKVwiO1xuICAgICAgdGhpcy5fcmVuZGVyQm9yZGVycyhjdHgpO1xuICAgICAgdGhpcy5fcmVuZGVyR3JpZChjdHgpO1xuXG4gICAgICAvLyBSZSByZW5kZXIgbGluZXMgaW4gd2hpdGVcbiAgICAgIGN0eC5saW5lRGFzaE9mZnNldCA9IGRhc2hXaWR0aDtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpXCI7XG4gICAgICB0aGlzLl9yZW5kZXJCb3JkZXJzKGN0eCk7XG4gICAgICB0aGlzLl9yZW5kZXJHcmlkKGN0eCk7XG5cbiAgICAgIC8vIFJlc2V0IHNjYWxlXG4gICAgICBjdHguc2NhbGUoMSAvIHNjYWxlWCwgMSAvIHNjYWxlWSk7XG4gICAgfSxcblxuICAgIF9yZW5kZXJPdmVybGF5OiBmdW5jdGlvbihjdHgpIHtcbiAgICAgIGNvbnN0IGNhbnZhcyA9IGN0eC5jYW52YXM7XG5cbiAgICAgIC8vXG4gICAgICAvLyAgICB4MCAgICB4MSAgICAgICAgeDIgICAgICB4M1xuICAgICAgLy8geTAgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLStcbiAgICAgIC8vICAgIHxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFx8XG4gICAgICAvLyAgICB8XFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcfFxuICAgICAgLy8geTEgKy0tLS0tLSstLS0tLS0tLS0rLS0tLS0tLStcbiAgICAgIC8vICAgIHxcXFxcXFxcXFxcXFx8ICAgICAgICAgfFxcXFxcXFxcXFxcXFxcfFxuICAgICAgLy8gICAgfFxcXFxcXFxcXFxcXHwgICAgMCAgICB8XFxcXFxcXFxcXFxcXFx8XG4gICAgICAvLyAgICB8XFxcXFxcXFxcXFxcfCAgICAgICAgIHxcXFxcXFxcXFxcXFxcXHxcbiAgICAgIC8vIHkyICstLS0tLS0rLS0tLS0tLS0tKy0tLS0tLS0rXG4gICAgICAvLyAgICB8XFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcfFxuICAgICAgLy8gICAgfFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXHxcbiAgICAgIC8vIHkzICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rXG4gICAgICAvL1xuXG4gICAgICBjb25zdCB4MCA9IE1hdGguY2VpbCgtdGhpcy5nZXRXaWR0aCgpIC8gMiAtIHRoaXMuZ2V0TGVmdCgpKTtcbiAgICAgIGNvbnN0IHgxID0gTWF0aC5jZWlsKC10aGlzLmdldFdpZHRoKCkgLyAyKTtcbiAgICAgIGNvbnN0IHgyID0gTWF0aC5jZWlsKHRoaXMuZ2V0V2lkdGgoKSAvIDIpO1xuICAgICAgY29uc3QgeDMgPSBNYXRoLmNlaWwodGhpcy5nZXRXaWR0aCgpIC8gMiArIChjYW52YXMud2lkdGggLSB0aGlzLmdldFdpZHRoKCkgLSB0aGlzLmdldExlZnQoKSkpO1xuXG4gICAgICBjb25zdCB5MCA9IE1hdGguY2VpbCgtdGhpcy5nZXRIZWlnaHQoKSAvIDIgLSB0aGlzLmdldFRvcCgpKTtcbiAgICAgIGNvbnN0IHkxID0gTWF0aC5jZWlsKC10aGlzLmdldEhlaWdodCgpIC8gMik7XG4gICAgICBjb25zdCB5MiA9IE1hdGguY2VpbCh0aGlzLmdldEhlaWdodCgpIC8gMik7XG4gICAgICBjb25zdCB5MyA9IE1hdGguY2VpbCh0aGlzLmdldEhlaWdodCgpIC8gMiArIChjYW52YXMuaGVpZ2h0IC0gdGhpcy5nZXRIZWlnaHQoKSAtIHRoaXMuZ2V0VG9wKCkpKTtcblxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuXG4gICAgICAvLyBEcmF3IG91dGVyIHJlY3RhbmdsZS5cbiAgICAgIC8vIE51bWJlcnMgYXJlICsvLTEgc28gdGhhdCBvdmVybGF5IGVkZ2VzIGRvbid0IGdldCBibHVycnkuXG4gICAgICBjdHgubW92ZVRvKHgwIC0gMSwgeTAgLSAxKTtcbiAgICAgIGN0eC5saW5lVG8oeDMgKyAxLCB5MCAtIDEpO1xuICAgICAgY3R4LmxpbmVUbyh4MyArIDEsIHkzICsgMSk7XG4gICAgICBjdHgubGluZVRvKHgwIC0gMSwgeTMgLSAxKTtcbiAgICAgIGN0eC5saW5lVG8oeDAgLSAxLCB5MCAtIDEpO1xuICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAvLyBEcmF3IGlubmVyIHJlY3RhbmdsZS5cbiAgICAgIGN0eC5tb3ZlVG8oeDEsIHkxKTtcbiAgICAgIGN0eC5saW5lVG8oeDEsIHkyKTtcbiAgICAgIGN0eC5saW5lVG8oeDIsIHkyKTtcbiAgICAgIGN0eC5saW5lVG8oeDIsIHkxKTtcbiAgICAgIGN0eC5saW5lVG8oeDEsIHkxKTtcblxuICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgY3R4LmZpbGwoKTtcbiAgICB9LFxuXG4gICAgX3JlbmRlckJvcmRlcnM6IGZ1bmN0aW9uKGN0eCkge1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4Lm1vdmVUbygtdGhpcy5nZXRXaWR0aCgpIC8gMiwgLXRoaXMuZ2V0SGVpZ2h0KCkgLyAyKTsgLy8gdXBwZXIgbGVmdFxuICAgICAgY3R4LmxpbmVUbyh0aGlzLmdldFdpZHRoKCkgLyAyLCAtdGhpcy5nZXRIZWlnaHQoKSAvIDIpOyAvLyB1cHBlciByaWdodFxuICAgICAgY3R4LmxpbmVUbyh0aGlzLmdldFdpZHRoKCkgLyAyLCB0aGlzLmdldEhlaWdodCgpIC8gMik7IC8vIGRvd24gcmlnaHRcbiAgICAgIGN0eC5saW5lVG8oLXRoaXMuZ2V0V2lkdGgoKSAvIDIsIHRoaXMuZ2V0SGVpZ2h0KCkgLyAyKTsgLy8gZG93biBsZWZ0XG4gICAgICBjdHgubGluZVRvKC10aGlzLmdldFdpZHRoKCkgLyAyLCAtdGhpcy5nZXRIZWlnaHQoKSAvIDIpOyAvLyB1cHBlciBsZWZ0XG4gICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfSxcblxuICAgIF9yZW5kZXJHcmlkOiBmdW5jdGlvbihjdHgpIHtcbiAgICAgIC8vIFZlcnRpY2FsIGxpbmVzXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHgubW92ZVRvKC10aGlzLmdldFdpZHRoKCkgLyAyICsgMSAvIDMgKiB0aGlzLmdldFdpZHRoKCksIC10aGlzLmdldEhlaWdodCgpIC8gMik7XG4gICAgICBjdHgubGluZVRvKC10aGlzLmdldFdpZHRoKCkgLyAyICsgMSAvIDMgKiB0aGlzLmdldFdpZHRoKCksIHRoaXMuZ2V0SGVpZ2h0KCkgLyAyKTtcbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5tb3ZlVG8oLXRoaXMuZ2V0V2lkdGgoKSAvIDIgKyAyIC8gMyAqIHRoaXMuZ2V0V2lkdGgoKSwgLXRoaXMuZ2V0SGVpZ2h0KCkgLyAyKTtcbiAgICAgIGN0eC5saW5lVG8oLXRoaXMuZ2V0V2lkdGgoKSAvIDIgKyAyIC8gMyAqIHRoaXMuZ2V0V2lkdGgoKSwgdGhpcy5nZXRIZWlnaHQoKSAvIDIpO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgLy8gSG9yaXpvbnRhbCBsaW5lc1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4Lm1vdmVUbygtdGhpcy5nZXRXaWR0aCgpIC8gMiwgLXRoaXMuZ2V0SGVpZ2h0KCkgLyAyICsgMSAvIDMgKiB0aGlzLmdldEhlaWdodCgpKTtcbiAgICAgIGN0eC5saW5lVG8odGhpcy5nZXRXaWR0aCgpIC8gMiwgLXRoaXMuZ2V0SGVpZ2h0KCkgLyAyICsgMSAvIDMgKiB0aGlzLmdldEhlaWdodCgpKTtcbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5tb3ZlVG8oLXRoaXMuZ2V0V2lkdGgoKSAvIDIsIC10aGlzLmdldEhlaWdodCgpIC8gMiArIDIgLyAzICogdGhpcy5nZXRIZWlnaHQoKSk7XG4gICAgICBjdHgubGluZVRvKHRoaXMuZ2V0V2lkdGgoKSAvIDIsIC10aGlzLmdldEhlaWdodCgpIC8gMiArIDIgLyAzICogdGhpcy5nZXRIZWlnaHQoKSk7XG4gICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfVxuICB9KTtcblxuICBEYXJrcm9vbS5wbHVnaW5zLmNyb3AgPSBEYXJrcm9vbS5QbHVnaW4uZXh0ZW5kKHtcbiAgICAvLyBJbml0IHBvaW50XG4gICAgc3RhcnRYOiBudWxsLFxuICAgIHN0YXJ0WTogbnVsbCxcblxuICAgIC8vIEtleWNyb3BcbiAgICBpc0tleUNyb3Bpbmc6IGZhbHNlLFxuICAgIGlzS2V5TGVmdDogZmFsc2UsXG4gICAgaXNLZXlVcDogZmFsc2UsXG5cbiAgICBkZWZhdWx0czoge1xuICAgICAgLy8gbWluIGNyb3AgZGltZW5zaW9uXG4gICAgICBtaW5IZWlnaHQ6IDEsXG4gICAgICBtaW5XaWR0aDogMSxcbiAgICAgIC8vIGVuc3VyZSBjcm9wIHJhdGlvXG4gICAgICByYXRpbzogbnVsbCxcbiAgICAgIC8vIHF1aWNrIGNyb3AgZmVhdHVyZSAoc2V0IGEga2V5IGNvZGUgdG8gZW5hYmxlIGl0KVxuICAgICAgcXVpY2tDcm9wS2V5OiBmYWxzZVxuICAgIH0sXG5cbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IGJ1dHRvbkdyb3VwID0gdGhpcy5kYXJrcm9vbS50b29sYmFyLmNyZWF0ZUJ1dHRvbkdyb3VwKCk7XG5cbiAgICAgIHRoaXMuY3JvcEJ1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XG4gICAgICAgIGltYWdlOiBcImNyb3BcIlxuICAgICAgfSk7XG4gICAgICB0aGlzLm9rQnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcbiAgICAgICAgaW1hZ2U6IFwiZG9uZVwiLFxuICAgICAgICB0eXBlOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgaGlkZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgICB0aGlzLmNhbmNlbEJ1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XG4gICAgICAgIGltYWdlOiBcImNsb3NlXCIsXG4gICAgICAgIHR5cGU6IFwiZGFuZ2VyXCIsXG4gICAgICAgIGhpZGU6IHRydWVcbiAgICAgIH0pO1xuXG4gICAgICAvLyBCdXR0b25zIGNsaWNrXG4gICAgICB0aGlzLmNyb3BCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMudG9nZ2xlQ3JvcC5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMub2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuY3JvcEN1cnJlbnRab25lLmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5jYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMucmVsZWFzZUZvY3VzLmJpbmQodGhpcykpO1xuXG4gICAgICAvLyBDYW52YXMgZXZlbnRzXG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbihcIm1vdXNlOmRvd25cIiwgdGhpcy5vbk1vdXNlRG93bi5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLm9uKFwibW91c2U6bW92ZVwiLCB0aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMub24oXCJtb3VzZTp1cFwiLCB0aGlzLm9uTW91c2VVcC5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLm9uKFwib2JqZWN0Om1vdmluZ1wiLCB0aGlzLm9uT2JqZWN0TW92aW5nLmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMub24oXCJvYmplY3Q6c2NhbGluZ1wiLCB0aGlzLm9uT2JqZWN0U2NhbGluZy5iaW5kKHRoaXMpKTtcblxuICAgICAgZmFicmljLnV0aWwuYWRkTGlzdGVuZXIoZmFicmljLmRvY3VtZW50LCBcImtleWRvd25cIiwgdGhpcy5vbktleURvd24uYmluZCh0aGlzKSk7XG4gICAgICBmYWJyaWMudXRpbC5hZGRMaXN0ZW5lcihmYWJyaWMuZG9jdW1lbnQsIFwia2V5dXBcIiwgdGhpcy5vbktleVVwLmJpbmQodGhpcykpO1xuXG4gICAgICB0aGlzLmRhcmtyb29tLmFkZEV2ZW50TGlzdGVuZXIoXCJjb3JlOnRyYW5zZm9ybWF0aW9uXCIsIHRoaXMucmVsZWFzZUZvY3VzLmJpbmQodGhpcykpO1xuICAgIH0sXG5cbiAgICBjbGVhcjogZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy5oYXNGb2N1cygpKSB7XG4gICAgICAgIHRoaXMucmVsZWFzZUZvY3VzKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICAvLyBBdm9pZCBjcm9wIHpvbmUgdG8gZ28gYmV5b25kIHRoZSBjYW52YXMgZWRnZXNcbiAgICBvbk9iamVjdE1vdmluZzogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGlmICghdGhpcy5oYXNGb2N1cygpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY3VycmVudE9iamVjdCA9IGV2ZW50LnRhcmdldDtcbiAgICAgIGlmIChjdXJyZW50T2JqZWN0ICE9PSB0aGlzLmNyb3Bab25lKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XG4gICAgICBjb25zdCB4ID0gY3VycmVudE9iamVjdC5nZXRMZWZ0KCk7XG4gICAgICBjb25zdCB5ID0gY3VycmVudE9iamVjdC5nZXRUb3AoKTtcbiAgICAgIGNvbnN0IHcgPSBjdXJyZW50T2JqZWN0LmdldFdpZHRoKCk7XG4gICAgICBjb25zdCBoID0gY3VycmVudE9iamVjdC5nZXRIZWlnaHQoKTtcbiAgICAgIGNvbnN0IG1heFggPSBjYW52YXMuZ2V0V2lkdGgoKSAtIHc7XG4gICAgICBjb25zdCBtYXhZID0gY2FudmFzLmdldEhlaWdodCgpIC0gaDtcblxuICAgICAgaWYgKHggPCAwKSB7XG4gICAgICAgIGN1cnJlbnRPYmplY3Quc2V0KFwibGVmdFwiLCAwKTtcbiAgICAgIH1cbiAgICAgIGlmICh5IDwgMCkge1xuICAgICAgICBjdXJyZW50T2JqZWN0LnNldChcInRvcFwiLCAwKTtcbiAgICAgIH1cbiAgICAgIGlmICh4ID4gbWF4WCkge1xuICAgICAgICBjdXJyZW50T2JqZWN0LnNldChcImxlZnRcIiwgbWF4WCk7XG4gICAgICB9XG4gICAgICBpZiAoeSA+IG1heFkpIHtcbiAgICAgICAgY3VycmVudE9iamVjdC5zZXQoXCJ0b3BcIiwgbWF4WSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudChcImNyb3A6dXBkYXRlXCIpO1xuICAgIH0sXG5cbiAgICAvLyBQcmV2ZW50IGNyb3Agem9uZSBmcm9tIGdvaW5nIGJleW9uZCB0aGUgY2FudmFzIGVkZ2VzIChsaWtlIG1vdXNlTW92ZSlcbiAgICBvbk9iamVjdFNjYWxpbmc6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBpZiAoIXRoaXMuaGFzRm9jdXMoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxldCBwcmV2ZW50U2NhbGluZyA9IGZhbHNlO1xuICAgICAgY29uc3QgY3VycmVudE9iamVjdCA9IGV2ZW50LnRhcmdldDtcbiAgICAgIGlmIChjdXJyZW50T2JqZWN0ICE9PSB0aGlzLmNyb3Bab25lKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XG5cbiAgICAgIGNvbnN0IG1pblggPSBjdXJyZW50T2JqZWN0LmdldExlZnQoKTtcbiAgICAgIGNvbnN0IG1pblkgPSBjdXJyZW50T2JqZWN0LmdldFRvcCgpO1xuICAgICAgY29uc3QgbWF4WCA9IGN1cnJlbnRPYmplY3QuZ2V0TGVmdCgpICsgY3VycmVudE9iamVjdC5nZXRXaWR0aCgpO1xuICAgICAgY29uc3QgbWF4WSA9IGN1cnJlbnRPYmplY3QuZ2V0VG9wKCkgKyBjdXJyZW50T2JqZWN0LmdldEhlaWdodCgpO1xuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJhdGlvICE9PSBudWxsKSB7XG4gICAgICAgIGlmIChtaW5YIDwgMCB8fCBtYXhYID4gY2FudmFzLmdldFdpZHRoKCkgfHwgbWluWSA8IDAgfHwgbWF4WSA+IGNhbnZhcy5nZXRIZWlnaHQoKSkge1xuICAgICAgICAgIHByZXZlbnRTY2FsaW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWluWCA8IDAgfHwgbWF4WCA+IGNhbnZhcy5nZXRXaWR0aCgpIHx8IHByZXZlbnRTY2FsaW5nKSB7XG4gICAgICAgIGNvbnN0IGxhc3RTY2FsZVggPSB0aGlzLmxhc3RTY2FsZVggfHwgMTtcbiAgICAgICAgY3VycmVudE9iamVjdC5zZXRTY2FsZVgobGFzdFNjYWxlWCk7XG4gICAgICB9XG4gICAgICBpZiAobWluWCA8IDApIHtcbiAgICAgICAgY3VycmVudE9iamVjdC5zZXRMZWZ0KDApO1xuICAgICAgfVxuXG4gICAgICBpZiAobWluWSA8IDAgfHwgbWF4WSA+IGNhbnZhcy5nZXRIZWlnaHQoKSB8fCBwcmV2ZW50U2NhbGluZykge1xuICAgICAgICBjb25zdCBsYXN0U2NhbGVZID0gdGhpcy5sYXN0U2NhbGVZIHx8IDE7XG4gICAgICAgIGN1cnJlbnRPYmplY3Quc2V0U2NhbGVZKGxhc3RTY2FsZVkpO1xuICAgICAgfVxuICAgICAgaWYgKG1pblkgPCAwKSB7XG4gICAgICAgIGN1cnJlbnRPYmplY3Quc2V0VG9wKDApO1xuICAgICAgfVxuXG4gICAgICBpZiAoY3VycmVudE9iamVjdC5nZXRXaWR0aCgpIDwgdGhpcy5vcHRpb25zLm1pbldpZHRoKSB7XG4gICAgICAgIGN1cnJlbnRPYmplY3Quc2NhbGVUb1dpZHRoKHRoaXMub3B0aW9ucy5taW5XaWR0aCk7XG4gICAgICB9XG4gICAgICBpZiAoY3VycmVudE9iamVjdC5nZXRIZWlnaHQoKSA8IHRoaXMub3B0aW9ucy5taW5IZWlnaHQpIHtcbiAgICAgICAgY3VycmVudE9iamVjdC5zY2FsZVRvSGVpZ2h0KHRoaXMub3B0aW9ucy5taW5IZWlnaHQpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmxhc3RTY2FsZVggPSBjdXJyZW50T2JqZWN0LmdldFNjYWxlWCgpO1xuICAgICAgdGhpcy5sYXN0U2NhbGVZID0gY3VycmVudE9iamVjdC5nZXRTY2FsZVkoKTtcblxuICAgICAgdGhpcy5kYXJrcm9vbS5kaXNwYXRjaEV2ZW50KFwiY3JvcDp1cGRhdGVcIik7XG4gICAgfSxcblxuICAgIC8vIEluaXQgY3JvcCB6b25lXG4gICAgb25Nb3VzZURvd246IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBldmVudC5lLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAoIXRoaXMuaGFzRm9jdXMoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xuXG4gICAgICAvLyByZWNhbGN1bGF0ZSBvZmZzZXQsIGluIGNhc2UgY2FudmFzIHdhcyBtYW5pcHVsYXRlZCBzaW5jZSBsYXN0IGBjYWxjT2Zmc2V0YFxuICAgICAgY2FudmFzLmNhbGNPZmZzZXQoKTtcbiAgICAgIGNvbnN0IHBvaW50ZXIgPSBjYW52YXMuZ2V0UG9pbnRlcihldmVudC5lKTtcbiAgICAgIGNvbnN0IHggPSBwb2ludGVyLng7XG4gICAgICBjb25zdCB5ID0gcG9pbnRlci55O1xuICAgICAgY29uc3QgcG9pbnQgPSBuZXcgZmFicmljLlBvaW50KHgsIHkpO1xuXG4gICAgICAvLyBDaGVjayBpZiB1c2VyIHdhbnQgdG8gc2NhbGUgb3IgZHJhZyB0aGUgY3JvcCB6b25lLlxuICAgICAgY29uc3QgYWN0aXZlT2JqZWN0ID0gY2FudmFzLmdldEFjdGl2ZU9iamVjdCgpO1xuICAgICAgaWYgKGFjdGl2ZU9iamVjdCA9PT0gdGhpcy5jcm9wWm9uZSB8fCB0aGlzLmNyb3Bab25lLmNvbnRhaW5zUG9pbnQocG9pbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY2FudmFzLmRpc2NhcmRBY3RpdmVPYmplY3QoKTtcbiAgICAgIHRoaXMuY3JvcFpvbmUuc2V0V2lkdGgoMCk7XG4gICAgICB0aGlzLmNyb3Bab25lLnNldEhlaWdodCgwKTtcbiAgICAgIHRoaXMuY3JvcFpvbmUuc2V0U2NhbGVYKDEpO1xuICAgICAgdGhpcy5jcm9wWm9uZS5zZXRTY2FsZVkoMSk7XG5cbiAgICAgIHRoaXMuc3RhcnRYID0geDtcbiAgICAgIHRoaXMuc3RhcnRZID0geTtcbiAgICB9LFxuXG4gICAgLy8gRXh0ZW5kIGNyb3Agem9uZVxuICAgIG9uTW91c2VNb3ZlOiBmdW5jdGlvbihldmVudCkge1xuICAgICAgLy8gUXVpY2sgY3JvcCBmZWF0dXJlXG4gICAgICBpZiAodGhpcy5pc0tleUNyb3BpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub25Nb3VzZU1vdmVLZXlDcm9wKGV2ZW50KTtcbiAgICAgIH1cblxuICAgICAgaWYgKG51bGwgPT09IHRoaXMuc3RhcnRYIHx8IG51bGwgPT09IHRoaXMuc3RhcnRZKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XG4gICAgICBjb25zdCBwb2ludGVyID0gY2FudmFzLmdldFBvaW50ZXIoZXZlbnQuZSk7XG4gICAgICBjb25zdCB4ID0gcG9pbnRlci54O1xuICAgICAgY29uc3QgeSA9IHBvaW50ZXIueTtcblxuICAgICAgdGhpcy5fcmVuZGVyQ3JvcFpvbmUodGhpcy5zdGFydFgsIHRoaXMuc3RhcnRZLCB4LCB5KTtcbiAgICB9LFxuXG4gICAgb25Nb3VzZU1vdmVLZXlDcm9wOiBmdW5jdGlvbihldmVudCkge1xuICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XG4gICAgICBjb25zdCB6b25lID0gdGhpcy5jcm9wWm9uZTtcblxuICAgICAgY29uc3QgcG9pbnRlciA9IGNhbnZhcy5nZXRQb2ludGVyKGV2ZW50LmUpO1xuICAgICAgY29uc3QgeCA9IHBvaW50ZXIueDtcbiAgICAgIGNvbnN0IHkgPSBwb2ludGVyLnk7XG5cbiAgICAgIGlmICghem9uZS5sZWZ0IHx8ICF6b25lLnRvcCkge1xuICAgICAgICB6b25lLnNldFRvcCh5KTtcbiAgICAgICAgem9uZS5zZXRMZWZ0KHgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmlzS2V5TGVmdCA9IHggPCB6b25lLmxlZnQgKyB6b25lLndpZHRoIC8gMjtcbiAgICAgIHRoaXMuaXNLZXlVcCA9IHkgPCB6b25lLnRvcCArIHpvbmUuaGVpZ2h0IC8gMjtcblxuICAgICAgdGhpcy5fcmVuZGVyQ3JvcFpvbmUoXG4gICAgICAgIE1hdGgubWluKHpvbmUubGVmdCwgeCksXG4gICAgICAgIE1hdGgubWluKHpvbmUudG9wLCB5KSxcbiAgICAgICAgTWF0aC5tYXgoem9uZS5sZWZ0ICsgem9uZS53aWR0aCwgeCksXG4gICAgICAgIE1hdGgubWF4KHpvbmUudG9wICsgem9uZS5oZWlnaHQsIHkpXG4gICAgICApO1xuICAgIH0sXG5cbiAgICAvLyBGaW5pc2ggY3JvcCB6b25lXG4gICAgb25Nb3VzZVVwOiBmdW5jdGlvbihldmVudCkge1xuICAgICAgaWYgKG51bGwgPT09IHRoaXMuc3RhcnRYIHx8IG51bGwgPT09IHRoaXMuc3RhcnRZKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XG4gICAgICB0aGlzLmNyb3Bab25lLnNldENvb3JkcygpO1xuICAgICAgY2FudmFzLnNldEFjdGl2ZU9iamVjdCh0aGlzLmNyb3Bab25lKTtcbiAgICAgIGNhbnZhcy5jYWxjT2Zmc2V0KCk7XG5cbiAgICAgIHRoaXMuc3RhcnRYID0gbnVsbDtcbiAgICAgIHRoaXMuc3RhcnRZID0gbnVsbDtcbiAgICB9LFxuXG4gICAgb25LZXlEb3duOiBmdW5jdGlvbihldmVudCkge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5xdWlja0Nyb3BLZXkgPT09IGZhbHNlIHx8IGV2ZW50LmtleUNvZGUgIT09IHRoaXMub3B0aW9ucy5xdWlja0Nyb3BLZXkgfHwgdGhpcy5pc0tleUNyb3BpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBBY3RpdmUgcXVpY2sgY3JvcCBmbG93XG4gICAgICB0aGlzLmlzS2V5Q3JvcGluZyA9IHRydWU7XG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5kaXNjYXJkQWN0aXZlT2JqZWN0KCk7XG4gICAgICB0aGlzLmNyb3Bab25lLnNldFdpZHRoKDApO1xuICAgICAgdGhpcy5jcm9wWm9uZS5zZXRIZWlnaHQoMCk7XG4gICAgICB0aGlzLmNyb3Bab25lLnNldFNjYWxlWCgxKTtcbiAgICAgIHRoaXMuY3JvcFpvbmUuc2V0U2NhbGVZKDEpO1xuICAgICAgdGhpcy5jcm9wWm9uZS5zZXRUb3AoMCk7XG4gICAgICB0aGlzLmNyb3Bab25lLnNldExlZnQoMCk7XG4gICAgfSxcblxuICAgIG9uS2V5VXA6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnF1aWNrQ3JvcEtleSA9PT0gZmFsc2UgfHwgZXZlbnQua2V5Q29kZSAhPT0gdGhpcy5vcHRpb25zLnF1aWNrQ3JvcEtleSB8fCAhdGhpcy5pc0tleUNyb3BpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBVbmFjdGl2ZSBxdWljayBjcm9wIGZsb3dcbiAgICAgIHRoaXMuaXNLZXlDcm9waW5nID0gZmFsc2U7XG4gICAgICB0aGlzLnN0YXJ0WCA9IDE7XG4gICAgICB0aGlzLnN0YXJ0WSA9IDE7XG4gICAgICB0aGlzLm9uTW91c2VVcCgpO1xuICAgIH0sXG5cbiAgICBzZWxlY3Rab25lOiBmdW5jdGlvbih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBmb3JjZURpbWVuc2lvbikge1xuICAgICAgaWYgKCF0aGlzLmhhc0ZvY3VzKCkpIHtcbiAgICAgICAgdGhpcy5yZXF1aXJlRm9jdXMoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFmb3JjZURpbWVuc2lvbikge1xuICAgICAgICB0aGlzLl9yZW5kZXJDcm9wWm9uZSh4LCB5LCB4ICsgd2lkdGgsIHkgKyBoZWlnaHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jcm9wWm9uZS5zZXQoe1xuICAgICAgICAgIGxlZnQ6IHgsXG4gICAgICAgICAgdG9wOiB5LFxuICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IGhlaWdodFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XG4gICAgICBjYW52YXMuYnJpbmdUb0Zyb250KHRoaXMuY3JvcFpvbmUpO1xuICAgICAgdGhpcy5jcm9wWm9uZS5zZXRDb29yZHMoKTtcbiAgICAgIGNhbnZhcy5zZXRBY3RpdmVPYmplY3QodGhpcy5jcm9wWm9uZSk7XG4gICAgICBjYW52YXMuY2FsY09mZnNldCgpO1xuXG4gICAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoXCJjcm9wOnVwZGF0ZVwiKTtcbiAgICB9LFxuXG4gICAgdG9nZ2xlQ3JvcDogZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIXRoaXMuaGFzRm9jdXMoKSkge1xuICAgICAgICB0aGlzLnJlcXVpcmVGb2N1cygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZWxlYXNlRm9jdXMoKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgY3JvcEN1cnJlbnRab25lOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghdGhpcy5oYXNGb2N1cygpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gQXZvaWQgY3JvcGluZyBlbXB0eSB6b25lXG4gICAgICBpZiAodGhpcy5jcm9wWm9uZS53aWR0aCA8IDEgJiYgdGhpcy5jcm9wWm9uZS5oZWlnaHQgPCAxKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgaW1hZ2UgPSB0aGlzLmRhcmtyb29tLmltYWdlO1xuXG4gICAgICAvLyBDb21wdXRlIGNyb3Agem9uZSBkaW1lbnNpb25zXG4gICAgICBsZXQgdG9wID0gdGhpcy5jcm9wWm9uZS5nZXRUb3AoKSAtIGltYWdlLmdldFRvcCgpO1xuICAgICAgbGV0IGxlZnQgPSB0aGlzLmNyb3Bab25lLmdldExlZnQoKSAtIGltYWdlLmdldExlZnQoKTtcbiAgICAgIGxldCB3aWR0aCA9IHRoaXMuY3JvcFpvbmUuZ2V0V2lkdGgoKTtcbiAgICAgIGxldCBoZWlnaHQgPSB0aGlzLmNyb3Bab25lLmdldEhlaWdodCgpO1xuXG4gICAgICAvLyBBZGp1c3QgZGltZW5zaW9ucyB0byBpbWFnZSBvbmx5XG4gICAgICBpZiAodG9wIDwgMCkge1xuICAgICAgICBoZWlnaHQgKz0gdG9wO1xuICAgICAgICB0b3AgPSAwO1xuICAgICAgfVxuXG4gICAgICBpZiAobGVmdCA8IDApIHtcbiAgICAgICAgd2lkdGggKz0gbGVmdDtcbiAgICAgICAgbGVmdCA9IDA7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZGFya3Jvb20ub3B0aW9ucy50b3AgPSAwO1xuICAgICAgdGhpcy5kYXJrcm9vbS5vcHRpb25zLmxlZnQgPSAwO1xuICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMuc2V0Wm9vbSgxKTtcbiAgICAgIHRoaXMuZGFya3Jvb20ucGx1Z2lucy56b29tLnVwZGF0ZUJ1dHRvbnMoKTtcbiAgICAgIC8vIEFwcGx5IGNyb3AgdHJhbnNmb3JtYXRpb24uXG4gICAgICAvLyBNYWtlIHN1cmUgdG8gdXNlIHJlbGF0aXZlIGRpbWVuc2lvbiBzaW5jZSB0aGUgY3JvcCB3aWxsIGJlIGFwcGxpZWRcbiAgICAgIC8vIG9uIHRoZSBzb3VyY2UgaW1hZ2UuXG4gICAgICB0aGlzLmRhcmtyb29tLmFwcGx5VHJhbnNmb3JtYXRpb24obmV3IENyb3Aoe1xuICAgICAgICB0b3A6IHRvcCAvIGltYWdlLmdldEhlaWdodCgpLFxuICAgICAgICBsZWZ0OiBsZWZ0IC8gaW1hZ2UuZ2V0V2lkdGgoKSxcbiAgICAgICAgd2lkdGg6IHdpZHRoIC8gaW1hZ2UuZ2V0V2lkdGgoKSxcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHQgLyBpbWFnZS5nZXRIZWlnaHQoKVxuICAgICAgfSkpO1xuICAgIH0sXG5cbiAgICAvLyBUZXN0IHdldGhlciBjcm9wIHpvbmUgaXMgc2V0XG4gICAgaGFzRm9jdXM6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY3JvcFpvbmUgIT09IHVuZGVmaW5lZDtcbiAgICB9LFxuXG4gICAgLy8gQ3JlYXRlIHRoZSBjcm9wIHpvbmVcbiAgICByZXF1aXJlRm9jdXM6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kYXJrcm9vbS5jbGVhckZvY3VzKFwiY3JvcFwiKTtcbiAgICAgIHRoaXMuY3JvcFpvbmUgPSBuZXcgQ3JvcFpvbmUoe1xuICAgICAgICBmaWxsOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgIGhhc0JvcmRlcnM6IGZhbHNlLFxuICAgICAgICBvcmlnaW5YOiBcImxlZnRcIixcbiAgICAgICAgb3JpZ2luWTogXCJ0b3BcIixcbiAgICAgICAgLy8gc3Ryb2tlOiAnIzQ0NCcsXG4gICAgICAgIC8vIHN0cm9rZURhc2hBcnJheTogWzUsIDVdLFxuICAgICAgICAvLyBib3JkZXJDb2xvcjogJyM0NDQnLFxuICAgICAgICBjb3JuZXJDb2xvcjogXCIjNDQ0XCIsXG4gICAgICAgIGNvcm5lclNpemU6IDgsXG4gICAgICAgIHRyYW5zcGFyZW50Q29ybmVyczogZmFsc2UsXG4gICAgICAgIGxvY2tSb3RhdGlvbjogdHJ1ZSxcbiAgICAgICAgaGFzUm90YXRpbmdQb2ludDogZmFsc2VcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJhdGlvICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuY3JvcFpvbmUuc2V0KFwibG9ja1VuaVNjYWxpbmdcIiwgdHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLmFkZCh0aGlzLmNyb3Bab25lKTtcbiAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLmRlZmF1bHRDdXJzb3IgPSBcImNyb3NzaGFpclwiO1xuXG4gICAgICB0aGlzLmNyb3BCdXR0b24uYWN0aXZlKHRydWUpO1xuICAgICAgdGhpcy5va0J1dHRvbi5oaWRlKGZhbHNlKTtcbiAgICAgIHRoaXMuY2FuY2VsQnV0dG9uLmhpZGUoZmFsc2UpO1xuICAgIH0sXG5cbiAgICAvLyBSZW1vdmUgdGhlIGNyb3Agem9uZVxuICAgIHJlbGVhc2VGb2N1czogZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodW5kZWZpbmVkID09PSB0aGlzLmNyb3Bab25lKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jcm9wWm9uZS5yZW1vdmUoKTtcbiAgICAgIHRoaXMuY3JvcFpvbmUgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMuY3JvcEJ1dHRvbi5hY3RpdmUoZmFsc2UpO1xuICAgICAgdGhpcy5va0J1dHRvbi5oaWRlKHRydWUpO1xuICAgICAgdGhpcy5jYW5jZWxCdXR0b24uaGlkZSh0cnVlKTtcblxuICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMuZGVmYXVsdEN1cnNvciA9IFwiZGVmYXVsdFwiO1xuXG4gICAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoXCJjcm9wOnVwZGF0ZVwiKTtcbiAgICB9LFxuXG4gICAgX3JlbmRlckNyb3Bab25lOiBmdW5jdGlvbihmcm9tWCwgZnJvbVksIHRvWCwgdG9ZKSB7XG4gICAgICBjb25zdCBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcblxuICAgICAgY29uc3QgaXNSaWdodCA9ICh0b1ggPiBmcm9tWCk7XG4gICAgICBsZXQgaXNMZWZ0ID0gIWlzUmlnaHQ7XG4gICAgICBjb25zdCBpc0Rvd24gPSAodG9ZID4gZnJvbVkpO1xuICAgICAgbGV0IGlzVXAgPSAhaXNEb3duO1xuXG4gICAgICBjb25zdCBtaW5XaWR0aCA9IE1hdGgubWluKCt0aGlzLm9wdGlvbnMubWluV2lkdGgsIGNhbnZhcy5nZXRXaWR0aCgpKTtcbiAgICAgIGNvbnN0IG1pbkhlaWdodCA9IE1hdGgubWluKCt0aGlzLm9wdGlvbnMubWluSGVpZ2h0LCBjYW52YXMuZ2V0SGVpZ2h0KCkpO1xuXG4gICAgICAvLyBEZWZpbmUgY29ybmVyIGNvb3JkaW5hdGVzXG4gICAgICBsZXQgbGVmdFggPSBNYXRoLm1pbihmcm9tWCwgdG9YKTtcbiAgICAgIGxldCByaWdodFggPSBNYXRoLm1heChmcm9tWCwgdG9YKTtcbiAgICAgIGxldCB0b3BZID0gTWF0aC5taW4oZnJvbVksIHRvWSk7XG4gICAgICBsZXQgYm90dG9tWSA9IE1hdGgubWF4KGZyb21ZLCB0b1kpO1xuXG4gICAgICAvLyBSZXBsYWNlIGN1cnJlbnQgcG9pbnQgaW50byB0aGUgY2FudmFzXG4gICAgICBsZWZ0WCA9IE1hdGgubWF4KDAsIGxlZnRYKTtcbiAgICAgIHJpZ2h0WCA9IE1hdGgubWluKGNhbnZhcy5nZXRXaWR0aCgpLCByaWdodFgpO1xuICAgICAgdG9wWSA9IE1hdGgubWF4KDAsIHRvcFkpO1xuICAgICAgYm90dG9tWSA9IE1hdGgubWluKGNhbnZhcy5nZXRIZWlnaHQoKSwgYm90dG9tWSk7XG5cbiAgICAgIC8vIFJlY2FsaWJyYXRlIGNvb3JkaW5hdGVzIGFjY29yZGluZyB0byBnaXZlbiBvcHRpb25zXG4gICAgICBpZiAocmlnaHRYIC0gbGVmdFggPCBtaW5XaWR0aCkge1xuICAgICAgICBpZiAoaXNSaWdodCkge1xuICAgICAgICAgIHJpZ2h0WCA9IGxlZnRYICsgbWluV2lkdGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGVmdFggPSByaWdodFggLSBtaW5XaWR0aDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGJvdHRvbVkgLSB0b3BZIDwgbWluSGVpZ2h0KSB7XG4gICAgICAgIGlmIChpc0Rvd24pIHtcbiAgICAgICAgICBib3R0b21ZID0gdG9wWSArIG1pbkhlaWdodDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0b3BZID0gYm90dG9tWSAtIG1pbkhlaWdodDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUcnVuY2F0ZSB0cnVuY2F0ZSBhY2NvcmRpbmcgdG8gY2FudmFzIGRpbWVuc2lvbnNcbiAgICAgIGlmIChsZWZ0WCA8IDApIHtcbiAgICAgICAgLy8gVHJhbnNsYXRlIHRvIHRoZSBsZWZ0XG4gICAgICAgIHJpZ2h0WCArPSBNYXRoLmFicyhsZWZ0WCk7XG4gICAgICAgIGxlZnRYID0gMDtcbiAgICAgIH1cbiAgICAgIGlmIChyaWdodFggPiBjYW52YXMuZ2V0V2lkdGgoKSkge1xuICAgICAgICAvLyBUcmFuc2xhdGUgdG8gdGhlIHJpZ2h0XG4gICAgICAgIGxlZnRYIC09IChyaWdodFggLSBjYW52YXMuZ2V0V2lkdGgoKSk7XG4gICAgICAgIHJpZ2h0WCA9IGNhbnZhcy5nZXRXaWR0aCgpO1xuICAgICAgfVxuICAgICAgaWYgKHRvcFkgPCAwKSB7XG4gICAgICAgIC8vIFRyYW5zbGF0ZSB0byB0aGUgYm90dG9tXG4gICAgICAgIGJvdHRvbVkgKz0gTWF0aC5hYnModG9wWSk7XG4gICAgICAgIHRvcFkgPSAwO1xuICAgICAgfVxuICAgICAgaWYgKGJvdHRvbVkgPiBjYW52YXMuZ2V0SGVpZ2h0KCkpIHtcbiAgICAgICAgLy8gVHJhbnNsYXRlIHRvIHRoZSByaWdodFxuICAgICAgICB0b3BZIC09IChib3R0b21ZIC0gY2FudmFzLmdldEhlaWdodCgpKTtcbiAgICAgICAgYm90dG9tWSA9IGNhbnZhcy5nZXRIZWlnaHQoKTtcbiAgICAgIH1cblxuICAgICAgbGV0IHdpZHRoID0gcmlnaHRYIC0gbGVmdFg7XG4gICAgICBsZXQgaGVpZ2h0ID0gYm90dG9tWSAtIHRvcFk7XG4gICAgICBjb25zdCBjdXJyZW50UmF0aW8gPSB3aWR0aCAvIGhlaWdodDtcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yYXRpbyAmJiArdGhpcy5vcHRpb25zLnJhdGlvICE9PSBjdXJyZW50UmF0aW8pIHtcbiAgICAgICAgY29uc3QgcmF0aW8gPSArdGhpcy5vcHRpb25zLnJhdGlvO1xuXG4gICAgICAgIGlmICh0aGlzLmlzS2V5Q3JvcGluZykge1xuICAgICAgICAgIGlzTGVmdCA9IHRoaXMuaXNLZXlMZWZ0O1xuICAgICAgICAgIGlzVXAgPSB0aGlzLmlzS2V5VXA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3VycmVudFJhdGlvIDwgcmF0aW8pIHtcbiAgICAgICAgICBjb25zdCBuZXdXaWR0aCA9IGhlaWdodCAqIHJhdGlvO1xuICAgICAgICAgIGlmIChpc0xlZnQpIHtcbiAgICAgICAgICAgIGxlZnRYIC09IChuZXdXaWR0aCAtIHdpZHRoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgd2lkdGggPSBuZXdXaWR0aDtcbiAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50UmF0aW8gPiByYXRpbykge1xuICAgICAgICAgIGNvbnN0IG5ld0hlaWdodCA9IGhlaWdodCAvIChyYXRpbyAqIGhlaWdodCAvIHdpZHRoKTtcbiAgICAgICAgICBpZiAoaXNVcCkge1xuICAgICAgICAgICAgdG9wWSAtPSAobmV3SGVpZ2h0IC0gaGVpZ2h0KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaGVpZ2h0ID0gbmV3SGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxlZnRYIDwgMCkge1xuICAgICAgICAgIGxlZnRYID0gMDtcbiAgICAgICAgICAvLyBUT0RPXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRvcFkgPCAwKSB7XG4gICAgICAgICAgdG9wWSA9IDA7XG4gICAgICAgICAgLy8gVE9ET1xuICAgICAgICB9XG4gICAgICAgIGlmIChsZWZ0WCArIHdpZHRoID4gY2FudmFzLmdldFdpZHRoKCkpIHtcbiAgICAgICAgICBjb25zdCBuZXdXaWR0aCA9IGNhbnZhcy5nZXRXaWR0aCgpIC0gbGVmdFg7XG4gICAgICAgICAgaGVpZ2h0ID0gbmV3V2lkdGggKiBoZWlnaHQgLyB3aWR0aDtcbiAgICAgICAgICB3aWR0aCA9IG5ld1dpZHRoO1xuICAgICAgICAgIGlmIChpc1VwKSB7XG4gICAgICAgICAgICB0b3BZID0gZnJvbVkgLSBoZWlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0b3BZICsgaGVpZ2h0ID4gY2FudmFzLmdldEhlaWdodCgpKSB7XG4gICAgICAgICAgY29uc3QgbmV3SGVpZ2h0ID0gY2FudmFzLmdldEhlaWdodCgpIC0gdG9wWTtcbiAgICAgICAgICB3aWR0aCA9IHdpZHRoICogbmV3SGVpZ2h0IC8gaGVpZ2h0O1xuICAgICAgICAgIGhlaWdodCA9IG5ld0hlaWdodDtcbiAgICAgICAgICBpZiAoaXNMZWZ0KSB7XG4gICAgICAgICAgICBsZWZ0WCA9IGZyb21YIC0gd2lkdGg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEFwcGx5IGNvb3JkaW5hdGVzXG4gICAgICB0aGlzLmNyb3Bab25lLmxlZnQgPSBsZWZ0WDtcbiAgICAgIHRoaXMuY3JvcFpvbmUudG9wID0gdG9wWTtcbiAgICAgIHRoaXMuY3JvcFpvbmUud2lkdGggPSB3aWR0aDtcbiAgICAgIHRoaXMuY3JvcFpvbmUuaGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5icmluZ1RvRnJvbnQodGhpcy5jcm9wWm9uZSk7XG5cbiAgICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudChcImNyb3A6dXBkYXRlXCIpO1xuICAgIH1cbiAgfSk7XG59KCkpO1xuIiwiKGZ1bmN0aW9uICgpIHtcbiAgZmFicmljLkltYWdlLnByb3RvdHlwZS5zdHJva2VXaWR0aCA9IDA7XG4gIGNvbnN0IFBlbmNpbCA9IERhcmtyb29tLlRyYW5zZm9ybWF0aW9uLmV4dGVuZCh7XG4gICAgYXBwbHlUcmFuc2Zvcm1hdGlvbjogZnVuY3Rpb24oY2FudmFzLCBpbWFnZSwgbmV4dCkge1xuICAgICAgLy8gU25hcHNob3QgdGhlIGltYWdlIGRlbGltaXRlZCBieSB0aGUgY3JvcCB6b25lXG4gICAgICBjb25zdCBzbmFwc2hvdCA9IG5ldyBJbWFnZSgpO1xuICAgICAgc25hcHNob3Qub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBWYWxpZGF0ZSBpbWFnZVxuICAgICAgICBpZiAodGhpcy5oZWlnaHQgPCAxIHx8IHRoaXMud2lkdGggPCAxKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaW1nSW5zdGFuY2UgPSBuZXcgZmFicmljLkltYWdlKHRoaXMsIHtcbiAgICAgICAgICAvLyBvcHRpb25zIHRvIG1ha2UgdGhlIGltYWdlIHN0YXRpY1xuICAgICAgICAgIHNlbGVjdGFibGU6IGZhbHNlLFxuICAgICAgICAgIGV2ZW50ZWQ6IGZhbHNlLFxuICAgICAgICAgIGxvY2tNb3ZlbWVudFg6IHRydWUsXG4gICAgICAgICAgbG9ja01vdmVtZW50WTogdHJ1ZSxcbiAgICAgICAgICBsb2NrUm90YXRpb246IHRydWUsXG4gICAgICAgICAgbG9ja1NjYWxpbmdYOiB0cnVlLFxuICAgICAgICAgIGxvY2tTY2FsaW5nWTogdHJ1ZSxcbiAgICAgICAgICBsb2NrVW5pU2NhbGluZzogdHJ1ZSxcbiAgICAgICAgICBoYXNDb250cm9sczogZmFsc2UsXG4gICAgICAgICAgaGFzQm9yZGVyczogZmFsc2VcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQWRkIGltYWdlXG4gICAgICAgIGNhbnZhcy5hZGQoaW1nSW5zdGFuY2UpO1xuXG4gICAgICAgIG5leHQoaW1nSW5zdGFuY2UpO1xuICAgICAgfTtcblxuICAgICAgY2FudmFzLmFkZCh0aGlzLm9wdGlvbnMucGVuY2lsWm9uZSk7XG4gICAgICBjYW52YXMucmVuZGVyQWxsKCk7XG4gICAgICBzbmFwc2hvdC5zcmMgPSBjYW52YXMudG9EYXRhVVJMKCk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBQZW5jaWxab25lID0gZmFicmljLnV0aWwuY3JlYXRlQ2xhc3MoZmFicmljLk9iamVjdCwge1xuICAgIHR5cGU6IFwicGVuY2lsT2JqZWN0XCIsXG5cbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgdGhpcy5sZWZ0ID0gb3B0aW9ucy5sZWZ0IHx8IDA7XG4gICAgICB0aGlzLnRvcCA9IG9wdGlvbnMudG9wIHx8IDA7XG4gICAgICB0aGlzLndpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgICAgIHRoaXMuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQ7XG4gICAgICB0aGlzLm9yaWdpbmFsV2lkdGggPSB0aGlzLndpZHRoO1xuICAgICAgdGhpcy5vcmlnaW5hbEhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuICAgICAgdGhpcy5zdHJva2UgPSBvcHRpb25zLnN0cm9rZTtcbiAgICAgIHRoaXMuc2l6ZSA9IG9wdGlvbnMuc2l6ZTtcbiAgICAgIHRoaXMucGF0aCA9IG51bGw7XG4gICAgICB0aGlzLmNYID0gLXRoaXMuZ2V0V2lkdGgoKSAvIDI7XG4gICAgICB0aGlzLmNZID0gLXRoaXMuZ2V0SGVpZ2h0KCkgLyAyO1xuICAgICAgdGhpcy5jYWxsU3VwZXIoXCJpbml0aWFsaXplXCIsIG9wdGlvbnMpO1xuICAgIH0sXG5cbiAgICBfYXBwbHlTY2FsaW5nOiBmdW5jdGlvbih3LCBoKSB7XG4gICAgICBjb25zdCBzY2FsZVggPSB0aGlzLmdldFdpZHRoKCkgLyB3O1xuICAgICAgY29uc3Qgc2NhbGVZID0gdGhpcy5nZXRIZWlnaHQoKSAvIGg7XG4gICAgICB0aGlzLnNldCh7XG4gICAgICAgIHNjYWxlWDogdGhpcy5zY2FsZVggLyBzY2FsZVgsXG4gICAgICAgIHNjYWxlWTogdGhpcy5zY2FsZVkgLyBzY2FsZVlcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBfcmVuZGVyOiBmdW5jdGlvbihjdHgpIHtcbiAgICAgIHRoaXMuX2RyYXcoY3R4KTtcbiAgICB9LFxuXG4gICAgX2RyYXc6IGZ1bmN0aW9uKGN0eCkge1xuICAgICAgaWYgKGN0eCAmJiB0aGlzLnBhdGggJiYgdGhpcy5wYXRoLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY3R4LmxpbmVKb2luID0gXCJyb3VuZFwiO1xuICAgICAgICBjdHgubGluZUNhcCA9IFwicm91bmRcIjtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgubW92ZVRvKFxuICAgICAgICAgICh0aGlzLmNYICsgdGhpcy5wYXRoWzBdLngpLFxuICAgICAgICAgICh0aGlzLmNZICsgdGhpcy5wYXRoWzBdLnkpXG4gICAgICAgICk7XG5cbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLnBhdGgubGVuZ3RoOyB4ICs9IDEpIHtcbiAgICAgICAgICBjb25zdCBkcmF3WCA9ICh0aGlzLmNYICsgdGhpcy5wYXRoW3hdLngpO1xuICAgICAgICAgIGNvbnN0IGRyYXdZID0gKHRoaXMuY1kgKyB0aGlzLnBhdGhbeF0ueSk7XG4gICAgICAgICAgY3R4LmxpbmVUbyhkcmF3WCwgZHJhd1kpO1xuICAgICAgICB9XG5cblxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLnN0cm9rZTtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IHRoaXMuc2l6ZTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBjbG9uZTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbmV3IFBlbmNpbFpvbmUoe1xuICAgICAgICBzdHJva2U6IHRoaXMuc3Ryb2tlLFxuICAgICAgICBzaXplOiB0aGlzLnNpemUsXG4gICAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxuICAgICAgICBzZWxlY3RhYmxlOiBmYWxzZSxcbiAgICAgICAgbG9ja1JvdGF0aW9uOiB0cnVlLFxuICAgICAgICBldmVudGVkOiBmYWxzZSxcbiAgICAgICAgbG9ja01vdmVtZW50WDogdHJ1ZSxcbiAgICAgICAgbG9ja01vdmVtZW50WTogdHJ1ZSxcbiAgICAgICAgbG9ja1NjYWxpbmdYOiB0cnVlLFxuICAgICAgICBsb2NrU2NhbGluZ1k6IHRydWUsXG4gICAgICAgIGxvY2tVbmlTY2FsaW5nOiB0cnVlLFxuICAgICAgICBoYXNDb250cm9sczogZmFsc2UsXG4gICAgICAgIGhhc0JvcmRlcnM6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIERhcmtyb29tLnBsdWdpbnMucGVuY2lsID0gRGFya3Jvb20uUGx1Z2luLmV4dGVuZCh7XG4gICAgcGVuY2lsTW9kZTogZmFsc2UsXG4gICAgcGVuY2lsWm9uZTogbnVsbCxcbiAgICBtb3VzZURvd246IGZhbHNlLFxuICAgIHNpemU6IDMwLFxuICAgIGRlZmF1bHRzOiB7XG4gICAgICBzdHJva2U6IFwiYmxhY2tcIixcbiAgICAgIHNpemU6IDMwXG4gICAgfSxcblxuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgYnV0dG9uR3JvdXAgPSB0aGlzLmRhcmtyb29tLnRvb2xiYXIuY3JlYXRlQnV0dG9uR3JvdXAoKTtcblxuICAgICAgdGhpcy5wZW5jaWxCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xuICAgICAgICBpbWFnZTogXCJwZW5jaWxcIixcbiAgICAgICAgdG9vbHRpcDogXCJEcmF3XCJcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnBhdGggPSBbXTtcbiAgICAgIHRoaXMud2lkdGggPSB0aGlzLmRhcmtyb29tLmNhbnZhcy53aWR0aDtcbiAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5kYXJrcm9vbS5jYW52YXMuaGVpZ2h0O1xuICAgICAgdGhpcy5zaXplID0gdGhpcy5vcHRpb25zLnNpemU7XG4gICAgICB0aGlzLnN0cm9rZSA9IHRoaXMub3B0aW9ucy5zdHJva2U7XG5cbiAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLm9uKFwibW91c2U6ZG93blwiLCB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMub24oXCJtb3VzZTptb3ZlXCIsIHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbihcIm1vdXNlOnVwXCIsIHRoaXMub25Nb3VzZVVwLmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5wZW5jaWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMub25DbGljay5iaW5kKHRoaXMpKTtcbiAgICB9LFxuXG4gICAgY2xlYXI6IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMuaGFzRm9jdXMoKSkge1xuICAgICAgICB0aGlzLnJlbW92ZUZvY3VzKCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGhhc0ZvY3VzOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnBlbmNpbFpvbmUgIT09IG51bGw7XG4gICAgfSxcblxuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCF0aGlzLmhhc0ZvY3VzKCkpIHtcbiAgICAgICAgdGhpcy5yZXF1aXJlRm9jdXMoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5yZW1vdmVGb2N1cygpO1xuICAgIH0sXG5cbiAgICBvbk1vdXNlRG93bjogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGV2ZW50LmUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICghdGhpcy5oYXNGb2N1cygpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5kYXJrcm9vbS5kaXNwYXRjaEV2ZW50KFwicGVuY2lsOmJlZ2luXCIpO1xuICAgICAgdGhpcy5tb3VzZURvd24gPSB0cnVlO1xuICAgICAgdGhpcy5wYXRoLnB1c2godGhpcy5nZXRNb3VzZVBvc2l0aW9uKHRoaXMuY2FudmFzLCBldmVudCkpO1xuICAgICAgdGhpcy5yZW5kZXJab25lKCk7XG4gICAgfSxcblxuICAgIG9uTW91c2VVcDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGlmICghdGhpcy5oYXNGb2N1cygpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMubW91c2VEb3duKSB7XG4gICAgICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudChcInBlbmNpbDplbmRcIik7XG4gICAgICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IG1vdXNlUG9zID0gdGhpcy5nZXRNb3VzZVBvc2l0aW9uKHRoaXMuY2FudmFzLCBldmVudCk7XG4gICAgICAgIHRoaXMucGF0aC5wdXNoKG1vdXNlUG9zKTtcbiAgICAgICAgdGhpcy5yZW5kZXJab25lKCk7XG4gICAgICAgIHRoaXMuYXBwbHlQZW5jaWxQYXRoKCk7XG4gICAgICAgIHRoaXMucGF0aCA9IFtdO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBvbk1vdXNlTW92ZTogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGlmICghdGhpcy5oYXNGb2N1cygpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMubW91c2VEb3duKSB7XG4gICAgICAgIGNvbnN0IG1vdXNlUG9zID0gdGhpcy5nZXRNb3VzZVBvc2l0aW9uKHRoaXMuY2FudmFzLCBldmVudCk7XG4gICAgICAgIHRoaXMucGF0aC5wdXNoKG1vdXNlUG9zKTtcbiAgICAgICAgdGhpcy5yZW5kZXJab25lKCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIHJlbW92ZUZvY3VzOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudChcInBlbmNpbDpkaXNhYmxlZFwiKTtcbiAgICAgIHRoaXMucGVuY2lsQnV0dG9uLmFjdGl2ZShmYWxzZSk7XG4gICAgICB0aGlzLnBlbmNpbE1vZGUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLmRlZmF1bHRDdXJzb3IgPSBcImRlZmF1bHRcIjtcbiAgICAgIGlmICh0aGlzLnBlbmNpbFpvbmUpIHtcbiAgICAgICAgdGhpcy5wZW5jaWxab25lLnJlbW92ZSgpO1xuICAgICAgICB0aGlzLnBlbmNpbFpvbmUgPSBudWxsO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICByZXF1aXJlRm9jdXM6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kYXJrcm9vbS5jbGVhckZvY3VzKFwicGVuY2lsXCIpO1xuICAgICAgdGhpcy5kYXJrcm9vbS5kaXNwYXRjaEV2ZW50KFwicGVuY2lsOmVuYWJsZWRcIik7XG4gICAgICB0aGlzLnBlbmNpbE1vZGUgPSB0cnVlO1xuICAgICAgdGhpcy5wZW5jaWxCdXR0b24uYWN0aXZlKHRydWUpO1xuXG4gICAgICB0aGlzLnBlbmNpbFpvbmUgPSB0aGlzLm5ld1pvbmUoKTtcblxuICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMuYWRkKHRoaXMucGVuY2lsWm9uZSk7XG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5kZWZhdWx0Q3Vyc29yID0gXCJjcm9zc2hhaXJcIjtcbiAgICB9LFxuXG4gICAgZ2V0TW91c2VQb3NpdGlvbjogZnVuY3Rpb24oY2FudmFzLCBldmVudCkge1xuICAgICAgdmFyIGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xuICAgICAgY29uc3QgcmVjdCA9IGNhbnZhcy5sb3dlckNhbnZhc0VsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3QgcG9pbnRlciA9IGNhbnZhcy5nZXRQb2ludGVyKGV2ZW50LmUpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgeDogcG9pbnRlci54LFxuICAgICAgICB5OiBwb2ludGVyLnksXG4gICAgICAgIGN4OiBldmVudC5lLmNsaWVudFggLSByZWN0LmxlZnQsXG4gICAgICAgIGN5OiBldmVudC5lLmNsaWVudFkgLSByZWN0LnRvcCxcbiAgICAgICAgc3g6IGV2ZW50LmUuc2NyZWVuWCxcbiAgICAgICAgc3k6IGV2ZW50LmUuc2NyZWVuWVxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgbmV3Wm9uZTogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnBhdGggPSBbXTtcbiAgICAgIGNvbnN0IHN0cm9rZSA9IHRoaXMuc3Ryb2tlO1xuICAgICAgY29uc3Qgc2l6ZSA9IHRoaXMuc2l6ZTtcbiAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5kYXJrcm9vbS5jYW52YXMuZ2V0V2lkdGgoKTtcbiAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZGFya3Jvb20uY2FudmFzLmdldEhlaWdodCgpO1xuICAgICAgY29uc3Qgem9uZSA9IG5ldyBQZW5jaWxab25lKHtcbiAgICAgICAgc3Ryb2tlOiBzdHJva2UsXG4gICAgICAgIHNpemU6IHNpemUsXG4gICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICAgIHNlbGVjdGFibGU6IGZhbHNlLFxuICAgICAgICBsb2NrUm90YXRpb246IHRydWUsXG4gICAgICAgIGV2ZW50ZWQ6IGZhbHNlLFxuICAgICAgICBsb2NrTW92ZW1lbnRYOiB0cnVlLFxuICAgICAgICBsb2NrTW92ZW1lbnRZOiB0cnVlLFxuICAgICAgICBsb2NrU2NhbGluZ1g6IHRydWUsXG4gICAgICAgIGxvY2tTY2FsaW5nWTogdHJ1ZSxcbiAgICAgICAgbG9ja1VuaVNjYWxpbmc6IHRydWUsXG4gICAgICAgIGhhc0NvbnRyb2xzOiBmYWxzZSxcbiAgICAgICAgaGFzQm9yZGVyczogZmFsc2VcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gem9uZTtcbiAgICB9LFxuXG4gICAgYXBwbHlQZW5jaWxQYXRoOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghdGhpcy5oYXNGb2N1cygpKSB7IHJldHVybjsgfVxuXG4gICAgICAvLyBBdm9pZCBjcm9waW5nIGVtcHR5IHpvbmVcbiAgICAgIGlmICh0aGlzLnBhdGggPT09IG51bGwgfHwgdGhpcy5wYXRoLmxlbmd0aCA9PT0gMCkgeyByZXR1cm47IH1cblxuICAgICAgLy8gQXBwbHkgY3JvcCB0cmFuc2Zvcm1hdGlvbi5cbiAgICAgIC8vIE1ha2Ugc3VyZSB0byB1c2UgcmVsYXRpdmUgZGltZW5zaW9uIHNpbmNlIHRoZSBjcm9wIHdpbGwgYmUgYXBwbGllZFxuICAgICAgLy8gb24gdGhlIHNvdXJjZSBpbWFnZS5cbiAgICAgIGNvbnN0IHpvbmUgPSB0aGlzLnBlbmNpbFpvbmUuY2xvbmUoKTtcbiAgICAgIHpvbmUucGF0aCA9IHRoaXMucGF0aDtcbiAgICAgIHpvbmUubGVmdCAtPSB0aGlzLmRhcmtyb29tLm9wdGlvbnMubGVmdDtcbiAgICAgIHpvbmUudG9wIC09IHRoaXMuZGFya3Jvb20ub3B0aW9ucy50b3A7XG4gICAgICB0aGlzLmRhcmtyb29tLmFwcGx5VHJhbnNmb3JtYXRpb24obmV3IFBlbmNpbCh7XG4gICAgICAgIHBlbmNpbFpvbmU6IHpvbmVcbiAgICAgIH0pKTtcbiAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLmFkZCh0aGlzLnBlbmNpbFpvbmUpO1xuICAgIH0sXG5cbiAgICByZW5kZXJab25lOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLnBhdGggJiYgdGhpcy5wYXRoLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5kYXJrcm9vbS5kaXNwYXRjaEV2ZW50KFwicGVuY2lsOnVwZGF0ZVwiKTtcbiAgICAgICAgdGhpcy5wZW5jaWxab25lLnBhdGggPSB0aGlzLnBhdGg7XG4gICAgICB9XG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5icmluZ1RvRnJvbnQodGhpcy5wZW5jaWxab25lKTtcbiAgICB9XG5cbiAgfSk7XG59KCkpO1xuIiwiKGZ1bmN0aW9uICgpIHtcbiAgbGV0IHJlY3Q7XG4gIGxldCBpc0Rvd247XG4gIGxldCBvcmlnWDtcbiAgbGV0IG9yaWdZO1xuICBsZXQgaGFzRm9jdXMgPSB0cnVlO1xuXG4gIGZhYnJpYy5JbWFnZS5wcm90b3R5cGUuc3Ryb2tlV2lkdGggPSAwO1xuICBjb25zdCBSZWN0YW5nbGVUcmFuc2Zvcm1hdGlvbiA9IERhcmtyb29tLlRyYW5zZm9ybWF0aW9uLmV4dGVuZCh7XG4gICAgYXBwbHlUcmFuc2Zvcm1hdGlvbjogZnVuY3Rpb24oY2FudmFzLCBpbWFnZSwgbmV4dCkge1xuICAgICAgY29uc3Qgc25hcHNob3QgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIHNuYXBzaG90Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaGVpZ2h0IDwgMSB8fCB0aGlzLndpZHRoIDwgMSkgeyByZXR1cm47IH1cbiAgICAgICAgY29uc3QgaW1nSW5zdGFuY2UgPSBuZXcgZmFicmljLkltYWdlKHRoaXMsIHtcbiAgICAgICAgICAvLyBvcHRpb25zIHRvIG1ha2UgdGhlIGltYWdlIHN0YXRpY1xuICAgICAgICAgIHNlbGVjdGFibGU6IGZhbHNlLFxuICAgICAgICAgIGV2ZW50ZWQ6IGZhbHNlLFxuICAgICAgICAgIGxvY2tNb3ZlbWVudFg6IHRydWUsXG4gICAgICAgICAgbG9ja01vdmVtZW50WTogdHJ1ZSxcbiAgICAgICAgICBsb2NrUm90YXRpb246IHRydWUsXG4gICAgICAgICAgbG9ja1NjYWxpbmdYOiB0cnVlLFxuICAgICAgICAgIGxvY2tTY2FsaW5nWTogdHJ1ZSxcbiAgICAgICAgICBsb2NrVW5pU2NhbGluZzogdHJ1ZSxcbiAgICAgICAgICBoYXNDb250cm9sczogZmFsc2UsXG4gICAgICAgICAgaGFzQm9yZGVyczogZmFsc2VcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQWRkIGltYWdlXG4gICAgICAgIGNhbnZhcy5hZGQoaW1nSW5zdGFuY2UpO1xuXG4gICAgICAgIG5leHQoaW1nSW5zdGFuY2UpO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgbmV3UmVjdCA9IHRoaXMub3B0aW9ucy5yZWN0YW5nbGU7XG4gICAgICBjb25zdCBzY2FsZVggPSB0aGlzLm9wdGlvbnMub3JpZ2luYWxXaWR0aCAvIGNhbnZhcy5nZXRXaWR0aCgpO1xuICAgICAgY29uc3Qgc2NhbGVZID0gdGhpcy5vcHRpb25zLm9yaWdpbmFsSGVpZ2h0IC8gY2FudmFzLmdldEhlaWdodCgpO1xuICAgICAgbmV3UmVjdC5zZXQoeyBzY2FsZVg6IDEgLyBzY2FsZVgsIHNjYWxlWTogMSAvIHNjYWxlWSB9KTtcbiAgICAgIGNhbnZhcy5hZGQobmV3UmVjdCk7XG4gICAgICBjYW52YXMucmVuZGVyQWxsKCk7XG4gICAgICBzbmFwc2hvdC5zcmMgPSBjYW52YXMudG9EYXRhVVJMKCk7XG4gICAgfVxuICB9KTtcblxuICBEYXJrcm9vbS5wbHVnaW5zLnJlY3RhbmdsZSA9IERhcmtyb29tLlBsdWdpbi5leHRlbmQoe1xuICAgIHJlY3RhbmdsZVpvbmU6IG51bGwsXG5cbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IGJ1dHRvbkdyb3VwID0gdGhpcy5kYXJrcm9vbS50b29sYmFyLmNyZWF0ZUJ1dHRvbkdyb3VwKCk7XG5cbiAgICAgIHRoaXMucmVjdGFuZ2xlQnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcbiAgICAgICAgaW1hZ2U6IFwicmVjdGFuZ2xlXCIsXG4gICAgICAgIHRvb2x0aXA6IFwiRHJhd1wiXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMub24oXCJtb3VzZTpkb3duXCIsIHRoaXMub25Nb3VzZURvd24uYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbihcIm1vdXNlOm1vdmVcIiwgdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLm9uKFwibW91c2U6dXBcIiwgdGhpcy5oYW5kbGVNb3VzZVVwLmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5yZWN0YW5nbGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMub25DbGljay5iaW5kKHRoaXMpKTtcbiAgICB9LFxuXG4gICAgY2xlYXI6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5yZWN0YW5nbGVCdXR0b24uYWN0aXZlKGZhbHNlKTtcbiAgICAgIGhhc0ZvY3VzID0gdHJ1ZTtcbiAgICAgIGlzRG93biA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICBvbkNsaWNrOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghaGFzRm9jdXMpIHtcbiAgICAgICAgdGhpcy5yZWN0YW5nbGVCdXR0b24uYWN0aXZlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMuZGVmYXVsdEN1cnNvciA9IFwiZGVmYXVsdFwiO1xuICAgICAgICBoYXNGb2N1cyA9IHRydWU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGFya3Jvb20uY2xlYXJGb2N1cyhcInJlY3RhbmdsZVwiKTtcbiAgICAgIHRoaXMucmVjdGFuZ2xlQnV0dG9uLmFjdGl2ZSh0cnVlKTtcbiAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLmRlZmF1bHRDdXJzb3IgPSBcImNyb3NzaGFpclwiO1xuICAgICAgaGFzRm9jdXMgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgb25Nb3VzZURvd246IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBldmVudC5lLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAoaGFzRm9jdXMpIHJldHVybjtcbiAgICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudChcInJlY3RhbmdsZTpiZWdpblwiKTtcbiAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xuICAgICAgaXNEb3duID0gdHJ1ZTtcbiAgICAgIGNvbnN0IHBvaW50ZXIgPSBjYW52YXMuZ2V0UG9pbnRlcihldmVudC5lKTtcbiAgICAgIG9yaWdYID0gcG9pbnRlci54O1xuICAgICAgb3JpZ1kgPSBwb2ludGVyLnk7XG4gICAgICByZWN0ID0gbmV3IGZhYnJpYy5SZWN0KHtcbiAgICAgICAgbGVmdDogb3JpZ1gsXG4gICAgICAgIHRvcDogb3JpZ1ksXG4gICAgICAgIG9yaWdpblg6IFwibGVmdFwiLFxuICAgICAgICBvcmlnaW5ZOiBcInRvcFwiLFxuICAgICAgICB3aWR0aDogcG9pbnRlci54IC0gb3JpZ1gsXG4gICAgICAgIGhlaWdodDogcG9pbnRlci55IC0gb3JpZ1ksXG4gICAgICAgIGFuZ2xlOiAwLFxuICAgICAgICBmaWxsOiBcImJsYWNrXCIsXG4gICAgICAgIHRyYW5zcGFyZW50Q29ybmVyczogZmFsc2VcbiAgICAgIH0pO1xuICAgICAgY2FudmFzLmFkZChyZWN0KTtcbiAgICB9LFxuXG4gICAgb25Nb3VzZU1vdmU6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBpZiAoaXNEb3duKSB7XG4gICAgICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudChcInJlY3RhbmdsZTp1cGRhdGVcIik7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xuICAgICAgICBjb25zdCBwb2ludGVyID0gY2FudmFzLmdldFBvaW50ZXIoZXZlbnQuZSk7XG5cbiAgICAgICAgaWYgKG9yaWdYID4gcG9pbnRlci54KSB7XG4gICAgICAgICAgcmVjdC5zZXQoe1xuICAgICAgICAgICAgbGVmdDogTWF0aC5hYnMocG9pbnRlci54KVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcmlnWSA+IHBvaW50ZXIueSkge1xuICAgICAgICAgIHJlY3Quc2V0KHtcbiAgICAgICAgICAgIHRvcDogTWF0aC5hYnMocG9pbnRlci55KVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVjdC5zZXQoe1xuICAgICAgICAgIHdpZHRoOiBNYXRoLmFicyhvcmlnWCAtIHBvaW50ZXIueClcbiAgICAgICAgfSk7XG4gICAgICAgIHJlY3Quc2V0KHtcbiAgICAgICAgICBoZWlnaHQ6IE1hdGguYWJzKG9yaWdZIC0gcG9pbnRlci55KVxuICAgICAgICB9KTtcbiAgICAgICAgY2FudmFzLnJlbmRlckFsbCgpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBoYW5kbGVNb3VzZVVwOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChoYXNGb2N1cykgcmV0dXJuO1xuICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XG4gICAgICBpc0Rvd24gPSBmYWxzZTtcbiAgICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudChcInJlY3RhbmdsZTplbmRcIik7XG4gICAgICByZWN0LmxlZnQgLT0gdGhpcy5kYXJrcm9vbS5vcHRpb25zLmxlZnQ7XG4gICAgICByZWN0LnRvcCAtPSB0aGlzLmRhcmtyb29tLm9wdGlvbnMudG9wO1xuICAgICAgdGhpcy5kYXJrcm9vbS5hcHBseVRyYW5zZm9ybWF0aW9uKG5ldyBSZWN0YW5nbGVUcmFuc2Zvcm1hdGlvbih7XG4gICAgICAgIG9yaWdpbmFsV2lkdGg6IGNhbnZhcy5nZXRXaWR0aCgpLFxuICAgICAgICBvcmlnaW5hbEhlaWdodDogY2FudmFzLmdldEhlaWdodCgpLFxuICAgICAgICByZWN0YW5nbGU6IHJlY3RcbiAgICAgIH0pKTtcbiAgICB9XG4gIH0pO1xufSgpKTtcbiIsIihmdW5jdGlvbiAoKSB7XG4gIGxldCBoYXNGb2N1cyA9IGZhbHNlO1xuXG4gIGZhYnJpYy5JbWFnZS5wcm90b3R5cGUuc3Ryb2tlV2lkdGggPSAwO1xuICBjb25zdCBUZXh0ID0gRGFya3Jvb20uVHJhbnNmb3JtYXRpb24uZXh0ZW5kKHtcbiAgICBhcHBseVRyYW5zZm9ybWF0aW9uOiBmdW5jdGlvbihjYW52YXMsIGltYWdlLCBuZXh0KSB7XG4gICAgICBjb25zdCBzbmFwc2hvdCA9IG5ldyBJbWFnZSgpO1xuICAgICAgc25hcHNob3Qub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBWYWxpZGF0ZSBpbWFnZVxuICAgICAgICBpZiAodGhpcy5oZWlnaHQgPCAxIHx8IHRoaXMud2lkdGggPCAxKSB7IHJldHVybjsgfVxuXG4gICAgICAgIGNvbnN0IGltZ0luc3RhbmNlID0gbmV3IGZhYnJpYy5JbWFnZSh0aGlzLCB7XG4gICAgICAgICAgLy8gb3B0aW9ucyB0byBtYWtlIHRoZSBpbWFnZSBzdGF0aWNcbiAgICAgICAgICBzZWxlY3RhYmxlOiBmYWxzZSxcbiAgICAgICAgICBldmVudGVkOiBmYWxzZSxcbiAgICAgICAgICBsb2NrTW92ZW1lbnRYOiB0cnVlLFxuICAgICAgICAgIGxvY2tNb3ZlbWVudFk6IHRydWUsXG4gICAgICAgICAgbG9ja1JvdGF0aW9uOiB0cnVlLFxuICAgICAgICAgIGxvY2tTY2FsaW5nWDogdHJ1ZSxcbiAgICAgICAgICBsb2NrU2NhbGluZ1k6IHRydWUsXG4gICAgICAgICAgbG9ja1VuaVNjYWxpbmc6IHRydWUsXG4gICAgICAgICAgaGFzQ29udHJvbHM6IGZhbHNlLFxuICAgICAgICAgIGhhc0JvcmRlcnM6IGZhbHNlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEFkZCBpbWFnZVxuICAgICAgICBjYW52YXMuYWRkKGltZ0luc3RhbmNlKTtcblxuICAgICAgICBuZXh0KGltZ0luc3RhbmNlKTtcbiAgICAgIH07XG5cbiAgICAgIGNhbnZhcy5hZGQodGhpcy5vcHRpb25zLnRleHQpO1xuICAgICAgY2FudmFzLnJlbmRlckFsbCgpO1xuICAgICAgc25hcHNob3Quc3JjID0gY2FudmFzLnRvRGF0YVVSTCgpO1xuICAgIH1cbiAgfSk7XG4gIERhcmtyb29tLnBsdWdpbnMudGV4dCA9IERhcmtyb29tLlBsdWdpbi5leHRlbmQoe1xuICAgIGRlZmF1bHRzOiB7XG4gICAgICB0ZXh0OiBcIlNhbXBsZSBUZXh0Li4uXCJcbiAgICB9LFxuXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCBidXR0b25Hcm91cCA9IHRoaXMuZGFya3Jvb20udG9vbGJhci5jcmVhdGVCdXR0b25Hcm91cCgpO1xuXG4gICAgICB0aGlzLnRleHRCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xuICAgICAgICBpbWFnZTogXCJ0ZXh0XCIsXG4gICAgICAgIHRpdGxlOiBcIkFkZCBUZXh0XCJcbiAgICAgIH0pO1xuICAgICAgdGhpcy5va0J1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XG4gICAgICAgIGltYWdlOiBcImRvbmVcIixcbiAgICAgICAgdHlwZTogXCJzdWNjZXNzXCIsXG4gICAgICAgIGhpZGU6IHRydWVcbiAgICAgIH0pO1xuICAgICAgdGhpcy5jYW5jZWxCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xuICAgICAgICBpbWFnZTogXCJjbG9zZVwiLFxuICAgICAgICB0eXBlOiBcImRhbmdlclwiLFxuICAgICAgICBoaWRlOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIHRoaXMuY29sb3JQaWNrZXIgPSBidXR0b25Hcm91cC5jcmVhdGVJbnB1dCh7XG4gICAgICAgIGltYWdlOiBcImNvbG9yXCIsXG4gICAgICAgIHRpdGxlOiBcIkNvbG9yIFBpY2tlclwiLFxuICAgICAgICB2YWx1ZTogXCIjZmYwMDAwXCIsXG4gICAgICAgIGhpZGU6IHRydWVcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnRleHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuYWRkVGV4dC5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMub2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuc2F2ZVRleHQuYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLmNvbG9yUGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgdGhpcy5zZXRDb2xvci5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMuY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnJlbGVhc2VGb2N1cy5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLm9uKFwibW91c2U6ZG93blwiLCB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMub24oXCJtb3VzZTptb3ZlXCIsIHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbihcIm1vdXNlOnVwXCIsIHRoaXMuaGFuZGxlTW91c2VVcC5iaW5kKHRoaXMpKTtcblxuICAgICAgdGhpcy5kYXJrcm9vbS5hZGRFdmVudExpc3RlbmVyKFwiY29yZTp0cmFuc2Zvcm1hdGlvblwiLCB0aGlzLnJlbGVhc2VGb2N1cy5iaW5kKHRoaXMpKTtcbiAgICB9LFxuXG4gICAgY2xlYXI6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy50ZXh0QnV0dG9uLmFjdGl2ZShmYWxzZSk7XG4gICAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoXCJ0ZXh0OmVuZFwiKTtcbiAgICAgIHRoaXMudGV4dEJ1dHRvbi5hY3RpdmUoZmFsc2UpO1xuICAgICAgdGhpcy5va0J1dHRvbi5oaWRlKHRydWUpO1xuICAgICAgdGhpcy5jYW5jZWxCdXR0b24uaGlkZSh0cnVlKTtcbiAgICAgIHRoaXMuY29sb3JQaWNrZXIuaGlkZSh0cnVlKTtcbiAgICAgIGlmICh0aGlzLm5ld1RleHQpIHtcbiAgICAgICAgdGhpcy5uZXdUZXh0LnJlbW92ZSgpO1xuICAgICAgfVxuICAgICAgaGFzRm9jdXMgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgYWRkVGV4dDogZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoaGFzRm9jdXMpIHtcbiAgICAgICAgdGhpcy5yZWxlYXNlRm9jdXMoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaGFzRm9jdXMgPSB0cnVlO1xuICAgICAgdGhpcy5kYXJrcm9vbS5jbGVhckZvY3VzKFwidGV4dFwiKTtcblxuICAgICAgdGhpcy50ZXh0QnV0dG9uLmFjdGl2ZSh0cnVlKTtcbiAgICAgIHRoaXMub2tCdXR0b24uaGlkZShmYWxzZSk7XG4gICAgICB0aGlzLmNhbmNlbEJ1dHRvbi5oaWRlKGZhbHNlKTtcbiAgICAgIHRoaXMuY29sb3JQaWNrZXIuaGlkZShmYWxzZSk7XG5cbiAgICAgIGNvbnN0IGZhY3RvciA9IHRoaXMuZGFya3Jvb20uaW1hZ2Uuc2NhbGVYO1xuICAgICAgY29uc3QgdGV4dCA9IG5ldyBmYWJyaWMuSVRleHQodGhpcy5vcHRpb25zLnRleHQsIHtcbiAgICAgICAgbGVmdDogMTAwICogZmFjdG9yLFxuICAgICAgICB0b3A6IDEwMCAqIGZhY3RvcixcbiAgICAgICAgZmlsbDogXCJyZWRcIixcbiAgICAgICAgZm9udEZhbWlseTogXCJNb25vc3BhY2VcIixcbiAgICAgICAgZm9udFNpemU6IDI1LFxuICAgICAgICBsb2NrU2tld2luZ1g6IHRydWUsXG4gICAgICAgIGxvY2tTa2V3aW5nWTogdHJ1ZSxcbiAgICAgICAgc2NhbGVYOiBmYWN0b3IsXG4gICAgICAgIHNjYWxlWTogZmFjdG9yLFxuICAgICAgICBwYWRkaW5nOiAxMFxuICAgICAgfSk7XG5cbiAgICAgIHRleHQub24odGhpcy5pbWFnZSA9IHRoaXMuZGFya3Jvb20uaW1hZ2UsIHtcbiAgICAgICAgc2NhbGluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdGhpcy5mYWN0b3IgPSB0aGlzLmltYWdlLnNjYWxlWDtcblxuICAgICAgICAgIGNvbnN0IG9iaiA9IHRoaXM7XG4gICAgICAgICAgY29uc3QgdyA9IG9iai53aWR0aCAqIG9iai5zY2FsZVggLyBmYWN0b3I7XG4gICAgICAgICAgY29uc3QgaCA9IG9iai5oZWlnaHQgKiBvYmouc2NhbGVZIC8gZmFjdG9yO1xuXG4gICAgICAgICAgb2JqLnNldCh7XG4gICAgICAgICAgICB3aWR0aDogdyxcbiAgICAgICAgICAgIGhlaWdodDogaCxcbiAgICAgICAgICAgIHNjYWxlWDogZmFjdG9yLFxuICAgICAgICAgICAgc2NhbGVZOiBmYWN0b3JcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLmFkZCh0ZXh0KTtcbiAgICAgIHRoaXMubmV3VGV4dCA9IHRleHQ7XG4gICAgfSxcblxuICAgIHNldENvbG9yOiBmdW5jdGlvbihldmVudCkge1xuICAgICAgdGhpcy5zZXRTdHlsZSh0aGlzLCBcImZpbGxcIiwgZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9LFxuXG4gICAgc2V0U3R5bGU6IGZ1bmN0aW9uKG9iamVjdCwgc3R5bGVOYW1lLCB2YWx1ZSkge1xuICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XG4gICAgICBvYmplY3QubmV3VGV4dC5maWxsID0gdmFsdWU7XG4gICAgICBjYW52YXMucmVuZGVyQWxsKCk7XG4gICAgfSxcblxuICAgIHNhdmVUZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMub2tCdXR0b24uaGlkZSh0cnVlKTtcbiAgICAgIHRoaXMuY2FuY2VsQnV0dG9uLmhpZGUodHJ1ZSk7XG4gICAgICB0aGlzLmNvbG9yUGlja2VyLmhpZGUodHJ1ZSk7XG4gICAgICB0aGlzLnRleHRCdXR0b24uYWN0aXZlKGZhbHNlKTtcbiAgICAgIHRoaXMubmV3VGV4dC5oYXNCb3JkZXJzID0gZmFsc2U7XG4gICAgICB0aGlzLm5ld1RleHQuaGFzQ29udHJvbHMgPSBmYWxzZTtcbiAgICAgIHRoaXMubmV3VGV4dC5oYXNSb3RhdGluZ1BvaW50ID0gZmFsc2U7XG4gICAgICB0aGlzLm5ld1RleHQuc2VsZWN0aW9uQ29sb3IgPSBcInRyYW5zcGFyZW50XCI7XG4gICAgICB0aGlzLm5ld1RleHQuYWJvcnRDdXJzb3JBbmltYXRpb24oKTtcbiAgICAgIHRoaXMubmV3VGV4dC5sZWZ0IC09IHRoaXMuZGFya3Jvb20ub3B0aW9ucy5sZWZ0O1xuICAgICAgdGhpcy5uZXdUZXh0LnRvcCAtPSB0aGlzLmRhcmtyb29tLm9wdGlvbnMudG9wO1xuICAgICAgdGhpcy5kYXJrcm9vbS5hcHBseVRyYW5zZm9ybWF0aW9uKG5ldyBUZXh0KHtcbiAgICAgICAgdGV4dDogdGhpcy5uZXdUZXh0XG4gICAgICB9KSk7XG4gICAgICB0aGlzLmNvbG9yUGlja2VyLmVsZW1lbnQudmFsdWUgPSBcIiNmZjAwMDBcIjtcbiAgICB9LFxuXG4gICAgb25Nb3VzZURvd246IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCF0aGlzLm5ld1RleHQpIHsgcmV0dXJuOyB9XG4gICAgICBpZiAodGhpcy5uZXdUZXh0LmFjdGl2ZSkge1xuICAgICAgICB0aGlzLmlzRG93biA9IHRydWU7XG4gICAgICB9XG4gICAgfSxcblxuICAgIG9uTW91c2VNb3ZlOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghdGhpcy5pc0Rvd24pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XG4gICAgICBjYW52YXMucmVuZGVyQWxsKCk7XG4gICAgfSxcblxuICAgIGhhbmRsZU1vdXNlVXA6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5pc0Rvd24gPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgcmVsZWFzZUZvY3VzOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLm5ld1RleHQpIHsgdGhpcy5uZXdUZXh0LnJlbW92ZSgpOyB9XG5cbiAgICAgIHRoaXMudGV4dEJ1dHRvbi5hY3RpdmUoZmFsc2UpO1xuICAgICAgdGhpcy5va0J1dHRvbi5oaWRlKHRydWUpO1xuICAgICAgdGhpcy5jYW5jZWxCdXR0b24uaGlkZSh0cnVlKTtcbiAgICAgIHRoaXMuY29sb3JQaWNrZXIuaGlkZSh0cnVlKTtcbiAgICAgIHRoaXMuY29sb3JQaWNrZXIuZWxlbWVudC52YWx1ZSA9IFwiI2ZmMDAwMFwiO1xuICAgICAgaGFzRm9jdXMgPSBmYWxzZTtcbiAgICB9XG4gIH0pO1xufSgpKTtcbiIsIihmdW5jdGlvbiAoKSB7XG4gIGxldCBlbGxpcDtcbiAgbGV0IGlzRG93biA9IGZhbHNlO1xuICBsZXQgb3JpZ1g7XG4gIGxldCBvcmlnWTtcbiAgbGV0IGhhc0ZvY3VzID0gdHJ1ZTtcblxuICBmYWJyaWMuSW1hZ2UucHJvdG90eXBlLnN0cm9rZVdpZHRoID0gMDtcbiAgY29uc3QgQ2lyY2xlID0gRGFya3Jvb20uVHJhbnNmb3JtYXRpb24uZXh0ZW5kKHtcbiAgICBhcHBseVRyYW5zZm9ybWF0aW9uOiBmdW5jdGlvbihjYW52YXMsIGltYWdlLCBuZXh0KSB7XG4gICAgICBjb25zdCBzbmFwc2hvdCA9IG5ldyBJbWFnZSgpO1xuICAgICAgc25hcHNob3Qub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBWYWxpZGF0ZSBpbWFnZVxuICAgICAgICBpZiAodGhpcy5oZWlnaHQgPCAxIHx8IHRoaXMud2lkdGggPCAxKSB7IHJldHVybjsgfVxuXG4gICAgICAgIGNvbnN0IGltZ0luc3RhbmNlID0gbmV3IGZhYnJpYy5JbWFnZSh0aGlzLCB7XG4gICAgICAgICAgLy8gb3B0aW9ucyB0byBtYWtlIHRoZSBpbWFnZSBzdGF0aWNcbiAgICAgICAgICBzZWxlY3RhYmxlOiBmYWxzZSxcbiAgICAgICAgICBldmVudGVkOiBmYWxzZSxcbiAgICAgICAgICBsb2NrTW92ZW1lbnRYOiB0cnVlLFxuICAgICAgICAgIGxvY2tNb3ZlbWVudFk6IHRydWUsXG4gICAgICAgICAgbG9ja1JvdGF0aW9uOiB0cnVlLFxuICAgICAgICAgIGxvY2tTY2FsaW5nWDogdHJ1ZSxcbiAgICAgICAgICBsb2NrU2NhbGluZ1k6IHRydWUsXG4gICAgICAgICAgbG9ja1VuaVNjYWxpbmc6IHRydWUsXG4gICAgICAgICAgaGFzQ29udHJvbHM6IGZhbHNlLFxuICAgICAgICAgIGhhc0JvcmRlcnM6IGZhbHNlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEFkZCBpbWFnZVxuICAgICAgICBjYW52YXMuYWRkKGltZ0luc3RhbmNlKTtcblxuICAgICAgICBuZXh0OihpbWdJbnN0YW5jZSk7XG4gICAgICB9O1xuXG4gICAgICBjYW52YXMuYWRkKHRoaXMub3B0aW9ucy5jaXJjbGUpO1xuICAgICAgY2FudmFzLnJlbmRlckFsbCgpO1xuICAgICAgc25hcHNob3Quc3JjID0gY2FudmFzLnRvRGF0YVVSTCgpO1xuICAgIH1cbiAgfSk7XG5cbiAgRGFya3Jvb20ucGx1Z2lucy5jaXJjbGUgPSBEYXJrcm9vbS5QbHVnaW4uZXh0ZW5kKHtcblxuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgYnV0dG9uR3JvdXAgPSB0aGlzLmRhcmtyb29tLnRvb2xiYXIuY3JlYXRlQnV0dG9uR3JvdXAoKTtcblxuICAgICAgdGhpcy5jaXJjbGVCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xuICAgICAgICBpbWFnZTogXCJjaXJjbGVcIixcbiAgICAgICAgdG9vbHRpcDogXCJjaXJjbGVcIlxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLm9uKFwibW91c2U6ZG93blwiLCB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMub24oXCJtb3VzZTptb3ZlXCIsIHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbihcIm1vdXNlOnVwXCIsIHRoaXMuaGFuZGxlTW91c2VVcC5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMuY2lyY2xlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgfSxcblxuICAgIGNsZWFyOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuY2lyY2xlQnV0dG9uLmFjdGl2ZShmYWxzZSk7XG4gICAgICBoYXNGb2N1cyA9IHRydWU7XG4gICAgICBpc0Rvd24gPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgb25DbGljazogZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIWhhc0ZvY3VzKSB7XG4gICAgICAgIHRoaXMuY2lyY2xlQnV0dG9uLmFjdGl2ZShmYWxzZSk7XG4gICAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLmRlZmF1bHRDdXJzb3IgPSBcImRlZmF1bHRcIjtcbiAgICAgICAgaGFzRm9jdXMgPSB0cnVlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmRhcmtyb29tLmNsZWFyRm9jdXMoXCJjaXJjbGVcIik7XG4gICAgICB0aGlzLmNpcmNsZUJ1dHRvbi5hY3RpdmUodHJ1ZSk7XG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5kZWZhdWx0Q3Vyc29yID0gXCJjcm9zc2hhaXJcIjtcbiAgICAgIGhhc0ZvY3VzID0gZmFsc2U7XG4gICAgfSxcblxuICAgIG9uTW91c2VEb3duOiBmdW5jdGlvbihldmVudCkge1xuICAgICAgZXZlbnQuZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5pc0Rvd24gPSB0cnVlO1xuICAgICAgaWYgKGhhc0ZvY3VzKSByZXR1cm47XG4gICAgICBjb25zdCBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcbiAgICAgIGlzRG93biA9IHRydWU7XG4gICAgICBjb25zdCBwb2ludGVyID0gY2FudmFzLmdldFBvaW50ZXIoZXZlbnQuZSk7XG4gICAgICBvcmlnWCA9IHBvaW50ZXIueDtcbiAgICAgIG9yaWdZID0gcG9pbnRlci55O1xuICAgICAgZWxsaXAgPSBuZXcgZmFicmljLkVsbGlwc2Uoe1xuICAgICAgICBsZWZ0OiBwb2ludGVyLngsXG4gICAgICAgIHRvcDogcG9pbnRlci55LFxuICAgICAgICBzdHJva2U6IFwiYmxhY2tcIixcbiAgICAgICAgZmlsbDogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICBzdHJva2VXaWR0aDogXCI0XCIsXG4gICAgICAgIHJ4OiAwLFxuICAgICAgICByeTogMFxuICAgICAgfSk7XG4gICAgICBjYW52YXMuYWRkKGVsbGlwKTtcbiAgICB9LFxuXG4gICAgb25Nb3VzZU1vdmU6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBpZiAoIXRoaXMuaXNEb3duKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChpc0Rvd24gJiYgZWxsaXApIHtcbiAgICAgICAgdGhpcy5kYXJrcm9vbS5kaXNwYXRjaEV2ZW50KFwiY2lyY2xlOnVwZGF0ZVwiKTtcbiAgICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XG4gICAgICAgIGNvbnN0IHBvaW50ZXIgPSBjYW52YXMuZ2V0UG9pbnRlcihldmVudC5lKTtcblxuICAgICAgICBpZiAob3JpZ1ggPiBwb2ludGVyLngpIHtcbiAgICAgICAgICBlbGxpcC5zZXQoe1xuICAgICAgICAgICAgbGVmdDogTWF0aC5hYnMocG9pbnRlci54KVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9yaWdZID4gcG9pbnRlci55KSB7XG4gICAgICAgICAgZWxsaXAuc2V0KHtcbiAgICAgICAgICAgIHRvcDogTWF0aC5hYnMocG9pbnRlci55KVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxsaXAuc2V0KHtcbiAgICAgICAgICByeDogTWF0aC5hYnMob3JpZ1ggLSBwb2ludGVyLngpIC8gMlxuICAgICAgICB9KTtcbiAgICAgICAgZWxsaXAuc2V0KHtcbiAgICAgICAgICByeTogTWF0aC5hYnMob3JpZ1kgLSBwb2ludGVyLnkpIC8gMlxuICAgICAgICB9KTtcblxuICAgICAgICBlbGxpcC5zZXRDb29yZHMoKTtcbiAgICAgICAgY2FudmFzLnJlbmRlckFsbCgpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBoYW5kbGVNb3VzZVVwOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChoYXNGb2N1cykgeyByZXR1cm47IH1cbiAgICAgIHRoaXMuaXNEb3duID0gZmFsc2U7XG4gICAgICBlbGxpcC5sZWZ0IC09IHRoaXMuZGFya3Jvb20ub3B0aW9ucy5sZWZ0O1xuICAgICAgZWxsaXAudG9wIC09IHRoaXMuZGFya3Jvb20ub3B0aW9ucy50b3A7XG4gICAgICB0aGlzLmRhcmtyb29tLmFwcGx5VHJhbnNmb3JtYXRpb24obmV3IENpcmNsZSh7XG4gICAgICAgIGNpcmNsZTogZWxsaXBcbiAgICAgIH0pKTtcbiAgICB9XG4gIH0pO1xufSgpKTtcbiIsIihmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IG1heFpvb20gPSAyO1xuICBsZXQgbWluWm9vbTtcbiAgY29uc3Qgc3RhdGVzID0ge1xuICAgIHBhbkFjdGl2ZTogZmFsc2UsXG4gICAgcGFubmluZzogZmFsc2UsXG4gICAgcmVhbFBhbjogbnVsbFxuICB9O1xuICBsZXQgb3JpZ1g7XG4gIGxldCBvcmlnWTtcblxuICBmYWJyaWMuSW1hZ2UucHJvdG90eXBlLnN0cm9rZVdpZHRoID0gMDtcbiAgRGFya3Jvb20ucGx1Z2lucy56b29tID0gRGFya3Jvb20uUGx1Z2luLmV4dGVuZCh7XG5cbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IGJ1dHRvbkdyb3VwID0gdGhpcy5kYXJrcm9vbS50b29sYmFyLmNyZWF0ZUJ1dHRvbkdyb3VwKCk7XG5cbiAgICAgIHRoaXMuem9vbUluQnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcbiAgICAgICAgaW1hZ2U6IFwiem9vbS1pblwiLFxuICAgICAgICB0aXRsZTogXCJ6b29tIGluXCJcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnpvb21PdXRCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xuICAgICAgICBpbWFnZTogXCJ6b29tLW91dFwiLFxuICAgICAgICB0aXRsZTogXCJ6b29tIG91dFwiLFxuICAgICAgICBkaXNhYmxlZDogdHJ1ZVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMucGFuID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcbiAgICAgICAgaW1hZ2U6IFwiaGFuZFwiLFxuICAgICAgICBkaXNhYmxlZDogdHJ1ZVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuem9vbUluQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnpvb21Jbi5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMuem9vbU91dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy56b29tT3V0LmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5wYW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMub25QYW4uYmluZCh0aGlzKSk7XG4gICAgICBtaW5ab29tID0gdGhpcy5kYXJrcm9vbS5jYW52YXMuZ2V0Wm9vbSgpO1xuICAgIH0sXG5cbiAgICBjbGVhcjogZnVuY3Rpb24oKSB7XG4gICAgICBzdGF0ZXMucGFuQWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLnBhbi5hY3RpdmUoZmFsc2UpO1xuICAgICAgc3RhdGVzLnBhbm5pbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLmRlZmF1bHRDdXJzb3IgPSBcImRlZmF1bHRcIjtcbiAgICAgIHRoaXMucmVzdG9yZVpvb21QYW4oKTtcbiAgICB9LFxuXG4gICAgb25QYW46IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIHN0YXRlcy5wYW5BY3RpdmUpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kYXJrcm9vbS5jbGVhckZvY3VzKFwiem9vbVwiKTtcbiAgICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XG4gICAgICAgIGNhbnZhcy5vbihcIm1vdXNlOmRvd25cIiwgdGhpcy5wYW5FbnRlci5iaW5kKHRoaXMpKTtcbiAgICAgICAgY2FudmFzLm9uKFwibW91c2U6dXBcIiwgdGhpcy5wYW5FeGl0LmJpbmQodGhpcykpO1xuICAgICAgICBjYW52YXMub24oXCJtb3VzZTptb3ZlXCIsIHRoaXMuX3Bhbi5iaW5kKHRoaXMpKTtcbiAgICAgICAgY2FudmFzLmRlZmF1bHRDdXJzb3IgPSBcIm1vdmVcIjtcbiAgICAgICAgc3RhdGVzLnBhbkFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMucGFuLmFjdGl2ZSh0cnVlKTtcbiAgICAgIH1cbiAgICB9LFxuXG5cbiAgICBwYW5FbnRlcjogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGlmIChzdGF0ZXMucGFuQWN0aXZlKSB7XG4gICAgICAgIHN0YXRlcy5wYW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgb3JpZ1ggPSBldmVudC5lLnNjcmVlblggfHwgZXZlbnQuZS50b3VjaGVzWzBdLnNjcmVlblg7XG4gICAgICAgIG9yaWdZID0gZXZlbnQuZS5zY3JlZW5ZIHx8IGV2ZW50LmUudG91Y2hlc1swXS5zY3JlZW5ZO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBfcGFuOiBmdW5jdGlvbihldmVudCkge1xuICAgICAgZXZlbnQuZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XG4gICAgICBpZiAoc3RhdGVzLnBhbm5pbmcgJiYgZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmUudG91Y2hlcykge1xuICAgICAgICAgIGNvbnN0IHRvdWNoZXMgPSBldmVudC5lLnRvdWNoZXM7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3VjaGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBjb25zdCBkZWx0YSA9IHtcbiAgICAgICAgICAgICAgeDogKHRvdWNoZXNbaV0uc2NyZWVuWCAtIG9yaWdYKSxcbiAgICAgICAgICAgICAgeTogKHRvdWNoZXNbaV0uc2NyZWVuWSAtIG9yaWdZKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG9yaWdYID0gdG91Y2hlc1tpXS5zY3JlZW5YO1xuICAgICAgICAgICAgb3JpZ1kgPSB0b3VjaGVzW2ldLnNjcmVlblk7XG4gICAgICAgICAgICB0aGlzLmRvUGFuKGRlbHRhKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgZGVsdGEgPSB7XG4gICAgICAgICAgICB4OiAoZXZlbnQuZS5zY3JlZW5YIC0gb3JpZ1gpLFxuICAgICAgICAgICAgeTogKGV2ZW50LmUuc2NyZWVuWSAtIG9yaWdZKVxuICAgICAgICAgIH07XG4gICAgICAgICAgb3JpZ1ggPSBldmVudC5lLnNjcmVlblg7XG4gICAgICAgICAgb3JpZ1kgPSBldmVudC5lLnNjcmVlblk7XG4gICAgICAgICAgdGhpcy5kb1BhbihkZWx0YSk7XG4gICAgICAgIH1cbiAgICAgICAgY2FudmFzLnJlbmRlckFsbCgpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBwYW5FeGl0OiBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChzdGF0ZXMucGFuQWN0aXZlKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmRhcmtyb29tLm9wdGlvbnM7XG4gICAgICAgIGNvbnN0IGltYWdlID0gdGhpcy5kYXJrcm9vbS5pbWFnZTtcbiAgICAgICAgc3RhdGVzLnBhbm5pbmcgPSBmYWxzZTtcbiAgICAgICAgb3B0aW9ucy5sZWZ0ID0gaW1hZ2UubGVmdDtcbiAgICAgICAgb3B0aW9ucy50b3AgPSBpbWFnZS50b3A7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGRvUGFuOiBmdW5jdGlvbihkZWx0YSkge1xuICAgICAgY29uc3QgaW1hZ2UgPSB0aGlzLmRhcmtyb29tLmltYWdlO1xuICAgICAgdGhpcy5kZWx0YSA9IHRoaXMuY29uc3RyYWluUGFuKGRlbHRhKTtcbiAgICAgIGltYWdlLmxlZnQgKz0gZGVsdGEueDtcbiAgICAgIGltYWdlLnRvcCArPSBkZWx0YS55O1xuICAgICAgaW1hZ2Uuc2V0Q29vcmRzKCk7XG4gICAgICBzdGF0ZXMucmVhbFBhbiA9IHtcbiAgICAgICAgeDogaW1hZ2Uub0Nvb3Jkcy50bC54LFxuICAgICAgICB5OiBpbWFnZS5vQ29vcmRzLnRsLnlcbiAgICAgIH07XG4gICAgfSxcblxuICAgIGNvbnN0cmFpblBhbjogZnVuY3Rpb24oZGVsdGEpIHtcbiAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xuICAgICAgY29uc3QgaW1hZ2UgPSB0aGlzLmRhcmtyb29tLmltYWdlO1xuICAgICAgY29uc3QgdGwgPSBpbWFnZS5vQ29vcmRzLnRsOyAvLyB0b3AgbGVmdCBjb3JuZXJcbiAgICAgIGNvbnN0IGJyID0gaW1hZ2Uub0Nvb3Jkcy5icjsgLy8gYm90dG9tIHJpZ2h0IGNvcm5lclxuICAgICAgaWYgKGRlbHRhLnggPiAwKSB7XG4gICAgICAgIGRlbHRhLnggPSAoKHRsLnggKyBkZWx0YS54KSA+IDApID8gMCA6IE1hdGguZmxvb3IoZGVsdGEueCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWx0YS54ID0gTWF0aC5jZWlsKGRlbHRhLngpO1xuICAgICAgICBpZiAoKE1hdGguY2VpbChici54KSArIGRlbHRhLngpIDwgY2FudmFzLndpZHRoKSB7XG4gICAgICAgICAgZGVsdGEueCA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChkZWx0YS55ID4gMCkge1xuICAgICAgICBkZWx0YS55ID0gKCh0bC55ICsgZGVsdGEueSkgPiAwKSA/IDAgOiBNYXRoLmZsb29yKGRlbHRhLnkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVsdGEueSA9IE1hdGguY2VpbChkZWx0YS55KTtcbiAgICAgICAgaWYgKChNYXRoLmNlaWwoYnIueSkgKyBkZWx0YS55KSA8IGNhbnZhcy5oZWlnaHQpIHtcbiAgICAgICAgICBkZWx0YS55ID0gMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGRlbHRhO1xuICAgIH0sXG5cbiAgICByZXN0b3JlWm9vbVBhbjogZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoc3RhdGVzLmxhc3RTY2FsZSAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMuZGFya3Jvb20uaW1hZ2Uuc2NhbGUoc3RhdGVzLmxhc3RTY2FsZSk7XG4gICAgICAgIGlmIChzdGF0ZXMucmVhbFBhbiAhPSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5kb1BhbihzdGF0ZXMucmVhbFBhbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgem9vbUluOiBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xuICAgICAgaWYgKGNhbnZhcy5nZXRab29tKCkgPD0gbWF4Wm9vbSkge1xuICAgICAgICBjYW52YXMuc2V0Wm9vbShjYW52YXMuZ2V0Wm9vbSgpICogMS4xKTtcbiAgICAgICAgY2FudmFzLnJlbmRlckFsbCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5vblBhbigpO1xuICAgICAgdGhpcy51cGRhdGVCdXR0b25zKCk7XG4gICAgfSxcblxuICAgIHpvb21PdXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XG4gICAgICBjb25zdCBpbWFnZSA9IHRoaXMuZGFya3Jvb20uaW1hZ2U7XG4gICAgICBpZiAoY2FudmFzLmdldFpvb20oKSA+IG1pblpvb20pIHtcbiAgICAgICAgY2FudmFzLnNldFpvb20oY2FudmFzLmdldFpvb20oKSAvIDEuMSk7XG4gICAgICAgIGlmICh0aGlzLmRhcmtyb29tLmltYWdlLm9Db29yZHMuYnIueCA8IHRoaXMuZGFya3Jvb20uY2FudmFzLndpZHRoKSB7XG4gICAgICAgICAgY29uc3QgbmV3TGVmdCA9IE1hdGguY2VpbCh0aGlzLmRhcmtyb29tLmNhbnZhcy53aWR0aCAtIHRoaXMuZGFya3Jvb20uaW1hZ2Uub0Nvb3Jkcy5ici54KTtcbiAgICAgICAgICBpbWFnZS5sZWZ0ICs9IG5ld0xlZnQ7XG4gICAgICAgICAgdGhpcy5kYXJrcm9vbS5vcHRpb25zLmxlZnQgPSB0aGlzLmRhcmtyb29tLm9wdGlvbnMubGVmdCArIG5ld0xlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZGFya3Jvb20uaW1hZ2Uub0Nvb3Jkcy5ici55IDwgdGhpcy5kYXJrcm9vbS5jYW52YXMuaGVpZ2h0KSB7XG4gICAgICAgICAgY29uc3QgbmV3VG9wID0gTWF0aC5jZWlsKHRoaXMuZGFya3Jvb20uY2FudmFzLmhlaWdodCAtIHRoaXMuZGFya3Jvb20uaW1hZ2Uub0Nvb3Jkcy5ici55KTtcbiAgICAgICAgICBpbWFnZS50b3AgKz0gbmV3VG9wO1xuICAgICAgICAgIHRoaXMuZGFya3Jvb20ub3B0aW9ucy50b3AgPSB0aGlzLmRhcmtyb29tLm9wdGlvbnMudG9wICsgbmV3VG9wO1xuICAgICAgICB9XG4gICAgICAgIGltYWdlLnNldENvb3JkcygpO1xuICAgICAgICBjYW52YXMucmVuZGVyQWxsKCk7XG4gICAgICAgIGlmIChjYW52YXMuZ2V0Wm9vbSgpID49IG1pblpvb20pIHtcbiAgICAgICAgICB0aGlzLm9uUGFuKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVCdXR0b25zKCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIHVwZGF0ZUJ1dHRvbnM6IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XG4gICAgICBjb25zdCBzaG91bGREaXNhYmxlTWluWm9vbSA9IGNhbnZhcy5nZXRab29tKCkgPD0gbWluWm9vbTtcbiAgICAgIGNvbnN0IHNob3VsZERpc2FibGVNYXhab29vbSA9IGNhbnZhcy5nZXRab29tKCkgPj0gbWF4Wm9vbTtcbiAgICAgIGNvbnN0IHNob3VsZEVuYWJsZVBhbiA9IGNhbnZhcy5nZXRab29tKCkgPiBtaW5ab29tO1xuICAgICAgdGhpcy56b29tT3V0QnV0dG9uLmRpc2FibGUoc2hvdWxkRGlzYWJsZU1pblpvb20pO1xuICAgICAgdGhpcy56b29tSW5CdXR0b24uZGlzYWJsZShzaG91bGREaXNhYmxlTWF4Wm9vb20pO1xuICAgICAgaWYgKHNob3VsZERpc2FibGVNaW5ab29tKSB7XG4gICAgICAgIHRoaXMuZGFya3Jvb20ub3B0aW9ucy5sZWZ0ID0gMDtcbiAgICAgICAgdGhpcy5kYXJrcm9vbS5vcHRpb25zLnRvcCA9IDA7XG4gICAgICAgIHRoaXMucGFuLmFjdGl2ZShmYWxzZSk7XG4gICAgICAgIHRoaXMucGFuLmRpc2FibGUodHJ1ZSk7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNob3VsZEVuYWJsZVBhbikge1xuICAgICAgICB0aGlzLnBhbi5kaXNhYmxlKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufSgpKTtcbiIsIihmdW5jdGlvbiAoKSB7XG4gIGZhYnJpYy5JbWFnZS5wcm90b3R5cGUuc3Ryb2tlV2lkdGggPSAwO1xuICBEYXJrcm9vbS5wbHVnaW5zLnNhdmUgPSBEYXJrcm9vbS5QbHVnaW4uZXh0ZW5kKHtcblxuICAgIGRlZmF1bHRzOiB7XG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuZGFya3Jvb20uc2VsZkRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCBidXR0b25Hcm91cCA9IHRoaXMuZGFya3Jvb20udG9vbGJhci5jcmVhdGVCdXR0b25Hcm91cCgpO1xuXG4gICAgICB0aGlzLmRlc3Ryb3lCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xuICAgICAgICBpbWFnZTogXCJzYXZlXCJcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmRlc3Ryb3lCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMub3B0aW9ucy5jYWxsYmFjay5iaW5kKHRoaXMpKTtcbiAgICB9XG4gIH0pO1xufSgpKTtcbiJdfQ==
