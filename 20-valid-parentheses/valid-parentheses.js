/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

let stack = [];
let brackets = new Map([
    ['(' , ')'],
    ['[' , ']'],
    ['{' , '}',]
]);
for (let c of s) {     
        if (brackets.has(c)) {
            // If c is an opening bracket, push it onto the stack
            stack.push(c);
        } else {
            // If c is a closing bracket, check if it matches the top of the stack
            if (stack.length === 0 || brackets.get(stack.pop()) !== c) {
                return false;
            }
        }
    }

    return stack.length === 0;
};