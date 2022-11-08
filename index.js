//Selecting an Element
/*
console.log(document.querySelector('.message').textContent);
//DOM (Document Object Model)
document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);
console.log(document.querySelector('.number').textContent);
console.log(document.querySelector('.score').textContent);
document.querySelector('.number').textContent = '0';
document.querySelector('.score').textContent = '0';
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('😛 No Number');
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('You win ✨');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //document.querySelector('.message').textContent =
      //  guess > secretNumber ? 'To High 📈' : 'To Low 📉';
      displayMessage(guess > secretNumber ? 'To High 📈' : 'To Low 📉');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lost The Game 💔');
      document.querySelector('.score').textContent = 0;
    }
  }
  /*else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'To High 📈';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost The Game 💔';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'To Low 📉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost The Game 💔';
      document.querySelector('.score').textContent = 0;
    }
  }*/
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.highscore').textContent = '0';
});
