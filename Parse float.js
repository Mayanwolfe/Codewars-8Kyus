// Parse float

// Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.

// SOLUTION:

function parseF(s) {
  console.log(s)
  return parseFloat(s) ? parseFloat(s) : (s==0 && s!==false) ? 0 : null
}
