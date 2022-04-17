// Simple validation of a username with regex

// Write a simple regex to validate a username. Allowed characters are:

// lowercase letters,
// numbers,
// underscore
// Length should be between 4 and 16 characters (both included).

// SOLUTION:

function validateUsr(username) {
  return /^[a-z\d_]{4,16}$/.test(username)
}
