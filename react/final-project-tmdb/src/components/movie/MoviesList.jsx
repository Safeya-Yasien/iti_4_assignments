import { useGetMovies } from "@/hooks/useGetMovies";
import MovieCard from "./MovieCard";
import MovieSkeleton from "./MovieSkeleton";

const MoviesList = () => {
  const { movies, isLoading } = useGetMovies();
  console.log(movies);

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {[...Array(12)].map((_, index) => (
          <MovieSkeleton key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
      {movies?.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
export default MoviesList;
