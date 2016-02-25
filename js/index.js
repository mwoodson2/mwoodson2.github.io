$(document).ready(function() {


$('.roundedImage').click(function() {
  $('section').hide();
  $(this).css('opacity', '0.5');
  $('div').not(this).css('opacity', '1' );
  $(this).next().slideToggle().css('display', 'inline-block');
});

$('.cloud').click(function(event) {
 // Get url from the <a> href attribute
    window.open("index.html","_self"); // Open the url in the current window. Set to "_blank" instead of "_self" to open in a new window.
    // event.preventDefault(); // Prevent default action (e.g. following the link)
    // return false;
});

$('button').click(function(event){
    event.preventDefault();
});



}); //end ready
