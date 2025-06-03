import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import BookList from "../components/BookList";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("React");
  const [loading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${query}`
        );
        const data = await res.json();
        setBooks(data.items || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, [query]);

 
  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(favs);
  }, []);

  const addToFavorites = (book) => {
    if (favorites.find((fav) => fav.id === book.id)) return;

    const updatedFavs = [...favorites, book];
    setFavorites(updatedFavs);
    localStorage.setItem("favorites", JSON.stringify(updatedFavs));
  };

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <BookList books={books} addToFavorites={addToFavorites} />
      )}
    </div>
  );
};

export default Home;
