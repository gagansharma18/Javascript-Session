function bubbleSort(arr){
    let swapped = false;
    for (let i = 0; i < arr.length; i++) {
       for (let j = 1; j < arr.length - i; j++) {
           if(arr[j-1] > arr[j]){
               [arr[j-1],arr[j]]=[arr[j],arr[j-1]];
               swapped = true;
           }
       }
       if(!swapped){
           break;
       }
    }
    return arr;
}



//console.log(bubbleSort([5,4,3,2,1]));
console.log(bubbleSort([1,2,3,4,5]));