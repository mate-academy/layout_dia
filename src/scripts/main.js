'use strict';

window.myFunction = function() {
  const list = document.querySelector('.navigation__list');
  const icon = document.getElementById('burger-button');

  if (list.style.display === '') {
    list.style.display = 'flex';
    icon.className = 'navigation__label-active';
  } else {
    list.style.display = '';
    icon.className = 'navigation__label';
  }
};
