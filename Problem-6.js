// Sum of Array
function sumArray(arr) {
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
const result = sumArray([1, 2, 3, 4])
console.log(result);
