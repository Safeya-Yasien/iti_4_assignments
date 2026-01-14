const galleryImages = document.querySelectorAll("img");

galleryImages.forEach((img) => {
  img.style.transition = "opacity 0.5 ease";
  img.style.opacity = "1";

  img.addEventListener("mouseover", () => {
    img.style.opacity = 0.3;
  });

  img.addEventListener("mouseleave", () => {
    img.style.opacity = 1;
  });
});

function fadeOut() {}
