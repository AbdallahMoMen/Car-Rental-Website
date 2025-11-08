const navIcon = document.querySelector("header .nav-icon");
const nav = document.querySelector(".toggler-nav");
const navAnchors = document.querySelectorAll(".toggler-nav a");

console.log(navIcon);

navIcon.addEventListener("click", () => {
  navIcon.classList.toggle("clicked");
  nav.classList.toggle("open");
});

navAnchors.forEach((e) => {
  e.addEventListener("click", () => {
    nav.classList.toggle("open");
    navIcon.classList.toggle("clicked");
  });
});

// Reveal Animation

const sr = ScrollReveal({
  distance: "25%",
  duration: 2500,
  delay: 400,
  reset: true,
});

sr.reveal(".landing-info", { delay: 200, origin: "top" });
sr.reveal(".rent-info", { delay: 600, origin: "left" });
sr.reveal(".section-header", { delay: 200, origin: "top" });
sr.reveal("section .container", { delay: 600, origin: "bottom" });
sr.reveal(".subscribe", { delay: 200, origin: "top" });
sr.reveal(".subscribe div", { delay: 600, origin: "left" });
