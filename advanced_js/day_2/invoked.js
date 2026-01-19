// using invoked function

const secondNumber = parseInt(prompt("Enter second number"));
const firstNumber = parseInt(prompt("Enter first number"));
const sum = firstNumber + secondNumber;
(function () {
  alert(`The sum of ${firstNumber} and ${secondNumber} is ${sum}`);
})(firstNumber, secondNumber, sum);
