'use strict';

const dropdown = document.querySelector('.dropdown');
const trigger = dropdown.querySelector('.dropdown__trigger');
const content = dropdown.querySelector('.dropdown__content');

content.style.display = 'none';

trigger.addEventListener('click', (event) => {
  event.preventDefault();

  content.style.display = 'block';

  dropdown.classList.toggle('dropdown--active');
});

document.addEventListener('click', (event) => {
  if (!trigger.contains(event.target)) {
    dropdown.classList.remove('dropdown--active');
  }
});
