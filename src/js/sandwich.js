'use strict';

const z = document.getElementById('nav__sandwich');
z.addEventListener('click', open);

function open() {
  document.getElementById('nav__list').classList.toggle('nav__show');
}
