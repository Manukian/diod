$(document).ready(function(){
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
    
    $('.calculator').click(function(){
        var calc_width = $('.left_side').width() - 86;
        var calc_height = $('.left_side').height() - 86;
        $(this).width(calc_width);
        $(this).height(calc_height);
        $(this).addClass('calculator_open');
    });
    
    $('.menu_icon').click(function(){
        
    });
});