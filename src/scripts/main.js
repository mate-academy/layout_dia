'use strict';

document.getElementById('feedbackForm').addEventListener('submit',
  function(event) {
    event.preventDefault();
    event.stopPropagation();

    const inputs = document.getElementsByClassName('footer__form-input');

    for (const input of inputs) {
      input.value = '';
    }
  });

document.getElementsByClassName('header__arrow--right')[0]
  .addEventListener('click', function(event) {
    const main = event.target.closest('.header__arrows');

    let id = parseInt(main.getAttribute('data-slide'));

    if (id < 3) {
      id = id + 1;
    } else {
      id = 1;
    }

    main.setAttribute('data-slide', id.toString());

    setSlide(id);
  });

document.getElementsByClassName('header__arrow--left')[0]
  .addEventListener('click', function(event) {
    const main = event.target.closest('.header__arrows');

    let id = parseInt(main.getAttribute('data-slide'));

    if (id > 1) {
      id = id - 1;
    } else {
      id = 3;
    }

    main.setAttribute('data-slide', id.toString());

    setSlide(id);
  });

function setSlide(id) {
  const slider = document.getElementsByClassName('header__slider')[0];

  switch (id) {
    case 1: {
      if (slider.classList.contains('header__slider--second')) {
        slider.classList.remove('header__slider--second');
      }

      if (slider.classList.contains('header__slider--third')) {
        slider.classList.remove('header__slider--third');
      }

      slider.classList.add('header__slider--first');

      break;
    }

    case 2: {
      if (slider.classList.contains('header__slider--first')) {
        slider.classList.remove('header__slider--first');
      }

      if (slider.classList.contains('header__slider--third')) {
        slider.classList.remove('header__slider--third');
      }

      slider.classList.add('header__slider--second');

      break;
    }

    case 3: {
      if (slider.classList.contains('header__slider--second')) {
        slider.classList.remove('header__slider--second');
      }

      if (slider.classList.contains('header__slider--first')) {
        slider.classList.remove('header__slider--first');
      }

      slider.classList.add('header__slider--third');

      break;
    }
  }
}
