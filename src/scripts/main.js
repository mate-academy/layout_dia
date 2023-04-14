'use strict';

document.querySelector('.header-logo')
  .addEventListener('click', function(event) {
    event.preventDefault(); // цей рядок запобігає перезавантаженню сторінки
    window.location.href = './index.html'; // змінюємо URL на адресу головн стор
  });

const burger = document.querySelector('.header-burger');
const burgerFirstLine = document.querySelector('.firstLine');
const burgerSecondLine = document.querySelector('.secondLine');
const nav = document.querySelector('.header-nav');
const navLink = document.querySelectorAll('.pop-up');

burger.addEventListener('click', () => {
  burgerFirstLine.classList.toggle('rotate-down');
  burgerSecondLine.classList.toggle('rotate-up');
  nav.classList.toggle('active-nav');
});

[...navLink].forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active-nav');
    burgerFirstLine.classList.remove('rotate-down');
    burgerSecondLine.classList.remove('rotate-up');
  });
});
