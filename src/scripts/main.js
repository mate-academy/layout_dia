'use strict';

const slider = document.getElementsByClassName('slider');
const leftButton = document.querySelector('#buttonLeft');
const rightButton = document.querySelector('#buttonRight');

rightButton.onclick = function() {
  moveRight();
};

leftButton.onclick = function() {
  moveLeft();
};

window.onload = function() {
  slider[0].style.backgroundImage = 'url("https://i.imgur.com/3rOgkhR.jpeg")';
};

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.getElementById('form');

function handleForm(event) {
  event.preventDefault();
  document.getElementById('form').reset();
}
form.addEventListener('submit', handleForm);

function moveLeft() {
  // eslint-disable-next-line max-len
  if (slider[0].style.backgroundImage === 'url("https://i.imgur.com/3rOgkhR.jpeg")') {
    slider[0].style.backgroundImage = 'url(https://i.imgur.com/6VjpieG.png)';
    // eslint-disable-next-line max-len
  } else if (slider[0].style.backgroundImage === 'url("https://i.imgur.com/6VjpieG.png")') {
    slider[0].style.backgroundImage = 'url("https://i.imgur.com/dAm4EwC.png")';
    // eslint-disable-next-line max-len
  } else if (slider[0].style.backgroundImage === 'url("https://i.imgur.com/dAm4EwC.png")') {
    slider[0].style.backgroundImage = 'url("https://i.imgur.com/3rOgkhR.jpeg")';
  }
}

function moveRight() {
  // eslint-disable-next-line max-len
  if (slider[0].style.backgroundImage === 'url("https://i.imgur.com/3rOgkhR.jpeg")') {
    slider[0].style.backgroundImage = 'url(https://i.imgur.com/dAm4EwC.png)';
    // eslint-disable-next-line max-len
  } else if (slider[0].style.backgroundImage === 'url("https://i.imgur.com/dAm4EwC.png")') {
    slider[0].style.backgroundImage = 'url(https://i.imgur.com/6VjpieG.png)';
    // eslint-disable-next-line max-len
  } else if (slider[0].style.backgroundImage === 'url("https://i.imgur.com/6VjpieG.png")') {
    slider[0].style.backgroundImage = 'url("https://i.imgur.com/3rOgkhR.jpeg")';
  }
}
