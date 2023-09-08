$(document).ready(function () {
  function neneMain() {
    var wW = $(window).width();
    var mainMargin = 6; //가운데 나누는 마진값
    $(".mainPadding").css("margin", mainMargin + "px"); //가운데 마진값

    var mainW = $(".main_01_img .main_padding").width(); //중심이되는 메인이미지칸 넓이
    var secondW = mainW / 2 - mainMargin; //반 6=가운데 마진준값
    var thirdW = secondW / 2 - mainMargin; ///4분의1 6=가운데 마진준값
    var fourthW = thirdW / 2; //8분의1

    $(".main_01_img .mainPadding").height(mainW); //메인이미지 높이주고
    $(".main_06_video .mainPadding_hotVideo").height(mainW); //메인영상 높이주고

    $(".main_03_bestOrder").height(secondW); //반띵한 높이주고 베스트메뉴
    $(".main_02_event1").height(secondW); //반띵한 높이주고 이벤트
    $(".main_07_store .findStoreCover").height(secondW); //반띵한 높이주고 매장찾기
    $(".main_07_store .fourInfo").height(secondW); //반띵한 높이주고 사등분 고객의소리

    if (wW < 750) {
      $(".main_04_bestOrder .mainOrderLine").height(secondW); //반띵한 높이주고 온라인주문
      $(".main_04_bestOrder_m .mainOrderLine").height(secondW); //반띵한 높이주고 온라인주문
    } else {
      $(".main_04_bestOrder .mainOrderLine").height(thirdW); //반띵한 높이주고 온라인주문
      $(".main_04_bestOrder_m .mainOrderLine").height(thirdW); //반띵한 높이주고 온라인주문
    }
   
    $(".mainNoticeLine")
      .height(fourthW)
      .css("line-height", fourthW + "px"); //반띵한 높이주고 공지
    $(".mainEventLine")
      .height(fourthW)
      .css("line-height", fourthW + "px"); //반띵한 높이주고 이벤트   

    if (wW < 1008) {
      $(".aboutNenechicken").text("네네치킨"); //텍스트변경
    } else {
      $(".aboutNenechicken").text("네네치킨소개"); //텍스트변경
    }

    var eventimg = $(".event").width();
    $(".swiper2 img").height(eventimg);

    if (wW < 750) {
      $("iframe").css("width", "90%");
      $("iframe").css("height", "250px");
    } else {
    }
  } //
  neneMain();

  function mnone() {
    var wW = $(window).width();
    if (wW > 735) {
      $(".mobileMenuWrap").css("display", "none");
      $(".neneDim").css("display", "none");
    } else {
    }
  }

  function videoHeight() {
    var videoW = $(".videoImage").width();
    var videoW = videoW * 0.5;
    $(".videoImage").height(videoW);
  }
  videoHeight();

  function neneText() {
    var wW = $(window).width();
    if (wW < 768) {
      $(".nenechicken_this a").text("치킨매장"); //텍스트변경
    } else {
      $(".nenechicken_this a").text("네네치킨 매장"); //텍스트변경
    }

    if (wW < 768) {
      $(".nenepizza_this a").text("피자매장"); //텍스트변경
    } else {
      $(".nenepizza_this a").text("네네피자 매장"); //텍스트변경
    }
  }
  neneText();

  /**/
  function aboutNav2() {
    var wW = $(window).width();
    if (wW > 735) {
      var swiper10 = new Swiper(".swiper-container10", {
        slidesPerView: 7.6,
        paginationClickable: true,
        spaceBetween: 0,
      });
    } else {
      var swiper10 = new Swiper(".swiper-container10", {
        slidesPerView: 3.5,
        paginationClickable: true,
        spaceBetween: 0,
      });
    }
  }

  function ie9() {
    var wW = $(window).width();
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
      // If Internet Explorer, return version number

      //alert('IE ' + parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))));
      var version = parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)));
      if (version <= 9) {
      } else {
        aboutNav2();
        setTimeout(function () {
          if (window.location.pathname == "/17_new/sub_massmedia02.asp") {
            if (wW < 756) {
              $("#wyditor_img").css("width", "90%");
            }
          } else {
            $("#wyditor_img").css("width", "90%");
          }
        }, 1000);
      }
    } else {
      //alert('otherbrowser');
      aboutNav2();
    }
  }
  ie9();

  $(window).resize(function () {
    neneMain();
    mnone();
    //eventHeight();
    menuNav();
    businessNav();
    videoHeight();
    aboutNav();
    neneText();
    ie9();
  }); //resize

  neneMain();

  $(".mobileOpen").click(function () {
    $(".mobileMenuWrap").fadeIn("slow");
    $(".neneDim").css("display", "block");
  });

  $(".closeMmenu").click(function () {
    $(".mobileMenuWrap").fadeOut("slow");
    $(".neneDim").css("display", "none");
  });

  $(".mMenuRealMenu h3").click(function () {
    $(this).siblings("ul").slideToggle("slow");
    $(this).toggleClass("bgchange");
  });
});
