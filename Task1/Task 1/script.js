// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the navbar
var navbar = document.getElementById("navbar1");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}



//     // smooth scrolling
//     $('a[href*="#"]').on('click', function (e) {
//         e.preventDefault();
//         $('html, body').animate({
//             scrollTop: $($(this).attr('href')).offset().top,
//         }, 600, 'linear')
//     })
// });

// // menubar nav
// let menu = document.querySelector('#menu-bar');
// let navbar = document.querySelector('.navbar');
// let imgBtn = document.querySelectorAll('.img-btn');

// menu.onclick = () => {
//     menu.classList.toggle('fa-times');
//     navbar.classList.toggle('active');
// }

// window.addEventListener('scroll', function () {
//     const header = document.querySelector('header');
//     header.classList.toggle("sticky", window.scrollY > 0);
// });

// // change home background
// imgBtn.forEach(btn => {
//     btn.addEventListener('click', () => {
//         document.querySelector('.controls .active').classList.remove('active');
//         btn.classList.add('active');
//         let src = btn.getAttribute('data-src');
//         document.querySelector('#home').style.backgroundImage = 'url("' + src + '")';
//     });
// });

// // carousel life in composey
// var lifeimg = document.querySelectorAll('.lifeimg')
// var len = lifeimg.length;

// for (var i = 0; i < len; i++) {
//     lifeimg[i].addEventListener('click', function () {
//         document.getElementById('curimg').src = this.src
//     })
// }

// const slideLeft = document.getElementById('prev');
// const slideRight = document.getElementById('next');

// slideLeft.addEventListener('click', function () {
//     document.getElementById('lifeimg-gallery').scrollLeft -= 150
// })

// slideRight.addEventListener('click', function () {
//     document.getElementById('lifeimg-gallery').scrollLeft += 150
// })

// // map 
// function initMap() {
//     const coord = { lat: 28.7041, lng: 77.1025 };

//     const map = new google.maps.Map(document.getElementById("map"), {
//         zoom: 14,
//         center: coord,
//         mapId: "efffb52a8e985f64",
//     });
//     const marker = new google.maps.Marker({
//         position: coord,
//         map: map,
//     });
// }


// video slider


var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// carousel life in composey
var lifeimg = document.querySelectorAll('.lifeimg')
var len = lifeimg.length;

for (var i = 0; i < len; i++) {
    lifeimg[i].addEventListener('click', function () {
        document.getElementById('curimg').src = this.src
    })
}

const slideLeft = document.getElementById('prev');
const slideRight = document.getElementById('next');

slideLeft.addEventListener('click', function () {
    document.getElementById('lifeimg-gallery').scrollLeft -= 150
})

slideRight.addEventListener('click', function () {
    document.getElementById('lifeimg-gallery').scrollLeft += 150
})




// clients/brands slider
// var swiper = new Swiper('.brand-slider', {
//     spaceBetween: 20,
//     loop: true,
//     autoplay: {
//         delay: 1500,
//         disableOnInteraction: false,
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     breakpoints: {
//         450: {
//             slidesPerView: 2,
//         },
//         768: {
//             slidesPerView: 3,
//         },
//         1200: {
//             slidesPerView: 5,
//         },
//     }
// });