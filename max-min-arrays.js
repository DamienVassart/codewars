/*
In this Kata, you will be given an array of unique elements, 
and your task is to rerrange the values so that the first max value is followed by the first minimum, 
followed by second max value then second min value, etc. 
*/

function solve(arr) {
    let res = [], i = 0;
    arr = arr.sort((x, y) => y - x);
    while(arr.length) {
        res.push(i%2 === 0 ? arr.shift() : arr.pop());
        i++;
    }
    return res;
}