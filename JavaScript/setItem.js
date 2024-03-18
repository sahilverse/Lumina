const products = document.querySelectorAll('.product');
let cartProducts = JSON.parse(localStorage.getItem("product")) || [];

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


