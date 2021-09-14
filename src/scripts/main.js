'use strict';

const list = document.querySelector('.slider__list');
const prev = document.querySelector('.slider__button--left');
const next = document.querySelector('.slider__button--right');

const body = document.querySelector('.page__body');
const menuOpener = document.querySelector('.icon--menu_opener');
const menuCloser = document.querySelector('.icon--menu_closer');
const menuLink = document.querySelectorAll('.nav__link');

let position = 0;

next.addEventListener('click', () => {
  const count = list.children.length;

  position += 1;

  if (position >= count) {
    position = 0;
  }

  list.style.transform = `translateX(${-position * 100}%)`;
});

prev.addEventListener('click', () => {
  const count = list.children.length;

  position -= 1;

  if (position < 0) {
    position = count - 1;
  }

  list.style.transform = `translateX(${-position * 100}%)`;
});

menuOpener.addEventListener('click', () => {
  body.classList.add('page__body--with-menu-mobile');
});

menuCloser.addEventListener('click', () => {
  body.classList.remove('page__body--with-menu-mobile');
});

menuLink.forEach(link => {
  link.addEventListener('click', () => {
    body.classList.remove('page__body--with-menu-mobile');
  });
});
