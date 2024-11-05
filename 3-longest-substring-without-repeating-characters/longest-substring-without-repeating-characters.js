/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // improvement: use sliding window with two pointers
    // ex:      a, b, c, a, b, c, b, b
    // leftP    
    // rightP    
    // charSet []
    
    let charSet = new Set();

    let leftP = 0;

    let maxLength = 0;

    for(let rightP = 0; rightP < s.length; rightP++){
        while(charSet.has(s[rightP])){
            charSet.delete(s[leftP]);
            leftP++;
        }
        charSet.add(s[rightP]);
        let currentSubstrLength = (rightP - leftP) + 1;
        maxLength = Math.max(maxLength, currentSubstrLength);
    }

    return maxLength;
};