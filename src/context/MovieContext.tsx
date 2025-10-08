import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Movie } from "../api/api";

interface MovieContextType {
  favorites: Movie[];
  setFavorites: React.Dispatch<React.SetStateAction<Movie[]>>;
}

interface MovieProviderProps {
  children: ReactNode;
}

const MovieContext = createContext<MovieContextType | undefined>(undefined);

export const MovieProvider = ({ children }: MovieProviderProps) => {
  const [favorites, setFavorites] = useState<Movie[]>(() => {
    try {
      const stored = localStorage.getItem("item");
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error("Failed to parse favorites:", error);
      return [];
    }
  });
  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(favorites));
  }, [favorites]);
  return (
    <MovieContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </MovieContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error("useMovieContext must be used within a MovieProvider");
  }
  return context;
};
