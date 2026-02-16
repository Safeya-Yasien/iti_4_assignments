$(document).ready(function () {
  // task 1
  $(".container1").append("<div class='black'></div>");
  $(".container1").prepend("<div class='white'></div>");
  $(".container1 .pink").before("<p class='yellow'>New Yellow</p>");

  // task 2

  $(".container2 p").each(function () {
    let text = $(this).text();
    $(this).replaceWith("<a href='http://" + text + "'>" + text + "</a>");
  });

  // task 3
  $(".container3 img").wrap("<figure></figure>");
  $(".container3 img").after("<figcaption>Coffee</figcaption>");

  //   task 4
  $(".container4 td.col-age").empty();
  $(".container4 td:contains('Mohsen')").addClass("man");
  $(".container4 td").toggleClass("your-email");

  //   task 6
  $("input[name='username']").val("Safeya");
  $("#my-form input[type='checkbox']").prop("checked", true);
});
