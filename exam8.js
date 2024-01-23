// A pandigital number contains all digits (0-9) at least once.
// Write a function that takes an integer, returning true if the integer is pandigital,
// and false otherwise.
// Examples:
// isPandigital(98140723568910) ➞ true
// isPandigital(90864523148909) ➞ false
// // 7 is missing.
// isPandigital(112233445566778899) ➞ false

function isPandigital(number) {
  var string = String(number);
  var dem = 0;
  for (let i = 0; i <= 9; i++) {
    console.log(string.indexOf(String(i)));
    if (string.indexOf(String(i)) === -1) {
      return false;
    }
  }
}

// console.log(isPandigital(112233445566778899));
