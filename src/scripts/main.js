'use strict';

const btnMenu = document.querySelector('.btn');
const menu = document.querySelector('.menu');
const toggleMenu = function() {
  menu.classList.toggle('open');
};

const closeMenu = function() {
  menu.classList.toggle('close');
};

btnMenu.addEventListener('click', function(e) {
  e.stopPropagation();
  toggleMenu();
});

menu.addEventListener('click', function(e) {
  e.stopPropagation();
  closeMenu();
});

document.addEventListener('click', function(e) {
  const target = e.target;
  const itsMenu = target === menu || menu.contains(target);
  const itsBtnMenu = target === btnMenu;
  const menuActive = menu.classList.contains('open');

  if (!itsMenu && !itsBtnMenu && menuActive) {
    toggleMenu();
  }
});
