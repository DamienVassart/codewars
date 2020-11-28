/*
Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.
Given a number, Find if it is Disarium or not .
*/

const disariumNumber = n => (''+n).split('').reduce((sum, val, i) => sum + (+val)**(i + 1), 0) === n ? 'Disarium !!' : 'Not !!';