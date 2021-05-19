// Given Positive integer, N , Return true if it could be expressed as a sum of two or more consecutive positive numbers. 
// OtherWise return false.

const consecutiveDucks = n => !Number.isInteger(Math.log2(n));