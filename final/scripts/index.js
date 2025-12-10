// Hamburger menu toggle
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav .nav");
// const hero = document.querySelector(".hero-image");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("mobile-open");
  // if (hero) {
  //   hero.classList.toggle("space-up");
  // }
});

// Close menu when a link is clicked
document.querySelectorAll("nav .nav a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    nav.classList.remove("mobile-open");
  });
});
