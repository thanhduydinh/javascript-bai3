// write a function formatMoney(amount) to format currency money
// Examples:
// -1 => "0"
// 0 => "0"
// 10 => "10"
// 1000 => "1,000"
// 10000 => "10,000"
// 1000000 => "1,000,000"

// Chuyển về chuỗi
var number = 100000000;
function toAmount(number) {
  return number.toString();
}
var amount = toAmount(number);

// format lại chuỗi
var money = "";
function formatMoney(amount) {
  if (number <= 0) {
    return "0";
  } else {
    var i = amount.length;
    var dem = amount.length % 3;
    while (i > 0) {
      if (dem == 0) {
        money += i != amount.length ? "," : "";
        dem = 3;
      }
      money += amount.charAt(amount.length - i);
      dem--;
      i--;
    }
    return money;
  }
}

// console.log(formatMoney(amount));
