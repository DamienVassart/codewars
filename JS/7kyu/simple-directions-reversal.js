// In this Kata, you will be given directions and your task will be to find your way back. 

function solve(dir) {
    return dir.reverse().map((str, i, arr) => {
        if(i == 0) return str.replace(/^\w+/, 'Begin'); 
        else return (arr[i - 1].includes('Left')) ? str.replace(/^\w+/, 'Right') : str.replace(/^\w+/, 'Left');
    });
}