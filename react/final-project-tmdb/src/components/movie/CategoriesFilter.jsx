import { useGetCategories } from "@/hooks/useGetCategories";
import { Skeleton } from "@/components/ui/skeleton";

const CategoriesFilter = ({ selectedCategory, onCategoryChange }) => {
  const { categories, isLoading } = useGetCategories();

  // Skeleton Loading State
  if (isLoading)
    return (
      <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
        {[...Array(8)].map((_, i) => (
          <Skeleton
            key={i}
            className="h-9 w-24 rounded-full bg-white/5 shrink-0"
          />
        ))}
      </div>
    );

  return (
    <section className="space-y-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 space-y-16 ">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <h2 className="text-2xl font-black uppercase tracking-tighter italic shrink-0">
            Explore <span className="text-blue-600">Movies</span>
          </h2>

          {/* Categories Scrollable Area */}
          <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar scroll-smooth">
            {/* All Button */}
            <button
              onClick={() => onCategoryChange(null)}
              className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 whitespace-nowrap border cursor-pointer ${
                selectedCategory === null
                  ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/30"
                  : "bg-transparent border-white/10 text-gray-400 hover:border-white/30 hover:text-white"
              }`}
            >
              All
            </button>

            {/* Dynamic Categories */}
            {categories?.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onCategoryChange(cat.id)}
                className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 whitespace-nowrap border cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/30"
                    : "bg-transparent border-white/10 text-gray-400 hover:border-white/30 hover:text-white"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesFilter;
