// app.js

// Scroll Animation
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    if (sectionTop < screenPosition) {
      section.classList.add("visible");
    }
  });
});

// Button Animation
const button = document.querySelector(".cta-btn");
button.addEventListener("mouseover", () => {
  button.style.transform = "scale(1.05)";
});
button.addEventListener("mouseout", () => {
  button.style.transform = "scale(1)";
});