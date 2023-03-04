'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#nav') {
    document.body.classList.add('page__body--with-nav');
  } else {
    document.body.classList.remove('page__body--with-nav');
  }
});

let imageNumber = 1;
const slideButtonLeft = document.querySelector('.slider__button--left');
const slideButtonRight = document.querySelector('.slider__button--right');

slideButtonRight.addEventListener('click', function() {
  document.querySelector(`.slider__image--${imageNumber}`).style.width = '0';

  if (imageNumber < 3) {
    imageNumber += 1;
  } else {
    imageNumber = 1;
  }
  document.querySelector(`.slider__image--${imageNumber}`).style.width = '100%';
});

slideButtonLeft.addEventListener('click', function() {
  document.querySelector(`.slider__image--${imageNumber}`).style.width = '0';

  if (imageNumber > 1) {
    imageNumber -= 1;
  } else {
    imageNumber = 3;
  }
  document.querySelector(`.slider__image--${imageNumber}`).style.width = '100%';
});

const form = document.getElementById('form');

function stopRefreshing(event) {
  event.preventDefault();
  form.reset();
}

form.addEventListener('submit', stopRefreshing);
