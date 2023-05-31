'use strict';

const leftArrow = document.querySelector('.welcome__slidearrow--left');
const rightArrow = document.querySelector('.welcome__slidearrow--right');
const ulImg = document.querySelector('.welcome__img-list');
const imgAmount = ulImg.querySelectorAll('img').length;
const imgContainer = document.querySelector('.welcome__img-container');
let count = 0;
let position = 0;

leftArrow.addEventListener('click', () => {
  const curImgWV = imgContainer.clientWidth;

  position += curImgWV;

  count--;

  ulImg.style.marginLeft = `${position}px`;

  if (count === 0) {
    leftArrow.disabled = true;
  }

  if (rightArrow.disabled === true) {
    rightArrow.disabled = false;
  }
});

rightArrow.addEventListener('click', () => {
  const curImgWV = imgContainer.clientWidth;

  position -= curImgWV;

  count++;

  ulImg.style.marginLeft = `${position}px`;

  if (count === imgAmount - 1) {
    rightArrow.disabled = true;
  }

  if (leftArrow.disabled === true) {
    leftArrow.disabled = false;
  }
});

window.addEventListener('resize', () => {
  ulImg.style.marginLeft = 0;
  count = 0;
  position = 0;
  leftArrow.disabled = true;
  rightArrow.disabled = false;
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
  const form = document.querySelector('.form');

  for (const prop of form.elements) {
    if (!prop.value && prop.type !== 'submit') {
      return;
    }
  }

  form.reset();

  e.preventDefault();
  document.querySelector('.form').reset();
});
