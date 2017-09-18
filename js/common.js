//      Slick Slider Plugin

 $(document).ready(function(){
      $('.slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });
});

$(document).ready(function(){
    $('.case-study-slider').slick({
  dots: true,
  infinite: true,
  arrows: false,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
  });
});

//      Responsive menu plugin

$(document).ready(function(){
  var touch = $('.touch-menu');
  var menu = $('.main-nav');
     
  $(touch).on('click', function(e) {
    e.preventDefault();
    menu.slideToggle();
  });
  $(window).resize(function(){
    var wid = $(window).width();
    if(wid > 760 && menu.is(':hidden')) {
      menu.removeAttr('style');
            }
    });
});

//      Smooth scrolling plugin

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

$(document).ready(function(){
  $(".tab_item").not(":first").hide();
  $(".wrapper .tab").click(function() {
    $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");
});


//      ScrollUp plugin

$(document).ready(function(){
  $(function () {
    $.scrollUp({
      scrollName: 'scrollUp', // Element ID
      topDistance: '300', // Distance from top before showing element (px)
      topSpeed: 300, // Speed back to top (ms)
      animation: 'fade', // Fade, slide, none
      animationInSpeed: 200, // Animation in speed (ms)
      animationOutSpeed: 200, // Animation out speed (ms)
      activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });
  });
});

//     Usual PopUp

$(document).ready(function(){
  $('.open-fast').click(function(){
    var popup_id = $('#' + $(this).attr("rel"));
    $(popup_id).css({'top': $(window).scrollTop() + 80}).fadeIn();
    $('.popup-bg').fadeIn();
  })
  $('.popup-bg').click(function(){
    $('.popup-bg, .popup-fast').fadeOut();
  })
});

//      Magnific POPUP

$(document).ready(function(){
  $('.item').magnificPopup({
    removalDelay: 300,
    type: 'image',
    mainClass: 'mfp-fade'
  });
});
