import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const MovieDetails = () => {
  const { movieId } = useParams(); // used for data passing through routes
  const navigate = useNavigate(); // to navigate from any pages to directed page

  const [movieDetail, setMovieDetail] = useState(); // state to hold movie data
  const [loading, setLoading] = useState(true); //loading state to manange UI while fetchingdata
  const [error, setError] = useState();

  console.log(movieDetail, "movie");

  useEffect(() => {
    const fetchMovies = async () => {
      const url = `https://api.themoviedb.org/3/movie/${movieId}`;
      const options = {
        method: "GET",
        headers: {
          // accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTYzMGZlOTkzNzM1NGNmYjM3MjhjMjI5NDhmOWE0MyIsIm5iZiI6MTc0MzUxMTM3OC43MTgwMDAyLCJzdWIiOiI2N2ViZGY1MjU4ZTBhYTIzMzhmYjEwMjgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.3-eh4jUswnQR6RwsBMo6QvFKYQH98sGxeMzLem_OK64",
        },
      };
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data, "data");
        setMovieDetail(data);
        setLoading(false); // stop loading while data is fetched
      } catch (err) {
        setError(err.message);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      {/* ? --> optional chaining  */}
      <img
        src={`https://image.tmdb.org/t/p/w500${movieDetail?.backdrop_path}`}
      />
      <h1>{movieDetail?.title}</h1>
      <p>{movieDetail?.overview}</p>
      <button onClick={() => navigate("/")}>GO Back</button>
    </div>
  );
};

export default MovieDetails;
