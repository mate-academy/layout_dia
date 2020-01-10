'use strict';

const burgerMenu = document.body.querySelector('.burger-menu');
const headerNavUl = document.body.querySelector('.header__nav-list');
const HeaderHireUs = document.body.querySelector('.header__hire-us-link');

burgerMenu.addEventListener('click', (e) => {
  burgerMenu.classList.toggle('opend-menu');
  headerNavUl.classList.toggle('move-ul');
  HeaderHireUs.classList.toggle('move-hire-us');
});
