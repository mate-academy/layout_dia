'use strict';

const dropdown = document.querySelector('.dropdown');
const button = dropdown.querySelector('.dropdown__button');

button.addEventListener('contextmenu', (event) => {
  event.preventDefault();

  dropdown.classList.toggle('.dropdown--active');

});

``
