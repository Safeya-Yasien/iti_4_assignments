// arrow function

// task 1  odd numbers using filter
const odd = document.querySelector(".odd");

const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
  80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98,
  99, 100,
];

const oddNumbers = numbers.filter((number) => number % 2 !== 0);

oddNumbers.forEach((number) => {
  const p = document.createElement("p");
  p.className = "odd-number";
  p.innerText = number;
  odd.appendChild(p);
});

// task 2 print even numbers using forEach
const even = document.querySelector(".even");

const evenNumbers = numbers.filter((number) => number % 2 === 0);

evenNumbers.forEach((number) => {
  const p = document.createElement("p");
  p.className = "even-number";
  p.innerText = number;
  even.appendChild(p);
});

// task 3 print square of each number using map
const square = document.querySelector(".square");

const squareNumbers = numbers.map((number) => number ** 2);

squareNumbers.forEach((number) => {
  const p = document.createElement("p");
  p.className = "square-number";
  p.innerText = number;
  square.appendChild(p);
});

// task 4

const demoThis = () => {
  console.log("this from arrow function", this);
};

demoThis();

// task 5 use spread operator with array
const [first, second, third, ...rest] = numbers;

console.log(first, second, third, rest);
