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
  4.  Take the inputs into a function calcSumOrProduct(enterNumber, sumOrProduct)
  5.  
Code */
