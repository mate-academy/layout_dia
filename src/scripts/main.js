'use strict';

const OpenAside = document.querySelector('.header__side-bar');
const removeHidden = document.querySelector('.side-bar');

OpenAside.addEventListener('click', () => {
  document.body.classList.add('body__hidden');
});

removeHidden.addEventListener('click', () => {
  document.body.classList.remove('body__hidden');
});
