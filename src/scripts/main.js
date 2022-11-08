'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('#form');

form.addEventListener('submit', preventPost);

function preventPost(event) {
  event.preventDefault();

  form.reset();
}

window.addEventListener('click', (event) => {
  const arraySlider = document.querySelectorAll('.slider-show__img');

  if (event.target.classList.contains('slider-show__arrow--left')) {
    getNextImg(event.target, arraySlider, 'left');
  }

  if (event.target.classList.contains('slider-show__arrow--right')) {
    getNextImg(event.target, arraySlider, 'right');
  }
});

function getNextImg(target, arraySlider, arrow) {
  let currentSlider = arraySlider[0];
  let index = 0;
  const lastImg = arraySlider.length - 1;

  for (let i = 0; i <= lastImg; i++) {
    if (arraySlider[i].classList.contains('slider-show__img--active')) {
      currentSlider = arraySlider[i];
      index = i;
      arraySlider[i].classList.remove('slider-show__img--active');
    }
  }

  let nextSlider;

  if (arrow === 'left') {
    if (index > 0) {
      nextSlider = arraySlider[index - 1];
    }

    if (index === 0) {
      nextSlider = arraySlider[lastImg];
    }
  }

  if (arrow === 'right') {
    if (index < lastImg) {
      nextSlider = arraySlider[index + 1];
    }

    if (index === lastImg) {
      nextSlider = arraySlider[0];
    }
  }

  currentSlider.style.visibility = 'hidden';
  currentSlider.style.position = 'static';

  nextSlider.classList.add('slider-show__img--active');
  nextSlider.style.visibility = 'visible';
  nextSlider.style.position = 'absolute';
}
