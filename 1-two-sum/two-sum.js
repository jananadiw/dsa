/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    // brute force: iterate through the array couple of times, searching for the match.
    // Time Complexity: O(n^2).

    // efficient to use a hashmap.
    // use a hashmap & save the complement to current number and it's index;
    /* 
        {
            7, 0,
            2, 1
        }
    */
    let map = new Map();
    for(let i=0; i <nums.length; i++){

        if(map.has(nums[i])){
            // return the complement index and the current index
            return [map.get(nums[i]), i];
        }else{
            // if not found, set the complement and current index in the hashmap
            map.set((target - nums[i]), i);
        }
    }
    return [];
};