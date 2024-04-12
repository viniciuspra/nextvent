import { Skeleton } from "@/components/ui/skeleton";

export function HeaderSkeleton() {
  return (
    <div className="min-h-screen xl:max-w-7xl lg:max-w-6xl md:max-w-5xl max-w-4xl px-8 py-5 mx-auto">
      <div className="w-full h-20 flex p-2 items-center gap-4 rounded-lg">
        <Skeleton className="w-12 h-12 rounded-lg aspect-square" />
        <div className="flex gap-4">
          <Skeleton className="h-4 w-[70px]" />
          <Skeleton className="h-4 w-[110px]" />
        </div>
      </div>
    </div>
  );
}
