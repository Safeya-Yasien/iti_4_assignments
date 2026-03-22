import { useQuery } from "@tanstack/react-query";
import { api } from "@/api/api";

export const getTopRatedMovies = async () => {
  const response = await api.get("/movie/top_rated");
  return response.data.results;
};

export const useGetTopRatedMovies = () => {
  const { data: movies, isLoading } = useQuery({
    queryKey: ["movies"],
    queryFn: getTopRatedMovies,
  });
  return { movies, isLoading };
};
