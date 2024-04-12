import { Link, Outlet, useLocation } from "react-router-dom";

export default function EventDetails() {
  const { pathname, state } = useLocation();
  const eventSlug = state.eventSlug;
  const hasAttendeePath = pathname.includes("/attendee");
  return (
    <div className="">
      {!hasAttendeePath && (
        <Link
          state={{
            eventSlug,
          }}
          to={`${pathname}/attendee`}
        >
          Participantes
        </Link>
      )}
      <Outlet />
    </div>
  );
}
