$(document).ready(function () {
  let box = $(".box");

  box.hover(function () {
    box
      .stop(true)
      .animate({ left: "500px" }, 800)
      .animate({ top: "200px" }, 600, function () {
        $(this).css("background-color", "blue");
      })
      .animate({ left: "0px" }, 800)
      .animate({ top: "0px" }, 600, function () {
        $(this).css("background-color", "red");
      });
  });
});
