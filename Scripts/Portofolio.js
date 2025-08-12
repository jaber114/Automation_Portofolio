// Basic JavaScript to enhance user experience, like smooth scroll if needed
document.addEventListener('DOMContentLoaded', function () {
    // Example of smooth scroll effect (optional)
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    for (let link of scrollLinks) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            window.scrollTo({
                top: target.offsetTop - 50,
                behavior: 'smooth',
            });
        });
    }
});
