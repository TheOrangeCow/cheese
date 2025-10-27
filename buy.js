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
                    
                    let product_price = product.price * item.quantity
                    product_price = Math.ceil(product_price * 100) / 100;

                    row.innerHTML = `
                        <div class="product-info">
                            <p>${product.name}, ${item.quantity}, ${product_price}, ${product.price}</p>
                        </div>
                       
                    `;


                    container.appendChild(row);
                    totle_price = totle_price + product_price
                });
                    const data = document.createElement('div');
                    //Shipping cost
                    totle_price = totle_price + shippingcost()
                    //The added cart fee
                    let card_paymant  = (totle_price * 0.015) +0.2;
                    card_paymant = Math.ceil(card_paymant * 100) / 100;

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