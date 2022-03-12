function ArrayFilter(arr:Array<any>,cb:Function){
    const output = [];
    for (const item of arr){
        if(cb(item)){
            output.push(item)
        }
    }
    return output;
}


const arr:Array<Number> = [1,2,3,4,5,6];
console.log(ArrayFilter(arr,item => item > 3));

const words:Array<String> = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

console.log(ArrayFilter(words, word => word.length > 6));
