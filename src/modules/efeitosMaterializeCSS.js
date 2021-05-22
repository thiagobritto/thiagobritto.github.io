
document.addEventListener('DOMContentLoaded', () => {
    const parallax = document.querySelectorAll('.parallax');
    const instancesParallax = M.Parallax.init(parallax, {});

    const sidenav = document.querySelectorAll('.sidenav');
    const instancesSidenav = M.Sidenav.init(sidenav, {});
});
