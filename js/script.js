$(function() {
  const $topBtn = $('.top_btn');
  if ($(window).scrollTop() <= 1000) {
    $topBtn.hide(); 
  }

  $(window).on('scroll', function() {
    const scrollTop = $(window).scrollTop();
    const scrollBottom = scrollTop + $(window).height();

    // 헤더 배경
    if(scrollTop > 80){
      $('header').addClass('header-bg');
    } else {
      $('header').removeClass('header-bg');
    }

    // about 애니메이션
    const aboutTop = $('#about').offset().top;
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

    // Top 버튼 표시
    if (scrollTop > 300) {
      $topBtn.fadeIn();
    } else {
      $topBtn.fadeOut();
    }

  });

  // Top 버튼 클릭 시 상단 이동
  $topBtn.on('click', function() {
    $('html, body').animate({ scrollTop: 0 }, 500);
  });

});
