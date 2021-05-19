/*
You are given a program sumSquares that takes an array as input and returns the sum of the squares of each item in an array. 
Shorten the code such that it meets the requirements.
*/

const sumSquares = a => a.reduce((s, c) => s + c*c, 0);