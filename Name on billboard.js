// Name on billboard

// You can print your name on a billboard ad. Find out how much it will cost you. Each letter has a default price of £30, but that can be different if you are given 2 parameters instead of 1.

// You can not use multiplier "*" operator.

// If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a letter).

// SOLUTION:

function billboard(name, price){
  let charge = price == null ? 30: price
  let final = 0
 for (let i = 0; i < name.length; i++) {
   final += charge
 }
  return final
} 
