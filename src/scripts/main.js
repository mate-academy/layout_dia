'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#nav') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  event.target.reset();
});

const slider = [...document.querySelectorAll('.slider__image')];
const arrowRight = document.querySelector('.slider__button--right');
const arrowLeft = document.querySelector('.slider__button--left');

arrowRight.addEventListener('click', () => moveRight(slider));
arrowLeft.addEventListener('click', () => moveLeft(slider));

function moveRight(images) {
  arrowLeft.removeAttribute('disabled');

  for (let i = 0; i < images.length; i++) {
    if (i === 1 && images[i].classList.contains('slider__image--center')) {
      arrowRight.setAttribute('disabled', 'true');
    }

    if (i > 0 && images[i].classList.contains('slider__image--center')) {
      images[i].classList.remove('slider__image--center');
      images[i].classList.add('slider__image--to-right');
      images[i - 1].classList.remove('slider__image--to-left');
      images[i - 1].classList.add('slider__image--center');
    }
  }
}

function moveLeft(images) {
  arrowRight.removeAttribute('disabled');

  for (let i = images.length - 1; i >= 0; i--) {
    if (
      i === images.length - 2
      && images[i].classList.contains('slider__image--center')
    ) {
      arrowLeft.setAttribute('disabled', 'true');
    }

    if (images[i].classList.contains('slider__image--center')) {
      images[i].classList.remove('slider__image--center');
      images[i].classList.add('slider__image--to-left');
      images[i + 1].classList.remove('slider__image--to-right');
      images[i + 1].classList.add('slider__image--center');
    }
  }
}
