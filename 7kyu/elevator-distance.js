/*
Imagine you start on the 5th floor of a building, then travel down to the 2nd floor, then back up to the 8th floor. 
You have travelled a total of 3 + 6 = 9 floors of distance.

Given an array representing a series of floors you must reach by elevator, 
return an integer representing the total distance travelled for visiting each floor in the array in order.

Array will always contain at least 2 floors. 
Random tests will contain 2-20 elements in array, and floor values between 0 and 30.
*/

const elevatorDistance = floors => floors.slice(1).reduce((dist, floor, i) => dist + Math.abs(floor - floors[i]), 0);