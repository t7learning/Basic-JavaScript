// Do not change any of the function names

const getBiggest = (x, y) => {
  return x > y ? x : y;
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
};

const greeting = (language) => {
  switch (language) {
    case 'German':
      return 'Guten Tag!';
    case 'Spanish':
      return 'Hola!';
    case 'Chinese':
      return 'Ni Hao!';
    default :
      return 'Hello!';
  }
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'Spanish' -> 'Hola!'
  // language: 'Chinese' -> 'Ni Hao!'
  // if language is undefined return 'Hello!'
};

const isTenOrFive = num => num === 10 || num === 5;
  // return true if num is 10 or 5
  // otherwise return false

const isInRange = (num) => {
  return num < 50 && num > 20;
  // return true if num is less than 50 and greater than 20
};

const isInteger = (num) => {
  return Number.isInteger(num);
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
};

const fizzBuzz = (num) => {
  if (num % 3 === 0 && num % 5 !== 0) return 'fizz';
  if (num % 5 === 0 && num % 3 !== 0) return 'buzz';
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 !== 0 && num % 5 !== 0) return num;
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
};

const isPrime = (num) => {
  if (num === 1 || num === 0) return false;
  for (let i = num - 1; i >= 2; i--) {
    if (num % i === 0) return false;
  }
  return true;
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
};

const returnFirst = (arr) => {
  return arr.shift();
  // return the first item from the array
};

const returnLast = (arr) => {
  return arr[arr.length - 1];
  // return the last item of the array
};

const getArrayLength = (arr) => {
  return arr.length;
  // return the length of the array
};

const incrementByOne = (arr) => {
  return arr.map(i => i + 1);
  // arr is an array of integers
  // increase each integer by one
  // return the array
};

const addItemToArray = (arr, item) => {
  arr.push(item);
  return arr;
  // add the item to the end of the array
  // return the array
};

const addItemToFront = (arr, item) => {
  arr.unshift(item);
  return arr;
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
};

const wordsToSentence = (words) => {
  return words.join(' ');
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
};

const contains = (arr, item) => {
  return arr.includes(item);
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
};

const addNumbers = (numbers) => {
  return numbers.reduce((a, b) => a + b);
  // numbers is an array of integers.
  // add all of the integers and return the value
};

const averageTestScore = (testScores) => {
  return testScores.reduce((a, b) => a + b) / testScores.length; // divided by the however many test scores there are.
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
};

const largestNumber = (numbers) => {
  let largest = 0;
  numbers.forEach((num) => {
    if (num > largest) largest = num;
  });
  return largest;
  // numbers is an array of integers
  // return the largest integer
};

// Do not modify code below this line.
// --------------------------------

module.exports = {
  getBiggest,
  greeting,
  isTenOrFive,
  isInRange,
  isInteger,
  fizzBuzz,
  isPrime,
  returnFirst,
  returnLast,
  getArrayLength,
  incrementByOne,
  addItemToArray,
  addItemToFront,
  wordsToSentence,
  contains,
  addNumbers,
  averageTestScore,
  largestNumber
};
