import { Skeleton } from "./ui/skeleton";

const SkeletonLoader = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Skeleton className="h-4 w-48 mb-8" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-4">
          <Skeleton className="aspect-square w-full rounded-2xl" />
          <div className="grid grid-cols-4 gap-4">
            <Skeleton className="aspect-square rounded-lg" />
            <Skeleton className="aspect-square rounded-lg" />
            <Skeleton className="aspect-square rounded-lg" />
            <Skeleton className="aspect-square rounded-lg" />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <Skeleton className="h-4 w-24 mb-3" />
            <Skeleton className="h-10 w-3/4 mb-4" />
            <div className="flex gap-2">
              <Skeleton className="h-6 w-16" />
              <Skeleton className="h-6 w-24" />
            </div>
          </div>
          <div className="space-y-2">
            <Skeleton className="h-12 w-40" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
          <Skeleton className="h-14 w-full rounded-xl mt-8" />
        </div>
      </div>
    </div>
  );
};
export default SkeletonLoader;
