// Find the force of gravity between two objects

// Your job is to find the gravitational force between two spherical objects (obj1 , obj2).

// input
// Two arrays are given :

// arr_val (value array), consists of 3 elements
// 1st element : mass of obj 1
// 2nd element : mass of obj 2
// 3rd element : distance between their centers
// arr_unit (unit array), consists of 3 elements
// 1st element : unit for mass of obj 1
// 2nd element : unit for mass of obj 2
// 3rd element : unit for distance between their centers
// mass units are :

// kilogram (kg)
// gram (g)
// milligram (mg)
// microgram (μg)
// pound (lb)
// distance units are :

// meter (m)
// centimeter (cm)
// millimeter (mm)
// micrometer (μm)
// feet (ft)
// Note
// value of G = 6.67 × 10−11 N⋅kg−2⋅m2

// 1 ft = 0.3048 m

// 1 lb = 0.453592 kg

// return value must be Newton for force (obviously)

// μ copy this from here to use it in your solution

// SOLUTION:

solution = (arr_val, arr_unit) => {
  let kg = 1
  let g = 0.001
  let mg = 1e-6
  let μg = 1e-9
  let lb = 0.453592
  let m =1
  let cm = 0.01
  let mm = 0.001
  let μm = 1e-6
  let ft = 0.3048
  let m1 = arr_val[0]*eval(arr_unit[0])
  let m2 = arr_val[1]*eval(arr_unit[1])
  let r = arr_val[2]*eval(arr_unit[2])
  return (6.67 * 10**-11)*((m1*m2)/r**2)
};
