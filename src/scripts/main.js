'use strict';

const slider = document.querySelector('.slider');
const menu = document.querySelector('.top-actions__menu-icon');
const menuList = document.querySelector('.top-actions--mobile');

slider.addEventListener('click', (obj) => {
  obj.preventDefault();

  const arraySliders = [...slider.children];

  if (obj.target.classList.contains('slider__img-left')) {
    getNewSlider(obj.target, arraySliders, 'left');
  }

  if (obj.target.classList.contains('slider__img-right')) {
    getNewSlider(obj.target, arraySliders, 'right');
  }
});

function getNewSlider(target, arraySliders, side) {
  const currentSlider = target.closest('.slider__background');

  const i = arraySliders.indexOf(currentSlider);

  const maxIndex = arraySliders.length - 1;
  const nextSlider = side === 'left' ? (
    i > 0 ? arraySliders[i - 1] : arraySliders[maxIndex])
    : (i < maxIndex ? arraySliders[i + 1] : arraySliders[0]);

  currentSlider.style.visibility = 'hidden';
  currentSlider.style.position = 'absolute';

  nextSlider.style.visibility = 'visible';
  nextSlider.style.position = 'static';
}

menu.addEventListener('click', (obj) => {
  obj.preventDefault();
  menuList.style.visibility = 'visible';
});

const form = document.querySelector('.form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  form.reset();
});
