import { useState } from "react";
import MovieCard from "../components/MovieCard";
import { useMovies } from "../hooks/useMovies";

const Home = () => {
  const { popularMovies, topRatedMovies } = useMovies();
  const [searchMovie, setSearchMovie] = useState("");
  const [filteredPopularMovie, setFilteredPopularMovie] =
    useState(popularMovies);
  const [filteredTopRatedMovie, setFilteredTopRatedMovie] =
    useState(topRatedMovies);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearchMovie(newValue);
    const searchTerm = newValue.toLowerCase();

    const filtered = popularMovies.filter((movie) =>
      movie.original_title.toLowerCase().includes(searchTerm)
    );

    setFilteredPopularMovie(filtered);

    const topRatedFilter = topRatedMovies.filter((m) =>
      m.original_title.toLowerCase().includes(searchTerm)
    );
    setFilteredTopRatedMovie(topRatedFilter);
  };

  return (
    <>
      <div className="text-center text-blue-600 text-4xl font-bold">
        Popular Movies and Top Rated Movies
      </div>

      <div className="my-4 text-center">
        <input
          type="text"
          placeholder="Search Movies..."
          className="p-2 rounded-md"
          onChange={handleChange}
          value={searchMovie}
        />
      </div>

      <div className="my-4 max-w-7xl mx-auto">
        <h3 className="text-amber-600 text-3xl font-semibold mb-3">
          Poular Movies
        </h3>
        <div className="flex items-start justify-start w-full overflow-auto whitespace-nowrap gap-4">
          <MovieCard
            movies={popularMovies}
            filteredMovie={filteredPopularMovie}
          />
        </div>
      </div>
      <div className="my-4 max-w-7xl mx-auto">
        <h3 className="text-amber-600 text-3xl font-semibold mb-3">
          TopRated Movies
        </h3>
        <div className="flex items-start justify-start w-full overflow-auto whitespace-nowrap gap-4">
          <MovieCard
            movies={topRatedMovies}
            filteredMovie={filteredTopRatedMovie}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
