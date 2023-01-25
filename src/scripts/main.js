'use strict';

const icon = document.querySelector('.icon');
const menu = document.querySelector('.header__menu');

window.addEventListener('hashchange', () => {
  if (window.location.hash !== '#menu') {
    icon.classList.remove('icon--close');
    menu.classList.remove('header__menu--open');
  }
});

icon.addEventListener('click', (e) => {
  icon.classList.toggle('icon--close');
  menu.classList.toggle('header__menu--open');
});

const footerMenu = document.querySelector('#footer-list');

changeFooterMenu(window.innerWidth);

window.addEventListener('resize', (e) => changeFooterMenu(e.target.innerWidth));

function changeFooterMenu(elem) {
  if (elem < 640) {
    footerMenu.classList.add('nav__list--column');
  } else {
    footerMenu.classList.remove('nav__list--column');
  }
}
