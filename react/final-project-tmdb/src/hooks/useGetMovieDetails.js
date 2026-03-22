import { api } from "@/api/api";
import { useQuery } from "@tanstack/react-query";

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
