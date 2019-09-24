'use strict';

const checker = document.querySelector('.nav__clicker');
const heightChanger = document.querySelector('.nav');

function open() {
  document.getElementById('nav__list').classList.toggle('nav__show');
  checker.checked = !!checker.checked;

  if (checker.checked === false) {
    heightChanger.style.height = '0';
  }

  if (checker.checked === true && window.matchMedia('(min-width: 851px)').matches) {
    heightChanger.style.height = '80px';
  }

  if (checker.checked === true && window.matchMedia('(max-width: 850px)').matches) {
    heightChanger.style.height = '100vh';
  }
}

checker.addEventListener('change', open);
