'use strict';

const icon = document.querySelector('.top-actions__list');
const toggler = document.querySelector('.top-actions__toggler');

toggler.addEventListener('click', () => {
  icon.classList.toggle('top-actions--open');
});
