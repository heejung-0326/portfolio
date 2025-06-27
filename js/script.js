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

  // 프로젝트 팝업
  $('.project-item').on('click', function(e){
    e.preventDefault();
    const target = $(this).data('popup');
    $('.' + target + '-popup').slideDown(500);
  });

  $('.popup-close').on('click', function(){
    const target = $(this).data('popup');
    $('.'+ target + '-popup').slideUp(500);
  });
});