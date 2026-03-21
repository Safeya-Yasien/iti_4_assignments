import { Skeleton } from "../ui/skeleton";

const MovieSkeleton = () => {
  return (
    <div className="flex flex-col space-y-3 rounded-xl overflow-hidden bg-[#111] p-0 border border-white/5">
      <Skeleton className="aspect-2/3 w-full rounded-none bg-white/5" />

      <div className="p-3 space-y-2">
        <Skeleton className="h-4 w-3/4 bg-white/10" />
        <div className="flex justify-between items-center">
          <Skeleton className="h-3 w-1/4 bg-white/5" />
          <Skeleton className="h-4 w-8 bg-white/5 rounded-md" />
        </div>
      </div>
    </div>
  );
};
export default MovieSkeleton;
