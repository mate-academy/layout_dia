'use strict';

let slideIndex = 1;

showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  let i;
  const x = document.getElementsByClassName('slider__image');

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

const leftBtn = document.getElementsByClassName('slider__link--left')[0];
const rightBtn = document.getElementsByClassName('slider__link--right')[0];

leftBtn.addEventListener('click', () => plusDivs(-1));
rightBtn.addEventListener('click', () => plusDivs(1));

const form = document.getElementById('form');
const textArea = form.querySelector('.form__input--message');

form.addEventListener('submit', function handleSubmit(event) {
  event.preventDefault();

  form.reset();
});

textArea.addEventListener('input', () => {
  textArea.style.height = textArea.scrollHeight + 'px';
  textArea.style.maxHeight = '75px';

  (textArea.value === '') && (textArea.style.height = '41px');
}); ;

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#nav-small-screen') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
