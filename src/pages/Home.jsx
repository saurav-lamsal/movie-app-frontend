import { useEffect, useState } from "react";
import Search from "../components/Search/Search";
import MovieCard from "../components/MovieCard/MovieCard";
import { Link } from "react-router-dom";

const categories = ["Trending", "Top Rated", "Upcoming", "Now Playing"];

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [movies, setMovies] = useState(); // state to hold movie data
  const [loading, setLoading] = useState(true); //loading state to manange UI while fetchingdata
  const [error, setError] = useState(); //error handling state
  const [selectedCategory, setSelectedCategory] = useState("");

  const [favorites, setFavorites] = useState([]);

  //logic for frontend search
  const filteredMovies = movies?.filter((movie) =>
    movie?.title?.toLowerCase().includes(searchTerm?.toLowerCase())
  );

  useEffect(() => {
    const fetchMovies = async () => {
      let url =
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

      if (selectedCategory === "Trending") {
        // "===" --> checks both value and type
        url = "https://api.themoviedb.org/3/trending/movie/week?language=en-US";
      } else if (selectedCategory === "Top Rated") {
        url =
          "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
      } else if (selectedCategory === "Upcoming") {
        url =
          "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
      } else if (selectedCategory === "Now Playing") {
        url =
          "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
      }

      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTYzMGZlOTkzNzM1NGNmYjM3MjhjMjI5NDhmOWE0MyIsIm5iZiI6MTc0MzUxMTM3OC43MTgwMDAyLCJzdWIiOiI2N2ViZGY1MjU4ZTBhYTIzMzhmYjEwMjgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.3-eh4jUswnQR6RwsBMo6QvFKYQH98sGxeMzLem_OK64",
        },
      };
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setMovies(data.results);
        setLoading(false); // stop loading while data is fetched
      } catch (err) {
        setError(err.message);
      }
    };

    fetchMovies();
  }, [selectedCategory]); // Dependency array: Empty dependency array ensures the useEffect runs only once

  useEffect(() => {
    //Get favorite movies from localStorage
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || []; // JSON.parse() js method, JSON-formatted string converts into javascript object
    setFavorites(storedFavorites);
  }, []);

  console.log(favorites, "fav");

  const toggleFavorite = (movie) => {
    let updateFavorites;
    console.log(updateFavorites, "up");
    if (favorites.some((fav) => fav.id === movie.id)) {
      // Remove movie from favorites
      updateFavorites = favorites.filter((fav) => fav.id !== movie.id);
    } else {
      // Add movie to favorites
      updateFavorites = [...favorites, movie]; // arr =[1,2,3] arr2=[...arr, 4] ---> [1,2,3,4]---> destructuring array
    }
    localStorage.setItem("favorites", JSON.stringify(updateFavorites));
    setFavorites(updateFavorites);
  };

  
  return (
    <>
      <div className="header">
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        {categories.map((item) => (
          <button
            className="category-buttons"
            onClick={() => setSelectedCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="movie-grid">
        {/* <ToggleTheme /> */}
        {/* <div className="movie-card"> */}
        {filteredMovies?.length > 0 ? (
          filteredMovies.map((item) => (
            // <Link to={`/movie/${item.id}`}>
            <MovieCard
              genre={item.genre}
              title={item.title}
              imgSrc={item.poster_path}
              onClick={() => toggleFavorite(filteredMovies)}
            />
            // </Link>
          ))
        ) : loading ? (
          <div className="loader">Loading...</div>
        ) : error ? (
          <>Error..</>
        ) : (
          <>NO MOVIE FOUND</>
        )}
      </div>
      {/* </div> */}
    </>
  );
};

export default Home;
