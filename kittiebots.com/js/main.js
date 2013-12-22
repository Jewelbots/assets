$(document).ready(function() {

	$(window).scroll(function() {

		if($(this).scrollTop() > 0 ) {
			$('.sub-headline').toggle();
			$('.lander-2').toggle();
		} 
	});  
});