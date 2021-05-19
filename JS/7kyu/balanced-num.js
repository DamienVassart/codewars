/*
Balanced number is the number that * The sum of all digits to the left of the middle digit(s) 
and the sum of all digits to the right of the middle digit(s) are equal*.

Given a number, Find if it is Balanced or not . 
*/

function balancedNum(n) {
    let arr = [...(''+n)];
    let leftSum = arr.slice(0, Math.ceil(arr.length / 2 - 1)).reduce((sum, val) => sum + +val, 0);
    let rightSum = arr.slice(arr.length / 2 + 1).reduce((sum, val) => sum + +val, 0);
    return leftSum == rightSum ? 'Balanced' : 'Not Balanced';
}