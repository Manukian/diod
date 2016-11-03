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
    
    $('.menu_icon').click(function(){
        
    });

});