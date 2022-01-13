'use strict';

const page = document.querySelector('.page');
const togglers = document.querySelectorAll('.menu__toggler');
const menu = document.querySelector('.menu__list-container');
const notabs = document.querySelectorAll('.notab *');
const noDefault = document.querySelector('.noDefault');
const featureMenuToggler = document.querySelector('.feature-menu-toggler');
const featureContainer = document.querySelector('.feature__container');
const darkFeature = document.querySelector('.feature-dark');
const blueFeature = document.querySelector('.feature-blue');
const specialFeature = document.querySelector('.feature-special');

noDefault.addEventListener('submit', function(e) {
  e.preventDefault();

  document.getElementsByName('name')[0].value = '';
  document.getElementsByName('email')[0].value = '';
  document.getElementsByName('message')[0].value = '';
});

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

featureMenuToggler.addEventListener('click', function() {
  featureContainer.classList.toggle('feature__container--on');
});

darkFeature.addEventListener('click', function() {
  page.setAttribute('color-scheme', 'dark');
});

blueFeature.addEventListener('click', function() {
  page.setAttribute('color-scheme', 'blue');
});

specialFeature.addEventListener('click', function() {
  page.setAttribute('color-scheme', 'special');
});
