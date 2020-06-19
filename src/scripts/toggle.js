'use strict';

const lightMode = localStorage.getItem('theme--blue');
const toggle = document.querySelector('.toggle');

if (lightMode === 'enabled') {
  document.body.classList.remove('theme--black');
  document.body.classList.add('theme--blue');
  toggle.classList.remove('toggle--sun');
  toggle.classList.add('toggle--moon');
} else {
  document.body.classList.remove('theme--blue');
  document.body.classList.add('theme--black');
  toggle.classList.remove('toggle--moon');
  toggle.classList.add('toggle--sun');
}

toggle.addEventListener('click', () => {
  if (document.body.classList.value === 'theme--black') {
    document.body.classList.remove('theme--black');
    document.body.classList.add('theme--blue');
    localStorage.setItem('theme--blue', 'enabled');
    localStorage.setItem('theme--black', null);

    toggle.classList.remove('toggle--sun');
    toggle.classList.add('toggle--moon');
  } else {
    document.body.classList.remove('theme--blue');
    document.body.classList.add('theme--black');
    toggle.classList.remove('toggle--moon');
    toggle.classList.add('toggle--sun');
    localStorage.setItem('theme--blue', null);
    localStorage.setItem('theme--black', 'enabled');
  }
});
