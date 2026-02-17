$(document).ready(function () {
  let increaseBtn = $("#increase");
  let decreaseBtn = $("#decrease");
  let content = $(".content");
  let error = $(".error");

  let fontSize = parseInt(content.css("font-size"));
  console.log("font size is " + fontSize);

  increaseBtn.click(function () {
    if (fontSize < 100) {
      fontSize++;
      content.css("font-size", fontSize + "px");
      error.text("Font size is " + fontSize);
    } else {
      error.text("Maximum font size is 100");
      fontSize = 100;
    }
  });

  decreaseBtn.click(function () {
    if (fontSize > 10) {
      fontSize--;
      content.css("font-size", fontSize + "px");
      error.text("Font size is " + fontSize);
    } else {
      error.text("Minimum font size is 0");
      fontSize = 10;
    }
  });
});
