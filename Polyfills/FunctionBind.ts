// function FunctionBind(fn,obj){
//     return function(){
//         return fn.apply(obj);
//     }
// }

// const bindFn = FunctionBind(function(){
//                                 return this;
//                             },{"a":1,"b":2});

// console.log(bindFn());

Function.prototype.BindCust(fn,obj){
    return function(){
        return fn.apply(obj);
    }
}

// const bindFn = FunctionBind(function(){
//                                 return this;
//                             },{"a":1,"b":2});

// console.log(bindFn());
