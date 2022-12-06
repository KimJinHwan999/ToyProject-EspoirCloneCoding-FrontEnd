
// id, pw 포커스, 블러
$('.userid_box, .userpw_box').on('focus', function(){
    $(this).css('border', '3px solid #5c95f0');
})

$('.userid_box, .userpw_box').on('blur', function(){
    $(this).css('border', '1px solid black');
})


// 입력값 확인

$('#login_form').submit(function(e){

    e.preventDefault();


    let id_pattern = /^[A-Za-z0-9_\-]{5,20}$/;
    let id_value = $('#userid_box').val();
    if(!id_pattern.test(id_value)){
        alert("아이디는 영문 대.소문자, 숫자 _,-만 입력 가능하고 5에서 20자리");
        $('#userid_box').val('');
        $('#userid_box').focus();
        console.log('아이디');
        return false;
    }

    let pw_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^*()\-_=+\\\|\[\]{};:\'",.<>\/?]).{8,16}$/;
    let pw_value = $('#userpw_box').val();
    if(!pw_pattern.test(pw_value)){
        alert("비밀번호는 영문 대문자와 소문자, 숫자, 특수문자를 하나 이상 포함하여 8~16자가 되도록 작성하세요");
        $('#userpw_box').val('');
        $('#userpw_box').focus();
        console.log('비밀번호');
        
        return false;
    }


    alert('검사완료');




})