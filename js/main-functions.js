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
    logoText.innerText = options.title;

    logoA.append(logoImg);
    logoA.append(logoText);
    logo.append(logoA);
    headerContainer.append(logo);
    container.append(headerContainer);
    header.append(container);

    body.append(header);
}

function createNav() {
    const headerContainer = document.querySelector('.header-container');

    const nav = document.createElement('nav');

    const navMenu = document.createElement('ul');
    navMenu.classList.add('nav-menu');

    const li1 = document.createElement('li');
    li1.classList.add('nav-link', 'home-link');
    li1.innerText = options.link_text1;

    const li2 = document.createElement('li');
    li2.classList.add('nav-link', 'about-link');
    li2.innerText = options.link_text2;

    navMenu.append(li1);
    navMenu.append(li2);
    nav.append(navMenu);
    headerContainer.append(nav);
}

function createMain() {
    const main = document.createElement('main');

    body.append(main);
}

function createGameScreen() {
    const main = document.querySelector('main');

    main.innerHTML = '';

    const container = document.createElement('div');
    container.classList.add('container');

    const h1 = document.createElement('h1');
    h1.innerText = options.index_h1;

    const gameWrapper = document.createElement('div');
    gameWrapper.classList.add('game-wrapper');

    container.append(h1);
    container.append(gameWrapper);
    main.append(container);
}

function createGallowField() {
    const gameWrapper = document.querySelector('.game-wrapper');

    const gallowfield = document.createElement('div');
    gallowfield.classList.add('gallowfield');

    const gallow = document.createElement('div');
    gallow.classList.add('gallow');

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
    showKeyboardButton.classList.add('show-keyboard-button');
    showKeyboardButton.addEventListener('click', function () {
        showMobileKeyboard();
    });

    showKeyboard.append(showKeyboardButton);

    const keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');

    const characterQuoteBlock = document.createElement('div');
    characterQuoteBlock.classList.add('character-quote-block');

    playfield.append(task);
    playfield.append(attempts);
    playfield.append(showKeyboard);
    playfield.append(keyboard);
    playfield.append(characterQuoteBlock);

    gameWrapper.append(playfield);
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

function createAboutScreen() {
    const main = document.querySelector('main');

    main.innerHTML = '';

    const container = document.createElement('div');
    container.classList.add('container');

    const h1 = document.createElement('h1');
    h1.innerText = options.about_h1;

    const content = document.createElement('div');
    content.classList.add('content');
    content.innerHTML = options.about_text;

    container.append(h1);
    container.append(content);
    main.append(container);
}

function addActiveLink(activeLink) {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.classList.remove('active');
        if (link.classList.contains(activeLink)) {
            link.classList.add('active');
        }
    });
}

function pageIndex() {
    addActiveLink('home-link');
    createGameScreen();
    createGallowField();
    createPlayField();
    startGame();
}

function pageAbout() {
    addActiveLink('about-link');
    createAboutScreen();
}