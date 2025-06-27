document.addEventListener('DOMContentLoaded', function () {
    const termsLink = document.querySelector('a[href="/partials/footer-terms.html"]');
    const termsSection = document.getElementById('terms-section');
    if (termsLink && termsSection) {
        termsLink.addEventListener('click', function (event) {
            event.preventDefault();
            termsSection.classList.remove('visually-hidden');
        });
    }
});
