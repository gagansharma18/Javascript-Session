function ArrayMap(arr:Array<any>,cb:Function){
    const output = [];
    for (const ind in arr){
            output.push(cb(arr[ind], ind, arr));
    }
    return output;
}


const arr:Array<Number> = [1,2,3,4,5,6];
console.log(ArrayMap(arr,item => item * 2));

const words:Array<String> = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

console.log(ArrayMap(words, word => word.length > 6));
