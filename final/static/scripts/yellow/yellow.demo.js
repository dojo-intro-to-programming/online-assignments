var _yellow = (function() {
  function add(num1, num2) {
    return num1 + num2;
  };

  function subtract(num1, num2) {
    return num1 - num2;
  };

  function multiply(num1, num2) {
    return num1 * num2;
  };

  function divide(num1, num2) {
    return num1 / num2;
  }

  function toPower(num, power) {
    var accum = 1;
    for(var i = 0; i < power; i++) {
      accum *= num;
    }
    return accum;
  }

  function last(arr) {
    return arr[arr.length - 1];
  }

  return {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    toPower: toPower,
    last: last,
  }
})();