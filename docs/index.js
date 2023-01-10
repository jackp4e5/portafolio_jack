"use strict";

const element4 = document.querySelector(".wraper-p");
const element3 = document.querySelector(".about-me");
const element2 = document.querySelector(".div-wraper ");
const element1 = document.querySelector(".animation");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".svg-close");
const hamburgerSvg = document.querySelector(".svg-hamburger");
const nav = document.querySelector(".nav");
const ubucacion = element4.getBoundingClientRect();

console.log(ubucacion);

const trabajos = document.querySelector(".trabajos");
const about = document.querySelector(".about");
let scroll;

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
  close.classList.toggle("active");
  hamburgerSvg.classList.toggle("inactive");
});

window.addEventListener("scroll", () => {
  scroll = Number(window.scrollY.toFixed(0));
  if (scroll > 1000 && scroll < 1150) {
    element4.classList.add("transform-y-2");
  } else if (scroll > 950 && scroll < 1000) {
    element3.classList.add("transform-x");
  } else if (scroll > 450 && scroll < 500) {
    element2.classList.add("transform-y");
  } else if (scroll > 360 && scroll < 450) {
    element1.classList.add("aparecer2");
  }
});

trabajos.addEventListener("click", () => {
  element1.classList.add("aparecer2");
  element2.classList.add("transform-y");
});
about.addEventListener("click", () => {
  element3.classList.add("transform-x");
  element4.classList.add("transform-y-2");
});
