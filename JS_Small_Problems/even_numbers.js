/* Understand the Problem
    Input: Numbers 1 to 99 inclusive.
    Output: Print all even numbers in range 1 to 99 inclusive on a separate line. 
  Examples / Test Cases
    Number 1 = false // does not print to console.
    Number 2 = true // prints to console.
    Number 4 = true // prints to console on separate line.
    Number 99 = false // does not print to console.
  Data Structure
    Data type is numbers.
  Algorithm
    Iterate over a range of numbers, and print out the even numbers.
    1.  Create a variable that will contain the numbers.
    2.  Iterate over the range of numbers incremently by 1.
    3.  Log to console every even number.
  Code */

  for (let num = 0; num < 100; num += 2) {
    console.log(num);
  }