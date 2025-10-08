import { useParams } from "react-router-dom";
import { useMovies } from "../hooks/useMovies";
import { formatDate } from "../utils/formatDate";

const DetailPage = () => {
  const { id } = useParams();
  const { popularMovies, topRatedMovies } = useMovies();
  const movieId = Number(id);

  const DetailMovieData =
    popularMovies.find((m) => m.id === movieId) ||
    topRatedMovies.find((m) => m.id === movieId);

  //   console.log("DetailMovieData:", DetailMovieData);

  if (!DetailMovieData) return <p>Movie Not found</p>;

  const scorePercentage = Math.round(DetailMovieData.vote_average * 10);

  //color logic
  const progressColor =
    scorePercentage >= 70
      ? "bg-green-500"
      : scorePercentage >= 50
      ? "bg-yellow-500"
      : "bg-red-500";

  return (
    <div className="p-6 grid grid-cols-2 bg-white rounded-lg my-4 max-w-7xl mx-auto">
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${DetailMovieData.poster_path}`}
          className="min-w-[150px] w-full object-contain rounded-xl"
        />
      </div>
      <div className="p-3">
        <h3 className="text-xl font-semibold mt-2 mb-3">
          {DetailMovieData.original_title}
        </h3>
        <p className="text-gray-500 mb-2 font-bold">{scorePercentage}%</p>
        <div className="w-full bg-gray-200 rounded-full">
          <div
            className={`${progressColor} h-3 rounded-full transition-all duration-500 mb-3`}
            style={{ width: `${scorePercentage}%` }}
          ></div>
        </div>

        <p className="text-gray-500 mb-4">
          {formatDate(DetailMovieData.release_date)}
        </p>
        <p className="text-md text-gray-600">{DetailMovieData.overview}</p>
      </div>
    </div>
  );
};

export default DetailPage;
