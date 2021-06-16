'use strict';

window.myFunction = function() {
  const list = document.getElementById('navigation__sidebar');
  const icon = document.getElementById('navigation__burger-button');

  if (icon.className === 'navigation__label') {
    list.className = 'navigation__sidebar-active';
    icon.className = 'navigation__label-active';
  } else {
    list.className = 'navigation__sidebar';
    icon.className = 'navigation__label';
  }
};
