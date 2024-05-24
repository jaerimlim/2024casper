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

  // 이전 스크롤 위치 복원

  
  $('header').mouseenter(function(){
    $('header').addClass('h_act');
    $('header h1 img').attr('src','./images/logo-casper_black.png');
  });

  
  $('header').mouseleave(function(){
    let sPos = $(window).scrollTop();

    if(sPos>=70){
      $('header').addClass('h_act');
      $('header h1 img').attr('src','./images/logo-casper_black.png');
    }else{
      $('header').removeClass('h_act');
      $('header h1 img').attr('src','./images/logo-casper-white.png');
    }  
  });
  
  $(window).scroll(function(){
    let sPos = $(this).scrollTop();
    console.log(sPos);
    if(sPos>=70){
        $('header').addClass('h_act');
        $('header h1 img').attr('src','./images/logo-casper_black.png');
    }else{
      $('header').removeClass('h_act');
      $('header h1 img').attr('src','./images/logo-casper-white.png');
    }
    
  });
  $(window).trigger('scroll');

});



// 랜덤배너 만들기 
let r_num = Math.floor(Math.random()*3+1);
document.write(r_num); //1~8까지 랜덤숫자
document.getElementById('r_banner').src='./images/ran_banner0'+r_num + '.jpg';
