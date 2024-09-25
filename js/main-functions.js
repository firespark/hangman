const body = document.body;

function createHeader() {

    const header = document.createElement('header');

    const container = document.createElement('div');
    container.classList.add('container');

    const headerContainer = document.createElement('div');
    headerContainer.classList.add('header-container');
    
    const logo = document.createElement('div');
    logo.classList.add('logo');

    const logoA = document.createElement('a');
    logoA.href = 'index.html';

    const logoImg = document.createElement('img');
    logoImg.src = 'img/logo.png';

    const logoText = document.createElement('div');
    logoText.classList.add('logo-text');
    logoText.innerText = 'Hangman';
    
    logoA.append(logoImg);
    logoA.append(logoText);
    logo.append(logoA);
    headerContainer.append(logo);
    container.append(headerContainer);
    header.append(container);

    body.append(header);
}

function createMain() {
    const main = document.createElement('main');

    const container = document.createElement('div');
    container.classList.add('container');

    const h1 = document.createElement('h1');
    h1.innerText = 'Hangman Game';

    const gameWrapper = document.createElement('div');
    gameWrapper.classList.add('game-wrapper');

    container.append(h1);
    container.append(gameWrapper);
    main.append(container);

    body.append(main);
}

function createGallowField() {
    const gameWrapper = document.querySelector('.game-wrapper');

    const gallowfield = document.createElement('div');
    gallowfield.classList.add('gallowfield');
    
    const gallow = document.createElement('div');
    gallow.classList.add('gallow');

    const noose = document.createElement('img');
    noose.src = 'img/noose.png';
    noose.classList.add('noose');

    gallow.append(noose);
    gallowfield.append(gallow);
    gameWrapper.append(gallowfield);
}

function createPlayField() {
    const gameWrapper = document.querySelector('.game-wrapper');

    const playfield = document.createElement('div');
    playfield.classList.add('playfield');

    const task = document.createElement('div');
    task.classList.add('task');

    const attempts = document.createElement('div');
    attempts.classList.add('attempts');

    const showKeyboard = document.createElement('div');
    showKeyboard.classList.add('show-keyboard');

    const showKeyboardButton = document.createElement('div');
    showKeyboardButton.classList.add('show-keyboard');

    showKeyboard.append(showKeyboardButton);

    const keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');

    const close = document.createElement('div');
    close.classList.add('close');
    close.innerText = 'x';

    keyboard.append(close);

    const characterQuoteBlock = document.createElement('div');
    characterQuoteBlock.classList.add('character-quote-block');

    playfield.append(task);
    playfield.append(attempts);
    playfield.append(showKeyboard);
    playfield.append(keyboard);
    playfield.append(characterQuoteBlock);

    gameWrapper.append(playfield);
}

function createKeyboard() {
    const keyboard = document.querySelector('.keyboard');
    const alphabet = 'QWERTYUIOPASDFGHJKLZXCVBNM';

    for (let i = 0; i < alphabet.length; i++) {
        let letter = document.createElement('div');
        letter.classList.add('letter');
        letter.innerText = alphabet[i];
        letter.addEventListener('click', function() {
            clickLetter(this, this.innerText);
        });
        keyboard.append(letter);
    }
}

function createFooter() {
    const footer = document.createElement('footer');

    const container = document.createElement('div');
    container.classList.add('container');

    const footerContainer = document.createElement('div');
    footerContainer.classList.add('footer-container');

    const footerBlock1 = document.createElement('div');
    footerBlock1.classList.add('footer-block');

    const aGithub = document.createElement('a');
    aGithub.classList.add('footer-github');
    aGithub.href = 'https://github.com/firespark';
    aGithub.target = '_blank';

    const imgGithub = document.createElement('img');
    imgGithub.src = 'img/github.svg';

    const spanGithub = document.createElement('span');
    spanGithub.innerText = 'https://github.com/firespark';

    aGithub.append(imgGithub);
    aGithub.append(spanGithub);

    footerBlock1.append(aGithub);

    const footerBlock2 = document.createElement('div');
    footerBlock2.classList.add('footer-block');

    const dateSpan = document.createElement('span');
    dateSpan.innerText = new Date().getFullYear();

    footerBlock2.append(dateSpan);

    const footerBlock3 = document.createElement('div');
    footerBlock3.classList.add('footer-block');

    const aRss = document.createElement('a');
    aRss.classList.add('footer-rss');
    aRss.href = 'https://rs.school/';
    aRss.target = '_blank';

    const imgRss = document.createElement('img');
    imgRss.src = 'img/rss.svg';

    aRss.append(imgRss);

    footerBlock3.append(aRss);

    footerContainer.append(footerBlock1);
    footerContainer.append(footerBlock2);
    footerContainer.append(footerBlock3);
    container.append(footerContainer);
    footer.append(container);
    body.append(footer);
}

function createNoticeOverlay() {
    const noticeOverlay = document.createElement('div');
    noticeOverlay.classList.add('notice-overlay', 'dnone');

    body.append(noticeOverlay);
}