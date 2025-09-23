import "./movieCard.css";
const MovieCard = ({ title, genre, imgSrc, onClick, isFavorite }) => {
  console.log(isFavorite, "isfav");
  return (
    <div
      className="bg-gray-800 text-white rounded-xl overflow-hidden shadow-2xl hover:scale-105 transition-transform"

      // hover:scale-105----> while being hovered, zooms the element to 105%of its original size
      //rounded-xl ---> applies border radius
      // style={{
      //   // border: "1px solid #333",
      //   // background: "#746f6fff",
      //   // borderRadius: "20px",
      //   // padding: "15px",
      // }}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${imgSrc}`}
        alt={title}
        className="w-full h-80 object-cover"
      />
      <div className="p-4">
        <h1 className="text-2xl font-semibold mb-2">{title}</h1>
        <button onClick={onClick}>
          {isFavorite ? "Remove From Favorites" : "Add to Favorite"}
        </button>
        <p className="text-sm text-gray-400"> Genre: {genre}</p>
      </div>
    </div>
  );
};

export default MovieCard;
