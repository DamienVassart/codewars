/*
Get the next prime number!

You will get a numbern (>= 0) and your task is to find the next prime number.

Make sure to optimize your code: there will numbers tested up to about 10^12.


*/

function isPrime(n) {
	for (let i = 2; i <= Math.sqrt(n); i++) {
		if(n % i === 0) return false;
	}
	return true;
}

function nextPrime(n, res = n+1) {
  	while (!isPrime(res)) {
  		res++;
  	}
  	return n < 2 ? 2 : res;
}