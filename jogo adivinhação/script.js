const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const resultParagraph = document.getElementById('result');

let secretNumber = Math.floor(Math.random() * 100) + 1;

submitButton.addEventListener('click', checkGuess);

function checkGuess() {
  const userGuess = parseInt(guessInput.value);
  if (userGuess === secretNumber) {
    resultParagraph.textContent = `Parabéns! Você acertou o número ${secretNumber}.`;
  } else if (userGuess < secretNumber) {
    resultParagraph.textContent = `O número é maior que ${userGuess}. Tente novamente!`;
  } else {
    resultParagraph.textContent = `O número é menor que ${userGuess}. Tente novamente!`;
  }
  guessInput.value = '';
}