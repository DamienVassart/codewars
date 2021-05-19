/*
Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

All inputs will be valid.
*/

function last(x){
	let split = x.split(' ');
	let lastLetters = [... new Set(split.map(str => str.slice(-1)).sort())];
	return lastLetters.reduce((res, l) => res.concat(split.filter(str => str.slice(-1) === l)) , []);
}