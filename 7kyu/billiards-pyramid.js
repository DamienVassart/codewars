/*
Remember the pyramid of balls in billiards? 
To build a classic pyramid (5 levels) you need 15 balls. 
With 3 balls you can build a 2-level pyramid, etc.

Write a function that takes number of balls (≥ 1) and calculates how many levels you can build a pyramid.
*/

const pyramid = (n, r = 0) => n - ++r <= 0 ? r - (r !== n) : pyramid(n - r, r);