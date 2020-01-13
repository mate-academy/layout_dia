'use strict';

const menu = () => {
  const BURGER = document.querySelector('.header__btn');
  const MOBILENAV = document.querySelector('.nav');

  BURGER.addEventListener('click', () => {
    BURGER.classList.toggle('header__btn--active');

    if (BURGER.classList.contains('header__btn--active')) {
      MOBILENAV.style.display = 'flex';
    } else {
      MOBILENAV.removeAttribute('style');
    }
  });
};

menu();
