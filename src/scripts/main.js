'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('.form');
const slider = document.querySelector('.slider');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  form.reset();
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
