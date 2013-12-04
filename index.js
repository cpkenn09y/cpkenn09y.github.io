attachListeners = function() {
  $('button#about-me').on('click', function() {
    $('#area-to-populate').append(ABOUTME)
  })
}

$(document).ready(attachListeners)