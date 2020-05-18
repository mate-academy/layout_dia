'use strict';

const nav = document.querySelector('.mob-nav');
const burger = document.querySelector('.header__burger');
const closing = nav.querySelector('.mob-nav__close');

burger.onclick = function() {
  toggleMenu();
};

nav.addEventListener('click', function(e) {
  if (e.target === closing || e.target.classList.contains('mob-nav__link')) {
    toggleMenu(0);
  }
});

function toggleMenu(val = 1) {
  nav.style.opacity = val;

  val ? nav.style.zIndex = 1
    : nav.addEventListener('transitionend', function toggleZIndex() {
      nav.style.zIndex = -1;
      nav.removeEventListener('transitionend', toggleZIndex);
    });
}
