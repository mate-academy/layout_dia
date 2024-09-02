'use strict';

const dropdown = document.querySelector('.dropdown');
const trigger = dropdown.querySelector('.dropdown__icon');

trigger.addEventListener('click', () => {
  if (dropdown.classList.contains('dropdown--active')) {
    dropdown.classList.remove('dropdown--active');
  } else {
    dropdown.classList.add('dropdown--active');
  }
})

