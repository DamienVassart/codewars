// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

function minSum(arr) {
    let sum = 0;
    arr = arr.sort((x, y) => x - y);
    while(arr.length > 0) {
        sum += arr.shift() * arr.pop();
    }
    return sum;
}