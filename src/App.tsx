import { useState } from "react";
import MovieList from "./components/MovieList";

import movielist from "./constants/movies";
import genres from "./constants/genres";
import MovieType from "./entities/movie-type";
import MovieFilter from "./components/MovieFilter";
import MovieForm, { MovieFormData } from "./components/MovieForm";

export default function App() {
  const [movies, setMovies] = useState(movielist);
  const [selectedGenre, setSelectedGenre] = useState(0);

  const handleDelete = (id: number) => {
    setMovies(movies.filter((m) => m.id !== id));
  };

  const handleSubmit = (data: MovieFormData) => {
    const movie: MovieType = {
      id: movies.length + 1,
      name: data.name,
      price: data.price,
      genre: genres.find((g) => g.id === Number(data.genre))!,
    };
    setMovies([...movies, movie]);
  };

  const filteredMovies =
    selectedGenre === 0
      ? movies
      : movies.filter((m) => m.genre.id === selectedGenre);

  return (
    <div className="p-2">
      <div className="mb-3">
        <MovieForm onSubmit={handleSubmit} />
      </div>
      <div className="mb-3">
        <MovieFilter onSelectGenere={setSelectedGenre} />
      </div>
      <MovieList movies={filteredMovies} onDelete={handleDelete} />
    </div>
  );
}
