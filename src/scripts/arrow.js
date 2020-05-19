'use strict';

const $arrow = document.getElementsByClassName('process__img');
const $icon = document.getElementsByClassName('process__link');
const $arrowAmount = $arrow.length;

for (let i = 0; i < $arrowAmount; i++) {
  $icon[i].onmouseover = () => {
    $arrow[i].animate([
      { left: '50%' },
      { left: '65%' },
      { left: '50%' },
    ], {
      duration: 700,
      iterations: 3,
    });
  };
}
