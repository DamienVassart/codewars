/*
Complete the function that returns a christmas tree of the given height. 
The height is passed through to the function and the function should return a list containing each line of the tree.

XMasTree(5) should return : ['____#____', '___###___', '__#####__', '_#######_', '#########', '____#____', '____#____']
XMasTree(3) should return : ['__#__', '_###_', '#####', '__#__', '__#__']
*/

const xMasTree = n => [... Array(n + 2)].map((e, i) => { 
        i = i < n ? i : 0;
        e = '#'.repeat(2 * i + 1).padStart(n + i, '_').padEnd((2 * n - 1), '_');
        return e;
    });