'use strict';

const form = document.querySelector('#contacts-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});

const left = document.querySelector('#slider-link-left');
const right = document.querySelector('#slider-link-right');

left.addEventListener('click', function() {
  plusDivs(-1);
});

right.addEventListener('click', function() {
  plusDivs(1);
});

let slideIndex = 1;

showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  let i;

  const x = document.getElementsByClassName('mySlides');

  if (n > x.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = x.length;
  }

  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  x[slideIndex - 1].style.display = 'block';
}
