// Return Two Highest Values in List

// In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

// The result should also be ordered from highest to lowest.

// Examples:

// [4, 10, 10, 9]  =>  [10, 9]
// [1, 1, 1]  =>  [1]
// []  =>  []

// SOLUTION:

function twoHighest(arr) {
  if (arr.length == 0) {
    return []
  } else {
  let max1 = Math.max(...arr)
  console.log(max1)
  arr.splice(arr.indexOf(max1), 1)
  let max2 = Math.max(...arr)
  console.log(max2)
  if (max2 == max1) {
    arr.splice(arr.indexOf(max2), 1)
    max2 = Math.max(...arr)
  }
  if (max2 == 0 || max2 == -Infinity) {
    return [max1]
  } else {
    return [max1,max2]
  }
}
}
