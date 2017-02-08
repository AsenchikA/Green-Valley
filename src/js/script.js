$(document).ready(function(){

  var toggler = document.getElementById("toggler");
  toggler.onclick = function(e){
    e.preventDefault();
    // toggler.classList.toggle("toggler--close");
    document.getElementById('main-nav').classList.toggle('main-nav--visible');
  }

  $("#promo-carousel").owlCarousel({
    items: 1,
    loop: true,
    dots: false
  })

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
})
