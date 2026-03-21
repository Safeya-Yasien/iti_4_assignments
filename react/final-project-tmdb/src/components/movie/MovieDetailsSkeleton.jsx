import { Skeleton } from "../ui/skeleton";

const MovieDetailsSkeleton = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 pt-10">
      <Skeleton className="w-full md:w-1/3 aspect-2/3 rounded-2xl bg-white/5" />
      <div className="flex-1 space-y-6">
        <Skeleton className="h-12 w-3/4 bg-white/10" />
        <Skeleton className="h-6 w-1/2 bg-white/5" />
        <div className="space-y-4 pt-10">
          <Skeleton className="h-4 w-full bg-white/5" />
          <Skeleton className="h-4 w-full bg-white/5" />
          <Skeleton className="h-4 w-2/3 bg-white/5" />
        </div>
      </div>
    </div>
  );
};
export default MovieDetailsSkeleton;
