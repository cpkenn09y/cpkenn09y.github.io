animateProjectImages = function() {
  $('ul.project-images').before("<div id='nav-projects'></div>").cycle({
    fx: 'shuffle',
    speed: 800,
    timeout: 5000,
    pause: 1,
    pager: '#nav-projects'
  })
}

setUpApplication = function() {
  animateProjectImages()
}

$(document).ready(setUpApplication)