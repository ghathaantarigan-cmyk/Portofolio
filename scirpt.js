const menuButton = document.getElementById('menu-button');
const navbarMenu = document.getElementById('navbar-menu');

// Membuka dan menutup navbar menu saat tombol hamburger di-klik
menuButton.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
    menuButton.classList.toggle('active');
});

// Menutup navbar otomatis ketika salah satu menu link di dalamnya di-klik
const navLinks = document.querySelectorAll('#navbar-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbarMenu.classList.remove('active');
        menuButton.classList.remove('active');
    });
});
