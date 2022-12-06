// //mainpromo 이벤트
function switch_mainbanner_1(){

    if($('.bnr_1').hasClass('off')){
        // console.log("있다")
        $('.bnr_1').removeClass('off');
        $('.promo_slide').css('background-image', 'url(../images/banner_1.jpg)')
        return false;
    }

    if(!$('.bnr_1').hasClass('off')){
        // console.log("없다");
        $('.bnr_1').addClass('off');
        $('.promo_slide').css('background-image', 'url(../images/banner_2.jpg)')
        return false;
    }  
}

function switch_mainbanner_2(){

    if($('.bnr_2').hasClass('off')){
        // console.log("있다")
        $('.bnr_2').removeClass('off');
        $('.promo_slide').css('background-image', 'url(../images/banner_2.jpg)')
        return false;
    }

    if(!$('.bnr_2').hasClass('off')){
        // console.log("없다");
        $('.bnr_2').addClass('off');
        $('.promo_slide').css('background-image', 'url(../images/banner_1.jpg)')
        return false;
    }  
}


setInterval(function(){ switch_mainbanner_1()}, 5000);
setInterval(function(){ switch_mainbanner_2()}, 5000);
