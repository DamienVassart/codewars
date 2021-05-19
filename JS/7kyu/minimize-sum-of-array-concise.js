// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

const minSum = arr => arr.sort((x, y) => x - y).reduce((sum, val) => sum + val * arr.pop() , 0);