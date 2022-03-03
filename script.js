


    
    $(document).ready(function(){
        $('#bar').click(function(){
            $('.hidden').slideToggle();
            $('#bar').hide();
            // $(this).toggleClass('fa fa-bars');

            $('#cross').show();
        });

        $('#cross').click(function(){
            $('.hidden').slideToggle();
            // $(this).toggleClass('fa fa-times-circle');

            $('#bar').show();
            $('#cross').hide();
        });

        $('.nav_active').click(function(){
            $('.nav_active').removeClass('active');
            $(this).toggleClass('active');
        });
       
    });

