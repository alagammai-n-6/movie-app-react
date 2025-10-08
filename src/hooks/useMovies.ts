import { useEffect, useState } from "react";
import { fetchPopularMovies, fetchRatedMovies, type Movie } from "../api/api";

export const useMovies = () => {
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<Error | null>(null)
  useEffect(() => {
    const getMovies = async () => {
      try {
        const popular = await fetchPopularMovies();
        const rated = await fetchRatedMovies();
        setPopularMovies(popular);
        setTopRatedMovies(rated)
      } catch (err) {
        setError(err as Error);
      }
    };

    getMovies();
  }, []);

  return { popularMovies, topRatedMovies, error }
}