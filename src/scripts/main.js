'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#side-menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

//
const form = document.querySelector('form');

function submit(event) {
  event.preventDefault();
  form.reset();
}

form.addEventListener('submit', submit);

//
const slider = document.querySelector('.slider');
const leftArrow = document.querySelector('.slider__arrow--left');
const rightArrow = document.querySelector('.slider__arrow--right');

const images = [
  'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80',
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
];

let currentImageIndex = 0;

function changeImage(index) {
  slider.style.backgroundImage = `url('${images[index]}')`;
}

leftArrow.addEventListener('click', function() {
  currentImageIndex = (currentImageIndex === 0) ? images.length - 1
    : currentImageIndex - 1;
  changeImage(currentImageIndex);
});

rightArrow.addEventListener('click', function() {
  currentImageIndex = (currentImageIndex === images.length - 1) ? 0
    : currentImageIndex + 1;
  changeImage(currentImageIndex);
});

changeImage(currentImageIndex);
