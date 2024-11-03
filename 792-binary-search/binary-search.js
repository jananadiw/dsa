/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    // sorted
    // ascending

    let start = 0;
    let end = nums.length - 1;

    while(start <= end) {
    let middle = Math.floor((start + end)/2);

    if(nums[middle] === target) {
        return middle
    }

    if(target > nums[middle]){
        start = middle + 1;
    }else {
        end = middle - 1;
    }
    }
    return -1;

};