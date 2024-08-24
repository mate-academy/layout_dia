const slider = document.querySelector('.slider');
const images = [
  'https://s3-alpha-sig.figma.com/img/df81/f355/fc941fc1356e0f607b1d633de094539e?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TtK038YmGViVX49IFC6N1rxmi88iP58GKTmfrBvtoEohSCX0Xfhfs-cuyt01WZvtJV7jP-Wor2IU1Baz5ruh0ZJ3Mg5yuOuvomURczgHGN4ouNFdaJ1t6mNzumraq0hG0g~AmPmvPgMnjXdH7OvNkqimmforXPWIK97jIa8nXI6CbNq8tn~X8YDDDR-AZw1ZR84OW9zjo7UwbZdETyAiaz69QPlgd8D1Lk0Kk-TJw8PbszQOCU3-csRLknSXttJPAH4Ee22RNE5RyGw4sOrefRfADxVe5zRofM-s9uZn9bYEHbMU-nYHdPAZgInUIVC6hLxW~A0O5vdlSqSWKhaSig__',
  'https://s3-alpha-sig.figma.com/img/8603/70f4/db2a054305f1b37c0ba617d02ccf6339?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ayEYAEtoLkyUYh6Rhqvg8XKFq5y8SIudRSqxtUX2ufHSVVMHDDU5RC4mFc1l6v~WG~1z9pS0o4vO0nrMiznJOERUl0wBHIMRTFUYudgkIQ1RvWWSBaMAlUk0QbprFkJfeyMuZ-WLGXQJn5TemQIYG4ey0UCABbEzD8-5yeWHiq8cranhnuxyiDOatkhHFR9kYO4wlLxZ-mX0ten-~~LxlweemF7LfrKyIdKpmx2Uyw38xiJJghvlIeRhLXTEM1eCWL41MSspFB-MMj4j8cMfylSWhRSbJzNxWaiFHZcs5rUldPLgzfuOO867hfhsVwxn1W4IQTgald9TuKv~Sr~U~Q__',
  'https://s3-alpha-sig.figma.com/img/e6fb/cdee/100cb60dcea8715c8baf9c0b81225476?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XySXvzBsa-SX6GRJpdKDGuS2sRu0YOTwwyKeZ~GHr-LTVX74YbHouyvFvlEZM7aVa4jc2~TnKE-2yRwBolIu-KhZjWIXMmw1hU16pT8S9dY-2TKCT60Ml6XPAt4tYXiGIWGZ9rRigciTSSriLvfRTZPiUym0-C4660j0SCQ-inrizAZszcKJiLi3pNrpCQlt3GY~8cVUiH3mTD~rq0HXMAo-1IDbMnEwtzC-aYh4Ctb17GxpJRHaqL2hDM04FIx-3GIFxOZZK~yG5X3E-f64W0sRGSD41pYtg1tVkyDESxGlYPpl6vOdr4xKP~nLwwyB9aUtkaO9PraySFepmBx0jA__',
];

let currentImageIndex = 0;

document
  .querySelector('.slider__arrow-button--left')
  .addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    slider.style.backgroundImage = `url('${images[currentImageIndex]}')`;
  });

document
  .querySelector('.slider__arrow-button--right')
  .addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    slider.style.backgroundImage = `url('${images[currentImageIndex]}')`;
  });
