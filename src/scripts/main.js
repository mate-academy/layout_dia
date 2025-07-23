'use strict';

const images = document.querySelectorAll('.header__image');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');
const right = document.querySelector('.arrow-right');
const left = document.querySelector('.arrow-left');
let currentIndex = 0;
let backIndex = 0;

function slider() {
  images.forEach((image, index) => {
    image.classList.remove('header__image--active');
    if (index === currentIndex) {
      image.classList.add('header__image--active');
    }
  });
}

function changeIndex(direction) {
  backIndex = backIndex + direction;
  currentIndex=Math.abs(backIndex)
  /* currentIndex = (currentIndex + direction + images.length) % images.length; */
  if (backIndex >= 2) {
    right.style.display = `none`;
  }

  if (backIndex <= -2) {
    left.style.display = `none`;
  }

  if (backIndex < 2) {
    right.style.display = ``;
  }

  if (backIndex > -2) {
    left.style.display = ``;
  }

  slider();
}

leftArrow.addEventListener('click', () => changeIndex(-1));
rightArrow.addEventListener('click', () => changeIndex(1));

slider();
