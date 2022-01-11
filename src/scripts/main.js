'use strict';

const services = document.querySelector('.services__list');
const slider = document.querySelector('.slider');
const menu = document.querySelector('.top-actions__menu-icon');
const menuList = document.querySelector('.top-actions--mobile');

function resize(parentBlock, target, size, zIndex, position, f) {
  [...parentBlock.querySelectorAll('li')].forEach(el => {
    if (target === el.querySelector('img')) {
      f(target);
      target.style.width = `${size}px`;
      target.style.height = `${size}px`;
      target.style.zIndex = zIndex;
      target.style.position = position;
      target.style.transitionDuration = '0.5s';
    }
  });
}

function addElement(target) {
  const p = document.createElement('p');

  p.style.width = '56px';

  target.parentElement.prepend(p);
}

function removeElement(target) {
  const p = target.parentElement.querySelector('p');

  p.remove();
}

services.addEventListener('mouseover', (obj) => {
  resize(services, obj.target, 48, 2000, 'absolute', addElement);
});

services.addEventListener('mouseout', (obj) => {
  resize(services, obj.target, 40, 'auto', 'static', removeElement);
});

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
