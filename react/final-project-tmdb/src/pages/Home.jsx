import Hero from "@/components/Hero";
import TopRated from "@/components/movie/TopRated";
import TrendingMovies from "@/components/movie/TrendingMovies";
import { useGetTrendingMovies } from "@/hooks/useGetTrendingMovies";

const Home = () => {
  const { movies, isLoading } = useGetTrendingMovies();

  const featuredMovie = movies?.[0];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white ">
      <div className="container mx-auto px-6 sm:px-10 lg:px-14 relative z-20 space-y-16 pb-20">
        {!isLoading && <Hero movie={featuredMovie} />}

        <TrendingMovies />

        <TopRated />
      </div>
    </div>
  );
};

export default Home;
