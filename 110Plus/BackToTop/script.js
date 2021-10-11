$(document).ready(function () {
  $(window).scroll(function () {
    var btnTop = $("#btnTop");
    if ($(window).scrollTop() > 100) {
      btnTop.fadeIn();
    } else {
      btnTop.fadeOut();
    }
  });

  $("#btnTop").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 700);
    return false;
  });
});
