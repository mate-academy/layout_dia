'use strict';

const form = document.querySelector('.form');
const openMenuBtn = document.querySelector('#open');
const closeMenuBtn = document.querySelector('#close');
const body = document.querySelector('.page__body');
const links = document.querySelectorAll('.nav__link--scroll');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});

const disableScroll = () => {
  body.classList.toggle('page__body--scroll');
};

links.forEach(el => {
  el.addEventListener('click', disableScroll);
});

openMenuBtn.addEventListener('click', disableScroll);
closeMenuBtn.addEventListener('click', disableScroll);
