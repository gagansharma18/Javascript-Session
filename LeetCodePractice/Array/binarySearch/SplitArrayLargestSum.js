//https://leetcode.com/problems/split-array-largest-sum/
/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
 var splitArray = function(nums, m) {
    if(nums.length < m) return false;
   let start = 0;
   let end = 0;
   /*
   case 1
   if m = 1 so we can have n sub-arrays and we need the max sum of sub array so max element in the array is the answer
   if m = n so we can have only 1 sub-array and max sum of sub arrays will be sum of all the elements in the array and it will be the answer
   */  
   for (let i = 0; i < nums.length; i++) {
    start = start < nums[i] ? nums[i] : start; //Max in indivisual element
    end += nums[i]; // sum of all the numbers is max
   }
   
   //Binary search
   while( start < end){
       // try for the middle a potential answer
       let mid = ~~(start + (end-start) / 2);
       // calculate how many pices you can divide this 
       let sum = 0;
       let pieces = 1;

       for (const num of nums) {
           if(sum + num > mid){
               // you cannot add this in subarray, make new one
               // say you add this num in new sub array then sum = num
                sum = num;
                pieces++;
           }else{
                sum +=num;
           }
       }

       if(pieces > m){
           start = mid + 1;
       }else{
           end = mid;
       }
   }
   return end; //here start = end 
};
const nums = [7,2,5,10,8], m = 2;
console.log(splitArray(nums,m));
/*
[7,2,5,10,8] m =2

[7,2,5,10],[8] 24
[7,2,5],[10,8] 18
[7,2],[5,10,8] 23
[7],[2,5,10,8] 25


start is 10
end is 32
mid = 21

*/