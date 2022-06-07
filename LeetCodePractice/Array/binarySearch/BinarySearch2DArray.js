/*
[
    [1 ,3 , 8,11]
    [21,23,28,29]
    [31,33,38,50]
]
    target  31
 */

    function BinarySearch2DArr(arr,target){
        let r = 0;
        let c = arr.length-1;

        while(r < arr.length && c >= 0){
            if(arr[r][c] === target){
                return [r,c];
            }
            if(arr[r][c] < target){
                r++;
            }else{
                c--
            }
        }
        return[-1,-1];

    }

    const arr =[
        [1 ,3 , 8,11],
        [21,23,28,29],
        [31,33,38,50]
    ]
    const target =  31
    console.log(BinarySearch2DArr(arr,target));