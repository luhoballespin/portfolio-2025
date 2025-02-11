/* filepath: /C:/Users/Admin/Desktop/personal-portfolio/my portafolio 2025/scripts/main.js */
document.addEventListener("scroll", () => {
  const parallax = document.querySelector(".parallax-bg");
  const scrollPosition = window.scrollY;
  parallax.style.transform = `translateY(${scrollPosition * 0.5}px)`;
});
