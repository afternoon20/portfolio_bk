// onwheel.carousel
$(function () {
  $('.owl-carousel').owlCarousel({
    autoplay: true,
    margin: 16,
    nav: true,
    items: 6, //アイテムの数
    responsive: {
      //レスポンシブ対応

      // ブレイクポイント 0以上
      0: {
        items: 3,
      },

      // ブレイクポイント 768以上
      768: {
        items: 6,
      },
      margin: 0,
    },
    loop: false,

    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
  });
});

// アコーディオン
$(function () {
  $('.career-list__item-bottom').hide();
  $('.career-list__item-toggle-close').hide();

  $('.career-list__item-toggle-open').click(function () {
    $(this).siblings('.career-list__item-toggle-close').show();
    $(this).siblings('.career-list__item-bottom').slideDown('normal');
    $(this).hide();
  });

  $('.career-list__item-toggle-close').click(function () {
    $(this).siblings('.career-list__item-toggle-open').show();
    $(this).siblings('.career-list__item-bottom').slideUp('normal');
    $(this).hide();

    // $(this).siblings('.career-list__item-bottom').slideUp();
    // $(this).children('.career-list__item-icon').css('transform', 'rotate(0turn)');
    $(this).hide();
  });
});

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
