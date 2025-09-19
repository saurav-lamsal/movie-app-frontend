import React, { useEffect, useState } from "react";

const Favorites = () => {
  const [favorites, setFavorites] = useState();

  console.log(favorites, "favorites");
  useEffect(() => {
    //Retrieve favorrite movies from localStorage
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div>
      <h1>YOUR FAVORITES MOVIES</h1>
      {favorites?.[0]?.map((movie) => (
        <div>
          <h3>{movie.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
