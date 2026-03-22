import { api } from "@/api/api";
import { useQuery } from "@tanstack/react-query";

export const getCategories = async () => {
  const response = await api.get("/genre/movie/list");
  return response.data.genres;
};

export const useGetCategories = () => {
  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
  return { categories, isLoading };
};
