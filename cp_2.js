// Step 3: Defining fetchProductsThen function using Promise-based syntax

function fetchProductsThen() {
    fetch(`https://www.course-api.com/javascript-store-products`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok`);
            }
            return response.json();
        })
        .then(products => {
            products.forEach(product => {
                console.log(product.fields.name);
            });
        })
        .catch(error => {
            console.error(`Fetch error (Promise Based):`, error);
        });

}


// Step 4: Defining fetchProductsAsync function using async/await syntax

async function fetchProductsAsync() {
    try {
        const response = await fetch(`https://www.course-api.com/javascript-store-products`);

        if (!response.ok) {
            throw new Error(`Network response was not ok`);
        }

        const products = await response.json();

        displayProducts(products);

    } catch (error) {

        handleError(error);
    }
}


// Step 5: Displaying the first 5 products on the webpage

function displayProducts(products) {
    const container = document.getElementById('product-container');

    const firstFive = products.slice(0, 5);

    firstFive.forEach(product => {
        const { name, price, image} = product.fields;
        const imageUrl = image[0].url;

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <img src="${imageUrl}" alt="${name}">
            <h3 class="product-name">${name}</h3>
            <p class="product-price">$${(price / 100).toFixed(2)}</p>
        `;
        container.appendChild(productCard);
    });
}


// Step 6: Error handling function

function handleError(error) {

    console.error(`An error occurred: ${error.message}`);

    const container = document.getElementById('product-container');
    container.innerHTML = `<p class="error-message">Sorry, we couldn't load the products. Please try again later.</p>`;
}