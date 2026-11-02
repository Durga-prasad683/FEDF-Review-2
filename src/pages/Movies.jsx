import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "../components/Layout";
import MovieCard from "../components/MovieCard";
import { movies, genres } from "../data";

export default function Movies() {
  const [params] = useSearchParams();
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState(params.get("genre") || "All");

  // Filter movies by title (search) and by genre
  const filtered = movies.filter(
    (m) => m.title.toLowerCase().includes(search.toLowerCase()) && (genre === "All" || m.genre === genre)
  );

  return (
    <Layout>
      <main className="container" style={{ paddingTop: 26 }}>
        <div className="section-head"><h2>All movies</h2><p>Search by title or filter by genre</p></div>
        <div className="filter-bar">
          <input placeholder="Search a movie title" value={search} onChange={(e) => setSearch(e.target.value)} />
          <select value={genre} onChange={(e) => setGenre(e.target.value)}>
            <option value="All">All genres</option>
            {genres.map((g) => <option key={g} value={g}>{g}</option>)}
          </select>
        </div>
        {filtered.length === 0 ? (
          <div className="empty">No movies match that search.</div>
        ) : (
          <div className="movie-grid">
            {filtered.map((m) => <MovieCard key={m.id} movie={m} />)}
          </div>
        )}
      </main>
    </Layout>
  );
}
