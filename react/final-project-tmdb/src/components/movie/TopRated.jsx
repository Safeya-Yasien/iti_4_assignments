import { useGetTopRatedMovies } from "@/hooks/useGetTopRated";
import MovieCard from "./MovieCard";
import MovieSkeleton from "./MovieSkeleton";

const TopRated = () => {
  const { movies, isLoading } = useGetTopRatedMovies();

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
    <section >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-black uppercase tracking-tighter italic">
          Top Rated
        </h2>
        <div className="h-1 flex-1 bg-gray-600/20 mx-6 hidden md:block"></div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};
export default TopRated;
