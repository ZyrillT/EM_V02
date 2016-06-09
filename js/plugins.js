// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

// This is the CSS Menu Script

( function( $ ) {
$( document ).ready(function() {
// Cache the elements we'll need
var menu = $('#cssmenu');
var menuList = menu.find('ul:first');
var listItems = menu.find('li').not('#responsive-tab');

// Create responsive trigger
menuList.prepend('<li id="responsive-tab"><a href="#" style="color:#015;">Bluewin</a></li>');

// Toggle menu visibility
//menu.on('click', '#responsive-tab', function(event){
//	event.preventDefault();
//	listItems.slideToggle('fast');
//	listItems.addClass('collapsed');
//});
});
} )( jQuery );





			$(document).ready(function() {

//** Find overlay slider in main.js 

			$('.homepage-first-content-slider').slick({
			        dots: false,
			        arrows:true,
			        infinite: true,
			        speed: 1000,
			        slidesToShow: 5,
			        slidesToScroll: 1,
			        autoplay:false,
			        variableWidth: true,
			        centerMode: true,
			        autoplaySpeed: 2000,
			        responsive: [
    				{
    				  breakpoint: 768,
				      settings: {
				      arrows: false,
				      slidesToShow: 2,
				      slidesToScroll: 1,
				      variableWidth: false,
				      centerMode: false,
				      dots: true
				      }
					},
					
    				{
    				  breakpoint: 480,
				      settings: {
				      arrows: false,
				      slidesToShow: 1,
				      slidesToScroll: 1,
				      variableWidth: false,
				      centerMode: false,
				      dots: true
				      }
					}

					
					
					]
			        
			    });

			$('.homepage-fullscreen-slider').slick({
			        dots: false,
			        infinite: true,
			        speed: 1000,
			        slidesToShow: 1,
			        slidesToScroll: 1,
			        autoplay:false,
			        autoplaySpeed: 2000,
			        responsive: [
    				{
    				  breakpoint: 768,
				      settings: {
				      slidesToShow: 1,
				      slidesToScroll: 1,
				      arrows:false,
				      
      				  }
    				}
    				]
			    });
			    
				$('.homepage-second-content-slider').slick({
			        dots: false,
			        arrows:true,
			        swipe:true,
			        infinite: true,
			        speed: 1000,
			        slidesToShow: 3,
			        slidesToScroll: 1,
			        autoplay:false,
			        adaptiveHeight: true,
			        responsive: [
    				{
    				  breakpoint: 768,
				      settings: {
				      slidesToShow: 2,
				      slidesToScroll: 1,
				      arrows:true,
				      dots:false,
				      swipe:true
      				  }
    				},
    				
    				{
    				  breakpoint: 480,
				      settings: {
				      slidesToShow: 1,
				      slidesToScroll: 1,
				      arrows:true,
				      dots:false,
				      swipe:true
      				  }
    				}

    				
    				]
			    });


			    
	
			});
			



