'use strict';

const burgerToggler = () => {
  const burgerMenu = document.querySelector('.hamburger-block');
  const header = document.querySelector('.header');

  burgerMenu.addEventListener('click', () => {
    header.classList.toggle('header--opened');
    burgerMenu.classList.toggle('hamburger-block--opened');
  });
};

burgerToggler();
