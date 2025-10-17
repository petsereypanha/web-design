$(document).ready(function() {
    $('.fa-bars').click(function() {
        $(this).toggleClass('fa-times');
        $('.nav').toggleClass('nav-show');
    })
    $(window).on('load scroll', function() {
        $('.fa-bars').removeClass('fa-times');
        $('.nav').removeClass('nav-show');
        if($(window).scrollTop() > 10){
            $('header').addClass('bg-[#f3f3f3] shadow-lg py-2 px-4');
        }else{  
            $('header').removeClass('bg-[#f3f3f3] shadow-lg py-2 px-4');
        }
    })
    $('.facility').magnificPopup({
        delegate: 'a',
        type : 'image',
        gallery: {
            enabled: true
        }
    });
});