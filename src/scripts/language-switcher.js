'use strict';
import { translations } from './translations/transaltions.js';

let userLanguage;

console.log(localStorage.getItem('userLanguage'));

if (localStorage.getItem('userLanguage')) {
  userLanguage = localStorage.getItem('userLanguage');
} else {
  const shortLang = (navigator.language || navigator.userLanguage).split(
    '-',
  )[0];
  const fallbackMap = {
    en: 'US',
    uk: 'UA',
    ru: 'RU',
    pl: 'PL',
    fr: 'FR',
    de: 'DE',
    es: 'ES',
  };
  userLanguage = fallbackMap[shortLang] || 'US';
  localStorage.setItem('userLanguage', userLanguage);
}

const switchers = document.querySelectorAll('.language-switcher');

switchers.forEach((languageSwitcher) => {
  const switcherTrigger = languageSwitcher.querySelector(
    '.language-switcher__trigger',
  );
  const languageContent = languageSwitcher.querySelector(
    '.language-switcher__content',
  );

  switcherTrigger.addEventListener('click', (e) => {
    e.preventDefault();
    languageSwitcher.classList.toggle('language-switcher--active');
  });

  languageContent.addEventListener('click', (e) => {
    const languageItem = e.target.closest('.language-switcher__item');
    if (languageItem) {
      const selectedLang = languageItem.getAttribute('data-country');
      switchLang(selectedLang);

      languageSwitcher.classList.remove('language-switcher--active');
    }
  });
});

function translatePage() {
  document.querySelectorAll("[data-language]").forEach(el => {
    const key = el.getAttribute("data-language");
    el.textContent = translations[userLanguage][key];
  });
  document.querySelectorAll("input[data-language], textarea[data-language]").forEach(el => {
  const key = el.getAttribute("data-language");
  const translation = translations[userLanguage]?.[key];
  if (translation) {
    el.placeholder = translation;
    el.textContent = ''
  }
});
}

function setActiveStyle() {
  document
    .querySelectorAll('.language-switcher__current-flag-country')
    .forEach((img) => {
      img.src = `https://raw.githubusercontent.com/cristiroma/countries/c6edc915f71c06441fab4da306deac95a28d70aa/data/flags/SVG/${userLanguage}.svg`;
    });

  document
    .querySelectorAll('.language-switcher__language-code--active')
    .forEach((el) =>
      el.classList.remove('language-switcher__language-code--active'),
    );

  document
    .querySelectorAll(
      `[data-country="${userLanguage}"] .language-switcher__language-code`,
    )
    .forEach((el) =>
      el.classList.add('language-switcher__language-code--active'),
    );
}

function switchLang(lang) {
  userLanguage = lang;
  localStorage.setItem('userLanguage', userLanguage);
  setActiveStyle();
  translatePage();
}

setActiveStyle();
translatePage();
