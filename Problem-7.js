function findEvenNumbers(arr) {
    let evenNumbers = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        }
    }
    return evenNumbers;
}

const result = findEvenNumbers([1, 2, 3, 4, 5, 6])
console.log(result);
