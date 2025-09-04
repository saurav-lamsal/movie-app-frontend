const MovieCard = ({ title, genre }) => {
  return (
    <div className="movie-card" style={{ border: "1px solid #333" }}>
      <h1>{title}</h1>

      <p> Genre: {genre}</p>
    </div>
  );
};

export default MovieCard;
