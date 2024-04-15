import { Header } from "@/components/header";
import { Ticket } from "@/components/ticket";
import { tickets } from "@/data/ticket-data";
import { Link, Outlet, useLocation } from "react-router-dom";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { eventos } from "@/data/events-data";
import { EventCard } from "@/components/event-card";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const { pathname } = useLocation();
  const showTickets = !pathname.includes("/events/");
  const showEventsPreview = !pathname.includes("/events");
  return (
    <div className="max-w-screen overflow-x-hidden bg-svg-background">
      <main className="min-h-screen max-w-7xl overflow-x-hidden py-10 px-8 mx-auto space-y-10">
        <Header />
        {showTickets && (
          <div className="bg-card rounded-lg border p-4 space-y-2 overflow-x-hidden">
            <h1 className="text-lg font-semibold bg-primary-foreground w-fit px-4 rounded-full text-secondary cursor-default border border-primary hover:bg-transparent hover:text-primary transition-colors">
              Seu(s) Ticket(s) de Evento
            </h1>
            <div className="p-2">
              <Carousel
                opts={{
                  align: "start",
                }}
                className="w-full"
              >
                <CarouselContent>
                  {tickets.map((ticket) => (
                    <CarouselItem
                      key={ticket.id}
                      className="md:basis-1/2 lg:basis-1/3 relative"
                    >
                      <Ticket
                        key={ticket.id}
                        date={ticket.date}
                        location={ticket.location}
                        title={ticket.title}
                        subtitle={ticket.subtitle}
                        type={ticket.type}
                        id={ticket.id}
                        price={ticket.price}
                        seatNumber={ticket.seatNumber}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="-left-5 w-12 h-12" />
                <CarouselNext className="-right-5 w-12 h-12" />
              </Carousel>
            </div>
          </div>
        )}
        <div className="overflow-x-hidden">
          <Outlet />
        </div>
        {showEventsPreview && (
          <div className="bg-card rounded-lg border p-4 relative space-y-2 overflow-x-hidden">
            <div className="flex justify-between items-center">
              <h1 className="text-lg font-semibold w-fit px-4 rounded-full cursor-default border border-primary-foreground bg-transparent text-primary-fborder-primary-foreground">
                Evento(s) Proximo(s) a você
              </h1>
              <Link
                to="/events"
                className="opacity-50 flex gap-2 pr-4 hover:scale-[.97] active:scale-95 transition-all"
              >
                Ver mais <ArrowRight />
              </Link>
            </div>
            <div className="p-2">
              <Carousel className="">
                <CarouselContent className="-ml-1 py-5 lg:px-0 px-2 gap-5">
                  {eventos.slice(0, 5).map((event) => (
                    <CarouselItem
                      key={event.id}
                      className="md:basis-1/2 lg:basis-1/3"
                    >
                      <EventCard
                        id={event.id}
                        title={event.title}
                        avatars={event.avatars}
                        coverImg={event.coverImg}
                        date={event.date}
                        location={event.location}
                        className="hover:shadow-none shadow-none hover:transform-none"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="-left-5 w-12 h-12" />
                <CarouselNext className="-right-5 w-12 h-12" />
              </Carousel>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
