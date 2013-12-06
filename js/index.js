attachListeners = function() {
  $('button#about-me').on('click', function() {
    $('#area-to-populate').append(ABOUTME)
  })
}

applicationSetUp = function() {
  attachListeners()
}

$(document).ready(applicationSetUp)