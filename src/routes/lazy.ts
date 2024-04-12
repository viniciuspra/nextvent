import { lazy } from "react";

const Home = lazy(() => import("@/pages/home"));
const Attendee = lazy(() => import("@/pages/attendee"));
const EventsCard = lazy(() => import("@/pages/events-card"));
const EventDetails = lazy(() => import("@/pages/event-details"));

export { Home, Attendee, EventsCard, EventDetails };
