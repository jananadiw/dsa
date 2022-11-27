/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    // O(n^2)
    // return s.split('').sort().join('') === t.split('').sort().join('')

    // O(n) linear solution
    if(s.length !== t.length ) return false;
    
    //count the occurrences for each character
    
    // use hash maps
    // { a: 3, n:1, g:1, m: 1}
    hash = {};
    
    for(let char of s) {
        hash[char] = (hash[char] || 0) + 1;
    }
    
    for (let char of t) {
        //return false if char in the object
        if (!hash[char]) return false;
        
        // else decrement the counted char from the second array
        hash[char]--;
    }
    
    return true;
};