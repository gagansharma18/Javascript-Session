// const array1 = ['a', 'b', 'c'];
// array1.forEach(element => console.log(element));
function arrForEach(arr, cb) {
    if (!Array.isArray(arr)) {
        return;
    }
    for (var ind in arr) {
        cb(arr[ind], ind, arr);
    }
}
var array1 = ['a', 'b', 'c'];
arrForEach(array1, function (element) { return console.log(element); });
