# Let's Vibe - Video Streaming Platform (React + Vite)

SDC Project Review-2. React + Vite frontend with Local Storage authentication.

## Tech
React 18, Vite, React Router, CSS Grid + Flexbox, Local Storage (no backend, no database).

## Modules
- **User Module:** Signup, Login, Home, Movies (search + genre filter), Watch (HTML5 video), My List, Profile, Logout
- **Admin Module:** Admin login, Dashboard statistics, Registered users, Manage content, Logout

## Admin demo login
admin@streamvibe.com / admin123

## Run locally
```
npm install
npm run dev
```

## Deploy on Vercel
```
npm install -g vercel
vercel login
vercel
```
`vercel.json` already contains the rewrite needed for React Router (page refresh on any route works).

## Local Storage keys
`users`, `loggedInUser`, `loggedInRole`, `watchlist:<email>`

Frontend academic implementation. Passwords are stored in plain text only for demonstration.
