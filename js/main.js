(function ($) {
"use strict";

// meanmenu
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.hobi_mobile_menu',
	meanScreenWidth: "1200",
	onePage: true
});

// Sticky Menu 
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 230) {
		$(".header-sticky").removeClass("sticky");
	} else {
		$(".header-sticky").addClass("sticky");
	}
});

// owlCarousel
$('.testimonial_active').owlCarousel({
    loop:true,
    margin:20,
	items:3,
	stagePadding: 2,
	navText:['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
    nav:true,
	// dots:false,
    responsive:{
        0:{
            items:1,
			nav:false
        },
        480:{
            items:1,
			nav:false
        },
        770:{
            items:2
        },
        1200:{
            items:3
        }
    }
})


/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});


// isotop
$('.grid').imagesLoaded( function() {
	// init Isotope
	var $grid = $('.grid').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
		// use outer width of grid-sizer for columnWidth
		columnWidth: 1 
	  }
	});

	// filter items on button click
	$('.portfolio_btn').on( 'click', 'button', function() {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	});
});


//for menu active class
$('.portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});




// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="fas fa-angle-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});

// WOW active
new WOW().init();
 
// counterUp
$('.counter').counterUp({
    delay: 10,
    time: 1000
});

// menu active 
$('.main_menu ul li').on('click', function(){
	$(this).addClass('menu_active').siblings().removeClass('menu_active')
});


})(jQuery);

