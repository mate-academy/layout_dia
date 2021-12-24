'use strict';

const btnL = document.getElementById('sliderBtnLeft');
const btnR = document.getElementById('sliderBtnRight');
const img = document.getElementById('sliderImg');

let curentImg = 1;

btnL.addEventListener('click', () => {
  img.classList.remove(`header__content-image--${curentImg}`);
  curentImg -= 1;

  if (curentImg === 0) {
    curentImg = 4;
  }
  img.classList.add(`header__content-image--${curentImg}`);
});

btnR.addEventListener('click', () => {
  img.classList.remove(`header__content-image--${curentImg}`);
  curentImg += 1;

  if (curentImg === 5) {
    curentImg = 1;
  }
  img.classList.add(`header__content-image--${curentImg}`);
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
