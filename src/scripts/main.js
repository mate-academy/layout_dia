'use strict';

const dropdown = document.querySelector('.top-bar__dropdown');
const button = document.querySelector('.top-bar__icon--menu');

// button.addEventListener('click', () => {
//   // dropdown.classList.toggle('top-bar__dropdown--active');
//   if (dropdown.classList.contains('top-bar__dropdown--active')) {
//     dropdown.classList.remove('top-bar__dropdown--active');
//   } else {
//     dropdown.classList.add('top-bar__dropdown--active');
//   }
// });

button.addEventListener('hashchange', () => {
  if (button.hash === '#dropdown') {
    dropdown.classList.add('page__menu');
  } else {
    dropdown.classList.remove('page__menu');
  }
});

const slider = document.querySelector('.slider');
const next = document.querySelector('.slider--right');
const previous = document.querySelector('.slider--left');

next.addEventListener('click', () => {
  if (slider.classList.contains('slider--main')) {
    slider.classList.remove('slider--main');
    slider.classList.add('slider--headphones');
  } else if (slider.classList.contains('slider--headphones')) {
    slider.classList.remove('slider--headphones');
    slider.classList.add('slider--laptop');
  }
});

previous.addEventListener('click', () => {
  if (slider.classList.contains('slider--laptop')) {
    slider.classList.remove('slider--laptop');
    slider.classList.add('slider--headphones');
  } else if (slider.classList.contains('slider--headphones')) {
    slider.classList.remove('slider--headphones');
    slider.classList.add('slider--main');
  }
});
