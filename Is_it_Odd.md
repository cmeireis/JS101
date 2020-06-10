# PEDAC Template

## Understand the Problem

- Input: The input is an integer which may be positive, negative, or zero.
- Output: The output is true if the absolute value is odd.  Otherwise the output is false.

## Examples / Test Cases

- console.log(isOdd(2)); // false
- console.log(isOdd(5)); // true
- console.log(isOdd(-17)); // true
- console.log(isOdd(-8)); // false
- console.log(isOdd(0)); // false
- console.log(isOdd(7)); // true

## Data Structure

- Will be working with the number type while converting input to output.

## Algorithm

- Convert integer to absolute value.

  - math.abs(number);

- Determine if number is odd.
  - number % 2 !== 0

- If absolute value is odd return true.

- Else return false.

## Code
