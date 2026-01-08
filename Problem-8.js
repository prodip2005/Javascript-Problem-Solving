// Capital Letter
function capitalWords(str) {
    var words = str.split(" ");
    var result = [];

    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        var capitalWord = word[0].toUpperCase() + word.slice(1);
        result.push(capitalWord);
    }
    return result.join(" ");
}

const result = capitalWords("hello world")
console.log(result);
