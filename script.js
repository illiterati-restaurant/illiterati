function scrollTo(anchor, options) {
  var defaultOptions = {
    selector: 'html, body',
    parent: false,
    animate: true,
    offset: 0,
    speed: 1000,
    easing: 'swing',
  };

  options = $.extend({}, defaultOptions, options);
  const $scrollWindow = $(options.selector)
  const offset = (options.parent ? anchor[0].offsetParent.offsetTop : $(anchor).offset().top) - options.offset

  if (anchor.length) {
    if (options.animate) {
      $scrollWindow.stop().animate({
        scrollTop: offset
      }, options.speed, options.easing);
    } else {
      $scrollWindow.scrollTop(offset);
    }
  }
}

function setImageWidth($images) {
  var viewportHeight = $(window).height() * .8;

  $images.each(function(index, image) {
    var $image = $(image);
    newWidth = Math.ceil(($image.width() * viewportHeight) / $image.height());
    $image.css('width', newWidth);
  });
}

$(document).ready(function(){

  // initializing slick carousel
  $('.slick-carousel').slick({
    // variableWidth: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
        }
      },
    ]
  });

  // handing image demensions to fit in viewport
  var $carousel = $('#slickCarousel');
  var $galleryImages = $carousel.find('.slick-image img');

  setImageWidth($galleryImages);

  $(window).resize(function() {
    setImageWidth($galleryImages);
  });

  // adding section title to navbar brand
  $('#scrollSpy').on('activate.bs.scrollspy', function(event) {
    $('.navbar-brand').html(event.target.innerText);
  });

  // navbar click listener
  $('.navbar-nav a').on('click', function(event) {

    // scroll to anchor
    var anchor = $(event.target).attr('href');

    if (anchor.indexOf('#') === 0) {
      var $anchor = $(anchor);

      scrollTo($anchor, {
        offset: 80
      });
    }

    // collapse navbar
    $('.navbar-collapse').removeClass('in')
  });
});
