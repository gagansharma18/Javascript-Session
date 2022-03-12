function ArrayReduce(arr:Array<any>,cb:Function, initialVal){
    let result = initialVal;
    for (const item of arr){
        result = cb(result,item)
    }
    return result;
}

const arr = [1,2,3,4,5];
console.log(ArrayReduce(arr,(a,b)=>a+b,0))