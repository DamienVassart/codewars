/*
Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). 
Leave any incidence of c untouched.
*/

const switcheroo = s => s.replace(/a|b/gi, l => l === 'a' ? 'b' : 'a');