'use strict';

const button = document.querySelector('.js-button');
const input = document.querySelector('.js-input');

const clue = document.querySelector('.js-clue');
const counter = document.querySelector('.js-counter');
let counterValue = 0;

function getRandomNumber(max) {
  return parseInt(Math.ceil(Math.random() * max));
}
console.log('El número aleatorio es el ' + getRandomNumber(100));

const showClues = function () {
  const randomNumber = getRandomNumber(100);
  conditionClues(randomNumber);
}

const userNumber = function () {
  event.preventDefault();
console.log('Tu número es ' + input.value);
}

 const conditionClues = function (userNumber) {
  
if (userNumber > showClues) {
  clue.innerHTML = 'Demasiado alto...¡afloja!';
} else if  (userNumber < showClues) {
  clue.innerHTML = 'Demasiado bajo...¡dale un poco de caña!';
} else if (userNumber === showClues) {
  clue.innerHTML = '¡Yeeei! ACERTASTE :)'
}
}

function updateCounter () {
  counterValue += 1;
  counter.innerHTML = counterValue;
}

const handleButton = function () {
  event.preventDefault();
  updateCounter ();
  conditionClues();
}
button.addEventListener('click',userNumber);
 button.addEventListener('click', handleButton);
 