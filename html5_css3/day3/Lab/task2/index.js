// const canvases = document.getElementsByTagName("canvas");

// canvases[0]
//   .getContext("2d")
//   .fillRect(0, 0, canvases[0].width, canvases[0].height);

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const sad = new Image();
sad.src = "sad.png";

const happy = new Image();
happy.src = "smiley.png";

function draw(img, scale) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  let width = 200 * scale;
  let height = 200 * scale;

  let x = (canvas.width - width) / 2;
  let y = (canvas.height - height) / 2;

  width *= scale;

  ctx.drawImage(img, x, y, width, height);
}

sad.onload = () => {
  draw(sad, 1);
};

canvas.addEventListener("mousedown", () => {
  draw(happy, 1.5);
});

canvas.addEventListener("mouseup", () => {
  draw(sad, 1);
});
