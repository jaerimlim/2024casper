$(document).ready(function(){

  let modal = `
    <div class="modal">
      <div class="m_inner">
        <a>
        <img src="./images/main_Popup_PC_450x600.jpg">
        </a>
        <p>
          <input type="checkbox" id="ch" class="m_left">
            <label for="ch">일주일간 열지 않음</label>
          <input type="button" value="닫기" id="c_btn"  class="m_rigth">
        </p>
      </div>
    </div>

  `
  $('body').append(modal);
  
  let ch = $('#ch');
  
  if($.cookie('popup')=='none'){
    $('.modal').hide();
  }

        //체크박스를 체크하고 '닫기'버튼 누르면 모달창이 닫힘
    function close_popup(){
    if(ch.is(':checked')){ //체크가 된 경우라면
      //쿠키 정보가 저장되어야함.
      $.cookie('popup','none',{expires:7, path:'/'});//쿠키정보를 popup, none값으로 생성한다.
      $('.modal').hide();
    }else{ //체크박스에 체크하지 않았다면
      //쿠키정보를 생성하지 않고 그냥 닫기
      $('.modal').hide();
    }
  }

  //닫기 버튼 클릭시 close_popup함수를 호출하여 실행

  $('#ch, #c_btn').click(function(){
    close_popup();
  })

  

  
  $('header').mouseenter(function(){
    $('header').addClass('h_act');
    $('header h1 img').attr('src','./images/logo-casper_black.png');
  });

  
  $('header').mouseleave(function(){
    let sPos = $(window).scrollTop();
    if(sPos>=1){
      // $('header').addClass('h_act');
      // $('header h1 img').attr('src','./images/logo-casper_black.png');
    }else{
      $('header').removeClass('h_act');
      $('header h1 img').attr('src','./images/logo-casper-white.png');
    }  
  });
  
  $(window).scroll(function(){
    let sPos = $(this).scrollTop();
    console.log(sPos);
    if(sPos>=1){
        $('header').addClass('h_act');
        $('header h1 img').attr('src','./images/logo-casper_black.png');
    }else{
      $('header').removeClass('h_act');
      $('header h1 img').attr('src','./images/logo-casper-white.png');
    }
    
  });
  
  //새로고침 시 스크롤이벤트 업데이트 ! 
  $(window).trigger('scroll');

  
  //1. 내비게이션 변수선언
  let nav = $('#m_navi a');

  //2. 클릭시 해당 아이디 값을 찾아서 페이지 상단으로 scroll해서 올리기
  
  nav.click(function(){
    let i = $(this).index();
    console.log(i); //0,1,2,3,4
    
    let id_name = $(this).attr('href');
    let offTop = $(id_name).offset().top;
    $('html, body').animate({scrollTop :offTop - 70}, 500);


    //i가 0일떄 3번쨰 section(#intro) 인덱스번호 2번이 나와야함
    // if(i==0){
    //   $('html, body').animate({scrollTop:$('#intro').offset().top},500);
    // }else if(i==1){
    //   $('html, body').animate({scrollTop:$('#drive_con').offset().top},500);
    // }else if(i==2){
    //   $('html, body').animate({scrollTop:$('#event_con').offset().top},500);
    // }else if(i==3){
    //   $('html, body').animate({scrollTop:$('#buy_con').offset().top},500);
    // }else{
    //   $('html, body').animate({scrollTop:$('#cs_con').offset().top},500);
    // }
    //i가 1일떄 4번쨰 section(#drive_con) 인덱스번호 3번이 나와야함
    //i가 2일떄 5번쨰 section(#event_con) 인덱스번호 4번이 나와야함
    //i가 3일떄 6번쨰 section(#buy_con) 인덱스번호 5번이 나와야함
    //i가 4일떄 7번쨰 section(#cs_con) 인덱스번호 6번이 나와야함

    // 섹션의 인덱스를 기반으로 스크롤
    // let sectionIndex = i + 2;
    // $('html, body').animate({
    // scrollTop: $('#' + $('section').eq(sectionIndex).attr('id')).offset().top
    // }, 500);
  });


  // $('top버튼').click(function(
  //   $('html, body').animate({'scrollTop':'0px'},500);
  // ));
  
  if(sPos>=1650){
    $('.intro_title_left').addClass('act1');
    $('.intro_title_right').addClass('act2');
  }

});



// 랜덤배너 만들기 
let r_num = Math.floor(Math.random()*3+1);
document.write(r_num); //1~8까지 랜덤숫자
document.getElementById('r_banner').src='./images/ran_banner0'+r_num + '.jpg';
