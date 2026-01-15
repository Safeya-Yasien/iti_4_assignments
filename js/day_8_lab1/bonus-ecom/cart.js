const cartContainer = document.querySelector(".cart-container");
const subtotal = document.querySelector(".subtotal");
const totalItems = document.querySelector(".total-items");
const total = document.querySelector(".total");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

if (cart.length === 0) {
  cartContainer.innerHTML = "<p>Your cart is empty.</p>";
  cartTotal.innerHTML = "";
} else {
  const request = new XMLHttpRequest();
  request.open("GET", "https://fakestoreapi.com/products", true);

  totalItems.innerHTML = cart.length;

  request.onload = () => {
    if (request.status === 200) {
      const products = JSON.parse(request.responseText);

      cartContainer.innerHTML = "";

      let subtotalPrice = 0;

      cart.forEach((item) => {
        const product = products.find((p) => p.id === item);

        if (product) {
          subtotalPrice += product.price;
        }

        const div = document.createElement("div");
        div.classList.add("cart-item");
        div.innerHTML = `
          <div class='cart-img'>
          <img src="${product.image}" alt="${product.title}" />
          </div>
          <div class='cart-text'> 
          <p class='title'>${product.title}</p>           
          <p class='desc'>${product.description}</p>  
          <div class='cart-quantity'>
          <p class='price'>${product.price}$</p>
          <div class='quantity'>
          <span>Quantity:</span>
          <input type="number" min="1" placeholder="1" value="${item.qty}" class="qty-input" />
          </div> 
          </div>
          <button class="delete-item">Remove</button>
          </div>
        `;

        // Delete item
        const deleteBtn = div.querySelector(".delete-item");
        deleteBtn.addEventListener("click", () => {
          cart = cart.filter((c) => c.id !== item.id);
          localStorage.setItem("cart", JSON.stringify(cart));
          location.reload();
        });

        cartContainer.appendChild(div);
      });

      subtotal.innerHTML = `${subtotalPrice.toFixed(2)}$`;
      total.innerHTML = `${subtotalPrice.toFixed(2)}$`;
    } else {
      console.log(
        "Error loading products:",
        request.status,
        request.statusText
      );
    }
  };

  request.send();
}
