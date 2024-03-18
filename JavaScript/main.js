// Mobile navigation menu
const navbar = document.querySelector(".nav-list");
const bar = document.querySelector("#bar");
const close = document.getElementById('close');

if (bar) {
  bar.addEventListener("click", () => {
    navbar.classList.add("active");
  });
};

if (close) {
  close.addEventListener('click', () => {
    navbar.classList.remove('active');
  })
};


// Add to Cart 
let cartProducts = JSON.parse(localStorage.getItem("product")) || [];
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

// Add items to localStorage
const products = document.querySelectorAll('.product');


products.forEach(product => {
  const cartBtn = product.querySelector('.cart');

  cartBtn.addEventListener('click', () => {
    const productDescription = product.querySelector(".product-d");
    let brandName = productDescription.querySelector("h3").innerHTML;
    let name = productDescription.querySelector("h5").innerHTML;
    let price = product.querySelector("h4").innerHTML;
    let discountPriceElement = product.querySelector("p");
    let discountPrice = discountPriceElement ? discountPriceElement.innerHTML : "";
    let productImage = product.querySelector("img").src;

    let newProduct = {
      productImage: productImage,
      brandName: brandName,
      name: name,
      price: price,
      discountPrice: discountPrice,
      quantity: 1
    }

    let existingProduct = cartProducts.find((product) => product.name === newProduct.name);

    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      cartProducts.push(newProduct);

    }

    localStorage.setItem("product", JSON.stringify(cartProducts));

  });
});




