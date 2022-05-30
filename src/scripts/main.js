/* eslint-disable no-unused-vars */
'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const rectangle = document.querySelectorAll('.testimonial__rectangle');
const shape = document.querySelectorAll('.testimonial__shape');
const bgColor = document.querySelectorAll('.header, .footer');
const button = document.querySelectorAll('.button');
const id = document.querySelectorAll('.services__id');
const buttonArrow = document.querySelectorAll('.services__button');
const toggler = document.querySelector('.actions__button');
const bgVision = document.querySelector('.vision');

toggler.addEventListener('click', () => {
  rectangle[0].classList.toggle('testimonial__rectangle--pale-blue');
  rectangle[1].classList.toggle('testimonial__rectangle--yellow');
  rectangle[2].classList.toggle('testimonial__rectangle--pink');

  shape[0].classList.toggle('testimonial__shape--pale-blue');
  shape[1].classList.toggle('testimonial__shape--yellow');
  shape[2].classList.toggle('testimonial__shape--pink');

  bgColor[0].classList.toggle('header--blue');
  bgColor[1].classList.toggle('footer--blue');
  bgVision.classList.toggle('vision--colorful');

  for (let i = 0; i < button.length; i++) {
    button[i].classList.toggle('button--pink');
  }

  id[0].classList.toggle('services__id--blue');
  id[1].classList.toggle('services__id--yellow');
  id[2].classList.toggle('services__id--green');
  id[3].classList.toggle('services__id--pink');

  buttonArrow[0].classList.toggle('services__button--blue');
  buttonArrow[1].classList.toggle('services__button--yellow');
  buttonArrow[2].classList.toggle('services__button--green');
  buttonArrow[3].classList.toggle('services__button--pink');
});

// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-undef
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
