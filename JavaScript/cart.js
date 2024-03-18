// Add to Cart 
let storedProducts = JSON.parse(localStorage.getItem("product")) || [];
const cartButtons = document.querySelectorAll(".cart");
const cartAlert = document.getElementById("cart-alert");
const cartCount = document.querySelectorAll(".cart-count");
// Load the itemCount from localStorage
let itemCount = parseInt(localStorage.getItem("itemCount")) || 0;
// Update the cartCount elements with the initial itemCount
cartCount.forEach(cartCounter => {
  cartCounter.innerText = itemCount;
  if (itemCount > 0) {
    cartCounter.style.display = "inline";
  } else {
    cartCounter.style.display = "none";
  }
});

cartButtons.forEach(cartButton => {
  cartButton.addEventListener("click", () => {
    itemCount++;
    cartCount.forEach(cartCounter => {
      cartCounter.innerText = itemCount;
      cartCounter.style.display = "inline";
    });
    cartAlert.style.display = "block";
    setTimeout(() => {
      cartAlert.style.display = "none";
    }, 2000);
    // Update localStorage with the new itemCount
    localStorage.setItem("itemCount", itemCount.toString());

  });
});


