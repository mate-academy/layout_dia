'use strict';

const menu = () => {
  const BURGER = document.querySelector('.header__button');
  const MOBILENAV = document.querySelector('.nav');

  BURGER.addEventListener('click', () => {
    BURGER.classList.toggle('header__button--active');

    if (BURGER.classList.contains('header__button--active')) {
      MOBILENAV.style.display = 'flex';
    } else {
      MOBILENAV.removeAttribute('style');
    }
  });
};

menu();
