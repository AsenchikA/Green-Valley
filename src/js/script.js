$(document).ready(function(){

  var toggler = document.getElementById("toggler");
  toggler.onclick = function(e){
    e.preventDefault();
    // toggler.classList.toggle("toggler--close");
    document.getElementById('main-nav').classList.toggle('main-nav--visible');
  }

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

  $('#reviews-carousel').slick({
      slidesToShow: 2,
      dots: false,
      arrows: true,
      nextArrow: '<i class="reviews__arrows reviews__arrows--next"></i>',
      prevArrow: '<i class="reviews__arrows reviews__arrows--prev"></i>',
      responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });

  $('#action-carousel').slick({
    arrows: false,
    dots: true,
    slidesToShow: 1
  });

 $('#promo-big').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '#promo-thumbs'
});
$('#promo-thumbs').slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  infinite: true,
  asNavFor: '#promo-big',
  dots: false,
  focusOnSelect: true
});

$('#econom-gallery').slick({
    arrows: true,
    dots: false,
    slidesToShow: 1
  });

// $('input').blur(function () {
// 07
//     var min = 5;
// 08
//     span = $(this).next('span');
// 09
//     if(this.value.length < min) span.html('слово должен содержат более ' + (min-1) + ' символов, гы :=)) ');
// 10
//   });

$('.booking-date__item').blur(function (){
  if (($('#entry-day').val().length==2) && ($('#entry-month').value.length == 2) && ($('#entry-year').value.length == 4)){
    $('#entry-date').addClass('booking-date__item--done'),
    $('#entry-month').addClass('booking-date__item--done'),
    $('#entry-year').addClass('booking-date__item--done')
  }
});


})
