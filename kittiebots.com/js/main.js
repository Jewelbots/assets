$(document).ready(function() {
   $('#learn').click(function(){
    $('.intro').fadeOut(function(){
    $('.lander-2').toggle();});
   })
   $('#mail').click(function(){
    $('form').submit();
   })
	
});
