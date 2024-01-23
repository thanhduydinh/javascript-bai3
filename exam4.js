// Given an input string, reverse the string word by word,
// the first word will be the last, and so on.
// Examples:
// reverseWords(" the sky is blue") ➞ "blue is sky the"
// reverseWords("hello   world!  ") ➞ "world! hello"
// reverseWords("a good example") ➞ "example good a"

// Notes
// A word is defined as a sequence of non-space characters.
// The input string may contain leading or trailing spaces. However, your reversed string should not contain leading or trailing spaces.
// You need to reduce multiple spaces between two words to a single space in the reversed string.
// Try to solve this in linear time.

function reverseWords(str) {
  str = str.split(" ");
  var i = str.length;
  var arr = [];
  var strReverse = "";
  while (i >= 0) {
    if (str[i] != " " && str[i]) {
      arr.push(str[i]);
    }
    i--;
  }

  var i = 0;
  while (i < arr.length) {
    if (i != 0) {
      strReverse += " " + arr[i];
    } else strReverse += arr[i];
    i++;
  }
  return strReverse;
}

// console.log(reverseWords("hello   world!  "));
