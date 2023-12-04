const dayNight = document.querySelector("#day-night");
const theme = document.querySelector("body");
const header = document.querySelector("header");

dayNight.addEventListener("click", () => {
  theme.style.backgroundColor = "black";
  header.style.backgroundColor = "black";
});
