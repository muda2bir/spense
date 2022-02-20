const nav_list = document.querySelector(".nav_list");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  nav_list.classList.toggle("active");
});