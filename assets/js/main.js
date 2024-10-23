(function ($) {
    "use strict";

    // Prealoder
    $(window).on('load', function (event) {
        $('.js-preloader').delay(500).fadeOut(500);
    });

    // Open Search
    $('.searchbtn').on('click', function () {
        $('.search-area').addClass('open');
    });
    $('.close-searchbox').on('click', function () {
        $('.search-area').removeClass('open');
    });
    
    // Counter
    $(".odometer").appear(function (e) {
        var odo = $(".odometer");
        odo.each(function () {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });
    
    // Hero Slider
    var owl = $('.hero-slider-one');
    owl.owlCarousel({
        loop: true,
        items: 1,
        dots: false,
        nav: true,
        navText: ['<i class="flaticon-left-arrow-3"></i>', '<i class="flaticon-right-arrow-1"></i>'],
        thumbs: true,
        thumbImage: true,
        thumbContainerClass: 'owl-thumbs',
        thumbItemClass: 'owl-thumb-item'
    });
    $(".hero-slider-two").owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        loop: true,
        margin: 0,
        thumbs:false,
        navText: ['<i class="flaticon-left-arrow-3"></i>', '<i class="flaticon-right-arrow-1"></i>'],
        animateOut: 'fadeOut',
        smartSpeed: 1300,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        responsiveClass: true,
        autoHeight: true,
        responsive: {
            0: {
                items: 1,
                autoHeight: true
            },
            768: {
                items: 1,
            }
        }
    });
    var bigimage = $("#hero-slider-three");
    var thumbs = $("#hero-thumbs");
    var syncedSecondary = true;
    bigimage
        .owlCarousel({
            items: 1,
            slideSpeed: 3000,
            nav: true,
            autoplay: false,
            animateOut: 'fadeOut',
            dots: false,
            loop: false,
            thumbs: false,
            responsiveRefreshRate: 200,
            navText: ['<i class="flaticon-left-arrow-3"></i>', '<i class="flaticon-right-arrow-1"></i>']
        })
        .on("changed.owl.carousel", syncPosition);

    thumbs
        .on("initialized.owl.carousel", function () {
            thumbs
                .find(".owl-item")
                .eq(0)
                .addClass("current");
        })
        .owlCarousel({
            items: 3,
            dots: false,
            nav: false,
            margin: 20,
            loop: false,
            smartSpeed: 2000,
            slideSpeed: 2000,
            slideBy: 3,
            responsiveRefreshRate: 100,
            responsive: {
                0: {
                    margin: 10
                },
                768: {
                    margin: 10
                }
            }
        })
        .on("changed.owl.carousel", syncPosition2);
    function syncPosition(el) {
        //if loop is set to false, then you have to uncomment the next line
        //var current = el.item.index;
        //to disable loop, comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - el.item.count / 2 - 0.5);
        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }
        //to this
        thumbs
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = thumbs.find(".owl-item.active").length - 1;
        var start = thumbs
            .find(".owl-item.active")
            .first()
            .index();
        var end = thumbs
            .find(".owl-item.active")
            .last()
            .index();
        //to this
        if (current > end) {
            thumbs.data("owl.carousel").to(current, 100, true);
        }
        if (current < start) {
            thumbs.data("owl.carousel").to(current - onscreen, 100, true);
        }
    }
    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            bigimage.data("owl.carousel").to(number, 100, true);
        }
    }
    thumbs.on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).index();
        bigimage.data("owl.carousel").to(number, 300, true);
    });
    
    // Service Slider
    $(".service-slider-one").owlCarousel({
        nav: false,
        dots: true,
        loop: true,
        margin: 25,
        thumbs: false,
        animateOut: 'fadeOut',
        smartSpeed: 1300,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        responsiveClass: true,
        autoHeight: true,
        responsive: {
            0: {
                items: 1,
                autoHeight: true
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });
    $(".service-slider-two").owlCarousel({
        nav: true,
        dots: false,
        loop: true,
        margin: 25,
        thumbs: false,
        navText: ['<i class="flaticon-left-arrow-3"></i>', '<i class="flaticon-right-arrow-1"></i>'],
        animateOut: 'fadeOut',
        smartSpeed: 1300,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        responsiveClass: true,
        autoHeight: true,
        responsive: {
            0: {
                items: 1,
                autoHeight: true
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });
    $(".service-slider-three").owlCarousel({
        nav: true,
        dots: false,
        loop: true,
        margin: 25,
        thumbs: false,
        navText: ['<i class="flaticon-left-arrow-3"></i>', '<i class="flaticon-right-arrow-1"></i>'],
        animateOut: 'fadeOut',
        smartSpeed: 1300,
        thumbs: false,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        responsiveClass: true,
        autoHeight: true,
        responsive: {
            0: {
                items: 1,
                autoHeight: true
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1200: {
                items: 3
            },
            1400: {
                items: 4
            }
        }
    });
    
    // Team Slider
    $(".team-slider-one").owlCarousel({
        nav: false,
        dots: true,
        loop: true,
        thumbs: false,
        margin: 25,
        animateOut: 'fadeOut',
        smartSpeed: 1300,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        responsiveClass: true,
        autoHeight: true,
        responsive: {
            0: {
                items: 1,
                autoHeight: true
            },
            768: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });
    $(".team-slider-two").owlCarousel({
        nav: true,
        dots: false,
        loop: true,
        margin: 25,
        thumbs: false,
        navText: ['<i class="flaticon-left-arrow-3"></i>', '<i class="flaticon-right-arrow-1"></i>'],
        animateOut: 'fadeOut',
        smartSpeed: 1300,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        responsiveClass: true,
        autoHeight: true,
        responsive: {
            0: {
                items: 1,
                autoHeight: true
            },
            768: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });
    $(".team-slider-three").owlCarousel({
        nav: true,
        dots: false,
        loop: true,
        margin: 25,
        thumbs: false,
        navText: ['<i class="flaticon-left-arrow-3"></i>', '<i class="flaticon-right-arrow-1"></i>'],
        animateOut: 'fadeOut',
        smartSpeed: 1300,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        responsiveClass: true,
        autoHeight: true,
        responsive: {
            0: {
                items: 1,
                autoHeight: true
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });

    // Blog Slider
    $(".blog-slider-one").owlCarousel({
        nav: false,
        dots: true,
        loop: true,
        margin: 25,
        thumbs: false,
        animateOut: 'fadeOut',
        smartSpeed: 1300,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        responsiveClass: true,
        autoHeight: true,
        responsive: {
            0: {
                items: 1,
                autoHeight: true
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1200: {
                items: 2
            },
            1400: {
                items: 3
            }
        }
    });
    $(".blog-slider-two").owlCarousel({
        nav: true,
        dots: false,
        loop: true,
        margin: 25,
        navText: ['<i class="flaticon-left-arrow-3"></i>', '<i class="flaticon-right-arrow-1"></i>'],
        thumbs: false,
        animateOut: 'fadeOut',
        smartSpeed: 1300,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        responsiveClass: true,
        autoHeight: true,
        responsive: {
            0: {
                items: 1,
                autoHeight: true
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1200: {
                items: 2
            },
            1400: {
                items: 3
            }
        }
    });
    $(".popular-post-slider").owlCarousel({
        nav: false,
        dots: true,
        loop: true,
        items: 1,
        thumbs: false,
        margin: 25,
        animateOut: 'fadeOut',
        smartSpeed: 1300,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        responsiveClass: true,
        autoHeight: true,
    });
    
    // Case Slider
    $(".case-slider-one").owlCarousel({
        nav: false,
        dots: true,
        loop: true,
        margin: 25,
        thumbs: false,
        animateOut: 'fadeOut',
        smartSpeed: 1300,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        responsiveClass: true,
        autoHeight: true,
        responsive: {
            0: {
                items: 1,
                autoHeight: true
            },
            768: {
                items: 2,
            },
            992: {
                items: 2,
            },
            1200: {
                items: 3,
            }
        }
    });
    $(".case-slider-two").owlCarousel({
        nav: true,
        dots: false,
        loop: true,
        margin: 0,
        thumbs: false,
        smartSpeed: 1300,
        navText: ['<i class="flaticon-left-arrow-3"></i>', '<i class="flaticon-right-arrow-1"></i>'],
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        responsiveClass: true,
        autoHeight: true,
        responsive: {
            0: {
                items: 1,
                autoHeight: true
            },
            768: {
                items: 2,
            },
            992: {
                items: 2,
            },
            1200: {
                items: 3,
            }
        }
    });
    $(".case-slider-three").owlCarousel({
        nav: true,
        dots: false,
        loop: true,
        margin: 20,
        thumbs: false,
        smartSpeed: 1300,
        navText: ['<i class="flaticon-left-arrow-3"></i>', '<i class="flaticon-right-arrow-1"></i>'],
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        responsiveClass: true,
        autoHeight: true,
        responsive: {
            0: {
                items: 1,
                autoHeight: true

            },
            768: {
                items: 2,

            },
            992: {
                items: 2,

            },
            1200: {
                items: 3,

            },
            1400: {
                items: 4,

            }

        }
    });
    
    // Testimonial Slider
    var testimonial_slider = new Swiper('.testimonial-slider-one', {
        spaceBetween: 25,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: true,
        },
        speed: 1500,
        pagination: {
            el: ".testimonial-pagination",
            clickable: true
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                centeredSlides: false
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            }
        }

    });
    var thumbs_slider = new Swiper('.testimonial-thumbs', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        slidesPerView: 3,
        centeredSlides: true,
        loop: true,
        slideToClickedSlide: true,
    });
    testimonial_slider.controller.control = thumbs_slider;
    thumbs_slider.controller.control = testimonial_slider;
    $(".testimonial-slider-two").owlCarousel({
        nav: true,
        dots: false,
        loop: true,
        margin: 25,
        thumbs: false,
        navText: ['<i class="flaticon-left-arrow-3"></i>', '<i class="flaticon-right-arrow-1"></i>'],
        animateOut: 'fadeOut',
        smartSpeed: 1300,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        responsiveClass: true,
        autoHeight: true,
        responsive: {
            0: {
                items: 1,
                autoHeight: true
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 3,
            }
        }
    });
    $(".testimonial-slider-three").owlCarousel({
        nav: true,
        dots: false,
        loop: true,
        margin: 25,
        thumbs: false,
        navText: ['<i class="flaticon-left-arrow-3"></i>', '<i class="flaticon-right-arrow-1"></i>'],
        animateOut: 'fadeOut',
        smartSpeed: 1300,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        responsiveClass: true,
        autoHeight: true,
        responsive: {
            0: {
                items: 1,
                autoHeight: true
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 3,
            },
            1400: {
                items: 4,
            }
        }
    });

    // Single  Product Slider
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 20,
        slidesPerView: 3,
        freeMode: true,
        loop:true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    
    });
    var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 20,
        loop:true,
        centeredSlides:true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs
        }
    });
    
    // Mobile Topbar
    $('.mobile-top-bar').on('click', function () {
        $('.header-top-right').addClass('open')
    });
    $('.close-header-top').on('click', function () {
        $('.header-top-right').removeClass('open')
    });
    
    // Sticky Header
    var wind = $(window);
    var sticky = $('.header-wrap');
    wind.on('scroll', function () {
        var scroll = wind.scrollTop();
        if (scroll < 100) {
            sticky.removeClass('sticky');
        } else {
            sticky.addClass('sticky');
        }
    });
    
    // Responsive mmenu
    $('.mobile-menu a').on('click', function () {
        $('.main-menu-wrap').addClass('open');
        $('.mobile-bar-wrap.style2 .mobile-menu').addClass('open');
    });
    $('.mobile_menu a').on('click', function () {
        $(this).parent().toggleClass('open');
        $('.main-menu-wrap').toggleClass('open');
    });
    $('.menu-close').on('click', function () {
        $('.main-menu-wrap').removeClass('open')
    });
    $('.mobile-top-bar').on('click', function () {
        $('.header-top').addClass('open')
    });
    $('.close-header-top button').on('click', function () {
        $('.header-top').removeClass('open')
    });
    var $offcanvasNav = $('.main-menu'), $offcanvasNavSubMenu = $offcanvasNav.find('.sub-menu');
    $offcanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i class="las la-angle-down"></i></span>');
    $offcanvasNavSubMenu.slideUp();
    $offcanvasNav.on('click', 'li a, li .menu-expand', function (e) {
        var $this = $(this);
        if (($this.attr('href') === '#' || $this.hasClass('menu-expand'))) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length) {
                $this.siblings('ul').slideUp('slow');
            } else {
                $this.closest('li').siblings('li').find('ul:visible').slideUp('slow');
                $this.siblings('ul').slideDown('slow');
            }
        }
        if ($this.is('a') || $this.is('span') || $this.attr('class').match(/\b(menu-expand)\b/)) {
            $this.parent().toggleClass('menu-open');
        } else if ($this.is('li') && $this.attr('class').match(/\b('has-children')\b/)) {
            $this.toggleClass('menu-open');
        }
    });
    
    // Product Quantity
    var minVal = 1,
    maxVal = 20;
    $(".increaseQty").on('click', function () {
        var $parentElm = $(this).parents(".qtySelector");
        $(this).addClass("clicked");
        setTimeout(function () {
            $(".clicked").removeClass("clicked");
        }, 100);
        var value = $parentElm.find(".qtyValue").val();
        if (value < maxVal) {
            value++;
        }
        $parentElm.find(".qtyValue").val(value);
    });
    // Decrease product quantity on cart page
    $(".decreaseQty").on('click', function () {
        var $parentElm = $(this).parents(".qtySelector");
        $(this).addClass("clicked");
        setTimeout(function () {
            $(".clicked").removeClass("clicked");
        }, 100);
        var value = $parentElm.find(".qtyValue").val();
        if (value > 1) {
            value--;
        }
        $parentElm.find(".qtyValue").val(value);
    });
    
    // Scroll animation
    AOS.init();

    // Scroll to top
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(300)
            $('.back-to-top').addClass('open')
        } else {
            $('.back-to-top').fadeOut(300)
            $('.back-to-top').removeClass('open')
        }
    });

    // Animate the scroll to top
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0,
        }, 0);
    });

    // Language Dropdown
    $(".language-option").each(function () {
        var each = $(this)
        each.find(".lang-name").html(each.find(".language-dropdown-menu a:nth-child(1)").text());
        var allOptions = $(".language-dropdown-menu").children('a');
        each.find(".language-dropdown-menu").on("click", "a", function () {
            allOptions.removeClass('selected');
            $(this).addClass('selected');
            $(this).closest(".language-option").find(".lang-name").html($(this).text());
        });
    })
    $('.user-option').on('click', function () {
        $('.user-menuitem').toggleClass('open');
    });

})(jQuery);

//Js Code For Light & Dark Version
// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}

// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
        document.getElementById('slider').checked = false;
    } else {
        setTheme('theme-light');
        document.getElementById('slider').checked = true;
    }
})();