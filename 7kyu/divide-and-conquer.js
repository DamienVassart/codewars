/*
Given a mixed array of number and string representations of integers, 
add up the string integers and subtract this from the total of the non-string integers.

Return as a number.
*/

const divCon = x => x.reduce((acc, val) => acc + (typeof val === 'number' ? val : - (+val)), 0);