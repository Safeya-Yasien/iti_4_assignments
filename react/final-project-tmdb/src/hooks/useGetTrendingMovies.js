import { useQuery } from "@tanstack/react-query";
import { api } from "@/api/api";

export const getTrendingMovies = async () => {
  const response = await api.get("/trending/movie/day");
  return response.data.results;
};

export const useGetTrendingMovies = () => {
  const { data: movies, isLoading } = useQuery({
    queryKey: ["movies"],
    queryFn: getTrendingMovies,
  });
  return { movies, isLoading };
};
