import { EventCard } from "@/components/event-card";
import { SearchInput } from "@/components/search-input";
import { eventos } from "@/data/events-data";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function EventsCard() {
  return (
    <div className="flex flex-col justify-center space-y-4">
      <SearchInput title="Eventos" placeholder="Buscar evento..." />
      <div className="py-5 lg:px-0 px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {eventos.map((event) => (
          <EventCard
            key={event.id}
            id={event.id}
            title={event.title}
            avatars={event.avatars}
            coverImg={event.coverImg}
            date={event.date}
            location={event.location}
          />
        ))}
      </div>
      <div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
