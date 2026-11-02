// Local Storage helpers (users + watchlist)
const read = (key, fallback) => {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
};

// Registered users
export const getUsers = () => read("users", []);
export const saveUsers = (users) => localStorage.setItem("users", JSON.stringify(users));

// Watchlist is saved per logged-in user (list of movie ids)
const listKey = () => "watchlist:" + (read("loggedInUser", {}).email || "guest");
export const getWatchlist = () => read(listKey(), []);
export const saveWatchlist = (ids) => localStorage.setItem(listKey(), JSON.stringify(ids));

// Add movie to watchlist, returns false if it was already saved
export const addToWatchlist = (id) => {
  const ids = getWatchlist();
  if (ids.includes(id)) return false;
  saveWatchlist([...ids, id]);
  return true;
};
