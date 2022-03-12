function FunctionBind(fn, obj) {
    return function () {
        return fn.apply(obj);
    };
}
var bindFn = FunctionBind(function () {
    return this;
}, { "a": 1, "b": 2 });
console.log(bindFn());
