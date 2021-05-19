/*
In this Kata, you will be given a lower case string and your task will be to remove k characters from that string using the following rule:

- first remove all letter 'a', followed by letter 'b', then 'c', etc...
- remove the leftmost character first.
*/

const solve = (s, k) => [...s].sort().slice(0, k).reduce((str, val) => str.replace(val, ''), s);