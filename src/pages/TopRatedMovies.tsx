import React, { useEffect, useState } from "react";
import { useMovies } from "../hooks/useMovies";
import MovieCard from "../components/MovieCard";
import SortMovies from "../components/SortMovies";

const TopRatedMovies = () => {
  const { topRatedMovies } = useMovies();
  const [sortedArr, setSortedArr] = useState(topRatedMovies);
  const newArr = sortedArr.length > 0 ? sortedArr : topRatedMovies;

  return (
    <div className="bg-white rounded-lg p-4">
      <div className="grid grid-cols-[1fr_4fr]">
        <div>
          <SortMovies movieArray={topRatedMovies} setSortedArr={setSortedArr} />
        </div>
        <div className="grid grid-cols-4">
          <MovieCard movies={newArr} />
        </div>
      </div>
    </div>
  );
};

export default TopRatedMovies;
