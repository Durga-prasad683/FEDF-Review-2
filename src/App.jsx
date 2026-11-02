import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Watch from "./pages/Watch";
import Watchlist from "./pages/Watchlist";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";

// Route guard: only the matching role can open the page, others go to login
function Protected({ role, children }) {
  const { role: current } = useAuth();
  return current === role ? children : <Navigate to="/login" replace />;
}

export default function App() {
  const user = (page) => <Protected role="user">{page}</Protected>;
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={user(<Home />)} />
      <Route path="/movies" element={user(<Movies />)} />
      <Route path="/watch/:id" element={user(<Watch />)} />
      <Route path="/watchlist" element={user(<Watchlist />)} />
      <Route path="/profile" element={user(<Profile />)} />
      <Route path="/admin" element={<Protected role="admin"><Admin /></Protected>} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
