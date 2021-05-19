/*
Given two integers a and b, which can be positive or negative, find the sum of all the integers between including them too and return it. 
If the two numbers are equal return a or b.

Note: a and b are not ordered!
*/

function getSum(a, b) {
	const l = Math.abs(a - b) + 1;
	return [...new Array(l).keys()].reduce((acc, val) => acc + (val + (a < b ? a : b)), 0);
}