import { useState } from "react";
import Layout from "../components/Layout";
import { movies, genres } from "../data";
import { getUsers } from "../store";

export default function Admin() {
  const users = getUsers(); // registered users come from Local Storage
  // Content table: status can be toggled to demonstrate content management
  const [content, setContent] = useState(
    movies.slice(0, 6).map((m, i) => ({ title: m.title, category: m.genre, status: i % 3 === 2 ? "Draft" : "Published" }))
  );

  const toggleStatus = (title) =>
    setContent(content.map((c) => c.title === title ? { ...c, status: c.status === "Published" ? "Draft" : "Published" } : c));

  return (
    <Layout admin>
      <main className="container" style={{ paddingTop: 26 }}>
        <div className="section-head"><h2>Admin dashboard</h2><p>User count is read from Local Storage</p></div>

        {/* Statistics cards (CSS Grid) */}
        <section className="stats-grid">
          <div className="stat-card"><h3>Registered users</h3><p className="stat-number">{users.length}</p></div>
          <div className="stat-card"><h3>Total videos</h3><p className="stat-number">{movies.length}</p></div>
          <div className="stat-card"><h3>Total views</h3><p className="stat-number">12,480</p></div>
          <div className="stat-card"><h3>Categories</h3><p className="stat-number">{genres.length}</p></div>
        </section>

        <section className="table-card">
          <h2>Registered users</h2>
          <table>
            <thead><tr><th>#</th><th>Name</th><th>Email</th></tr></thead>
            <tbody>
              {users.length === 0 && <tr><td colSpan="3">No users have signed up yet.</td></tr>}
              {users.map((u, i) => <tr key={u.email}><td>{i + 1}</td><td>{u.name}</td><td>{u.email}</td></tr>)}
            </tbody>
          </table>
        </section>

        <section className="table-card">
          <h2>Manage content</h2>
          <table>
            <thead><tr><th>Movie</th><th>Category</th><th>Status</th><th>Action</th></tr></thead>
            <tbody>
              {content.map((c) => (
                <tr key={c.title}>
                  <td>{c.title}</td><td>{c.category}</td>
                  <td><span className={"status " + c.status.toLowerCase()}>{c.status}</span></td>
                  <td><button className="btn btn-small btn-outline" onClick={() => toggleStatus(c.title)}>Toggle status</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </Layout>
  );
}
