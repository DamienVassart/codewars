/*
Given an array add all the number elements and return the binary equivalent of that sum; 
to make the code bullet proof anything else than a number should be addeded as 0 since it can't be addeded.
*/

function arr2bin(arr){
  let filtered = arr.filter(e => typeof e === 'number');
  return filtered.length > 0 ? filtered.reduce((a, b) => a + b).toString(2) : '0';
}