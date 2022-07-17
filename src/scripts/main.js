'use strict';

document.querySelector('#button-left').addEventListener('click', function() {
  const currentSlide
  = parseInt(document.querySelector('#photoContainer')
    .getAttribute('data-current-slide'), 10);

  if (currentSlide === 1) {} else {
    moveSlider(currentSlide - 1);
  }
});

document.querySelector('#button-right').addEventListener('click', function() {
  const currentSlide
  = parseInt(document.querySelector('#photoContainer')
    .getAttribute('data-current-slide'), 10);

  if (currentSlide === 3) {} else {
    moveSlider(currentSlide + 1);
  }
});

function moveSlider(slide) {
  const percentageMove = (100 / 3) * (slide - 1);

  document.querySelector('#photoContainer').style.transform
  = 'translateX(-' + percentageMove + '%)';

  document.querySelector('#photoContainer')
    .setAttribute('data-current-slide', slide);
}

document.querySelector('#form').addEventListener('submit', function() {
  const checkForm = document.querySelector('#form').reportValidity();

  if (checkForm === true) {
    document.getElementById('form').reset() || window.scrollTo(0, 0);
  };
}, false);

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#touchscreen') {
    document.body.classList.add('page__body--with-menu');
    document.querySelector('#opener').classList.add('close');
    document.querySelector('.top__button').classList.add('close');
  } else {
    document.body.classList.remove('page__body--with-menu');
    document.querySelector('#opener').classList.remove('close');
    document.querySelector('.top__button').classList.remove('close');
  }
});

const open = document.querySelector('#opener');

document.querySelector('#opener').addEventListener('click', function() {
  const cross = open.classList.contains('close');

  if (cross === true) {
    document.getElementById('opener').href = '#';
  };

  if (cross === false) {
    document.getElementById('opener').href = '#touchscreen';
  }
});
