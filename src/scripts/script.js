'use strict';

const burger = document.querySelector('.header-burger');

burger
  .addEventListener('click', function() {
    const menuList = document.querySelector('.nav-menu__list');
    const description = document.querySelector('.header-description');

    menuList.classList.toggle('active');
    description.classList.toggle('hide');
    burger.classList.toggle('active');
  });
