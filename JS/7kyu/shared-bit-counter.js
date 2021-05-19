/*
In this Kata you need to write the method SharedBits that returns true if 2 integers share at least two '1' bits. 
For simplicity assume that all numbers are positive
*/

const sharedBits = (x, y) => (x & y).toString(2).replace(/0/g, '').length > 1;