

const menuItems = [
｛
{
id: 1, name: 'Pizza', price: 12}, id: 2, name: 'Burger' , price: 8}, id: 3, name: 'Pasta', price: 10 }
1;
document. addEventListener ('DOMContentLoaded', () => {
const menuContainer = document.getElementById ( 'menu-items');
menuItems. forEach (item => {
const itemDiv = document.createElement( 'div');
itemDiv.className = 'border p-4';
itemDiv.innerHTML =
<h3 class="text-xl">${item. name}</h3>
‹p>Price: $${item.price}</p>
‹button class="bg-blue-500 text-white p-2 mt-2" onclick="addToCart($
{item.id})">Add to Cart</button>
-.
menuContainer.appendChild(itemDiv);
｝）；
｝）；
function addToCart (itemId) {
let cart = JSON. parse (localStorage getItem( 'cart')) || [];
const item = menuItems. find (item => item.id === itemId);
cart. push (item) ;
localStorage.setItem( 'cart', JSON.stringify (cart));
alert (${item.name} has been added to your cart');
