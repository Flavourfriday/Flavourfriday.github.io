

document.addEventListener('DOMContentLoaded', () => {
    const cartContainer = document.getElementById('cart-items');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'border p-4 mb-4';
        itemDiv.innerHTML = `
            <h3 class="text-xl">${item.name}</h3>
            <p>Price: $${item.price}</p>
        `;
        cartContainer.appendChild(itemDiv);
    });

    document.getElementById('checkout').addEventListener('click', () => {
        alert('Thank you for your order!');
        localStorage.removeItem('cart');
        window.location.href = 'index.html';
    });
});
