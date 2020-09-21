'use strict';

const burger = document.querySelector('.nav__burger');

const mobileNav = document.querySelector('.mobile');

const mobileLink = document.querySelectorAll('.mobile__link');

const form = document.querySelector('.form');


burger.addEventListener('click', function() {
  mobileNav.classList.toggle('mobile--active');
  burger.classList.toggle('nav__burger--active');
});

for (const elem of mobileLink) {
  elem.addEventListener('click', function() {
    mobileNav.classList.toggle('mobile--active');
    burger.classList.toggle('nav__burger--active');
  })
};

form.addEventListener('submit', event => {
  document.location.reload();
  event.preventDefault();
});

