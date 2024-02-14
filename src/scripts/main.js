'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const burger = document.querySelector('.header__burger');
  const menu = document.querySelector('.header__menu');
  const body = document.body;

  burger.addEventListener('click', function() {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock');
  });
});

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slides = document.querySelector('.slides').children;
const slideWidth = slides[0].getBoundingClientRect().width;
let index = 0;

nextBtn.addEventListener('click', () => {
  index++;
  changeSlide();
});

prevBtn.addEventListener('click', () => {
  index--;
  changeSlide();
});

function changeSlide() {
  if (index < 0) {
    index = slides.length - 1;
  } else if (index >= slides.length) {
    index = 0;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translateX(-${slideWidth * index}px)`;
  }
}
