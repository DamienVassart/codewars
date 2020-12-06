/*
A number m of the form 10x + y is divisible by 7 if and only if x − 2y is divisible by 7. 
In other words, subtract twice the last digit from the number formed by the remaining digits. 
Continue to do this until a number known to be divisible or not by 7 is obtained; 
you can stop when this number has at most 2 digits because you are supposed to know if a number of at most 2 digits is divisible by 7 or not.

The original number is divisible by 7 if and only if the last number obtained using this procedure is divisible by 7. 

Your task is to return to the function seven(m) (m integer >= 0) an array (or a pair, depending on the language) of numbers, 
the first being the last number m with at most 2 digits obtained by your function (this last m will be divisible or not by 7), 
the second one being the number of steps to get the result.
*/

const seven = (n, steps = 0) => n < 100 ? [n, steps] : seven(Math.floor((n / 10) - 2 * (n % 10)), ++steps);