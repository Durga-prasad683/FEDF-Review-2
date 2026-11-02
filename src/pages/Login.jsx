import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check login credentials against Local Storage
    const role = login(email.trim().toLowerCase(), password);
    if (!role) return setError("Email or password is incorrect.");
    navigate(role === "admin" ? "/admin" : "/"); // Redirect to Admin or User module
  };

  return (
    <div className="auth-page">
      <header className="auth-nav"><div className="logo">Let's Vibe</div></header>
      <main className="form-wrap">
        <div className="form-card">
          <h2>Log in</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-block">Log in</button>
            <p className="message error">{error}</p>
          </form>
          <p className="form-foot">New to Let's Vibe? <Link to="/signup">Sign up now</Link>.</p>
          <div className="demo-box">Admin demo login &mdash; admin@streamvibe.com / admin123</div>
        </div>
      </main>
    </div>
  );
}
