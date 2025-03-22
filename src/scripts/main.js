'use strict';

// slider

const images = [
  'https://s3-alpha-sig.figma.com/img/df81/f355/fc941fc1356e0f607b1d633de094539e?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sgJKY1GzJbt33TDwp4f8VAqbQT~F451CCe4SoPOZhr52u4v3b9e5ALC9m6vvbnrMCeP8pL5K1Ay3U0ciOAuJpIbMvxytSXDvlmlP4zDbkM74v490S5UyPZieN~2a-bUjb7I-p0Nx31XhOKF-OgyI76voqWSq7VxHnB1c9tb3eCvpp3QqjJpGc3la5G4sAxXG9ULAva5U0~xW4D8TGtXtyjdKA635fJxW~rHrKpSwUpmGzQ16b3~Tfz76KykuOJd7pIt1grnWRErYIPvLT9KFWoo-mPlf2y-ktahCCa1zQFrWHklM96gqYT-oMq-7e-6tZmuWh4At0NPsk8Jhojm1Pg__',
  'https://s3-alpha-sig.figma.com/img/8603/70f4/db2a054305f1b37c0ba617d02ccf6339?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=p8jtpnPf0EEH0Tp1qa2nIzAgZAfr5Ggsftw0pryBlA2KJcbIN3dAS0BBeKm71t03~muDbH-NZjCkLosq0xOuBZKA3MQ7TSYYdxAvEUJLtpi8Bp3VIYjXSLOhqDgQhS25uiF0XyW2wEV0tTupqH6Y5Acpweuoq4~8T62Yc3wS0wIT4oC5Pu4puRM4siRaLMH46zzdRwKrMtxSBdrMIVgPAMYIKY-iiK7hSFOaQ0vCN6AuVasJWvnhxNJFMek2ZU74vzdyufCP9GCsnKsa92jD33VKmafn9RPdSZBSPZqjBsX-5kQ~TRiiCyfiNiveMHe0oQVmyt4ZBOm1cdMC3GDIIA__',
  'https://s3-alpha-sig.figma.com/img/e6fb/cdee/100cb60dcea8715c8baf9c0b81225476?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kwUQ~LKWhFQB8iWjDRd8mPkbCLaBjyrcBR7VlTy4Sb9z9GRbDAYF3f34jQXYw1MptFCd2Av~Zo8QX5RY6LNjG4WrpJiZSOw8woeGqb2z8liUbt2omj9Dn4GQRDVK2BDfRP622NgR6vEc8dm3FYqtpnYZB6O-Ta~Fb-B2d9zmZOPWkXQHwIlgBIxlnmawdpDf~6yaoV-EBhgYn~08pYmZWuNkZF-V6k3Kfa4rkzovaho9~FjpX-hciQPnf9e7BgRJJhrSwiUgtVK6NkUvCblFNbj-p9bowbvsnQd9aIzHU8fdchYSRQgBsS5JL0MyOOIoO3tq~wKmgqva54WhZwevzQ__',
];

document.addEventListener("DOMContentLoaded", () => {
  const sliderImage = document.querySelector('.slider__image');
  const moveBack = document.querySelector('.slider__arrow-btn--left');
  const moveForward = document.querySelector('.slider__arrow-btn--right');
  console.log(sliderImage)
 
  let index = 0;
  function updateImage() {
    sliderImage.style.backgroundImage = `url(${images[index]})`;
  }
  moveBack.addEventListener("click", () => {
    index =  (index - 1 + images.length) % images.length;
    updateImage();
    console.log(1)
  });
  moveForward.addEventListener("click", () => {
    index = (index + 1) % images.length;
    updateImage();
    console.log(2)
  });
  updateImage(index);
});

// dialog
const dialog = document.getElementById('tabletOverlay');
const showButton = document.getElementById('show');
const closeButton = document.getElementById('close');
const links = document.querySelectorAll('.tablet-overlay__link');

const closeDialog = () => {
  dialog.style.display = 'none';
  document.body.classList.remove('hide');
  dialog.close();
};

showButton.addEventListener('click', () => {
    dialog.style.display = 'block';
    document.body.classList.add('hide');
    dialog.showModal();
  });

  closeButton.addEventListener('click', () => closeDialog());

links.forEach((link) => link.addEventListener('click', () => closeDialog()));


// From
const form = document.getElementById('ContactForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  form.reset();
});