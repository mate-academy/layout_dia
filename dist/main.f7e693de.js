parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";window.addEventListener("hashchange",function(){"#menu"===window.location.hash?document.body.classList.add("page__body--with-menu"):document.body.classList.remove("page__body--with-menu")}),document.addEventListener("DOMContentLoaded",function(){var e,t=document.querySelectorAll(".header__slider .header__slider--line .img"),n=document.querySelector(".header__slider--line"),d=0;function o(){e=document.querySelector(".header__slider").offsetWidth,n.style.width=e*t.length+"px",t.forEach(function(t){t.style.width=e+"px",t.style.height="auto"}),r()}function r(){n.style.transform="translate(-"+d*e+"px)"}window.addEventListener("resize",o),o(),document.querySelector(".slider__control-prev").addEventListener("click",function(){--d<0&&(d=t.length-1),r()}),document.querySelector(".slider__control-next").addEventListener("click",function(){++d>=t.length&&(d=0),r()})}),document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".form");e.addEventListener("submit",function(t){t.preventDefault(),e.reset()})});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.f7e693de.js.map