// Is there a vowel in there?

// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

// SOLUTION:

function isVow(a){
 return a.map(item => String.fromCodePoint(item).match(/[aeiou]/g) == null ? item :String.fromCodePoint(item) )
}
