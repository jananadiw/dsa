// Leet Code 217. Contains Duplicate
// https://neetcode.io/practice

// https://leetcode.com/problems/contains-duplicate/description/
// Related Topics: [Array] [Hash Table] [Sorting]


// Brute Force Solution
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let seen = [];
    for(let i=0; i<nums.length; i++) {
            if(seen.indexOf(nums[i]) === -1){
                seen.push(nums[i])
            }
    }

    return seen.length !== nums.length ? true : false;

};


// Using map
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    let seen = new Map();
      for(let num=0; num<=nums.length; num++){
          if(seen.has(nums[num])) return true;
          seen.set(nums[num]);
      }
      return false;
      
  };

