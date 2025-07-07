// js/main.js
// js/main.js

const savedBooks = JSON.parse(localStorage.getItem("customBooks")) || [];
const allBooks = [...books, ...savedBooks]; // Merge both arrays

const bookList = document.getElementById("book-list");

function displayBooks() {
  allBooks.forEach(book => {
    const bookCard = document.createElement('div');
    bookCard.className = 'book-card';

    bookCard.innerHTML = `
      <img src="${book.image}" alt="${book.title}">
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <p>₹${book.price}</p>
      <p>${book.description}</p>
      <button onclick="addToCart(${book.id})">Add to Cart</button>
    `;

    bookList.appendChild(bookCard);
  });
}

function addToCart(id) {
  const all = [...books, ...savedBooks];
  const book = all.find(b => b.id === id);

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const exists = cart.find(item => item.id === id);
  if (exists) {
    exists.quantity += 1;
  } else {
    cart.push({ ...book, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`"${book.title}" added to cart!`);
}

displayBooks();



// js/main.js
function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const book = books.find(b => b.id === id);

  const exists = cart.find(item => item.id === id);
  if (exists) {
    exists.quantity += 1;
  } else {
    cart.push({ ...book, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`"${book.title}" added to cart!`);
}
