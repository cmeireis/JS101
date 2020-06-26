/* Understand the Problem
  Mental Model:  The user is prompted to enter the bill amount and tax rate.  
                The amount of tip and total amount paid will be output to the console.
  Input:  Input will be the bill amount in dollars.
          The tax rate will be the number percentage.
  Output: Both outputs will be numbers.

    Examples / Test Cases
  What is the bill? 200 
  What is the tip percentage? 15
    The tip is $30.00
    The total is $230.00

    Data Structure
  The input and output will be numbers.

    Algorithm
  1.  Create two variables, billAmount and tipPercentage.
  2.  Prompt user What is the bill? and assign value to billAmount.
  3.  Prompt user What is the tip percentage? and assign value to tipPercentage.
  4.  Create two variables, tipAmount and totalPayment.
  5.  Assign (billAmount * (tipPercentage * .01)) to tipAmount.
  6.  Assign tipAmount + billAmount to totalPayment.
  7.  Output to console `The tip is $${tipAmount.toFixed(2)}`
  8.  Output to console `The total is $${totalPayment.toFixed(2)}`
Code */

const readlinesync = require('readline-sync');

let billAmount = readlinesync.question('What is the amount of the bill?');
let tipPercentage = readlinesync.question('What is the tip percentage?');
let tipAmount = (billAmount * (tipPercentage * .01));
let totalPayment = Number(tipAmount) + Number(billAmount);

console.log(`The tip is $${tipAmount.toFixed(2)}`);
console.log(`The total is $${totalPayment.toFixed(2)}`);




