/*
Given an array of integers (x), and a target (t), you must find out if any two consecutive numbers in the array sum to t. 
If so, remove the second number.

Example:

x = [1, 2, 3, 4, 5]
t = 3

1+2 = t, so remove 2. No other pairs = t, so rest of array remains:

[1, 3, 4, 5]

Work through the array from left to right.

Return the resulting array.
*/

function trouble(x, t){
	while(x.some((e, i) => x[i - 1] + x[i] === t)) {
		for(let i = 1; i < x.length; i++) {
			x = (x[i - 1] + x[i] === t) ? x.slice(0, i).concat(x.slice(i + 1)) : x;
		}
	}
	return x;
}