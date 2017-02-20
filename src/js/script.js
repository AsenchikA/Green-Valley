$(document).ready(function(){

  var toggler = document.getElementById("toggler");
  toggler.onclick = function(e){
    e.preventDefault();
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

$('.booking-date__item').blur(function () {
    var entryDay = $("#entry-day").val().length;
    entryMonth = $("#entry-month").val().length;
    entryYear = $("#entry-year").val().length;
    exitDay = $("#exit-day").val().length;
    exitMonth = $("#exit-month").val().length;
    exitYear = $("#exit-year").val().length;

    if ((entryDay==2) && (entryMonth == 2) && (entryYear == 4)){
      $("#entry-day").addClass('booking-date__item--done'),
      $("#entry-month").addClass('booking-date__item--done'),
      $("#entry-year").addClass('booking-date__item--done')
    }

    if ((exitDay==2) && (exitMonth == 2) && (exitYear == 4)){
      $("#exit-day").addClass('booking-date__item--done'),
      $("#exit-month").addClass('booking-date__item--done'),
      $("#exit-year").addClass('booking-date__item--done')
    }
  });

  $('.booking-person__input').change(function(){
    $(this).addClass('booking-person__input--done')
  });

  $("#reserve-btn").on('click', function(event){
    event.preventDefault();
    $(".pay-total__error").css("display", "block"); // вывод на экран блока о недостаточности данных
    $(".pay-total__record").text(""); // очистка данных при повторном нажатии на кнопку о необходимости заполнения полей
    var errors = 0; // подсчёт ошибок
    errorsEntry = 0;
    errorsExit = 0;
    contentError = "";
    idContent = "";



    $('.booking-date__entry>.booking-date__item').each(function(){
      if ($(this).val().length == 0) {
        errors = errors + 1;
        errorsEntry = errorsEntry +1;
      }
    });

    if (errorsEntry != 0) {
      contentError = $('.booking-date__entry>.booking-date__title').text();
      $(".pay-total__record").append(contentError + ", ");
    }

    $('.booking-date__exit>.booking-date__item').each(function(){
      if ($(this).val().length == 0) {
        errors = errors + 1;
        errorsExit = errorsExit +1;
      }
    });

    if (errorsExit != 0) {
      contentError = $('.booking-date__exit>.booking-date__title').text();
      $(".pay-total__record").append(contentError + ", ");
    }

    $('.booking-person__input').each(function(){
      if ($(this).val().length == 0) {
        errors = errors + 1;
        contentError = $(this).attr("placeholder"); // получение названия незаполненного поля
        $(".pay-total__record").append(contentError + ", "); // вставка названия незаполненного поля в блок информирования об ошбике
      }
    });

    if ($('#pay-now').attr('checked') == 'checked'){
      $('.pay-methods__data').each(function(){
        if ($(this).val().length == 0) {
          errors = errors + 1;
          idContent = $(this).attr('id');
          contentError = $("[for='" +idContent+ "']").text(); // получение названия незаполненного поля
          $(".pay-total__record").append(contentError + ", ");
        }
      });
    };

    if (errors == 0){
      $(".pay-total__success").css("display", "block"); // вывод на экран блока с ценой при достаточном заполнении всех полей формы
    }
  });

})
