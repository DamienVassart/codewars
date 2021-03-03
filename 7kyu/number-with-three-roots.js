/*
In mathematics, an nth root of a number x, where n is usually assumed to be a positive integer, is a number r which, when raised to the power n, yields x:

r^n = x

Given number n, such that n > 1, find if its 2nd root, 4th root and 8th root are all integers (fractional part is 0), return true if it exists, false if not.
*/

const perfectRoots = (n, i = 1) => (i === 3) ? Number.isInteger(Math.sqrt(n)) : perfectRoots(Math.sqrt(n), ++i);