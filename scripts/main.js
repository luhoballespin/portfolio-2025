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

  // Dropdown del CV
  function initCVDropdown() {
    const cvDropdown = document.querySelector('.cv-dropdown');
    const cvDropdownBtn = document.getElementById('cv-dropdown-btn');
    const cvDropdownMenu = document.getElementById('cv-dropdown-menu');

    if (!cvDropdown || !cvDropdownBtn || !cvDropdownMenu) {
      console.warn('CV Dropdown elements not found');
      return;
    }

    // Toggle del dropdown al hacer clic en el botón
    cvDropdownBtn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();

      const isActive = cvDropdown.classList.contains('active');

      if (isActive) {
        cvDropdown.classList.remove('active');
        cvDropdownBtn.setAttribute('aria-expanded', 'false');
      } else {
        cvDropdown.classList.add('active');
        cvDropdownBtn.setAttribute('aria-expanded', 'true');
      }
    });

    // Cerrar el dropdown al hacer clic fuera
    document.addEventListener('click', function (e) {
      if (cvDropdown && !cvDropdown.contains(e.target)) {
        cvDropdown.classList.remove('active');
        cvDropdownBtn.setAttribute('aria-expanded', 'false');
      }
    });

    // Cerrar el dropdown al presionar Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && cvDropdown && cvDropdown.classList.contains('active')) {
        cvDropdown.classList.remove('active');
        cvDropdownBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Inicializar el dropdown
  initCVDropdown();
});
