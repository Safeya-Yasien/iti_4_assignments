import { useParams, useNavigate } from "react-router";
import { useGetMovieDetails } from "@/hooks/useGetMovies";
import MovieDetailsSkeleton from "@/components/movie/MovieDetailsSkeleton";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { movie, isLoading, error } = useGetMovieDetails(id);

  if (isLoading) return <MovieDetailsSkeleton />;
  if (error)
    return (
      <div className="text-center py-20 text-red-500">Error loading movie.</div>
    );

  const posterUrl = `${import.meta.env.VITE_TMDB_IMAGE_BASE_URL}${movie.poster_path}`;

  return (
    <div className="relative min-h-screen text-white pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 space-y-16 pb-20">
        <div className="flex flex-col md:flex-row gap-10 pt-10">
          {/* Left: Poster */}
          <div className="w-full md:w-1/3 shrink-0">
            <img
              src={posterUrl}
              className="w-full rounded-2xl shadow-2xl shadow-blue-600/10 border border-white/5"
              alt={movie.title}
            />
          </div>

          {/* Right: Info */}
          <div className="flex-1 space-y-6">
            <div>
              <button
                onClick={() => navigate(-1)}
                className="mb-4 text-sm text-gray-400 hover:text-blue-500 flex items-center gap-2 transition-colors cursor-pointer"
              >
                ← Back
              </button>
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-2">
                {movie.title}
              </h1>
              <p className="text-blue-500 italic text-lg">{movie.tagline}</p>
            </div>

            <div className="flex flex-wrap gap-4 items-center text-sm font-medium">
              <span className="bg-blue-600 px-3 py-1 rounded-full">
                ⭐ {movie.vote_average.toFixed(1)}
              </span>
              <span className="text-gray-400">
                {movie.release_date.split("-")[0]}
              </span>
              <span className="text-gray-400">{movie.runtime} min</span>
              <div className="flex gap-2">
                {movie.genres.map((g) => (
                  <span
                    key={g.id}
                    className="border border-white/10 px-2 py-0.5 rounded text-[10px] uppercase"
                  >
                    {g.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold border-l-4 border-blue-600 pl-3">
                Overview
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg max-w-3xl">
                {movie.overview}
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <button className="bg-white text-black px-8 py-3 rounded-full font-black hover:bg-gray-200 transition-all uppercase text-xs tracking-widest">
                Play Trailer
              </button>
              <button className="bg-white/10 backdrop-blur-md text-white px-8 py-3 rounded-full font-black hover:bg-white/20 transition-all uppercase text-xs tracking-widest border border-white/10">
                Add to List
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
