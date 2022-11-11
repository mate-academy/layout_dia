'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu--mobile');
  } else {
    document.body.classList.remove('page__body--with-menu--mobile');
  }
});

document.addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.reset();
});

const textarea = document.querySelector('textarea');

textarea.addEventListener('keyup', function() {
  if (this.scrollTop > 0) {
    this.style.height = this.scrollHeight + 'px';
  }
});
