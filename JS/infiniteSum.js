
//SIMPLE
const sumInfinity = a => b => b ? sumInfinity(a+b) : a;

console.log("1.",sumInfinity(1)(2)(3)());

//SIMPLE with Value
const sumInfinityValue = (a) => {
    const returnFun = (b) => {
        return sumInfinityValue(a+b);
    }
    returnFun.value = a;
    return returnFun;
}

console.log("2.",sumInfinityValue(1)(2)(3).value);

// MULTI ARGUMENTS
function sumArgsAll(...args1){
    const sum1 = args1.reduce((a,b)=>a+b,0);
    return function(...args2){
        const sum2 = args2.reduce((a,b)=>a+b,0);
        return args2.length == 0 ? sum1 : sumArgsAll(sum1+sum2);
    }
}
console.log("3.",sumArgsAll(1,2,3)(1,2,3)(1)());

// with .value
function sumArgsAllValue(...args1){
   function add(...args2){
        return sumArgsAllValue(...args1,...args2);
    }
    add.value = args1.reduce((a,b) => a+b);
    return add;
}
console.log("4.",sumArgsAllValue(1,2,3)(1,2,3)(1).value);



// with without stopper

function sumArgsAllWithoutStopper(...args1){
    function add(...args2){
         return sumArgsAllWithoutStopper(...args1,...args2);
     }
     add.toString = () => args1.reduce((a,b) => a+b);
     return add;
 }
 console.log("5.",sumArgsAllWithoutStopper(1,2,3)(1,2,3)(1).toString());