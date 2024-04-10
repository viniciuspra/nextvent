import { Skeleton } from "@/components/ui/skeleton";

export function FilterInputSkeleton() {
  return (
    <div className="flex items-end justify-between w-full">
      <div className="flex items-end gap-4 pt-5">
        <Skeleton className="w-[220px] h-10" />
        <Skeleton className="h-9 w-80" />
      </div>
      <Skeleton className="w-[200px] h-5" />
    </div>
  );
}
