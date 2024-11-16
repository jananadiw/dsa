/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let bracketsMap = new Map([
    ['(' , ')'],
    ['[' , ']'],
    ['{' , '}',]
]);

    //use a stack to store while iterating the string
    // ([]) => we have to be deleting from the back of the list, top of the stack
    // hense use a stack. 

    let stack = [];
    //if does not match, keep adding to the stack
    for(let char of s){
        if (bracketsMap.has(char)){
            stack.push(char)
        }else {
            //if c is a closing bracket,
            if (stack.length === 0 || bracketsMap.get(stack.pop()) !== char) {
                return false;
            }
        }
    }
    return stack.length === 0;
};