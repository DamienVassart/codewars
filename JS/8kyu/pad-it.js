/*
Coding in function padIt, function accept 2 parameters:

  1-  str, it's a string representing the string to pad, we need pad some "*" at leftside or rightside of str
  2-  n, it's a number, how many times to pad the string.

Behaviour

You need to write a loop statement within the function that loops n times. 
Each time through the loop it will add one * to str, alternating on which side it is padded: 
the first time will add a * to the left side of str, the second time will add a * to the right side, and so on.

Finally, return the padded string.
*/

function padIt(str, n) {
    let c = 1, pad = '*';
    while(c <= n) {
        str = (c % 2 !== 0) ? pad + str : str + pad;
        c++;
    }
    return str;
}