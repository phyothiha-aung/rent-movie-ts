import React from "react";
import genres from "../constants/genres";

interface Props {
  onSelectGenere: (value: number) => void;
}

const MovieFilter: React.FC<Props> = ({ onSelectGenere }) => {
  return (
    <select
      className="form-select"
      onChange={(e) => onSelectGenere(Number(e.target.value))}
    >
      {genres.map((genre) => (
        <option key={genre.id} value={genre.id}>
          {genre.label}
        </option>
      ))}
    </select>
  );
};

export default MovieFilter;
