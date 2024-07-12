'use strict';

const header = document.querySelector('.header');
const navHeader = header.querySelector('.nav-header');
const navListItems = navHeader.querySelectorAll('.nav__link');
const burger = header.querySelector('.burger');

function scrollIntoBlocks() {
  const navLinkCollection = document.querySelectorAll(`[href*='#']`)

  for (let item of navLinkCollection){
    item.addEventListener('click',(event)=>{
      event.preventDefault()

      if(item.hash.length){
        const block = document.querySelector(item.hash)

        block.scrollIntoView({
          behavior:'smooth',
          block: 'start'
        })
      }
    })
  }
}

function menuToggler(burger, navMenu) {
  const body = document.body;

  burger.classList.toggle('burger--active');
  navMenu.classList.toggle('nav-header--active');

  if (navMenu.classList.contains('nav-header--active'))
    body.style.overflow = 'hidden';
   else body.style.overflow = '';
}

function burgerAction(burger, navMenu) {
  burger.addEventListener('click', () => menuToggler(burger, navMenu));
}

function closeMenuOnLinkClick(navListItems, burger, navMenu) {
  navListItems.forEach(item => {
    item.addEventListener('click', () => menuToggler(burger, navMenu));
  });
}

document.addEventListener('DOMContentLoaded', () => {
  scrollIntoBlocks()

  if(window.innerWidth < 1024) {
    burgerAction(burger, navHeader);
    closeMenuOnLinkClick(navListItems, burger, navHeader);
  }
});
