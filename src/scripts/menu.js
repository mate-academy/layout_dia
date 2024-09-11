'use strict';

const body = document.querySelector('body');
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const links = document.querySelectorAll('.phone-menu_list_link');

menuBtn.addEventListener('click', function () {
  menu.classList.add('phone-menu--visible');

  body.style.overflow = 'hidden';
});

links.forEach(link => {
  link.addEventListener('click', function () {
    menu.classList.remove('phone-menu--visible');
    body.style.overflow = '';
  });
});
