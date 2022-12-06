// nav 사이드바 이벤트

    $('.btn_nav_open').click(function(e){

        e.preventDefault();

        $('.btn_nav_open').on('click', function(){
            $('nav').fadeIn(300);
            return false;
        })

        $('nav').on('mouseleave', function(){
            $('nav').fadeOut(300);
            return false;
        })
    })
