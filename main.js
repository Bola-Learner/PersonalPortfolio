document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const mobileMenu = document.querySelector('.mobile-menu');

    // Function to toggle the navigation menu's visibility
    function toggleMenu() {
        mobileMenu.classList.toggle('open');
    }

    menuIcon.addEventListener('click', toggleMenu);

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Adjust for header height if needed
                    behavior: 'smooth'
                });

                // Close the mobile menu after clicking a link (optional)
                if (mobileMenu.classList.contains('open')) {
                    toggleMenu();
                }
            }
        });
    });
});