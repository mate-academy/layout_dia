/* eslint-disable no-undef */
/* eslint-disable prefer-const */
/* eslint-disable padding-line-between-statements */
/* eslint-disable strict */
// eslint-disable-next-line max-len

// #region burger
let headerNav = document.querySelector('.header__nav');
let burgerIcon = document.querySelector('.header__burger-icon');
let body = document.querySelector('body');

burgerIcon.addEventListener('click', function() {
  this.classList.toggle('active');
  headerNav.classList.toggle('open');
  body.classList.toggle('open');
});

document.querySelectorAll('.header__nav a.nav__link').forEach(function(link) {
  link.addEventListener('click', function() {
    headerNav.classList.remove('open');
    burgerIcon.classList.remove('active');
  });
});
// #endregion
