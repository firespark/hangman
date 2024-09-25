function getRandomWord() {
    const randomKey = getRandomInt(0, words.length - 1);
    return words[randomKey];
}

function createTask() {
    const word = getRandomWord();
    console.log(word);
}