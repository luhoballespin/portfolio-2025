/* filepath: /C:/Users/Admin/Desktop/personal-portfolio/my portafolio 2025/scripts/main.js */
document.addEventListener("scroll", () => {
  const parallax = document.querySelector(".parallax-bg");
  const scrollPosition = window.scrollY;
  parallax.style.transform = `translateY(${scrollPosition * 0.5}px)`;
});

const themeToggle = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme") || "light";

if (currentTheme === "dark") {
  document.body.classList.add("dark-mode");
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark-mode") ? "dark" : "light"
  );
});
