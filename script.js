'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const dice = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let score0 = 0;
let score1 = 0;
let current0 = 0;
let current1 = 0;

btnNew.addEventListener('click', () => {
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  score0 = 0;
  score1 = 0;
  current0 = 0;
  current1 = 0;
  dice.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0.classList.add('player--active');
});

function switchPlayer() {
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
  current0 = 0;
  current1 = 0;
  current0El.textContent = current0;
  current1El.textContent = current1;
  dice.classList.add('hidden');
}

btnRoll.addEventListener('click', () => {
  dice.classList.remove('hidden');
  const randomRoll = Math.floor(Math.random() * 6 + 1);
  if (randomRoll === 1) {
    switchPlayer();
  } else {
    dice.src = `resources/dice-${randomRoll}.png`;
    if (player0El.classList.contains('player--active')) {
      current0 += randomRoll;
      current0El.textContent = current0;
    } else {
      current1 += randomRoll;
      current1El.textContent = current1;
    }
  }
});

btnHold.addEventListener('click', () => {
  if (player0El.classList.contains('player--active')) {
    score0 += current0;
    score0El.textContent = score0;
    current0El.textContent = 0;
    if (score0 >= 100) {
      player0El.classList.add('player--winner');
    } else {
      switchPlayer();
    }
  } else {
    score1 += current1;
    score1El.textContent = score1;
    current1El.textContent = 0;
    if (score1 >= 100) {
      player1El.classList.add('player--winner');
    } else {
      switchPlayer();
    }
  }
});
