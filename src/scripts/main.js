'use strict';

function hideElement(element) {
  element.classList.add('hidden');
}

function showElement(element) {
  element.classList.remove('hidden');
}

window.onload = function() {
  const menu = document.getElementById('menu');
  const openMenuButton = document.getElementById('menu-open-button');
  const closeMenuButton = document.getElementById('close-menu-button');
  const hireUs = document.getElementById('hire-us');

  const menuNavChildren = document.getElementById('menu__nav').childNodes;

  const pageBody = document.body;

  function closeMenu() {
    hideElement(closeMenuButton);
    showElement(openMenuButton);

    hideElement(menu);
    pageBody.classList.remove('page__body--with_menu');
  };

  function addEventListenerCloseMenuOnClick(element) {
    element.addEventListener('click', () => {
      closeMenu();
    });
  };

  hideElement(closeMenuButton);
  hideElement(menu);

  openMenuButton.addEventListener('click', () => {
    hideElement(openMenuButton);
    showElement(closeMenuButton);

    showElement(menu);
    pageBody.classList.add('page__body--with_menu');
  });

  addEventListenerCloseMenuOnClick(closeMenuButton);

  addEventListenerCloseMenuOnClick(hireUs);

  for (const element of [...menuNavChildren]) {
    addEventListenerCloseMenuOnClick(element);
  }
};
