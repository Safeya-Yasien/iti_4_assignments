const reservation = document.querySelector("#reservation");
const deleteAll = document.querySelector("#delete-all");
const totalBooks = document.querySelector("#total-books");

function getReservation() {
  const reservedBooks = JSON.parse(localStorage.getItem("reservedBooks")) || [];
  const count = reservedBooks.length;
  totalBooks.innerHTML = count;

  for (book of reservedBooks) {
    let bookId = book.id;
    let quantity = book.Quantity;
    getBookData(bookId, quantity);
  }
}

function getBookData(bookId, quantity) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://127.0.0.1:5500/advanced_js/day_1/BookList.json");
  xhr.onload = function () {
    if (xhr.status == 200) {
      const data = JSON.parse(xhr.responseText);

      for (book of data) {
        if (book.id == Number(bookId)) {
          displayData(book, quantity);
        }
      }
    }
  };
  xhr.send();
}

function displayData(book, quantity) {
  let tr = document.createElement("tr");
  tr.setAttribute("data-id", book.id);
  tr.innerHTML = `
                <td>${book.title}</td>
                <td>${book.category}</td>
                <td>
                    <input type='number' value='${quantity}' onChange="changeValue(this,${book.id})"/>
                </td>
                <td>
                  <button onclick="removeBook(${book.id})"> remove </button>
                </td>
                    `;
  reservation.appendChild(tr);
}

function changeValue(element, bookId) {
  const reservedBooks = JSON.parse(localStorage.getItem("reservedBooks")) || [];

  if (element.value != 0) {
    for (book of reservedBooks) {
      if (book.id == bookId) {
        book.Quantity = parseInt(element.value);
        break;
      }
    }
  } else {
    const confirmMessage = confirm(
      "Are you sure you want to delete this book?",
    );
    if (confirmMessage) {
      let index = -1;
      for (let i = 0; i < reservedBooks.length; i++) {
        if (reservedBooks[i].id == bookId) {
          index = i;
          break;
        }
      }

      if (index !== -1) {
        reservedBooks.splice(index, 1);

        element.closest("tr").remove();
      }
    } else {
      element.value = 1;
    }
  }
  localStorage.setItem("reservedBooks", JSON.stringify(reservedBooks));
}

function removeBook(bookId) {
  const reservedBooks = JSON.parse(localStorage.getItem("reservedBooks")) || [];
  let index = -1;

  const confirmMessage = confirm("Are you sure from deleting this book");

  if (confirmMessage) {
    for (let i = 0; i < reservedBooks.length; i++) {
      if (Number(reservedBooks[i].id) === bookId) {
        index = i;
        break;
      }
    }

    if (index !== -1) {
      reservedBooks.splice(index, 1);
      const res = document.querySelector(`tr[data-id="${bookId}"]`).remove();
    }

    localStorage.setItem("reservedBooks", JSON.stringify(reservedBooks));
  }
}

deleteAll.addEventListener("click", function () {
  const confirmMessage = confirm("Are you sure you want to delete all books?");
  if (confirmMessage) {
    localStorage.removeItem("reservedBooks");
    location.reload();
  }
});

getReservation();
