//https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function search(nums, target, searchStartIndex){
    let ans = -1;
    let start = 0;
    let end = nums.length-1;
    while(start <= end){
        let mid = parseInt(start + (end-start)/2);
        if(target > nums[mid]){
            start = mid + 1;
        }else if(target < nums[mid]){
            end = mid - 1;
        }else{
            //potential answer found
            ans = mid; //this answer will keep on update until extreams are not found
            if(searchStartIndex){ 
                end = mid - 1; //shift end mid-1 to find the extreme left of tatget
            }else{
                start = mid + 1; //shift start mid+1 to find the extreme right of tatget
            }
        }
    }
    return ans;
}
 var searchRange = function(nums, target) {
     let ans = [-1,-1];
   ans[0] = search(nums, target, true);
   ans[1] = search(nums, target, false);
   return ans;
};

/*
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
*/
const arr = [5,7,7,8,8,10];
console.log(searchRange(arr,8));