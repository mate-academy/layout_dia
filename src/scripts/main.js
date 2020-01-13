'use strict';

window.onload = function() {
  const activeLink = document.getElementsByClassName('nav__link');
  const activeHire = document.getElementsByClassName('hire__link')[0];

  for (let i = 0; i < activeLink.length; i++) {
    activeLink[i].addEventListener('click', function() {
      for (let j = 0; j < activeLink.length; j++) {
        activeLink[j].classList.remove('nav__link_activ');
      }
      activeHire.classList.remove('hire__link--activ');
      this.classList.toggle('nav__link_activ');
    });
  }

  activeHire.addEventListener('click', function() {
    for (let j = 0; j < activeLink.length; j++) {
      activeLink[j].classList.remove('nav__link_activ');
    }
    activeHire.classList.toggle('hire__link--activ');
  });
};
