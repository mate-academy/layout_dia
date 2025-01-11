'use strict';

import branding from '../images/expertise/branding.svg';
import communication from '../images/expertise/communication.svg';
import strategy from '../images/expertise/strategy.svg';

const expertiseCards = [
  {
    link: 'https://www.google.ua',
    img: branding,
    title: 'Branding',
    description: 'We create additional value for companies, products, services as well as verbal and visual ways to deliver it to the audience.'
  },

  {
    link: 'https://www.google.ua',
    img: communication,
    title: 'Communication',
    description: 'We strive to create communications that can increase media performance. We use everything — words, meanings, stories, art, movies.'
  },

  {
    link: 'https://www.google.ua',
    img: strategy,
    title: 'Strategy',
    description: 'We create business growth strategies, from the moment of its birth to the achievement of the necessary business indicators.'
  }
];




const expertiseSection = document.querySelector('.our-expertise__cards-block');

function createCard(card) {
  const article = document.createElement('article');
  const imgLink = document.createElement('a');
  const img = document.createElement('img');
  const h3 = document.createElement('h3');
  const titleLink = document.createElement('a');
  const p = document.createElement('p');

  article.setAttribute('class', 'expertise-card');
  imgLink.setAttribute('href', `${card.link}`);
  img.setAttribute('class', 'expertise-card__picture');
  img.setAttribute('src', `${card.img}`);
  titleLink.setAttribute('class', 'expertise-card__link');
  titleLink.setAttribute('href', `${card.link}`);
  p.setAttribute('class', 'expertise-card__description');

  titleLink.textContent = card.title;
  p.textContent = card.description;

  imgLink.appendChild(img);
  h3.appendChild(titleLink);
  article.appendChild(imgLink);
  article.appendChild(h3);
  article.appendChild(p);

  return article;
}

expertiseCards.forEach(card => {
  const cardElement = createCard(card);
  expertiseSection.appendChild(cardElement);
});





function getActiveSlide(way) {
  let sliders = [...document.querySelectorAll('.slider__item')];

  const activeSlide = document.querySelector('.slider__item.active');
  let index = sliders.indexOf(activeSlide);


  if (index === -1) return;

  if (way === 'left') {
    index = (index - 1 + sliders.length) % sliders.length;
  } else {
    index = (index + 1) % sliders.length;
  }

  activeSlide.classList.remove('active');
  sliders[index].classList.add('active');

}

const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');

console.log(leftArrow, rightArrow)


leftArrow.addEventListener('click', () => {
  getActiveSlide('left')
})

rightArrow.addEventListener('click', () => {
  getActiveSlide('right')
} )

