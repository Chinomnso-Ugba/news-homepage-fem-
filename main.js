const menuToggle = document.getElementById('menuToggle');
const closeMenu = document.getElementById('closeMenu');
const mainNav = document.getElementById('mainNav');
const navOverlay = document.getElementById('navOverlay');

// simple function to open mobile menu
function openSideMenu() {
    mainNav.classList.add('active');
    navOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Stop background scrolling
}

// simple function to close mobile menu
function closeSideMenu() {
    mainNav.classList.remove('active');
    navOverlay.classList.remove('active');
    document.body.style.overflow = 'auto'; // allow scrolling again
}

menuToggle.addEventListener('click', openSideMenu);
closeMenu.addEventListener('click', closeSideMenu);
navOverlay.addEventListener('click', closeSideMenu);