$(function(){
  // 헤더 메뉴 클릭시
  $('.gnb li').removeClass('active').eq(0).addClass('active');

  const sectionIds = [
    '#intro', '#about', '#project'
  ];

  $('#intro').show();
  $('#about, #project').hide();


  $('.gnb li a').on('click', function(e){
    e.preventDefault();
    const idx = $(this).parent().index();


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
      });
    });
  });

  //프로젝트 슬라이드
  let slide = 0;
  const slides = $('.slide');
  const slideCount = slides.length;

  slides.hide().eq(0).show();

  $('.slide-next').click(function(){
    if(slide<slideCount-1){
      slides.eq(slide).fadeOut(300,function(){
        slide++;
        slides.eq(slide).fadeIn(300);
      });
  }else{
    slides.eq(slide).fadeOut(300, function(){
      slide =0;
      slides.eq(slide).fadeIn(300);
    });
  }
});

$('.slide-prev').click(function(){
  if(slide>0){
    slides.eq(slide).fadeOut(300,function(){
      slide--;
      slides.eq(slide).fadeIn(300);
    });
  }else{
    slides.eq(slide).fadeOut(300, function(){
      sldie = slideCount -1;
      slides.eq(slide).fadeIn(300);
    });
  }
});
});