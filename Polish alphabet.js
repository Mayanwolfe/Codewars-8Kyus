// Polish alphabet

// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

// Your task is to change the letters with diacritics:

// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z
// and print out the string without the use of the Polish letters.

// For example:

// "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"

// SOLUTION:

function correctPolishLetters (string) {
  return string.split('').map((item) => item.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[\u0142]/g, 'l')).join('')
}
