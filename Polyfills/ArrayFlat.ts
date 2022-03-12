/*
A base case: If depth is reached then push arr in output and return it.
A recursion case: Loop over array and check if its an Array or not. If its an array flat it, else push the number in output.
 */
const arr = [1, 2, [3, [7]], 4];
function ArrayFlat(arr:Array<any>, depth:any=Infinity, output:Array<any>=[]):Array<any>{
    if(depth===-1){
        output.push(arr);
        return output;
    }
    for (const item of arr) {
        if(Array.isArray(item)){
            ArrayFlat(item,depth-1,output);
        }else{
            output.push(item);
        }
    }
    return output;
}
console.log(ArrayFlat(arr));



// function flat(arr, depth = 1, output = []) {
//     for (const item of arr) {
//       if (depth > 0 && Array.isArray(item)) {
//         flat(item, depth - 1, output);
//       } else {
//         output.push(item);
//       }
//     }
//     return output;
//   }
//   console.log(flat(arr));


function flat(arr,output = []) {
    for (const item of arr) {
      if (Array.isArray(item)) {
        flat(item,output);
      } else {
        output.push(item);
      }
    }
    return output;
  }
  console.log(flat(arr));