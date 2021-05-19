/*
Given a Divisor and a Bound , find the largest integer N, such that:

- N is divisible by divisor

- N is less than or equal to bound

- N is greater than 0.
*/

const maxMultiple = (div, bound) => bound - bound % div;