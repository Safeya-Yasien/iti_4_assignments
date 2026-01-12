// task 1 display clock with current time in local format (time only without date) in a div updated every second.
const clockContainer = document.createElement("div");
function displayClock() {
  clockContainer.innerText = new Date().toLocaleTimeString();
  document.body.appendChild(clockContainer);
}

// why use setInterval here?
// while setTimeout would call it only once after the specified delay
// const clockInterval = setTimeout(displayClock, 8000);
// to repeatedly call the displayClock function every second to update the time
const clockSetTimeOut = setInterval(displayClock, 1000);

// task 2 login form
const params = new URLSearchParams(window.location.search);
const userName = params.get("userName");

// why use [0] because getElementsByClassName return an array contain text and length not a single element
const userSpan = document.getElementsByClassName("user")[0];

if (userName) {
  userSpan.innerText = `Welcome ${userName}`;
}

// task 3 advertising
const advertisingLink = document.getElementById("advertisingLink");
let adW;
advertisingLink.addEventListener("click", () => {
  setTimeout(() => {
    adW = window.open("", "_blank", "width=500,height=500");
    adW.document.write(
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, praesentium commodi, exercitationem ut iste veritatis numquam et excepturi in amet rem aliquam nesciunt voluptas voluptatum, culpa cupiditate ullam autem non."
    );
  }, 3000);
});

const closePage = document.getElementById("closePage");
closePage.addEventListener("click", () => {
  adW.close();
});

// task 4 terms and conditions
