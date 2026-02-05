const contactSection = document.getElementById("contactme");
const ringtone = document.getElementById("contact-ring");

contactSection.addEventListener("mouseenter", () => {
  ringtone.currentTime = 0;
  ringtone.play().catch((error) => {
    console.log(
      "Audio play was prevented. Please interact with the page first.",
    );
  });
});

contactSection.addEventListener("mouseleave", () => {
  ringtone.pause();
});
