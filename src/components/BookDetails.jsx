import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./BookDetails.css";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBook(data);
        const savedFavorites =
          JSON.parse(localStorage.getItem("favorites")) || [];
        const alreadyFavorite = savedFavorites.some(
          (fav) => fav.id === data.id
        );
        setIsFavorite(alreadyFavorite);
      });
  }, [id]);

  const handleFavorite = () => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (isFavorite) {
      const updated = savedFavorites.filter((fav) => fav.id !== book.id);
      localStorage.setItem("favorites", JSON.stringify(updated));
      setIsFavorite(false);
    } else {
      const newFavorite = {
        id: book.id,
        title: book.volumeInfo.title,
        image: book.volumeInfo.imageLinks?.thumbnail,
      };
      localStorage.setItem(
        "favorites",
        JSON.stringify([...savedFavorites, newFavorite])
      );
      setIsFavorite(true);
    }
  };

  if (!book) return <p className="loading-text">Loading book details...</p>;

  return (
    <div className="book-details-container">
      <div className="book-image-section">
        <img
          src={book.volumeInfo.imageLinks?.thumbnail}
          alt={book.volumeInfo.title}
          className="book-thumbnail"
        />
      </div>
      <div className="book-info-section">
        <h2>{book.volumeInfo.title}</h2>
        <p className="book-description">
          {book.volumeInfo.description || "No description available."}
        </p>
        <button className="favorite-button" onClick={handleFavorite}>
          {isFavorite ? "★ Remove from Favorites" : "☆ Add to Favorites"}
        </button>
      </div>
    </div>
  );
};

export default BookDetails;
