'use strict';

const menuButton = document.querySelector('.nav__toggler-label');
const navLinks = document.querySelector('.nav__list');

menuButton.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
