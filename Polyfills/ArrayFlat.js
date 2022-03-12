/*
A base case: If depth is reached then push arr in output and return it.
A recursion case: Loop over array and check if its an Array or not. If its an array flat it, else push the number in output.
 */
var arr = [1, 2, [3, [7]], 4];
function ArrayFlat(arr, depth, output) {
    if (depth === void 0) { depth = Infinity; }
    if (output === void 0) { output = []; }
    if (depth === -1) {
        output.push(arr);
        return output;
    }
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var item = arr_1[_i];
        if (Array.isArray(item)) {
            ArrayFlat(item, depth - 1, output);
        }
        else {
            output.push(item);
        }
    }
    return output;
}
console.log(ArrayFlat(arr));
// function flat(arr, depth = 1, output = []) {
//     for (const item of arr) {
//       if (depth > 0 && Array.isArray(item)) {
//         flat(item, depth - 1, output);
//       } else {
//         output.push(item);
//       }
//     }
//     return output;
//   }
//   console.log(flat(arr));
function flat(arr, output) {
    if (output === void 0) { output = []; }
    for (var _i = 0, arr_2 = arr; _i < arr_2.length; _i++) {
        var item = arr_2[_i];
        if (Array.isArray(item)) {
            flat(item, output);
        }
        else {
            output.push(item);
        }
    }
    return output;
}
console.log(flat(arr));
