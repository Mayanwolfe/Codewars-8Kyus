// Remove First and Last Character Part Two

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// SOLUTION:

function array(arr){
  if (arr.split(',').length < 3 ) {
    return null
  } else {
  let array = arr.split(',')
  let array2 = array.pop()
  let array3 = array.shift()
  return array.join(' ')
  }
}
