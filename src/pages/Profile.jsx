import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { useAuth } from "../AuthContext";
import { getWatchlist } from "../store";

export default function Profile() {
  const { user, updateName, logout } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState(user.name);
  const [message, setMessage] = useState({ text: "", type: "" });

  const handleSave = () => {
    if (!name.trim()) return setMessage({ text: "Enter a name before saving.", type: "error" });
    updateName(name.trim());
    setMessage({ text: "Name updated.", type: "success" });
  };

  return (
    <Layout>
      <main className="container" style={{ paddingTop: 26 }}>
        <div className="section-head"><h2>Your profile</h2></div>
        <section className="profile-grid">
          <div className="panel">
            <h2>Account details</h2>
            <div className="info-row"><span>Name</span><span>{user.name}</span></div>
            <div className="info-row"><span>Email</span><span>{user.email}</span></div>
            <div className="info-row"><span>Movies in My List</span><span>{getWatchlist().length}</span></div>
            <div className="info-row"><span>Role</span><span>User</span></div>
          </div>
          <div className="panel">
            <h2>Update your name</h2>
            <div className="form-group">
              <label>Display name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <button className="btn" onClick={handleSave}>Save changes</button>{" "}
            <button className="btn btn-outline" onClick={() => { logout(); navigate("/login"); }}>Logout</button>
            <p className={"message " + message.type}>{message.text}</p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
