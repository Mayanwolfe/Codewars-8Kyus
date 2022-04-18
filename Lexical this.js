//Lexical this

// Complete the Person object, by completing the FillFriends function to fill the _friends Array for the person object.
// Output
// Return the person object with the Name, Friends and FillFriends function filled out which will fill the input into the Friends property.
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

//SOLUTION:

const Person = () => {
  const person = {
    _name: 'Leroy',
    _friends: [],
    fillFriends: function(f) {
      this._friends.push(...f)
    },
  }

  return person
}
