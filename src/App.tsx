import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import DetailPage from "./pages/DetailPage";
import Favorites from "./pages/Favorites";
import PopularMovies from "./pages/PopularMovies";
import TopRatedMovies from "./pages/TopRatedMovies";

export default function App() {
  return (
    <div className="bg-[#11152c] pb-5">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Favorites" element={<Favorites />}></Route>
          <Route path="/details/:id" element={<DetailPage />}></Route>
          <Route path="/popular-movies" element={<PopularMovies />}></Route>
          <Route path="/toprated-movies" element={<TopRatedMovies />}></Route>
          <Route path="/toprated-movies/details/:id" element={<DetailPage />} />
        </Routes>
      </Router>
    </div>
  );
}
