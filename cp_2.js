// Step 3: Defining fetchProductsThen function using Promise-based syntax

function fetchProductsThen() {
    fetch(`https://www.course-api.com/javascript-store-products`)
        .then(reponse => {
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