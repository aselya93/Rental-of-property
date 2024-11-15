import React, { useState, useEffect } from "react";
import axiosInstance from "../axiosInstance";

function Favorites(props) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    loadFav();
  }, []);

  async function loadFav() {
    try {
      const { data } = await axiosInstance.get("/favorites/");
      setFavorites(data.favorites);
    } catch (error) {
      console.error("Error fetching favorites:", error.message);
    }
  }

  
  return (
    <div>
      <h2>Favorites</h2>
      {console.log(favorites)}
      {favorites.length > 0 ? (
        <ul>
          {favorites.map((fav) => (
            <li key={fav.id}>{fav.user_id}</li>
          ))}
        </ul>
      ) : (
        <p>No favorites found.</p>
      )}
    </div>
  );
}

export default Favorites;
