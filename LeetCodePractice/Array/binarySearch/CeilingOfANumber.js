

function CeilingOfANumber(arr,target){
    let start = 0;
    let end = arr.length - 1;
    if(target > arr[end]){
        return -1;
    }
    while(start <= end){
        let mid = parseInt(start + (end - start)/2);
        if(arr[mid] > target){
            end = mid - 1;
        }else{
            start = mid + 1;
        }
    }
    return start; 
}

const arr = [1,3,5,7,9,11,13,15,18];

console.log(CeilingOfANumber(arr,16)); //18
console.log(CeilingOfANumber(arr,19)); //NOT FOUND
console.log(CeilingOfANumber(arr,10));
console.log(CeilingOfANumber(arr,1));
console.log(CeilingOfANumber(arr,0));




// function CeilingOfANumberMy(arr,target){
//     let startIndex = 0;
//     let endIndex = arr.length - 1;
//     let stepsCount = 0;
//     let mid;
//     while(startIndex <= endIndex){
//         console.log("Steps",++stepsCount, "Start",startIndex ,"end", endIndex,"mid", mid);
//         mid = parseInt(startIndex + (endIndex - startIndex)/2);
//         if(arr[startIndex] === target){
//             return startIndex;
//         }else if(arr[endIndex] === target){
//             return endIndex;
//         }else if(arr[mid] === target){
//             return mid;
//         }
//        if(arr[mid] > target){
//         endIndex = mid - 1;
//        }else{
//         startIndex = mid + 1;
//        }
//     }
//     console.log("Start",startIndex ,"end", endIndex,"mid", mid);
//     if(startIndex <= arr.length-1){
//         console.log("answer", arr[mid+1])
//     }else{
//         console.log("Not found")
//     } 
// }
