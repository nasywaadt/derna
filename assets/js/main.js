// Header scroll
let header = document.querySelector('header')
let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')


window.addEventListener('scroll', () => {
  header.classList.toggle('shadow', window.scrollY > 0);
});

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
}


// Swiper
var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

  // Scroll Reveal
const sr = ScrollReveal ({
  origin: 'top',
  distance: '40px',
  duration: 2000,
  reset: true
});

sr.reveal('.subtitle, .title-info, .stats, .description, .img1, .img2, .about-img, .about-text, .services, .box, .s-box, .event, .connect-text, .button, .contact-box', { interval: 200 });

var eventSlider = new Swiper('.event-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

const boxes = document.querySelectorAll('.s-box');
boxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
        box.style.transform = 'scale(1.05)';
        box.style.transition = 'transform 0.3s ease-in-out';
    });
    box.addEventListener('mouseleave', () => {
        box.style.transform = 'scale(1)';
    });
});

// Dark Mode
let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
  if(darkmode.classList.contains('bx-moon')){
    darkmode.classList.replace('bx-moon', 'bx-sun');
    document.body.classList.add('active');
  }else{
    darkmode.classList.replace('bx-sun', 'bx-moon');
    document.body.classList.remove('active');
  }
}
