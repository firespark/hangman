function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffleArray(array) {
    let currentIndex = array.length;
    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
}

function playAudio(title) {
    if (title != '') {
        const audio = new Audio();
        audio.src = `./audio/${title}.mp3`;
        audio.currentTime = 0;
        audio.loop = false;
        audio.play();
    }
}

