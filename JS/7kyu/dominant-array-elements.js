/*
An element in an array is dominant if it is greater than all elements to its right. 
You will be given an array and your task will be to return a list of all dominant elements.
*/

const solve = arr => arr.filter((val, i) => arr.slice(i+1).every(e => e < val));