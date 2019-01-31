var _red = (function () {
  // given an array and 2 index numbers, swap the 2 values in the array
  // this should be done 'in-place'
  // return the array
  function swapValues(arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    return arr;
  }

  // given an array and a value insert the value in the first index
  // this should be done 'in-place' with the original order intact
  // return the array
  function pushFront(arr, val) {
    for(var i = arr.length; i > 0; i--) {
      arr[i] = arr[i - 1];
    }
    arr[0] = val;
    return arr;
  }

  // given an array and an index number, remove the value at the given index
  // this should be done 'in-place'
  // return the array
  function removeAt(arr, idx) {
    for(var i = idx; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1];
    }
    arr.length--;
    return arr;
  }

  return {
    swapValues: swapValues,
    removeAt: removeAt,
    pushFront: pushFront,
  }
})();