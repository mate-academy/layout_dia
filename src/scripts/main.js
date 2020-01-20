'use strict';

const menu = () => {
  const burger = document.querySelector('.header__button');
  const mobilenav = document.querySelector('.nav');

  burger.addEventListener('click', () => {
    burger.classList.toggle('header__button--active');

    if (burger.classList.contains('header__button--active')) {
      mobilenav.style.display = 'flex';
    } else {
      mobilenav.removeAttribute('style');
    }
  });
};

menu();
