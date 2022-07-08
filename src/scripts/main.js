'use strict';

const sandwich = document.querySelector('.navigation__sandwich');
const closeMenu = document.querySelector('.navigation__close');
const mobileMenu = document.querySelector('.navigation__menu-wrapper');
const upButton = document.querySelector('.up-arrow');
const links = document.querySelectorAll('.sroll-link');

sandwich.addEventListener('click', function() {
  mobileMenu.classList.remove('hide');
  mobileMenu.classList.add('show');
});

closeMenu.addEventListener('click', function() {
  mobileMenu.classList.remove('show');
  mobileMenu.classList.add('hide');
});

window.onscroll = function() {
  if (window.pageYOffset > 1500) {
    upButton.classList.add('show');
  } else {
    upButton.classList.remove('show');
  }
};

upButton.addEventListener('click', function() {
  document.documentElement.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
});

links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const id = link.getAttribute('href').substr(1);

    document.getElementById(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
});
