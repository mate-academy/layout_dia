'use strict';

const previousButton = document.querySelector('.carousel__button--prev');
const nextButton = document.querySelector('.carousel__button--next');
let slideIndex = 1;

previousButton?.addEventListener('click', () => plusDivs(-1));
nextButton?.addEventListener('click', () => plusDivs(1));

showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  const x = document.getElementsByClassName('js-slide');

  if (n > x.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = x.length;
  }

  for (let i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  x[slideIndex - 1].style.display = 'block';
}

plusDivs(1);
