// Navbar
let header = document.querySelector('header')
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

if (menu && navbar) {
    menu.onclick = () => {
        navbar.classList.toggle('active');
    };
    window.onscroll = () => {
        navbar.classList.remove('active');
    };
}
window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});


// Dark Mode
let darkmode = document.querySelector('#darkmode');
if (darkmode) {
    darkmode.onclick = () => {
        if(darkmode.classList.contains('bx-moon')){
            darkmode.classList.replace('bx-moon', 'bx-sun');
            document.body.classList.add('active');
        } else {
            darkmode.classList.replace('bx-sun', 'bx-moon');
            document.body.classList.remove('active');
        }
    };
}

// Animasi Hover Box
const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
        box.style.transform = 'scale(1.05)';
        box.style.transition = 'transform 0.3s ease-in-out';
    });
    box.addEventListener('mouseleave', () => {
        box.style.transform = 'scale(1)';
    });
});

// Modal untuk Komunitas
let modal = document.querySelector('.modal');
let modalImg = document.querySelector('.modal-img');
let modalName = document.querySelector('.modal-name');
let modalLoc = document.querySelector('.modal-loc');
let modalRate = document.querySelector('.modal-rate');
let modalProfile = document.querySelector('.modal-profile'); 
let modalBtn = document.querySelector('.modal-btn');
let closeModal = document.querySelector('.close-modal');

if (modal && modalImg && modalName && modalLoc && modalRate && modalProfile && modalBtn) {
    document.querySelectorAll('.box').forEach(box => {
        let profileElem = box.querySelector('.profile');

        if (profileElem) {
            profileElem.style.display = "none";
        }

        box.addEventListener('click', () => {
            let imgSrc = box.querySelector('img').src;
            let name = box.querySelector('h2').innerText;
            let loc = box.querySelector('h3').innerText;
            let rate = box.querySelector('span').innerText;
            let profileText = profileElem ? profileElem.innerText : "Deskripsi komunitas belum tersedia.";
            let link = box.getAttribute('data-link');

            modalImg.src = imgSrc;
            modalName.innerText = name;
            modalLoc.innerText = loc;
            modalRate.innerText = rate;
            modalProfile.innerText = profileText;
            modalProfile.style.display = "block";
            
            modalBtn.setAttribute('href', link);
            modalBtn.setAttribute('target', '_blank');

            modal.classList.add('active');
        });
    });

    if (closeModal) {
        closeModal.addEventListener('click', () => {
            modal.classList.remove('active');
            modalProfile.style.display = "none";
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            modalProfile.style.display = "none";
        }
    });
}

// Scroll Reveal
if (typeof ScrollReveal !== 'undefined') {
    const sr = ScrollReveal({
        origin: 'top',
        distance: '40px',
        duration: 1000,
        reset: true
    });

    sr.reveal('.home-text, .home-img, .about-img, .about-text, .box:not(:nth-last-child(-n+3)), .s-box, .connect-text, .btn, .contact-box', {
        interval: 200
    });

    sr.reveal('.community-container', {
        origin: 'left',
        distance: '50px',
        delay: 100,
    });
}

// ** Perbaikan Responsif **
document.addEventListener("DOMContentLoaded", function () {
    const communityContainer = document.querySelector(".community-container");
    const boxes = document.querySelectorAll(".community-container .box");

    function fixBoxes() {
        boxes.forEach((box, index) => {
            box.style.display = "flex";
            box.style.opacity = "1";
            box.style.visibility = "visible";
            box.style.minWidth = "150px";
            box.style.flexShrink = "0";
        });

        if (window.innerWidth <= 768) {
            communityContainer.style.flexWrap = "wrap";
            communityContainer.style.overflowX = "hidden";
        } else {
            communityContainer.style.flexWrap = "nowrap";
            communityContainer.style.overflowX = "auto";
        }
    }

    fixBoxes();
    window.addEventListener("resize", fixBoxes);
});

// ** Carousel Prev-Next **
document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".community-container");
    const boxes = document.querySelectorAll(".community-container .box");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    let currentIndex = 0;
    let isResponsive = window.innerWidth <= 768;

    function updateView() {
        isResponsive = window.innerWidth <= 768;

        if (isResponsive) {
            boxes.forEach((box, index) => {
                box.style.display = index === currentIndex ? "flex" : "none";
            });
        } else {
            boxes.forEach((box) => {
                box.style.display = "flex";
            });
            container.scrollLeft = 0;
        }

        checkButtons();
    }

    function checkButtons() {
        prevBtn.style.display = currentIndex > 0 || !isResponsive ? "flex" : "none";
        nextBtn.style.display = currentIndex < boxes.length - 1 || !isResponsive ? "flex" : "none";

        prevBtn.style.position = "absolute";
        prevBtn.style.left = "10px";
        prevBtn.style.zIndex = "10";
        nextBtn.style.position = "absolute";
        nextBtn.style.right = "10px";
        nextBtn.style.zIndex = "10";
    }

    nextBtn.addEventListener("click", function () {
        if (isResponsive) {
            if (currentIndex < boxes.length - 1) {
                currentIndex++;
                updateView();
            }
        } else {
            let maxScroll = container.scrollWidth - container.clientWidth;
            container.scrollLeft = Math.min(container.scrollLeft + container.offsetWidth / 2, maxScroll);
        }
    });

    prevBtn.addEventListener("click", function () {
        if (isResponsive) {
            if (currentIndex > 0) {
                currentIndex--;
                updateView();
            }
        } else {
            container.scrollLeft = Math.max(container.scrollLeft - container.offsetWidth / 2, 0);
        }
    });

    window.addEventListener("resize", updateView);
    updateView();

    setTimeout(() => {
        container.scrollLeft = 0;
    }, 100);
});
