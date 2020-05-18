'use strict';

// let blueMode = localStorage.getItem('blueMode');

const toggle = document.querySelector('.toggle');
const toggleText = document.querySelector('.toggle__text');

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
    toggleText.innerHTML = 'Black theme';
  } else {
    document.body.classList.remove('theme--blue');
    document.body.classList.add('theme--black');
    toggleText.innerHTML = 'Blue theme';
  }

  // if (blueMode !== 'enabled') {
  //   enableBlueMode();
  //   console.log(blueMode);
  // } else {
  //   removeBlueMode();

  //   console.log(blueMode);
  // }
});
