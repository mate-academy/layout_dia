'use strict';

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById('myBtn').style.display = 'block';
  } else {
    document.getElementById('myBtn').style.display = 'none';
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0;
}

document.getElementById('myBtn').addEventListener('click', topFunction);
