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

window.onload = () => {
  document.getElementById('opener').onclick = function() {
    myFunction();
  };

  function myFunction() {
    document.getElementById('touchscreen').classList.toggle('show');
  };
};

const opener = document.querySelector('#opener');
let openMenu = false;

opener.addEventListener('click', toogleMenu);

function toogleMenu() {
  if (!openMenu) {
    opener.classList.add('close');

    openMenu = true;
  } else {
    opener.classList.remove('close');

    openMenu = false;
  }
}

document.querySelector('#form').addEventListener('submit', function() {
  const checkForm = document.querySelector('#form').reportValidity();

  if (checkForm === true) {
    document.getElementById('form').reset() || window.scrollTo(0, 0);
  };
}, false);
