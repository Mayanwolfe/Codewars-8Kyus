// Find Nearest square number

// Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

// Goodluck :)

// Check my other katas:

// Alphabetically ordered

// Case-sensitive!

// Not prime numbers

// SOLUTION:

function nearestSq(n){
    console.log(n)
    let up = n
    let down = n
    while (!Number.isInteger(Math.sqrt(up))) {
      up++
    }
    console.log(n)
    while (!Number.isInteger(Math.sqrt(down))) {
      down--
    }
    return (up == down)? n : (n-down > up-n) ? up : down
}
