'use strict';

const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', () => {
  if (document.body.classList.value === 'theme--black') {
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
});
