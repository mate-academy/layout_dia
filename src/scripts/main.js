'use strict';

const menuSlide = () => {
  const burger = document.querySelector('.mobile-nav');
  const header = document.querySelector('.header');

  burger.addEventListener('click', () => {
    header.classList.toggle('header--opened');
    header.classList.toggle('header--closed');
    burger.classList.toggle('toogle');
  });
};

menuSlide();
