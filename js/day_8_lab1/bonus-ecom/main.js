const apiUrl = "https://fakestoreapi.com/products";
const request = new XMLHttpRequest();

request.open("GET", apiUrl, true);
request.send();

const productsContainer = document.querySelector(".products");

request.onload = () => {
  if (request.status === 200) {
    const data = JSON.parse(request.response);

    productsContainer.innerHTML = "";

    data.forEach((product) => {
      const card = document.createElement("div");
      card.classList.add("product-card");

      card.innerHTML = `
      <a href="product.html?id=${product.id}" target="_blank">
        <img src="${product.image}" alt="${product.title}" />
        </a>
        <p class="description">
          ${product.title}
        </p>

        <div class="price-row">
          <span class="price">$${product.price}</span>
          <span class="stars">★★★★★</span>
        </div>

        <div class="old-price">$${(product.price * 1.3).toFixed(2)}</div>

        <div class="shipping">Free shipping</div>

        <button class="add-to-cart">Add to Cart</button>
      `;

      const addToCartButton = card.querySelector(".add-to-cart");
      addToCartButton.addEventListener("click", () => {
        addToCart(product);
      });

      productsContainer.appendChild(card);
    });
  } else {
    console.log("Error:", request.status, request.statusText);
  }
};

function addToCart(product) {
  //
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (!cart.includes(product.id)) {
    cart.push(product.id);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
  }
}
