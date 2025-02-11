/* filepath: /C:/Users/Admin/Desktop/personal-portfolio/my portafolio 2025/scripts/main.js */
window.addEventListener("scroll", function () {
  const parallax = document.querySelector(".parallax-bg");
  let scrollPosition = window.pageYOffset;
  parallax.style.transform = "translateY(" + scrollPosition * 0.5 + "px)";
});
