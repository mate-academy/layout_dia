'use strict';

const menuButton = document.querySelector('.top-bar__icon-menu');

menuButton.addEventListener('click', () => {
  if (menuButton.classList.contains('top-bar__icon-menu--close')) {
    menuButton.classList.remove('top-bar__icon-menu--close');
    menuButton.setAttribute('href', '#home');
  } else {
    menuButton.classList.add('top-bar__icon-menu--close');
    menuButton.setAttribute('href', '#menu');
  }
});

const navButtons = document.querySelectorAll('.nav__link');
const hireButton = document.querySelector('.top-bar__button-hire-us');
const logoButton = document.querySelector('.top-bar__logo');

navButtons.forEach(button => button.addEventListener('click', switchMenuIcon));
hireButton.addEventListener('click', switchMenuIcon);
logoButton.addEventListener('click', switchMenuIcon);

function switchMenuIcon() {
  if (menuButton.classList.contains('top-bar__icon-menu--close')) {
    menuButton.classList.remove('top-bar__icon-menu--close');
    menuButton.setAttribute('href', '#home');
  }
}
