// server 500
// client 400

// 1-	Use AJAX to retrieve users data, and display: First Name, Last name and address and phone from the following test web API: https://jsonplaceholder.typicode.com/users

const apiUrl = "https://dummyjson.com/users";
var request = new XMLHttpRequest();
request.open("GET", apiUrl);
request.send();

request.onload = () => {
  if (request.status === 200) {
    // console.log("response before parsing", request.response);
    // Use JSON.parse() to convert the string into a JavaScript object
    const response = JSON.parse(request.response);
    // console.log("response after parsing", response);
    const data = response.users;
    // console.log("response after parsing", data);
    const container = document.querySelector(".container");
    container.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
      const user = data[i];
      const userCard = document.createElement("div");
      userCard.classList.add("user-card");
      userCard.innerHTML = `
        <div class="user-card-header">
          <h2>${user.firstName} ${user.lastName}</h2>
          <p>${user.company.name}</p>
        </div>
        <div class="user-card-body">
          <p>${user.email}</p>
          <p>${user.address.address}</p>
          <p>${user.phone}</p>
        </div>`;

      container.appendChild(userCard);
    }
  } else {
    // Handle error
    console.log("Error:", request.status, request.statusText);
  }
};
