'use strict';

// eslint-disable-next-line max-len
document.querySelector('.toggler').addEventListener('click', function(e) {
  e.preventDefault();

  if (this.classList.contains('toggler--active')) {
    this.classList.remove('toggler--active');
    // eslint-disable-next-line max-len
    document.querySelector('.nav__mobile').classList.remove('nav__mobile--active');
  } else {
    this.classList.add('toggler--active');
    // eslint-disable-next-line max-len
    document.querySelector('.nav__mobile').classList.add('nav__mobile--active');
  }
});
