document.addEventListener("DOMContentLoaded", () => {
    let search = document.querySelector('.search-box');
    let cart = document.querySelector('.cart');
    let user = document.querySelector('.user');
    let searchIcon = document.querySelector('#search-icon');
    let cartIcon = document.querySelector('#cart-icon');
    let userIcon = document.querySelector('#user-icon');
    let header = document.querySelector('header');
    let navbar = document.querySelector('.navbar');
    let menuIcon = document.querySelector('#menu-icon');


    searchIcon.onclick = () => {
        search.classList.toggle('active');
        cart.classList.remove('active');
        user.classList.remove('active'); // Pastikan cart bisa dikenali
    };

    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
    });
    
    menuIcon.onclick = () => {
        navbar.classList.toggle('active');
        cart.classList.remove('active');
        user.classList.remove('active'); 
        search.classList.remove('active');// Pastikan cart bisa dikenali
    };

    cartIcon.onclick = () => {
        cart.classList.toggle('active');
        search.classList.remove('active');
        user.classList.remove('active'); // Pastikan search bisa dikenali
    };

    userIcon.onclick = () => {
        user.classList.toggle('active');
        search.classList.remove('active');
        cart.classList.remove('active'); // Pastikan search bisa dikenali
    };
});

document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".swiper-container", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 3,
        coverflowEffect: {
            rotate: 10,
            stretch: 0,
            depth: 150,
            modifier: 1,
            slideShadows: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        loop: true,
    });
});

// Animasi Hover Box
document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.card');

    boxes.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
            card.style.transition = 'transform 0.3s ease-in-out';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        loop: true,
    });
});


