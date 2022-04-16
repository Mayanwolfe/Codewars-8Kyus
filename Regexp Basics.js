// Regexp Basics - is it a digit?

// Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.

// SOLUTION:

String.prototype.digit = function() {
  if (this.length !== 1) {
    return false
  }
  reg = new RegExp('^[0-9]*$');
  return reg.test(this)
};
