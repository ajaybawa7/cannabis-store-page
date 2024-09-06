// Sample product data
let products = [
    { id: 1, name: "Indica Pre-Roll", price: 10.99, image: "./Tim Buds  10 Pack.png" },
    { id: 2, name: "Sativa Pre-Roll", price: 12.99, image: "/Hot-Box-0.05g-sup.jpeg" },
    { id: 3, name: "Hybrid Pre-Roll", price: 11.99, image: "/c6a5b1f880a724f29cab2ad82c107bc4.jpeg" },
    { id: 4, name: "CBD Flower", price: 14.99, image: "/big bag.jpeg" },
    { id: 5, name: "510 Cartridge - Indica", price: 29.99, image: "/indicacart.jpeg" },
    { id: 6, name: "510 Cartridge - Sativa", price: 31.99, image: "/cb8e092ec054f889837d6156198bd183.jpeg" }
];

const cart = [];

// Display products
function displayProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

// Update cart display
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = "";
    cart.forEach((item, index) => {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(cartItem);
    });
    calculateTotal();
}

// Calculate total price
function calculateTotal() {
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}

// Initialize page
window.onload = function() {
    displayProducts();
};
