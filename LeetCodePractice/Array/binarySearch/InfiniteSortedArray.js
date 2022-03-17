//Position of an Element in Infinite Sorted Array

function findRange(arr,target){
    let start = 0;
    let end = 1;
    while(arr[end] < target){
        let temp = start;
        end = end + (end - start + 1) * 2; //Double the box size where box is end-start
        start = temp;
    }
    return BinarySearch(arr,target,start,end)
}

function BinarySearch(arr,target,start,end){
    while(start <= end){
        let mid = parseInt(start + (end - start)/2);
        if(target > arr[mid]){
            start = mid + 1;
        }else if(target < arr[mid]){
            end = mid - 1;
        }else{
            return mid;
        }
    }
    return -1;
}


let nums = [1,3,10,13,17,18,19,20,24,27,33,36,38,43,47,55];//27
console.log(findRange(nums,27));