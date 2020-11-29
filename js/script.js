// トップへ戻るボタン
$(function () {
  var pagetop = $('#page-top');
  pagetop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      //100pxスクロールしたら表示
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function () {
    $('body,html').animate(
      {
        scrollTop: 0,
      },
      500
    ); //0.5秒かけてトップへ移動
    return false;
  });
});

// ハンバーガーメニュー
$(document).ready(function () {
  $('.drawer').drawer();
});

$(function () {
  $('.drawer-menu-item').click(function () {
    $('.drawer').removeClass('drawer-open');
    $('.drawer').removeClass('drawer-close');
    $('.drawer').drawer();
  });
});

// スムーススクロール
$(function () {
  $('a[href^="#"]').click(function () {
    var speed = 500;
    var href = $(this).attr('href');
    var target = $(href == '#' || href == '' ? 'html' : href);
    var position = target.offset().top;
    $('html, body').animate({ scrollTop: position }, speed, 'swing');
    return false;
  });
});

// Typed.js
$(function () {
  var typed = new Typed('.mv-ttl--typed', {
    strings: ['', 'My name is Kyosuke Shimada. ', 'Willkommen in meinem Portfolio!', 'Welcome to My Portfolio! '],
    startDelay: 0,
    typeSpeed: 50,
    backDelay: 2000,
    backSpeed: 50,
  });
});

// Wow.jsの読み込み
new WOW().init();
