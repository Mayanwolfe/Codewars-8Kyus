// validate code with simple regex

// Basic regex tasks. Write a function that takes in a numeric code of any length. The function should check if the code begins with 1, 2, or 3 and return true if so. Return false otherwise.

// You can assume the input will always be a number.

// SOLUTION:

function validateCode (code) {
  console.log(code, code.toString().split('')[0])
switch (code.toString().split('')[0]) {
    case "1":
    case"2":
    case "3":
    return true
    break;
    default:
    return false
}
}
