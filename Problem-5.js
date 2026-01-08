// Dplicates
function removeDuplicates(arr) {
    let singleNum = [];

    for (let i = 0; i < arr.length; i++) {
        if (singleNum.indexOf(arr[i]) === -1) {
            singleNum.push(arr[i]);
        }
    }
    return singleNum;
}
const result = removeDuplicates([1, 2, 2, 3, 4, 4])
console.log(result);
