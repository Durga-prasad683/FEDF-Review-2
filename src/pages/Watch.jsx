import { Link, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { getMovie, movies, backdropUrl, SAMPLE_VIDEO } from "../data";
import { addToWatchlist } from "../store";

export default function Watch() {
  const { id } = useParams();
  const movie = getMovie(id) || movies[0];

  const handleAdd = () => alert(addToWatchlist(movie.id) ? `${movie.title} added to My List.` : "Already in My List.");

  return (
    <Layout solid={false}>
      <section
        className="watch-banner"
        style={{ backgroundImage: `linear-gradient(rgba(20,20,20,0.55), rgba(20,20,20,0.55)), url('${backdropUrl(movie)}')` }}
      >
        <div className="watch-banner-fade"><div className="container"><h1>{movie.title}</h1></div></div>
      </section>

      <main className="container">
        <section className="watch-layout">
          {/* HTML5 video element with a sample MP4 */}
          <video key={movie.id} controls src={SAMPLE_VIDEO} poster={backdropUrl(movie)} />
          <aside className="watch-info">
            <div className="movie-meta">
              <span>{movie.genre}</span><span>{movie.year}</span><span className="rating">&#9733; {movie.rating}</span>
            </div>
            <p>{movie.description}</p>
            <button className="btn btn-block" onClick={handleAdd}>+ Add to My List</button>
            <p className="form-foot"><Link to="/movies">&larr; Back to all movies</Link></p>
          </aside>
        </section>
      </main>
    </Layout>
  );
}
