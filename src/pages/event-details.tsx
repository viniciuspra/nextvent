import { EventState } from "@/components/event-card";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

export default function EventDetails() {
  const { pathname, state } = useLocation();
  const eventSlug = state.eventSlug;
  const { id, avatars, coverImg, date, location, title } = state as EventState;
  return (
    <div className="h-[700px] flex items-center">
      <div className="">
        <img src={coverImg} alt="" className="h-96" />
        <Link
          state={{
            eventSlug,
          }}
          to={`${pathname}/attendee`}
        ></Link>
      </div>
      <div>
        <h1>{title}</h1>
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
