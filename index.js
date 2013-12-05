// attachListenerToAboutMeButton = function() {
//   $('button#about-me').on('click', function() {
//     $('#area-to-populate').append(ABOUTME)
//   })
// }

attachListenerToPreviousButton = function() {
  $('.button-previous').click(function() {
    console.log('YOU PUSHED PREVIOUS')
    if(current - step < 0 || current - step > maximum - visible) {return; }
    else {
      current = current - step;
      $('#my_carousel ul').animate({'left': -(liSize * current)}, speed, null);
    }
  return false;
  });
}

attachListenerToNextButton = function() {
  $('.button-next').click(function() {
    console.log('YOU PUSHED NEXT')
    if(current + step < 0 || current + step > maximum - visible) {return; }
    else {
      current = current + step;
      $('#my_carousel ul').animate({'left': -(liSize * current)}, speed, null);
    }
  return false;
  });
}

attachListeners = function() {
  // attachListenerToAboutMeButton()
  attachListenerToPreviousButton()
  attachListenerToNextButton()
}

attachCSStoCarousel = function() {
  $('#my_carousel').css("width", divSize+"px").css("height", carousel_height+"px").css("visibility", "visible").css("overflow", "hidden").css("position", "relative");

  $('#my_carousel ul').css("width", ulSize+"px").css("left", -(current * liSize)).css("position", "absolute");
}

instantiateVariables = function() {
  step = 1
  current = 0
  maximum = $('#my_carousel ul li').size()
  visible = 1
  speed = 200
  liSize = 331
  carousel_height = 161
  ulSize = liSize * maximum
  divSize = liSize * visible
  debugger
}

beginApplication = function() {
  instantiateVariables()
  attachCSStoCarousel()
  attachListeners()
}



$(document).ready(beginApplication)