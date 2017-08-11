// Swiper
var mySwiper = new Swiper ('.swiper-container', {
    effect:"fade",
    speed:1000,
    autoplay: 2500,
    autoplayDisableOnInteraction: false
  })

// Lightbox
$('.lightbox').featherlight();

//Form
$('.keep-contact input[type="email"]').keyup(function() {
    var value=$.trim($(".keep-contact input[type='email']").val());
    $('.keep-contact, .confirm').addClass('active');
    if(value=='') {
        $('.keep-contact, .confirm').removeClass('active');
    }
});