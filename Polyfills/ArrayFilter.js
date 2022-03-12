function ArrayFilter(arr, cb) {
    var output = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var item = arr_1[_i];
        if (cb(item)) {
            output.push(item);
        }
    }
    return output;
}
var arr = [1, 2, 3, 4, 5, 6];
console.log(ArrayFilter(arr, function (item) { return item > 3; }));
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
console.log(ArrayFilter(words, function (word) { return word.length > 6; }));
