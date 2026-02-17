$(document).ready(function () {
  const nameInput = $("#name");
  const ageInput = $("#age");
  const tableBody = $("#persons-list tbody");

  // create
  $("#add").on("click", function () {
    let name = nameInput.val().trim();
    let age = ageInput.val().trim();

    if (name !== "" && age !== "") {
      let newRow = `
        <tr>
          <td class="person-name">${name}</td>
          <td>${age}</td>
          <td><button class="delete-btn">Delete</button></td>
        </tr>`;

      tableBody.append(newRow);

      nameInput.val("");
      ageInput.val("");
    } else {
      alert("Please enter both Name and Age!");
    }
  });

  // delete
  tableBody.on("click", ".delete-btn", function () {
    $(this)
      .closest("tr")
      .fadeOut(300, function () {
        $(this).remove();
      });
  });
});
