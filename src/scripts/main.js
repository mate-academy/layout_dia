'use strict';

const leftArrow = document.querySelector('.welcome__slidearrow--left');
const rightArrow = document.querySelector('.welcome__slidearrow--right');
const ulImg = document.querySelector('.welcome__img-list');
const imgAmount = ulImg.querySelectorAll('img').length;
const imgContainer = document.querySelector('.welcome__img-container');
let count = 0;
let position = 0;

function getImgWidthView() {
  let welcomeWidth;

  if (window.screen.width > 1600) {
    welcomeWidth = 1600;
  } else {
    welcomeWidth = window.screen.width;
  }

  const currImgWidth = imgContainer.clientWidth;

  return Math.round(currImgWidth / welcomeWidth * 100);
}

leftArrow.addEventListener('click', () => {
  const curImgWV = getImgWidthView();

  ulImg.style.transitionDuration = '0.3s';

  position += curImgWV;

  count--;

  if (window.screen.width > 1600) {
    ulImg.style.marginLeft = -100 * count + '%';
  } else {
    ulImg.style.marginLeft = `${position}vw`;
  }

  if (count === 0) {
    leftArrow.disabled = true;
  }

  if (rightArrow.disabled === true) {
    rightArrow.disabled = false;
  }
});

rightArrow.addEventListener('click', () => {
  const curImgWV = getImgWidthView();

  ulImg.style.transitionDuration = '0.3s';

  position -= curImgWV;

  count++;

  if (window.screen.width > 1600) {
    ulImg.style.marginLeft = -100 * count + '%';
  } else {
    ulImg.style.marginLeft = `${position}vw`;
  }

  if (count === imgAmount - 1) {
    rightArrow.disabled = true;
  }

  if (leftArrow.disabled === true) {
    leftArrow.disabled = false;
  }
});

window.addEventListener('resize', () => {
  ulImg.style.transitionDuration = '0s';
});

// ----------------------------------------------------

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
});

// -----------------------------------------------------

const submit = document.querySelector('.form__button');

submit.addEventListener('click', (e) => {
  e.preventDefault();
});
