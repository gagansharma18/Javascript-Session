function ArrayMap(arr, cb) {
    var output = [];
    for (var ind in arr) {
        output.push(cb(arr[ind], ind, arr));
    }
    return output;
}
var arr = [1, 2, 3, 4, 5, 6];
console.log(ArrayMap(arr, function (item) { return item * 2; }));
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
console.log(ArrayMap(words, function (word) { return word.length > 6; }));
