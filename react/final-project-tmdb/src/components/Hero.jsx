const Hero = ({ movie }) => {
  if (!movie) return null;

  const backdropUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

  return (
    <section className="relative h-[85vh] w-full overflow-hidden flex items-center">
      {/* bg img */}
      <div className="absolute inset-0 -z-10">
        <img
          src={backdropUrl}
          alt={movie.title}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-transparent to-transparent" />
      </div>

      {/* info */}
      <div className="max-w-2xl space-y-6">
        <span className="inline-block bg-blue-600/20 text-blue-400 text-xs font-black px-3 py-1 rounded-full border border-blue-600/30 uppercase tracking-[0.2em]">
          Now Trending
        </span>

        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight drop-shadow-2xl">
          {movie.title}
        </h1>

        <p className="text-gray-300 text-lg md:text-xl line-clamp-3 max-w-xl drop-shadow">
          {movie.overview}
        </p>

        <div className="flex items-center gap-4 pt-4">
          <button className="bg-white text-black px-8 py-3 rounded-full font-black uppercase text-xs tracking-widest hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-xl">
            Watch Trailer
          </button>
          <button className="bg-white/10 backdrop-blur-md text-white px-8 py-3 rounded-full font-black uppercase text-xs tracking-widest border border-white/10 hover:bg-white/20 transition-all">
            More Info
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
