// onwheel.carousel
$(function () {
  $(".owl-carousel").owlCarousel({
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
