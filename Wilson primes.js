// Wilson primes

// Wilson primes satisfy the following condition. Let P represent a prime number.

// Then ((P-1)! + 1) / (P * P) should give a whole number.

// Your task is to create a function that returns true if the given number is a Wilson prime.

// SOLUTION:

function amIWilson(p) {
  const factorial = (n)=>{
    if (n < 0) return -1
    if (n === 0) return 1

    return n * factorial(n - 1)
  }

return ( ((factorial(p-1) + 1) % (p * p)) == 0) 
}
