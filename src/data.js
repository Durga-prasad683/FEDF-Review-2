// Sample movie data (no database) + image helpers
export const movies = [
  { id: 1, title: "Neon Horizon",   genre: "Sci-Fi",   year: 2023, rating: 8.4, seed: "neon-horizon",   description: "A pilot chases a signal from beyond the edge of the mapped sky." },
  { id: 2, title: "Silent Harbour", genre: "Thriller", year: 2021, rating: 7.9, seed: "silent-harbour", description: "A missing fishing boat pulls a small town into an old secret." },
  { id: 3, title: "Paper Kites",    genre: "Drama",    year: 2022, rating: 8.1, seed: "paper-kites",    description: "Two sisters rebuild their father's printing press and their friendship." },
  { id: 4, title: "Laugh Track",    genre: "Comedy",   year: 2024, rating: 7.2, seed: "laugh-track",    description: "A failed stand-up comic accidentally becomes a school teacher." },
  { id: 5, title: "Iron Valley",    genre: "Action",   year: 2020, rating: 7.6, seed: "iron-valley",    description: "A retired driver takes one last run across a closed mountain pass." },
  { id: 6, title: "The Quiet Lab",  genre: "Sci-Fi",   year: 2024, rating: 8.8, seed: "quiet-lab",      description: "A student discovers her college lab is running a forgotten experiment." },
  { id: 7, title: "Midnight Diner", genre: "Drama",    year: 2019, rating: 7.4, seed: "midnight-diner", description: "Every customer at a late night diner leaves with one problem solved." },
  { id: 8, title: "Crosswind",      genre: "Thriller", year: 2023, rating: 8.0, seed: "crosswind",      description: "An air traffic controller hears a voice that should not be on the channel." },
];
export const genres = ["Sci-Fi", "Thriller", "Drama", "Comedy", "Action"];
export const SAMPLE_VIDEO = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4";
export const posterUrl = (m) => `https://picsum.photos/seed/${m.seed}/400/600`;
export const backdropUrl = (m) => `https://picsum.photos/seed/${m.seed}/1280/720`;
export const getMovie = (id) => movies.find((m) => m.id === Number(id));
