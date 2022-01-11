'use strict';

const page = document.querySelector('.page');
const togglers = document.querySelectorAll('.menu__toggler');
const menu = document.querySelector('.menu__list-container');
const notabs = document.querySelectorAll('.notab *');

togglers.forEach((toggler) => {
  toggler.addEventListener('click', function() {
    page.classList.toggle('page--with-modal');
    menu.classList.toggle('menu__list-container--open');

    notabs.forEach((element) => {
      if (element.getAttribute('tabindex') === '-1') {
        element.toggleAttribute('tabindex');
      } else {
        element.setAttribute('tabindex', '-1');
      }
    });
  });
});
