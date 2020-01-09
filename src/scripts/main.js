'use strict';

window.onload = function() {
  const activLink = document.getElementsByClassName('nav__link');
  const activHire = document.getElementsByClassName('hire__link')[0];

  for (let i = 0; i < activLink.length; i++) {
    activLink[i].addEventListener('click', function() {
      for (let c = 0; c < activLink.length; c++) {
        activLink[c].classList.remove('nav__link_activ');
      }
      this.classList.toggle('nav__link_activ');
    });
  }

  activHire.addEventListener('click', function() {
    activHire.classList.toggle('hire__link--activ');
  });
};
