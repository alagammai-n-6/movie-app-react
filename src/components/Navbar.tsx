import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex items-center gap-3 justify-center py-3">
      <Link to="/" className="text-white">
        Home
      </Link>
      <div className="relative">
        <button
          className="text-white"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          Movies ▾
        </button>
        {isOpen && (
          <div className="absolute top-[30px] bg-white z-10 min-w-[200px]">
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link to="/toprated-movies">Top Rated Movies</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link to="/popular-movies">Popular Movies</Link>
              </li>
            </ul>
          </div>
        )}
      </div>

      <Link to="/Favorites" className="text-white">
        Favorites
      </Link>
    </nav>
  );
};

export default Navbar;
