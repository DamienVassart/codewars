/*
Sum all the numbers of the array (in F# and Haskell you get a list) except the highest and the lowest element (the value, not the index!).
(The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)
*/

function sumArray(arr) {
  if (arr === null || arr.length < 2) return 0;
  return arr.sort((x, y) => x - y).slice(1, arr.length - 1).reduce((a, b) => a + b, 0);
}