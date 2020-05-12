'use strict';

const nav = document.querySelector('.nav-mobile');
const burger = document.querySelector('.header__burger');
const times = nav.querySelector('.nav-mobile__times');

burger.onclick = function() {
  translateNav();
};

nav.addEventListener('click', function(e) {
  if (e.target === times || e.target.classList.contains('nav-mobile__link')) {
    translateNav(-200);
  }
});

function translateNav(val = 0) {
  nav.style.transform = `translateY(${val}%)`;
}
