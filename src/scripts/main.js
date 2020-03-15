'use strict';

const openMenu = () => {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.menu');

  burger.addEventListener('click', () => {
    menu.classList.toggle('menu--opened');
    burger.classList.toggle('burger--toggle');
  });
};

openMenu();
