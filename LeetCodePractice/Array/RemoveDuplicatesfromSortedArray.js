//https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/
/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    const output = [];
    for (const num of nums){
        if(output.indexOf(num) === -1){
            output.push(num);
        }
    }
    return output.length;
};

//console.log(removeDuplicates([1,1,2]));
//two pointers
var removeDuplicatesBetter = function(nums) {
    let p1=0;
    let p2=1;
    for (let i=0; i < nums.length; i++){
        if(nums[p1] === nums[p2]){
            p1++;
        }else{
           // nums[p1] = nums[p2]
            p2++;
        }
    }
    return p1;
};

console.log("BETTER",removeDuplicatesBetter([1,1,3]));