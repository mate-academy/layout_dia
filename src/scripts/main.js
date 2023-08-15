'use strict';

const menuButton = document.querySelector('.top-bar__icon-menu');

menuButton.addEventListener('click', () => {
  if (menuButton.classList.contains('top-bar__icon-menu--close')) {
    menuButton.classList.remove('top-bar__icon-menu--close');
    menuButton.removeAttribute('href');
    menuButton.setAttribute('href', '#');
  } else {
    menuButton.classList.add('top-bar__icon-menu--close');
    menuButton.setAttribute('href', '#menu');
  }
});
