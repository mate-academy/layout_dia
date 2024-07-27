'use strict';
const swiper = new Swiper('.swiper', {
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

document
  .getElementById('contactForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Form submitted!');
  });
