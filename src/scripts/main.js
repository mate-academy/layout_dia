'use strict';

const buttonNext = document.querySelector('.slider-button-next');
const buttonPrev = document.querySelector('.slider-button-prev');
const gallery = document.querySelectorAll('.slider__foto');
let index = 0;

buttonPrev.disabled = true;
buttonPrev.style.opacity = 0.3;

const buttonHandler = () => {
  buttonNext.disabled = index >= gallery.length - 1;
  buttonNext.style.opacity = (index >= gallery.length - 1) ? 0.3 : 1;

  buttonPrev.disabled = !(index > 0);
  buttonPrev.style.opacity = (index > 0) ? 1 : 0.3;
};

const nextHandler = () => {
  gallery[index].style.display = 'none';
  index++;
  gallery[index].style.display = 'block';
  buttonHandler();
};

const prevHandler = () => {
  gallery[index].style.display = 'none';
  index--;
  gallery[index].style.display = 'block';
  buttonHandler();
};

buttonNext.addEventListener('click', nextHandler);
buttonPrev.addEventListener('click', prevHandler);
