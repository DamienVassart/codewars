/*
You are provided with an array of positive integers and an additional integer n (n > 1).

Calculate the sum of each value in the array to the nth power. 
Then subtract the sum of the original array.
*/

const modifiedSum = (a, n) => a.reduce((acc, val) => acc + (val**n - val), 0);