import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

const Favorites = () => {
  const { favorites } = useMovieContext();
  console.log("favorites list is:", favorites);
  return (
    <div className="p-4 max-w-7xl mx-auto my-5">
      <h1 className="text-lg font-semibold text-white underline">
        Favorites Movies
      </h1>
      <div className="my-4 flex items-start justify-start w-full overflow-auto whitespace-nowrap gap-4">
        <MovieCard movies={favorites} />
      </div>
    </div>
  );
};

export default Favorites;
