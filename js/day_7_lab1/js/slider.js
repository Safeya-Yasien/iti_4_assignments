const images = [
  "images/slide-1.jpg",
  "images/slide-2.jpg",
  "images/slide-3.jpg",
  "images/slide-4.jpg",
];

let index = 0;
let intervalId;

const photo = document.getElementById("photo");
const gallery = document.getElementById("gallery");

function sliderShow() {
  if (intervalId) return;
  intervalId = setInterval(() => {
    index++;
    if (index >= images.length) {
      index = 0;
    }
    photo.src = images[index];
  }, 500);
}

function stop() {
  clearInterval(intervalId);
  intervalId = null;
}

function nextSlide() {
  index++;
  if (index >= images.length) {
    index = 0;
  }
  photo.src = images[index];
}

function prevSlide() {
  index--;
  if (index < 0) {
    index = images.length - 1;
  }
  photo.src = images[index];
}

gallery.addEventListener("mouseover", () => {
  sliderShow();
});

//
