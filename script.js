$(function(){
 $('#login-show').click(function(){
$('#login-modal').fadeIn();
 });

 $('.close-modal').click(function(){
   $('#login-modal').fadeOut();
 
});

$('.lesson-hover').hover(

function(){
 $(this).find('.text-contents').addClass('text-active');
},

function(){
$(this).find('.text-contents').removeClass('text-active');
}

);

});
