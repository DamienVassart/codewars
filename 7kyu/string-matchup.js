// Given two arrays of strings, return the number of times each string of the second array appears in the first array.

const solve = (arr1, arr2) => arr2.map(str => arr1.filter(e => e == str).length);