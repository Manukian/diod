$(document).ready(function(){
    $('.video_remove').show();
    
    $('.selectable').click(function(){
        if ($(this).siblings().hasClass('square_selected')) {
            $(this).siblings().removeClass('square_selected');
        }
        $(this).addClass('square_selected');
    });
    
    $('.video_support').click(function(){
        if ($(this).hasClass('square_selected')) {
            $(this).removeClass('square_selected');
        } else {
            $(this).addClass('square_selected');
        }
    });
    
    var chosen_color = 'Красненький'

    $('.video_display').click(function(){
        $('.step').css('display','inline-block');
        $('.video_remove').hide();
        chosen_color = 'Видосики';
        $('.video_support').removeClass('square_selected');
    });
    
    $('.red_color').click(function(){
        $('.step').hide();
        $('.video_available').show();
        $('.step').removeClass('square_selected');
        $('.video_available').addClass('square_selected');
        $('.video_remove').show();
        chosen_color = 'Красненький';
    });
    
    $('.another_color').click(function(){
        $('.step').hide();
        $('.video_available').show();
        $('.step').removeClass('square_selected');
        $('.video_available').addClass('square_selected');
        $('.video_remove').show();
        chosen_color = 'Не Красненький';
    });
    
    $('.count').click(function(){
        var filled = false;
        $('.size').each(function(){
           if($(this).val() != 0) {
               filled = true;
           } else {
               filled = false;
               return false;
           }
        });
        $('.size').each(function(){
            if(!$.isNumeric($(this).val())) {
                filled = false;
                $(this).css('border-color','red');
                $('.summary').css('opacity','0');
            } else {
                $(this).css('border-color','#0069ff');
            }
        });
        
        var chosen_step = $('.step.square_selected').html();
        var chosen_unit = $('.unit.square_selected').html();
        
        if (filled) {
            var unit = 1;
            $('.page_header').addClass('page_header_transformed');
            $('.summary').css('opacity','1');
            if ($('.sm').hasClass('square_selected')) {
                    unit = 1;
            }
            else {
                    unit = 0.01;   
            }
            var price = ($('.display_width').val() * $('.display_height').val() * unit);
            var special_price = price*0.245;
            var chosen_display = chosen_color + '  P' + chosen_step + '  LED  ' + $('.display_width').val() + ' * ' + $('.display_height').val() + '  ' + chosen_unit;
            $('.chosen_display').html(chosen_display);
            $('.price').html(price);
            $('.special_price').html(special_price);           
        } else {
            alert('в полях ширина и высота должны быть числа от 0-9');
        }

    });
    
    $('.clear').click(function(){
        $('.summary').css('opacity','0');
        $('.page_header').removeClass('page_header_transformed');
        $('.display_width').val(null);
        $('.display_height').val(null);
        $('.red_color').trigger('click');
    });
});