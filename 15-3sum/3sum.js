/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

    // brute force: loop 3 times => O(n^3)

    
    // nums[i] = -1, nums[j] = 0, nums[k] = 1;

    // 1. sort the nums arr => O(nlogn)
    // 2. iterate through nums with i
    // 3. use two pointers (j is next to i, k at the back of the array)
    
    nums.sort((a,b) => a - b); 
    let result = [];

    for(let i=0; i<nums.length-2; i++){
        //check for duplicates
        if(i>0 && nums[i] === nums[i - 1]) continue;

        let j = i+1;
        let k = nums.length - 1;

        while(j<k) {
            let sum = nums[i] + nums[j] + nums[k];

            if(sum === 0){
                result.push([nums[i], nums[j], nums[k]]);

                while(nums[j] === nums[j+1]) j++;
                while(nums[k] === nums[k+1]) k--;

                j++;
            }else if(sum > 0){
                k--;
            }else{
                j++;
            }
        }
    }
    
        return result;
};