!function($){$.fn.timGuignardParallax=function(i){var n=$.extend({},$.fn.timGuignardParallax.defaults,i),t=$(window).scrollTop();return this.each(function(){function i(){d=window.innerHeight?window.innerHeight:$(window).height(),l=d/2,t=$(window).scrollTop(),r=t-p+l+s.height()/2,f=-r/c+e,$(s).css("top",f)}function o(i,n){$(i).each(function(){isOnView=a(this,n),isOnView&&($(this).addClass("animated0-5s snapEffect"),h||(h=!0))})}function a(i,n){var t=$(window).scrollTop(),o=t+$(window).height(),a=$(i).offset().top,s=a+$(i).height();return o-n>=a}var s=$(this),e=$(s).position().top,f,r=$(s).offset().top,p=$(s).offset().top,h=!1,c=2,d,l;s.data("speed-parallax")&&(c=s.data("speed-parallax")),n.snapEffect&&($(this).css("opacity","0"),o(s,n.heightForSnap)),n.position&&$(this).css("position",n.position),i(),$(window).bind("scroll",function(){i(),n.snapEffect&&o(s,n.heightForSnap)})})},$.fn.timGuignardParallax.defaults={heightForSnap:200,snapEffect:!0,position:"relative"}}(jQuery);