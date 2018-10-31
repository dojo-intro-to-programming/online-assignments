function predictMe(param1, param2) {
  if(param1 > param2) {
    console.log("Nice!");
  } else if(param1 == param2) {
    console.log("Close!");
  } else {
    console.log("Oops!");
  }
}

predictMe(10, 11);
predictMe(11, 10);
predictMe(11, 11);
predictMe(10, "10");
predictMe("apple", "banana");
predictMe("carrot", "banana");