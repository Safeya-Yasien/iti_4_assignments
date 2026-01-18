// when reload page email should be filled auto from cookies
// but if iw want the email which user logged it immediately then also the email from cookie it will appears

const form = document.querySelector("form");
const email = document.querySelector("#email");
const card_number = document.querySelector("#card_number");
const error = document.querySelector(".error");
const remember_me = document.querySelector("#remember_me");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  getEmailFromCookie();

  const isValidCardNumber = checkCardNumber(card_number.value);
  const isValidEmail = checkEmail(email.value);

  if (isValidCardNumber && isValidEmail) {
    alert("Login Successful");
    sessionStorage.setItem("email", email.value);
    sessionStorage.setItem("card_number", card_number.value);

    if (remember_me.checked) {
      let date = new Date();
      date.setDate(date.getDate() + 1);
      document.cookie = `email=${email.value}; expires=${date}`;
      location.href = "books.html";
    }
  } else {
    error.innerHTML = "Invalid Card Number or Email";
  }
});

function getEmailFromCookie() {
  let storageEmail = document.cookie.split("=")[1];
  //   console.log(email);

  if (storageEmail != null) {
    email.value = storageEmail;
  }
}

function checkCardNumber(cardNumber) {
  // card code must starts with LIB
  // LIB-1234LIB
  let regexp = /^LIB-\d{4}LIB$/;

  if (regexp.test(cardNumber)) {
    return true;
  }
}

function checkEmail(email) {
  let regexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (regexp.test(email)) {
    return true;
  }
}
