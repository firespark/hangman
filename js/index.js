const totalAttempts = 6;
let secretWordObj = getRandomWord();
let secretWord = secretWordObj.word.toUpperCase();

let wrongAttempts = 0;
let hangedParts = 0;

console.log(secretWord);

createHeader();
createMain();
createGallowField();
createPlayField();
createFooter();

createTask();
createAttempts();
createKeyboard();

createNoticeOverlay();

