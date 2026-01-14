const name = document.getElementById("name");

const params = new URLSearchParams(window.location.search);

name.innerText = params.get("name");
