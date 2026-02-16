$(document).ready(function () {
  $(".container1 div").each(function () {
    let color = $(this).attr("class");
    $(this).css("background-color", color);
  });

  $(".container1 div p").each(function () {
    let color = $(this).attr("class");
    $(this).css("color", color);
  });

  // task 2
  // https://api.jquery.com/attribute-contains-selector/
  $(".container2 a[href*='google']").text("Google");

  $(".container2 a").each(function () {
    // using includes
    if ($(this).attr("href").includes("google")) {
      $(this).text("Google");
    }
  });

  // using ends with
  //stackoverflow.com/questions/609382/jquery-selector-id-ends-with
  $(".container2 a[href$='org']").text("IEEE");

  //   starts with
  $(".container2 a[href^='https']").text("Facebook");

  //   append text
  $(".container2 a[href^='http']").append(" Official Website");

  //   task 3
  $(".container3 figure:nth-child(3) img").attr("src", "img/orange.png");
  $(".container3 figure:nth-child(3) figcaption").text("fig.3 - orange juice");

  //   task 4
  $(".container4 table tr td[class*='my-name']").css("color", "blue");
  $(".container4 table tr td:odd").css("background-color", "pink");
  $(".container4 table:first tr:last td:nth-child(2)").css(
    "font-weight",
    "bold",
  );

  //   task 5
  $(".container5 ul li:nth-child(2)").css("font-style", "italic");
  $(".container5 ol li:nth-child(1)").css("color", "red");
});
