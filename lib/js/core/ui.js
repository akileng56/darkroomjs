(function () {
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
