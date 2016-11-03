$(document).ready(function(){
    if($(window).width() > 1024) {    
        $('.menu_icon').click(function(){
            if ($('.sections_wrapper').hasClass('transformed')) {
                $('.sections_wrapper').removeClass('transformed');
                $(this).removeClass('menu_icon_clicked');
                $('.sections_wrapper').addClass('not_transformed');
            } else {
                $('.sections_wrapper').addClass('transformed');
                $(this).addClass('menu_icon_clicked');
            }
        });

        $('.menu_icon').click(function(){

        });
    } else 
        $('.menu_icon').click(function(){
            if ($('.menu').hasClass('mobile_menu_open')) {
                $('.menu').removeClass('mobile_menu_open');
                $(this).removeClass('menu_icon_clicked');
            } else {
                $('.menu').addClass('mobile_menu_open');
                $(this).addClass('menu_icon_clicked');
            }
        });

});