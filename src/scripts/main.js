'use strict';

const sliderList = document.querySelector('.slider__list');
const buttonLeft = document.querySelector('.slider-button--left');
const buttonRight = document.querySelector('.slider-button--right');
const body = document.querySelector('body');
const page = document.querySelector('html');
const info = document.querySelector('.header-bottom__info');
const topBar = document.querySelector('.top-bar');
const menuOpen = document.querySelector('.icon--menu');
const menuClose = document.querySelector('.icon--close');
const submitButton = document.querySelector('.footer__button');
const link = document.querySelector('.menu-link');

menuOpen.addEventListener('click', () => {
  page.classList.add('scroll-lock');
});

// function removeScrollLock() {
//   body.classList.remove('scroll-lock');
// }

menuClose.addEventListener('click', () => {
  page.classList.remove('scroll-lock');
});

link.addEventListener('click', () => {
  page.classList.remove('scroll-lock');
});

form.addEventListener('submit', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

const numberOfSlides = sliderList.childElementCount;

let count = 0;

buttonRight.addEventListener('click', () => {
  if (count == numberOfSlides - 1) {
    return;
  }

  sliderList.style.transform = `translateX(-${(count + 1) * 100}%)`;
  count++;
});

buttonLeft.addEventListener('click', () => {
  if (count <= 0) {
    return;
  }

  sliderList.style.transform = `translateX(-${(count - 1) * 100}%)`;
  count--;
});

window.addEventListener('load', () => {
  let documentWidth = body.offsetWidth;
  if (parseInt(documentWidth) > 1148) {
    info.style.paddingLeft = `${(parseInt(documentWidth) - 1148) / 2 + 54}px`;
  }
  document.documentElement.classList.add('loaded');
});

window.addEventListener('resize', () => {
  let documentWidth = body.offsetWidth;
  if (parseInt(documentWidth) > 1148) {
    info.style.paddingLeft = `${(parseInt(documentWidth) - 1148) / 2 + 54}px`;
  }

  if (parseInt(documentWidth) < 1148) {
    info.style.paddingLeft = topBar.style.paddingLeft;
  }
});
