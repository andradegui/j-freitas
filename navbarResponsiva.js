const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
  hamburger.classList.toggle("open");
});

// Dropdown idioma
document.querySelectorAll(".lang-selected").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    this.parentElement.classList.toggle("show");
  });
});

document.addEventListener("click", () => {
  document.querySelectorAll(".language").forEach((lang) => {
    lang.classList.remove("show");
  });
});
