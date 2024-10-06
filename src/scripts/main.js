'use strict';

const dropdown = document.querySelector('.dropdown');
const button = dropdown.querySelector('.dropdown__button');
const content = dropdown.querySelector('.dropdown__content');

triger.addEventListener('contextmenu', (event) => {
  event.preventDefault();

  dropdown.classList.toggle('.dropdown--active');

});

