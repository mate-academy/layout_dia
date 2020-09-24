'use strict';

const burger = document.querySelector('.nav__burger');

const burgerNav = document.querySelector('.burger');

const burgerLink = document.querySelectorAll('.burger__link');

const form = document.querySelector('.form');

burger.addEventListener('click', function() {
  burgerNav.classList.toggle('burger--active');
  burger.classList.toggle('nav__burger--active');
});

for (const elem of burgerLink) {
  elem.addEventListener('click', function() {
    burgerNav.classList.toggle('burger--active');
    burger.classList.toggle('nav__burger--active');
  });
};

form.addEventListener('submit', event => {
  document.location.reload();
  event.preventDefault();
});
