const tooltip = document.getElementById("tooltip");
const organs = document.querySelectorAll(".organ");

organs.forEach((organ) => {
  organ.addEventListener("mouseover", (e) => {
    organ.style.fill = "#ffea00";

    //   which id is the name of part of the face
    tooltip.innerText = organ.id;
    tooltip.style.display = "block";
  });

  organ.addEventListener("mousemove", (e) => {
    tooltip.style.left = e.pageX + 15 + "px";
    tooltip.style.top = e.pageY + 15 + "px";
  });

  organ.addEventListener("mouseout", () => {
    organ.style.fill = "";

    tooltip.style.display = "none";
  });
});
