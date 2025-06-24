window.addEventListener('DOMContentLoaded', () => {
    const banner = document.querySelector('[data-cookie-banner]');
    const buttons = banner?.querySelectorAll('[data-cookie-action]');
    const consent = localStorage.getItem('cookieConsent');

    if (!consent && banner) {
      banner.style.display = 'block';

      buttons.forEach(button => {
        button.addEventListener('click', () => {
          const choice = button.getAttribute('data-cookie-action');
          localStorage.setItem('cookieConsent', choice);
          banner.style.display = 'none';
        });
      });
    }
  });