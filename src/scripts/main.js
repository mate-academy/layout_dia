'use strict';

const burger = document.querySelector('.nav__burger');

const mobileNav = document.querySelector('.burger');

const mobileLink = document.querySelectorAll('.burger__link');

const form = document.querySelector('.form');


burger.addEventListener('click', function() {
  mobileNav.classList.toggle('burger--active');
  burger.classList.toggle('nav__burger--active');
});

for (const elem of mobileLink) {
  elem.addEventListener('click', function() {
    mobileNav.classList.toggle('burger--active');
    burger.classList.toggle('nav__burger--active');
  })
};

form.addEventListener('submit', event => {
  document.location.reload();
  event.preventDefault();
});