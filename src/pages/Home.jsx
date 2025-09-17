import { useEffect, useState } from "react";
import Search from "../components/Search/Search";
import MovieCard from "../components/MovieCard/MovieCard";
import { Link } from "react-router-dom";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [movies, setMovies] = useState(); // state to hold movie data
  const [loading, setLoading] = useState(true); //loading state to manange UI while fetchingdata
  const [error, setError] = useState(); //error handling state

  const filteredMovies = movies?.filter((movie) =>
    movie?.title?.toLowerCase().includes(searchTerm?.toLowerCase())
  );

  useEffect(() => {
    const fetchMovies = async () => {
      const url =
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
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
  }, []); // Dependency array: Empty dependency array ensures the useEffect runs only once

  return (
    <>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="movie-grid">
        {/* <ToggleTheme /> */}
        {/* <div className="movie-card"> */}
        {filteredMovies?.length > 0 ? (
          filteredMovies.map((item) => (
            <Link to={`/movie/${item.id}`}>
              <MovieCard
                genre={item.genre}
                title={item.title}
                imgSrc={item.poster_path}
              />
            </Link>
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
