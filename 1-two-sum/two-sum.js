/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // bf: iterate nums 2 times nad find a pair that sums up to target. => O(n^2)
    // optimized: Use a hashmap
    // value    : index.  [2, 7, 11, 15] target = 9 
    //   7 (9-2):  0       0, 1,  2, 3
    // move to next (7), that is in the hashmap.
    // return [0(current number's hashmap index), 1 (current number index)]

    let map = new Map();

    for(let i=0; i<nums.length; i++){

        if(map.has(nums[i])){
            return [map.get(nums[i]), i];
        }else{
            let complement = target - nums[i];
            map.set(complement, i);
        }
    }

    return [];
};
