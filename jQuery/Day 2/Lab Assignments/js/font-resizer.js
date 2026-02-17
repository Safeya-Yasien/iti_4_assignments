$(document).ready(function () {
  let increaseBtn = $("#increase");
  let decreaseBtn = $("#decrease");
  let content = $(".content");
  let error = $(".error");

  let fontSize = parseInt(content.css("font-size"));
  console.log("font size is " + fontSize);

  increaseBtn.click(function () {
    fontSize++;
    content.css("font-size", fontSize + "px");
    error.text("Font size is " + fontSize);
  });

  decreaseBtn.click(function () {
    fontSize--;
    content.css("font-size", fontSize + "px");
    error.text("Font size is " + fontSize);
  });
});
