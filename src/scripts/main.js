'use strict';

let slideIndex = 1;
let intervalId;

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  let x = document.getElementsByClassName('slider__img');
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

function autoPlay() {
  plusDivs(1);
}

function startAutoPlay() {
  intervalId = setInterval(autoPlay, 5000);
}

function stopAutoPlay() {
  clearInterval(intervalId);
}

startAutoPlay();

function clearForm() {
  event.preventDefault();
  document.getElementById('myForm').reset();
  window.scrollTo({ top: 0 });
}

function inputAutofocus() {
  event.preventDefault();
  document
    .getElementById('myForm')
    .querySelector('input:first-of-type')
    .focus();
}
