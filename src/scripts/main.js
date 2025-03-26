'use strict';

import getContainerWidth from './functions/getContainerWidth';
import {
  moveSlide,
  updateSliderWidth,
} from './functions/slider';
import updateMenu from './functions/updateMenu';
import updateMobileMenuPosition from './functions/updateMobileMenuPosition';
import {
  header,
  headerHireUs,
  headerLogo,
  headerNavMenu,
  navMenuBurger,
  navMenuLinks,
  sliderNextButton,
  sliderPrevButton,
} from './vars/vars';

document.addEventListener('DOMContentLoaded', () => {
  navMenuBurger?.addEventListener('click', () =>
    updateMenu('toggle'),
  );

  headerLogo?.addEventListener('click', () =>
    updateMenu('remove'),
  );

  headerHireUs?.addEventListener('click', () =>
    updateMenu('remove'),
  );

  navMenuLinks?.forEach((link) => {
    link?.addEventListener('click', () =>
      updateMenu('remove'),
    );
  });

  updateMobileMenuPosition(header, headerNavMenu);
  getContainerWidth();
  updateSliderWidth();

  sliderNextButton.addEventListener('click', () =>
    moveSlide('next'),
  );
  sliderPrevButton.addEventListener('click', () =>
    moveSlide('prev'),
  );
});

window.addEventListener('resize', () => {
  updateMobileMenuPosition(header, headerNavMenu);
  getContainerWidth();
  updateSliderWidth();
});
