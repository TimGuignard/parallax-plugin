//Load all the function at the beginning, for scroll and for resize
$(document).ready(function(){
	
	$(".parallax-noSnap").timGuignardParallax({
            snapEffect : false
      });
	$(".parallax-intro").timGuignardParallax({
            heightForSnap : 50
	});
	$(".parallax").timGuignardParallax();

	/*$(".parallax").timGuignardParallax({
            snapEffect : true, //Default : true => allow Snap Effect
            heightForSnap : 300, //If snap Effect, number of pixel from where the element appers
            position: 'absolute' //Default: relative => other value: false, 'relative', 'fixed'
	});*/

});//end Document ready

