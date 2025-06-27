document.addEventListener('DOMContentLoaded', function () {
    const privacyLink = document.querySelector('a[href="/partials/footer-privacy.html"]');
    const privacySection = document.getElementById('privacy-section');
    if (privacyLink && privacySection) {
        privacyLink.addEventListener('click', function (event) {
            event.preventDefault(); 
            privacySection.classList.remove('visually-hidden');
        });
    }
});