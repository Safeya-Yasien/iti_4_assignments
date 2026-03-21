import { Link } from "react-router";

const MovieCard = ({ movie }) => {
  const imageBaseUrl = import.meta.env.VITE_TMDB_IMAGE_BASE_URL;
  const posterUrl = movie.poster_path
    ? `${imageBaseUrl}${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Poster";

  return (
    <Link
      to={`/movie/${movie.id}`}
      className="group relative flex flex-col bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2"
    >
      <div className="relative aspect-2/3 w-full overflow-hidden">
        <img
          src={posterUrl}
          alt={movie.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Rating Overlay */}
        <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md px-2 py-1 rounded-lg flex items-center gap-1 border border-white/10">
          <span className="text-yellow-400 text-xs">⭐</span>
          <span className="text-white text-xs font-bold">
            {movie.vote_average}
          </span>
        </div>

        <div className="absolute inset-0 bg-linear-to-t from-blue-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          <span className="bg-white text-black text-xs font-bold px-4 py-2 rounded-full uppercase tracking-tighter">
            View Details
          </span>
        </div>
      </div>

      {/* Movie Info */}
      <div className="p-3">
        <h3 className="text-sm font-semibold text-white truncate group-hover:text-blue-400 transition-colors">
          {movie.title}
        </h3>
        <div className="flex items-center justify-between mt-1">
          <p className="text-xs text-gray-500">{movie.release_date}</p>
          <span className="text-[10px] uppercase border border-gray-700 px-1.5 py-0.5 rounded text-gray-400">
            {movie.original_language}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
