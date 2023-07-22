import GenreType from "./genre-type";

export default interface MovieType {
  id: number;
  name: string;
  genre: GenreType;
  price: number;
}
