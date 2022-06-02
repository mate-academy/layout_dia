'use strict';

document.getElementById('form').addEventListener('click', function(event) {
  event.preventDefault();
});

const slider = document.querySelector('.slider');
const sliderLeft = document.querySelector('.btn-left');
const sliderRight = document.querySelector('.btn-right');
let slideNumber = 1;

function changeSlide(direction) {
  slider.classList.remove(`slider--bckgrnd-${slideNumber}`);

  if (direction === 'l') {
    slideNumber === 1
      ? slideNumber = 4
      : slideNumber--;
  }

  if (direction === 'r') {
    slideNumber === 4
      ? slideNumber = 1
      : slideNumber++;
  }

  slider.classList.add(`slider--bckgrnd-${slideNumber}`);
}

sliderLeft.addEventListener('click', () => {
  changeSlide('l');
}
);

sliderRight.addEventListener('click', () => {
  changeSlide('r');
}
);

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
