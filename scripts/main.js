/* ═══════════════════════════════════════════════════
   PORTFOLIO — LUCIANO BALLESPIN
   Main Script
   ═══════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ─────────────────────────────────────────
     THEME TOGGLE (dark / light)
  ───────────────────────────────────────── */
  const themeBtn  = document.getElementById('theme-toggle');
  const body      = document.body;

  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
  }

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      localStorage.setItem(
        'theme',
        body.classList.contains('dark-mode') ? 'dark' : 'light'
      );
    });
  }

  /* ─────────────────────────────────────────
     HEADER — scroll effect
  ───────────────────────────────────────── */
  const header = document.getElementById('site-header');

  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ─────────────────────────────────────────
     SCROLL REVEAL ANIMATION
     Uses IntersectionObserver for performance
  ───────────────────────────────────────── */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');

          // Trigger children animations when parent becomes visible
          const children = entry.target.querySelectorAll('.reveal-child');
          children.forEach((child) => {
            child.classList.add('visible');
          });

          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -48px 0px' }
  );

  document.querySelectorAll('.reveal').forEach((el) => {
    revealObserver.observe(el);
  });

  /* ─────────────────────────────────────────
     CV DROPDOWN
  ───────────────────────────────────────── */
  const cvDropdown    = document.querySelector('.cv-dropdown');
  const cvDropdownBtn = document.getElementById('cv-dropdown-btn');
  const cvDropdownMenu= document.getElementById('cv-dropdown-menu');

  if (cvDropdown && cvDropdownBtn && cvDropdownMenu) {

    cvDropdownBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const isActive = cvDropdown.classList.contains('active');
      cvDropdown.classList.toggle('active', !isActive);
      cvDropdownBtn.setAttribute('aria-expanded', String(!isActive));
    });

    document.addEventListener('click', (e) => {
      if (!cvDropdown.contains(e.target)) {
        cvDropdown.classList.remove('active');
        cvDropdownBtn.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        cvDropdown.classList.remove('active');
        cvDropdownBtn.setAttribute('aria-expanded', 'false');
        cvDropdownBtn.focus();
      }
    });
  }

  /* ─────────────────────────────────────────
     ACTIVE NAV LINK on scroll
  ───────────────────────────────────────── */
  const sections = document.querySelectorAll('section[id], div[id]');
  const navLinks  = document.querySelectorAll('#site-header nav a');

  if (sections.length && navLinks.length) {
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((link) => {
              link.removeAttribute('aria-current');
              if (link.getAttribute('href') === `#${entry.target.id}`) {
                link.setAttribute('aria-current', 'page');
              }
            });
          }
        });
      },
      { threshold: 0.45 }
    );

    sections.forEach((sec) => navObserver.observe(sec));
  }

  /* ─────────────────────────────────────────
     SMOOTH SCROLL for anchor links
     (native scroll-behavior: smooth handles
      most cases; this adds offset for header)
  ───────────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href').slice(1);
      const target   = document.getElementById(targetId);
      if (!target) return;

      e.preventDefault();
      const headerOffset = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue('--header-h') || '68',
        10
      );
      const y = target.getBoundingClientRect().top + window.scrollY - headerOffset - 16;
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  });

});
