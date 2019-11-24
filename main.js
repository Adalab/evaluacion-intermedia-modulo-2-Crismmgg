'use strict';

//constantes

const button = document.querySelector('.js-button');
const input = document.querySelector('.js-input');

const clue = document.querySelector('.js-clue');
const counter = document.querySelector('.js-counter');
let counterValue = 0;

//Random Number

function getRandomNumber(max) {
  return parseInt(Math.ceil(Math.random() * max));
}
const randomNumber = getRandomNumber(100);
console.log('El número aleatorio es el ' + randomNumber);

//Pistas

function showClues() {
  const userNumber = parseInt(input.value);
  if (userNumber < 0 || userNumber > 100) {
    updateClues ('El número tiene que estar entre 0 y 100');
  } else if (userNumber === randomNumber) {
    updateClues ('¡Yeeei! ACERTASTE :)');
  } else if (userNumber > randomNumber) {
    updateClues ('Demasiado alto...¡afloja!');
  } else if (userNumber < randomNumber) {
    updateClues ('Demasiado bajo...¡dale un poco de caña!');
  } 
}

function updateClues(text) {
  clue.innerHTML = text;
}

//Contador
function updateCounter () {
  counterValue += 1;
  counter.innerHTML = 'Número de intentos: ' + counterValue;
}

//función handler
const handleButton = function (event) {
  event.preventDefault();
  updateCounter ();
  showClues();
}

//función listener
button.addEventListener('click', handleButton);
 