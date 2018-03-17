// SLICK CAROUSEL
$(document).ready(function(){
  $('.slick-carousel').slick({
    // variableWidth: true,
    adaptiveHeight: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          arrows: false,
          slidesToShow: 3,
          }
      }
    ]
  });
});

// // Bootstap MODAl
// $('#myModal').on('shown.bs.modal', function () {
//   $('#myInput').focus()
// })
