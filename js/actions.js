document.addEventListener('mouseup', function(e) {
    const keyboard = document.querySelector('.keyboard');
 
    if (keyboard && !keyboard.contains(e.target)) {
        hideMobileKeyboard();
    }
});

document.addEventListener('keydown', function(e) {
    
	if( e.key === 'Escape' ){
		hideMobileKeyboard();
	}
    else {
        const letterKey = e.key.toUpperCase();
        if (alphabet.includes(letterKey)) {
            const letter = document.getElementById(letterKey);
            clickLetter(letter, letterKey);
        }
    }
});

document.addEventListener('mouseup', function(e) {
    const noticeBlock = document.querySelector('.notice-block');
    if(noticeBlock) {
        if (!noticeBlock.contains(e.target)) {
            startGame();
        }
    }
});

document.querySelector('.home-link').addEventListener('click', function(e) {
    pageIndex();
});

document.querySelector('.about-link').addEventListener('click', function(e) {
    pageAbout();
});