/*
Triangular number is the amount of points that can fill equilateral triangle.

Example: the number 6 is a triangular number because all sides of a triangle has the same amount of points.

Given a number 'T' from interval [1; 2147483646], find if it is triangular number or not.
*/

const isTriangular = n => Number.isInteger((Math.sqrt(8 * n + 1) - 1) / 2);