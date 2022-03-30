// Get number from string

// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

// Function:

// getNumberFromString(s)

// SOLUTION:

function getNumberFromString(s) {
  console.log(s)
  console.log(s.split('').filter(item => (!isNaN(item) && item !== ' ')).join(''))
  return +(s.split('').filter(item => (!isNaN(item) && item !== ' ')).join(''))
}
