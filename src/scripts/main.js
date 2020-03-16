'use strict';

document.querySelector('.form')
  .addEventListener('submit', (evt) => {
    evt.preventDefault();
    window.location.reload(false);
  }
  );
