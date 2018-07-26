$('#main-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 300000,
      dots: true,
      infinite: true,
      adaptiveHeight: true,
      arrows: false
  });

  var video = $('#main-slider .slick-active').find('video').get(0).play();

  $('#main-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    $('#main-slider .slick-slide').find('video').get(0).pause();
    var video = $('#main-slider .slick-active').find('video').get(0).play();
});
