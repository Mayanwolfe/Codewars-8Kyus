// Remove exclamation marks

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// SOLUTION:

function removeExclamationMarks(s) {
  return s.split('').map(item => (item == '!' ? '' : item)).join('')
}
