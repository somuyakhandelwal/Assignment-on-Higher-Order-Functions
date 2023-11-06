const foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
const myArray = [11, 34, 20, 5, 53, 16];

// Progression 1:

function slice(start, end) {
  let FoodNew = [];
  for (let i = start; i < end - 1; i++) {
    FoodNew.push(foods[i]);
  }
  return FoodNew;
}

// Progression 2:

function spliced() {
  foods.splice(2, 0, 'noodles', 'icecream');
  return foods;
}

// Progression 3:

function isEven(number) {
  return number % 2 == 0 ? true : false;
}

function isPrime(number) {
  for (let j = 2; j < number; j++) {
    if (number % j === 0) return false;
  }
  return true;
}

function checkNumber(numberArray, operation) {
  NewNumberArray = numberArray.filter(operation);
  return NewNumberArray;
}

// Progression 4:

function reject(numberArray) {
  let nonPrime = [];
  numberArray.forEach((number) => {
    isPrime(number) ? null : nonPrime.push(number);
  });

  return nonPrime;
}

function nonPrime(numberArray) {
  ans = reject(numberArray);
  return ans;
}

// Progression 5:

const isEvenUsingLambda = (number) => number % 2 == 0;

// Progression 6:

function square(number) {
  return number * number;
}

function findSquareOfNumbers(myArray) {
  let SquaredOfArray = myArray.map(square);
  return SquaredOfArray;
}

// Progression 7:

function multiply(myArray) {
  return myArray.reduce((mul, n) => {
    return mul * n;
  }, 1);
}

function sumOfSquares(myArray) {
  return myArray.map(square).reduce((sum, n) => {
    return sum + n;
  });
}
