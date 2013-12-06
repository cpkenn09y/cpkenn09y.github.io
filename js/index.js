attachListeners = function() {
  $('button#about-me').on('click', function() {
    $('#area-to-populate').append(ABOUTME)
  })
}

instantiateCarousel = function() {
  $('.carousel').carousel({
    interval: 2000
  })
}

applicationSetUp = function() {
  attachListeners()
  instantiateCarousel()
}

$(document).ready(applicationSetUp)