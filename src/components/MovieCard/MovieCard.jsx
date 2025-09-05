import "./movieCard.css";
const MovieCard = ({ title, genre }) => {
  return (
    <div
      className="movie-card"
      style={{
        border: "1px solid #333",
        background: "#746f6fff",
        borderRadius: "20px",
        padding: "15px",
      }}
    >
      <h1>{title}</h1>

      <p> Genre: {genre}</p>
    </div>
  );
};

export default MovieCard;
