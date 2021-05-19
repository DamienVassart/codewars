/*
Jumping number is the number that All adjacent digits in it differ by 1.
Given a number, Find if it is Jumping or not .

==> Concise method
*/

const jumpingNumber = n => [...(''+n)].every((val, i, arr) => i === 0 || Math.abs(val - arr[i-1]) === 1) ? 'Jumping !!' : 'Not !!'