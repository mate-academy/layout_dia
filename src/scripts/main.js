'use strict';

let slideIndex = 1;

plusDivs(0);

showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  let i;
  const x = document.getElementsByClassName('header__cover--right--background');

  if (n > x.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = x.length;
  } ;

  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
    x[i].classList.remove('slide-transition');
  }
  x[slideIndex - 1].style.display = 'block';
  x[slideIndex - 1].classList.add('slide-transition');
}
