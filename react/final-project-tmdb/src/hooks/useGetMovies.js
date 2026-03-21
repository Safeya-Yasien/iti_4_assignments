import { useQuery } from "@tanstack/react-query";
import { api } from "@/api/api";

export const getMovies = async () => {
  const response = await api.get("/trending/movie/day");
  return response.data.results;
};

export const getMovieDetails = async (id) => {
  const response = await api.get(`/movie/${id}`);
  return response.data;
};

export const useGetMovieDetails = (id) => {
  const {
    data: movie,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["movie", id],
    queryFn: () => getMovieDetails(id),
  });
  return { movie, isLoading, error };
};

export const useGetMovies = () => {
  const { data: movies, isLoading } = useQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
  });
  return { movies, isLoading };
};
