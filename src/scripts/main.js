'use strict';

const burger = document.querySelector('.nav__burger');

const mobileNav = document.querySelector('.mobile');

const mobileLink = document.querySelectorAll('.mobile__link');

burger.addEventListener('click', function() {
  mobileNav.classList.toggle('mobile--active');
  burger.classList.toggle('nav__burger--active');
});

for (let elem of mobileLink) {
  elem.addEventListener('click', function() {
    mobileNav.classList.toggle('mobile--active');
    burger.classList.toggle('nav__burger--active');
  })
}
