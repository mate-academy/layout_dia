'use strict';

const slider = document.querySelector('.slider');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#aside-menu') {
    document.body.classList.add('body__with-aside-menu');
    slider.style.opacity = 0;
  } else {
    document.body.classList.remove('body__with-aside-menu');
    slider.style.opacity = 1;
  }
});
