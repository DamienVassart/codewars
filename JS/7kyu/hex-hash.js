/*
Complete the function that accepts a valid string and returns an integer.

Wait, that would be too easy! 
Every character of the string should be converted to the hex value of its ascii code, 
then the result should be the sum of the numbers in the hex strings (ignore letters).
*/

const hexHash = code => [...code.replace(/./gi, c => c.charCodeAt(0).toString(16)).replace(/[a-z]/gi, '')].reduce((acc, val) => acc + +val, 0);