import { EventCardSkeleton } from "@/components/skeleton/event-card-skeleton";
import { SearchInputSkeleton } from "@/components/skeleton/search-input-skeleton";

export function EventsSkeleton() {
  return (
    <div className="flex flex-col justify-center ">
      <SearchInputSkeleton />
      <div className="py-5 lg:px-0 px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {Array.from({ length: 10 }).map((_, i) => (
          <EventCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
