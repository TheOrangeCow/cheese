async function loadProducts(container, options = { featuredOnly: false, overrideProducts: null }) {
    const url = 'products.json';
    try {
        let products = await (await fetch(url)).json();

        // If overrideProducts is provided, use it
        if (options.overrideProducts) {
            products = options.overrideProducts;
        } else if (options.featuredOnly) {
            products = products.filter(p => p.featured);
        }

        container.innerHTML = '';

        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            if (!product.in_stock) productDiv.classList.add('out-of-stock');

            // Make the entire box clickable
            productDiv.style.cursor = 'pointer';
            productDiv.addEventListener('click', () => {
                window.location.href = `product.html?id=${product.id}`;
            });

            // Use first image if product.image is an array
            const displayImage = Array.isArray(product.image) ? product.image[0] : product.image;

            productDiv.innerHTML = `
                ${!product.in_stock ? '<span class="out-of-stock-text">Out of Stock</span>' : ''}
                <img src="${displayImage}" alt="${product.name}">
                <h3>${product.name}</h3>
                <div class="price">£${product.price.toFixed(2)}</div>
                <p>${product.description}</p>
                <button ${!product.in_stock ? 'disabled' : ''}>Add to Basket</button>
            `;

            // Prevent box click when button is clicked
            const button = productDiv.querySelector('button');
            button.addEventListener('click', (event) => {
                event.stopPropagation();
                console.log(`${product.name} added to basket`);
            });

            container.appendChild(productDiv);
        });

    } catch (error) {
        console.error('Error loading products:', error);
        container.innerHTML = '<p>Failed to load products. Please try again later.</p>';
    }
}
