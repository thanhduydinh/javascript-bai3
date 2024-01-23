// # Exercises
// 1.
const objects = [
  {
    number: 45,
  },
  {
    number: 4,
  },
  {
    number: 9,
  },
  {
    number: 16,
  },
  {
    number: 25,
  },
  {
    number: 16,
  },
  {
    number: 24,
  },
];

// Lọc ra các số lớn hơn 20
var isNumberSelected = objects.filter(function (obj) {
  return obj.number > 20;
});

// Đưa các số lớn hơn 20 vào mảng arr
var arr = [];
isNumberSelected.map(function (obj) {
  arr.push(obj.number);
});

// Tính tổng mảng arr
var totalNumber = arr.reduce(function (accumulator, curentVaue) {
  return accumulator + curentVaue;
}, 0);
// console.log(totalNumber);
