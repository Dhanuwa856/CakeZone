// page button click function

$(document).ready(function () {
  $(".page-btn").click(function () {
    $(".hidden-nav").toggle(500);
  });
});

// Filter menu items
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if ((value = "brithday")) {
      $(".menu-box" + ".brithday").show(1000);
    } else {
      $(".menu-box")
        .not("." + value)
        .hide("1000");
      $(".menu-box")
        .filter("." + value)
        .show("1000");
    }
  });
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});
