'use strict';

const page = document.querySelector('.page');
const themeSwitchers = page.querySelectorAll('.theme-switcher');

const switcherThumbs = [];
themeSwitchers.forEach(item => {
  const thumb = item.querySelector('.theme-switcher__thumb');

  if (thumb) {
    switcherThumbs.push(thumb);
  };
});

themeSwitchers.forEach(item => {
  item.addEventListener('click', () => {
    page.classList.toggle('theme-light');
    switcherThumbs.forEach(thumb => {
      thumb.classList.toggle('theme-switcher__thumb--light');
    });
  });
});
