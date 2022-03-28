// Is the date today

// Write a simple function that takes a Date as a parameter and returns a Boolean representing whether the date is today or not.

// Make sure that your function does not return a false positive by only checking the day.

// SOLUTION:

function isToday(date) {
  return (date.getDate() == new Date().getDate() && date.getFullYear() == new Date().getFullYear())
}
