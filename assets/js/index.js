window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled'); // tambahkan kelas saat di-scroll
    } else {
        navbar.classList.remove('scrolled'); // hilangkan jika di atas lagi
    }
});