import React, { useState } from "react";

const SortMovies = ({ movieArray, setSortedArr }) => {
  const [sortType, setSortType] = useState("asc");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const type = e.target.value;
    setSortType(type);
    const sorted = [...movieArray].sort((a, b) => {
      if (type === "asc")
        return a.original_title.localeCompare(b.original_title);
      if (type === "desc")
        return b.original_title.localeCompare(a.original_title);
      return 0;
    });
    setSortedArr(sorted);
  };

  return (
    <div className="p-3">
      <h1 className="font-semibold text-lg border-b-[4px] inline-block mb-4  border-double border-[#ccc]">
        Sort Results By:
      </h1>
      <div>
        <select
          onChange={handleChange}
          value={sortType}
          className="shadow-md rounded-lg p-2 border focus:outline-none border-[#ddd]"
        >
          <option value="asc">Title Asc</option>
          <option value="desc">Title Desc</option>
        </select>
      </div>
    </div>
  );
};

export default SortMovies;
