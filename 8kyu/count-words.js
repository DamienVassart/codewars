/*
Can you realize a function that returns word count from a given string?

You have to ensure that spaces in string is a whitespace for real. 

What kind of tests we got for your code:

    1- Function have to count words, but not spaces, so be sure that it does right.
    2- Empty string has no words.
    3- String with spaces around should be trimmed.
    4- Non-whitespace (ex. breakspace, unicode chars) should be assumed as delimiter
    5- Be sure that words with chars like -, ', ` are counted right.
*/

const countWords = str => str.trim().split(/\s+/).filter(c => c).length;