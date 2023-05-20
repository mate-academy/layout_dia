'use strict';

const slids = document.getElementsByClassName('intro');
let num = 0;

for (let i = 0; i < 3; i++) {
  slids[i].style.display = 'none';
}

slids[num].style.display = 'block';

for (let i = 0; i < 3; i++) {
  document.getElementsByClassName('left')[i]
    .addEventListener('click', chengeSlideLeft);

  document.getElementsByClassName('right')[i]
    .addEventListener('click', chengeSlideRight);
}

function chengeSlideLeft() {
  slids[num].style.display = 'none';
  num--;

  if (num < 0) {
    num = 2;
  }
  slids[num].style.display = 'block';
}

function chengeSlideRight() {
  slids[num].style.display = 'none';
  num++;

  if (num >= 3) {
    num = 0;
  }
  slids[num].style.display = 'block';
}

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#nav') {
    document.body.classList.add('body--with-menu');
  } else {
    document.body.classList.remove('body--with-menu');
  }
});
