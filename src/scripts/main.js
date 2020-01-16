'use strict';

document.querySelector('.toggler').addEventListener('click', function(e) {
  e.preventDefault();

  if (this.classList.contains('toggler--active')) {
    this.classList.remove('toggler--active');
    // eslint-disable-next-line max-len
    document.querySelector('.nav-responsive').classList.remove('nav-responsive--active');
  } else {
    this.classList.add('toggler--active');
    // eslint-disable-next-line max-len
    document.querySelector('.nav-responsive').classList.add('nav-responsive--active');
  }
});
