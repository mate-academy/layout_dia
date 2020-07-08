'use strict';
// burger-menu

const menuIcon = document.querySelector('.menu-icon');
const menuIconLine = document.querySelector('.menu-icon-line');
const mobNav = document.querySelector('.mob__nav');

menuIcon.addEventListener('click', () => {
  menuIconLine.classList.toggle('menu-icon-active');
  mobNav.classList.toggle('mob__slide');
});

const buttonDescription = document.querySelector('.strategic__button');
const buttonVision = document.querySelector('.vision__button');

// link for buttons
buttonVision.addEventListener('click', () => (
  window.location = '#contact'
));

buttonDescription.addEventListener('click', () => (
  window.location = '#description'
));

// slider
const slider = document.querySelector('.slider');
const photoContainer = document.querySelector('.photo__container');
const photoContainerWidth = photoContainer.clientWidth;
const photos = 4;

const nextButton = document.querySelector('#photo__button-right');
const previousButton = document.querySelector('#photo__button-left');

let position = 0;

nextButton.addEventListener('click', nextPhoto);
previousButton.addEventListener('click', prevPhoto);

function nextPhoto() {
  if (position <= -((photos - 1) * photoContainerWidth)) {
    return;
  }

  position -= photoContainerWidth;

  slider.style.transform = `translateX(${position}px)`;
}

function prevPhoto() {
  if (position >= 0) {
    return;
  }

  position += photoContainerWidth;

  slider.style.transform = `translateX(${position}px)`;
}

// form reload

function onSubmit() {
  event.preventDefault();
  document.querySelector('input[name=email]').value = '';
  document.querySelector('input[name=name]').value = '';
  document.querySelector('input[name=message]').value = '';
}

const submitButton = document.querySelector('.contact__form');

submitButton.addEventListener('submit', onSubmit);
