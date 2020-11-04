/*
Coding in function blackAndWhite. function accept 1 parameter arr(a number array).

If arr is not an array, function should return:

"It's a fake array"
If arr contains elements 5 and 13, function should return:

"It's a black array"
If arr contains neither 5 nor 13, function should return:

"It's a white array"
*/

const blackAndWhite = (arr) => "It's a " + (!Array.isArray(arr) ? "fake" : (arr.indexOf(5) !== -1 && arr.indexOf(13) !== -1) ? "black" : "white") + " array";