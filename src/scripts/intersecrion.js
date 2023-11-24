'use strict';

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1,
};

// eslint-disable-next-line no-undef
const observer = new IntersectionObserver(callback, options);

const targets = document.querySelectorAll('.scroll');

targets.forEach(target => observer.observe(target));

// eslint-disable-next-line no-undef
function callback(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      switch (true) {
        case entry.target.classList.contains('section__title--process'):
          entry.target.classList.add('section__title--process__anim');
          break;
        case entry.target.classList.contains('section__title--vision'):
          entry.target.classList.add('section__title--vision__anim');
          break;
        default:
          entry.target.classList.add('section__title__anim');
      }
    }
  });
};
