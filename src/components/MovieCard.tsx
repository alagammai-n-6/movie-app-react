import React, { use, useEffect, useState } from "react";
import type { Movie } from "../api/api";
import { formatDate } from "../utils/formatDate";
import { Heart } from "lucide-react";
import { useMovieContext } from "../context/MovieContext";
import { useNavigate } from "react-router-dom";

interface Props {
  movies: Movie[];
  filteredMovie?: Movie[];
}

const MovieCard: React.FC<Props> = ({ movies, filteredMovie }) => {
  const naviagte = useNavigate();
  const { favorites, setFavorites } = useMovieContext();

  // useEffect(() => {
  //   console.log("Updated favorites:", favorites);
// }, [favorites]);

  const toggleFavorite = (movie: Movie) => {
    setFavorites((prev) => {
      const isFavorite = prev.find((m) => m.id === movie.id);
      if (isFavorite) {
        return prev.filter((m) => m.id !== movie.id);
      } else {
        return [...prev, movie];
      }
    });
  };

  const isFavorite = (movie: Movie) => {
    return favorites.some((m) => m.id === movie.id);
  };

  const handleClick = (id: number) => {
    naviagte(`details/${id}`);
  };

  const listToRender = filteredMovie?.length ? filteredMovie : movies;

  return (
    <>
      {listToRender.map((movie) => (
        <div
          key={movie.id}
          className="bg-white p-3 rounded-lg shadow-md relative mb-3 cursor-pointer"
          onClick={() => handleClick(movie.id)}
        >
          <div
            className="absolute right-[20px] top-[20px] bg-white w-[30px] h-[30px] leading-[30px] rounded-full text-center"
            onClick={() => toggleFavorite(movie)}
          >
            <Heart
              className="mx-auto h-full w-4 cursor-pointer"
              fill={isFavorite(movie) ? "red" : "none"}
              color={isFavorite(movie) ? "red" : "black"}
            />
          </div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="min-w-[150px] w-full h-[150px] object-cover"
          />
          <h3 className="text-sm font-semibold mt-2">{movie.title}</h3>
          <p className="text-xs text-gray-600">
            {formatDate(movie.release_date)}
          </p>
        </div>
      ))}
    </>
  );
};

export default MovieCard;
