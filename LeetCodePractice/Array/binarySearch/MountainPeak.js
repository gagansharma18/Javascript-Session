//https://leetcode.com/problems/peak-index-in-a-mountain-array/
//https://leetcode.com/problems/find-peak-element/
/**
 * @param {number[]} arr
 * @return {number}
 */
 var peakIndexInMountainArray = function(arr) {
    let start = 0;
    let end = arr.length-1;
    while(start < end){ //loop will break when last element will remain or start,end and mid will be on same index
        let mid = ~~(start + (end-start)/2);
        if(arr[mid] > arr[mid+1]){
            //We are in decreasing part of array
            //this might be possible answer but look at left, this is why end != mid - 1
            end = mid;
        }else{
            //We are in the increasing part of array
            start = mid + 1; // because we know that mid + 1 element is greater then mid element, because its else part
        }
    }
    return start; // in the end start == end pointing to the largest number because of the 2 checks above
}; 


/*
 * @param {number[]} nums
 * @return {number}
 */
/*
 var findPeakElement = function(nums) {
    const max = Math.max(...nums)
    return nums.indexOf(max)
};
*/
const arr = [0,3,6,8,10,5,2,1];
console.log(peakIndexInMountainArray(arr));