'use strict';

const btnMenu = document.querySelector('#menu-btn');
const navMenu = document.querySelector('#nav-menu');
const noScroll = document.body;
const menuLinks = document.querySelectorAll('.nav__link');

const slides = document.querySelectorAll('.hero-screen__img');
const btnLeft = document.getElementById('btn-left');
const btnRight = document.getElementById('btn-right');

let currentIndex = 0;

function changeSlider(index) {
  slides.forEach(slide => {
    slide.classList.remove('active');
  });
  slides[index].classList.add('active');
}

btnRight.addEventListener('click', (e) => {
  e.preventDefault();
  currentIndex++;

  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  changeSlider(currentIndex);
});

btnLeft.addEventListener('click', (e) => {
  e.preventDefault();
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  changeSlider(currentIndex);
});



btnMenu.addEventListener('click', function() {
  navMenu.classList.toggle('nav--open');
  noScroll.classList.toggle('no-scroll');
});

function closeMenu() {
  navMenu.classList.remove('nav--open');
  noScroll.classList.remove('no-scroll');
}

window.addEventListener('resize', () => {
  if (window.innerWidth >= 1024) {
    closeMenu();
  }
});

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});
