// function FunctionBind(fn, obj) {
//     return function () {
//         return fn.apply(obj);
//     };
// }
// var bindFn = FunctionBind(function () {
//     return this;
// }, { "a": 1, "b": 2 });
// console.log(bindFn());

// Function.prototype.bindFn = (context,args) =>{
//     return function(){
//         return this.apply(context,...args)
//     }
// }


Function.prototype.newBind = function (context) {
    const currentContext = this;
    const currentArguments = Array.prototype.slice.call(arguments, 1); // Dont need the context
    return function () {
      const args = Array.prototype.slice.call(arguments);
      currentContext.apply(context, currentArguments.concat(args))
    }
  }