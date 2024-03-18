// Search in Lumina
function searchLumina() {
    const filter = document.getElementById('search').value.toUpperCase();
    const products = document.querySelectorAll('.product');
    let anyMatchFound = false;

    for (let i = 0; i < products.length; i++) {
        let a = products[i].querySelector('h5');
        let b = products[i].querySelector('h3');
        let valueA = a ? (a.innerText || a.innerHTML || a.textContent) : '';
        let valueB = b ? (b.innerText || b.innerHTML || b.textContent) : '';

        if (valueA.toUpperCase().includes(filter) || valueB.toUpperCase().includes(filter)) {
            products[i].style.display = "";
            anyMatchFound = true;
        } else {
            products[i].style.display = "none";
        };
    };

    // Display "No match found" if no products are displayed
    const productsSection = document.querySelector('.noMatch');

    if (!anyMatchFound) {
        productsSection.innerHTML = `<p>"No match found"</p>`;

    } else {
        productsSection.innerHTML = "";
    };
};
