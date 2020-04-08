const API_KEY = "g0KPzwSpCZBQ4FT0PWaIVD9YIXaJz6mG";
const LIST_NAME = "hardcover-fiction";
const API_STEM = "https://api.nytimes.com/svc/books/v3/lists/current";

function fetchBooks(list_name = LIST_NAME) {
  let url = `${API_STEM}/${LIST_NAME}.json?api-key=${API_KEY}`;
  return fetch(url)
    .then(response => response.json())
    .then(responseJson => {
      return responseJson.results.books;
    })
    .catch(error => {
      console.error(error);
    });
}

export default { fetchBooks: fetchBooks };
