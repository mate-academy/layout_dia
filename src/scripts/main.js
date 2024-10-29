'use strict';

const images = document.querySelectorAll('.header__image');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');
let currentIndex = 0;

function updateSlider() {
  images.forEach((image, index) => {
    image.classList.remove('header__image--active');
    if (index === currentIndex) {
      image.classList.add('header__image--active');
    }
  });
}

function changeIndex(direction) {
  currentIndex = (currentIndex + direction + images.length) % images.length;
  updateSlider();
}

leftArrow.addEventListener('click', () => changeIndex(-1));
rightArrow.addEventListener('click', () => changeIndex(1));

updateSlider();
