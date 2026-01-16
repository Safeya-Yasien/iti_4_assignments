const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

const apiUrl = "https://fakestoreapi.com/products";
var request = new XMLHttpRequest();
request.open("GET", apiUrl + "/" + productId);
request.send();

const productContainer = document.querySelector(".product-container");
request.onload = () => {
  if (request.status === 200) {
    const product = JSON.parse(request.response);
    productContainer.innerHTML = "";

    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    //  star rating
    const ratingValue = product.rating?.rate || 0;

    const fullStars = Math.floor(ratingValue);
    const halfStar = ratingValue - fullStars >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    const stars =
      "★".repeat(fullStars) + (halfStar ? "½" : "") + "☆".repeat(emptyStars);

    productCard.innerHTML = `
      <div class="product-images">
        <img src="${product.image}" alt="${product.title}" class="main-image" />
      </div>
      <div class="product-details">
        <h1 class="product-title">${product.title}</h1>
        <div class="price-section">
          <span class="original-price">$${product.price.toFixed(2)}</span>
          <span class="discount-price">$${(product.price * 1.3).toFixed(
            2
          )}</span>
        </div>
      <div class="rating">
        Rating: ${stars} (${ratingValue.toFixed(1)}) • ${
      product.rating.count
    } reviews
      </div>
        <p class="description">${product.description}</p>
        <button class="add-to-cart">Add to Cart</button>


      </div>
    `;

    productContainer.appendChild(productCard);
  } else {
    console.log("Error:", request.status, request.statusText);
  }
};
