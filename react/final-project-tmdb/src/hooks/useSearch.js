import { api } from "@/api/api";
import { useQuery } from "@tanstack/react-query";

export const useSearch = (query) => {
  return useQuery({
    queryKey: ["search", query],
    queryFn: async () => {
      const res = await api.get(`/search/movie?query=${query}`);
      return res.data.results;
    },
  });
};
