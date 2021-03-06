/*
Consider the string "adfa" and the following rules:
a) each character MUST be changed either to the one before or the one after in alphabet. 
b) "a" can only be changed to "b" and "z" to "y". 

From our string, we get:

"adfa" -> ["begb","beeb","bcgb","bceb"]

Here is another example: 
"bd" -> ["ae","ac","ce","cc"]

--We see that in each example, one of the outcomes is a palindrome. That is, "beeb" and "cc".

You will be given a lowercase string and your task is to return True if at least one of the outcomes is a palindrome or False otherwise.
*/

const solve = s => [...s].map(l => l.charCodeAt()).map((e, i, arr) => [0, 2].includes(Math.abs(e - arr[arr.length - 1 - i]))).every(e => e);