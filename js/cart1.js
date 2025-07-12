// Initialize cart from localStorage
// If nothing is stored yet, use an empty array
let cart = JSON.parse(localStorage.getItem("cart") || "[]");

// Function to add an item to the cart or increase its quantity if it already exists
function addToCart(productId) {
  // Convert productId to string to ensure type consistency
  productId = String(productId);

  // Fetch the list of products from products.json
  fetch("products.json")
    .then(res => res.json())
    .then(products => {
      // Find the product with the matching id
      const item = products.find(p => p.id === productId);
      if (item) {
        // Check if the item already exists in the cart
        const existing = cart.find(p => p.id === productId);
        if (existing) {
          // If it exists, increase its quantity by 1
          existing.quantity += 1;
        } else {
          // If not, add it to the cart with quantity 1
          cart.push({ ...item, quantity: 1 });
        }
        // Save the updated cart back to localStorage
        localStorage.setItem("cart", JSON.stringify(cart));
        // Notify the user
        alert(`${item.name} added to cart!`);
      } else {
        // If the product was not found, alert the user
        alert("Invalid QR/Product not found!");
      }
    });
}

// Function to remove an item from the cart by its productId
function removeFromCart(productId) {
  // Convert productId to string to ensure type consistency
  productId = String(productId);

  // Reload the cart from localStorage to ensure it's up to date
  cart = JSON.parse(localStorage.getItem("cart") || "[]");

  // Filter out the item with the matching id
  cart = cart.filter(item => item.id !== productId);

  // Save the updated cart back to localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Refresh the cart display on the page
  loadCart();
}

// Make removeFromCart globally accessible
// This is necessary so that the inline onclick attribute in the HTML can call it
window.removeFromCart = removeFromCart;

// Function to display the cart as a table with Remove buttons
function loadCart() {
  // Reload the cart from localStorage
  cart = JSON.parse(localStorage.getItem("cart") || "[]");

  // Get the table element where cart items will be displayed
  const list = document.getElementById("cart-list");
  let total = 0; // To keep track of the total price

  // If the cart is empty, show a message and set total to zero
  if (cart.length === 0) {
    list.innerHTML = "<tr><td colspan='5'>Your cart is empty.</td></tr>";
    document.getElementById("total").innerText = `Total: ₹0`;
    return;
  }

  // Start building the table HTML with headers
  let tableHTML = `
    <tr>
      <th>Product</th>
      <th>Price (₹)</th>
      <th>Quantity</th>
      <th>Subtotal (₹)</th>
      <th>Action</th>
    </tr>
  `;

  // Add a row for each item in the cart
  cart.forEach(item => {
    const subtotal = item.price * item.quantity; // Calculate subtotal for this item
    total += subtotal; // Add to total price
    tableHTML += `
      <tr>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td>${item.quantity}</td>
        <td>${subtotal}</td>
        <td>
          <!-- The Remove button calls removeFromCart with the product's id as a string -->
          <button onclick="removeFromCart('${item.id}')" style="background:#e11d48; color:#fff; border:none; border-radius:5px; padding:6px 12px; cursor:pointer;">Remove</button>
        </td>
      </tr>
    `;
  });

  // Update the table with the generated HTML
  list.innerHTML = tableHTML;

  // Update the total price display
  document.getElementById("total").innerText = `Total: ₹${total}`;
}

// Optional: Placeholder function for checkout button
function checkoutCart() {
  alert("Checkout functionality coming soon!");
}
