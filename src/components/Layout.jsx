import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

// Navbar + page content + footer. "solid" = black navbar, "admin" = admin menu
export default function Layout({ children, solid = true, admin = false }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login"); // redirect after logout
  };

  return (
    <>
      <header className={solid ? "navbar solid" : "navbar"}>
        <div className="container nav-inner">
          <div className="logo">Let's Vibe{admin && " Admin"}</div>
          <ul className="nav-links">
            {admin ? (
              <li><NavLink to="/admin">Dashboard</NavLink></li>
            ) : (
              <>
                <li><NavLink to="/" end>Home</NavLink></li>
                <li><NavLink to="/movies">Movies</NavLink></li>
                <li><NavLink to="/watchlist">My List</NavLink></li>
                <li><NavLink to="/profile">Profile</NavLink></li>
              </>
            )}
          </ul>
          <div className="nav-user">
            <span>Hi, {user?.name}</span>
            <button className="btn btn-small btn-outline" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </header>
      {children}
      <footer className="footer">Let's Vibe &middot; React + Vite &middot; Local Storage demo project</footer>
    </>
  );
}
