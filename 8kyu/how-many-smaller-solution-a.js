/*
Coding in function howManySmaller, function accept 2 parameter:arr and n. arr is a decimal array. n is a decimal.

The first mission: let all elements in the array keep two decimal places(No need to convert number n).

The second mission: Traversal arr, count the number of the element which smaller than n and return it.

=> Solution A: using Array.reduce()
*/

const howManySmaller = (arr, n) => arr.reduce((acc, curr) => acc + (curr.toFixed(2) < n ? 1 : 0), 0);