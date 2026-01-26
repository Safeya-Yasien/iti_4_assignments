const startBtn = document.getElementById("Start");

startBtn.addEventListener("click", function () {
  startCooking();
});
let riceCooked = false;
let vegetablesCooked = false;
let dishReady = false;

function startCooking() {
  preparingIngredients();

  // if rice is cooked
  // if vegetables are cooked
  // then dish is ready
  //   if dish is ready
  //     make sauce

  cookingRice();
  cookingVegetables();
}

function preparingIngredients() {
  console.log("Preparing Ingredients");
}

function cookingRice() {
  setTimeout(() => {
    console.log("Cooking Rice");
    riceCooked = true;
    serveDish();
  }, 3000);
}

function cookingVegetables() {
  setTimeout(() => {
    console.log("Cooking Vegetables");
    vegetablesCooked = true;
    serveDish();
  }, 5000);
}

function serveDish() {
  if (riceCooked && vegetablesCooked) {
    dishReady = true;
    console.log("Dish is ready");
    makingSauce();
  }
}

function makingSauce() {
  console.log("Making Sauce");
}

// using promises
