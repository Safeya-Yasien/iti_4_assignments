// task1: welcome page
alert("Welcome to my site");

let userName = prompt("Enter your name");
document.write("Welcome " + userName);

// after writing welcome page
// all page content will be removed and replaced with this code

// task2: sum of two numbers
function sum(a, b) {
  return a + b;
}

let num1 = Number(prompt("Enter first number"));
let num2 = Number(prompt("Enter second number"));

let result = sum(num1, num2);
console.log("result:", result);

// task3: check temperature
function checkTemp(temp) {
  console.log(temp >= 30 ? "HOT" : "Cold");
}

checkTemp(25);

// task4: detect weather
function detectWeather(temp, actualFeel) {
  // temp >= 25 && temp <=30 && actualFeel >=25 && actualFeel <=30 ? 'Normal' :  temp< 25 && actualFeel <25 ? 'Cold' : temp>30 && actualFeel >30 ? 'Hot' : 'Ambiguous, can’t detect'
  if (temp >= 25 && temp <= 30 && actualFeel >= 25 && actualFeel <= 30) {
    console.log("Normal");
  } else if (temp < 25 && actualFeel < 25) {
    console.log("Cold");
  } else if (temp > 30 && actualFeel > 30) {
    console.log("Hot");
  } else {
    console.log("Ambiguous, can’t detect");
  }
}

detectWeather(32, 31);

// can we use ternary operator here?
// yes but will be complex and hard to read

// task5:
function checkFaculty(faculty) {
  switch (faculty) {
    case "FCI":
      console.log("You’re eligible to Programing tracks");
      break;

    case "Engineering":
      console.log("You’re eligible to Network and Embedded tracks");
      break;

    case "Commerce":
      console.log("You’re eligible to ERP and Social media tracks");
      break;

    default:
      console.log("You’re eligible to SW fundamentals track");
  }
}

checkFaculty("FCI");

// task6:
function printOdd(start, end) {
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

printOdd(5, 20);
