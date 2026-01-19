const books = document.querySelector("#books");
const filterCategoryInput = document.getElementById("filter-category");

function getBooks() {
  if (checkUserExist()) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://127.0.0.1:5500/advanced_js/day_1/BookList.json");
    xhr.onload = function () {
      if (xhr.status == 200) {
        const data = JSON.parse(xhr.responseText);
        for (book of data) {
          let tr = document.createElement("tr");
          tr.innerHTML = `
                        <td>${book.title}</td>
                        <td>${book.author}</td>
                        <td>${book.category}</td>
                        <td>
                            <button onclick="reserveBook('${book.id}')" >Reserve</button>
                        </td>
                    `;
          books.appendChild(tr);
        }
      }
    };
    xhr.send();
  }
}

function reserveBook(bookId) {
  const reservedBooks = JSON.parse(localStorage.getItem("reservedBooks")) || [];

  let index = -1;
  for (let i = 0; i < reservedBooks.length; i++) {
    if (reservedBooks[i].id == Number(bookId)) {
      index = i;
      break;
    }
  }

  if (index == -1) {
    reservedBooks.push({ id: bookId, Quantity: 1 });
  } else {
    reservedBooks[index].Quantity++;
  }

  localStorage.setItem("reservedBooks", JSON.stringify(reservedBooks));
}

function checkUserExist() {
  const email = sessionStorage.getItem("email");
  if (email == null) {
    location.href = "login.html";
  }
  return true;
}

// filterCategoryInput.onchange(() => {
//   console.log('change')
// })

// function filterBooks(){

// }

getBooks();
