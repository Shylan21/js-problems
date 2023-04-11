const createNumberArray = (from, to) => {
  const numbers = [];
  for (let i = from; i <= to; i++) {
    numbers.push(i);
  }

  return numbers;
};

const getNumbersDivisibleBy3or5 = (numbersArray) => {
  const divisibleNumbers = [];

  numbersArray.forEach((number) => {
    if (number % 3 === 0 || number % 5 === 0) {
      divisibleNumbers.push(number);
    }
  });

  return divisibleNumbers;
};

const getSumOfArray = (arrayOfNumbers) => {
  let result = 0;
  arrayOfNumbers.forEach((number) => {
    result += number;
  });

  return result;
};

const sumOfNumbersDivisibleBy3or5 = (from, to) => {
  const numbersArray = createNumberArray(from, to);
  const divisibleNumbers = getNumbersDivisibleBy3or5(numbersArray);
  return getSumOfArray(divisibleNumbers);
};

console.log(sumOfNumbersDivisibleBy3or5(1, 1000));
