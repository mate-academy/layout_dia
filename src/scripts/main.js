'use strict';

const openMenu = () => {
  const icon = document.querySelector('.burger');
  const menu = document.querySelector('.menu');

  icon.addEventListener('click', () => {
    menu.classList.toggle('menu--opened');
    menu.classList.toggle('menu--closed');
    icon.classList.toggle('toggle');
  });
};

openMenu();
