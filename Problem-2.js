//Count v
function countVowels(str) {
    let count = 0;
    let v = "aeiouAEIOU";

    for (let i = 0; i < str.length; i++) {
        if (v.indexOf(str[i]) !== -1) {
            count++;
        }
    }
    return count;
}
const result = countVowels("programming")
console.log(result)
