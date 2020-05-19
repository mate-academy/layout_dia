'use strict';

// let blueMode = localStorage.getItem('blueMode');

const toggle = document.querySelector('.toggle');

// const enableBlueMode = () => {
//   document.body.classList.add('bluemode');
//   localStorage.setItem('bluemode', 'enabled');
// };

// const removeBlueMode = () => {
//   document.body.classList.remove('bluemode');
//   localStorage.setItem('bluemode', 'null');
// };

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
