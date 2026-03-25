// Step 3: 

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