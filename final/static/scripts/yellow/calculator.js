function Calculator() {
  this._stack = [0];
  this.operatorMap = {
    "+": _yellow.add,
    "-": _yellow.subtract,
    "x": _yellow.multiply,
    "/": _yellow.divide,
    "^": _yellow.toPower,
  };

  this._clearAll = function () {
    this._stack = [0];
    this._updateDisplay();
  }

  this._clearOne = function () {
    this._stack.pop();
    this._stack.push(0);
    this._updateDisplay();
  }

  this.clear = function () {
    if (this._stack.length > 1 && _yellow.last(this._stack) !== 0) {
      this._clearOne();
    } else {
      this._clearAll();
    }
  }

  this.addButtonPress = function (button, isOperator) {
    var isLastNum = this._isNum(_yellow.last(this._stack));

    if (isLastNum && isOperator) {
      if (this._stack.length > 2) {
        this.calculate();
      }
      this._stack.push(button);
    } else if (isLastNum && !isOperator) {
      this._stack[this._stack.length - 1] = this._updateNumber(button);
    } else if (!isLastNum && !isOperator) {
      this._stack.push(button);
    } else {
      this._stack[this._stack.length - 1] = button;
    }
    this._updateDisplay();
  }

  this.calculate = function () {
    if (this._stack.length === 3) {
      this._stack = [this.operatorMap[this._stack[1]](this._stack[0], this._stack[2])];
    }
    this._updateDisplay();
  }

  this._updateNumber = function (button) {
    var val = _yellow.last(this._stack).toString();
    val += button.toString();
    val = parseInt(val);
    return val;
  }

  this._updateDisplay = function () {
    var display = this._stack.length > 2 ? this._stack[2] : this._stack[0];
    $('.calculator-display').html(display);

    var clear = this._stack.length > 1 && _yellow.last(this._stack) !== 0 ? "C" : "AC";
    $('#clear').html(clear);
  }

  this._isNum = function (val) {
    return /[0-9]/.test(val);
  }
};