'use strict';
'';

const Form = document.getElementById('main-form');

const MenuButton = document.getElementsByClassName('header__menu')[0];
const Menu = document.getElementsByClassName('menu')[0];
let menuStatus = false;

Form.addEventListener('submit', (e) => {
  e.target.reset();
  e.preventDefault();
});

MenuButton.addEventListener('click', (e) => {
  if (menuStatus) {
    Menu.style.display = 'none';
    menuStatus = false;
  } else {
    Menu.style.display = 'flex';
    menuStatus = true;
  }
});
