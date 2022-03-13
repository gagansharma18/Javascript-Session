function ArrayFilter(arr:Array<any>,cb:Function){
    const output = [];
    for (const ind in arr){
        if(cb(arr[ind], ind, arr)){
            output.push(arr[ind])
        }
    }
    return output;
}


const arr:Array<Number> = [1,2,3,4,5,6];
console.log(ArrayFilter(arr, (item: number) => item > 3));

const words:Array<String> = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

console.log(ArrayFilter(words, (word: string | any[]) => word.length > 6));
