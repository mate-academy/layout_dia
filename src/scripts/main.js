'use strict';

const menuBtn = document.querySelector('.burger');
const menuVisible = document.querySelector('.menu');
const bodyscroll = document.querySelector('.page');

menuBtn.addEventListener('click', function() {
  menuBtn.classList.toggle('cross');
  menuBtn.classList.toggle('show');
  menuVisible.classList.toggle('show');

  bodyscroll.classList.toggle('scroll');
});

const menuLinks = document.querySelectorAll('.menu__link');

function removeClasses() {
  const elementsToRemove = document.querySelectorAll('.show, .scroll, .cross');

  elementsToRemove.forEach(element => {
    element.classList.remove('show', 'scroll', 'cross');
  });
}

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    removeClasses();

    window.location.href = link.getAttribute('href');
  });
});

function addClassToFooter() {
  const footer = document.getElementById('footer');

  if (window.innerWidth >= 1024) {
    footer.classList.add('container');
  } else {
    footer.classList.remove('container');
  }
}

addClassToFooter();
window.addEventListener('resize', addClassToFooter);
