const e = document.querySelectorAll(".intro__images__image")
  , t = document.getElementById("leftArrow")
  , c = document.getElementById("rightArrow");
let n = 0;
function a() {
    e.forEach( (e, t) => {
        e.classList.remove("intro__images__image--active"),
        t === n && e.classList.add("intro__images__image--active")
    }
    )
}
function d(t) {
    n = (n + t + e.length) % e.length,
    a()
}
t.addEventListener("click", () => d(-1)),
c.addEventListener("click", () => d(1)),
a();
//# sourceMappingURL=index.78945eee.js.map
