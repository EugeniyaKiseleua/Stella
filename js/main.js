$(function () {

    // Menu opener hamburger
     $('.menu-open').click(function () {
      $('.menu-collapse').toggleClass('d-none').css('order', '');
         $('.menu').toggleClass('menu-opened');
   });


    // Fixed navigation
    $(window).scroll(function() {
        if ($(this).scrollTop() > 102){  
            $('.main-nav').addClass("sticky");
        }
        else{
            $('.main-nav').removeClass("sticky");
        }
    });

    // плавное перемещение страницы к нужному блоку
    $("a.go").click(function (e) {
        e.preventDefault();
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination }, 800);
    });


    // Большой слайдер   
    $('.slider').slick({
        dots: true,
        infinite: false,
        autoplay: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
    });


    // Preloader
    $(window).on('load', function () {
        var $preloader = $('#page-preloader'),
            $spinner   = $preloader.find('.spinner');
        $spinner.fadeOut();
        $preloader.delay(350).fadeOut('slow');
    });
});

