'use strict';

const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('is-open');
});

document.addEventListener('click', (event) => {
  const isClickInsideMenu = navMenu.contains(event.target);
  const isClickOnToggle = menuToggle.contains(event.target);

  if (navMenu.classList.contains('is-open') && !isClickInsideMenu && !isClickOnToggle) {
    navMenu.classList.remove('is-open');
  }
});

const textarea = document.querySelector('textarea');

textarea.addEventListener('input', function () {
  this.style.height = '41px';
  this.style.height = (this.scrollHeight) + 'px';
});


const page = document.documentElement;
const switcher = document.querySelector('.theme__switcher')
const themeName = document.querySelector('.theme__name')

switcher.addEventListener('click', () => {
  page.classList.toggle('page--theme--blue');
  switcher.classList.toggle('theme__switcher--theme--blue');

  const isBlue = page.classList.contains('page--theme--blue');
  themeName.textContent = isBlue ? 'Theme: blue' : 'Theme: dark';
});
