'use strict';

// #region slider
const imgPaths = [
  'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBsYW50cyUyMGluJTIwb2ZmaWNlfGVufDB8fDB8fHww',
  'https://images.unsplash.com/photo-1630233313373-a03df7d139c9?q=80&w=1938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

let currentIndex = 0;

const slider = document.querySelector('.slider__content--image');
const arrowLeft = slider.querySelector('.prev');
const arrowRight = slider.querySelector('.next');

function updateSlider(index) {
  slider.style.backgroundImage = `url(${imgPaths[index]})`;
}

arrowLeft.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + imgPaths.length) % imgPaths.length;
  updateSlider(currentIndex);
});

arrowRight.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % imgPaths.length;
  updateSlider(currentIndex);
});

updateSlider(currentIndex);
// #endregion

// #region preventDefault
const form = document.getElementById('myForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  form.reset();
});
// #endregion

// #region dialog constants
const dialog = document.getElementById('tabletOverlay');
const showButton = document.getElementById('show');
const closeButton = document.getElementById('close');
const links = document.querySelectorAll('.tablet-overlay__link');

const closeDialog = () => {
  dialog.style.display = 'none';
  document.body.classList.remove('hide');
  dialog.close();
};

// #endregion

// #region hidden scroll
showButton.addEventListener('click', () => {
  dialog.style.display = 'block';
  document.body.classList.add('hide');
  dialog.showModal();
});

closeButton.addEventListener('click', () => closeDialog());
// #endregion

// #region move-link
links.forEach((link) => link.addEventListener('click', () => closeDialog()));
// #endregion
