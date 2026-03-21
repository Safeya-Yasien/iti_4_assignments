import MoviesList from "@/components/movie/MoviesList";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 space-y-16 pb-20">
        {/* Top Rated Grid */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-black uppercase tracking-tighter italic">
              Top Rated
            </h2>
            <div className="h-1 flex-1 bg-gray-600/20 mx-6 hidden md:block"></div>
          </div>
          <MoviesList />
        </section>
      </div>
    </div>
  );
};

export default Home;
