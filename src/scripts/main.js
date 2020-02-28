'use strict';

const menu = document.getElementById('menu');

menu.addEventListener('click', onClickMenu);

function onClickMenu() {
  menu.classList.toggle('change');
  document.getElementById('nav').classList.toggle('change');
  document.getElementById('menu-bg').classList.toggle('change-bg');
}
