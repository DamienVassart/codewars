/*
Tap code is a way to communicate using a series of taps and pauses for each letter. 
In this kata, we will use dots . for the taps and whitespaces for the pauses.

The number of taps needed for each letter matches its coordinates in the following polybius square (note the c/k position). 
Then you "tap" the row, a pause, then the column. Each letter is separated from others with a pause too.

   1  2  3  4  5
1  A  B C\K D  E
2  F  G  H  I  J
3  L  M  N  O  P
4  Q  R  S  T  U
5  V  W  X  Y  Z
Input:
A lowercase string of a single word (no whitespaces or punctuation, only letters).

Output:
The encoded string as taps and pauses.
*/

function tapCodeTranslation(text) {
  return [...text.replace(/k/g, 'c')].map(l => {
  	let i = l.charCodeAt() - (l.charCodeAt() <= 106 ? 96 : 97);
  	return '.'.repeat(Math.ceil(i / 5)) + ' ' + '.'.repeat(i%5 || 5);
  }).join(' ');
}