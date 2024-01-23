function howUnlucky(year) {
  let unluckyCount = 0;

  for (let month = 0; month < 12; month++) {
    const date = new Date(year, month, 13);

    if (date.getDay() === 5) {
      unluckyCount++;
    }
  }

  return unluckyCount;
}

console.log(howUnlucky(2020)); // Output: 2
console.log(howUnlucky(2026)); // Output: 3
console.log(howUnlucky(2016)); // Output: 1
