document.addEventListener('DOMContentLoaded', function () {
    const cookiesLink = document.querySelector('a[href="/partials/footer-cookies.html"]');
    const cookiesSection = document.getElementById('cookies-section');
    if (cookiesLink && cookiesSection) {
        cookiesLink.addEventListener('click', function (event) {
            event.preventDefault();
            cookiesSection.classList.remove('visually-hidden');
        });
    }
});