/*
Understand the Problem:
  Mental Model: User will be asked to enter a number greater than 0.  Then will be asked whether to calculate the sum
    or product of all numbers between 1 and the number entered the user.  Number entered by user will also be included in the total.

  Input: Will be a number greater than 0.
  Output: Will be the sum or product of all numbers between 1 up to and including the number entered by the user.

Examples / Test Cases:
  Please enter an integer greater than 0: // 5 used for sum // 6 used for product 
  Enter "s" to calculate the sum, or "p" to calculate the product. // s // p

  The sum of the integers between 1 and 5 is 15. // This will be the output for sum.
  The product of the integers between 1 and 6 is 720. // This will be the output for product.

Data Structure:
  There will be two inputs.  One will be a number and the second a string.
  There will be one output, a string.

Algorithm:
  1.  Create readlinesync to ask user for input.
  2.  Create enterNumber variable to store value from user input: 'Please enter an integer greater than 0:'
  3.  Create sumOrProduct variable to store value from user input:  'Enter "s" to calculate the sum, or "p" to calculate the product:'
  4.  Take the inputs into functions calcSum(enterNumber)  and calcProduct(enterNumber)
  5.  Iterate through numbers, incrementing by 1, starting at 1 until number is <= to user input.
  6.  If sumOrProduct = s.  Let total = total += i.
  7.  Output to user is `The sum of the integers between 1 and ${enterNumber} is ${total}`
  7.  If sumOrProduct = p.  Let total = total *= i.
  8.  Output to user is `The product of the integers between 1 and ${enterNumber} is ${total}`

Code */

const readLineSync = require('readline-sync');

let enterNumber = readLineSync.question('Please enter an integer greater than 0:');
let sumOrProduct = readLineSync.question('Enter "s" to calculate the sum, or "p" to calculate the product:');

function calcSum(enterNumber) {
  let total = 0;
  for (let i = 1; i <= enterNumber; i += 1) {
    total += i;
  }
  return total;
}

function calcProduct(enterNumber) {
  let total = 1;
  for (let i = 1; i <= enterNumber; i += 1) {
    total *= i;
  }
  return total;
}
if (sumOrProduct === "s") {
        let sum = calcSum(enterNumber);
        console.log(`The sum of the integers between 1 and ${enterNumber} is ${sum}`);
    } else if (sumOrProduct === "p") {
      let product = calcProduct(enterNumber);
      console.log(`The product of the integers between 1 and ${enterNumber} is ${product}`);
    } else {
        console.log('You did not enter "s" or "p".');
    }