$(document).ready(function () {
  let hoverCount = 0;
  let colors = ["blue", "green", "orange"];
  let colorIndex = 0;

  $(document).on("mouseenter", "div", function () {
    hoverCount++;

    if (hoverCount === 3) {
      let nextColor = colors[colorIndex];

      $(this).after(`<div class="${nextColor}"></div>`);

      hoverCount = 0;

      colorIndex = (colorIndex + 1) % colors.length;
    }
  });
});
