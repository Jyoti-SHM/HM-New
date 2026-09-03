/* =====================================
All JavaScript fuctions Start
======================================*/

(function ($) {
	
    'use strict';
/*--------------------------------------------------------------------------------------------
	document.ready ALL FUNCTION START
---------------------------------------------------------------------------------------------*/	

	//________ Home 1 banner slider function by = swiper-bundle.min.js ________//
	function sx_home_bnr_1(){
		var swiper = new Swiper('.home-1-slider', {

				loop: true,
				spaceBetween:0,
				speed: 500,
				parallax: true,
				effect: "slider",
				navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
				},
				pagination: {
				el: ".swiper-pagination",
				clickable: true,
				},
				
				autoplay: {
					delay: 7000,
					disableOnInteraction: false,
				},
		});
	}

	//________ Home 2 banner slider function by = swiper-bundle.min.js ________//
	function sx_home_bnr_2(){
		var swiper = new Swiper('.home-2-slider', {

				loop: true,
				spaceBetween: 0,
				effect: "fade",
				navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
				},
				pagination: {
				el: ".swiper-pagination",
				clickable: true,
				},
				parallax: true,
				autoplay: {
					delay: 7000,
					disableOnInteraction: false,
				},
		});
	}

	//________Top Search bar Show Hide function by = custom.js________//	
		
		function site_search(){
				jQuery('a[href="#search"]').on('click', function(event) {                    
				jQuery('#search').addClass('open');
				jQuery('#search > form > input[type="search"]').focus();
			});
						
			jQuery('#search, #search button.close').on('click keyup', function(event) {
				if (event.target === this || event.target.className === 'close') {
					jQuery(this).removeClass('open');
				}
			});  
		}
	 
	//________popovers initialization - on hover________//
	function popover_img(){
		jQuery('[data-toggle="popover-hover"]').popover({
			html: true,
			trigger: 'hover',
			placement: 'bottom',
			content: function () { return '<img src="' + $(this).data('img') + '" />'; }
		}); 
	} 
	 
	 
	//________Video responsive function by = custom.js________//	

		function video_responsive(){	
			jQuery('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
			jQuery('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');	
		}  


	//________magnificPopup function	by = magnific-popup.js________//	

		function magnific_popup(){
			jQuery('.mfp-gallery').magnificPopup({
			delegate: '.mfp-link',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			}
		});
		}
	

	//________ magnificPopup for video function	by = magnific-popup.js________//	
		
		function magnific_video(){	
			jQuery('.mfp-video').magnificPopup({
				type: 'iframe',
			});
		}
	

	//________Vertically center Bootstrap modal popup function by = custom.js________//	

		function popup_vertical_center(){	
			jQuery(function() {
				function reposition() {
					var modal = jQuery(this),
					dialog = modal.find('.modal-dialog');
					modal.css('display', 'block');
					// Dividing by two centers the modal exactly, but dividing by three 
					// or four works better for larger screens.
					dialog.css("margin-top", Math.max(0, (jQuery(window).height() - dialog.height()) / 2));
				}
				// Reposition when a modal is shown
				jQuery('.modal').on('show.bs.modal', reposition);
				// Reposition when the window is resized
				jQuery(window).on('resize', function() {
					jQuery('.modal:visible').each(reposition);
				});
			});
		}
	
	//________page scroll top on button click function by = custom.js________//	

		function scroll_top(){
			jQuery("button.scroltop").on('click', function() {
				jQuery("html, body").animate({
					scrollTop: 0
				}, 1000);
				return false;
			});

			jQuery(window).on("scroll", function() {
				var scroll = jQuery(window).scrollTop();
				if (scroll > 900) {
					jQuery("button.scroltop").fadeIn(1000);
				} else {
					jQuery("button.scroltop").fadeOut(1000);
				}
			});
		}
		
	//________input type file function by = custom.js________//	
		
		function input_type_file_form(){
			jQuery(document).on('change', '.btn-file :file', function() {
				var input = jQuery(this)
					numFiles = input.get(0).files ? input.get(0).files.length : 1,
					label = input.val().replace(/\\/g, 'https://theme7x.com/').replace(/.*\//, '');
				input.trigger('fileselect', [numFiles, label]);
			});

			jQuery('.btn-file :file').on('fileselect', function(event, numFiles, label) {
				var input = jQuery(this).parents('.input-group').find(':text'),
					log = numFiles > 10 ? numFiles + ' files selected' : label;
				if (input.length) {
					input.val(log);
				} else {
					if (log) alert(log);
				}
			});	
		}
	
	//________ input Placeholder in IE9 function by = custom.js________//	

		function placeholderSupport(){
		/* input placeholder for ie9 & ie8 & ie7 */
			jQuery.support.placeholder = ('placeholder' in document.createElement('input'));
			/* input placeholder for ie9 & ie8 & ie7 end*/
			/*fix for IE7 and IE8  */
			if (!jQuery.support.placeholder) {
				jQuery("[placeholder]").on('focus', function () {
					if (jQuery(this).val() === jQuery(this).attr("placeholder")) jQuery(this).val("");
				}).blur(function () {
					if (jQuery(this).val() === "") jQuery(this).val(jQuery(this).attr("placeholder"));
				}).blur();

				jQuery("[placeholder]").parents("form").on('submit', function () {
					jQuery(this).find('[placeholder]').each(function() {
						if (jQuery(this).val() === jQuery(this).attr("placeholder")) {
							jQuery(this).val("");
						}
					});
				});
			}
			/*fix for IE7 and IE8 end */
		}	
	
	//________ footer fixed on bottom function by = custom.js________//	

		function footer_fixed() {
		jQuery('.site-footer').css('display', 'block');
		jQuery('.site-footer').css('height', 'auto');
		var footerHeight = jQuery('.site-footer').outerHeight();
		jQuery('.footer-fixed > .page-wraper').css('padding-bottom', footerHeight);
		jQuery('.site-footer').css('height', footerHeight);
		}
	
	//________STICKY MENU WHEN SCROLL DOWN________//	

		function sticky_header(){
			if(jQuery('.sticky-header').length){
				var sticky = new Waypoint.Sticky({
				element: jQuery('.sticky-header')
				})
			}
		}		
	//________accordion active calss function by = custom.js________//	

		function accordion_active() {
			$('.acod-head a').on('click', function() {
				$('.acod-head').removeClass('acc-actives');
				$(this).parents('.acod-head').addClass('acc-actives');
				$('.acod-title').removeClass('acc-actives'); //just to make a visual sense
				$(this).parent().addClass('acc-actives'); //just to make a visual sense
				($(this).parents('.acod-head').attr('class'));
			});
		}	
	
	//________Nav submenu show hide on mobile by = custom.js________//
		function mobile_nav(){
			jQuery(".sub-menu, .mega-menu").parent('li').addClass('has-child');
			jQuery("<div class='fa fa-angle-right submenu-toogle'></div>").insertAfter(".has-child > a");

			jQuery('.has-child a+.submenu-toogle').on('click',function(ev) {

				jQuery(this).parent().siblings(".has-child ").children(".sub-menu, .mega-menu").slideUp(500, function(){
					jQuery(this).parent().removeClass('nav-active');
				});

				jQuery(this).next(jQuery('.sub-menu, .mega-menu ')).slideToggle(500, function(){
					jQuery(this).parent().toggleClass('nav-active');
				});

				ev.stopPropagation();
			});

		}
	//________Mobile side drawer function by = custom.js________//
		function mobile_side_drawer(){
			jQuery('#mobile-side-drawer').on('click', function () { 
				jQuery('.mobile-sider-drawer-menu').toggleClass('active');
			});
		}	

	//________Home page testimonial function by = owl.carousel.js________//	

		function testimonial_home(){
		jQuery('.testimonial-home').owlCarousel({
			loop:true,
			autoplay:false,
			margin:30,
			autoplayTimeout:6000,
			nav:true,
			dots: false,
			navText: ['<i class="flaticon-return"></i>', '<i class="flaticon-next"></i>'],
			responsive:{
				0:{
					items:1
				},
				991:{
					items:1
				}
			}
		});
		}
	
	
	
	//________Home page testimonial function by = owl.carousel.js________//	

		function about_home(){
		jQuery('.about-home').owlCarousel({
			loop:true,
			autoplay:true,
			margin:30,
			nav:true,
			dots: true,
			navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
			responsive:{
				0:{
					items:1
				},
				991:{
					items:1
				}
			}
		});
		}		

	

	
	//________ Projects carousel  function by = owl.carousel.js________//	

		function home_projects_filter(){
				
				var owl = jQuery('.owl-carousel-filter').owlCarousel({
				loop:false,
				autoplay:false,
				margin:30,
				nav:true,
				dots: false,
				navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
				responsive:{
					0:{
						items:1,
					},
					540:{
						items:2,
					},
					768:{
						items:2,
					},			
					1024:{
						items:3
					},
					1136:{
						items:4
					},					
					1366:{
						items:4
					}	
					}
				})
				
				/* Filter Nav */

				jQuery('.btn-filter-wrap').on('click', '.btn-filter', function(e) {
					var filter_data = jQuery(this).data('filter');

					/* return if current */
					if(jQuery(this).hasClass('btn-active')) return;

					/* active current */
					jQuery(this).addClass('btn-active').siblings().removeClass('btn-active');

					/* Filter */
					owl.owlFilter(filter_data, function(_owl) { 
						jQuery(_owl).find('.item').each(owlAnimateFilter); 
					});
				})
			
			
			
		}	

	// ________ Fade slider function by = owl.carousel.js ========================== //
		function owl_fade_slider(){
		jQuery('.owl-fade-slider-one').owlCarousel({
			loop:true,
			autoplay:true,
			autoplayTimeout:2000,
			margin:30,
			nav:true,
			navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
			items:1,
			dots: false,
			animateOut:'fadeOut',

		})
		}
	//________  Sidebar sticky  when scroll down function by = theia-sticky-sidebar.js ========== //		
	function sticky_sidebar(){		
		$('.sticky_column')
			.theiaStickySidebar({
				additionalMarginTop: 100
			});		
	}


	//________ Login Signup Form function by = custom.js ________//		
		function Get_in_touch(){		
		$(".input input , .input textarea").focus(function() {
		
			$(this).parent(".input").each(function() {
				$(".spin", this).css({
					"width": "100%"
				})
			});
		})
		.blur(function() {
			$(".spin").css({
				"width": "0px"
			})
			
		});
	}
	

	//________ Team 2 slider function by = swiper-bundle.min.js ________//	
		function sx_team2_swiper(){
		var swiper = new Swiper('.sx-team2-swiper ', {
			effect: 'coverflow',
			grabCursor: true,
			centeredSlides: true,
			freeMode: false,
			loop: true,
			slidesPerView: 'auto',
			coverflowEffect: {
			rotate: 50,
			stretch: 0,
			depth: 100,
			observer: true,
            observeParents: true,
			modifier: 1,
			slideShadows: true,
			},
			autoplay: {
			delay: 2500,
			disableOnInteraction: true,
			},
			autoplay: false,
			pagination: {
			el: '.swiper-pagination',
			type: 'fraction',
			},
			navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
			},
		});
	}

	//________ Portfolio Large slider function by = swiper-bundle.min.js ________//
	function sx_portfolio_large_swiper(){
		var swiper = new Swiper('.swiper-portfolio-container', {

			freeMode: true,
			
			slidesPerView: 4,
			centeredSlides: false,
			paginationClickable: true,
			loop: false,
			spaceBetween: 0,
			slideToClickedSlide: true,

			pagination: {
				el: '.swiper-pagination , .swiper-portfolio-container',
				clickable: true,
				type: 'progressbar',
			},

			autoplay: {
				delay: 2500,
				disableOnInteraction: true,
			},
			breakpoints: {
				// when window width is >= 320px
				0: {
					slidesPerView: 2,
				},
				// when window width is >= 768px
				768: {
				  slidesPerView: 2,
				},
				// when window width is >= 1024px
				1024: {
				  slidesPerView: 3,
				},
				// when window width is >= 1365px
				1365: {
				  slidesPerView: 4,
				}
			},

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		});
	}


	//________ Portfolio Full Width slider function by = swiper-bundle.min.js ________//
	function sx_portfolio_fw_swiper(){
	var swiper = new Swiper('.swiper-container-fw', {

		freeMode: false,
		pagination: '.swiper-pagination',
		slidesPerView: 1,
		centeredSlides: false,
		
		paginationClickable: true,
		loop: true,
		spaceBetween: 0,
		slideToClickedSlide: true,

		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			dynamicBullets: true,
		},

		autoplay: {
			delay: 2500,
			disableOnInteraction: true,
		},

		navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
		},

	});

	}

	//________ About me Full Width slider function by = swiper-bundle.min.js ________//
		function sx_about_me_swiper(){
			var swiper = new Swiper('.about-me-slider', {
		
				freeMode: false,
				pagination: '.swiper-pagination',
				slidesPerView: 4,
				centeredSlides: false,
				paginationClickable: true,
				loop: true,
				spaceBetween: 0,
				slideToClickedSlide: true,
				breakpoints: {
					// when window width is >= 320px
					0: {
						slidesPerView: 1,
					},
					// when window width is >= 768px
					768: {
					  slidesPerView: 2,
					},
					// when window width is >= 1024px
					1024: {
					  slidesPerView: 3,
					},
					// when window width is >= 1365px
					1365: {
					  slidesPerView: 4,
					}
				},
		
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
		
				autoplay: {
					delay: 2500,
					disableOnInteraction: true,
				},
		
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		
			});
		
		}


	//________ Project carousel  function by = swiper-bundle.min.js________//	
	function project_carousel1(){
		var swiper = new Swiper('.project-carousel1', {
	
			freeMode: false,
			pagination: '.swiper-pagination',
			slidesPerView: 1,
			centeredSlides: false,
			paginationClickable: true,
			loop: true,
			spaceBetween: 0,
			slideToClickedSlide: true,

			pagination: {
				el: '.swiper-pagination , project-carousel1',
				clickable: true,
				dynamicBullets: true,
			},
	
			autoplay: {
				delay: 2500,
				disableOnInteraction: true,
			},
	
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	
		});
	
	}


	//________Home page testimonial function by = swiper-bundle.min.js ________//
	function testimonial_home_two(){
		var swiper = new Swiper('.testimonial-home-two', {
	
			freeMode: false,
			slidesPerView: 2,
			centeredSlides: false,
			paginationClickable: true,
			loop: true,
			spaceBetween: 30,
			slideToClickedSlide: true,
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				991: {
				  slidesPerView: 2,
				}
			},
	
			pagination: {
				el: '.swiper-pagination .testimonial-home-two',
				clickable: true,
			},
	
			autoplay: {
				delay: 2500,
				disableOnInteraction: true,
			},
	
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	
		});
		
	
	}

	//________ Counter Up  function by = counterup.min.js ========== //		
	function counter_up(){		
		jQuery('.counter').counterUp({
			delay: 10,
			time:5000
		});
	
	}

				
	/*--------------------------------------------------------------------------------------------
		Window on load ALL FUNCTION START
	---------------------------------------------------------------------------------------------*/

	//________masonry function function by = isotope.pkgd.min.js________//	

		function masonryBox() {
			if ( jQuery().isotope ) {      
				var $container = jQuery('.masonry-outer');
					$container.isotope({
						itemSelector: '.masonry-item',
						transitionDuration: '1s',
						originLeft: true,
						stamp: '.stamp',
					});

				$container.imagesLoaded().progress( function() {
					$container.isotope('layout');
				});

				jQuery('.masonry-filter li').on('click',function() {                           
					var selector = jQuery(this).find("a").attr('data-filter');
					jQuery('.masonry-filter li').removeClass('active');
					jQuery(this).addClass('active');
					$container.isotope({ filter: selector });
					return false;
				});
			};
		}
		

	//________page loader function by = custom.js________//	

		function page_loader() {
			$('.loading-area').fadeOut(1000)
		};

	
	//________skills bar function function by  = custom.js ________//	


		/* 2.1 skills bar tooltips*/
		function progress_bar_tooltips() {
			jQuery(function () { 
			jQuery('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
			});  
		}

		/* 2.2 skills bar widths*/

		function progress_bar_width() {	
			jQuery(window).on('scroll', function(){   
			jQuery(".progress-bar").each(function(){
				progress_bar_width = jQuery(this).attr('aria-valuenow');
				jQuery(this).width(progress_bar_width + '%');
			});
			}); 
		}


	//________LIGHTBOX Gallery Popup function	by = lc_lightbox.lite.js ________//
	function lightbox_popup(){
		lc_lightbox('.elem', {
			wrap_class: 'lcl_fade_oc',
			gallery : true,	
			thumb_attr: 'data-lcl-thumb', 
			
			skin: 'minimal',
			radius: 0,
			padding	: 0,
			border_w: 0,
		});
	}	
	

	/*--------------------------------------------------------------------------------------------
		Window on scroll ALL FUNCTION START
	---------------------------------------------------------------------------------------------*/

		// function color_fill_header() {
		// 	var scroll = $(window).scrollTop();
		// 	if(scroll >= 100) {
		// 		$(".is-fixed").addClass("color-fill");
		// 	} else {
		// 		$(".is-fixed").removeClass("color-fill");
		// 	}
		// };	

		function color_fill_header() {
			var scroll = $(window).scrollTop();
			if(scroll >= 100) {
				$(".main-bar").addClass("color-fill");
			} else {
				(scroll = 100); $(".main-bar").removeClass("color-fill");
			}
		}

	/*--------------------------------------------------------------------------------------------
		document.ready ALL FUNCTION START
	---------------------------------------------------------------------------------------------*/
		jQuery(document).ready(function() {
				//________ Home 1 banner slider function by = swiper-bundle.min.js ________//
				sx_home_bnr_1()
				//________ Home 2 banner slider function by = swiper-bundle.min.js ________//
	            sx_home_bnr_2()
				//________Top Search bar Show Hide function by = custom.js ________//	 		
				site_search(),
				//________popovers initialization - on hover________//
				popover_img(),
			    //________  Sidebar sticky  when scroll down function by = theia-sticky-sidebar.js ========== //		
				sticky_sidebar(),
					
				//________Video responsive function by = custom.js ________//	
				video_responsive(),
				//________magnificPopup function	by = magnific-popup.js________//	
				magnific_popup(),
				//________magnificPopup for video function	by = magnific-popup.js________//	
				magnific_video(),
				//________Vertically center Bootstrap modal popup function by = custom.js________//	
				popup_vertical_center();
				//________Main menu sticky on top  when scroll down function by = custom.js	________//		
				sticky_header(),
				//________page scroll top on button click function by = custom.js________//		
				scroll_top(),
				//________input type file function by = custom.js	 ________//		
				input_type_file_form(),
				//________ input Placeholder in IE9 function by = custom.js	________//		
				placeholderSupport(),
				//________footer fixed on bottom function by = custom.js________//		
				footer_fixed(),
				//________accordion active calss function by = custom.js ________//	
				accordion_active(),
				//________ Nav submenu on off function by = custome.js________//	
				mobile_nav(),
				//________Mobile side drawer function by = custom.js________//
				mobile_side_drawer(),
				//________Home page testimonial function by = owl.carousel.js________//	
				testimonial_home(),
				//________Home page testimonial function by = swiper-bundle.min.js________//	
				testimonial_home_two(),
				//________Home page testimonial function by = owl.carousel.js________//	
				about_home()						
				//________ Login Signup Form function by = custom.js ________//		
				Get_in_touch(),
				//________ Team 2 slider function by = swiper-bundle.min.js ________//	
				sx_team2_swiper(),
				//________ Portfolio Large slider function by = swiper-bundle.min.js ________//
				sx_portfolio_large_swiper(),
				//________ Portfolio Full Width slider function by = swiper-bundle.min.js ________//
				sx_portfolio_fw_swiper(),
				//________ About me Full Width slider function by = swiper-bundle.min.js ________//
				sx_about_me_swiper(),
				//________ Counter Up  function by = counterup.min.js ========== //		
				counter_up()
		
		}); 

	/*--------------------------------------------------------------------------------------------
		Window Load START
	---------------------------------------------------------------------------------------------*/
		jQuery(window).on('load', function () {
			//________Window on scroll header color fill________//	 
			color_fill_header(),
			//________masonry function function by = isotope.pkgd.min.js________//			
			masonryBox(),
			//________page loader function by = custom.js________//			
			page_loader(),
			//________project carousel  function by = swiper-bundle.min.js________//	
			project_carousel1(),
		
			//________Projects carousel  function by = owl.carousel.js________//	
			home_projects_filter(),	
			// ________ Fade slider function by = owl.carousel.js ========================== //
			owl_fade_slider(),				
			//________skills bar function function by  = custom.js________//				
			progress_bar_tooltips(),
			//________skills bar function function by  = custom.js________//			
			progress_bar_width(),
			//________LIGHTBOX Gallery Popup function	by = lc_lightbox.lite.js ________//
			lightbox_popup()
	});

	/*===========================
		Window Scroll ALL FUNCTION START
	===========================*/

		jQuery(window).on('scroll', function () {
	//________Window on scroll header color fill________//	 
			color_fill_header()

		});
	
	/*===========================
		Window Resize ALL FUNCTION START
	===========================*/

		jQuery(window).on('resize', function () {
			//________ footer fixed on bottom function by = custom.js	________//		 
			footer_fixed(),
			//________masonry function function by = isotope.pkgd.min.js________//			
			masonryBox()
		});

	/*===========================
		Document on  Submit FUNCTION START
	===========================*/
		
	//________ Contact form home page function by = custom.js________//	

		jQuery(document).on('submit', 'form.cons-contact-form2', function(e){
			e.preventDefault();
			var form = jQuery(this);
			/* sending message */
			
			jQuery.ajax({
				url: 'career-form.php',
				data: form.serialize() + "&action=contactform",
				type: 'POST',
				dataType: 'JSON',
				beforeSend: function() {
					jQuery('.loading-area').show();
					
				},

				success:function(data){
					jQuery('.loading-area').hide();
					if(data['success']){
					jQuery("<div class='alert alert-success'>"+data['message']+"</div>").insertBefore('form.cons-contact-form2');
					}else{
					jQuery("<div class='alert alert-danger'>"+data['message']+"</div>").insertBefore('form.cons-contact-form2');
					}
				}
			});
			jQuery('.cons-contact-form2').trigger("reset");
			return false;
		});		
			

	/*===========================
		Document on  Submit FUNCTION END
	===========================*/	


})(jQuery);

	//________Cursur Circle function START	________//
	jQuery(document).ready(function() {
		options = {
			"cursorOuter": "circle-basic",
			"hoverEffect": "circle-move",
			"hoverItemMove": false,
			"defaultCursor": true,
			"outerWidth": 41,
			"outerHeight": 41
		}; 
		magicMouse(options);
	});	
	//________Cursur Circle function End	________//

	//________Title Typewrite function START	________//

	var TxtType = function(el, toRotate, period) {
		this.toRotate = toRotate;
		this.el = el;
		this.loopNum = 0;
		this.period = parseInt(period, 10) || 2000;
		this.txt = '';
		this.tick();
		this.isDeleting = false;
	};
            
	TxtType.prototype.tick = function() {
		var i = this.loopNum % this.toRotate.length;
		var fullTxt = this.toRotate[i];

		if (this.isDeleting) {
		this.txt = fullTxt.substring(0, this.txt.length - 1);
		} else {
		this.txt = fullTxt.substring(0, this.txt.length + 1);
		}

		this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

		var that = this;
		var delta = 200 - Math.random() * 100;

		if (this.isDeleting) { delta /= 2; }

		if (!this.isDeleting && this.txt === fullTxt) {
		delta = this.period;
		this.isDeleting = true;
		} else if (this.isDeleting && this.txt === '') {
		this.isDeleting = false;
		this.loopNum++;
		delta = 500;
		}

		setTimeout(function() {
		that.tick();
		}, delta);
	};
            
	window.onload = function() {
		var elements = document.getElementsByClassName('typewrite');
		for (var i=0; i<elements.length; i++) {
			var toRotate = elements[i].getAttribute('data-type');
			var period = elements[i].getAttribute('data-period');
			if (toRotate) {
				new TxtType(elements[i], JSON.parse(toRotate), period);
			}
		}
		// INJECT CSS
		var css = document.createElement("style");
		css.type = "text/css";
		css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
		document.body.appendChild(css);
	};

//________Title Typewrite function START	________//





