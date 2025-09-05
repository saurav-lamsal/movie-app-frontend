import Counter from "./Counter";
import { Home } from "./Home";
import Movie from "./Movie";
import Navbar from "./components/Navbar/Navbar";
import WatchMovie from "./WatchMovie";
import ToggleTheme from "./ToggleTheme";
import Search from "./components/Search/Search";
import MovieCard from "./components/MovieCard/MovieCard";
import { useState } from "react";
import "./app.css";

const movieData = [
  { id: 1, title: "Jari 2", genre: "Drama" },
  { id: 2, title: "Titanic", genre: "Romance" },
  { id: 3, title: "Houseful", genre: "comedy" },
  { id: 4, title: "Inception", genre: "Thriller" },
  { id: 5, title: "jari", genre: "Drama" },
]; //data will be from api

//[jari2, titanic,houseful,inception,jari]

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredMovies = movieData?.filter((movie) =>
    movie?.title?.toLowerCase().includes(searchTerm?.toLowerCase())
  );
  console.log(filteredMovies);
  // functional component
  return (
    // react fragments
    <>
      <Navbar />
      <div>
        {/* <ToggleTheme /> */}
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="cards">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((item) => (
              <MovieCard genre={item.genre} title={item.title} />
            ))
          ) : (
            <>NO MOVIE FOUND</>
          )}
        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
};

export default App;
