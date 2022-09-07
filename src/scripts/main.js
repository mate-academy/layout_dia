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
  slider[0].style.backgroundImage = 'url(slide0.1791bc2e.jpg)';
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
  if (slider[0].style.backgroundImage === 'url("slide0.1791bc2e.jpg")') {
    slider[0].style.backgroundImage = 'url(slide2.7870cb4a.png)';
  } else if (slider[0].style.backgroundImage === 'url("slide2.7870cb4a.png")') {
    slider[0].style.backgroundImage = 'url(slide1.e43f618d.png)';
  } else if (slider[0].style.backgroundImage === 'url("slide1.e43f618d.png")') {
    slider[0].style.backgroundImage = 'url("slide0.1791bc2e.jpg")';
  }
}

function moveRight() {
  if (slider[0].style.backgroundImage === 'url("slide0.1791bc2e.jpg")') {
    slider[0].style.backgroundImage = 'url(slide1.e43f618d.png)';
  } else if (slider[0].style.backgroundImage === 'url("slide1.e43f618d.png")') {
    slider[0].style.backgroundImage = 'url(slide2.7870cb4a.png)';
  } else if (slider[0].style.backgroundImage === 'url("slide2.7870cb4a.png")') {
    slider[0].style.backgroundImage = 'url("slide0.1791bc2e.jpg")';
  }
}
