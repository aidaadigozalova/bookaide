import React from "react";

function Favorites({ favorites, removeFromFavorites }) {
  return (
    <section className="favorites">
      <h2>Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorite books yet.</p>
      ) : (
        favorites.map((book) => {
          const info = book.volumeInfo || book; 
          return (
            <article key={book.id} className="book-card">
              {info.imageLinks?.thumbnail ? (
                <img src={info.imageLinks.thumbnail} alt={info.title} />
              ) : (
                <div className="placeholder-img">No Image</div>
              )}
              <h3>{info.title || "No title available"}</h3>
              <p>{info.authors?.join(", ") || "Unknown author"}</p>
              <button onClick={() => removeFromFavorites(book.id)}>
                Remove
              </button>
            </article>
          );
        })
      )}
    </section>
  );
}

export default Favorites;
