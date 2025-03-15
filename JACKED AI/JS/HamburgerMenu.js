const hamburger = document.querySelector('.hamburger-menu');
const mobileMenu = document.querySelector('.menu-mobile');

// Sprawdzanie stanu menu przy ładowaniu strony
window.addEventListener('load', () => {
    const menuState = localStorage.getItem('menuState');
    if (menuState === 'active') {
        hamburger.classList.add('active');
        mobileMenu.classList.add('active');
    }
});

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    // Zapisywanie stanu menu
    if (hamburger.classList.contains('active')) {
        localStorage.setItem('menuState', 'active');
    } else {
        localStorage.setItem('menuState', 'inactive');
    }
});

document.querySelectorAll('.menu-mobile a').forEach(link => {
    link.addEventListener('click', () => {
        // Nie zamykamy menu automatycznie po kliknięciu w link
        // hamburger.classList.remove('active');
        // mobileMenu.classList.remove('active');
    });
});