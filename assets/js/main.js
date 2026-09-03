(function($) {
    "use strict";
  
    const $documentOn = $(document);
    const $windowOn = $(window);
  
    $documentOn.ready( function() {
        
        

        /* =========================================================
        MOBILE MENU OPEN
        ========================================================= */
        $(".mobile-topbar .bars").on("click", function () {
            $(".mobile-menu-overlay, .mobile-menu-main").addClass("active");
            $("body").addClass("no-scroll");
            return false;
        });

        /* =========================================================
        MOBILE MENU CLOSE
        ========================================================= */
        $(".close-mobile-menu, .mobile-menu-overlay").on("click", function () {
            $(".mobile-menu-overlay, .mobile-menu-main").removeClass("active");
            $("body").removeClass("no-scroll");

            // reset all menus
            $('.sub-mobile-menu ul, .sub-child-menu ul').slideUp(200);

            // reset icons
            $(".sub-mobile-menu i, .sub-child-menu i")
                .removeClass("fa-chevron-up")
                .addClass("fa-chevron-down");
        });

        /* =========================================================
        MOBILE SUB MENU INITIAL STATE
        ========================================================= */
        $('.sub-mobile-menu > ul, .sub-child-menu > ul').hide();

        /* =========================================================
        LEVEL 1 MENU
        ========================================================= */
        $(document).on("click", ".sub-mobile-menu > a", function (e) {

            let $parent = $(this).parent();
            let $submenu = $parent.children("ul");

            if ($submenu.length === 0) return;

            e.preventDefault();
            e.stopPropagation();

            // close other level-1 menus
            $('.sub-mobile-menu')
                .not($parent)
                .children("ul")
                .slideUp(250);

            // also close level-2 menus
            $('.sub-child-menu > ul').slideUp(250);

            $submenu.slideToggle(250);

            // reset icons
            $(".sub-mobile-menu > a i, .sub-child-menu > a i")
                .removeClass("fa-chevron-up")
                .addClass("fa-chevron-down");

            $(this).find("i").toggleClass("fa-chevron-up fa-chevron-down");
        });

        /* =========================================================
        LEVEL 2 MENU
        ========================================================= */
        $(document).on("click", ".sub-child-menu > a", function (e) {

            let $parent = $(this).parent();
            let $submenu = $parent.children("ul");

            if ($submenu.length === 0) return;

            e.preventDefault();
            e.stopPropagation();

            // close sibling level-2 menus
            $parent.siblings(".sub-child-menu")
                .children("ul")
                .slideUp(250);

            $submenu.slideToggle(250);

            // reset sibling icons
            $parent.siblings(".sub-child-menu")
                .find("i")
                .removeClass("fa-chevron-up")
                .addClass("fa-chevron-down");

            $(this).find("i").toggleClass("fa-chevron-up fa-chevron-down");
        });

        /* =========================================================
        OFFCANVAS MENU
        ========================================================= */
        $(".offcanvas-btn").on('click', function () {
            $(".offcanvas-menu, .offcanvas-overlay").addClass("active");
            $("body").addClass("no-scroll"); // ✅ added
        });

        $(".offcanvas-overlay, .offcasvas-close").on('click', function () {
            $(".offcanvas-menu, .offcanvas-overlay").removeClass("active");
            $("body").removeClass("no-scroll"); // ✅ added
        });

        /* =========================================================
        STICKY HEADER (FINAL FIX)
        ========================================================= */
        $windowOn.on('scroll', function () {

            var scroll = $windowOn.scrollTop();

            // ✅ Mobile OR Offcanvas open → sticky completely disabled
            if (
                $(".mobile-menu-overlay").hasClass("active") ||
                $(".offcanvas-overlay").hasClass("active")
            ) {
                return;
            }

            if (scroll < 120) {
                $("#sticky-header").removeClass("sticky-menu");
                $("#header-fixed-height").removeClass("active-height");
            } else {
                $("#sticky-header").addClass("sticky-menu");
                $("#header-fixed-height").addClass("active-height");
            }
        });

    /*----------------------------------------------
        # Background Color
        ----------------------------------------------*/
        $("[data-bg-color]").each(function () {
            $(this).css("background-color", $(this).attr("data-bg-color"));
        });

        /*----------------------------------------------
        # Background Image
        ----------------------------------------------*/
        $("[data-background]").each(function () {
            $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
        });

        /*----------------------------------------------
        # Width
        ----------------------------------------------*/
        $("[data-width]").each(function () {
            $(this).css("width", $(this).attr("data-width"));
        });

        /*----------------------------------------------
        # Text Color
        ----------------------------------------------*/
        $("[data-text-color]").each(function () {
            $(this).css("color", $(this).attr("data-text-color"));
        });
        

    /* ================================
        Sidebar Toggle & Sticky Item Logic
        ================================ */

        // Open offcanvas
        $(".sidebar__toggle").on("click", function () {
        $(".offcanvas__info").addClass("info-open");
        $(".offcanvas__overlay").addClass("overlay-open");

        // Hide sticky item
        $(".sidebar-sticky-item").fadeOut().removeClass("active");
        });

        // Close offcanvas
        $(".offcanvas__close, .offcanvas__overlay").on("click", function () {
        $(".offcanvas__info").removeClass("info-open");
        $(".offcanvas__overlay").removeClass("overlay-open");

        // Show sticky item
        $(".sidebar-sticky-item").fadeIn().addClass("active");
        });

        /* ================================
        Body Overlay Js Start
        ================================ */

        $(".body-overlay").on("click", function () {
        $(".offcanvas__area").removeClass("offcanvas-opened");
        $(".df-search-area").removeClass("opened");
        $(".body-overlay").removeClass("opened");

        // Show sticky item when overlay clicked
        $(".sidebar-sticky-item").fadeIn().addClass("active");
        });

        /* ================================
        Offcanvas Link Click (Optional)
        ================================ */

        $(".offcanvas a").on("click", function () {
        $(".sidebar-sticky-item").fadeIn().addClass("active");
    });

    
      /* ================================
       Sticky Header Js Start
    ================================ */

       $windowOn.on("scroll", function () {
        if ($(this).scrollTop() > 250) {
          $("#header-sticky").addClass("sticky");
        } else {
          $("#header-sticky").removeClass("sticky");
        }
      });     
      
      
        $(".sidebar__togglesss").on("click", function (e) {
            e.preventDefault();

            $(".offcanvas-menuss").addClass("active");
            $(".offcanvas-overlayss").addClass("active");
            $("body").css("overflow", "hidden");
        });

        $(".offcasvas-close, .offcanvas-overlayss").on("click", function () {
            $(".offcanvas-menuss").removeClass("active");
            $(".offcanvas-overlayss").removeClass("active");
            $("body").css("overflow", "");
        });

        $(document).on("keydown", function (e) {
            if (e.key === "Escape") {
                $(".offcanvas-menuss").removeClass("active");
                $(".offcanvas-overlayss").removeClass("active");
                $("body").css("overflow", "");
            }
        });




      
       /* ================================
       Video & Image Popup Js Start
    ================================ */

      $(".img-popup").magnificPopup({
        type: "image",
        gallery: {
          enabled: true,
        },
      });

      $(".video-popup").magnificPopup({
        type: "iframe",
        callbacks: {},
      });
  
      /* ================================
       Counterup Js Start
    ================================ */

      $(".count").counterUp({
        delay: 15,
        time: 4000,
      });
  
      /* ================================
       Wow Animation Js Start
    ================================ */

      new WOW().init();
  
      /* ================================
       Nice Select Js Start
    ================================ */

    if ($('.single-select').length) {
        $('.single-select').niceSelect();
    }

      /* ================================
       Parallaxie Js Start
    ================================ */

      if ($('.parallaxie').length && $(window).width() > 991) {
          if ($(window).width() > 768) {
              $('.parallaxie').parallaxie({
                  speed: 0.55,
                  offset: 0,
              });
          }
      }

      /* ================================
      Hover Active Js Start
    ================================ */

    $(".service-box-items-5, .project-box-items-5, .team-thumb-5").hover(
		// Function to run when the mouse enters the element
		function () {
			// Remove the "active" class from all elements
			$(".service-box-items-5, .project-box-items-5, .team-thumb-5").removeClass("active");
			// Add the "active" class to the currently hovered element
			$(this).addClass("active");
		}
	);

     // portfolio-slide-4
    if (document.querySelectorAll(".gt-vertical-portfolio").length > 0) {
    const interleaveOffset = 0.75;
    var gtVerticalPortfolioSlider = new Swiper('.gt-vertical-portfolio-slider', {
        loop: true,
        direction: "vertical",
        autoplay: false,
        speed: 2000,
        watchSlidesProgress: true,
        mousewheelControl: true,
        mousewheel: true,
        navigation: {
        prevEl: ".array-prev",
        nextEl: ".array-next",
        },
        pagination: {
        el: ".gt-vertical-portfolio-pagination",
        clickable: true,
        },
        on: {
        progress: function () {
          let swiper = this;

          for (let i = 0; i < swiper.slides.length; i++) {
            let slideProgress = swiper.slides[i].progress;
            let innerOffset = swiper.height * interleaveOffset;
            let innerTranslate = slideProgress * innerOffset;

            TweenMax.set(swiper.slides[i].querySelector(".slide-inner"), {
              y: innerTranslate,
            });
          }
        },
        setTransition: function (slider, speed) {
            let swiper = this;
            for (let i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = speed + "ms";
            swiper.slides[i].querySelector(".slide-inner").style.transition =
                speed + "ms";
            }
        }
        }
    });
    }

    if (document.querySelectorAll(".gt-horizontal-portfolio").length > 0) {
        const interleaveOffset = 0.75;

        var gtHorizontalPortfolioSlider = new Swiper(".gt-horizontal-portfolio-slider", {
            loop: true,
            direction: "horizontal", 
            autoplay: false,
            speed: 2000,
            watchSlidesProgress: true,
            mousewheel: true,
            navigation: {
            prevEl: ".array-prev",
            nextEl: ".array-next",
            },
            on: {
            progress: function () {
                let swiper = this;

                for (let i = 0; i < swiper.slides.length; i++) {
                let slideProgress = swiper.slides[i].progress;
                let innerOffset = swiper.width * interleaveOffset;
                let innerTranslate = slideProgress * innerOffset;

                gsap.set(swiper.slides[i].querySelector(".slide-inner"), {
                    x: innerTranslate, // 👈 horizontal translate
                });
                }
            },
            setTransition: function (slider, speed) {
                let swiper = this;
                for (let i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].style.transition = speed + "ms";
                swiper.slides[i].querySelector(".slide-inner").style.transition =
                    speed + "ms";
                }
            },
            },
        });
    }
    
      // parallax
        if (document.querySelectorAll(".gt-portfolio-parallax-box-slider").length > 0) {
            const selectAll = (e) => document.querySelectorAll(e);
            gsap.registerPlugin(ScrollTrigger);
            const tracks = selectAll(".gt-portfolio-parallax-box-slider");

            tracks.forEach((track) => {
                let trackWrapper = track.querySelectorAll(".gt-parallax-slider");
                let allImgs = track.querySelectorAll(".image");

                let trackWrapperWidth = () => {
                    let width = 0;
                    trackWrapper.forEach((el) => (width += el.offsetWidth));
                    return width;
                };

                gsap.defaults({ ease: "none" });
                const gap = window.innerWidth * 0.05;

                let scrollTween = gsap.to(trackWrapper, {
                    x: () => -trackWrapperWidth() + window.innerWidth + gap,
                    scrollTrigger: {
                        trigger: track,
                        pin: true,
                        scrub: 3,
                        start: "center center",
                        end: () => "+=" + (track.scrollWidth - window.innerWidth),
                        onRefresh: (self) => self.getTween().resetTo("totalProgress", 0),
                        invalidateOnRefresh: true
                    }
                });

                allImgs.forEach((img) => {
                    gsap.fromTo(img, { transform: "translateX(-10vw)" }, {
                        transform: "translateX(5vw)",
                        scrollTrigger: {
                            trigger: img.parentNode,
                            containerAnimation: scrollTween,
                            start: "left right",
                            end: "right left",
                            scrub: true,
                        },
                    });
                });
            });
        }

        // === IMAGE SLIDER ===
        const coverflow_slider = new Swiper('.coverflow-slider-active', {
            effect: 'coverflow',
            centeredSlides: true,
            slidesPerView: 1,
            loop: true,
            speed: 800,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
            },
            spaceBetween: 0,
            breakpoints: {
                320: {
                    slidesPerView: 2,
                },
                560: {
                    slidesPerView: 3,
                },
                990: {
                    slidesPerView: 4,
                }
            },
            pagination: {
                el: ".dot-number",
                clickable: true,
                renderBullet: function(index, className) {
                    const dotContent = document.querySelectorAll(".dot-number .dot-num");
                    return `
                        <span class="${className}">
                            ${dotContent[index]?.outerHTML || ""}
                        </span>
                    `;
                },
            },
            navigation: {
                nextEl: ".array-next",
                prevEl: ".array-prev",
            },
        });

        // === TEXT SLIDER ===
        const text_slider = new Swiper('.coverflow-slider-text-active', {
            direction: 'vertical',
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            speed: 800,
            allowTouchMove: false,
            navigation: {
            nextEl: ".array-next", // 🔥 next button
            prevEl: ".array-prev", // 🔥 prev button
        },
        });

        // === SYNC BOTH ===
        coverflow_slider.on('slideChangeTransitionStart', function () {
            text_slider.slideToLoop(coverflow_slider.realIndex);
        });

        text_slider.on('slideChangeTransitionStart', function () {
            coverflow_slider.slideToLoop(text_slider.realIndex);
        });

    const $wrapper = $(".hero-image-itemsss");

    if ($wrapper.length) {

        const $cards = $wrapper.find(".hero-image");

        $wrapper.each(function () {

            const wrapper = this;

            wrapper.addEventListener("mousemove", function (e) {

                const rect = wrapper.getBoundingClientRect();

                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;

                wrapper.style.transform =
                    `perspective(1200px)
                     rotateY(${x * 10}deg)
                     rotateX(${y * -10}deg)`;

                $cards.each(function (index) {

                    const depth = (index + 1) * 12;

                    const moveX = x * depth;
                    const moveY = y * depth;

                    const rotate = (index - 2) * 2;

                    this.style.transform =
                        `translate(${moveX}px,${moveY}px)
                         rotate(${rotate}deg)
                         scale(1.02)`;

                });

            });

            wrapper.addEventListener("mouseleave", function () {

                wrapper.style.transform =
                    "perspective(12000px) rotateX(0deg) rotateY(0deg)";

                $cards.each(function () {

                    this.style.transform = "";

                });

            });

        });

    }

    /* ================================
      Custom Accordion Js Start
    ================================ */

    if ($('.accordion-box').length) {
        $(".accordion-box").on('click', '.acc-btn', function () {
            var outerBox = $(this).closest('.accordion-box');
            var target = $(this).closest('.accordion');
            var accBtn = $(this);
            var accContent = accBtn.next('.acc-content');

            if (target.hasClass('active-block')) {
                // Already open, so close it
                accBtn.removeClass('active');
                target.removeClass('active-block');
                accContent.slideUp(300);
            } else {
                // Close all others
                outerBox.find('.accordion').removeClass('active-block');
                outerBox.find('.acc-btn').removeClass('active');
                outerBox.find('.acc-content').slideUp(300);

                // Open clicked one
                accBtn.addClass('active');
                target.addClass('active-block');
                accContent.slideDown(300);
            }
        });
    }

     /* ================================
        News Hover Js Start
    ================================ */
   
    const newsMainItemsTwo = document.querySelectorAll(".news-main-items-two");

    newsMainItemsTwo.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            // Remove active from all
            newsMainItemsTwo.forEach((el) => el.classList.remove("active"));
            // Add active to current hovered item
            item.classList.add("active");
        });
    });


     /* ================================
      Testimonial Slider Js Start
    ================================ */

   if ($('.testimonial-slider-5').length > 0) {
    const testimonialSlider5 = new Swiper(".testimonial-slider-5", {
        spaceBetween: 10,
        speed: 1300,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".array-next",
            prevEl: ".array-prev",
        },
        breakpoints: {
            1399: {
                slidesPerView: 4,
            },
            1199: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 2,
            },
            575: {
                slidesPerView: 1,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });
   }

   if ($('.testimonial-slider-10').length > 0) {
    const testimonialSlider10 = new Swiper(".testimonial-slider-10", {
        spaceBetween: 20,
        speed: 1300,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".array-next",
            prevEl: ".array-prev",
        },
        breakpoints: {
            1199: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 1.6,
            },
            767: {
                slidesPerView: 1.6,
            },
            575: {
                slidesPerView: 1,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });
   }

   if ($('.testi-slider-4').length > 0) {
    const testiSlider4 = new Swiper(".testi-slider-4", {
        spaceBetween: 20,
        speed: 1300,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".dot",
            clickable: true,
        },
    });
   }

    if ($('.testimonial-slider-content').length) {
		var slider = new Swiper ('.testimonial-slider-content', {
			slidesPerView: 1,
			spaceBetween: 30,
			navigation: true,
			centeredSlides: true,
            speed: 1300,
			loop: true,
			loopedSlides: 6,
             pagination: {
            el: ".dot",
            clickable: true,
        },
			navigation: {
                nextEl: ".array-next",
                prevEl: ".array-prev",
            },
            pagination: {
                el: ".dot2",
                clickable: true,
            },
		});
		var thumbs = new Swiper ('.testimonial-thumbs', {
			slidesPerView: 5,
			spaceBetween: 0,
			centeredSlides: true,
			loop: true,
            speed: 1300,
			slideToClickedSlide: true,
             pagination: {
            el: ".dot",
            clickable: true,
        },
		});
		slider.controller.control = thumbs;
		thumbs.controller.control = slider;
	}

    if ($('.service-slider-8').length > 0) {
    const serviceSlider8 = new Swiper(".service-slider-8", {
        spaceBetween: 20,
        speed: 1300,
        loop: true,

        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },

        navigation: {
            nextEl: ".array-next",
            prevEl: ".array-prev",
        },

        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
            formatFractionCurrent: function (number) {
                return number < 10 ? "0" + number : number;
            },
            formatFractionTotal: function (number) {
                return number < 10 ? "0" + number : number;
            },
            renderFraction: function (currentClass, totalClass) {
                return (
                    '<span class="' + currentClass + '"></span>' +
                    ' / ' +
                    '<span class="' + totalClass + '"></span>'
                );
            },
        },

        breakpoints: {
            1399: {
                slidesPerView: 4,
            },
            1199: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 2,
            },
            575: {
                slidesPerView: 1,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });
}

    if ($('.hero-brand-slider').length > 0) {
    const heroBrandSlider= new Swiper(".hero-brand-slider", {
        spaceBetween: 10,
        speed: 1300,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".array-next",
            prevEl: ".array-prev",
        },
        breakpoints: {
            1699: {
                slidesPerView: 5,
            },
            1199: {
                slidesPerView: 4,
            },
            991: {
                slidesPerView: 3,
            },
            767: {
                slidesPerView: 2.5,
            },
            575: {
                slidesPerView: 2,
            },
            400: {
                slidesPerView: 1.5,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });
    }

    /* ================================
      Global Service Box Js Start
    ================================ */

    if (document.querySelectorAll(".award-list-9").length) {
    const awardList9 = document.querySelectorAll(".award-list-9");

    awardList9.forEach((box) => {
        const hoverImg = box.querySelector(".hover-image");
        if (!hoverImg) return;

        box.addEventListener("mousemove", (event) => {
        const rect = box.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        hoverImg.style.opacity = "1";
        hoverImg.style.visibility = "visible";
        hoverImg.style.transform = `translate(${x}px, ${y}px) rotate(0deg)`;
        });

        box.addEventListener("mouseleave", () => {
        hoverImg.style.opacity = "0";
        hoverImg.style.visibility = "hidden";
        hoverImg.style.transform = `translateY(-50%) rotate(10deg)`;
        });
    });
    }

     if (document.querySelectorAll(".award-list-items-10").length) {
    const awardListItems10 = document.querySelectorAll(".award-list-items-10");

    awardListItems10.forEach((box) => {
        const hoverImg = box.querySelector(".hover-image");
        if (!hoverImg) return;

        box.addEventListener("mousemove", (event) => {
        const rect = box.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        hoverImg.style.opacity = "1";
        hoverImg.style.visibility = "visible";
        hoverImg.style.transform = `translate(${x}px, ${y}px) rotate(0deg)`;
        });

        box.addEventListener("mouseleave", () => {
        hoverImg.style.opacity = "0";
        hoverImg.style.visibility = "hidden";
        hoverImg.style.transform = `translateY(-50%) rotate(10deg)`;
        });
    });
    }


    /* ================================
        Mouse Cursor Animation Js Start
    ================================ */

    if ($(".mouseCursor").length > 0) {
        function itCursor() {
            var myCursor = jQuery(".mouseCursor");
            if (myCursor.length) {
                if ($("body")) {
                    const e = document.querySelector(".cursor-inner"),
                        t = document.querySelector(".cursor-outer");
                    let n, i = 0, o = !1;
                    window.onmousemove = function(s) {
                        if (!o) {
                            t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)";
                        }
                        e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)";
                        n = s.clientY;
                        i = s.clientX;
                    };
                    $("body").on("mouseenter", "button, a, .cursor-pointer", function() {
                        e.classList.add("cursor-hover");
                        t.classList.add("cursor-hover");
                    });
                    $("body").on("mouseleave", "button, a, .cursor-pointer", function() {
                        if (!($(this).is("a", "button") && $(this).closest(".cursor-pointer").length)) {
                            e.classList.remove("cursor-hover");
                            t.classList.remove("cursor-hover");
                        }
                    });
                    e.style.visibility = "visible";
                    t.style.visibility = "visible";
                }
            }
        }
        itCursor();
    }

    /* ================================
        Back To Top Button Js Start
    ================================ */
    $windowOn.on('scroll', function() {
        var windowScrollTop = $(this).scrollTop();
        var windowHeight = $(window).height();
        var documentHeight = $(document).height();

        if (windowScrollTop + windowHeight >= documentHeight - 10) {
            $("#back-top").addClass("show");
        } else {
            $("#back-top").removeClass("show");
        }
    });

    $documentOn.on('click', '#back-top', function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });


    initRipples();

    /*=============================================
        =              Ripples Init               =
    =============================================*/
    function initRipples() {

        $(".ripple-image").each(function () {

            var $container = $(this);
            var $img = $container.find("img").first();

            if (!$img.length) return;

            var img = new Image();
            img.src = $img.attr("src");

            img.onload = function () {

                var imgURL = img.src;

                $container.css({
                    "background-image": "url(" + imgURL + ")",
                    "background-size": "cover",
                    "background-position": "center center"
                });

                if (typeof $container.ripples === "function") {
                    $container.ripples({
                        resolution: 400,
                        perturbance: 0.03,
                        imageUrl: imgURL
                    });
                }

                $img.hide();
            };

        });
    }

     /* ================================
     Button Hover Js Start
    ================================ */
    
    if (typeof gsap !== "undefined") {
        const hoverBtns = gsap.utils.toArray(".wt-hover-btn-wrapper");
        const hoverBtnItems = gsap.utils.toArray(".wt-hover-btn-item");

        if (hoverBtns.length && hoverBtnItems.length) {
            hoverBtns.forEach((btn, i) => {
                const $btn = $(btn);

                $btn.on("mousemove", function (e) {
                    const relX = e.pageX - $btn.offset().left;
                    const relY = e.pageY - $btn.offset().top;

                    gsap.to(hoverBtnItems[i], {
                        duration: 0.6,
                        x: ((relX - $btn.width() / 2) / $btn.width()) * 60,
                        y: ((relY - $btn.height() / 2) / $btn.height()) * 60,
                        ease: "power2.out"
                    });
                });

                $btn.on("mouseleave", function () {
                    gsap.to(hoverBtnItems[i], {
                        duration: 0.6,
                        x: 0,
                        y: 0,
                        ease: "power2.out"
                    });
                });
            });
        }
    }
    
	
    /* ================================
       Smooth Scroller And Title Animation Js Start
    ================================ */
    if ($('#smooth-wrapper').length && $('#smooth-content').length) {
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

        gsap.config({
            nullTargetWarn: false,
        });

        let smoother = ScrollSmoother.create({
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: 2,
            effects: true,
            smoothTouch: 0.1,
            normalizeScroll: false,
            ignoreMobileResize: true,
        });
    }

    document.querySelectorAll(".project-thumb-box-items-7").forEach((item) => {

    const content = item.querySelector(".content");

    item.addEventListener("mouseenter", () => {
        gsap.to(content,{
            autoAlpha:1,
            duration:.3
        });
    });

    item.addEventListener("mouseleave", () => {
        gsap.to(content,{
            autoAlpha:0,
            duration:.3
        });
    });

    item.addEventListener("mousemove",(e)=>{

        const rect = item.getBoundingClientRect();

        gsap.to(content,{
            x:e.clientX - rect.left,
            y:e.clientY - rect.top,
            duration:.35,
            ease:"power3.out"
        });

    });

});

 /* ================================
       Approach Anim Js Start
    ================================ */

    if (document.querySelectorAll(".approach-area").length > 0) {

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1199px)", () => {

        const boxes = document.querySelectorAll(".approach-area .approach-box");

        gsap.from(boxes, {
            x: "100%",
            duration: 1,
            stagger: 0.3,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".approach-wrapper-box",
                start: "top 100%",
                end: "bottom 40%",
                scrub: 2,
                toggleActions: "play none none reverse",
            },
        });

    });
    }

         /* ================================
       Sticky Js Start
    ================================ */

    let pr2 = gsap.matchMedia();
    pr2.add("(min-width: 1199px)", () => {
        let tl = gsap.timeline();
        let panels = document.querySelectorAll('.tp-panel-pin2');
        panels.forEach((section, index) => {
            tl.to(section, {
                scrollTrigger: {
                    trigger: section,
                    pin: section,
                    scrub: 1,
                    start: 'top 15%',
                    end: 'bottom 35%',
                    endTrigger: '.tp-panel-pin-area2',
                    pinSpacing: false,
                    markers: false,
                },
            });
        });
    });

     if ($(".as-team-1-wrap").length) {
		const teamWrap = document.querySelector(".as-team-1-wrap");
		const members = document.querySelectorAll(".as-team-1-member");

		if (teamWrap) {
			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							members.forEach((member) =>
								member.classList.add("is_active")
							);
						} else {
							members.forEach((member) =>
								member.classList.remove("is_active")
							);
						}
					});
				},
				{ threshold: 0.1 }
			);

			observer.observe(teamWrap);
		}
	}

	if (window.matchMedia("(min-width: 1600px)").matches) {
		var team1ani = gsap.timeline({
			scrollTrigger: {
				trigger: ".t1_ani_trigger",
				start: "top 2%",
				end: "top -70%",
				toggleActions: "play none none reverse",
				scrub: true,
				markers: false,
			},
		});

		team1ani.from(".as-team-1-member-ani:nth-of-type(1)", {
			x: 1187,
			y: -840,
			scale: 0.7,
		});
		team1ani.from(
			".as-team-1-member-ani:nth-of-type(2)",
			{
				x: 830,
				y: -840,
				scale: 0.7,
			},
			"<50%"
		);
		team1ani.from(
			".as-team-1-member-ani:nth-of-type(3)",
			{
				x: 460,
				y: -840,
				scale: 0.7,
			},
			"<50%"
		);
		team1ani.from(
			".as-team-1-member-ani:nth-of-type(4)",
			{
				x: 100,
				y: -840,
				scale: 0.7,
			},
			"<50%"
		);
	}

    /* ================================
       Service Panel Js Start
    ================================ */

	let sv = gsap.matchMedia();
	sv.add("(min-width: 1199px)", () => {
		let tl = gsap.timeline();
		let projectpanels = document.querySelectorAll('.tp-service-panel');
		let baseOffset = 130;
		let offsetIncrement = 80;

		projectpanels.forEach((section, index) => {
			let topOffset = baseOffset + (index * offsetIncrement);
			tl.to(section, {
				scrollTrigger: {
					trigger: section,
					pin: section,
					scrub: 1,
					start: `top ${topOffset}px`,
					end: "bottom 80%",
					endTrigger: '.tp-service-pin',
					pinSpacing: false,
					markers: false,
				},
			});
		});
	});

    /* ================================
      Text Invert Js Start
    ================================ */

    const split2 = new SplitText(".text_invert-2", { type: "lines" });

    split2.lines.forEach((target) => {
        gsap.to(target, {
            backgroundPositionX: 0,
            ease: "none",
            scrollTrigger: {
                trigger: target,
                scrub: 1,
                start: 'top 85%',
                end: "bottom center",
            }
        });
    });

   
      /* ================================
    Scale Up Image Js Start
    ================================ */

    if (typeof ScrollTrigger !== "undefined") {

    ScrollTrigger.matchMedia({

        // ✅ XL and up → animation ON
        "(min-width: 1200px)": function () {

        document.querySelectorAll(".scale-up-img").forEach((section) => {

            const img = section.querySelector(".scale-up");

            let tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom center",
                scrub: 1
            }
            });

            tl.to(img, {
            scale: 1.15,
            ease: "none"
            });

        });

        },

        // ❌ Below XL → animation OFF + reset
        "(max-width: 1199px)": function () {

        // kill all related ScrollTriggers
        ScrollTrigger.getAll().forEach((st) => {
            if (st.trigger && st.trigger.classList.contains("scale-up-img")) {
            st.kill();
            }
        });

        // reset scale
        document.querySelectorAll(".scale-up-img .scale-up").forEach((img) => {
            gsap.set(img, { scale: 1 });
        });

        }

    });

    }

      /* ================================
       Text Title Animation Js Start
    ================================ */

   if (typeof gsap !== "undefined") {
        gsap.registerPlugin(ScrollTrigger, SplitText);

        let mm = gsap.matchMedia();

        mm.add("(min-width: 1200px)", () => {

            let splits = [];

            // ===== tz-sub-tilte =====
            $('.tz-sub-tilte').each(function (index, el) {

            let split = new SplitText(el, {
                type: "lines,words,chars",
                linesClass: "split-line"
            });

            splits.push(split);

            gsap.set(split.chars, {
                opacity: 0,
                x: 7
            });

            gsap.to(split.chars, {
                scrollTrigger: {
                trigger: el,
                start: "top 90%",
                end: "top 60%",
                scrub: 1
                },
                x: 0,
                opacity: 1,
                duration: 0.7,
                stagger: 0.2
            });
            });

            // ===== tz-itm-title =====
            $('.tz-itm-title').each(function (index, el) {

            let split = new SplitText(el, {
                type: "lines,words,chars",
                linesClass: "split-line"
            });

            splits.push(split);

            gsap.set(split.chars, {
                opacity: 0.3,
                x: -7
            });

            gsap.to(split.chars, {
                scrollTrigger: {
                trigger: el,
                start: "top 92%",
                end: "top 60%",
                scrub: 1
                },
                x: 0,
                opacity: 1,
                duration: 0.7,
                stagger: 0.2
            });
            });

            // ðŸ”¥ MOST IMPORTANT PART
            ScrollTrigger.refresh();

            // ðŸ”¥ cleanup on breakpoint change
            return () => {
            splits.forEach(split => split.revert());
            ScrollTrigger.getAll().forEach(st => st.kill());
            };

        });
    }

     /* ================================
      Oit Panel Pin Js Start
    ================================ */
    if (window.innerWidth >= 1199) {
    let panels = document.querySelectorAll('.oit-panel-pin');

    panels.forEach((section) => {
        let startVal = section.dataset.start || 'top 30%';
        let endVal = section.dataset.end || 'bottom 50%';

        gsap.fromTo(
            section,
            {
                transformOrigin: '100% 0% 0px',
                x: 0,
                y: 0,
                rotate: 0,
                scale: 1,
            },
            {
                yPercent: 5,
                rotate: 20,
                scale: 0.75,
                ease: 'none',
                scrollTrigger: {
                    trigger: section,
                    pin: section,
                    scrub: 1,
                    start: startVal,
                    end: endVal,
                    endTrigger: '.oit-panel-pin-area',
                    pinSpacing: false,
                },
            }
        );
    });
    }

    /* ================================
    Text Anim Js Start
    ================================ */

    if (
    typeof SplitText !== "undefined" &&
        document.querySelectorAll(".split-title").length > 0
        ) {
    document.querySelectorAll(".split-title").forEach((title) => {

        // split by words + chars (IMPORTANT)
        const split = new SplitText(title, {
        type: "words,chars"
        });

        // add class to chars
        split.chars.forEach((char) => {
        char.classList.add("char");
        });

        // GSAP animation
        gsap.to(split.chars, {
        scrollTrigger: {
            trigger: title,
            start: "top 90%",
            toggleActions: "play none none none"
        },
        duration: 0.8,
        clipPath: "inset(0% 0% -15% 0%)",
        x: 0,
        opacity: 1,
        ease: "power4.out",
        stagger: 0.03
        });

    });
    }


    if (document.querySelectorAll(".rr_title_anim").length > 0) {
    if ($('.rr_title_anim').length > 0) {
      let splitTitleLines = gsap.utils.toArray(".rr_title_anim");
      splitTitleLines.forEach(splitTextLine => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: splitTextLine,
            start: 'top 90%',
            end: 'bottom 60%',
            scrub: false,
            markers: false,
            toggleActions: 'play none none reverse'
          }
        });

        const itemSplitted = new SplitText(splitTextLine, { type: "words, lines" });
        gsap.set(splitTextLine, { perspective: 400 });
        itemSplitted.split({ type: "lines" })
        tl.from(itemSplitted.lines, {
          duration: 1,
          delay: 0.3,
          opacity: 0,
          rotationX: -80,
          force3D: true,
          transformOrigin: "top center -50",
          stagger: 0.2
        });
      });
    }
    }

     /* ================================
       Project Anim Js Start
    ================================ */

	if ($('.tp-project-5-2-area').length) {

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1200px)", () => {

        gsap.utils.toArray(".tp-project-5-2-area").forEach((section) => {

            const title = section.querySelector(".tp-project-5-2-title");

            if (!title) return;

            const projectText = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top center-=350",
                    end: "bottom 50%",
                    pin: title,
                    pinSpacing: false,
                    scrub: 1,
                    markers: false,
                }
            });

            projectText
                .set(title, {
                    scale: 0.6
                })
                .to(title, {
                    scale: 1,
                    duration: 2
                })
                .to(title, {
                    scale: 1,
                    duration: 2
                }, "+=2")
                .to(title, {
                    autoAlpha: 0,
                    duration: 2
                });

        });

    });

}

  /*=============================================
    Testimonial Effect
    =============================================*/
    gsap.registerPlugin(ScrollTrigger);

    let mmw = gsap.matchMedia();

    mmw.add("(min-width: 1400px)", () => {

      const section = document.querySelector(".client-testimonial");
      if (!section) return;

      const title = section.querySelector(".section-3-title-wrapper");
      const items = gsap.utils.toArray(".client-testimonial__item");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=400%",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true
        }
      });

      // Title animation
      tl.to(title, {
        opacity: 0,
        filter: "blur(10px)",
        duration: 1
      });

      tl.addLabel("itemsStart");

      // Items animation
      tl.fromTo(
        items,
        {
          x: "450%",
          opacity: 0
        },
        {
          x: "0%",
          opacity: 1,
          duration: 1,
          stagger: 0.6,
          ease: "power3.out"
        },
        "itemsStart+=0.3"
      );

      // End hold space
      tl.to({}, { duration: 1 });
    })


     /* ================================
    Animate Circle Js Start
    ================================ */

    if ($('.bz-gsap-animate-circle').length) {
    gsap.utils.toArray('.bz-gsap-animate-circle').forEach((el) => {

        // Accessibility: reduced motion
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.set(el, { rotate: 0 });
        return;
        }

        gsap.timeline({
        scrollTrigger: {
            trigger: el,
            scrub: 1,
            start: "top 80%",
            end: "top 20%",
            markers: false
        }
        })
        .set(el, { transformOrigin: "50% 50%" })
        .fromTo(
        el,
        { rotate: 0 },
        { rotate: 180, ease: "none" }
        );
    });
    }
    
   if ($(".wa_split_up").length) {

        var wa_split_up = $(".wa_split_up");

        gsap.registerPlugin(SplitText, ScrollTrigger);

        wa_split_up.each(function (index, el) {

            el.split = new SplitText(el, {
                type: "lines,words,chars",
                linesClass: "split-line",
            });

            gsap.set(el, { perspective: 400 });

            let delayValue = $(el).attr("data-split-delay") || "0s";
            delayValue = parseFloat(delayValue) || 0;

            gsap.set(el.split.chars, {
                y: 50,
                opacity: 0,
            });

            el.anim = gsap.to(el.split.chars, {
                scrollTrigger: {
                    trigger: el,
                    start: "top 86%",
                    toggleActions: "play none none reverse",
                },
                y: 0,
                opacity: 1,
                duration: 0.3,
                ease: "power1.out",
                stagger: 0.15,
                delay: delayValue,
            });

        });

    }

    if ($(".as-partner-3-big-title").length) {

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1200px)", () => {

        var waSplitup2hero2 = $(".as-partner-3-big-title");

        gsap.registerPlugin(SplitText, ScrollTrigger);

        waSplitup2hero2.each(function (index, el) {

            el.split = new SplitText(el, {
                type: "lines,words,chars",
                linesClass: "split-line",
            });

            gsap.set(el.split.chars, {
                yPercent: -560,
                opacity: 0,
            });

            gsap.to(el.split.chars, {
                scrollTrigger: {
                    trigger: el,
                    end: "top 30%",
                    toggleActions: "play none none reverse",
                    scrub: true,
                },
                opacity: 1,
                yPercent: 0,
                duration: 0.5,
                ease: "power1.out",
                stagger: 0.2,
            });

        });

        var asP3bigTitle = gsap.timeline({
            scrollTrigger: {
                trigger: ".as-partner-3-big-title",
                end: "top 10%",
                toggleActions: "play none none reverse",
                scrub: true,
            },
        });

        asP3bigTitle.from(".as-partner-3-big-title", {
            xPercent: 100,
        });

    });

    }

    /* ================================
      Title Animation
    ================================ */

   if ($(".wa_title_spilt_1").length) {

    gsap.registerPlugin(SplitText, ScrollTrigger);

    document.querySelectorAll(".wa_title_spilt_1").forEach((atEl) => {

        const atSplit = new SplitText(atEl, {
            type: "words,chars",
            wordsClass: "word",
            charsClass: "char",
        });

        let atDuration = parseFloat(atEl.getAttribute("data-speed")) || 0.6; 
        let atDelay = parseFloat(atEl.getAttribute("data-delay")) || 0;

        if (window.innerWidth <= 768) {
            atDuration = atDuration * 0.5; 
        }

        gsap.set(atSplit.words, {
            willChange: "transform",
            perspective: 1000,
            transformStyle: "preserve-3d",
        });

        gsap.set(atSplit.chars, {
            willChange: "transform",
            opacity: 0,
            rotateX: -80,
            transformOrigin: "center center -10px",
        });

        gsap.set(atEl, {
            perspective: 1000,
            transformStyle: "preserve-3d",
        });

        gsap.to(atSplit.chars, {
            scrollTrigger: {
                trigger: atEl,
                start: "top 85%", 
            },
            opacity: 1,
            rotateX: 0,
            duration: atDuration,
            delay: atDelay,
            ease: "power2.out", 
            stagger: {
                each: 0.025, 
                from: "center",
            },
        });

    });

    }

    

   /* ================================
     Design Choose Item Animation 
    ================================ */

   if ($(".design-choose-item-wrap").length) {

    gsap.registerPlugin(ScrollTrigger);

    const pw = gsap.matchMedia();

    pw.add("(min-width: 1200px)", () => {

        document.querySelectorAll(".design-choose-item-wrap").forEach((wrap) => {

            const items1 = wrap.querySelectorAll(".design-choose-item-1");
            const items2 = wrap.querySelectorAll(".design-choose-item-2");

            items1.forEach((item1, i) => {

                const item2 = items2[i];

                if (item1 && item2) {

                    gsap.set(item1, { x: -400, rotate: -40 });
                    gsap.set(item2, { x: 400, rotate: 40 });

                    let tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: item1,
                            start: "top 90%",
                            end: "top 20%",
                            scrub: 1,
                        }
                    });

                    tl.to(item1, { x: 0, rotate: 0 })
                      .to(item2, { x: 0, rotate: 0 }, 0);

                }

            });

        });

    });

    }


    /* ================================
     Clip Animation Js Start
    ================================ */

    const ClipAnimation = {
        init: function () {
        this.createMasks();
        this.animateMasks();
        },

        initialClipPaths: [
        "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)",
        "polygon(33.33% 0%, 33.33% 0%, 33.33% 0%, 33.33% 0%)",
        "polygon(65.66% 0%, 66.66% 0%, 66.66% 0%, 66.66% 0%)",
        "polygon(0% 33.33%, 0% 33.33%, 0% 33.33%, 0% 33.33%)",
        "polygon(33.33% 33.33%, 33.33% 33.33%, 33.33% 33.33%, 33.33% 33.33%)",
        "polygon(65.66% 33.33%, 66.66% 33.33%, 66.66% 33.33%, 66.66% 33.33%)",
        "polygon(0% 66.66%, 0% 66.66%, 0% 66.66%, 0% 66.66%)",
        "polygon(33.33% 66.66%, 33.33% 66.66%, 33.33% 66.66%, 33.33% 66.66%)",
        "polygon(65.66% 66.66%, 66.66% 66.66%, 66.66% 66.66%, 66.66% 66.66%)"
        ],

        finalClipPaths: [
        "polygon(0% 0%, 34.33% 0%, 34.33% 34.33%, 0% 34.33%)",
        "polygon(32.33% 0%, 66.66% 0%, 66.66% 33.33%, 33.33% 34.33%)",
        "polygon(65.66% 0%, 100% 0%, 100% 33.33%, 65.66% 34.33%)",
        "polygon(0% 33.33%, 33.33% 33.33%, 33.33% 66.66%, 0% 66.66%)",
        "polygon(30.33% 33.33%, 66.66% 33.33%, 66.66% 66.66%, 33.33% 66.66%)",
        "polygon(65.66% 33.33%, 100% 32.33%, 100% 66.66%, 65.66% 66.66%)",
        "polygon(0% 65.66%, 33.33% 66.66%, 33.33% 100%, 0% 100%)",
        "polygon(30.33% 66.66%, 66.66% 65.66%, 66.66% 100%, 33.33% 100%)",
        "polygon(65.66% 66.66%, 100% 65.66%, 100% 100%, 65.66% 100%)"
        ],

        createMasks: function () {
        $(".clip-animation").each(function () {
            const $wrapper = $(this);
            const $img = $wrapper.find(".clip-animation-img[data-animate='true']");

            if (!$img.length) return;

            const url = $img.attr("src");

            $wrapper.find(".mask").remove();

            for (let i = 0; i < 9; i++) {
            $("<div>", {
                class: `mask mask-${i + 1}`,
                css: {
                backgroundImage: `url(${url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "absolute",
                inset: 0
                }
            }).appendTo($wrapper);
            }
        });
        },

        animateMasks: function () {
        const self = this;

        $(".clip-animation").each(function () {
            const wrapper = this;
            const $masks = $(wrapper).find(".mask");

            if (!$masks.length) return;

            gsap.set($masks.toArray(), {
            clipPath: function (i) {
                return self.initialClipPaths[i];
            }
            });

            const order = [
            [".mask-1"],
            [".mask-2", ".mask-4"],
            [".mask-3", ".mask-5", ".mask-7"],
            [".mask-6", ".mask-8"],
            [".mask-9"]
            ];

            const tl = gsap.timeline({
            scrollTrigger: {
                trigger: wrapper,
                start: "top 75%"
            }
            });

            order.forEach((targets, i) => {
            const elements = targets
                .map(sel => wrapper.querySelector(sel))
                .filter(Boolean);

            if (!elements.length) return;

            tl.to(elements, {
                clipPath: (j, el) =>
                self.finalClipPaths[$masks.toArray().indexOf(el)],
                duration: 1,
                ease: "power4.out",
                stagger: 0.1
            }, i * 0.125);
            });
        });
        }
    };

    ClipAnimation.init();

    /* ================================
       Project Card Animation Js Start
    ================================ */
   let pr = gsap.matchMedia();

    pr.add("(min-width: 1199px)", () => {

        // =========================
        // Panel Pin
        // =========================
        const panels = gsap.utils.toArray('.tp-panel-pin');

        const pinTriggers = panels.map((section) => {

            let defaultStart = "top 10%";
            let defaultEnd = "bottom 52%";

            let startVal = section.dataset.start || defaultStart;
            let endVal = section.dataset.end || defaultEnd;

            return ScrollTrigger.create({
                trigger: section,
                start: startVal,
                end: endVal,
                endTrigger: '.tp-panel-pin-area',
                pin: section,
                scrub: 1,
                pinSpacing: false,
                markers: false
            });

        });

        // =========================
        // Service Cards Active State
        // =========================
        const serviceCards = gsap.utils.toArray(".service-box-two");

        function updateNumbers(activeIndex) {

            serviceCards.forEach((card, index) => {

                const numberLine = card.querySelector(".number-line");

                // Show previous numbers
                if (index <= activeIndex) {
                    gsap.set(numberLine, {
                        opacity: 1,
                        visibility: "visible"
                    });
                } else {
                    gsap.set(numberLine, {
                        opacity: 0,
                        visibility: "hidden"
                    });
                }

                // Active card
                if (index === activeIndex) {
                    card.classList.add("active");
                } else {
                    card.classList.remove("active");
                }

            });

        }

        // Hide all first
        serviceCards.forEach((card) => {
            const numberLine = card.querySelector(".number-line");

            gsap.set(numberLine, {
                opacity: 0,
                visibility: "hidden"
            });

            card.classList.remove("active");
        });

        // First card active
        updateNumbers(0);

        // Trigger for each card
        serviceCards.forEach((card, index) => {

            ScrollTrigger.create({
                trigger: card,
                start: "top 10%",
                end: "bottom 10%",

                onEnter: () => updateNumbers(index),
                onEnterBack: () => updateNumbers(index),
                markers: false
            });

        });

        return () => {
            pinTriggers.forEach(trigger => trigger.kill());
        };

    });


      /* ================================
       Sticky Js Start
    ================================ */

    let prss = gsap.matchMedia();
	prss.add("(min-width: 1199px)", () => {
		let tlss = gsap.timeline();
		let panels = document.querySelectorAll('.tp-panel-pinss')
		panels.forEach((section, index) => {
			tlss.to(section, {
				scrollTrigger: {
					trigger: section,
					pin: section,
					scrub: 1,
					start: 'top top',
					end: "bottom 99%",
					endTrigger: '.tp-panel-pin-areass',
					pinSpacing: false,
					markers: false,
				},
			})
		})
	});


   if (document.querySelector(".work-process-section-two")) {

        gsap.registerPlugin(ScrollTrigger);

        const mm = gsap.matchMedia();

        mm.add("(min-width: 1200px)", () => {

            const cards = gsap.utils.toArray(".work-process-items-area");
            const line = document.querySelector(".line-fill");

            ScrollTrigger.create({
                trigger: ".work-process-section-two",
                start: "top top",
                end: "+=3000",
                pin: true,
                scrub: true,

                onUpdate: (self) => {

                    const progress = self.progress;

                    line.style.width = `${progress * 100}%`;

                    cards.forEach(card => card.classList.remove("active"));

                    if (progress >= 0) cards[0]?.classList.add("active");
                    if (progress > 0.25) cards[1]?.classList.add("active");
                    if (progress > 0.50) cards[2]?.classList.add("active");
                    if (progress > 0.75) cards[3]?.classList.add("active");
                }
            });

        });

    }

    if (window.innerWidth > 1199) {

    const advanceWrap = document.querySelector(".advance-wrap");

    if (advanceWrap) {

        const items = advanceWrap.querySelectorAll(".advance-item");

        if (items.length >= 4) {

            gsap.timeline({
                scrollTrigger: {
                    trigger: advanceWrap,
                    start: "top 60%",
                    toggleActions: "play none none reverse",
                    markers: false
                },
                defaults: {
                    ease: "power1.out",
                    duration: 1
                }
            })
            .from(items[0], {
                xPercent: 100,
                rotate: -8
            })
            .from(items[1], {
                xPercent: 30,
                rotate: 4.13
            }, "<")
            .from(items[2], {
                xPercent: -30,
                rotate: -6.42
            }, "<")
            .from(items[3], {
                xPercent: -60,
                rotate: -12.15
            }, "<");

        }

    }

    }

     /* ================================
       Card Animation Js Start
    ================================ */

   let prrr = gsap.matchMedia();

    prrr.add("(min-width: 1199px)", () => {

        const panels = gsap.utils.toArray('.tp-panel-pinsr');

        const triggers = panels.map((section) => {

            let defaultStart = "top 10%";
            let defaultEnd   = "bottom 100%";

            let startVal = section.dataset.start || defaultStart;
            let endVal   = section.dataset.end || defaultEnd;

            return ScrollTrigger.create({
                trigger: section,
                start: startVal,
                end: endVal,
                endTrigger: '.tp-panel-pin-areasr',
                pin: section,
                scrub: 1,
                pinSpacing: false,
                markers: false
            });

        });

        // IMPORTANT: cleanup for ThemeForest + matchMedia safety
        return () => {
            triggers.forEach(t => t.kill());
        };

    });

     let proo = gsap.matchMedia();
	proo.add("(min-width: 1199px)", () => {
		let tl = gsap.timeline();
		let panels = document.querySelectorAll('.tp-panel-pinoo')
		panels.forEach((section, index) => {
			tl.to(section, {
				scrollTrigger: {
					trigger: section,
					pin: section,
					scrub: 1,
					start: 'top 14%',
					end: "bottom 62%",
					endTrigger: '.tp-panel-pin-areaoo',
					pinSpacing: false,
					markers: false,
				},
			})
		})
	});


    // Register GSAP Plugins
    gsap.registerPlugin(ScrollTrigger);

    // Match Media
    const mm = gsap.matchMedia();

    // Service Area Animation
    if (document.querySelector(".service-area")) {

        mm.add("(min-width: 1400px)", () => {

            // Service Boxes Animation
            gsap.to(".services-wrapper-1 .service-box-1", {
                x: 0,
            ease: "power2.inOut",
            scrollTrigger: {
            trigger: ".services-wrapper-box",
            start: "top 10%",
            end: "+=50%",
            toggleActions: "play complete play reverse",
            pin: true,
            scrub: 0,
            }
            });

        });

        // Refresh ScrollTrigger after page fully loaded
        window.addEventListener("load", () => {
            ScrollTrigger.refresh();
        });

    }

      /*=============================================
    =         CLIP ANIMATION INIT                =
    =============================================*/
    initClipAnimation(); // ✅ MUST ADD THIS

  
    }); // End Document Ready Function

    /* ================================
      CLIP ANIMATION FUNCTION   
    ================================ */
    function initClipAnimation() {

        const wrappers = document.querySelectorAll(".tp-clip-anim");
        if (!wrappers.length) return;

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                const wrapper = entry.target;
                const img = wrapper.querySelector(".tp-anim-img[data-animate='true']");
                if (!img) return;

                const url = img.getAttribute("src");

                // Ensure relative position
                if (getComputedStyle(wrapper).position === "static") {
                    wrapper.style.position = "relative";
                }

                // Remove old masks
                wrapper.querySelectorAll(".mask").forEach((m) => m.remove());

                const fragment = document.createDocumentFragment();

                for (let i = 0; i < 9; i++) {
                    const mask = document.createElement("div");
                    mask.className = `mask mask-${i + 1}`;

                    mask.style.cssText = `
                        background-image: url(${url});
                        background-size: cover;
                        background-position: center;
                        position: absolute;
                        inset: 0;
                    `;

                    fragment.appendChild(mask);
                }

                wrapper.appendChild(fragment);

                // Stop observing after trigger
                obs.unobserve(wrapper);
            });
        }, { threshold: 0.2 });

        wrappers.forEach((wrapper) => observer.observe(wrapper));
    }

     gsap.registerPlugin(ScrollTrigger);

    if (window.innerWidth >= 1199) {
    document.querySelectorAll('.panel-pin').forEach((section) => {
        ScrollTrigger.create({
        trigger: section,
        pin: true,
        start: "top 15%",
        endTrigger: ".panel-pin-area",
        end: "bottom 58%",
        scrub: 1,
        pinSpacing: true
        });
    });
    }

     //>> Service-Image Hover Start <<//
    const items = document.querySelectorAll('.service-item');
    const images = document.querySelectorAll('.hover-image');

    items.forEach((item, index) => {
        item.addEventListener('mouseenter', () => {

            // active class
            items.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            // image show
            images.forEach(img => img.style.opacity = '0');

            if(images[index]){
                images[index].style.opacity = '1';
            }
        });
    });
    
     /* ================================
      Preloader Js Start
    ================================ */

     function preloader() {
        $(window).on("load", function () {
        const svg = document.getElementById("svg");
        if (!svg) return; // safety check if SVG not found

        const tl = gsap.timeline();

        const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
        const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

        // Animate preloader text (if exists)
        if ($(".preloader-text").length) {
            tl.to(".preloader-text", {
            delay: 0.3,
            y: -100,
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
            });
        }

        // Animate SVG wave
        tl.to(svg, {
            duration: 0.3,
            attr: { d: curve },
            ease: "power2.in",
        }).to(svg, {
            duration: 0.5,
            attr: { d: flat },
            ease: "power2.out",
        });

        // Slide preloader up and hide
        tl.to(".preloader", {
            y: -1500,
            duration: 0.8,
            ease: "power2.inOut",
        })
            .set(".preloader", { display: "none", zIndex: -1 });

        // Animate main hero image
        if ($(".animated-image").length) {
            tl.fromTo(
            ".animated-image",
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
            },
            "-=0.3"
            );
        }
        });
  }
  // Init preloader
  preloader();
  
  })(jQuery); // End jQuery
