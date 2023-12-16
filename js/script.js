const night = document.querySelector(".night");
const day = document.querySelector(".day");
const theme = document.querySelector("body");
const header = document.querySelector("header");
const links = document.querySelectorAll("a");
const ps = document.querySelectorAll("p");
const h1 = document.querySelectorAll("h1");
const h2 = document.querySelectorAll("h2");
const h3 = document.querySelectorAll("h3");
const svgs = document.querySelectorAll("svg");
const all = document.querySelectorAll("*");

night.addEventListener("click", () => {
  night.classList.add("hidden");
  night.classList.add("night-theme");
  day.classList.remove("hidden");
  whiteText(h1);
  whiteText(h2);
  whiteText(h3);
  whiteText(ps);
  all.forEach((elm) => elm.classList.add("night-theme"));
  all.forEach((elm) => {
    elm.classList.add("night-theme");
  });
  svgs.forEach((svg) => (svg.style.backgroundColor = "transparent"));
});

day.addEventListener("click", () => {
  day.classList.add("hidden");
  night.classList.remove("hidden");
  night.classList.remove("hidden");
  all.forEach((elm) => elm.classList.remove("night-theme"));
  blueText(h1);
  blueText(h2);
  blueText(h3);
  blueText(ps);
});

function whiteText(elms) {
  elms.forEach((elm) => (elm.style.color = "white"));
}

function blueText(elms) {
  elms.forEach((elm) => (elm.style.color = "#42446e"));
}
