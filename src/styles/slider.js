let next = document.getElementsByClassName('slides__arrow--left');
let prev = document.getElementsByClassName('slides__arrow--right');
let carousel = document.querySelector('.slides');
let items = document.querySelectorAll('.slides__image');
let countItem = items.length;
let active = 1;
let gadgest = null;
let mac = null;

next.onclick = () => {
  carousel.classList.remove('prev');
  carousel.classList.add('next');
  active = active + 1 >= countItem ? 0 : active + 1;
  gadgest = active - 1 < 0 ? countItem - 1 : active - 1;
  mac = active + 1 >= countItem ? 0 : active + 1;
  changeSlider();
}
prev.onclick = () => {
  carousel.classList.remove('next');
  carousel.classList.add('prev');
  active = active - 1 < 0 ? countItem - 1 : active - 1;
  gadgest = active + 1 >= countItem ? 0 : active + 1;

  mac = gadgest + 1 >= countItem ? 0 : gadgest + 1;
  changeSlider();
}
const changeSlider = () => {
  let itemOldActive = document.querySelector('.slides__image--active');
  if (itemOldActive) itemOldActive.classList.remove('active');

  let itemOldGadgest = document.querySelector('.slides__image--gadget');
  if(itemOldGadgest) itemOldGadgest.classList.remove('gadgest');

  let itemOldMac = document.querySelector('.slides__image--mac');
  if(itemOldMac) itemOldMac.classList.remove('mac');

  items.forEach(e => {
    e.querySelector('.slides__image').style.animation = 'none';
    e.querySelector('.slides__image').style.animation = '';
  })

  items[active].classList.add('active');
  items[gadgest].classList.add('gadgest');
  items[mac].classList.add('mac');
}
