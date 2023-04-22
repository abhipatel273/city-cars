const toogler = document.getElementById("menu");
const navmenu = document.querySelector(".menu_main");
const arrow = document.querySelector(".submenu_item");
const submenu = document.querySelector(".submenu");
const menu = document.querySelector(".submenu_item")
const closebtn = document.querySelector(".close_botton");
const sidebar = document.querySelector(".sidebar_overlay");
const overlay = document.querySelector(".overlay_opacity");
const header = document.querySelector(".headermain");

toogler.addEventListener('click', function () {
    navmenu.classList.toggle('plus')
    sidebar.classList.add("overlay_opacity");
});

arrow.addEventListener("click", function () {
    menu.classList.toggle("menu_icon_rotate")
    submenu.classList.toggle("shows")
})

closebtn.addEventListener("click", function () {
    navmenu.classList.remove("plus");
    sidebar.classList.remove("overlay_opacity");
});

// window.addEventListener("click", function (e) {
//     if (navmenu.classList.contains("plus")){
//         navmenu.classList.remove("plus");
//     }
//     e.stopPropagation();
// })

window.addEventListener('scroll', (e) => {
    const nav = document.querySelector('.headermain');
    if (window.pageYOffset > 0) {
        nav.classList.add("has-sticky");
    } else {
        nav.classList.remove("has-sticky");
    }
});

Fancybox.bind("[data-fancybox]");


$(document).ready(function () {

    $('.slider_box').slick({
        dots: false,
        // infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true
        ,
    });
    $('.slide_con').slick({
        dots: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    // infinite: true,
                }
            },
            {
                breakpoint:767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.blog_slider').slick({
        dots: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint:767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.car_img_row').slick({
        dots: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        responsive: [
            {
                breakpoint: 4000,
                settings: "unslick"
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centermode: true,
                    centerPadding: '20px',
                }
            }
        ]
    })
});