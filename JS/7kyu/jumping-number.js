/*
Jumping number is the number that All adjacent digits in it differ by 1.
Given a number, Find if it is Jumping or not . 
*/

function jumpingNumber(n) {
    let arr = (''+ n).split('');
    for (let i = 0; i < arr.length - 1; i++) {
        if (Math.abs(arr[i] - arr[i + 1]) !== 1) return 'Not !!';
    }
    return 'Jumping !!';
}