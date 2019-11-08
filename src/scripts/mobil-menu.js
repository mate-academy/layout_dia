'use strict';
document.addEventListener("DOMContentLoaded", onReady);

function onReady() {
  const buttonOpen = document.getElementById('mobile__btn--open');
  const buttonClose = document.getElementById('mobile__btn--close');
  const navMenu = document.getElementById('nav__list');


  buttonOpen.onclick = function() {
    navMenu.style.cssText = 'display: flex;';
    buttonOpen.style.cssText = 'display: none;';
    buttonClose.style.cssText = 'display: block;';
  };
  buttonClose.onclick = function() {
    navMenu.style.cssText = 'display: none;';
    buttonClose.style.cssText = 'display: none;';
    buttonOpen.style.cssText = 'display: flex;';

  }

}
