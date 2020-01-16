'use strict';

const burger = document.querySelector('.header__burger');

burger
  .addEventListener('click', function() {
    const menuList = document.querySelector('.header__nav-menu_list');
    const description = document.querySelector('.header__intro-description');

    menuList.classList.toggle('active');
    description.classList.toggle('hide');
    burger.classList.toggle('active');
  });
