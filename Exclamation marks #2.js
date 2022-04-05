// Exclamation marks series #2: Remove all exclamation marks from the end of sentence

// Description:
// Remove all exclamation marks from the end of sentence.

// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"

// SOLUTION:

function remove (string) {  
  let rev = string.split('').reverse()
  let i =0
  while (rev[i] == '!') {
    rev.shift()
  };
  return rev.reverse().join('')
}
