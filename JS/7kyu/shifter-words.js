/*
You probably know that some characters written on a piece of paper, after turning this sheet 180 degrees, can be read, although somitimes in a different way. 
So, uppercase letters "H", "I", "N", "O", "S", "X", "Z" after rotation are not changed, the letter "M" becomes a "W", and Vice versa, the letter "W" becomes a "M".

We will call a word "shifter" if it consists only of these letters. After turning the sheet, this word can also be read, although in a different way. 
So, the word "WOW "turns into the word "MOM". On the other hand, the word "HOME" is not a shifter.

Find the number of unique shifter words in the input string (without duplicates). 
String contains only uppercase letters and digits.
*/

const SHIFT_LETTERS = ["H", "I", "M" , "N", "O", "S", "W", "X", "Z"];

const shifter = s => [...new Set(s.split(' '))].filter(w => w.length && [...w].every(l => SHIFT_LETTERS.includes(l))).length;