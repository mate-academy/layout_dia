'use strict';

// header-link active

window.onload = function() {
  const chk = document.getElementById('header__vector');

  const menuLinks = document.querySelectorAll('.menu li a');

  menuLinks.forEach(function(item) {
    item.addEventListener('click', function() {
      chk.checked = false;
    });
  });
};

// form loading

window.onload = function() {
  const pageReload = document.querySelector('#form');

  pageReload.addEventListener('submit', (event) => {
    event.preventDefault();
    pageReload.reset();
  });
};
