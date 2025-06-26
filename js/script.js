$(function(){
  // 헤더 메뉴 클릭시
  $('.gnb li').removeClass('active').eq(0).addClass('active');
  $('header').css('backgroundColor','#C9FFFC');

  const sectionIds = [
    '#intro', '#about', '#project'
  ];

  $('#intro').show();
  $('#about, #project').hide();


  $('.gnb li a').on('click', function(e){
    e.preventDefault();
    $('.gnb li').removeClass('active');
    $(this).parent().addClass('active');

    const idx = $(this).parent().index();

    let headerColor = [
      '#C9FFFC',
      '#BCFFBC',
      '#FFE4FA',
      '#FFDDDD'
    ];
    $('header').css('backgroundColor', headerColor[idx]);

    $('#intro, #about, #project').fadeOut(300);
    setTimeout (()=>{
      $(sectionIds[idx]).fadeIn(300);
    },300);
  });

  //모달
  $('.pop').click(function(){
    $('.modal').fadeIn(300);
    $('.close_btn').click(function(){
      $('.modal').fadeOut(300, function(){
        $('#intro').fadeIn(300);
        $('.gnb li').removeClass('active').eq(0).addClass('active');
        $('header').css('backgroundColor','#c9fffc');
      });
    });
  });

  // 개인프로젝트 팝업
  $('.personal-project').click(function(){
    $('.personal-popup').slideDown(500);
    $('.personal-popup-close').click(function(){
      $('.personal-popup').slideUp(500);
    });
  });


  $('.team1-project').click(function(){
    $('.team1-popup').slideDown(500);
    $('.team1-popup-close').click(function(){
      $('.team1-popup').slideUp(500);
    });
  });

  $('.team2-project').click(function(){
    $('.team2-popup').slideDown(500);
    $('.team2-popup-close').click(function(){
      $('.team2-popup').slideUp(500);
    });
  });
});