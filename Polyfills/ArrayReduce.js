function ArrayReduce(arr, cb, initialVal) {
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var item = arr_1[_i];
        initialVal = cb(initialVal, item);
    }
    return initialVal;
}
var arr = [1, 2, 3, 4, 5];
console.log(ArrayReduce(arr, function (a, b) { return a + b; }, 0));
