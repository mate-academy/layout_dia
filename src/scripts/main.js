'use strict';

document.getElementById('MyForm').addEventListener('submit', function(event) {
  event.preventDefault();
  document.getElementById('email').value = '';
  document.getElementById('name').value = '';
  document.getElementById('message').value = '';
});

const menuLink = document.querySelector('.header__menu');
const menu = document.querySelector('.nav__list');

menuLink.addEventListener('click', (event) => {
  event.preventDefault();
  menu.classList.toggle('nav--visible');
});
