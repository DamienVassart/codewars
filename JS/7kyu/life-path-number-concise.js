/*
A person's Life Path Number is calculated by adding each individual number in that person's date of birth,
 untill it is reduced to a single digit number.

Write the function lifePathNumber(dateOfBirth) that accepts a date of birth (as a string) on the following format: 
"yyyy-mm-dd". Where "y" is year, "m" is month and "d" is day. 
The function shall return a one digit integer between 1 and 9 which represents the Life Path Number of the given date of birth.

You do not need to check that the input to the lifePathNumber()-function is correct format. 
You can assume that the input to the function will always be a valid date (as a string) with the format: 
"yyyy-mm-dd".

=> CONCISE METHOD
*/

const lifePathNumber = date => date.replace(/\D/g, '') % 9 || 9;