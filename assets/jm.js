console.log("gh1");
function t() {
  $("#site-nav-mobile").find(".is-open").removeClass("is-open"),
    $("#site-nav-mobile").find(".is-hidden").removeClass("is-hidden");
}
$(document).on("click", '[data-mobile-menu-toggle="menu"]', function () {
  console.log("gh2");
  if (
    ($(this).toggleClass("is-open"),
    $("body").toggleClass("open_menu"),
    $(window).width() > 1024)
  ) {
    var t = $(".site-header").position(),
      e = $(".site-header").outerHeight();
    $("#site-nav-mobile").css({
      top: t.top + e,
      height: $(window).height() - t.top - e,
    });
  } else {
    $("#site-nav-mobile").css("top", 0);
  }
});
$(document).on("click", "#site-nav-mobile .close_menu", function (e) {
  $('[data-mobile-menu-toggle="menu"]').removeClass("is-open");
  $("body").removeClass("open_menu");
  t();
});
$(document).on("click", ".overlay_background", function (e) {
  $("body").hasClass("open_menu") &&
    $('[data-mobile-menu-toggle="menu"]').removeClass("is-open");
  $("body").removeClass("open_menu");
  t();
});
console.log("gh0");
