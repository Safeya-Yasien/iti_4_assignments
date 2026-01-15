const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

const apiUrl = "https://dummyjson.com/products";
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
    const fullStars = Math.floor(product.rating);
    const halfStar = product.rating - fullStars >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
    const stars =
      "★".repeat(fullStars) + (halfStar ? "½" : "") + "☆".repeat(emptyStars);

    productCard.innerHTML = `
      <div class="product-images">
        <img src="${product.images[0]}" alt="${
      product.title
    }" class="main-image" />
      </div>
      <div class="product-details">
        <h1 class="product-title">${product.title}</h1>
        <p class="brand">by ${product.brand}</p>
        <div class="price-section">
          <span class="original-price">$${product.price.toFixed(2)}</span>
          <span class="discount-price">$${(product.price * 1.3).toFixed(
            2
          )}</span>
        </div>
        <div class="rating">Rating: ${stars} (${product.rating.toFixed(
      1
    )})</div>
        <p class="description">${product.description}</p>
        <p class="stock">${product.availabilityStatus} - Only ${
      product.stock
    } left</p>
        <p class="shipping">${product.shippingInformation}</p>
        <button class="add-to-cart">Add to Cart</button>
        
        <div class="extra-info">
          <p><strong>SKU:</strong> ${product.sku}</p>
          <p><strong>Weight:</strong> ${product.weight}g</p>
          <p><strong>Dimensions:</strong> ${product.dimensions.width} x ${
      product.dimensions.height
    } x ${product.dimensions.depth} cm</p>
          <p><strong>Warranty:</strong> ${product.warrantyInformation}</p>
          <p><strong>Return Policy:</strong> ${product.returnPolicy}</p>
        </div>

        <div class="reviews-section">
          <h3>Reviews:</h3>
          ${product.reviews
            .map(
              (r) => `
            <div class="review">
              <p class="reviewer">${r.reviewerName} - ${"★".repeat(
                r.rating
              )}${"☆".repeat(5 - r.rating)}</p>
              <p class="comment">${r.comment}</p>
            </div>
          `
            )
            .join("")}
        </div>

      </div>
    `;

    productContainer.appendChild(productCard);
  } else {
    console.log("Error:", request.status, request.statusText);
  }
};
