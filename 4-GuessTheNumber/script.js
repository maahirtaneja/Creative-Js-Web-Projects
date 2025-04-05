let randomNumber = Math.floor(Math.random() * 100) + 1;

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

let p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    displayMessage("❗ Please enter a valid number.");
  } else if (guess < 1 || guess > 100) {
    displayMessage("🚫 Enter a number between 1 and 100.");
  } else if (prevGuess.includes(guess)) {
    displayMessage("⚠️ You already guessed that number!");
  } else {
    prevGuess.push(guess);
    displayGuess(guess);
    checkGuess(guess);
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage("🎉 You guessed it right!");
    endGame();
  } else if (numGuess > 10) {
    displayMessage(`❌ Game Over! The number was ${randomNumber}.`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("📉 Too Low!");
  } else {
    displayMessage("📈 Too High!");
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML = prevGuess.join(', ');
  remaining.innerHTML = `${10 - numGuess}`;
  numGuess++;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  submit.setAttribute('disabled', '');

  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">🔄 Start New Game</h2>`;
  
  if (!document.querySelector('#newGame')) {
    startOver.appendChild(p);
  }

  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function () {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log("New Random Number:", randomNumber);

    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = '10';
    lowOrHi.innerHTML = '';
    userInput.removeAttribute('disabled');
    submit.removeAttribute('disabled');

    if (p.parentElement) {
      startOver.removeChild(p);
    }

    playGame = true;
  });
}
