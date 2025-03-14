/* filepath: /C:/Users/Admin/Desktop/personal-portfolio/my portafolio 2025/scripts/main.js */
document.addEventListener("scroll", () => {
  const parallax = document.querySelector(".parallax-bg");
  const scrollPosition = window.scrollY;
  parallax.style.transform = `translateY(${scrollPosition * 0.5}px)`;
});

document.getElementById("theme-toggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  const icon = this.querySelector("i");
  if (document.body.classList.contains("dark-mode")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
});
