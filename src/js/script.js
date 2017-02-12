$(document).ready(function(){

  var toggler = document.getElementById("toggler");
  toggler.onclick = function(e){
    e.preventDefault();
    // toggler.classList.toggle("toggler--close");
    document.getElementById('main-nav').classList.toggle('main-nav--visible');
  }

  // $("#promo-carousel").owlCarousel({
  //   items: 1,
  //   loop: true,
  //   dots: false
  // })

  $('#promo-thumbs').owlCarousel({
    loop: true,
    dots:false,
    center: true,
    items: 7,
  })

  $('#gallery-thumbs a').on('click', function(event){
    event.preventDefault();
    var mainImageUrl = $(this).attr('href');
    $('#gallery-main-img').attr('src',mainImageUrl);
  });

  $('#promo-tabs--1').on('click', function(event){
    event.preventDefault();
    $('#promo-tabs--2').removeClass('promo-tabs__item--active');
    $('#promo-tabs--1').addClass('promo-tabs__item--active');
    $('#promo-company').removeClass('promo-slider__item--active');
    $('#promo-family').addClass('promo-slider__item--active');
  });

  $('#promo-tabs--2').on('click', function(event){
    event.preventDefault();
    $('#promo-tabs--1').removeClass('promo-tabs__item--active');
    $('#promo-tabs--2').addClass('promo-tabs__item--active');
    $('#promo-family').removeClass('promo-slider__item--active');
    $('#promo-company').addClass('promo-slider__item--active');
  });

  $('#reviews-carousel').owlCarousel({
    loop: true,
    dots:false,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      }
    }
  })

  // $('#action-carousel').slick({
  //   // arrows: false,
  //   // centerMode: true,
  //   // dots: true,
  //   // slidesToShow: 1
  // });
})
