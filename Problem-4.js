// Maximum Number
function findMax(a) {
    var max = a[0];

    for (var i = 1; i < a.length; i++) {
        if (a[i] > max) {
            max = a[i];
        }
    }
    return max;
}
const result = findMax([5, 1, 9, 19])
console.log(result);
