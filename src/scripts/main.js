'use strict';

window.onload = function() {
  const activLink = document.getElementsByClassName('nav__link');
  const activHire = document.getElementsByClassName('hire__link')[0];

  // console.log(activHire);

  for (let i = 0; i < activLink.length; i++) {
    activLink[i].addEventListener('click', function() {
      for (let c = 0; c < activLink.length; c++) {
        activLink[c].classList.remove('nav__link_active');
      }
      this.classList.toggle('nav__link_active');
    });
  }

  activHire.addEventListener('click', function() {
    if (this.classList.contains('hire__link_activ')) {
      this.classList.remove('hire__link_activ');
    }
  });
};
