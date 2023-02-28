'use strict';

window.addEventListener("hashchange", () => {
  if (window.location.hash === "#nav") {
    document.body.classList.add("page__body--with-nav");
  } else {
    document.body.classList.remove("page__body--with-nav");
  }
});