import Navbar from "./components/Navbar/Navbar";
import "./app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import MovieDetails from "./pages/MovieDetails";

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
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movie/:movieId" element={<MovieDetails />} />
        {/* <Route path="/" element={<About />} /> */}
        <Route />
      </Routes>
      {/* <Footer />; */}
    </BrowserRouter>
  );
};

export default App;
