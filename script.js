const products = [
  {
    id: 1,
    name: "Product 1",
    price: 29.99,
    img: "images/hoodie.avif",
  },
  {
    id: 2,
    name: "Product 2",
    price: 39.99,
    img: "images/shoe.webp",
  },
  {
    id: 3,
    name: "Product 3",
    price: 19.99,
    img: "images/hoodie2.jpg",
  },
  {
    id: 4,
    name: "Product 4",
    price: 49.99,
    img: "images/watche.jpg",
  },
  {
    id: 5,
    name: "Product 5",
    price: 29.99,
    img: "images/watche.jpg",
  },
  {
    id: 2,
    name: "Product 6",
    price: 39.99,
    img: "images/bracelets.jpg",
  },
  {
    id: 3,
    name: "Product 7",
    price: 19.99,
    img: "images/1.jpg",
  },
  {
    id: 4,
    name: "Product 8",
    price: 49.99,
    img: "images/hoodie2.jpg",
  },
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];
const productGallery = document.getElementById("product-gallery");
const cartElement = document.getElementById("cart");
const cartItems = document.getElementById("cart-items");

// Render products on the main page
if (productGallery) {
  renderProducts();
}

// Render cart on the checkout page
if (cartItems) {
  renderCartItems();
}

function renderProducts() {
  productGallery.innerHTML = products
    .map(
      (product) => `
      <div class="product-card">
        <img src="${product.img}" alt="${product.name}">
        <h4>${product.name}</h4>
        <p>$${product.price.toFixed(2)}</p>
        <button class="btn" onclick="addToCart(${
          product.id
        })">Add to Cart</button>
      </div>
    `
    )
    .join("");
}

function addToCart(id) {
  const product = products.find((p) => p.id === id);
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
}

function updateCart() {
  cartElement.textContent = `Cart (${cart.length})`;
}

// Render cart items on the checkout page
function renderCartItems() {
  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    cartItems.innerHTML = cart
      .map(
        (item) => `
        <div class="cart-item">
          <p>${item.name} - $${item.price.toFixed(2)}</p>
        </div>
      `
      )
      .join("");
  }
}

document.getElementById("checkout-btn")?.addEventListener("click", function () {
  alert("Thank you for your purchase!");
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCartItems();
  updateCart();
});

// Update cart count on page load
updateCart();
