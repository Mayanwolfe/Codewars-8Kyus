// Removing Elements

// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

// SOLUTION:

function removeEveryOther(arr){
    for (let i=1; i<=arr.length ; i += 1 ) {
    arr.splice(i,1)
  }
  return arr
}
