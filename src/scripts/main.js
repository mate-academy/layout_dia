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
// const resizeWindow = () => {
//   const navbar = document.querySelector('.header-navbar__list');
//   window.addEventListener('resize', e => {

//     if (window.innerWidth > 1069) {
//       navbar.style.transform = 'translateY(0)';
//     } else {
//       navbar.style.transform = 'translateY(-100%)';
//     };
//   });
// };

// resizeWindow();
func();
