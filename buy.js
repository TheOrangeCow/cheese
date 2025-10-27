async function louadPage() {
        const container = document.getElementById("list");


            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            if (cart.length === 0) {
                container.innerHTML = '<p class="empty">Error nothing in your basket</p>';
                return;
            }

            try {
                const response = await fetch('products.json');
                const products = await response.json();
                let totle_price = 0

                container.innerHTML = '';

                cart.forEach(item => {
                    const product = products.find(p => p.id === item.id);
                    if (!product) return;

                    

                    const row = document.createElement('div');
                    //row.className = '';

                    row.innerHTML = `
                        <div class="product-info">
                            <p>${product.name}, ${item.quantity}, ${(product.price * item.quantity)}, ${product.price}</p>
                        </div>
                       
                    `;


                    container.appendChild(row);
                    totle_price = totle_price + (product.price * item.quantity)
                });
                    const data = document.createElement('div');
                    //Shipping cost
                    totle_price = totle_price + 5.20
                    let card_paymant  = (totle_price + 0.20) / 0.985;

                    totle_price = totle_price + card_paymant
                    data.innerHTML = `
                        <div class="product-info">
                            <!--Shipping cost-->
                            <p>Shipping: £5.20</p>
                            <p class="quantity">Card transaction fee: ${card_paymant} </p>
                            <p>Total ${totle_price}</p>
                        </div>
                       
                    `;
                    container.appendChild(data);
                

            } catch (err) {
                console.error(err);
                container.innerHTML = '<p class="empty">Failed to load basket. Please try again later.</p>';
            }
        }




function order(){
    window.location.href="buy.html"
}

function shippingcost(){
    return 5.20
}