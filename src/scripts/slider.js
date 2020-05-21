'use strict';

let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

document.querySelector('.header__arrow_left').onclick = () => plusSlides(-1);
document.querySelector('.header__arrow_right').onclick = () => plusSlides(1);

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName('header__picture');

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex - 1].style.display = 'block';
}
