const chart = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1,
};

function romanToArabic(input) {
  return input
    .toUpperCase()
    .split("")
    .reduce(
      (prevValue, romanLetter) => {
        let negativeValue = 0;
        const arabicValue = chart[romanLetter];
        if (prevValue[1] < arabicValue) {
          negativeValue = -(prevValue[1] * 2);
        }
        return [(prevValue[0] += arabicValue + negativeValue), arabicValue];
      },
      [0, 0]
    )[0];
}

console.log(romanToArabic("cdxi"));
