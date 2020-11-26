'use strict';

const form = document.querySelector('form');

form.addEventListener('submit', event => {
  document.location.reload();
  event.preventDefault();
});

const scene = document.querySelector('.vision--scene');

function parallax(event) {
  this.querySelectorAll('.vision__wrap').forEach(layer => {
    const speed = layer.getAttribute('data-speed');
    const halfWidth = scene.clientWidth / 2;
    const halfHeight = scene.clientHeight / 2;

    // eslint-disable-next-line max-len
    layer.style.transform = 'translateX(' + -(event.clientX - halfWidth) * speed / 100 + 'px) translateY(' + -(event.clientY - halfHeight) * speed / 100 + 'px) rotate(-65.1deg)';
  });
}

document.addEventListener('mousemove', parallax);
