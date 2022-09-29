'use strict';

let indexArr = 0;

document.querySelector('.container__gallery_btn--rev').addEventListener('click',
 function() {
  const image = '../images/logo/headephoto.png';
  const image1 = '../images/logo/qPojqUji_y4.png';
  const image2 = '../images/logo/GwVmBgpP-PQ.png';

  if (indexArr === 0) {
    indexArr = 2;
  } else {
    indexArr = indexArr - 1;
  }

  const arr1 = [image, image1, image2];
  const container = document.querySelector('.container__gallery');

  container.style.backgroundImage = `url(${arr1[indexArr]})`;

});

document.querySelector('.container__gallery_btn--for').addEventListener('click',
 function() {
  const image = '../images/logo/headephoto.png';
  const image1 = '../images/logo/qPojqUji_y4.png';
  const image2 = '../images/logo/GwVmBgpP-PQ.png';

  if (indexArr === 2) {
    indexArr = 0;
  } else {
    indexArr++;
  }

  const arr1 = [image, image1, image2];
  const container = document.querySelector('.container__gallery');

  container.style.backgroundImage = `url(${arr1[indexArr]})`;

});
