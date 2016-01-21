/*
 *  TimGuignard Parallax Effect plugin
 *
 *  Copyright (c) 2016 Timothée Guignard
 *  Visit website : http://www.timguignard.com/lab
 *
 */



(function($){

	//plugin
	$.fn.timGuignardParallax = function(options){
		var opts = $.extend( {}, $.fn.timGuignardParallax.defaults, options );
		var scrollTop = $(window).scrollTop();


		return this.each(function(){
			//variables
			var element = $(this),
			topElement = $(element).position().top,
			calculateEffect,
			newScrollTop = $(element).offset().top,
			fixNewScrollTop = $(element).offset().top,
			testNewScrollTop = false,
			speedParallax = 2,
			windowHeight,
			halfWindowHeight;
			if(element.data("speed-parallax")){
				speedParallax = element.data("speed-parallax");
			}

			if(opts.snapEffect){
				$(this).css('opacity','0');
				fadInUpContent(element, opts.heightForSnap);
			}

			if(opts.position){
				$(this).css('position', opts.position);
			}
			
			updateVariables();

			$( window ).bind( 'scroll', function () {
				//update variables on scroll
				updateVariables();

				//fade in
				if(opts.snapEffect){
					fadInUpContent(element, opts.heightForSnap);
				}
			});

			function updateVariables(){
				windowHeight = window.innerHeight ? window.innerHeight : $(window).height();
				halfWindowHeight = windowHeight/2; 
				scrollTop = $(window).scrollTop();
				newScrollTop = scrollTop - fixNewScrollTop + halfWindowHeight + (element.height()/2);// == css TOP when element 1/2height of window

				//parallax
				calculateEffect = (-newScrollTop/speedParallax)+topElement;
				$(element).css("top",calculateEffect);

			}
			function fadInUpContent(elementToBeChecked, topBegin){//SCROLL FONCTION
				$(elementToBeChecked).each(function() {
			    	isOnView = isElementVisible(this, topBegin); 
			    	if(isOnView){
			        	$(this).addClass('animated0-5s snapEffect');
			        	if(!testNewScrollTop){
							testNewScrollTop = true;
			        	}
			    	}
				});
			}
			function isElementVisible(elementToBeChecked, topBegin){
			    var TopView = $(window).scrollTop();
			    var BotView = TopView + $(window).height();
			    var TopElementChecked = $(elementToBeChecked).offset().top;
			    var BotElement = TopElementChecked + $(elementToBeChecked).height();
			    return (TopElementChecked <= BotView-topBegin);
			}
		});
	}

	//defaults
	$.fn.timGuignardParallax.defaults = {
	    "heightForSnap": 200,
	    "snapEffect": true,
	    "position": 'relative'
	};
})(jQuery);