/*
Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.

Assume that the input n will always be a positive integer.
*/

const sumCubes = n => [...new Array(n).keys()].reduce((acc, _, i) => acc + (i+1)**3, 0);