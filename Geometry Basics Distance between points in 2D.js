// Geometry Basics: Distance between points in 2D

// This series of katas will introduce you to basics of doing geometry with computers.

// Point objects have x and y attributes (X and Y in C#) attributes.

// Write a function calculating distance between Point a and Point b.

// Tests round answers to 6 decimal places.

// SOLUTION:

function distanceBetweenPoints(a, b) {
  console.log(Math.sqrt(Math.abs(a.x-b.x)**2 + Math.abs(a.y-b.y)**2))
  return +(Math.sqrt(Math.abs(a.x-b.x)**2 + Math.abs(a.y-b.y)**2).toFixed(6))
}
