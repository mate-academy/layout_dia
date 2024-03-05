'use strict';

const buttons = document.querySelectorAll('.slider__btn');
/* global alert */

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => {
    alert('The feature is still under development');
  });
}
