'use strict';
// function toggleMenuClose() {
//   var menu = document.getElementById('nav-bar__menu');
//   if (menu.style.display === 'flex') {
//       menu.style.display = 'none';
//   } else {
//       menu.style.display = 'flex';
//   }
// }



// document.addEventListener("DOMContentLoaded", function() {
//   const nav = document.getElementById("menu");
//   const openIcon = document.querySelector(".nav__toggle__icon--open");
//   const closeIcon = document.querySelector(".nav__toggle__icon--close");

//   openIcon.addEventListener("click", function() {
//     nav.classList.add("open");
//   });

//   closeIcon.addEventListener("click", function() {
//     nav.classList.remove("open");
//   });
// });


// document.addEventListener("DOMContentLoaded", function() {
//   const nav = document.getElementById("menu");
//   const navToggle = document.getElementById("nav-toggle");
//   const openIcon = document.getElementById("open-icon");
//   const closeIcon = document.getElementById("close-icon");

//   // Verifica se está na tela inicial
//   function checkHomePage() {
//     if (window.location.hash === "#home" || window.location.hash === "") {
//       navToggle.style.display = "block";
//     } else {
//       navToggle.style.display = "none";
//     }
//   }

//   // Inicialmente verifica a URL
//   checkHomePage();

//   // Adiciona evento de clique nos ícones de abertura e fechamento do menu
//   openIcon.addEventListener("click", function() {
//     nav.classList.add("open");
//     openIcon.style.display = "none";
//     closeIcon.style.display = "block";
//   });

//   closeIcon.addEventListener("click", function() {
//     nav.classList.remove("open");
//     openIcon.style.display = "block";
//     closeIcon.style.display = "none";
//   });

//   // Atualiza o ícone do menu ao mudar de página
//   window.addEventListener("hashchange", checkHomePage);
// });
