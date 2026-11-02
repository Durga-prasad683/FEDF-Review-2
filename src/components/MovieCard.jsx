import { Link } from "react-router-dom";
import { posterUrl } from "../data";
import { addToWatchlist } from "../store";

// One movie card. Pass onRemove to show a Remove button (My List page)
export default function MovieCard({ movie, onRemove }) {
  // Add movie to watchlist
  const handleAdd = () => {
    const added = addToWatchlist(movie.id);
    alert(added ? `${movie.title} added to My List.` : "Already in My List.");
  };

  return (
    <div className="movie-card">
      <Link to={`/watch/${movie.id}`}>
        <img className="poster" src={posterUrl(movie)} alt={movie.title} loading="lazy" />
      </Link>
      <div className="movie-body">
        <div className="movie-title">{movie.title}</div>
        <div className="movie-meta">
          <span>{movie.genre}</span><span>{movie.year}</span>
          <span className="rating">&#9733; {movie.rating}</span>
        </div>
        <div className="movie-actions">
          <Link className="btn btn-small" to={`/watch/${movie.id}`}>&#9654; Watch</Link>
          {onRemove
            ? <button className="btn btn-small btn-outline" onClick={() => onRemove(movie.id)}>Remove</button>
            : <button className="btn btn-small btn-outline" onClick={handleAdd}>+ My List</button>}
        </div>
      </div>
    </div>
  );
}
