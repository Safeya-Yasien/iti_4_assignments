// task 1
const tips = [
  "It is a good coding practice to initialize variables when you declare them.",
  "All variables used in a function should be declared as local variables.",
  "compress your static files such as images to reduce the size of your HTML file",
  "Use map() and filter() Like a Functional Dev Forget for-loops for basic array transforms",
  "It is a good coding practice to put all declarations at the top of each script or function.",
  "convert your images to light weight formats such as WebP",
  "make code as functional as possible",
  "write your code in external js files rather than inline in html files",
  "NaN means Not a Number, so you can use it to check if a value is a number",
  "use the === operator to compare two values",
  "Js is case sensitive so you should use camelCase for variable names",
  "Js is interpreted language so you don't need to compile it",
  "You can use the typeof operator to check the type of a variable",
];

// floor
const tip = Math.floor(Math.random() * tips.length);
const tipText = document.createElement("p");
tipText.innerText = tips[tip];
document.body.appendChild(tipText);

// task 2 display the current date
function displayCurrentDate() {
  const date = new Date();
  toady = date.toLocaleDateString();
  const dateText = document.createElement("p");
  dateText.innerText = `Today's date is: ${toady}`;
  document.body.appendChild(dateText);

  const time = date.toLocaleTimeString();
  const timeText = document.createElement("p");
  timeText.innerText = `Today's time is: ${time}`;
  document.body.appendChild(timeText);
}

displayCurrentDate();

// task 3 check email if contain "@" symbol
function checkEmail(email) {
  // lastIndexOf !== 0 means not at the beginning not index0
  if (
    email.includes("@") &&
    email.lastIndexOf("@") !== 0 &&
    // total number length and -1 is last one
    email.lastIndexOf("@") !== email.length - 1
  ) {
    // alert("email is valid");
  } else {
    alert("email is invalid");
  }
}

checkEmail("test@gmail.com");

// task 4 sort array
let grades = [60, 100, 10, 15, 85];

// this ascending order
// grades.sort((a, b) => a - b);
// console.log(grades);

// this descending order
grades.sort((a, b) => b - a);
console.log(grades);

// heights number
console.log(grades[0]);

// task 5 object
let students = [
  {
    name: "Mostafa",
    degree: 90,
  },
  {
    name: "Mohamed",
    degree: 60,
  },
];

// add new student
students.push({ name: "Ali", degree: 80 });
// key: value
for (let student in students) {
  //   console.log(`for in ${student.name} : ${student.degree}`); //undefined
  console.log(`for in ${students[student].name} : ${students[student].degree}`);
}

console.log("*** pop  ");

// remove student
students.pop();
// values iteslef

for (let student of students) {
  console.log(`for of ${student.name} : ${student.degree}`);
}

// task 6  birthday
// here we have to display prompt until user enter true date
// 22–01–1999
function checkBirth(userBirthday) {
  if (
    userBirthday.length === 10 &&
    userBirthday[2] === "–" &&
    userBirthday[5] === "–"
  ) {
    console.log("true birthday", userBirthday);
    // new Date(year,month,day)
    const newBir = userBirthday.split("–").reverse().join("-");
    console.log("editedDate:", newBir);

    const date = new Date(newBir);
    console.log("date:", date.toLocaleDateString());
    return true;
  } else {
    console.log("false birthday");
    return false;
  }
}

let valid = false;

do {
  const userBirthday = prompt("Enter your birthday date (DD-MM-YYYY):");

  valid = checkBirth(userBirthday);
} while (!valid);
