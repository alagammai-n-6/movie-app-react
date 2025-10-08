const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
const API_KEY = import.meta.env.VITE_API_KEY

export interface Movie {
    id: number;
    original_title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    title: string;
    vote_count: number;
}


export const fetchPopularMovies = async (page = 1): Promise<Movie[]> => {
    const res = await fetch(`${API_BASE_URL}/movie/popular?api_key=${API_KEY}&sort_by=popularity.asc&page=${page}`);
    const data = await res.json();
    return data.results;
}

export const searchMovies = async (): Promise<Movie[]> => {
    const res = await fetch(`${API_BASE_URL}/search/movie?api_key=${API_KEY}`);
    const data = await res.json();
    return data.results;
}

export const fetchRatedMovies = async () => {
    const resp = await fetch(`${API_BASE_URL}/movie/top_rated?api_key=${API_KEY}`);
    if (!resp.ok) throw new Error('Failed to fetch rated movies');
    const data = await resp.json();
    return data.results;
}