import { AvatarGroup } from "@/components/avatar-group";
import { EventState } from "@/components/event-card";
import { Button } from "@/components/ui/button";
import { tickets } from "@/data/ticket-data";
import { Link, useLocation } from "react-router-dom";

export default function EventDetails() {
  const { pathname, state } = useLocation();
  const { avatars, coverImg, date, location, title } = state as EventState;
  const ticketsAvailable = tickets.map((ticket) => ticket.type);

  const ticketsFormatted = ticketsAvailable.filter((value, i, self) => {
    return self.indexOf(value) === i;
  });

  return (
    <div className="h-[700px] flex items-center justify-center gap-4">
      <div>
        <img src={coverImg} alt="" className="rounded-xl h-[500px]" />
      </div>
      <div className="w-1/2 h-4/5 flex flex-col justify-center items-center gap-10 bg-card border-2 rounded-xl lg:py-20 py-10">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold first-letter:uppercase">{title}</h1>
          <div className="flex items-center justify-end gap-1">
            <AvatarGroup avatars={avatars} maxToShow={4} />
            <p className="text-emerald-500 font-semibold">Participantes</p>
          </div>
        </div>
        <div className="w-full h-full flex flex-col justify-around">
          <div className="flex">
            <div className="w-1/2 flex flex-col items-center">
              <h3>Data</h3>
              <p>
                {date.format("DD")} de {date.format("MMMM")}
              </p>
            </div>
            <div className="w-1/2 flex flex-col items-center">
              <h3>Horário</h3>
              <p>{date.format("HH:mm A - HH:mm A")}</p>
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2 flex flex-col items-center">
              <h3>Tickets Disponíveis</h3>
              <p>
                {ticketsFormatted.map((ticket, i) => (
                  <span
                    key={i}
                    className={` ${
                      ticket.toLowerCase() === "vip"
                        ? "text-yellow-500"
                        : ticket.toLowerCase() === "premium"
                        ? "text-blue-500"
                        : "text-white"
                    }`}
                  >
                    {ticket}
                    <span className="text-white">
                      {i !== ticketsFormatted.length - 1 && ", "}
                    </span>
                  </span>
                ))}
              </p>
            </div>
            <div className="w-1/2 flex flex-col items-center">
              <h3>Local</h3>
              <p>{location}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button className="bg-primary-foreground text-secondary font-semibold">
            Participar
          </Button>
          <Button variant={"outline"}>
            <Link state={state} to={`${pathname}/attendee`}>
              Ver Participantes
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
