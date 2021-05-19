/*
School students Alice and Bob send messages to each other. 
To ensure that their messages are not readable by teachers they encrypt text with simple algorythm. 
Every message contains only latin letters (lowercase and uppercase), digits from 0 to 9 and space symbol.

So, the encryption algorythm is:

Reverse the whole string.
Replace every letter with it ASCII code in quotes (A to '65', h to '104' and so on).
Insert digits and spaces as is.

Your task is to write function decrypt to get source messages from encrypted strings.
*/

const decrypt = str => str.replace(/'\d+'/g, e => String.fromCharCode(e.replace(/'/g, ''))).split('').reverse().join``;