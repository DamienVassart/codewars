/*
Write a function vowel2index(str) that takes in a string and replaces all the vowels [a,e,i,o,u] 
with their respective positions within that string.

Your function should be case insensitive to the vowels.
*/

const vowel2index = str => str.replace(/[aeiou]/ig, (_, i) => i+1);