var e=document.querySelector(".carousel__track"),t=Array.from(e.children),r=document.querySelector(".carousel__button--right"),n=document.querySelector(".carousel__button--left"),c=t[0].getBoundingClientRect().width;t.forEach(function(e,t){e.style.left=c*t+"px"});// eslint-disable-next-line no-shadow
var l=function(e,t,r){e.style.transform="translateX(-"+r.style.left+")",t.classList.remove("current-slide"),r.classList.add("current-slide")};n.addEventListener("click",function(t){var r=e.querySelector(".current-slide"),n=r.previousElementSibling;l(e,r,n)}),r.addEventListener("click",function(t){var r=e.querySelector(".current-slide"),n=r.nextElementSibling;l(e,r,n)});//# sourceMappingURL=index.336c20c9.js.map

//# sourceMappingURL=index.336c20c9.js.map
