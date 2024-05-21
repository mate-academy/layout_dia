var e=document.querySelectorAll(".slide"),t=e.length;e.forEach(function(e){e.classList.remove("active"),e.classList.remove("next"),e.classList.remove("prev")}),e[0].classList.add("active"),e[1%t].classList.add("next"),e[(-1+t)%t].classList.add("prev");var c=document.querySelector(":root"),r=document.querySelector("#dark");document.querySelector(".card__number"),document.querySelector(".card__click"),r.addEventListener("click",function(){event.preventDefault(),c.classList.toggle("dark")});//# sourceMappingURL=index.266288a7.js.map

//# sourceMappingURL=index.266288a7.js.map
