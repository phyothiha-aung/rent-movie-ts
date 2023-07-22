import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import genres from "../constants/genres";

const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  price: z.number({ invalid_type_error: "Age field is required" }).min(10),
  genre: z.enum(["1", "2", "3", "4"], {
    errorMap: () => ({ message: "Genre is required." }),
  }),
});

export type MovieFormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: MovieFormData) => void;
}

const MovieForm: React.FC<Props> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<MovieFormData>({ resolver: zodResolver(schema) });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-lable mb-1">
          Name
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name && (
          <p className="fs-5 text-danger">{errors.name.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="price" className="form-lable mb-1">
          Price
        </label>
        <input
          {...register("price", { valueAsNumber: true })}
          id="name"
          type="number"
          className="form-control"
        />
        {errors.price && (
          <p className="fs-5 text-danger">{errors.price.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="genres" className="form-lable mb-1">
          Genres
        </label>
        <select {...register("genre")} id="genre" className="form-select">
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id === 0 ? "" : genre.id}>
              {genre.id === 0 ? "" : genre.label}
            </option>
          ))}
        </select>
        {errors.genre && (
          <p className="fs-5 text-danger">{errors.genre.message}</p>
        )}
      </div>

      <button disabled={!isValid} type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default MovieForm;
