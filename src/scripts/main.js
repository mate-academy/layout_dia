'use strict';

const func = () => {
  const header = document.querySelector('.header');
  const navbar = document.querySelector('.header-navbar__list');

  header.addEventListener('click', e => {
    const spsMaxLineLength = navbar.style.transform;
    const targ = e.target.classList;

    if (targ.contains('ham')) {
      if (spsMaxLineLength === 'translateY(-100%)' || spsMaxLineLength === '') {
        navbar.style.transform = 'translateY(0)';
      } else {
        navbar.style.transform = 'translateY(-100%)';
      };
    };
  });
};

func();
