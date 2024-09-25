function getRandomWord() {
    const randomKey = getRandomInt(0, words.length - 1);
    return words[randomKey];
}

function getRandomQuote() {
    const randomKey = getRandomInt(0, quotes.length - 1);
    return quotes[randomKey];
}

function createTask() {

    const task = document.querySelector('.task');

    const word = document.createElement('div');
    word.classList.add('word');

    const hint = document.createElement('div');
    hint.classList.add('hint');

    for (let i = 0; i < secretWord.length; i++) {
        let wordLetter = document.createElement('div');
        wordLetter.classList.add('word-letter');
        word.append(wordLetter);

    }

    hint.innerText = secretWordObj.hint;

    task.append(word);
    task.append(hint);
}

function createAttempts() {
    const attempts = document.querySelector('.attempts');

    attempts.innerHTML = `Wrong Attempts: <span class="used">${wrongAttempts}</span> / <span class="total">${totalAttempts}</span>`;
}

function createQuote() {
    const characterQuoteBlock = document.querySelector('.character-quote-block');

    characterQuoteBlock.innerHTML = '';

    const characterQuote = document.createElement('div');
    characterQuote.classList.add('character-quote');

    const portrait = document.createElement('div');
    portrait.classList.add('portrait');

    const portraitImg = document.createElement('img');
    portraitImg.src = `img/characters/${getRandomInt(1, 15)}.png`;

    portrait.append(portraitImg);

    const quote = document.createElement('div');
    quote.classList.add('quote');
    quote.innerText = getRandomQuote();

    characterQuote.append(portrait);
    characterQuote.append(quote);
    characterQuoteBlock.append(characterQuote);
}

function findLetterInWord(letter) {
    let letterExists = false;
    const wordLetters = document.querySelectorAll('.word-letter');

    for (let i = 0; i < secretWord.length; i++) {

        if (secretWord[i] === letter) {
            wordLetters[i].innerText = letter;
            wordLetters[i].classList.add('correct');
            letterExists = true;
        }

    }

    return letterExists;
}

function changeAttempts() {
    if (wrongAttempts < totalAttempts) {
        const usedAttempts = document.querySelector('.attempts .used');
        wrongAttempts++;
        usedAttempts.innerText = wrongAttempts;
    }
}

function hangBjorn() {
    const gallow = document.querySelector('.gallow');
    const gallowImg = document.createElement('img');
    gallowImg.classList.add('part')

    switch (wrongAttempts) {
        case 1:
            gallowImg.src = 'img/bjorn/head.png';
            gallowImg.classList.add('head');
            break;

        case 2:
            gallowImg.src = 'img/bjorn/torso.png';
            gallowImg.classList.add('torso');
            break;

        case 3:
            gallowImg.src = 'img/bjorn/leftarm.png';
            gallowImg.classList.add('leftarm');
            break;

        case 4:
            gallowImg.src = 'img/bjorn/rightarm.png';
            gallowImg.classList.add('rightarm');
            break;

        case 5:
            gallowImg.src = 'img/bjorn/leftleg.png';
            gallowImg.classList.add('leftleg');
            break;

        case 6:
            gallowImg.src = 'img/bjorn/rightleg.png';
            gallowImg.classList.add('rightleg');
            break;

    }

    gallow.append(gallowImg);
}

function checkGameFinish() {

    if (wrongAttempts >= totalAttempts) {
        setTimeout(gameFinish, 1000, false);
        //gameFinish(false);
    }
    else {
        const correctLetters = document.querySelectorAll('.word-letter.correct');
        if (correctLetters.length >= secretWord.length) {
            //gameFinish();
            setTimeout(gameFinish, 1000);
        }
    }
}

function gameFinish(won = true) {

    const noticeOverlay = document.querySelector('.notice-overlay');

    noticeOverlay.innerHTML = '';

    const noticeBlock = document.createElement('div');
    noticeBlock.classList.add('notice-block');
    if (won) {
        noticeBlock.classList.add('success');
    }
    else {
        noticeBlock.classList.add('fail');
    }

    const noticeImgBlock = document.createElement('div');
    noticeImgBlock.classList.add('notice-img');
    const noticeImg = document.createElement('img');
    if (won) {
        noticeImg.src = 'img/success.png';
    }
    else {
        noticeImg.src = 'img/fail.png';
    }
    noticeImgBlock.append(noticeImg);

    const noticeText = document.createElement('div');
    noticeText.classList.add('notice-text');
    if (won) {
        noticeText.innerText = 'Congratulations! You won!';
    }
    else {
        noticeText.innerText = 'Lol You died!';
    }

    const noticeScore = document.createElement('div');
    noticeScore.classList.add('notice-score');
    if (won) {
        noticeScore.classList.add('success');
    }
    else {
        noticeScore.classList.add('fail');
    }
    noticeScore.innerHTML = `Secret word: <strong>${secretWord}</strong>`;

    const noticeButtons = document.createElement('div');
    noticeButtons.classList.add('notice-buttons');

    const noticeButton = document.createElement('div');
    noticeButton.classList.add('notice-button', 'play-again');
    noticeButton.innerText = 'Play Again';

    noticeButtons.append(noticeButton);

    noticeBlock.append(noticeImgBlock);
    noticeBlock.append(noticeText);
    noticeBlock.append(noticeScore);
    noticeBlock.append(noticeButtons);

    noticeOverlay.append(noticeBlock);
    noticeOverlay.classList.remove('dnone');
}

function clickLetter(button, letter) {
    if (findLetterInWord(letter)) {
        button.classList.add('correct');
    }
    else {
        button.classList.add('incorrect');

        changeAttempts();
        hangBjorn();


    }
    createQuote();
    checkGameFinish();
}