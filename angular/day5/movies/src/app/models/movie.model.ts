export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  release_date: string;
  genre_ids: number[];
  adult: boolean;
  popularity: number;
  original_language: string;
  original_title: string;
  video: boolean;
  vote_count: number;
  tagline?: string;
  status?: string;
  runtime?: number;
  budget?: number;
  genres?: { id: number; name: string }[];
  production_companies?: { id: number; name: string; logo_path: string; origin_country: string }[];
}

export interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
