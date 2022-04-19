// Barking mad

// Teach snoopy and scooby doo how to bark using object methods. Currently only snoopy can bark and not scooby doo.

// snoopy.bark(); // return "Woof"
// scoobydoo.bark(); // undefined

// SOLUTION:

class Dog {
  constructor(breed) {
    this.breed = breed
  }

  bark() {
    return 'Woof'
  }
}

var snoopy = new Dog("Beagle");

var scoobydoo = new Dog("Great Dane");
