import React from "react";
import { Link } from "react-router-dom";

const BookList = ({ books, addToFavorites }) => {
  return (
    <div className="book-list">
      {books.map((book) => {
        const info = book.volumeInfo || {};
        return (
          <div key={book.id} className="book-card">
            <img src={info.imageLinks?.thumbnail} alt={info.title} />
            <h3>{info.title}</h3>
            <p>{info.authors ? info.authors.join(", ") : "Unknown Author"}</p>
            <Link to={`/book/${book.id}`}>Details</Link>
            <button className="add-fav-btn" onClick={() => addToFavorites(book)}>
  FAV
</button>

          </div>
        );
      })}
    </div>
  );
};

export default BookList;
