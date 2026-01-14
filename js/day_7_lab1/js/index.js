// when register success redirect to thank.html with display welcome usernaem

// task 1 c : show blue border when full name input focus using element.style.border and remove it when move out of input

const fullName = document.getElementById("fullname");
const fullNameError = document.querySelector(".fullNameError");

fullName.addEventListener("focus", () => {
  fullName.style.border = "1px solid blue";
});

// task 2 d : validate that fullName not empty string and more than 3 letters
// remove focus from input
// first he click on input focus happen then you try to out of input
// i refuse and run focus over and over again using setTimeout until you enter valid data and i accept
fullName.addEventListener("blur", () => {
  const fullNameValue = fullName.value.trim();

  if (fullNameValue.length <= 3 || fullNameValue === "") {
    fullNameError.innerText = "Invalid Name";
    fullNameError.style.display = "block";

    setTimeout(() => {
      fullName.focus();
    }, 0);
  } else {
    fullNameError.style.display = "none";
    fullName.style.border = "none";
  }
});

// task 3 e : password validation
const password = document.getElementById("password");
const repeatPassword = document.getElementById("repeat-password");
const passwordError = document.querySelector(".passwordError");
const passwordRepeatedError = document.querySelector(".passwordRepeatedError");

// pass
password.addEventListener("focus", () => {
  password.style.border = "1px solid blue";
});

password.addEventListener("blur", () => {
  const passwordValue = password.value.trim();

  if (passwordValue === "") {
    passwordError.innerText = "Invalid Password";
    passwordError.style.display = "block";

    setTimeout(() => {
      password.focus();
    }, 0);
  } else {
    passwordError.style.display = "none";
    password.style.border = "none";
  }
});

// repeated pass
repeatPassword.addEventListener("focus", () => {
  repeatPassword.style.border = "1px solid blue";
});

repeatPassword.addEventListener("blur", () => {
  const passwordValue = password.value.trim();
  const repeatPasswordValue = repeatPassword.value.trim();

  if (
    passwordValue === "" ||
    repeatPasswordValue === "" ||
    repeatPasswordValue !== password.value
  ) {
    passwordRepeatedError.innerText =
      "password and repeat password should be the same";

    passwordRepeatedError.style.display = "block";
    repeatPassword.style.backgroundColor = "gray";

    setTimeout(() => {
      repeatPassword.focus();
    }, 0);
  } else {
    passwordRepeatedError.style.display = "none";
    repeatPassword.style.border = "none";
  }
});

const registerForm = document.getElementById("registerForm");

function Submit(event) {
  event.preventDefault();

  const fullNameValue = fullName.value.trim();
  const emailValue = email.value.trim();
  const cityValue = city.value.trim();
  const passwordValue = password.value.trim();
  const repeatPasswordValue = repeatPassword.value.trim();

  if (
    fullNameValue === "" ||
    emailValue === "" ||
    cityValue === "" ||
    passwordValue === "" ||
    repeatPasswordValue === ""
  ) {
    alert("Please fill all fields");
  } else {
    alert("You have successfully registered");
    window.location.href = `thank.html?name=${fullNameValue}`;
  }
}

// task 4 3 : redo form validation
// create html-form-valid.html for html5 and css selectors validation
