/*
Given: a sequence of different type of values (number, string, boolean). 
You should return an object with a separate properties for each of types presented in input. Each property should contain an array of corresponding values.

- keep order of values like in input array
- if type is not presented in input, no corresponding property are expected
*/

function separateTypes(input) {
	let res = {};
	for (let value of input) {
		switch (typeof value) {
			case 'number' :
				if (!res.hasOwnProperty('number')) res.number = [];
				res.number.push(value);
				break;
			case 'string' :
				if (!res.hasOwnProperty('string')) res.string = [];
				res.string.push(value);
				break;
			case 'boolean' :
				if (!res.hasOwnProperty('boolean')) res.boolean = [];
				res.boolean.push(value);
				break;
		}
	}
	return res;
}