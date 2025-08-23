'use strict';
const slides = document.querySelectorAll('.slide');
let current = 0;

document.querySelector('.next').addEventListener('click', () => {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
});

document.querySelector('.prev').addEventListener('click', () => {
  slides[current].classList.remove('active');
  current = (current - 1 + slides.length) % slides.length;
  slides[current].classList.add('active');
});


// const menuIcon = document.querySelector('.icon--menu');
// const menuNav = document.querySelector('.menu__nav');

// menuIcon.addEventListener('click', () => {
//   menuNav.classList.toggle('active');
// });


const menuToggle = document.querySelector('.icon--menu');
const menu = document.querySelector('.menu__nav');
const menuLinks = document.querySelectorAll('.menu__nav .nav__link');

// відкривати/закривати меню по кліку на іконку
menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// закривати меню після кліку на будь-яке посилання
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});


const form = document.getElementById('contact-form');

form.addEventListener('submit', e => {
  e.preventDefault();
  form.reset();
});
