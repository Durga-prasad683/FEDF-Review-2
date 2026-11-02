import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

export default function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState({ text: "", type: "error" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = form.name.trim();
    const email = form.email.trim().toLowerCase();
    if (!name || !email || !form.password) return setMessage({ text: "Fill in every field.", type: "error" });
    if (form.password.length < 6) return setMessage({ text: "Password must be at least 6 characters.", type: "error" });

    const error = signup(name, email, form.password);
    if (error) return setMessage({ text: error, type: "error" });

    setMessage({ text: "Account created. Opening the login page...", type: "success" });
    setTimeout(() => navigate("/login"), 1200);
  };

  return (
    <div className="auth-page">
      <header className="auth-nav"><div className="logo">Let's Vibe</div></header>
      <main className="form-wrap">
        <div className="form-card">
          <h2>Sign up</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full name</label>
              <input name="name" placeholder="Durga" value={form.name} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input name="email" placeholder="durga@test.com" value={form.email} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input name="password" type="password" placeholder="At least 6 characters" value={form.password} onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-block">Sign up</button>
            <p className={"message " + message.type}>{message.text}</p>
          </form>
          <p className="form-foot">Already registered? <Link to="/login">Log in now</Link>.</p>
        </div>
      </main>
    </div>
  );
}
