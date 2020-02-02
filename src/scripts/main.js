'use strict';

// eslint-disable-next-line no-unused-vars
function myFunction() {
  document.querySelector('.hamburger').classList.toggle('change');
  document.querySelector('.main__info-block').classList.toggle('main__info-block--mobile');

  const x = document.querySelector('.mobile-menu');

  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
}
