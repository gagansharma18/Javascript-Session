// const array1 = ['a', 'b', 'c'];

// array1.forEach(element => console.log(element));
function arrForEach(arr,cb){
    if(!Array.isArray(arr)){
        return;
    }
    for(const ind in arr){
        cb(arr[ind],ind,arr);
    }
}
const array1 = ['a', 'b', 'c'];

arrForEach(array1,element => console.log(element));