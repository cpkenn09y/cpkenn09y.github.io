$(document).ready(function() {
  setTimeout(function() {
    $('#header-text').toggleClass('hide').addClass("animated bounceInLeft");
  }, 1000);

  $('.img-portfolio').on('click', function(event) {
    event.preventDefault();
    $('#pt-'+this.id).toggleClass('hide').addClass('animated fadeInDown');
  });
})