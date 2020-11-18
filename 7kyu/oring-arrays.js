/*
It started as a discussion with a friend, who didn't fully grasp some way of setting defaults, 
but I thought the idea was cool enough for a beginner kata: 
binary OR each matching element of two given arrays (or lists, if you do it in Python; vectors in c++) 
of integers and give the resulting ORed array [starts to sound like a tonguetwister, doesn't it?].

If one array is shorter than the other, 
use the optional third parametero (defaulted to 0) to OR the unmatched elements.
*/

function orArrays(arr1, arr2, or) {
    if (arr1.length == arr2.length) return arr1.map((n, i) => n | arr2[i]);
    else return arr1.length > arr2.length 
    ? arr1.map((n, i) => n | (arr2[i] || or))
    : arr2.map((n, i) => n | (arr1[i] || or))
}