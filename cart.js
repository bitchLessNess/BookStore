// <!-- cart.html -->
// <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Your Cart</title>
  <link rel="stylesheet" href="style/styles.css">
</head>
<body>

  <header>
    <h1>Your Cart</h1>
    <nav>
      <a href="index.html">Home</a>
      <a href="books.html">Books</a>
      <a href="contact.html">Contact</a>
    </nav>
  </header>

  <main>
    <div id="cart-items" class="book-grid"></div>
    <div id="cart-total" style="margin-top: 20px; font-size: 1.2rem;"></div>
  </main>

  <script>
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemsDiv = document.getElementById("cart-items");
    const cartTotalDiv = document.getElementById("cart-total");

    function displayCart() {
      cartItemsDiv.innerHTML = "";
      let total = 0;

      if (cart.length === 0) {
        cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
        cartTotalDiv.innerHTML = "";
        return;
      }

      cart.forEach(item => {
        total += item.price * item.quantity;

        const div = document.createElement("div");
        div.className = "book-card";
        div.innerHTML = `
          <img src="${item.image}" alt="${item.title}">
          <h3>${item.title}</h3>
          <p>Author: ${item.author}</p>
          <p>Price: ₹${item.price} x ${item.quantity}</p>
          <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartItemsDiv.appendChild(div);
      });

      cartTotalDiv.innerHTML = `<strong>Total: ₹${total}</strong>`;
    }

    function removeFromCart(id) {
      const updatedCart = cart.filter(item => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      location.reload(); // refresh the cart page
    }

    displayCart();
  </script>

</body>
</html>
