'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#side-menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('form');

function submit(event) {
  event.preventDefault();
  form.reset();
}

form.addEventListener('submit', submit);

const arrows = document.querySelectorAll('.slider__arrow');

let counter = 1;

arrows.forEach(arrow => {
  arrow.addEventListener('click', function() {
    const slider = arrow.closest('.slider');

    counter++;

    if (counter > 4) {
      counter = 1;
    }

    slider.style.backgroundImage = `url(./images/slider/img-${counter}.png)`;
  });
});
