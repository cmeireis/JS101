/* Understand the Problem
    Input: length of a room in meters, width of a room in meters.
    Output: the area of the room in square meters
            the area of the room in square feet
    Mental Model: The user inputs length and width in meters.
                  The area of the room is calculated, and the result is
                  sent to the console in square meters and square feet.

  Examples / Test cases
    Enter the length of the room in meters:
    10
    Enter the width of the room in meters:
    7
    The area of the room is 70.00 square meters (753.47 square feet).

  Data Structure
    The input data type will be a number.
    The output data type will be a string.

  Algorithm
    1.  Prompt user to "Enter the length of the room in meters"
    2.  Store length in meters value in lengthInMeters variable.
    3.  Promp user to "Enter the width of the room in meters".
    4.  Store width in meters value widthInMeters variable.
    5.  Calculate area of room, lengthinMeters * widthInMeters.
      1.  Store in areaOfRoom variable.
    6.  Log to console `The area of the room is ${areaOfRoom} square meters (${areaOfRoom * 10.76})`
  Code */

const readlineSync = require('readline-sync');
let lengthInMeters = readlineSync.question('Enter the length of the room in meters: ');
let widthInMeters = readlineSync.question('Enter the width of the room in meters: ');
let areaOfRoom = lengthInMeters * widthInMeters;
console.log(`The area of the room is ${areaOfRoom} square meters (${(areaOfRoom * 10.7639).toFixed(2)} square feet).`);
