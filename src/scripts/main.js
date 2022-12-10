'use strict';

const formInputs = document.querySelectorAll('.form-field__field');

document.querySelector('.form-field').addEventListener('submit', (event) => {
  event.preventDefault();

  for (const input of formInputs) {
    input.value = '';
  }

  window.scrollBy(-10000, -10000);
}, false);

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const rectangle = document.querySelectorAll('.testimonial__rectangle');
const shape = document.querySelectorAll('.testimonial__shape');
const bgColor = document.querySelectorAll('.header, .footer, .menu, .slider');
const button = document.querySelectorAll('.button');
const id = document.querySelectorAll('.services__id');
const contact = document.querySelectorAll('.contact-us__value-contact');
const buttonArrow = document.querySelectorAll('.services__button');
const link = document.querySelectorAll('.actions__link');
const toggler = document.querySelector('.actions__button');
const bgVision = document.querySelector('.vision');
const theme = document.querySelector('.icon--theme');

toggler.addEventListener('click', () => {
  rectangle[0].classList.toggle('testimonial__rectangle--pale-blue');
  rectangle[1].classList.toggle('testimonial__rectangle--yellow');
  rectangle[2].classList.toggle('testimonial__rectangle--pink');

  shape[0].classList.toggle('testimonial__shape--pale-blue');
  shape[1].classList.toggle('testimonial__shape--yellow');
  shape[2].classList.toggle('testimonial__shape--pink');

  bgColor[0].classList.toggle('header--blue');
  bgColor[1].classList.toggle('slider--blue');
  bgColor[2].classList.toggle('menu--blue');
  bgColor[3].classList.toggle('footer--blue');
  bgVision.classList.toggle('vision--colorful');
  theme.classList.toggle('icon--theme_blue');

  for (let i = 0; i < link.length; i++) {
    link[i].classList.toggle('actions__link--pink');
  }

  for (let i = 0; i < contact.length; i++) {
    contact[i].classList.toggle('contact-us__value-contact--blue');
  }

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
swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  effect: 'fade',

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
