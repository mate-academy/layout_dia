'use strict';

const z = document.getElementsByClassName('nav__clicker');
z[0].addEventListener('change', open);

function open() {
  document.getElementById('nav__list').classList.toggle('nav__show');
}
