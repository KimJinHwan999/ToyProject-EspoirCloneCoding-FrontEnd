



    $(function(){

        // $(selector).animate({style}, speed, easing, callback)
        $('.imgbox_01').hover(function(){
           $('.lb_selectBox').css({'left':'45%', 'top':'35%'});
       })
    
    
       // main scoll 이벤트
        $(document).on('scroll', function () {
           let _scroll = $(window).scrollTop();
           let amount = (_scroll*0.3)-300;
           let descbox01Offset = $('.descbox_01').offset();
           let lbtit03Offset = $('.lb_tit_03').offset();
           let lbtit04Offset = $('.lb_tit_04').offset();
           let lbimg01Offset = $('.lb_img_01').offset();
           let lbimg03Offset = $('.lb_img_03').offset();
           let lbimg04Offset = $('.lb_img_04').offset();
           let lettersOffset = $('.letters').offset();
           
          
           console.log(_scroll)
    
           console.log(lettersOffset)
           
           
    
           if ($(document).scrollTop() >descbox01Offset.top - 500) {
            $('.descbox_01').css({right:amount + 'px'});
            $('.descbox_02').css({left:amount + 'px'});
           }else{
            $('.descbox_01').css({right:-150 + 'px'});
            $('.descbox_02').css({left:-150 + 'px'});
           }
    
           if($(document).scrollTop() > lbtit03Offset.top - 500){
            $('.lb_tit_03').css({opacity:1, 'transform':'translateY(-62px)'});
           }else{
            $('.lb_tit_03').css({opacity:0, 'transform':'translateY(-100%)'});
           }
    
           if($(document).scrollTop() > lbtit04Offset.top - 500){
            $('.lb_tit_04').css({opacity:1, 'transform':'translateY(-62px)'});
           }else{
            $('.lb_tit_04').css({opacity:0, 'transform':'translateY(-100%)'});
           }
    
           if($(document).scrollTop() > lbimg01Offset.top - 500){
            $('.lb_img_01').css({'transform':'scale(1)'});
            $('.lb_img_02').css({'transform':'scale(1)'});
           }else{
            $('.lb_img_01').css({'transform':'scale(1.2)'});
            $('.lb_img_02').css({'transform':'scale(1.2)'});
           }
    
           if($(document).scrollTop() > lbimg03Offset.top  - 500){
            $('.lb_img_03').css({opacity:1, 'transform':'scale(1)'});
           }else{
            $('.lb_img_03').css({opacity:0.4, 'transform':'scale(1.08)'});
           }
    
           if($(document).scrollTop() > lbimg04Offset.top - 500){
            $('.lb_img_04').css({'transform':'scale(1)'});
            $('.lb_img_05').css({'transform':'scale(1)'});
           }else{
            $('.lb_img_04').css({'transform':'scale(1.2)'});
            $('.lb_img_05').css({'transform':'scale(1.2)'});
           }
    
    
    
           if($(document).scrollTop() > lettersOffset.top -600){
            $('.letter').css({ 'transform' : 'rotateY(0deg)'});
            for(let i = 1; i < 16; i++){
                $(`.letters span:nth-child(${i})`).css({"transition" : '0.8'*('0.1'*`${i}`)+'s'});
            }
        
           }else{
            $('.letter').css({'transform' : 'rotateY(-90deg)'});
        
           }
    
           
    
           
        })
    
    
       // modal 이벤트
        $('.btn_open_lbpop').on('click', function(){
            $('.modal_wrap').removeClass('off');
        })

        $('.modal_popup_close').on('click', function(){
            $('.modal_wrap').addClass('off');
        })
        
       
    

    })    
 

    

    