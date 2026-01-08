// Capital Letter
function capitalWords(str) {
    let words = str.split(" ");
    let result = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let capitalWord = word[0].toUpperCase() + word.slice(1);
        result.push(capitalWord);
    }
    return result.join(" ");
}

const result = capitalWords("hello world")
console.log(result);
