import MovieCard from "@/components/movie/MovieCard";
import { useSearch } from "@/hooks/useSearch";
import { useSearchParams } from "react-router";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const { data, isLoading } = useSearch(query);

  return (
    <div className="min-h-screen pt-28 px-6 md:px-14">
      <h1 className="text-2xl font-bold mb-8">
        Results for: <span className="text-main">{query}</span>
      </h1>

      {isLoading ? (
        <div className="flex justify-center py-20">Loading...</div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {data?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}

      {data?.results?.length === 0 && (
        <p className="text-gray-400">No movies or shows found for "{query}".</p>
      )}
    </div>
  );
};
export default Search;
