// Beginner - Reduce but Grow

// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// SOLUTION:

function grow(x){
  return x.reduce((sum, current) => sum * current, 1);
}
