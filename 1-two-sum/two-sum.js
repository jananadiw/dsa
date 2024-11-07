/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // 2 + 7 = 9 target, return nums[0],nums[1]
    // iterate twice with 2 vars.. => 
    // for()
    //   for() => 0n^2
    // hashmap --> save the [complement, index] --> [(9-2), 0] -> [7, 0]
    // [7, 0]
    // [2, 1]
    // [-2, 2]... 

    let map = new Map();
    
    for(let i=0; i<nums.length; i++){
        let complememt = target - nums[i];
        if(map.has(nums[i])){
            return [map.get(nums[i]), i]
        }else{
        map.set(complememt, i);
        }

    }
    return [];
};