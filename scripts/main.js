/* filepath: /C:/Users/Admin/Desktop/personal-portfolio/my portafolio 2025/scripts/main.js */

// Cambio de tema con animación luna/sol y persistencia en localStorage
document.addEventListener('DOMContentLoaded', () => {
  const themeBtn = document.getElementById('theme-toggle');
  const body = document.body;

  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
  }

  themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
  });
});
