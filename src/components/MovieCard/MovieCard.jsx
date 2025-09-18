import "./movieCard.css";
const MovieCard = ({ title, genre, imgSrc,onClick }) => {
  return (
    <div
      className="movie-card"
      // style={{
      //   // border: "1px solid #333",
      //   // background: "#746f6fff",
      //   // borderRadius: "20px",
      //   // padding: "15px",
      // }}
    >
      <img src={`https://image.tmdb.org/t/p/w500${imgSrc}`} alt={title} />
      <h1>{title}</h1>
      <button onClick={onClick}>Add to Favorite</button>

      <p> Genre: {genre}</p>
    </div>
  );
};

export default MovieCard;
