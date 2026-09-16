'use strict';

// ==========================================================================
// APPLICATION ENTRY POINT
// ==========================================================================

// 1. Global Styles
import '../styles/main.scss';

// 2. Feature Modules
import { initSlider } from './modules/slider.js';
import { initBurgerMenu } from './modules/burger-menu.js';

// 3. Initialization
document.addEventListener('DOMContentLoaded', () => {
  initSlider();
  initBurgerMenu();
});
