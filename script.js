let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add item to cart
function addToCart(name, price) {
    cart.push({
        name: name,
        price: price
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " added to cart!");
}

// Display cart
function loadCart() {

    let cartItems = document.getElementById("cartItems");
    let total = document.getElementById("total");

    if (!cartItems || !total) return;

    cartItems.innerHTML = "";

    let totalPrice = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
        total.innerHTML = "₹0";
        return;
    }

    cart.forEach((item, index) => {

        totalPrice += item.price;

        cartItems.innerHTML += `
        <div style="display:flex;justify-content:space-between;align-items:center;padding:12px;border-bottom:1px solid #ddd;">
            <div>
                <strong>${item.name}</strong><br>
                ₹${item.price}
            </div>

            <button onclick="removeItem(${index})"
            style="background:red;color:white;border:none;padding:8px 12px;border-radius:5px;cursor:pointer;">
            Remove
            </button>
        </div>
        `;

    });

    total.innerHTML = "₹" + totalPrice;
}

// Remove item
function removeItem(index) {

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    loadCart();

}

// Checkout
function checkout() {

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    alert("🎉 Order placed successfully!\nThank you for ordering from Luxury Food.");

    localStorage.removeItem("cart");

    cart = [];

    loadCart();

}
