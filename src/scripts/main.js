'use strict';

const topActions = document.querySelector('.top-actions__nav');
const toggler = document.querySelector('.top-actions__toggler');

toggler.addEventListener('click', () => {
  topActions.classList.toggle('top-actions--open');
});
