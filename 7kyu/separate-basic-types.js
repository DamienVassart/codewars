/*
Given: a sequence of different type of values (number, string, boolean). 
You should return an object with a separate properties for each of types presented in input. Each property should contain an array of corresponding values.

- keep order of values like in input array
- if type is not presented in input, no corresponding property are expected
*/

function separateTypes(input) {
	let res = {};
	for (let value of input) {
		let key = typeof value;
		if (!res.hasOwnProperty(key)) res[key] = [];
		res[key].push(value);
	}
	return res;
}