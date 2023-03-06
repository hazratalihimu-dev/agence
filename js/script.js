$(function(){

  // BANNER SLIDER START
  $('.banner-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    pauseOnHover: false,
    dots: true,
  })
  // BANNER SLIDER END

  // SUCCESS COUNTER START
  $('.counter').counterUp({
    delay: 10,
    time: 1500
});
  // SUCCESS COUNTER END

  // CLIENT SLIDER STERT
  $('.client-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    pauseOnHover: false,
    prevArrow: '.right',
    nextArrow: '.left',
    centerMode: true,
    centerPadding: '0px',
  })
  // CLIENT SLIDER END
  
})