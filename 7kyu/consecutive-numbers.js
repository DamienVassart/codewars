/*
Create the function consecutive(arr) that takes an array of integers 
and return the minimum number of integers needed to make the contents of arr consecutive 
from the lowest number to the highest number.
*/

const consecutive = arr => arr.length ? Math.max(...arr) - Math.min(...arr) + 1 - arr.length : 0;