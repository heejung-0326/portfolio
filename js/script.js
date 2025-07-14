$(function(){

  $(window).on('scroll', function(){
    // 헤더 배경
    if($(window).scrollTop() > 80){
      $('header').addClass('header-bg');
    } else {
      $('header').removeClass('header-bg');
    }

    // about 애니메이션
    const aboutTop = $('#about').offset().top;
    const scrollBottom = $(window).scrollTop() + $(window).height();
    if (scrollBottom > aboutTop + 100) {
      $('.about-item').each(function(idx) {
        setTimeout(() => {
          $(this).addClass('show');
        }, idx * 200);
      });
    }

    // contact 애니메이션
    const contactTop = $('.contact_inner').offset().top;
    if (scrollBottom > contactTop + 100) {
      $('.contact_inner').addClass('active');
    }
  });

  // //프로젝트 슬라이드
  // let slide = 0;
  // const slides = $('.slide');
  // const slideCount = slides.length;

  // slides.hide().eq(0).show();

  // $('.slide-next').click(function(){
  //   if(slide < slideCount-1){
  //     slides.eq(slide).fadeOut(300,function(){
  //       slide++;
  //       slides.eq(slide).fadeIn(300);
  //     });
  //   } else {
  //     slides.eq(slide).fadeOut(300, function(){
  //       slide = 0;
  //       slides.eq(slide).fadeIn(300);
  //     });
  //   }
  // });

  // $('.slide-prev').click(function(){
  //   if(slide > 0){
  //     slides.eq(slide).fadeOut(300,function(){
  //       slide--;
  //       slides.eq(slide).fadeIn(300);
  //     });
  //   } else {
  //     slides.eq(slide).fadeOut(300, function(){
  //       slide = slideCount - 1;
  //       slides.eq(slide).fadeIn(300);
  //     });
  //   }
  // });

});