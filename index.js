function fetchBooks() {
  // To pass the tests, return the fetch promise.
   return fetch('https://anapioficeandfire.com/api/books')
    .then((resp) => {
      return resp.json()
    })
   .then((json) => {
    renderBooks(json)
   })
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
