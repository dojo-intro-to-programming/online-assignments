var _black = (function() {
  // sort an array 'in-place' using the bubble sort method
  // use this website as a reference: https://visualgo.net/en/sorting
  // return the sorted array
  function bubbleSort(arr) {
    var swapped = true;
    var lastSorted = arr.length - 1;
    while(swapped) {
      swapped = false;
      for(var i = 0; i < lastSorted; i++) {
        if(arr[i] > arr[i + 1]) {
          [arr[i], arr[i + 1]] = [arr[i+1], arr[i]];
          swapped = true;
        }
      }
      lastSorted--;
    }
    return arr;
  }

  // given an array, reverse the array's values 'in-place'
  function reverseArray(arr) {

  }

  return {
    bubbleSort: bubbleSort,
    reverseArray: reverseArray,
  }
})();