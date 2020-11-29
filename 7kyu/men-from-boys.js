/*
Now that the competition gets tough it will Sort out the men from the boys .
Men are the Even numbers and Boys are the odd.

Now that the competition gets tough it will Sort out the men from the boys .

Men are the Even numbers and Boys are the odd.
Given an array/list [] of n integers , Separate The even numbers from the odds , or Separate the men from the boys.
*/

function menFromBoys(arr){
    let men = arr.filter(val => val%2 === 0).sort((x, y) => x - y);
    let boys = arr.filter(val => val%2).sort((x, y) => y - x);
    return [...new Set(men.concat(boys))];
}