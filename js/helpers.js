function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
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

