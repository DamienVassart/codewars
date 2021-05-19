/*
Your task is simply to count the total number of lowercase letters in a string.
*/

const lowercaseCount = str => (str.match(/[a-z]/g) || []).length;