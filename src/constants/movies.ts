import MovieType from "../entities/movie-type";

const movies: MovieType[] = [
  {
    id: 1,
    name: "Annihilation",
    price: 100,
    genre: { id: 4, value: "scifi", label: "Sci-Fi" },
  },
  {
    id: 2,
    name: "John Wick 1",
    price: 90,
    genre: { id: 1, value: "action", label: "Action" },
  },
  {
    id: 3,
    name: "The Great Gatsby",
    price: 110,
    genre: { id: 2, value: "drama", label: "Drama" },
  },
  {
    id: 4,
    name: "Bullet Train",
    price: 80,
    genre: { id: 3, value: "comedy", label: "Comedy" },
  },
];

export default movies;
