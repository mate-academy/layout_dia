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

  const menuBtn = document.getElementsByClassName('header__gamb')[0];
  const gamb = document.getElementsByClassName('nav-icon')[0];
  const navMobile = document.getElementsByClassName('navMobile')[0];
  const hederContent = document.getElementsByClassName('header__content')[0];

  menuBtn.addEventListener('click', function() {
    gamb.classList.toggle('open');
    navMobile.classList.toggle('navMobile_none');
    hederContent.classList.toggle('header__content_none');
  });

  window.onresize = function() {
    gamb.classList.remove('open');
    navMobile.classList.add('navMobile_none');
    hederContent.classList.remove('header__content_none');
  };

  const activeMobileLink = document.getElementsByClassName('navMobile__link');
  const actMobHire = document.getElementsByClassName('navMobile__hireLink')[0];

  for (let i = 0; i < activeMobileLink.length; i++) {
    activeMobileLink[i].addEventListener('click', function() {
      for (let j = 0; j < activeMobileLink.length; j++) {
        activeMobileLink[j].classList.remove('navMobile__link_activ');
      }
      actMobHire.classList.remove('navMobile__link_activ');
      this.classList.toggle('navMobile__link_activ');
    });
  }

  actMobHire.addEventListener('click', function() {
    for (let j = 0; j < activeLink.length; j++) {
      activeMobileLink[j].classList.remove('navMobile__link_activ');
    }
    actMobHire.classList.toggle('navMobile__link_activ');
  });
};
