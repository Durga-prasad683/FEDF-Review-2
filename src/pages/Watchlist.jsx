import { useState } from "react";
import Layout from "../components/Layout";
import MovieCard from "../components/MovieCard";
import { getMovie } from "../data";
import { getWatchlist, saveWatchlist } from "../store";

export default function Watchlist() {
  // Read the saved movie ids from Local Storage
  const [ids, setIds] = useState(getWatchlist());

  const handleRemove = (id) => {
    const updated = ids.filter((x) => x !== id);
    saveWatchlist(updated);
    setIds(updated);
  };

  return (
    <Layout>
      <main className="container" style={{ paddingTop: 26 }}>
        <div className="section-head"><h2>My List</h2><p>Saved in Local Storage, stays after refresh</p></div>
        {ids.length === 0 ? (
          <div className="empty">My List is empty. Open Movies and add something to watch later.</div>
        ) : (
          <div className="movie-grid">
            {ids.map((id) => <MovieCard key={id} movie={getMovie(id)} onRemove={handleRemove} />)}
          </div>
        )}
      </main>
    </Layout>
  );
}
