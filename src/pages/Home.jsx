import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { movies, genres, posterUrl, backdropUrl } from "../data";
import { addToWatchlist } from "../store";

// One horizontal Netflix-style row (CSS Flexbox)
function Row({ title, list }) {
  return (
    <div className="row-wrap">
      <div className="row-head"><h2>{title}</h2></div>
      <div className="row-track">
        {list.map((m) => (
          <Link key={m.id} className="row-card" to={`/watch/${m.id}`} title={m.title}>
            <img src={posterUrl(m)} alt={m.title} loading="lazy" />
            <div className="row-card-overlay">
              <div className="row-card-title">{m.title}</div>
              <div className="row-card-meta"><span className="rating">&#9733; {m.rating}</span><span>{m.year}</span></div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const featured = movies[0];
  const heroBg =
    "linear-gradient(to top, #141414 2%, rgba(20,20,20,0.25) 55%, rgba(20,20,20,0.75)), " +
    "linear-gradient(to right, rgba(20,20,20,0.85) 5%, rgba(20,20,20,0.1) 50%), " +
    `url('${backdropUrl(featured)}')`;

  const handleAdd = () => alert(addToWatchlist(featured.id) ? "Added to My List." : "Already in My List.");

  return (
    <Layout solid={false}>
      <section className="hero" style={{ backgroundImage: heroBg }}>
        <div className="hero-content">
          <h1>{featured.title}</h1>
          <div className="hero-meta">
            <span className="rating">&#9733; {featured.rating}</span><span>{featured.year}</span><span>{featured.genre}</span>
          </div>
          <p>{featured.description}</p>
          <div className="hero-actions">
            <Link className="btn btn-light" to={`/watch/${featured.id}`}>&#9654; Play</Link>
            <button className="btn btn-outline" onClick={handleAdd}>+ My List</button>
          </div>
        </div>
      </section>

      <Row title="Trending Now" list={movies.slice(0, 5)} />
      <Row title="Sci-Fi Picks" list={movies.filter((m) => m.genre === "Sci-Fi")} />
      <Row title="Drama" list={movies.filter((m) => m.genre === "Drama")} />
      <Row title="Thrillers" list={movies.filter((m) => m.genre === "Thriller")} />

      {/* Categories (CSS Grid) */}
      <div className="container">
        <div className="section-head"><h2>Browse by category</h2></div>
        <div className="category-grid">
          {genres.map((g) => (
            <Link key={g} className="category-card" to={`/movies?genre=${g}`}>{g}</Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
