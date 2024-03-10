// 'use strict';

// document.addEventListener('DOMContentLoaded', function() {
//   const burger = document.querySelector('.header__burger');
//   const menu = document.querySelector('.header__menu');
//   const html = document.querySelector('.html');
//   const body = document.querySelector('.html__body');

//   burger.addEventListener('click', function() {
//     burger.classList.toggle('active');
//     menu.classList.toggle('active');
//     html.classList.toggle('lock');
//     body.classList.toggle('lock');
//   });
// });

// const slides = Array.from(document.querySelectorAll('.slide'));
// const prevButton = document.querySelector('.slider__controls--left');
// const nextButton = document.querySelector('.slider__controls--right');
// let index = 0;

// function updateSlides() {
//   slides.forEach((slide, i) => {
//     slide.style.opacity = i === index ? '1' : '0';
//   });
// }

// prevButton.addEventListener('click', () => {
//   if (index > 0) {
//     index--;
//     updateSlides();
//   }
// });

// nextButton.addEventListener('click', () => {
//   if (index < slides.length - 1) {
//     index++;
//     updateSlides();
//   }
// });

// updateSlides();

// const form = document.querySelector('form');

// form.addEventListener('submit', (event) => {
//   event.preventDefault();

//   form.reset();
// });

// document.querySelector('form').addEventListener('submit', function(event) {
//   event.preventDefault();

//   const inputs = this.querySelectorAll('input');
//   const isEmpty = Array.from(inputs).some((input) => input.value === '');

//   if (isEmpty) {
//     alert('Please fill in all fields of the form.');
//   } else {
//   }
// });
