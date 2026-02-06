const chip = document.getElementById("contactChip");
const info = document.getElementById("info");
const closeBtn = document.getElementById("closeBtn");
const avatar = document.getElementById("avatar");

closeBtn.addEventListener("click", () => {
  chip.style.width = "50px";
  info.style.opacity = "0";
  info.style.transform = "translateX(-20px)";
});

avatar.addEventListener("click", () => {
  chip.style.width = "260px";
  info.style.opacity = "1";
  info.style.transform = "translateX(0)";
});
