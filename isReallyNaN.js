// isReallyNaN

// I've hit a few bugs in my Java/Type/Coffee-script code recently, and I've traced the problem back to the global isNaN function I was using. I had expected it to be more discerning, but it's returning true for undefined right now.

// Write a function isReallyNaN that returns true only if passed in an argument that evalutes to NaN, and returns false otherwise.

// Any solution is acceptable!

// SOLUTION:

const isReallyNaN1 = (val) => {
  // return isNaN(val);  // wasn't working as planned :-(
  return val !== val
};

const isReallyNaN2 = (val) => {
  console.log(val,typeof val,isNaN(val),!(val == null),!(typeof val == 'object'))
  if (isNaN(val) && !(val == null) && !(typeof val == 'object') && !(typeof val == 'string') && !(typeof val == 'function')) {
        console.log(true)
    return true
  } else {
    console.log(false)
    return false
  }
};
