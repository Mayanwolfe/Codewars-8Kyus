// Enumerable Magic #2 - True for Any?

// Create an any? (JS: any) function that accepts an array and a block (JS: function), and returns true if the block (/function) returns true for any item in the array. If the array is empty, the function should return false.

// Ruby: If you get stuck, you can read up here:

// http://www.rubycuts.com/enum-any

// SOLUTION:

function any(arr, fun){
  for(var i = 0; i < arr.length; i++){
    if(fun(arr[i]))return true;
  }
  return false;
}
