'use strict';

const burgerMenu = document.getElementById('menu__toggle');
const links = document.getElementsByClassName('nav__item');

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', () => {
    burgerMenu.checked = false;
  });
}
