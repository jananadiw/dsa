
// initializing a 2D array:

// 1. Using array literal notation
let twoDArray = [[1,2,4], [2,4,5], [4,5,6]];

// 2. Using the Array constructor and nested loops;
const rows = 3;
const cols = 4;
let twoDArray2 = new Array(rows);
for(let i=0; i<rows; i++) {
    twoDArray2[i] = new Array(cols);
}

// 3. Using the Array.from() method
let twoDArray3 = Array.from({length: rows}, () => Array(cols).fill(0));

// 4. fill() and map() methods
let twoDArray4 = Array(rows).fill().map(() => Array(cols).fill(0));

console.log(Array(4).fill(0));
