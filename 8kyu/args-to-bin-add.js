/*
Given an array add all the number elements and return the binary equivalent of that sum; 
to make the code bullet proof anything else than a number should be addeded as 0 since it can't be addeded.
*/

const arr2bin = (arr) => arr.reduce((acc, curr) => acc + (typeof curr === 'number' ? curr : 0), 0).toString(2);