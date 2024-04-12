import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import { Home, Attendee, EventsCard, EventDetails } from "@/routes/lazy";
import ErrorPage from "@/pages/404";

import { AttendeeTableSkeleton } from "@/components/skeleton/attendee-table-skeleton";
import { HeaderSkeleton } from "@/components/skeleton/header-skeleton";
import { EventsSkeleton } from "@/components/skeleton/events-skeleton";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<HeaderSkeleton />}>
        <Home />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/events",
        element: (
          <Suspense fallback={<EventsSkeleton />}>
            <EventsCard />
          </Suspense>
        ),
      },
      {
        path: "/events/:eventName",
        element: (
          <Suspense fallback={<EventsSkeleton />}>
            <EventDetails />
          </Suspense>
        ),
      },
      {
        path: "/events/:eventName/attendee",
        element: (
          <Suspense fallback={<AttendeeTableSkeleton />}>
            <Attendee />
          </Suspense>
        ),
      },
    ],
  },
]);
