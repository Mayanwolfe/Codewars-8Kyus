//Regex count lowercase letters

// Your task is simply to count the total number of lowercase letters in a string.

// Examples
// lowercaseCount("abc"); ===> 3

// lowercaseCount("abcABC123"); ===> 3

// lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 3

// lowercaseCount(""); ===> 0;

// lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 0

// lowercaseCount("abcdefghijklmnopqrstuvwxyz"); ===> 26

//SOLUTION:

function lowercaseCount(str){
  let count = 0;
  for (const char of str) {
    if (char.match(/[a-z]/)) {
      count += 1;
    }
  }

  return count;
}
