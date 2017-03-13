$(document).ready(function(){

  var toggler = document.getElementById("toggler"); // раскрытие меню
  toggler.onclick = function(e){
    e.preventDefault();
    document.getElementById('main-nav').classList.toggle('main-nav--visible');
  }

  $('#promo-tabs--1').on('click', function(event){ //переключение промо-табов на странице index.html
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

  $('#reviews-carousel').slick({ // карусель отзывов на странице index.html
      slidesToShow: 2,
      slidesToScroll: 2,
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
      ]
  });

  if (($(document).width()<1200) && ($(document).width()>=768)){ // отключение карусели отзывов на странице index.html при разрешении, меньшим 1200px, но большим 768
    $('#reviews-carousel').slick('destroy');
  }

  $(window).resize(function(){ // подключение карусели отзывов на странице index.html при изменении размеров окна браузера до необходимых
    if (($(document).width()<1200) && ($(document).width()>=768)){
      $('#reviews-carousel').slick('destroy');
    }
    else {
      $('#reviews-carousel').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
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
        ]
      });
    }
});

  $('#action-carousel').slick({ // галерея в блоке "Акции и предложения" на странице index.html
    arrows: false,
    dots: true,
    slidesToShow: 1
  });

 $('#promo-big').slick({ // галерея на странице index.html
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

$('#econom-gallery').slick({ // галерея на странице room_single
    slidesToShow: 1,
    dots: false,
    arrows: true,
    nextArrow: '<i class="room-gallery__arrows room-gallery__arrows--next"></i>',
    prevArrow: '<i class="room-gallery__arrows room-gallery__arrows--prev"></i>',
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            arrows: false,
          }
        }
      ]
  });

  $('#zoom-link').click( function(event){ // увеличение изображения из галереи
      event.preventDefault(); // выключaем стaндaртную рoль элементa
      var source = $('.slick-active').attr('src');
      $('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
        function(){ // пoсле выпoлнения предъидущей aнимaции
          $('#zoom-photo img').attr('src', source);
          $('#zoom-photo')
            .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
            .animate({opacity: 1}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
      });
      $('body').addClass('js-over');
    });
    /* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
    $('#overlay').click( function(){ // лoвим клик пo крестику или пoдлoжке
      $('#zoom-photo')
        .animate({opacity: 0}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
          function(){ // пoсле aнимaции
            $(this).css('display', 'none'); // делaем ему display: none;
            $('#overlay').fadeOut(400); // скрывaем пoдлoжку
          }
        );
        $('body').removeClass('js-over');
    });

$('.booking-date__item').blur(function () {  // проверка достаточности введенных данных в шаге 1 на странице бронирования
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

  $('.booking-person__input').change(function(){ // проверка введения данных в шаге 4 на странице бронирования
    $(this).addClass('booking-person__input--done')
  });

  $("#reserve-btn").on('click', function(event){ // проверка всей формы на странице бронирования на достаточность ввода данных
    event.preventDefault();
    $(".pay-total__error").css("display", "block"); // вывод на экран блока о недостаточности данных
    $(".pay-total__record").text(""); // очистка данных при повторном нажатии на кнопку о необходимости заполнения полей
    var errors = 0; // подсчёт ошибок
    errorsEntry = 0;
    errorsExit = 0;
    contentError = "";
    idContent = "";



    $('.booking-date__entry>.booking-date__item').each(function(){ // проверка шага 1
      if ($(this).val().length == 0) {
        errors = errors + 1;
        errorsEntry = errorsEntry +1;
      }
    });

    if (errorsEntry != 0) { // вывод сообщения о недостаточности данных в шаге 1
      contentError = $('.booking-date__entry>.booking-date__title').text();
      $(".pay-total__record").append(contentError + ", ");
    }

    $('.booking-date__exit>.booking-date__item').each(function(){   // проверка шага 4
      if ($(this).val().length == 0) {
        errors = errors + 1;
        errorsExit = errorsExit +1;
      }
    });

    if (errorsExit != 0) {  // вывод сообщения о недостаточности данных в шаге 4
      contentError = $('.booking-date__exit>.booking-date__title').text();
      $(".pay-total__record").append(contentError + ", ");
    }

    $('.booking-person__input').each(function(){  // проверка шага 5
      if ($(this).val().length == 0) {
        errors = errors + 1;
        contentError = $(this).attr("placeholder"); // получение названия незаполненного поля
        $(".pay-total__record").append(contentError + ", "); // вставка названия незаполненного поля в блок информирования об ошбике
      }
    });

    if ($('#pay-now').attr('checked') == 'checked'){  // вывод сообщения о недостаточности данных в шаге 5
      $('.pay-methods__data').each(function(){
        if ($(this).val().length == 0) {
          errors = errors + 1;
          idContent = $(this).attr('id');
          contentError = $("[for='" +idContent+ "']").text(); // получение названия незаполненного поля
          $(".pay-total__record").append(contentError + ", ");
        }
      });
    };

    if (errors == 0){ // вывод на экран блока с ценой при достаточном заполнении всех полей формы
      $(".pay-total__success").css("display", "block");
    }
  });

   $("#bookingValidate").validate({  // валидация формы
       rules:{

            dateDay:{
                min: 1,
                max: 31,
            },

            dateMonth:{
                min: 1,
                max: 12,
            },

            dateYear:{
                min: 2017,
                max: 2018,
            },

            phone:{
                digits: true,
            },

            email:{
                email: true,
            },

            cvv:{
                digits: true,
                minlength: 3,
                maxlength: 3,
            },
            creditCard:{
              creditcard: true,
            }
       },

       messages:{

            dateDay:{
                min: "",
                max: "",
            },

            dateMonth:{
                min:"",
                max: "",
            },

            dateYear:{
                min: "",
                max: "",
            },

            phone:{
                digits: "",
            },

            email:{
                email: "",
            },

            cvv:{
                digits: "",
                minlength: "",
                maxlength: "",
            },

            creditCard:{
              creditcard: "",
            }
       }
    });

})
