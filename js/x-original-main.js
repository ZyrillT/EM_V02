var elementName ="";
var linkName = "";
var counter = 0; 
var startSticky;
var stickyHeight;
var stopSticky;
var glBgFixed;
var glBgBottom;
var glSsdSlider = false;
var glIsSsd = false;
var winWidth = 0;
var winHeight = 0;
var winHalfHeight = 0;




$(document).ready(function() {
	getWidthAndHeight();	
});

function getWidthAndHeight()
{
winWidth = $(window).width();
winHeight = $(window).height();
winHalfHeight = winHeight/2;

$('div.full-screen').css({'width': winWidth,'height': winHeight,});
$('div.half-full-screen').css({'width': winWidth,'height': winHeight,});
$('div.full-height').css({'width': '','height': winHeight,});

if(winWidth >= 768) 
	{$("body").addClass("no-ssd");
	glIsSsd = "false";
	$('article.scrollTextOnSticky').css({'min-height': winHeight,});
	
	K7UnSlickSSD();
	K7InitScroll();
	} 
else 
	{
	$("body").removeClass("no-ssd");
	$('aside.interview.left').css({'top':'0px'});
	glIsSsd = "true";
	K7SlickSSD();
	};

if(winHalfHeight<=400){winHalfHeight=400};

$('.no-ssd div.half-full-screen').css({'width': winWidth,'height': winHalfHeight,});

}

$(window).resize(function() {
getWidthAndHeight();

});

function K7SlickSSD()
{
if(glSsdSlider==false)
	{
	$('div.ssd-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay:false,
		arrows:false,
		dots:false,
	 	adaptiveHeight: false,
	});
	glSsdSlider=true;
	}
}

function K7UnSlickSSD()
{
//alert(glSsdSlider);
if(glSsdSlider==true)
	{
	$('div.ssd-slider').slick('unslick');
	glSsdSlider=false;
	}
}

$(function K7showHide() {

		$('nav.sticky-navigation a').click(function(event){
		
		$('a.active-link').removeClass('active-link');  /* remove class from last active link */
		$(this).addClass('active-link');	 /* set new active link */
		return true;
		});
		
		
		$(".close-overlay").click(function(event){
		event.preventDefault();
		$("div#section-overlay").slideUp(400, function(){$("div.overlay-slider").slick('unslick');});		
		$("body").toggleClass("no-scrolling");
		
		});

		$(".open-overlay").click(function(event){
		event.preventDefault();
		$("div#section-overlay").slideDown(400, function(){});		
		$("body").toggleClass("no-scrolling");

		if(winWidth >= 768)
		{
			$("div.overlay-slider").slick({
	        slidesToShow: 3,
	        slidesToScroll: 1,
	        autoplay:false, 
	        arrows:true,
	        dots:false,
	        swipe:true
	        
	        });
		}
		
		else

		{
			$("div.overlay-slider").slick({
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        autoplay:false, 
	        arrows:true,
   	        dots:false,
	        swipe:true

	        });
		}

		
		
		});
		
		
		$(".open-impressum-overlay").click(function(event){
		event.preventDefault();
		$("#section-impressum-overlay").slideDown(400, function(){});		
		});

		$(".close-impressum-overlay").click(function(event){
		event.preventDefault();
		$("#section-impressum-overlay").slideUp(400, function(){});		
		});
		
		
		
});
	

function K7InitScroll()
{

						// init controller
						var controller = new ScrollMagic.Controller({globalSceneOptions:{} });

						// build scenes
						new ScrollMagic.Scene({triggerElement: "#section-02 .scrollTextOnSticky", triggerHook: 'onLeave', offset: '1'})
										.setClassToggle("#section-02 .sticky-bg-container", "fixed") // add class toggle
										//.addIndicators() // add indicators (requires plugin)
										.addTo(controller);
						new ScrollMagic.Scene({triggerElement: "#section-03", triggerHook: 'onEnter'})
										.setClassToggle("#section-02 .sticky-bg-container", "unfixed") // add class toggle
										//.addIndicators() // add indicators (requires plugin)
										.addTo(controller);
						new ScrollMagic.Scene({triggerElement: "#section-04 .scrollTextOnSticky", triggerHook: 'onLeave', offset: '1'})
										.setClassToggle("#section-04 .sticky-bg-container", "fixed") // add class toggle
										//.addIndicators() // add indicators (requires plugin)
										.addTo(controller);
						new ScrollMagic.Scene({triggerElement: "#section-05", triggerHook: 'onEnter', offset: '0'})
										.setClassToggle("#section-04 .sticky-bg-container", "unfixed") // add class toggle
										//.addIndicators() // add indicators (requires plugin)
										.addTo(controller);
										
						// Show and hide Sticky Navigation with class toggle //

						new ScrollMagic.Scene({triggerElement: "#section-02", triggerHook: 'onLeave', duration:'300'})
										.setClassToggle(".sticky-navigation", "nav-in") // add class toggle
										//.addIndicators() // add indicators (requires plugin)
										.addTo(controller);

						new ScrollMagic.Scene({triggerElement: "#section-05", triggerHook: 'onCenter', duration:winHeight})
										.setClassToggle(".sticky-navigation", "nav-in") // add class toggle
										//.setClassToggle(".sticky-menu-link-05", "active-link") 
										//.addIndicators() // add indicators (requires plugin)
										.addTo(controller);
						
						new ScrollMagic.Scene({triggerElement: "#section-10", triggerHook: 'onCenter', duration:winHeight})
										.setClassToggle(".sticky-navigation", "nav-in") // add class toggle
										//.setClassToggle(".sticky-menu-link-10", "active-link") 
										//.addIndicators() 
										.addTo(controller);
										
						// Set active on scroll - did not work with multiple toggle so i mad enew scene				
						new ScrollMagic.Scene({triggerElement: "#section-02", triggerHook: 'onLeave', duration:'300'})
										.setClassToggle("a.sticky-menu-link-01", "active-link") 
										.addTo(controller);
	
						new ScrollMagic.Scene({triggerElement: "#section-05", triggerHook: 'onCenter', duration:winHeight})
										.setClassToggle("a.sticky-menu-link-05", "active-link") 
										.addTo(controller);

						new ScrollMagic.Scene({triggerElement: "#section-10", triggerHook: 'onCenter', duration:winHeight})
										.setClassToggle("a.sticky-menu-link-10", "active-link") 
										.addTo(controller);
			
										
						// animate scroll position Interview 1 //

						// new ScrollMagic.Scene({triggerElement: "#section-06", triggerHook: 'onEnter', duration: 600, offset: '800'})
										//.setTween("aside.interview.left", {y: "100%", ease: Linear.easeNone}) // the tween durtion can be omitted and defaults to 1

										//.addIndicators({name: "Tween (duration: 600)"}) // add indicators (requires plugin)
										// .addTo(controller);	

						// build tween
						var tween = new TimelineMax()
							.add([
								TweenMax.fromTo("#section-06 aside", 1, {scale: 1, autoAlpha: 0.5, top:200}, {top: 500, autoAlpha: 1, ease: Linear.easeNone}),
								TweenMax.fromTo("#parallaxText .layer2", 1, {scale: 2, autoAlpha: 0.3, left: 150}, {left: -175, ease: Linear.easeNone})
							]);

						// build scene
						var scene = new ScrollMagic.Scene({triggerElement: ".no-ssd #section-06", duration: $(window).height()})
										.setTween(tween)
										//.addIndicators()  add indicators (requires plugin)
										.addTo(controller);




						// animate opacity Interview 2

						new ScrollMagic.Scene({triggerElement: "aside.interview.right", triggerHook: 'onEnter', duration: 1200})
										.setTween("aside.interview.right", {opacity: 1}) 
										//.addIndicators({name: "Tween Opacity "}) // add indicators (requires plugin)
										.addTo(controller);	
										
						// init controller
						
						var controller = new ScrollMagic.Controller();
						

						// change behaviour of controller to animate scroll instead of jump
						controller.scrollTo(function (newpos) {
							TweenMax.to(window, 2, {scrollTo: {y: newpos}});
						});

						//  bind scroll to anchor links
						$(document).on("click", "a[href^='#']", function (e) {
							var id = $(this).attr("href");
							if ($(id).length > 0) {
								e.preventDefault();

								// trigger scroll
								controller.scrollTo(id);

									// if supported by the browser we can even update the URL.
								if (window.history && window.history.pushState) {
									history.pushState("", document.title, id);
								}
							}
						});



}






