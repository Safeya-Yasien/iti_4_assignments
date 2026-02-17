$.fn.beUrgent = function (color) {
  let boxColor = color || "red";
  this.css({
    color: boxColor,
    "font-weight": "bold",
    border: "2px solid " + boxColor,
  });
  return this;
};

$("#box").beUrgent();
$("#box2").beUrgent("blue");
