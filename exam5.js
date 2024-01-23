// The .length property on an array will return the number of elements in the array.
// For example, the array below contains 2 elements:
// [1, [2, 3]]
// // 2 elements, number 1 and array [2, 3]
// Suppose we instead wanted to know the total number of non-nested items in the nested array. In the above case, [1, [2, 3]] contains 3 non-nested items, 1, 2 and 3.
// Write a function that returns the total number of non-nested items in a nested array.
// getLength([1, [2, 3]]) ➞ 3
// getLength([1, [2, [3, 4]]]) ➞ 4
// getLength([1, [2, [3, [4, [5, 6]]]]]) ➞ 6
// getLength([1, [2], 1, [2], 1]) ➞ 5

function getLength(arr) {
  let count = 0;

  function countNonNestedItems(element) {
    if (Array.isArray(element)) {
      for (let i = 0; i < element.length; i++) {
        countNonNestedItems(element[i]);
      }
    } else {
      count++;
    }
  }

  countNonNestedItems(arr);
  if (count) {
    return count;
  } else if (count == 0) {
    return 0;
  }
}

// Test cases
// console.log(getLength([1, [2, 3]])); // ➞ 3
// console.log(getLength([1, [2, [3, 4]]])); // ➞ 4
// console.log(getLength([1, [2, [3, [4, [5, 6]]]]])); // ➞ 6
