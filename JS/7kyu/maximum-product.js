// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

const adjacentElementsProduct = arr => Math.max(...arr.map((n, i, arr) => arr[i - 1] * n).splice(1));