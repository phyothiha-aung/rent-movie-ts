import React from "react";
import MovieType from "../entities/movie-type";

interface Props {
  movies: MovieType[];
  onDelete: (id: number) => void;
}

const MovieList: React.FC<Props> = ({ movies, onDelete }) => {
  if (movies.length === 0) return null;
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Genre</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => (
          <tr key={movie.id}>
            <td>{movie.name}</td>
            <td>{movie.price}</td>
            <td>{movie.genre.label}</td>
            <td>
              <button
                onClick={() => onDelete(movie.id)}
                className="btn btn-outline-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>
            $
            {movies
              .reduce((accumulator, movie) => accumulator + movie.price, 0)
              .toFixed(2)}
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default MovieList;
