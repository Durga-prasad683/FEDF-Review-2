import { createContext, useContext, useState } from "react";
import { getUsers, saveUsers } from "./store";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

// Demo admin credentials
const ADMIN_EMAIL = "admin@streamvibe.com";
const ADMIN_PASSWORD = "admin123";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("loggedInUser")));
  const [role, setRole] = useState(() => localStorage.getItem("loggedInRole"));

  // Save the session in Local Storage and in React state
  const startSession = (u, r) => {
    localStorage.setItem("loggedInUser", JSON.stringify(u));
    localStorage.setItem("loggedInRole", r);
    setUser(u);
    setRole(r);
  };

  // Signup: returns an error message, or null when it worked
  const signup = (name, email, password) => {
    const users = getUsers();
    if (users.some((u) => u.email === email)) return "That email is already registered.";
    saveUsers([...users, { name, email, password }]); // Save user to Local Storage
    return null;
  };

  // Login: returns "admin", "user" or null (wrong credentials)
  const login = (email, password) => {
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      startSession({ name: "Administrator", email }, "admin");
      return "admin";
    }
    const found = getUsers().find((u) => u.email === email && u.password === password);
    if (!found) return null;
    startSession(found, "user");
    return "user";
  };

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("loggedInRole");
    setUser(null);
    setRole(null);
  };

  // Update the name in both the users list and the session
  const updateName = (name) => {
    saveUsers(getUsers().map((u) => (u.email === user.email ? { ...u, name } : u)));
    startSession({ ...user, name }, role);
  };

  return (
    <AuthContext.Provider value={{ user, role, signup, login, logout, updateName }}>
      {children}
    </AuthContext.Provider>
  );
}
