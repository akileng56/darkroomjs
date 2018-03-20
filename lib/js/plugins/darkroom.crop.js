(function () {
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
