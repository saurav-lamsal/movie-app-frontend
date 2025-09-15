import Counter from "./Counter";
import Movie from "./Movie";
import Navbar from "./components/Navbar/Navbar";
import WatchMovie from "./WatchMovie";
import ToggleTheme from "./ToggleTheme";
import Search from "./components/Search/Search";
import MovieCard from "./components/MovieCard/MovieCard";
import "./app.css";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";

// const movieData = [
//   { id: 1, title: "Jari 2", genre: "Drama" },
//   { id: 2, title: "Titanic", genre: "Romance" },
//   { id: 3, title: "Houseful", genre: "comedy" },
//   { id: 4, title: "Inception", genre: "Thriller" },
//   { id: 5, title: "jari", genre: "Drama" },
// ]; //data will be from api

//[jari2, titanic,houseful,inception,jari]

const App = () => {
  // functional component
  return (
    // react fragments
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/" element={<About />} /> */}
        <Route />
      </Routes>
    </Router>
  );
};

export default App;
