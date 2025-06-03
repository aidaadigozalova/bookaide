import React, { useEffect, useState } from "react";
import Favorites from "../components/Favorites";

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);
  const [message, setMessage] = useState(""); 

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(favs);
  }, []);

  const removeFromFavorites = (id) => {
    const updatedFavs = favorites.filter((book) => book.id !== id);
    setFavorites(updatedFavs);
    localStorage.setItem("favorites", JSON.stringify(updatedFavs));
    
    setMessage("Kitab favoritlərdən silindi.");
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div>
      {message && <div className="validation-message">{message}</div>}
      <Favorites
        favorites={favorites}
        removeFromFavorites={removeFromFavorites}
      />
    </div>
  );
};

export default FavoritesPage;
