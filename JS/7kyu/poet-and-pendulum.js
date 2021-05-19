/*
Given an array/list [] of n integers , Arrange them in a way similar to the to-and-fro movement of a Pendulum

- The Smallest element of the list of integers , must come in center position of array/list.
- The Higher than smallest , goes to the right .
- The Next higher number goes to the left of minimum number and So on , in a to-and-fro manner similar to that of a Pendulum.
*/

function pendulum(arr) {
	let res = arr.sort((x, y) => x - y).splice(0, 1);
	for (let i = 0; i < arr.length; i++) {
		i%2 == 0 ? res.push(arr[i]) : res.unshift(arr[i]);
	}
	return res;
}