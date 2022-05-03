// Calculate BMI

// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

// SOLUTION:

function bmi(weight, height) {
  let BMI = weight/(height**2)
  if (BMI > 30) {
    return "Obese"
  } else if (BMI <= 18.5) {
    return "Underweight"
  } else if (BMI <= 25.0) {
    return "Normal"
  } else {
     return "Overweight"
  }
}
